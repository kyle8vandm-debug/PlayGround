import * as THREE from 'three';
import {
  GRID, CELL, HALF, KEEP_I, KEEP_J, ENEMIES, WAVES, SPAWNS,
  towerStatsFor, garrisonFor, clampCell, cellKey, CAPTAIN_PALETTES,
} from './defs.js';
import { material, rand, clamp, damp, COLORS } from './util.js';
import { bloodBurst, dustBurst, sparkBurst, fireBurst } from './fx.js';

const UP = new THREE.Vector3(0, 1, 0);
const TMP = new THREE.Vector3();
const TMP2 = new THREE.Vector3();

class MinHeap {
  constructor() { this.a = []; }
  get size() { return this.a.length; }
  push(node) {
    const a = this.a;
    a.push(node);
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (a[p].f <= a[i].f) break;
      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }
  pop() {
    const a = this.a;
    const top = a[0];
    const last = a.pop();
    if (a.length) {
      a[0] = last;
      let i = 0;
      for (;;) {
        const l = i * 2 + 1, r = l + 1;
        let m = i;
        if (l < a.length && a[l].f < a[m].f) m = l;
        if (r < a.length && a[r].f < a[m].f) m = r;
        if (m === i) break;
        [a[m], a[i]] = [a[i], a[m]];
        i = m;
      }
    }
    return top;
  }
}

function structureMoveCost(st) {
  if (!st) return 1;
  switch (st.type) {
    case 'keep': return 1;
    case 'gate': return 3.4;
    case 'wall': return 8;
    case 'tower': return 6;
    default: return 5;
  }
}

export function findPath(castle, startI, startJ, targetI, targetJ) {
  startI = clampCell(startI); startJ = clampCell(startJ);
  const size = GRID * GRID;
  const start = startJ * GRID + startI;
  const target = targetJ * GRID + targetI;
  if (start === target) return [{ i: startI, j: startJ }];
  const g = new Float32Array(size).fill(Infinity);
  const came = new Int32Array(size).fill(-1);
  const closed = new Uint8Array(size);
  const heap = new MinHeap();
  g[start] = 0;
  const h = (i, j) => {
    const dx = Math.abs(i - targetI), dy = Math.abs(j - targetJ);
    return (dx + dy) + (Math.SQRT2 - 2) * Math.min(dx, dy);
  };
  heap.push({ idx: start, i: startI, j: startJ, f: h(startI, startJ) });
  const dirs = [
    [1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1],
    [1, 1, Math.SQRT2], [1, -1, Math.SQRT2], [-1, 1, Math.SQRT2], [-1, -1, Math.SQRT2],
  ];
  let found = false;
  while (heap.size) {
    const cur = heap.pop();
    if (closed[cur.idx]) continue;
    closed[cur.idx] = 1;
    if (cur.idx === target) { found = true; break; }
    for (const [dx, dy, move] of dirs) {
      const ni = cur.i + dx, nj = cur.j + dy;
      if (ni < 0 || nj < 0 || ni >= GRID || nj >= GRID) continue;
      const nidx = nj * GRID + ni;
      if (closed[nidx]) continue;
      const st = castle.cells[nidx];
      const cost = move * structureMoveCost(st);
      const ng = g[cur.idx] + cost;
      if (ng < g[nidx]) {
        g[nidx] = ng;
        came[nidx] = cur.idx;
        heap.push({ idx: nidx, i: ni, j: nj, f: ng + h(ni, nj) });
      }
    }
  }
  if (!found) return [];
  const path = [];
  let idx = target;
  let guard = 0;
  while (idx !== -1 && guard++ < size) {
    path.push({ i: idx % GRID, j: Math.floor(idx / GRID) });
    if (idx === start) break;
    idx = came[idx];
  }
  path.reverse();
  return path;
}

// ------------------------------------------------------------------
// Instanced crowd renderer
// ------------------------------------------------------------------
class CrowdRenderer {
  constructor(scene, team) {
    this.team = team;
    this.max = 100;
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, flatShading: true });
    const headMat = material(0xd2a981, { roughness: 0.9 });
    const shieldMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.88, flatShading: true });
    const weaponMat = material(0xb9c0c4, { roughness: 0.55, metalness: 0.35 });
    const add = (geo, mat) => {
      const m = new THREE.InstancedMesh(geo, mat, this.max);
      m.count = 0;
      m.castShadow = true;
      m.receiveShadow = true;
      m.frustumCulled = false;
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      scene.add(m);
      return m;
    };
    this.body = add(new THREE.CylinderGeometry(0.28, 0.38, 1.0, 6), bodyMat);
    this.head = add(new THREE.IcosahedronGeometry(0.24, 1), headMat);
    this.shield = add(new THREE.BoxGeometry(0.48, 0.62, 0.09), shieldMat);
    this.weapon = add(new THREE.BoxGeometry(0.075, 0.95, 0.075), weaponMat);
    this.dummy = new THREE.Object3D();
    this.color = new THREE.Color();
    this.white = new THREE.Color(0xffffff);
  }

  render(units) {
    const live = units.filter(u => u.hp > 0 || u.deathT < 1);
    const n = Math.min(this.max, live.length);
    for (let i = 0; i < n; i++) {
      const u = live[i];
      const dying = u.hp <= 0;
      const death = dying ? Math.min(1, u.deathT) : 0;
      const s = u.scale * (dying ? Math.max(0.02, 1 - death * 1.1) : 1);
      const bob = dying ? 0 : Math.sin(u.anim) * 0.06;
      const lean = dying ? death * 1.4 : (u.attackAnim > 0 ? Math.sin(u.attackAnim * Math.PI) * 0.15 : 0);
      const yaw = u.yaw;
      const yBase = 0.02 + bob;
      // body
      this.dummy.position.set(u.x, yBase + 0.58 * s, u.z);
      this.dummy.rotation.set(dying ? death * 1.35 : lean * 0.4, yaw, dying ? death * 0.7 : 0);
      this.dummy.scale.set(s, s, s);
      this.dummy.updateMatrix();
      this.body.setMatrixAt(i, this.dummy.matrix);
      // head
      this.dummy.position.set(u.x, yBase + 1.26 * s, u.z);
      this.dummy.rotation.set(0, yaw, 0);
      this.dummy.scale.set(s, s, s);
      this.dummy.updateMatrix();
      this.head.setMatrixAt(i, this.dummy.matrix);
      // shield (left side)
      const side = -0.44;
      const sx = Math.cos(yaw) * side;
      const sz = -Math.sin(yaw) * side;
      const shieldScale = u.shieldScale ?? 1;
      this.dummy.position.set(u.x + sx, yBase + 0.72 * s, u.z + sz);
      this.dummy.rotation.set(0, yaw + 0.12, dying ? death * 1.2 : 0);
      this.dummy.scale.set(s * shieldScale, s * shieldScale, s);
      this.dummy.updateMatrix();
      this.shield.setMatrixAt(i, this.dummy.matrix);
      // weapon (right side)
      const swing = u.attackAnim > 0 ? Math.sin(u.attackAnim * Math.PI) : 0;
      if (u.isRam) {
        this.dummy.position.set(u.x, yBase + 0.9 * s, u.z + 0.5 * s);
        this.dummy.rotation.set(0, yaw, Math.PI / 2);
        this.dummy.scale.set(s * 1.3, s * 2.5, s * 1.3);
      } else {
        const wx = Math.cos(yaw) * 0.46;
        const wz = -Math.sin(yaw) * 0.46;
        this.dummy.position.set(u.x + wx, yBase + 0.8 * s, u.z + wz);
        this.dummy.rotation.set(-swing * 1.3, yaw, 0.25 + swing * 0.5);
        this.dummy.scale.set(s, s, s);
      }
      this.dummy.updateMatrix();
      this.weapon.setMatrixAt(i, this.dummy.matrix);
      // colors
      const base = this.color.setHex(u.color);
      if (u.flash > 0) base.lerp(this.white, Math.min(0.85, u.flash));
      this.body.setColorAt(i, base);
      const sc = this.color.setHex(u.shieldColor ?? 0x72472f);
      if (u.flash > 0) sc.lerp(this.white, Math.min(0.7, u.flash * 0.8));
      this.shield.setColorAt(i, sc);
    }
    for (const m of [this.body, this.head, this.shield, this.weapon]) {
      m.count = n;
      m.instanceMatrix.needsUpdate = true;
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
    }
  }

  hide() {
    for (const m of [this.body, this.head, this.shield, this.weapon]) m.count = 0;
  }
}

// ------------------------------------------------------------------
// Captain
// ------------------------------------------------------------------
class Captain {
  constructor(scene, fx, audio) {
    this.scene = scene;
    this.fx = fx;
    this.audio = audio;
    this.group = this.build();
    this.group.visible = false;
    scene.add(this.group);
    this.ring = new THREE.Mesh(
      new THREE.RingGeometry(0.62, 0.78, 24),
      new THREE.MeshBasicMaterial({ color: 0xe7c37a, transparent: true, opacity: 0.65, side: THREE.DoubleSide, depthWrite: false }),
    );
    this.ring.rotation.x = -Math.PI / 2;
    this.ring.position.y = 0.08;
    this.scene.add(this.ring);
    this.ring.visible = false;
    this.x = 3; this.z = 7; this.yaw = 0;
    this.maxHp = 720; this.hp = 720;
    this.damage = 46;
    this.level = 1;
    this.alive = true;
    this.respawnTimer = 0;
    this.speed = 3.5;
    this.attackCd = 0;
    this.attackAnim = 0;
    this.anim = 0;
    this.command = new THREE.Vector3(3, 0, 7);
    this.hasCommand = false;
    this.target = null;
  }

  build() {
    const p = this.palette || CAPTAIN_PALETTES.steel;
    const g = new THREE.Group();
    const std = (color, opts = {}) => new THREE.MeshStandardMaterial({
      color, roughness: opts.roughness ?? 0.8, metalness: opts.metalness ?? 0.05,
      flatShading: opts.flat ?? true,
    });
    // legs
    this.legL = new THREE.Group(); this.legR = new THREE.Group();
    this.legL.position.set(-0.16, 0.62, 0);
    this.legR.position.set(0.16, 0.62, 0);
    this.legMat = std(0x3b4351, { roughness: 0.9 });
    const l1 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.62, 0.24), this.legMat);
    l1.position.y = -0.3;
    const l2 = l1.clone(); l1.castShadow = l2.castShadow = true;
    this.legL.add(l1); this.legR.add(l2);
    g.add(this.legL, this.legR);
    // body
    this.tunicMat = std(p.tunic, { roughness: 0.8 });
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.33, 0.4, 0.95, 7), this.tunicMat);
    body.position.y = 1.1; body.castShadow = true;
    g.add(body);
    this.plateMat = std(p.plate, { roughness: 0.45, metalness: 0.5 });
    const armor = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.5, 0.36), this.plateMat);
    armor.position.y = 1.22; armor.castShadow = true;
    g.add(armor);
    this.trimMat = std(p.trim, { roughness: 0.75 });
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.12, 0.44), this.trimMat);
    belt.position.y = 0.78; g.add(belt);
    // head
    const head = new THREE.Mesh(new THREE.IcosahedronGeometry(0.25, 1), std(0xd2a981, { roughness: 0.9 }));
    head.position.y = 1.86; head.castShadow = true; g.add(head);
    const helm = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.31, 0.34, 8), this.plateMat);
    helm.position.y = 2.03; helm.castShadow = true; g.add(helm);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.29, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2), this.plateMat);
    dome.position.y = 2.17; g.add(dome);
    this.plumeMat = std(p.plume, { roughness: 0.85 });
    const plume = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.55, 5), this.plumeMat);
    plume.position.set(0, 2.5, -0.05); plume.rotation.z = -0.15; g.add(plume);
    // cape
    this.capeMat = new THREE.MeshStandardMaterial({ color: p.cape, side: THREE.DoubleSide, roughness: 0.95 });
    this.cape = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.2, 3, 3), this.capeMat);
    this.cape.position.set(0, 1.3, -0.28);
    this.cape.rotation.x = 0.15;
    this.cape.castShadow = false;
    g.add(this.cape);
    // sword arm
    this.armR = new THREE.Group();
    this.armR.position.set(0.42, 1.35, 0.02);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.58, 0.15), this.tunicMat);
    arm.position.y = -0.24; arm.castShadow = true;
    this.armR.add(arm);
    const sword = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.0, 0.04), std(0xd7dde0, { metalness: 0.6, roughness: 0.35 }));
    sword.position.set(0, -0.9, 0.05); sword.castShadow = true;
    this.armR.add(sword);
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.06, 0.08), this.trimMat);
    guard.position.set(0, -0.36, 0.05); this.armR.add(guard);
    g.add(this.armR);
    // shield arm
    this.armL = new THREE.Group();
    this.armL.position.set(-0.44, 1.3, 0.02);
    const armL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.55, 0.14), this.tunicMat);
    armL.position.y = -0.2; armL.castShadow = true;
    this.armL.add(armL);
    this.shieldMat = std(p.cape, { roughness: 0.65 });
    const shield = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.09, 12), this.shieldMat);
    shield.rotation.z = Math.PI / 2;
    shield.position.set(-0.12, -0.12, 0.16);
    shield.castShadow = true;
    this.armL.add(shield);
    const boss = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), this.trimMat);
    boss.position.set(-0.19, -0.12, 0.16); this.armL.add(boss);
    g.add(this.armL);
    return g;
  }

  applyPalette(p) {
    if (!p) return;
    this.palette = p;
    this.tunicMat?.color.setHex(p.tunic);
    this.capeMat?.color.setHex(p.cape);
    this.plateMat?.color.setHex(p.plate);
    this.trimMat?.color.setHex(p.trim);
    this.plumeMat?.color.setHex(p.plume);
    this.shieldMat?.color.setHex(p.cape);
    for (const m of [this.tunicMat, this.capeMat, this.plateMat, this.trimMat, this.plumeMat, this.shieldMat]) {
      if (m) m.needsUpdate = true;
    }
  }

  get active() { return this.alive && this.group.visible; }

  reset(keepPos) {
    this.hp = this.maxHp;
    this.alive = true;
    this.respawnTimer = 0;
    this.x = keepPos.x + 2.4;
    this.z = keepPos.z + 6.4;
    this.command.set(this.x, 0, this.z);
    this.hasCommand = false;
    this.target = null;
    this.group.visible = true;
    this.ring.visible = true;
  }

  commandTo(pos) {
    if (!this.alive || !this.group.visible) return false;
    this.command.set(pos.x, 0, pos.z);
    this.hasCommand = true;
    return true;
  }

  takeDamage(amount) {
    if (!this.alive) return;
    this.hp = Math.max(0, this.hp - amount);
    if (this.hp <= 0) {
      this.alive = false;
      this.group.visible = false;
      this.ring.visible = false;
      this.respawnTimer = 16;
      bloodBurst(this.fx, new THREE.Vector3(this.x, 1, this.z), 0x8e2f27, 20);
      dustBurst(this.fx, new THREE.Vector3(this.x, 0.5, this.z), 0xbdae94, 18);
      this.audio?.defeat?.();
    }
  }

  update(dt, enemies, active, keepPos) {
    if (!this.group.visible) {
      if (!this.alive && active) {
        this.respawnTimer -= dt;
        if (this.respawnTimer <= 0) {
          this.alive = true;
          this.hp = this.maxHp;
          this.x = keepPos.x + 2.4; this.z = keepPos.z + 6.4;
          this.group.visible = true; this.ring.visible = true;
          this.command.set(this.x, 0, this.z); this.hasCommand = false;
        }
      }
      return;
    }
    if (!this.alive) return;
    this.attackCd = Math.max(0, this.attackCd - dt);
    this.attackAnim = Math.max(0, this.attackAnim - dt * 3.4);
    let target = null;
    let best = Infinity;
    for (const e of enemies) {
      if (e.hp <= 0) continue;
      const d = Math.hypot(e.x - this.x, e.z - this.z);
      if (d < best) { best = d; target = e; }
    }
    if (target && best < 10.5) {
      this.target = target;
      const dx = target.x - this.x, dz = target.z - this.z;
      const dist = Math.hypot(dx, dz);
      this.yaw = Math.atan2(dx, dz);
      if (dist > 1.75) {
        this.x += (dx / dist) * this.speed * dt;
        this.z += (dz / dist) * this.speed * dt;
        this.anim += dt * 8;
      } else if (this.attackCd <= 0) {
        this.attackCd = 0.78;
        this.attackAnim = 1;
        this.audio?.sword();
        // cleave nearby enemies
        let hits = 0;
        for (const e of enemies) {
          if (e.hp <= 0) continue;
          const d2 = Math.hypot(e.x - this.x, e.z - this.z);
          if (d2 < 3.1) {
            hits++;
            this.hitEnemy(e, this.damage + rand(-5, 8));
            if (e.hp <= 0) this.onKill?.(e);
          }
        }
        if (hits) sparkBurst(this.fx, new THREE.Vector3(target.x, 1.1, target.z), 0xffd27a, 8);
      }
    } else {
      this.target = null;
      const tx = this.hasCommand ? this.command.x : keepPos.x + 2.4;
      const tz = this.hasCommand ? this.command.z : keepPos.z + 6.4;
      const dx = tx - this.x, dz = tz - this.z;
      const dist = Math.hypot(dx, dz);
      if (dist > 0.7) {
        this.yaw = Math.atan2(dx, dz);
        this.x += (dx / dist) * this.speed * dt;
        this.z += (dz / dist) * this.speed * dt;
        this.anim += dt * 7;
      } else if (this.hasCommand) {
        this.hasCommand = false;
      }
    }
    // keep inside reasonable area
    this.x = clamp(this.x, -43, 43);
    this.z = clamp(this.z, -43, 43);
    this.group.position.set(this.x, 0, this.z);
    this.group.rotation.y = dampAngle(this.group.rotation.y, this.yaw, 12, dt);
    const bob = Math.sin(this.anim) * 0.045;
    this.group.position.y = bob;
    this.legL.rotation.x = Math.sin(this.anim) * 0.4;
    this.legR.rotation.x = -Math.sin(this.anim) * 0.4;
    this.armR.rotation.x = -this.attackAnim * 2.3;
    this.armR.rotation.z = -0.2 + this.attackAnim * 0.8;
    this.armL.rotation.x = -0.15 + Math.sin(this.anim * 0.7) * 0.05;
    this.cape.rotation.x = 0.18 + Math.sin(this.anim * 0.8) * 0.1 + Math.min(0.6, Math.abs(Math.sin(this.anim * 0.4)) * 0.3);
    this.ring.position.set(this.x, 0.07, this.z);
    this.ring.rotation.z += dt * 0.4;
    this.ring.material.opacity = 0.4 + Math.sin(performance.now() * 0.004) * 0.12;
  }

  hitEnemy(e, amount) { e.hp = Math.max(0, e.hp - amount); e.flash = 1; }
}

function dampAngle(a, b, lambda, dt) {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return a + d * (1 - Math.exp(-lambda * dt));
}

// ------------------------------------------------------------------
// Combat
// ------------------------------------------------------------------
export class Combat {
  constructor(scene, castle, fx, audio, callbacks = {}) {
    this.scene = scene;
    this.castle = castle;
    this.fx = fx;
    this.audio = audio;
    this.callbacks = callbacks;
    this.enemyCrowd = new CrowdRenderer(scene, 'enemy');
    this.defenderCrowd = new CrowdRenderer(scene, 'defender');
    this.enemies = [];
    this.defenders = [];
    this.queue = [];
    this.projectiles = [];
    this.active = false;
    this.waveNumber = 0;
    this.time = 0;
    this.allSpawned = true;
    this.boss = null;
    this.hornTimer = 0;
    this.mode = 'wave';
    this.dungeon = null;
    this.totalEnemies = 0;
    this.hero = new Captain(scene, fx, audio);
    this.hero.onKill = (e) => this.killEnemy(e);
    this.commandMarker = new THREE.Mesh(
      new THREE.RingGeometry(0.65, 1.05, 32),
      new THREE.MeshBasicMaterial({ color: 0xf0d493, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false }),
    );
    this.commandMarker.rotation.x = -Math.PI / 2;
    this.commandMarker.position.y = 0.09;
    this.commandMarker.visible = false;
    this.scene.add(this.commandMarker);
    this.markerTime = 0;

    this.arrowMesh = this.initProjectileMesh(new THREE.CylinderGeometry(0.035, 0.035, 0.8, 4), 0xcfd2d4, 90);
    this.boltMesh = this.initProjectileMesh(new THREE.CylinderGeometry(0.06, 0.06, 1.3, 4), 0x6f6656, 24);
    this.boulderMesh = this.initProjectileMesh(new THREE.IcosahedronGeometry(0.34, 0), 0x8d8171, 16);
    this.projectileDummy = new THREE.Object3D();
    this.q = new THREE.Quaternion();
  }

  initProjectileMesh(geo, color, max) {
    const m = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.25, flatShading: true }), max);
    m.count = 0;
    m.frustumCulled = false;
    m.castShadow = false;
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(m);
    return m;
  }

  startWave(n, callbacks = {}) {
    this.callbacks = { ...this.callbacks, ...callbacks };
    this.clear();
    this.mode = 'wave';
    this.dungeon = null;
    this.waveNumber = n;
    this.active = true;
    this.time = 0;
    this.allSpawned = false;
    this.totalSpawned = 0;
    const wave = WAVES[n - 1] || WAVES[WAVES.length - 1];
    const spawnIdxs = wave.boss ? [0, 1, 2] : [n % 3, (n + 1) % 3];
    this.queueEncounter(wave.comp, spawnIdxs, ['warlord'], false, 1.0 - Object.values(wave.comp).reduce((a, b) => a + b, 0) * 0.008);
    this.setupEncounter();
  }

  startDungeon(dungeon, callbacks = {}) {
    if (!dungeon) return;
    this.callbacks = { ...this.callbacks, ...callbacks };
    this.clear();
    this.mode = 'dungeon';
    this.dungeon = dungeon;
    this.waveNumber = 4 + dungeon.tier * 2;
    this.active = true;
    this.time = 0;
    this.allSpawned = false;
    this.totalSpawned = 0;
    const comp = { ...dungeon.comp, [dungeon.boss]: 1 };
    this.queueEncounter(comp, [0, 1, 2], [dungeon.boss], true, 0.62);
    this.setupEncounter();
  }

  queueEncounter(comp, spawnIdxs, bossTypes, noScaleBoss, spacing = 0.6) {
    const list = [];
    let idx = 0;
    for (const [type, count] of Object.entries(comp)) {
      for (let k = 0; k < count; k++) {
        list.push({ type, spawn: spawnIdxs[idx % spawnIdxs.length] });
        idx++;
      }
    }
    const bossSet = new Set(bossTypes || []);
    const bosses = list.filter(e => bossSet.has(e.type));
    const rest = list.filter(e => !bossSet.has(e.type));
    for (let i = rest.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [rest[i], rest[j]] = [rest[j], rest[i]];
    }
    const ordered = [...rest, ...bosses];
    this.totalEnemies = ordered.length;
    const step = Math.max(0.46, spacing);
    this.queue = ordered.map((e, i) => ({
      ...e,
      isBoss: bossSet.has(e.type),
      noScale: noScaleBoss && bossSet.has(e.type),
      delay: 0.65 + i * step + rand(-0.18, 0.22),
    })).sort((a, b) => a.delay - b.delay);
  }

  setupEncounter() {
    this.spawnDefenders();
    const keep = this.castle.centerOf(this.castle.structures.find(s => s.type === 'keep') || { i: KEEP_I, j: KEEP_J, w: 4, h: 4 });
    this.hero.reset(keep);
    this.hero.maxHp = Math.round(720 * (this.callbacks.heroHpMult || 1));
    this.hero.hp = this.hero.maxHp;
    this.hero.damage = 46 * (this.callbacks.heroDmgMult || 1);
    this.boss = null;
  }

  spawnDefenders() {
    for (const d of this.defenders) this.defenderCrowdCull(d);
    this.defenders = [];
    const barracks = this.castle.structures.filter(s => s.type === 'barracks');
    let count = 0;
    const posts = [];
    for (const b of barracks) {
      const c = this.castle.centerOf(b);
      const n = garrisonFor('barracks', b.level);
      for (let k = 0; k < n && count < 8; k++) {
        const a = (k / n) * Math.PI * 2;
        posts.push({ x: c.x + Math.cos(a) * (2.2 + (count % 2) * 0.8), z: c.z + Math.sin(a) * 2.2 });
        count++;
      }
    }
    const keepSt = this.castle.structures.find(s => s.type === 'keep');
    const keep = keepSt ? this.castle.centerOf(keepSt) : { x: 0, z: 0 };
    if (!posts.length) {
      for (let k = 0; k < 2; k++) posts.push({ x: keep.x + (k ? 2.5 : -2.5), z: keep.z + 6.2 });
      count = 2;
    }
    for (let k = 0; k < count; k++) {
      const post = posts[k % posts.length];
      const d = {
        x: post.x + rand(-0.4, 0.4), z: post.z + rand(-0.4, 0.4), yaw: 0,
        hp: 155, maxHp: 155, scale: 1.02, radius: 0.42,
        color: 0x3d6b94, shieldColor: 0x31566f, shieldScale: 1.0,
        anim: Math.random() * 6, attackAnim: 0, flash: 0, deathT: 0,
        attackCd: rand(0, 0.4), target: null, post, speed: 2.45, damage: 13,
        isHero: false,
      };
      this.defenders.push(d);
    }
  }

  defenderCrowdCull() {}

  spawnEnemy(type, spawnIdx, hpMult = 1, dmgMult = 1) {
    const def = ENEMIES[type];
    if (!def) return;
    const spawn = SPAWNS[spawnIdx % SPAWNS.length];
    const x = spawn.x + rand(-2.2, 2.2);
    const z = spawn.z + rand(-2.2, 2.2);
    const si = clampCell(Math.round((x + HALF) / CELL - 0.5));
    const sj = clampCell(Math.round((z + HALF) / CELL - 0.5));
    const path = findPath(this.castle, si, sj, KEEP_I + 2, KEEP_J + 2);
    const e = {
      x, z, yaw: Math.atan2(-x, -z), hp: def.hp * hpMult, maxHp: def.hp * hpMult,
      type, def, scale: def.scale, radius: def.radius,
      color: def.color, shieldColor: type === 'shield' ? 0x6c3a28 : 0x72472f,
      shieldScale: def.shield || 0.001,
      anim: Math.random() * 6, attackAnim: 0, flash: 0, deathT: 0,
      speed: def.speed, damage: def.damage * dmgMult, attackCd: rand(0, 0.7),
      structureDamage: def.structureDamage || 1, siege: !!def.siege, boss: !!def.boss,
      isRam: type === 'ram',
      path, pathIdx: 1, pathTimer: rand(1.5, 3), targetStructure: null,
      combatTarget: null, state: 'walk',
    };
    this.enemies.push(e);
    this.totalSpawned++;
    if (e.boss) {
      this.boss = e;
      this.callbacks.onBossSpawn?.(e);
    }
    dustBurst(this.fx, new THREE.Vector3(x, 0.4, z), 0xbcae94, 10, 1.6);
  }

  update(dt, gameBonuses = {}) {
    this.time += dt;
    this.hornTimer = Math.max(0, this.hornTimer - dt);
    if (this.markerTime > 0) {
      this.markerTime -= dt;
      this.commandMarker.visible = true;
      this.commandMarker.scale.setScalar(1 + (1 - this.markerTime / 1.2) * 1.6);
      this.commandMarker.material.opacity = Math.max(0, this.markerTime / 1.2) * 0.8;
    } else {
      this.commandMarker.visible = false;
    }
    if (!this.active) {
      this.hero.group.visible = false;
      this.hero.ring.visible = false;
      this.enemyCrowd.render(this.enemies);
      this.updateDeaths(dt);
      this.renderProjectiles(dt, false);
      return;
    }

    // spawn queue
    while (this.queue.length && this.queue[0].delay <= this.time) {
      const item = this.queue.shift();
      const hpMult = item.noScale ? 1 : 1 + (this.waveNumber - 1) * 0.11;
      const dmgMult = item.noScale ? 1 : 1 + (this.waveNumber - 1) * 0.075;
      this.spawnEnemy(item.type, item.spawn, hpMult, dmgMult);
    }
    this.allSpawned = this.queue.length === 0;

    for (const e of this.enemies) {
      if (e.hp <= 0) continue;
      this.updateEnemy(e, dt);
    }
    this.updateDefenders(dt);
    const keepSt = this.castle.structures.find(s => s.type === 'keep');
    const keepPos = keepSt ? this.castle.centerOf(keepSt) : { x: 0, z: 0 };
    this.hero.update(dt, this.enemies, this.active, keepPos);
    this.updateTowers(dt, gameBonuses);
    this.renderProjectiles(dt, true);
    this.updateDeaths(dt);
    this.enemyCrowd.render(this.enemies);
    this.defenderCrowd.render(this.defenders);
    this.heroCapeWave(dt);

    if (this.allSpawned && !this.enemies.some(e => e.hp > 0)) {
      this.active = false;
      this.hero.group.visible = false;
      this.hero.ring.visible = false;
      if (this.mode === 'dungeon' && this.dungeon) {
        this.callbacks.onDungeonComplete?.(this.dungeon);
      } else {
        this.callbacks.onWaveComplete?.(this.waveNumber);
      }
    }
  }

  heroCapeWave(dt) {}

  updateEnemy(e, dt) {
    e.flash = Math.max(0, e.flash - dt * 4.5);
    e.attackAnim = Math.max(0, e.attackAnim - dt * 3.2);
    e.attackCd = Math.max(0, e.attackCd - dt);
    e.pathTimer -= dt;
    e.anim += dt * (e.speed * 2.2);
    if (e.siege) e.combatTarget = null;

    // find a defender or the captain to fight
    if (!e.siege) {
      let best = null, bd = 5.2;
      for (const d of this.defenders) {
        if (d.hp <= 0) continue;
        const dist = Math.hypot(d.x - e.x, d.z - e.z);
        if (dist < bd) { bd = dist; best = d; }
      }
      if (this.hero.active) {
        const hd = Math.hypot(this.hero.x - e.x, this.hero.z - e.z);
        if (hd < 6.2 && hd < bd) { bd = hd; best = this.hero; }
      }
      if (best) e.combatTarget = best;
      else if (e.combatTarget && (e.combatTarget.hp <= 0 || Math.hypot(e.combatTarget.x - e.x, e.combatTarget.z - e.z) > 8.5)) e.combatTarget = null;
    }

    if (e.combatTarget) {
      const t = e.combatTarget;
      const isHero = t === this.hero;
      if (t.hp <= 0) { e.combatTarget = null; }
      else {
        const dx = t.x - e.x, dz = t.z - e.z;
        const dist = Math.hypot(dx, dz);
        e.yaw = dampAngle(e.yaw, Math.atan2(dx, dz), 9, dt);
        const reach = 1.65 + e.radius;
        if (dist > reach) {
          this.moveEnemy(e, t.x, t.z, dist, dt);
        } else if (e.attackCd <= 0) {
          e.attackCd = e.def.cooldown;
          e.attackAnim = 1;
          this.audio?.hit();
          if (isHero) this.hero.takeDamage(e.damage * 1.1);
          else {
            t.hp = Math.max(0, t.hp - e.damage);
            t.flash = 1;
            bloodBurst(this.fx, new THREE.Vector3(t.x, 1, t.z), 0x7d2a22, 6);
          }
        }
        return;
      }
    }

    // structure target from path
    let st = e.targetStructure;
    if (st && st.hp <= 0) { e.targetStructure = null; st = null; }
    if (!st && e.path && e.pathIdx < e.path.length) {
      const cell = e.path[e.pathIdx];
      const s = this.castle.getStructureAt(cell.i, cell.j);
      if (s && s.hp > 0) {
        e.targetStructure = s;
        st = s;
      }
    }
    if (st) {
      const c = this.castle.centerOf(st);
      const dx = c.x - e.x, dz = c.z - e.z;
      const dist = Math.hypot(dx, dz);
      e.yaw = dampAngle(e.yaw, Math.atan2(dx, dz), 9, dt);
      const reach = Math.max(st.w, st.h) * CELL * 0.48 + e.radius + 0.35;
      if (dist > reach) {
        this.moveEnemy(e, c.x, c.z, dist, dt);
      } else if (e.attackCd <= 0) {
        e.attackCd = e.def.cooldown;
        e.attackAnim = 1;
        this.castle.damage(st, e.damage * e.structureDamage, 'enemy');
        this.audio?.hit();
        if (e.isRam) {
          dustBurst(this.fx, new THREE.Vector3(c.x, 1.6, c.z), 0xb7a98e, 10, 2.6);
          this.audio?.build();
        }
      }
      return;
    }

    // path follow / recompute
    if (!e.path || !e.path.length || e.pathTimer <= 0) {
      const ci = Math.floor((e.x + HALF) / CELL);
      const cj = Math.floor((e.z + HALF) / CELL);
      e.path = findPath(this.castle, ci, cj, KEEP_I + 2, KEEP_J + 2);
      e.pathIdx = 1;
      e.pathTimer = rand(2.4, 4);
    }
    if (!e.path || e.pathIdx >= e.path.length) {
      const keep = this.castle.structures.find(s => s.type === 'keep');
      if (keep) {
        const c = this.castle.centerOf(keep);
        const dx = c.x - e.x, dz = c.z - e.z;
        const dist = Math.hypot(dx, dz);
        if (dist > 6.8) this.moveEnemy(e, c.x, c.z, dist, dt);
        else if (e.attackCd <= 0) {
          e.attackCd = e.def.cooldown;
          e.attackAnim = 1;
          this.castle.damage(keep, e.damage * e.structureDamage, 'enemy');
        }
      }
      return;
    }
    const cell = e.path[e.pathIdx];
    const cx = (cell.i + 0.5) * CELL - HALF;
    const cz = (cell.j + 0.5) * CELL - HALF;
    const dx = cx - e.x, dz = cz - e.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 0.5) {
      e.pathIdx++;
      return;
    }
    e.yaw = dampAngle(e.yaw, Math.atan2(dx, dz), 8, dt);
    this.moveEnemy(e, cx, cz, dist, dt);
  }

  moveEnemy(e, tx, tz, dist, dt) {
    let mx = (tx - e.x) / Math.max(0.001, dist);
    let mz = (tz - e.z) / Math.max(0.001, dist);
    // separation
    for (const o of this.enemies) {
      if (o === e || o.hp <= 0) continue;
      const dx = e.x - o.x, dz = e.z - o.z;
      const d2 = dx * dx + dz * dz;
      const minD = (e.radius + o.radius) * 1.55;
      if (d2 < minD * minD && d2 > 0.0001) {
        const d = Math.sqrt(d2);
        mx += (dx / d) * 0.55;
        mz += (dz / d) * 0.55;
      }
    }
    const len = Math.hypot(mx, mz) || 1;
    mx /= len; mz /= len;
    const slow = e.combatTarget ? 0.7 : 1;
    e.x += mx * e.speed * slow * dt;
    e.z += mz * e.speed * slow * dt;
    // keep on island
    const r = Math.hypot(e.x, e.z);
    if (r > 47) { e.x *= 47 / r; e.z *= 47 / r; }
  }

  updateDefenders(dt) {
    for (const d of this.defenders) {
      if (d.hp <= 0) { d.deathT += dt * 2.4; continue; }
      d.flash = Math.max(0, d.flash - dt * 4);
      d.attackAnim = Math.max(0, d.attackAnim - dt * 3.2);
      d.attackCd = Math.max(0, d.attackCd - dt);
      let best = null, bd = 23;
      for (const e of this.enemies) {
        if (e.hp <= 0) continue;
        const dist = Math.hypot(e.x - d.x, e.z - d.z);
        if (dist < bd) { bd = dist; best = e; }
      }
      if (best) {
        const dx = best.x - d.x, dz = best.z - d.z;
        const dist = Math.hypot(dx, dz);
        d.yaw = dampAngle(d.yaw, Math.atan2(dx, dz), 9, dt);
        if (dist > 1.55) {
          d.x += (dx / dist) * d.speed * dt;
          d.z += (dz / dist) * d.speed * dt;
          d.anim += dt * 7;
        } else if (d.attackCd <= 0) {
          d.attackCd = 0.9;
          d.attackAnim = 1;
          best.hp = Math.max(0, best.hp - d.damage);
          best.flash = 1;
          this.audio?.sword();
          if (best.hp <= 0) this.killEnemy(best);
        }
      } else {
        const dx = d.post.x - d.x, dz = d.post.z - d.z;
        const dist = Math.hypot(dx, dz);
        if (dist > 0.6) {
          d.yaw = dampAngle(d.yaw, Math.atan2(dx, dz), 8, dt);
          d.x += (dx / dist) * d.speed * 0.7 * dt;
          d.z += (dz / dist) * d.speed * 0.7 * dt;
          d.anim += dt * 6;
        }
      }
    }
  }

  killEnemy(e) {
    if (e.hp <= 0 && e.deathT === 0) {
      e.deathT = 0.001;
      bloodBurst(this.fx, new THREE.Vector3(e.x, 0.8, e.z), 0x7d2a22, e.boss ? 30 : 9);
      if (e.boss) this.callbacks.onBossKilled?.(e);
      this.callbacks.onKill?.(e);
    }
  }

  updateDeaths(dt) {
    for (const e of this.enemies) {
      if (e.hp <= 0) {
        if (e.deathT <= 0) e.deathT = 0.001;
        e.deathT = Math.min(1, e.deathT + dt * 2.2);
      }
    }
    this.enemies = this.enemies.filter(e => e.hp > 0 || e.deathT < 1);
    for (const d of this.defenders) if (d.hp <= 0) d.deathT += dt;
    this.defenders = this.defenders.filter(d => d.hp > 0 || d.deathT < 1);
  }

  updateTowers(dt, b = {}) {
    const dmgMult = (b.towerDamageMult || 1) * (this.hornTimer > 0 ? 1.25 : 1);
    const rateMult = (b.fireRateMult || 1) * (this.hornTimer > 0 ? 1.2 : 1);
    for (const st of this.castle.structures) {
      const stats = towerStatsFor(st.type, st.level);
      if (!stats || st.hp <= 0) continue;
      st.cd = (st.cd || 0) - dt;
      st.fireAnim = Math.max(0, (st.fireAnim || 0) - dt * 2.6);
      const c = this.castle.centerOf(st);
      let best = null, bd = stats.range;
      for (const e of this.enemies) {
        if (e.hp <= 0) continue;
        const d = Math.hypot(e.x - c.x, e.z - c.z);
        const bonus = e.siege || e.boss ? 3.5 : 0;
        if (d - bonus < bd) { bd = d - bonus; best = e; }
      }
      if (best && st.aimGroup) {
        const targetYaw = Math.atan2(best.x - c.x, best.z - c.z);
        st.aimGroup.rotation.y = dampAngle(st.aimGroup.rotation.y, targetYaw, 5, dt);
      }
      if (!best || st.cd > 0) continue;
      const siegeBoost = (st.type === 'ballista' || st.type === 'catapult') ? (b.siegeDamageMult || 1) : 1;
      const dmg = stats.damage * dmgMult * siegeBoost;
      st.cd = stats.cooldown / rateMult;
      this.fireTower(st, stats, best, dmg, c);
      if (st.arm) st.fireAnim = 1;
    }
  }

  fireTower(st, stats, target, damage, c) {
    const start = new THREE.Vector3(c.x, st.muzzleY || 3, c.z);
    const end = new THREE.Vector3(target.x, 0.8, target.z);
    if (stats.kind === 'catapult') {
      this.projectiles.push({
        kind: 'boulder', start, end, t: 0, dur: 1.15 + start.distanceTo(end) / 55,
        arc: 7 + start.distanceTo(end) * 0.08, damage, aoe: 3.4, target: null, delay: 0,
      });
      this.audio?.bolt();
    } else if (stats.kind === 'ballista') {
      this.projectiles.push({ kind: 'bolt', start, end, t: 0, dur: 0.34, arc: 0.6, damage, aoe: 0, target, delay: 0 });
      this.audio?.bolt();
    } else {
      this.projectiles.push({ kind: 'arrow', start, end, t: 0, dur: 0.4, arc: 1.2, damage, aoe: 0, target, delay: 0 });
      this.audio?.arrow();
    }
  }

  castVolley(center) {
    const n = 20;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * 4.6;
      const ex = center.x + Math.cos(a) * r;
      const ez = center.z + Math.sin(a) * r;
      this.projectiles.push({
        kind: 'arrow',
        start: new THREE.Vector3(ex + rand(-2, 2), 26 + rand(0, 6), ez + rand(-2, 2)),
        end: new THREE.Vector3(ex, 0.4, ez),
        t: 0, dur: 0.55 + Math.random() * 0.5, arc: 0, damage: 34, aoe: 1.7,
        target: null, delay: Math.random() * 0.55, volley: true,
      });
    }
    this.audio?.arrow();
  }

  damageArea(pos, radius, damage) {
    for (const e of this.enemies) {
      if (e.hp <= 0) continue;
      if (Math.hypot(e.x - pos.x, e.z - pos.z) <= radius) {
        e.hp = Math.max(0, e.hp - damage);
        e.flash = 1;
        if (e.hp <= 0) this.killEnemy(e);
      }
    }
    for (const d of this.defenders) {
      if (d.hp <= 0) continue;
      // friendly fire disabled
    }
  }

  renderProjectiles(dt, active) {
    if (active) {
      for (let i = this.projectiles.length - 1; i >= 0; i--) {
        const p = this.projectiles[i];
        if (p.delay > 0) { p.delay -= dt; continue; }
        p.t += dt / p.dur;
        if (p.t >= 1) {
          this.impact(p);
          this.projectiles.splice(i, 1);
        }
      }
    }
    let ai = 0, bi = 0, ci = 0;
    const up = UP;
    for (const p of this.projectiles) {
      if (p.delay > 0) continue;
      const t = Math.min(1, p.t);
      const x = p.start.x + (p.end.x - p.start.x) * t;
      const z = p.start.z + (p.end.z - p.start.z) * t;
      const baseY = p.start.y + (p.end.y - p.start.y) * t;
      const y = baseY + Math.sin(t * Math.PI) * p.arc;
      const t2 = Math.min(1, t + 0.02);
      const nx = p.start.x + (p.end.x - p.start.x) * t2;
      const nz = p.start.z + (p.end.z - p.start.z) * t2;
      const ny = p.start.y + (p.end.y - p.start.y) * t2 + Math.sin(t2 * Math.PI) * p.arc;
      TMP.set(nx - x, ny - y, nz - z).normalize();
      this.q.setFromUnitVectors(up, TMP.lengthSq() > 0 ? TMP : up);
      this.projectileDummy.position.set(x, y, z);
      this.projectileDummy.quaternion.copy(this.q);
      this.projectileDummy.scale.set(1, 1, 1);
      if (p.kind === 'arrow') {
        if (ai < 90) { this.projectileDummy.updateMatrix(); this.arrowMesh.setMatrixAt(ai++, this.projectileDummy.matrix); }
      } else if (p.kind === 'bolt') {
        if (bi < 24) { this.projectileDummy.updateMatrix(); this.boltMesh.setMatrixAt(bi++, this.projectileDummy.matrix); }
      } else {
        this.projectileDummy.scale.setScalar(1);
        if (ci < 16) { this.projectileDummy.updateMatrix(); this.boulderMesh.setMatrixAt(ci++, this.projectileDummy.matrix); }
      }
    }
    this.arrowMesh.count = ai; this.arrowMesh.instanceMatrix.needsUpdate = true;
    this.boltMesh.count = bi; this.boltMesh.instanceMatrix.needsUpdate = true;
    this.boulderMesh.count = ci; this.boulderMesh.instanceMatrix.needsUpdate = true;
  }

  impact(p) {
    const pos = new THREE.Vector3(p.end.x, 0.2, p.end.z);
    if (p.kind === 'boulder') {
      this.damageArea(pos, p.aoe, p.damage);
      fireBurst(this.fx, new THREE.Vector3(pos.x, 0.6, pos.z), 26);
      dustBurst(this.fx, new THREE.Vector3(pos.x, 0.5, pos.z), 0x9e907a, 16, 3);
      this.audio?.boom();
      this.callbacks.onBoom?.(0.55);
    } else if (p.volley || p.aoe > 0) {
      this.damageArea(pos, p.aoe, p.damage);
      dustBurst(this.fx, pos, 0xa99b83, 3, 1.4);
    } else {
      let hit = null;
      if (p.target && p.target.hp > 0) hit = p.target;
      if (!hit) {
        for (const e of this.enemies) {
          if (e.hp <= 0) continue;
          if (Math.hypot(e.x - pos.x, e.z - pos.z) < 1.2) { hit = e; break; }
        }
      }
      if (hit) {
        hit.hp = Math.max(0, hit.hp - p.damage);
        hit.flash = 1;
        bloodBurst(this.fx, new THREE.Vector3(hit.x, 1, hit.z), 0x7b2a21, p.kind === 'bolt' ? 10 : 5);
        if (hit.hp <= 0) this.killEnemy(hit);
      } else {
        dustBurst(this.fx, pos, 0xa99b83, 3, 1.1);
      }
    }
  }

  commandHero(point) {
    if (!this.active) return false;
    if (this.hero.commandTo(point)) {
      this.commandMarker.position.set(point.x, 0.09, point.z);
      this.markerTime = 1.2;
      this.audio?.hero();
      return true;
    }
    return false;
  }

  activateHorn() {
    this.hornTimer = 12;
    this.audio?.horn();
  }

  healAll(frac) {
    for (const st of this.castle.structures) {
      st.hp = Math.min(st.maxHp, st.hp + st.maxHp * frac);
      this.castle.updateBar(st);
      if (st.type === 'wall') this.castle.updateWallColor(st);
    }
    for (const d of this.defenders) {
      d.hp = Math.min(d.maxHp, d.hp + d.maxHp * frac);
    }
    this.hero.hp = Math.min(this.hero.maxHp, this.hero.hp + this.hero.maxHp * frac);
  }

  applyHeroUpgrade() {
    this.hero.maxHp = Math.round(this.hero.maxHp * 1.3);
    this.hero.hp = this.hero.maxHp;
    this.hero.damage *= 1.5;
  }

  clear() {
    this.enemies = [];
    this.defenders = [];
    this.queue = [];
    this.projectiles = [];
    this.boss = null;
    this.active = false;
    this.hornTimer = 0;
    this.allSpawned = true;
    this.mode = 'wave';
    this.dungeon = null;
    this.totalEnemies = 0;
    this.enemyCrowd.hide();
    this.defenderCrowd.hide();
    this.hero.group.visible = false;
    this.hero.ring.visible = false;
    this.hero.alive = true;
    this.commandMarker.visible = false;
    this.arrowMesh.count = 0; this.boltMesh.count = 0; this.boulderMesh.count = 0;
  }

  aliveCount() { return this.enemies.filter(e => e.hp > 0).length + this.queue.length; }
  spawnedAlive() { return this.enemies.filter(e => e.hp > 0).length; }
}
