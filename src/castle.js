import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  GRID, CELL, HALF, KEEP_I, KEEP_J, KEEP_W, KEEP_H,
  STRUCTURES, maxHpFor, productionFor, happinessFor, workerCostFor,
  populationFor, garrisonFor, cellKey, DEFAULT_SKINS, skinById,
} from './defs.js';
import {
  material, mesh, box, cyl, cone, sphere, plane, gableRoof, addCrenellations,
  makeBanner, makeRoadTexture, bannerTexture, rand, COLORS, basic,
} from './util.js';

// Materials whose base colour is stonework — safe to tint with masonry skins.
const STONE_HEXES = new Set([
  0xb7ae9a, 0xd6cdb8, 0xc8bfab, 0xe4dbc6, 0xdcd3be, 0xcfc6b2, 0xc7bda8,
  0xc9c1af, 0x9d9584, 0xded5c0, 0xcfc5af, 0xa79e8b, 0xe0d6bf, 0xd8d0bb,
  0xc3c5c2, 0xbcb3a0, 0x9a9282,
]);
// Roof colours across the various building builders.
const ROOF_HEXES = new Set([0xa84b38, 0x82382b, 0x8d4b35, 0x7b4a3c, 0x6e4a30, 0x9d4434]);
import { dustBurst, sparkBurst, fireBurst } from './fx.js';

const wallVariantCache = new Map();

function coloredBoxGeo(w, h, d, x, y, z, color) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(x, y, z);
  const c = new THREE.Color(color);
  const count = g.attributes.position.count;
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}

function wallGeometry(mask) {
  if (wallVariantCache.has(mask)) return wallVariantCache.get(mask);
  // bits: 1=N(-z) 2=E(+x) 4=S(+z) 8=W(-x)
  const parts = [];
  parts.push(coloredBoxGeo(CELL * 1.01, 0.55, CELL * 1.01, 0, 0.275, 0, 0xb7ae9a));
  parts.push(coloredBoxGeo(CELL * 0.98, 2.1, CELL * 0.98, 0, 1.6, 0, 0xd6cdb8));
  parts.push(coloredBoxGeo(CELL * 1.00, 0.22, CELL * 1.00, 0, 2.76, 0, 0xc8bfab));
  const colors = [0xe4dbc6, 0xdcd3be];
  const addMerlonRow = (side, idx) => {
    const w = side === 'n' || side === 's' ? CELL : 0.34;
    const d = side === 'n' || side === 's' ? 0.34 : CELL;
    const x = side === 'e' ? CELL / 2 - 0.09 : side === 'w' ? -CELL / 2 + 0.09 : 0;
    const z = side === 'n' ? -CELL / 2 + 0.09 : side === 's' ? CELL / 2 - 0.09 : 0;
    parts.push(coloredBoxGeo(w, 0.5, d, x, 3.1, z, colors[idx % 2]));
    // inner lower parapet lip
    const lipW = side === 'n' || side === 's' ? CELL : 0.18;
    const lipD = side === 'n' || side === 's' ? 0.18 : CELL;
    const lx = side === 'e' ? CELL / 2 - 0.36 : side === 'w' ? -CELL / 2 + 0.36 : 0;
    const lz = side === 'n' ? -CELL / 2 + 0.36 : side === 's' ? CELL / 2 - 0.36 : 0;
    parts.push(coloredBoxGeo(lipW, 0.3, lipD, lx, 2.93, lz, 0xcfc6b2));
    // crenellations
    const n = 4;
    for (let k = 0; k < n; k++) {
      const t = -CELL / 2 + (CELL / (n + 0.2)) * (k + 0.6) + 0.1;
      if (side === 'n' || side === 's') {
        parts.push(coloredBoxGeo(0.4, 0.48, 0.32, t, 3.58, z, colors[(k + idx) % 2]));
      } else {
        parts.push(coloredBoxGeo(0.32, 0.48, 0.4, x, 3.58, t, colors[(k + idx) % 2]));
      }
    }
  };
  let idx = 0;
  if (!(mask & 1)) addMerlonRow('n', idx++);
  if (!(mask & 2)) addMerlonRow('e', idx++);
  if (!(mask & 4)) addMerlonRow('s', idx++);
  if (!(mask & 8)) addMerlonRow('w', idx++);
  // corner buttresses on fully exposed pillars
  if (mask === 0) {
    for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
      parts.push(coloredBoxGeo(0.38, 2.7, 0.38, sx * (CELL / 2 - 0.02), 1.35, sz * (CELL / 2 - 0.02), 0xc7bda8));
    }
  }
  const g = mergeGeometries(parts, false);
  parts.forEach(p => p.dispose());
  wallVariantCache.set(mask, g);
  return g;
}

function makeFlagTextureMap() { return null; }

export class Castle {
  constructor(scene, fx, audio) {
    this.scene = scene;
    this.fx = fx;
    this.audio = audio;
    this.game = null;
    this.structures = [];
    this.byId = new Map();
    this.nextId = 1;
    this.cells = new Array(GRID * GRID).fill(null);
    this.roads = new Map();
    this.banners = [];
    this.windmills = [];
    this.bonuses = { masonry: 0 };
    this.wallDirty = true;
    this.wallInstances = [];
    this.roadMesh = null;
    this.roadDirty = true;
    this.selection = null;
    this.selectedRing = this.makeSelectionRing();
    this.ghost = this.makeGhost();
    this.fireTimer = 0;
    this.time = 0;

    this.skins = { ...DEFAULT_SKINS };
    this.bannerKind = 'blue';
    this.roofColor = null;
    this.roofDarkColor = null;
    this.stoneColor = 0xffffff;
    this.tintCache = new Map();

    this.initWalls();
    this.initRoads();
  }

  // ---------------- instanced walls & roads ----------------
  initWalls() {
    const baseMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0.02, flatShading: true });
    for (let mask = 0; mask < 16; mask++) {
      const geo = wallGeometry(mask);
      const m = new THREE.InstancedMesh(geo, baseMat, 260);
      m.count = 0;
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      m.castShadow = true;
      m.receiveShadow = true;
      m.frustumCulled = false;
      m.userData.mask = mask;
      this.scene.add(m);
      this.wallInstances.push(m);
    }
  }

  initRoads() {
    const tex = makeRoadTexture();
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95, metalness: 0.01 });
    const geo = new THREE.BoxGeometry(CELL * 0.985, 0.11, CELL * 0.985);
    this.roadMesh = new THREE.InstancedMesh(geo, mat, GRID * GRID);
    this.roadMesh.count = 0;
    this.roadMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.roadMesh.receiveShadow = true;
    this.roadMesh.castShadow = false;
    this.roadMesh.frustumCulled = false;
    this.scene.add(this.roadMesh);
  }

  rebuildWalls() {
    const buckets = Array.from({ length: 16 }, () => []);
    for (const st of this.structures) {
      if (st.type !== 'wall') continue;
      buckets[this.wallMask(st.i, st.j)].push(st);
    }
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    for (let mask = 0; mask < 16; mask++) {
      const mesh = this.wallInstances[mask];
      const list = buckets[mask];
      mesh.count = list.length;
      list.forEach((st, idx) => {
        const w = this.cellCenter(st.i, st.j);
        dummy.position.set(w.x, 0, w.z);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.set(1, 1, 1);
        dummy.updateMatrix();
        mesh.setMatrixAt(idx, dummy.matrix);
        const dmg = st.hp / st.maxHp;
        const base = 0.78 + ((st.id * 37) % 13) / 60;
        color.setRGB(base * (0.55 + dmg * 0.45), base * (0.5 + dmg * 0.5), base * (0.46 + dmg * 0.5));
        mesh.setColorAt(idx, color);
        st.wallSlot = { mesh, index: idx };
      });
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    }
    this.wallDirty = false;
  }

  rebuildRoads() {
    const dummy = new THREE.Object3D();
    let idx = 0;
    for (const road of this.roads.values()) {
      const w = this.cellCenter(road.i, road.j);
      dummy.position.set(w.x, 0.075, w.z);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      this.roadMesh.setMatrixAt(idx++, dummy.matrix);
    }
    this.roadMesh.count = idx;
    this.roadMesh.instanceMatrix.needsUpdate = true;
    this.roadDirty = false;
  }

  wallMask(i, j) {
    let mask = 0;
    if (this.isWall(i, j - 1)) mask |= 1;
    if (this.isWall(i + 1, j)) mask |= 2;
    if (this.isWall(i, j + 1)) mask |= 4;
    if (this.isWall(i - 1, j)) mask |= 8;
    return mask;
  }

  isWall(i, j) {
    if (i < 0 || j < 0 || i >= GRID || j >= GRID) return false;
    const s = this.cells[cellKey(i, j)];
    return !!s && s.type === 'wall';
  }

  updateWallColor(st) {
    if (!st.wallSlot) return;
    const { mesh, index } = st.wallSlot;
    const color = new THREE.Color();
    const dmg = st.hp / st.maxHp;
    const base = 0.78 + ((st.id * 37) % 13) / 60;
    color.setRGB(base * (0.55 + dmg * 0.45), base * (0.5 + dmg * 0.5), base * (0.46 + dmg * 0.5));
    mesh.setColorAt(index, color);
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }

  // ---------------- helpers ----------------
  cellCenter(i, j) {
    return { x: (i + 0.5) * CELL - HALF, z: (j + 0.5) * CELL - HALF };
  }

  centerOf(st) {
    return this.cellCenter(st.i + (st.w - 1) / 2, st.j + (st.h - 1) / 2);
  }

  getStructureAt(i, j) {
    if (i < 0 || j < 0 || i >= GRID || j >= GRID) return null;
    return this.cells[cellKey(i, j)];
  }

  getStructureAtWorld(x, z) {
    const i = Math.floor((x + HALF) / CELL);
    const j = Math.floor((z + HALF) / CELL);
    return this.getStructureAt(i, j);
  }

  canPlace(type, i, j) {
    const def = STRUCTURES[type];
    if (!def) return { ok: false, reason: 'Unknown building' };
    if (!def.road && this.structures.length >= 140) return { ok: false, reason: 'Castle is at capacity' };
    if (i < 0 || j < 0 || i + def.w > GRID || j + def.h > GRID) return { ok: false, reason: 'Outside the island' };
    if (def.road) {
      if (this.roads.has(cellKey(i, j))) return { ok: false, reason: 'Road already paved' };
      if (this.cells[cellKey(i, j)]) return { ok: false, reason: 'Blocked by a building' };
      return { ok: true };
    }
    for (let a = 0; a < def.w; a++) {
      for (let b = 0; b < def.h; b++) {
        const s = this.cells[cellKey(i + a, j + b)];
        if (s) return { ok: false, reason: 'Something is already built here' };
      }
    }
    // keep a one-tile breathing space around buildings, except walls/roads
    if (type !== 'wall' && type !== 'gate' && type !== 'tower') {
      for (let a = -1; a <= def.w; a++) {
        for (let b = -1; b <= def.h; b++) {
          if (a >= 0 && a < def.w && b >= 0 && b < def.h) continue;
          const s = this.getStructureAt(i + a, j + b);
          if (s && s.type === 'keep') return { ok: false, reason: 'Leave room around the keep' };
        }
      }
    }
    return { ok: true };
  }

  // ---------------- building / demolishing ----------------
  place(type, i, j, opts = {}) {
    const def = STRUCTURES[type];
    if (!def) return null;
    if (def.road) return this.paintRoad(i, j, opts);
    if (!opts.force) {
      const valid = this.canPlace(type, i, j);
      if (!valid.ok) return null;
    }
    const level = opts.level || 1;
    const st = {
      id: this.nextId++, type, i, j, w: def.w, h: def.h,
      level,
      maxHp: this.calcMaxHp(type, level),
      hp: opts.hp ?? this.calcMaxHp(type, level),
      group: null, bar: null, height: 4,
      aimGroup: null, arm: null, muzzleY: 2,
      smokeTimer: 0, spawnAnim: opts.animate === false ? 1 : 0,
      selected: false,
      wallSlot: null,
    };
    if (opts.hp != null) st.hp = Math.min(st.hp, st.maxHp);
    for (let a = 0; a < def.w; a++) for (let b = 0; b < def.h; b++) this.cells[cellKey(i + a, j + b)] = st;
    // remove roads underneath
    let removedRoad = false;
    for (let a = 0; a < def.w; a++) for (let b = 0; b < def.h; b++) {
      if (this.roads.delete(cellKey(i + a, j + b))) removedRoad = true;
    }
    if (removedRoad) this.roadDirty = true;

    const c = this.centerOf(st);
    st.group = type === 'keep' ? this.buildKeep(st) : this.buildVisual(type, level, st);
    st.group.position.set(c.x, 0, c.z);
    this.scene.add(st.group);
    this.tintGroup(st.group);
    if (st.spawnAnim < 1) st.group.scale.y = 0.05;

    this.structures.push(st);
    this.byId.set(st.id, st);
    if (type === 'wall') this.wallDirty = true;
    if (type === 'wall' || type === 'gate') this.markNeighborWalls(i, j);
    if (!opts.quiet) {
      dustBurst(this.fx, new THREE.Vector3(c.x, 0.5, c.z), 0xc6b89b, 16, 2.2);
      this.audio?.build();
    }
    if (type === 'keep') this.ensureBar(st, true);
    this.game?.onCityChanged();
    return st;
  }

  paintRoad(i, j, opts = {}) {
    if (i < 0 || j < 0 || i >= GRID || j >= GRID) return null;
    const key = cellKey(i, j);
    if (this.roads.has(key) || this.cells[key]) return null;
    this.roads.set(key, { i, j });
    this.roadDirty = true;
    if (!opts.quiet) this.audio?.place();
    return { type: 'road', i, j };
  }

  removeRoad(i, j, opts = {}) {
    const key = cellKey(i, j);
    if (!this.roads.delete(key)) return false;
    this.roadDirty = true;
    if (!opts.quiet) this.audio?.place();
    return true;
  }

  markNeighborWalls(i, j) {
    this.wallDirty = true;
  }

  removeStructure(st, opts = {}) {
    if (!st || st.type === 'keep') return false;
    const def = STRUCTURES[st.type];
    for (let a = 0; a < st.w; a++) for (let b = 0; b < st.h; b++) {
      const key = cellKey(st.i + a, st.j + b);
      if (this.cells[key] === st) this.cells[key] = null;
    }
    this.structures = this.structures.filter(s => s !== st);
    this.byId.delete(st.id);
    if (st.group) {
      const c = this.centerOf(st);
      dustBurst(this.fx, new THREE.Vector3(c.x, 0.8, c.z), 0xb3a487, 26, 3.2);
      this.scene.remove(st.group);
      st.group.traverse(o => { if (o.isMesh) o.geometry?.dispose?.(); });
    }
    if (st.bar) { this.scene.remove(st.bar.group); st.bar = null; }
    if (st.type === 'wall') {
      this.wallDirty = true;
      // refresh neighbours in next rebuild
    }
    if (this.selection === st) this.select(null);
    if (!opts.quiet) this.audio?.raze();
    this.game?.onCityChanged();
    return true;
  }

  upgrade(st) {
    const def = STRUCTURES[st.type];
    if (!def || !def.maxLevel || st.level >= def.maxLevel) return false;
    st.level++;
    st.maxHp = this.calcMaxHp(st.type, st.level);
    st.hp = st.maxHp;
    const c = this.centerOf(st);
    if (st.group) {
      this.scene.remove(st.group);
      st.group.traverse(o => { if (o.isMesh) o.geometry?.dispose?.(); });
    }
    st.group = this.buildVisual(st.type, st.level, st);
    st.group.position.set(c.x, 0, c.z);
    st.group.scale.y = 0.72;
    this.scene.add(st.group);
    this.tintGroup(st.group);
    sparkBurst(this.fx, new THREE.Vector3(c.x, st.height * 0.6, c.z), 0xffd27a, 30);
    dustBurst(this.fx, new THREE.Vector3(c.x, 0.5, c.z), 0xd9c9a8, 16, 2.4);
    if (st.bar) this.updateBar(st);
    this.game?.onCityChanged();
    return true;
  }

  calcMaxHp(type, level) {
    return Math.round(maxHpFor(type, level) * (1 + (this.bonuses.masonry || 0)));
  }

  applyMasonry() {
    for (const st of this.structures) {
      const oldMax = st.maxHp;
      const newMax = this.calcMaxHp(st.type, st.level);
      if (newMax > oldMax) {
        st.hp += (newMax - oldMax);
        st.maxHp = newMax;
      }
      this.updateBar(st);
    }
  }

  // ---------------- cosmetic skins ----------------
  tintMaterial(orig, hex, kind) {
    if (!orig) return orig;
    if (orig.map) return orig;
    if (orig.userData && orig.userData.skinLocked) return orig;
    const key = `${orig.uuid}|${hex}|${kind}`;
    if (this.tintCache.has(key)) return this.tintCache.get(key);
    const m = orig.clone();
    const c = new THREE.Color(hex);
    if (kind === 'roof') {
      m.color.copy(c);
      const hsl = { h: 0, s: 0, l: 0 };
      m.color.getHSL(hsl);
      m.color.setHSL(hsl.h, hsl.s, Math.max(0.06, Math.min(0.82, hsl.l)));
    } else {
      m.color.lerp(c, 0.68);
    }
    m.userData = { ...(m.userData || {}), skinLocked: false };
    this.tintCache.set(key, m);
    return m;
  }

  tintGroup(group) {
    if (!group) return;
    const useStone = this.stoneColor !== 0xffffff && this.stoneColor != null;
    const useRoof = this.roofColor != null;
    if (!useStone && !useRoof) return;
    group.traverse(o => {
      if (!o.isMesh || !o.material) return;
      const mat = o.material;
      if (Array.isArray(mat) || mat.map) return;
      const hex = mat.color ? mat.color.getHex() : null;
      if (hex == null) return;
      if (useRoof && ROOF_HEXES.has(hex)) o.material = this.tintMaterial(mat, this.roofColor, 'roof');
      else if (useStone && STONE_HEXES.has(hex)) o.material = this.tintMaterial(mat, this.stoneColor, 'stone');
    });
  }

  tintWalls() {
    if (!this.wallInstances.length) return;
    const mat = this.wallInstances[0].material;
    if (!mat || !mat.color) return;
    if (this.stoneColor === 0xffffff || this.stoneColor == null) mat.color.setHex(0xffffff);
    else mat.color.lerp(new THREE.Color(this.stoneColor), 0.62);
    mat.needsUpdate = true;
  }

  recolorBanners() {
    for (const b of this.banners) {
      if (!b?.flag?.material) continue;
      b.flag.material.map = bannerTexture(this.bannerKind);
      b.flag.material.needsUpdate = true;
    }
  }

  applySkins(equipped = {}) {
    this.skins = { ...DEFAULT_SKINS, ...equipped };
    const livery = skinById(this.skins.livery);
    const roof = skinById(this.skins.roof);
    const stone = skinById(this.skins.stone);
    this.bannerKind = livery?.banner || 'blue';
    this.roofColor = roof?.color ?? COLORS.roof;
    this.roofDarkColor = roof?.color ?? COLORS.roofDark;
    this.stoneColor = stone?.color ?? 0xffffff;
    this.tintCache.clear();
    this.rebuildVisuals();
  }

  rebuildVisuals() {
    this.banners = [];
    this.windmills = [];
    for (const st of this.structures) {
      const c = this.centerOf(st);
      if (st.group) {
        this.scene.remove(st.group);
        st.group.traverse(o => { if (o.isMesh) o.geometry?.dispose?.(); });
      }
      st.group = st.type === 'keep' ? this.buildKeep(st) : this.buildVisual(st.type, st.level, st);
      st.group.position.set(c.x, 0, c.z);
      st.spawnAnim = 1;
      this.scene.add(st.group);
      this.tintGroup(st.group);
      if (st.bar) this.updateBar(st);
    }
    this.tintWalls();
    this.recolorBanners();
    if (this.selection) this.select(this.selection);
  }

  // ---------------- combat damage ----------------
  damage(st, amount, source) {
    if (!st || st.hp <= 0) return;
    st.hp = Math.max(0, st.hp - amount);
    if (st.type === 'wall') this.updateWallColor(st);
    if (st.type === 'keep') this.ensureBar(st, true);
    if (st.hp > 0) {
      if (st.hp < st.maxHp && !st.bar) this.ensureBar(st, st.type === 'keep');
      this.updateBar(st);
      if (Math.random() < 0.28) {
        const c = this.centerOf(st);
        this.fx.burst(new THREE.Vector3(c.x + rand(-1, 1), 1 + Math.random() * st.height, c.z + rand(-1, 1)), {
          count: 3, color: 0xc9bda3, speed: 2, life: 0.7, size: 5, gravity: -2, drag: 1, up: 0.4, alpha: 0.7,
        });
      }
    } else {
      if (st.type === 'keep') {
        this.game?.onKeepDestroyed();
        return;
      }
      const c = this.centerOf(st);
      dustBurst(this.fx, new THREE.Vector3(c.x, 0.8, c.z), 0xb3a487, 30, 3.6);
      sparkBurst(this.fx, new THREE.Vector3(c.x, 1.4, c.z), 0xd9a24c, 12);
      this.soundCrumble();
      this.removeStructure(st, { quiet: true });
      this.game?.onStructureDestroyed?.(st);
    }
  }

  soundCrumble() {
    this.audio?.raze();
  }

  repairAll(frac) {
    let healed = 0;
    for (const st of this.structures) {
      if (st.hp >= st.maxHp) continue;
      const add = Math.min(st.maxHp - st.hp, st.maxHp * frac);
      st.hp += add;
      healed += add;
      this.updateBar(st);
      if (st.type === 'wall') this.updateWallColor(st);
    }
    if (healed > 0) this.game?.onCityChanged();
    return healed;
  }

  ensureBar(st, force = false) {
    if (st.bar) return st.bar;
    const w = st.type === 'keep' ? 4.4 : Math.max(1.8, Math.min(3, (st.w + st.h) * 0.55));
    const group = new THREE.Group();
    const bgMat = basic(0x15181a, { transparent: true, opacity: 0.72, depthTest: false, depthWrite: false });
    const bg = new THREE.Mesh(new THREE.PlaneGeometry(w, st.type === 'keep' ? 0.34 : 0.2), bgMat);
    bg.renderOrder = 90;
    const fillMat = basic(0x78af5a, { depthTest: false, depthWrite: false });
    const fill = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.08, st.type === 'keep' ? 0.24 : 0.11), fillMat);
    fill.position.z = 0.002;
    fill.renderOrder = 91;
    group.add(bg, fill);
    group.renderOrder = 90;
    group.visible = false;
    this.scene.add(group);
    st.bar = { group, fill, fillMat, bgMat, w, force };
    this.updateBar(st);
    return st.bar;
  }

  updateBar(st) {
    if (!st.bar) return;
    const ratio = Math.max(0, st.hp / st.maxHp);
    st.bar.fill.scale.x = Math.max(0.02, ratio);
    st.bar.fill.position.x = -(st.bar.w - 0.08) * (1 - ratio) / 2;
    const c = st.bar.fillMat.color;
    if (ratio > 0.55) c.setHex(0x78af5a);
    else if (ratio > 0.28) c.setHex(0xd2a84a);
    else c.setHex(0xc45542);
    st.bar.group.visible = st.hp < st.maxHp || st.type === 'keep';
  }

  // ---------------- city stats ----------------
  stats() {
    let capacity = 10;
    let used = 0;
    let happiness = 55;
    const production = { gold: 0, wood: 0, stone: 0, food: 0 };
    let garrison = 0;
    for (const st of this.structures) {
      const def = STRUCTURES[st.type];
      capacity += populationFor(st.type, st.level);
      used += workerCostFor(st.type, st.level);
      happiness += happinessFor(st.type, st.level);
      garrison += garrisonFor(st.type, st.level);
      const prod = productionFor(st.type, st.level);
      for (const [k, v] of Object.entries(prod)) production[k] += v;
    }
    const popPenalty = Math.max(0, (used - 36) * 0.25);
    happiness = Math.max(5, Math.min(100, happiness - popPenalty));
    return { capacity, used, happiness, production, garrison: Math.min(8, garrison) };
  }

  splendor(wavesSurvived = 0) {
    let score = 15 + wavesSurvived * 25 + this.roads.size * 0.2;
    for (const st of this.structures) {
      if (st.type === 'wall') score += 0.8;
      else if (st.type === 'keep') score += 10;
      else score += 5 + st.level * 4 + (STRUCTURES[st.type].tower ? 3 : 0);
    }
    return Math.round(score);
  }

  // ---------------- serialization ----------------
  serialize() {
    return {
      structures: this.structures.map(st => ({ type: st.type, i: st.i, j: st.j, level: st.level, hp: Math.round(st.hp) })),
      roads: [...this.roads.values()].map(r => [r.i, r.j]),
    };
  }

  reset(opts = {}) {
    this.clearAll();
    const st = this.place('keep', KEEP_I, KEEP_J, { force: true, quiet: true, animate: false });
    if (st) st.hp = st.maxHp = this.calcMaxHp('keep', 1);
    this.wallDirty = true;
    this.roadDirty = true;
    return st;
  }

  load(data) {
    this.clearAll();
    if (data?.structures?.length) {
      for (const s of data.structures) {
        const def = STRUCTURES[s.type];
        if (!def) continue;
        this.place(s.type, s.i, s.j, { force: true, quiet: true, animate: false, level: s.level || 1, hp: s.hp });
      }
    }
    if (!this.getStructureAt(KEEP_I, KEEP_J)) {
      this.place('keep', KEEP_I, KEEP_J, { force: true, quiet: true, animate: false });
    }
    if (data?.roads) {
      for (const [i, j] of data.roads) this.paintRoad(i, j, { quiet: true });
    }
    // place() may have removed roads under structures; re-add only valid ones
    this.wallDirty = true;
    this.roadDirty = true;
    this.game?.onCityChanged();
  }

  clearAll() {
    for (const st of [...this.structures]) {
      if (st.group) {
        this.scene.remove(st.group);
        st.group.traverse(o => { if (o.isMesh) o.geometry?.dispose?.(); });
      }
      if (st.bar) this.scene.remove(st.bar.group);
    }
    this.structures = [];
    this.byId.clear();
    this.cells.fill(null);
    this.roads.clear();
    this.banners = [];
    this.windmills = [];
    this.selection = null;
    this.selectedRing.visible = false;
    this.wallDirty = true;
    this.roadDirty = true;
  }

  // ---------------- visual builders ----------------
  buildVisual(type, level, st) {
    switch (type) {
      case 'tower': return this.buildTower(level, st);
      case 'gate': return this.buildGate(level, st);
      case 'house': return this.buildHouse(level, st);
      case 'farm': return this.buildFarm(level, st);
      case 'lumber': return this.buildLumber(level, st);
      case 'quarry': return this.buildQuarry(level, st);
      case 'market': return this.buildMarket(level, st);
      case 'tavern': return this.buildTavern(level, st);
      case 'chapel': return this.buildChapel(level, st);
      case 'garden': return this.buildGarden(level, st);
      case 'barracks': return this.buildBarracks(level, st);
      case 'ballista': return this.buildBallista(level, st);
      case 'catapult': return this.buildCatapult(level, st);
      default: return new THREE.Group();
    }
  }

  addFlag(group, kind = 'blue', scale = 1, x = 0, y = 0, z = 0) {
    const banner = makeBanner(kind === 'blue' ? this.bannerKind : kind, scale);
    banner.group.position.set(x, y, z);
    group.add(banner.group);
    this.banners.push(banner);
    return banner;
  }

  buildTower(level, st) {
    const g = new THREE.Group();
    const h = 6.6 + level * 1.05;
    cyl(g, 2.45, 2.75, 0.7, COLORS.stoneDark, 0, 0.35, 0, { seg: 12 });
    cyl(g, 2.05, 2.35, h, COLORS.stone, 0, 0.7 + h / 2, 0, { seg: 12 });
    cyl(g, 2.55, 2.55, 0.34, COLORS.stoneLight, 0, h + 0.9, 0, { seg: 12 });
    // merlons
    const topY = h + 1.08;
    for (let k = 0; k < 9; k++) {
      const a = (k / 9) * Math.PI * 2;
      box(g, 0.56, 0.58, 0.42, COLORS.stoneLight, Math.cos(a) * 2.28, topY + 0.29, Math.sin(a) * 2.28, { ry: -a });
    }
    // door and windows
    box(g, 1.02, 1.8, 0.16, COLORS.woodDark, 0, 1.55, 2.22);
    box(g, 1.18, 2.0, 0.1, COLORS.stoneLight, 0, 1.6, 2.29);
    box(g, 0.96, 1.65, 0.2, COLORS.woodDark, 0, 1.5, 2.34, { cast: false });
    for (let k = 0; k < 3; k++) {
      const a = 0.55 + k * 1.5;
      box(g, 0.52, 0.95, 0.12, 0x3b3630, Math.cos(a) * 2.12, 3.2 + k * 0.6, Math.sin(a) * 2.12, { ry: -a, cast: false });
    }
    // little archer silhouette
    if (level >= 2) {
      cyl(g, 0.18, 0.24, 0.95, 0x6d7f92, 0.9, h + 1.3, 0.3, { seg: 5 });
      sphere(g, 0.18, 0xd8b38c, 0.9, h + 1.95, 0.3, { detail: 0 });
    }
    if (level >= 2) this.addFlag(g, 'blue', 0.75, 0, h + 1.15, 0);
    // wooden hoarding at level 3
    if (level >= 3) {
      cyl(g, 2.9, 2.9, 0.28, COLORS.woodDark, 0, h * 0.55, 0, { seg: 12 });
      for (let k = 0; k < 12; k++) {
        const a = (k / 12) * Math.PI * 2;
        box(g, 0.18, 0.8, 0.18, COLORS.wood, Math.cos(a) * 2.6, h * 0.55 + 0.5, Math.sin(a) * 2.6);
      }
    }
    st.height = topY + 1.4;
    st.muzzleY = topY + 0.5;
    return g;
  }

  buildGate(level, st) {
    const g = new THREE.Group();
    box(g, 2.65, 3.3, 2.65, COLORS.stone, 0, 1.65, 0);
    box(g, 2.8, 0.4, 2.8, COLORS.stoneDark, 0, 0.2, 0);
    addCrenellations(g, 2.65, 2.65, 3.3, { n: 4, color: COLORS.stoneLight });
    box(g, 1.45, 2.25, 0.24, 0x2c2620, 0, 1.3, 1.34, { cast: false });
    box(g, 0.66, 2.1, 0.16, COLORS.woodDark, -0.36, 1.18, 1.46);
    box(g, 0.66, 2.1, 0.16, COLORS.woodDark, 0.36, 1.18, 1.46);
    for (const sx of [-0.36, 0.36]) box(g, 0.1, 1.9, 0.05, 0x3a3a3a, sx, 1.18, 1.56, { cast: false });
    box(g, 1.2, 0.12, 0.12, 0x3a3a3a, 0, 1.05, 1.56);
    if (level >= 2) this.addFlag(g, 'blue', 0.65, 0.85, 3.15, 0.8);
    if (level >= 3) {
      box(g, 2.1, 0.5, 0.1, COLORS.stoneLight, 0, 3.0, 1.34);
      sphere(g, 0.12, 0xd9b467, 0, 3.25, 1.4, { detail: 0 });
    }
    st.height = 4.2;
    return g;
  }

  buildHouse(level, st) {
    const g = new THREE.Group();
    const wallH = 2.2 + (level - 1) * 0.32;
    box(g, 4.7, 0.3, 4.3, COLORS.stoneDark, 0, 0.15, 0);
    box(g, 4.45, wallH, 4.05, COLORS.plaster, 0, wallH / 2 + 0.3, 0);
    // timber frame
    const timber = COLORS.timber;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(g, 0.19, wallH, 0.19, timber, sx * 2.1, wallH / 2 + 0.3, sz * 1.9);
    for (const sz of [-1, 1]) {
      box(g, 4.45, 0.16, 0.12, timber, 0, wallH + 0.22, sz * 2.03);
      box(g, 4.45, 0.16, 0.12, timber, 0, 0.48, sz * 2.03);
      for (const sx of [-1.1, 1.1]) box(g, 0.15, wallH, 0.12, timber, sx, wallH / 2 + 0.3, sz * 2.03);
    }
    // diagonal braces
    for (const sx of [-1, 1]) {
      const b = box(g, 0.13, 1.4, 0.1, timber, sx * 1.55, wallH * 0.62, 2.06, { rz: sx * 0.55 });
      b.castShadow = false;
    }
    // roof
    gableRoof(g, 5.35, 4.95, 2.2, COLORS.roof, 0, wallH + 0.35, 0);
    box(g, 5.0, 0.14, 0.22, COLORS.roofDark, 0, wallH + 2.5, 0, { cast: false });
    // chimney
    box(g, 0.62, 1.7, 0.62, COLORS.stoneDark, 1.55, wallH + 1.35, -0.9);
    // door & windows
    box(g, 1.0, 1.8, 0.14, COLORS.woodDark, 0, 1.2, 2.08);
    box(g, 0.78, 0.9, 0.06, 0xf2c777, -1.35, 1.55, 2.08, { cast: false, mat: new THREE.MeshStandardMaterial({ color: 0xf2c777, emissive: 0x5a3c10, emissiveIntensity: 0.7, roughness: 0.8 }) });
    box(g, 0.78, 0.9, 0.06, 0xf2c777, 1.35, 1.55, 2.08, { cast: false, mat: new THREE.MeshStandardMaterial({ color: 0xf2c777, emissive: 0x5a3c10, emissiveIntensity: 0.7, roughness: 0.8 }) });
    // side annex for level 2+
    if (level >= 2) {
      box(g, 1.6, 2.0, 2.4, COLORS.plaster, 2.9, 1.3, 0.8);
      gableRoof(g, 2.1, 2.9, 1.2, COLORS.roofDark, 2.9, 2.3, 0.8);
      box(g, 0.5, 1.2, 0.5, COLORS.stoneDark, 3.2, 3.2, 0.2);
    }
    if (level >= 3) {
      this.addFlag(g, 'blue', 0.6, -2.5, wallH + 1.4, 2.0);
      box(g, 0.9, 0.9, 0.9, COLORS.wood, 2.7, 0.45, -1.9);
    }
    st.height = wallH + 3;
    return g;
  }

  cropGeometry(rows, cols, color) {
    const parts = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const g = new THREE.ConeGeometry(0.16, 0.62, 4);
        g.translate(-3.2 + c * 0.92, 0.35, -3.0 + r * 0.82);
        const col = new THREE.Color(color);
        const arr = new Float32Array(g.attributes.position.count * 3);
        for (let i = 0; i < g.attributes.position.count; i++) { arr[i * 3] = col.r; arr[i * 3 + 1] = col.g; arr[i * 3 + 2] = col.b; }
        g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
        parts.push(g);
      }
    }
    const merged = mergeGeometries(parts, false);
    parts.forEach(p => p.dispose());
    return merged;
  }

  buildFarm(level, st) {
    const g = new THREE.Group();
    box(g, 8.0, 0.14, 8.0, 0x755638, 0, 0.06, 0);
    // crop rows
    const cropMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 });
    const crops = new THREE.Mesh(this.cropGeometry(5 + level, 5, level >= 2 ? 0x8aa94b : 0x7c9f43), cropMat);
    crops.position.set(0.8, 0.12, 0.8);
    crops.castShadow = true;
    g.add(crops);
    // fence
    for (let k = 0; k < 9; k++) {
      box(g, 0.12, 0.7, 0.12, COLORS.woodDark, -3.9 + k * 0.98, 0.35, -3.9);
      box(g, 0.12, 0.7, 0.12, COLORS.woodDark, -3.9 + k * 0.98, 0.35, 3.9);
    }
    box(g, 7.9, 0.1, 0.1, COLORS.wood, 0, 0.55, -3.9);
    box(g, 7.9, 0.1, 0.1, COLORS.wood, 0, 0.55, 3.9);
    // windmill
    const wm = new THREE.Group();
    wm.position.set(-2.7, 0, -2.5);
    cyl(wm, 1.25, 1.5, 3.9, 0xcfc3a7, 0, 1.95, 0, { seg: 8 });
    cone(wm, 1.55, 1.5, COLORS.roofDark, 0, 4.6, 0, { seg: 8 });
    box(wm, 0.7, 1.2, 0.15, COLORS.woodDark, 0, 0.8, 1.42);
    const blades = new THREE.Group();
    blades.position.set(0, 3.9, 1.5);
    for (let k = 0; k < 4; k++) {
      const bl = box(blades, 0.28, 2.3, 0.08, 0xd8c8a4, 0, 1.15, 0, { cast: false });
      bl.rotation.z = (k * Math.PI) / 2;
      bl.position.set(Math.sin((k * Math.PI) / 2) * 1.15, Math.cos((k * Math.PI) / 2) * 1.15, 0);
    }
    wm.add(blades);
    this.windmills.push({ blades, speed: 0.7 + level * 0.12 });
    g.add(wm);
    // haystacks
    sphere(g, 0.7, 0xcbb36b, 2.6, 0.6, -2.4, { detail: 1, scale: new THREE.Vector3(1, 0.8, 1) });
    sphere(g, 0.55, 0xbca45d, 2.9, 0.5, -1.2, { detail: 1, scale: new THREE.Vector3(1.1, 0.75, 1) });
    if (level >= 3) {
      cyl(g, 0.9, 1.1, 2.6, 0xcfc3a7, 3.1, 1.3, 2.8, { seg: 8 });
      cone(g, 1.15, 1.0, COLORS.roof, 3.1, 3.1, 2.8, { seg: 8 });
    }
    st.height = 6.2;
    return g;
  }

  buildLumber(level, st) {
    const g = new THREE.Group();
    box(g, 4.9, 0.12, 4.9, 0x6f5639, 0, 0.06, 0);
    // lean-to
    for (const [x, z] of [[-1.7, -1.6], [1.7, -1.6], [-1.7, 1.6], [1.7, 1.6]]) {
      box(g, 0.18, 2.2, 0.18, COLORS.woodDark, x, 1.1, z);
    }
    const roof = box(g, 4.3, 0.16, 4.0, 0x7d5a37, 0, 2.4, 0);
    roof.rotation.x = 0.14;
    // logs
    for (let k = 0; k < 3 + level; k++) {
      const log = cyl(g, 0.28, 0.32, 3.0, COLORS.wood, -1.2 + (k % 3) * 0.72, 0.35 + Math.floor(k / 3) * 0.55, 0.4, { seg: 7 });
      log.rotation.z = Math.PI / 2;
    }
    // chopping block
    box(g, 1.0, 0.6, 0.9, COLORS.woodDark, 2.3, 0.35, 1.7);
    const axe = box(g, 0.08, 1.2, 0.08, COLORS.wood, 2.35, 1.1, 1.65);
    axe.rotation.z = 0.4;
    box(g, 0.4, 0.35, 0.08, COLORS.iron, 2.06, 1.55, 1.65, { rz: 0.4 });
    box(g, 0.3, 0.9, 0.1, 0x8a6a44, 1.8, 0.45, 1.7);
    st.height = 3.3;
    return g;
  }

  buildQuarry(level, st) {
    const g = new THREE.Group();
    box(g, 5.0, 0.12, 5.0, 0x77705f, 0, 0.06, 0);
    box(g, 3.4, 0.5, 3.4, 0x5f594c, 0, 0.25, 0);
    const rockMat = material(0x9a9282, { roughness: 0.98 });
    for (let k = 0; k < 5 + level * 2; k++) {
      const s = rand(0.45, 0.9);
      const m = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), rockMat);
      m.position.set(rand(-2.1, 2.1), 0.45 + s * 0.3, rand(-2.1, 2.1));
      m.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
      m.castShadow = true; m.receiveShadow = true;
      g.add(m);
    }
    // crane
    box(g, 0.22, 3.2, 0.22, COLORS.woodDark, -1.8, 1.8, -1.6);
    box(g, 0.22, 2.0, 0.22, COLORS.woodDark, -0.8, 2.4, -1.6, { rz: -0.75 });
    box(g, 2.8, 0.18, 0.18, COLORS.wood, -0.7, 3.25, -1.6);
    box(g, 0.06, 1.5, 0.06, 0x3f3a32, 0.5, 2.5, -1.6);
    box(g, 0.6, 0.5, 0.6, 0x8b8374, 0.5, 1.65, -1.6);
    // cut stone piles
    for (let k = 0; k < 3; k++) box(g, 0.8, 0.45, 0.6, 0xbcb3a0, 1.6, 0.28 + k * 0.45, 1.3 + (k % 2) * 0.5);
    st.height = 3.8;
    return g;
  }

  buildMarket(level, st) {
    const g = new THREE.Group();
    box(g, 4.9, 0.1, 4.9, 0x8a7a5e, 0, 0.05, 0);
    const stalls = 2 + (level >= 2 ? 1 : 0);
    for (let s = 0; s < stalls; s++) {
      const x = -1.5 + (s % 2) * 3.0;
      const z = -1.4 + Math.floor(s / 2) * 2.7;
      box(g, 2.5, 0.2, 1.5, COLORS.wood, x, 1.05, z);
      for (const sx of [-1.05, 1.05]) for (const sz of [-0.55, 0.55]) box(g, 0.12, 1.1, 0.12, COLORS.woodDark, x + sx, 0.55, z + sz);
      // striped awning
      for (let k = 0; k < 6; k++) {
        box(g, 0.42, 0.06, 1.9, k % 2 ? 0xe8d8b6 : 0x9b3c30, x - 1.05 + k * 0.42, 1.65, z, { cast: false });
      }
      const tilt = box(g, 2.55, 0.08, 1.9, 0x000000, x, 1.65, z, { cast: false, matOpts: { transparent: true, opacity: 0 } });
      // goods
      sphere(g, 0.16, 0xd9a441, x - 0.5, 1.28, z + 0.2, { detail: 0 });
      sphere(g, 0.16, 0xb94f3d, x, 1.28, z + 0.15, { detail: 0 });
      sphere(g, 0.16, 0x7d9a4b, x + 0.5, 1.28, z + 0.2, { detail: 0 });
      box(g, 0.5, 0.35, 0.5, 0x8b6a44, x + 0.9, 0.25, z - 0.7);
    }
    // barrels
    for (let k = 0; k < 3; k++) {
      cyl(g, 0.3, 0.34, 0.7, 0x7c5a38, 1.8, 0.35, -1.9 + k * 0.8, { seg: 7 });
    }
    st.height = 2.4;
    return g;
  }

  buildTavern(level, st) {
    const g = new THREE.Group();
    const wallH = 2.7;
    box(g, 4.9, 0.3, 4.5, COLORS.stoneDark, 0, 0.15, 0);
    box(g, 4.6, wallH, 4.2, COLORS.plaster, 0, 1.65, 0);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(g, 0.2, wallH, 0.2, COLORS.timber, sx * 2.16, 1.65, sz * 1.98);
    for (const sz of [-1, 1]) {
      box(g, 4.6, 0.18, 0.12, COLORS.timber, 0, 0.55, sz * 2.1);
      box(g, 4.6, 0.18, 0.12, COLORS.timber, 0, 2.9, sz * 2.1);
    }
    gableRoof(g, 5.4, 5.0, 2.3, 0x8d4b35, 0, 3.1, 0);
    box(g, 0.65, 1.9, 0.65, COLORS.stoneDark, -1.6, 3.8, -0.7);
    box(g, 1.0, 1.9, 0.15, COLORS.woodDark, 0, 1.25, 2.15);
    box(g, 0.75, 0.85, 0.06, 0xf2c777, 1.55, 1.65, 2.13, { cast: false, mat: new THREE.MeshStandardMaterial({ color: 0xf2c777, emissive: 0x5a3c10, emissiveIntensity: 0.8, roughness: 0.8 }) });
    // hanging sign
    box(g, 0.08, 0.8, 0.08, COLORS.iron, 2.4, 2.3, 2.15);
    box(g, 0.9, 0.55, 0.08, COLORS.wood, 2.8, 1.95, 2.15);
    // barrels & tables
    for (let k = 0; k < 3; k++) cyl(g, 0.3, 0.34, 0.72, COLORS.wood, -2.6, 0.36, 1.15 + k * 0.7, { seg: 7 });
    box(g, 1.5, 0.1, 0.8, COLORS.wood, 2.0, 0.75, -2.2);
    box(g, 0.12, 0.7, 0.12, COLORS.woodDark, 1.4, 0.35, -2.2);
    box(g, 0.12, 0.7, 0.12, COLORS.woodDark, 2.6, 0.35, -2.2);
    if (level >= 2) {
      box(g, 1.6, 1.6, 0.1, COLORS.plaster, 0, 4.1, 2.5);
      box(g, 1.8, 0.15, 0.8, COLORS.woodDark, 0, 3.3, 2.45);
    }
    if (level >= 3) this.addFlag(g, 'blue', 0.66, 2.6, 3.2, 1.7);
    st.height = 5.1;
    return g;
  }

  buildChapel(level, st) {
    const g = new THREE.Group();
    box(g, 3.8, 0.3, 5.0, COLORS.stoneDark, 0, 0.15, -0.3);
    box(g, 3.5, 2.8, 4.4, 0xd8d0bb, 0, 1.7, -0.5);
    gableRoof(g, 4.3, 5.0, 1.9, 0x7b4a3c, 0, 3.1, -0.5);
    // bell tower
    box(g, 1.5, 5.2, 1.5, 0xd8d0bb, 0, 2.6, 2.0);
    box(g, 1.75, 0.25, 1.75, COLORS.stone, 0, 5.15, 2.0);
    cone(g, 1.15, 2.2, 0x7b4a3c, 0, 6.3, 2.0, { seg: 4, ry: Math.PI / 4 });
    box(g, 0.09, 1.1, 0.09, 0x4b4338, 0, 7.7, 2.0);
    box(g, 0.5, 0.09, 0.09, 0x4b4338, 0, 7.9, 2.0);
    // arched door & windows
    box(g, 0.9, 1.8, 0.12, COLORS.woodDark, 0, 1.2, 2.78);
    for (const sx of [-1.0, 1.0]) {
      box(g, 0.42, 1.2, 0.07, 0x4b5666, sx, 1.7, 2.77, { cast: false });
      box(g, 0.42, 0.4, 0.07, 0x4b5666, sx, 2.45, 2.77, { cast: false, rz: 0 });
    }
    if (level >= 2) {
      box(g, 1.4, 2.2, 2.0, 0xd8d0bb, 2.3, 1.3, -0.8);
      gableRoof(g, 1.8, 2.4, 1.2, 0x7b4a3c, 2.3, 2.4, -0.8);
    }
    if (level >= 3) {
      this.addFlag(g, 'blue', 0.55, 0, 6.9, 2.0);
      box(g, 0.2, 0.2, 0.2, COLORS.gold, 0, 8.35, 2.0, { cast: false });
    }
    st.height = 8.4;
    return g;
  }

  buildGarden(level, st) {
    const g = new THREE.Group();
    box(g, 5.1, 0.12, 5.1, 0x6f9456, 0, 0.06, 0);
    // hedges
    for (const [x, z, w, d] of [[0, -2.3, 4.6, 0.45], [0, 2.3, 4.6, 0.45], [-2.3, 0, 0.45, 4.2], [2.3, 0, 0.45, 4.2]]) {
      box(g, w, 0.65, d, 0x4f7a3f, x, 0.35, z);
    }
    // fountain
    cyl(g, 0.9, 1.05, 0.45, COLORS.stone, 0, 0.22, 0, { seg: 10 });
    cyl(g, 0.72, 0.8, 0.18, 0x5e9eaa, 0, 0.5, 0, { seg: 10, matOpts: { transparent: true, opacity: 0.8 } });
    cyl(g, 0.18, 0.28, 1.2, COLORS.stoneLight, 0, 0.85, 0, { seg: 8 });
    sphere(g, 0.32, COLORS.stoneLight, 0, 1.5, 0, { detail: 1 });
    // flower beds and benches
    const flowerColors = [0xdf8f8f, 0xe0c765, 0xc9b6e6, 0xf0e6cd];
    for (let k = 0; k < 10 + level * 4; k++) {
      const a = Math.random() * Math.PI * 2;
      const r = rand(1.2, 2.0);
      sphere(g, 0.12, flowerColors[k % flowerColors.length], Math.cos(a) * r, 0.25, Math.sin(a) * r, { detail: 0, cast: false });
    }
    for (let k = 0; k < 2; k++) {
      box(g, 1.0, 0.12, 0.4, COLORS.wood, -1.4 + k * 2.8, 0.35, 1.7);
      box(g, 0.12, 0.35, 0.35, COLORS.woodDark, -1.8 + k * 3.6, 0.18, 1.7);
    }
    if (level >= 2) {
      const tree = new THREE.Group();
      cyl(tree, 0.16, 0.24, 1.4, COLORS.timber, 0, 0.7, 0);
      sphere(tree, 0.8, 0x5d8c4b, 0, 1.7, 0, { detail: 1 });
      tree.position.set(1.7, 0, -1.4);
      g.add(tree);
    }
    if (level >= 3) {
      box(g, 0.5, 1.3, 0.5, COLORS.stone, 1.6, 0.65, 0.9);
      sphere(g, 0.3, COLORS.gold, 1.6, 1.5, 0.9, { detail: 1 });
    }
    st.height = 2.3;
    return g;
  }

  buildBarracks(level, st) {
    const g = new THREE.Group();
    box(g, 7.2, 0.16, 4.9, 0x8b7a5f, 0, 0.08, 0);
    box(g, 6.3, 2.6, 3.6, 0x9a805c, 0, 1.4, -0.4);
    gableRoof(g, 7.0, 4.4, 2.0, 0x6e4a30, 0, 2.7, -0.4);
    box(g, 1.0, 1.9, 0.12, COLORS.woodDark, -1.6, 1.15, 1.44);
    box(g, 0.8, 0.8, 0.06, 0xf2c777, 1.4, 1.5, 1.44, { cast: false, mat: new THREE.MeshStandardMaterial({ color: 0xf2c777, emissive: 0x5a3c10, emissiveIntensity: 0.7 }) });
    this.addFlag(g, 'blue', 0.7, -2.8, 2.8, 1.2);
    // training yard fence
    for (let k = 0; k < 7; k++) box(g, 0.14, 0.8, 0.14, COLORS.woodDark, 0.1 + k * 0.9, 0.4, 2.1);
    box(g, 6.0, 0.1, 0.1, COLORS.wood, 3.0, 0.65, 2.1);
    // dummies
    for (let k = 0; k < 2; k++) {
      const dx = 1.4 + k * 1.9;
      cyl(g, 0.1, 0.12, 1.5, COLORS.woodDark, dx, 0.85, 0.4, { seg: 5 });
      box(g, 0.8, 0.1, 0.1, COLORS.wood, dx, 1.45, 0.4);
      sphere(g, 0.22, 0xd6b287, dx, 1.85, 0.4, { detail: 0 });
      cyl(g, 0.3, 0.3, 0.08, 0x9a6b3f, dx, 1.25, 0.4, { seg: 8, rx: Math.PI / 2 });
    }
    // weapon rack
    box(g, 1.2, 0.1, 0.3, COLORS.wood, -2.4, 1.0, 1.1);
    for (let k = 0; k < 3; k++) box(g, 0.05, 1.4, 0.05, COLORS.iron, -2.8 + k * 0.4, 0.7, 1.1);
    if (level >= 2) {
      for (let k = 0; k < 2; k++) {
        const tx = -2.6 + k * 2.0;
        box(g, 1.3, 0.15, 1.3, 0x6e5a3f, tx, 0.08, 2.9);
        cone(g, 1.0, 1.2, 0x8d7a5c, tx, 0.8, 2.9, { seg: 4 });
      }
    }
    if (level >= 3) {
      box(g, 0.9, 1.4, 0.9, COLORS.stone, 2.9, 0.7, 3.4);
      this.addFlag(g, 'red', 0.55, 2.9, 1.6, 3.4);
    }
    st.height = 5.0;
    return g;
  }

  buildBallista(level, st) {
    const g = new THREE.Group();
    box(g, 4.4, 0.32, 4.4, 0x7e6646, 0, 0.16, 0);
    for (const [x, z] of [[-1.7, -1.7], [1.7, -1.7], [-1.7, 1.7], [1.7, 1.7]]) {
      box(g, 0.24, 1.4, 0.24, COLORS.woodDark, x, 0.9, z);
    }
    box(g, 4.0, 0.18, 2.6, COLORS.wood, 0, 1.55, 0);
    const aim = new THREE.Group();
    aim.position.set(0, 1.8, 0);
    box(aim, 1.4, 0.3, 0.5, COLORS.woodDark, 0, 0.15, 0);
    box(aim, 0.14, 0.14, 2.9, COLORS.wood, 0, 0.4, 0.4);
    // bow arms
    const bow = new THREE.Group();
    bow.position.set(0, 0.45, 1.4);
    for (const s of [-1, 1]) {
      const arm = box(bow, 1.8, 0.12, 0.12, 0x4b3a26, s * 0.75, 0.15, -0.25, { rz: s * 0.32 });
      arm.castShadow = true;
    }
    box(bow, 0.06, 0.06, 2.2, 0x3a3128, 0, 0.2, 0.45);
    aim.add(bow);
    if (level >= 2) {
      for (const s of [-1, 1]) box(aim, 0.09, 0.09, 2.2, COLORS.iron, s * 0.55, 0.32, 0.2);
    }
    g.add(aim);
    st.aimGroup = aim;
    st.muzzleY = 2.5;
    box(g, 0.8, 0.5, 0.8, COLORS.woodDark, -1.6, 0.3, 1.7);
    cyl(g, 0.18, 0.18, 0.8, 0x8d8374, 1.5, 0.7, 1.5, { seg: 6, rx: Math.PI / 2 });
    st.height = 3.2;
    return g;
  }

  buildCatapult(level, st) {
    const g = new THREE.Group();
    box(g, 7.0, 0.3, 6.0, 0x7e6646, 0, 0.15, 0);
    for (const [x, z] of [[-2.7, -2.2], [2.7, -2.2], [-2.7, 2.2], [2.7, 2.2]]) {
      box(g, 0.26, 1.0, 0.26, COLORS.woodDark, x, 0.7, z);
    }
    // wheels
    for (const [x, z] of [[-2.8, -2.4], [2.8, -2.4], [-2.8, 2.4], [2.8, 2.4]]) {
      cyl(g, 0.6, 0.6, 0.25, COLORS.woodDark, x, 0.6, z, { seg: 8, rx: Math.PI / 2 });
    }
    box(g, 5.0, 0.35, 1.0, COLORS.woodDark, 0, 1.25, 0);
    const aim = new THREE.Group();
    aim.position.set(0, 1.5, 0);
    box(aim, 0.5, 0.3, 3.0, COLORS.wood, 0, 0.2, 0);
    const arm = new THREE.Group();
    arm.position.set(0, 0.4, -0.8);
    const armBox = box(arm, 0.24, 0.24, 4.6, COLORS.wood, 0, 0, 1.4);
    armBox.rotation.x = -0.35;
    box(arm, 0.1, 1.0, 0.1, 0x3e3a32, 0.7, -0.4, -0.2);
    box(arm, 0.6, 0.55, 0.6, 0x6b6054, 0.7, -0.6, 0.2);
    box(arm, 1.0, 0.4, 1.0, COLORS.woodDark, 0, 0.15, 3.6);
    aim.add(arm);
    g.add(aim);
    st.aimGroup = aim;
    st.arm = arm;
    st.muzzleY = 3.2;
    box(g, 1.0, 0.5, 1.0, COLORS.woodDark, 3.0, 0.28, 2.2);
    st.height = 4.4;
    return g;
  }

  buildKeep(st) {
    const g = new THREE.Group();
    const stone = 0xcfc5af, stoneDark = 0xa79e8b, stoneLight = 0xe0d6bf;
    box(g, 10.7, 1.35, 10.7, stoneDark, 0, 0.67, 0);
    box(g, 8.6, 8.8, 8.6, stone, 0, 5.7, 0);
    box(g, 9.2, 0.6, 9.2, stoneLight, 0, 10.1, 0);
    addCrenellations(g, 9.2, 9.2, 10.35, { n: 7, color: stoneLight, w: 0.52, h: 0.72, d: 0.46 });
    // corner turrets
    for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
      const x = sx * 4.45, z = sz * 4.45;
      cyl(g, 1.9, 2.05, 11.2, stone, x, 6.0, z, { seg: 10 });
      cyl(g, 2.25, 2.25, 0.35, stoneLight, x, 11.55, z, { seg: 10 });
      for (let k = 0; k < 7; k++) {
        const a = (k / 7) * Math.PI * 2;
        box(g, 0.4, 0.55, 0.34, stoneLight, x + Math.cos(a) * 2.0, 11.95, z + Math.sin(a) * 2.0, { ry: -a });
      }
      cone(g, 2.2, 2.4, 0x9d4434, x, 13.35, z, { seg: 10 });
      box(g, 0.08, 1.6, 0.08, 0x4a3d2d, x, 15.0, z);
      this.addFlag(g, 'blue', 0.8, x, 15.0, z);
      // window
      for (const [wx, wz] of [[0, 1.95], [0, -1.95], [1.95, 0], [-1.95, 0]]) {
        box(g, 0.32, 0.8, 0.12, 0x3a3731, x + wx, 6.2 + (sx + sz) * 0.3, z + wz, { cast: false });
      }
    }
    // central tower
    cyl(g, 2.35, 2.6, 13.0, stone, 0, 7.15, 0, { seg: 12 });
    cyl(g, 2.75, 2.75, 0.4, stoneLight, 0, 13.7, 0, { seg: 12 });
    addCrenellations(g, 5.0, 5.0, 13.9, { n: 6, color: stoneLight, w: 0.5, h: 0.6, d: 0.4 });
    cone(g, 2.5, 3.2, 0x9d4434, 0, 15.5, 0, { seg: 12 });
    box(g, 0.1, 2.4, 0.1, 0x40372a, 0, 18.2, 0);
    this.addFlag(g, 'blue', 1.2, 0, 18.2, 0);
    // big door + steps (front = +z)
    box(g, 2.4, 3.8, 0.22, 0x2f2820, 0, 2.3, 4.36, { cast: false });
    box(g, 2.8, 4.2, 0.2, stoneLight, 0, 2.5, 4.32);
    box(g, 2.1, 3.5, 0.2, 0x463424, 0, 2.2, 4.5);
    for (let k = 0; k < 3; k++) box(g, 3.6 - k * 0.5, 0.3, 0.7, stoneLight, 0, 0.15 + k * 0.28, 5.05 + k * 0.4);
    // windows on body
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        box(g, 0.5, 1.2, 0.1, 0x3d3932, sx * 3.2, 6.4, sz * 4.33, { cast: false });
        box(g, 0.5, 1.2, 0.1, 0x3d3932, sx * 4.33, 6.4, sz * 3.2, { cast: false });
      }
    }
    // torches
    for (const sx of [-1, 1]) {
      box(g, 0.12, 1.4, 0.12, COLORS.iron, sx * 2.8, 2.3, 4.5);
      const flame = sphere(g, 0.22, 0xffa24a, sx * 2.8, 3.1, 4.5, { detail: 0, cast: false });
      flame.material = new THREE.MeshBasicMaterial({ color: 0xffa24a });
    }
    st.height = 20;
    return g;
  }

  // ---------------- selection & ghost ----------------
  makeSelectionRing() {
    const geo = new THREE.RingGeometry(1, 1.1, 48);
    const mat = new THREE.MeshBasicMaterial({ color: 0xe7c37a, transparent: true, opacity: 0.72, side: THREE.DoubleSide, depthWrite: false });
    const ring = new THREE.Mesh(geo, mat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.1;
    ring.visible = false;
    ring.renderOrder = 5;
    this.scene.add(ring);
    return ring;
  }

  select(st) {
    this.selection = st;
    if (!st) { this.selectedRing.visible = false; return; }
    const c = this.centerOf(st);
    const r = Math.max(st.w, st.h) * CELL * 0.55 + 0.5;
    this.selectedRing.position.set(c.x, 0.12, c.z);
    this.selectedRing.scale.setScalar(r);
    this.selectedRing.visible = true;
  }

  makeGhost() {
    const group = new THREE.Group();
    const mat = new THREE.MeshBasicMaterial({ color: 0x9ed47a, transparent: true, opacity: 0.28, depthWrite: false });
    const boxMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), mat);
    boxMesh.position.y = 0.5;
    group.add(boxMesh);
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)), new THREE.LineBasicMaterial({ color: 0xcdf0a8, transparent: true, opacity: 0.85 }));
    edges.position.y = 0.5;
    group.add(edges);
    group.visible = false;
    group.userData = { boxMesh, edges, mat };
    this.scene.add(group);
    return group;
  }

  updateGhost(type, i, j, valid) {
    if (!type) { this.ghost.visible = false; return; }
    const def = STRUCTURES[type];
    const g = this.ghost;
    g.visible = true;
    const color = valid ? 0x9ed47a : 0xd85a4a;
    g.userData.mat.color.setHex(color);
    g.userData.edges.material.color.setHex(valid ? 0xd6f5b2 : 0xffa090);
    const w = def.road ? CELL * 0.96 : def.w * CELL;
    const d = def.road ? CELL * 0.96 : def.h * CELL;
    const h = def.road ? 0.12 : (def.hidden ? 4 : Math.min(5, (def.h + 1) * 0.8));
    g.userData.boxMesh.scale.set(w, h, d);
    g.userData.boxMesh.position.y = h / 2 + 0.05;
    g.userData.edges.scale.set(w, h, d);
    g.userData.edges.position.y = h / 2 + 0.05;
    const w2 = this.cellCenter(i + (def.w - 1) / 2, j + (def.h - 1) / 2);
    g.position.set(w2.x, 0, w2.z);
  }

  hideGhost() { this.ghost.visible = false; }

  // ---------------- per frame ----------------
  update(dt, camera, t) {
    this.time = t;
    if (this.wallDirty) this.rebuildWalls();
    if (this.roadDirty) this.rebuildRoads();
    for (const b of this.banners) {
      b.flag.rotation.y = Math.sin(t * 2.0 + b.phase) * 0.26;
      b.flag.rotation.z = Math.sin(t * 1.3 + b.phase) * 0.04;
    }
    for (const w of this.windmills) w.blades.rotation.z += dt * w.speed;
    if (this.selection) {
      this.selectedRing.rotation.z += dt * 0.25;
      this.selectedRing.material.opacity = 0.55 + Math.sin(t * 3) * 0.15;
    }
    // spawn animation
    for (const st of this.structures) {
      if (st.spawnAnim < 1) {
        st.spawnAnim = Math.min(1, st.spawnAnim + dt * 2.6);
        const a = st.spawnAnim;
        const ease = 1 - Math.pow(1 - a, 3);
        const overshoot = a < 0.85 ? ease * 1.04 : 1 + Math.sin((a - 0.85) * Math.PI / 0.15) * 0.02;
        st.group.scale.y = Math.max(0.05, Math.min(1.04, overshoot));
        if (a >= 1) st.group.scale.y = 1;
      }
      if (st.bar) {
        const c = this.centerOf(st);
        st.bar.group.position.set(c.x, st.height + 0.65, c.z);
        st.bar.group.quaternion.copy(camera.quaternion);
      }
      const dmgRatio = st.hp / st.maxHp;
      if (dmgRatio < 0.62 && st.hp > 0) {
        st.smokeTimer -= dt;
        if (st.smokeTimer <= 0) {
          st.smokeTimer = rand(0.5, 1.2);
          const c = this.centerOf(st);
          const y = st.height * rand(0.35, 0.85);
          this.fx.burst(new THREE.Vector3(c.x + rand(-1.2, 1.2), y, c.z + rand(-1.2, 1.2)), {
            count: dmgRatio < 0.3 ? 5 : 2,
            color: dmgRatio < 0.3 ? 0xff8a3c : 0x8c8779,
            speed: 1.2, life: 1.8, size: dmgRatio < 0.3 ? 11 : 9,
            gravity: dmgRatio < 0.3 ? 1.2 : 0.6, drag: 0.8, up: 0.5, alpha: 0.5,
          });
        }
      }
    }
  }
}
