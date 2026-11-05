import * as THREE from 'three';
import { GRID, CELL, HALF, SPAWNS } from './defs.js';
import { material, mesh, box, cyl, cone, sphere, rand, makeBanner, COLORS } from './util.js';

const SKY_THEMES = {
  day: {
    top: 0x3d78b0, mid: 0x9ec6dd, horizon: 0xf1d6a8, bg: 0x9ec6dd, fog: 0xb9c9c4,
    hemiSky: 0xbfd9ee, hemiGround: 0x596344, hemi: 1.15, sun: 0xffe4b8, sunI: 2.6,
    deep: 0x245b70, shallow: 0x4f96a3, cloud: 0xf4efe4, cloudO: 0.92, foam: 0xd7e8df,
  },
  golden: {
    top: 0x4b5f92, mid: 0xc49a86, horizon: 0xf6c97a, bg: 0xd9b184, fog: 0xcaa785,
    hemiSky: 0xf1c79b, hemiGround: 0x5b5038, hemi: 1.08, sun: 0xffb464, sunI: 2.9,
    deep: 0x2a4c5e, shallow: 0x5c8a8c, cloud: 0xffd7a4, cloudO: 0.9, foam: 0xf1d6ae,
  },
  storm: {
    top: 0x2b3442, mid: 0x5e6b74, horizon: 0x8e9a96, bg: 0x5e6b74, fog: 0x6d7a7c,
    hemiSky: 0x91a4b2, hemiGround: 0x3d4640, hemi: 0.86, sun: 0xd6dde2, sunI: 1.45,
    deep: 0x1c3541, shallow: 0x3b626a, cloud: 0x7c8891, cloudO: 0.96, foam: 0xc3d2cf,
  },
  dawn: {
    top: 0x5c6f9d, mid: 0xd39aa2, horizon: 0xffd9b0, bg: 0xd7a6ad, fog: 0xc3a3a4,
    hemiSky: 0xe8c4cb, hemiGround: 0x5c5a44, hemi: 1.05, sun: 0xffc8a1, sunI: 2.35,
    deep: 0x2c4d63, shallow: 0x6b8e9c, cloud: 0xffe0d4, cloudO: 0.9, foam: 0xeed8d2,
  },
  crow: {
    top: 0x201c3a, mid: 0x4b3560, horizon: 0x9a5f6e, bg: 0x3a2b4d, fog: 0x4a3a58,
    hemiSky: 0x8a70a8, hemiGround: 0x2c2933, hemi: 0.9, sun: 0xd9a0c4, sunI: 1.75,
    deep: 0x1d2438, shallow: 0x3e4a68, cloud: 0x574565, cloudO: 0.94, foam: 0xb9a6c4,
  },
};

export function createWorld(scene, renderer) {
  const isMobile = Math.min(window.innerWidth, window.innerHeight) < 700;
  const timeUniform = { value: 0 };
  const animated = [];

  scene.fog = new THREE.Fog(0xb9c9c4, 150, 330);

  // ---------- lights ----------
  const hemi = new THREE.HemisphereLight(0xbfd9ee, 0x596344, 1.15);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffe4b8, 2.6);
  sun.position.set(-48, 62, 34);
  sun.castShadow = true;
  const sc = sun.shadow.camera;
  sc.left = -62; sc.right = 62; sc.top = 62; sc.bottom = -62;
  sc.near = 1; sc.far = 180;
  sun.shadow.mapSize.set(isMobile ? 1024 : 2048, isMobile ? 1024 : 2048);
  sun.shadow.bias = -0.0007;
  sun.shadow.normalBias = 0.04;
  scene.add(sun);
  scene.add(sun.target);
  const rim = new THREE.DirectionalLight(0x9bc2d8, 0.45);
  rim.position.set(40, 20, -45);
  scene.add(rim);

  // ---------- sky ----------
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      uTop: { value: new THREE.Color(0x3d78b0) },
      uMid: { value: new THREE.Color(0x9ec6dd) },
      uHorizon: { value: new THREE.Color(0xf1d6a8) },
      uSun: { value: new THREE.Vector3(-48, 62, 34).normalize() },
    },
    vertexShader: `
      varying vec3 vPos;
      void main() {
        vPos = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uHorizon; uniform vec3 uSun;
      varying vec3 vPos;
      void main() {
        float h = clamp(vPos.y, -0.15, 1.0);
        vec3 col = mix(uHorizon, uMid, smoothstep(-0.02, 0.28, h));
        col = mix(col, uTop, smoothstep(0.25, 0.85, h));
        float sunDot = max(dot(normalize(vPos), normalize(uSun)), 0.0);
        col += vec3(1.0, 0.78, 0.48) * pow(sunDot, 90.0) * 0.65;
        col += vec3(1.0, 0.86, 0.64) * pow(sunDot, 8.0) * 0.18;
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(360, 24, 16), skyMat);
  sky.frustumCulled = false;
  scene.add(sky);

  // ---------- island ----------
  const top = buildIslandTop();
  scene.add(top);

  const cliffs = buildCliffs();
  scene.add(cliffs);

  // grassy lip + shoreline foam
  const foamGeo = new THREE.RingGeometry(47.5, 62, 64);
  const foamMat = new THREE.MeshBasicMaterial({ color: 0xd7e8df, transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false });
  const foam = new THREE.Mesh(foamGeo, foamMat);
  foam.rotation.x = -Math.PI / 2;
  foam.position.y = -7.32;
  scene.add(foam);

  // ---------- water ----------
  const waterMat = new THREE.ShaderMaterial({
    uniforms: { uTime: timeUniform, uDeep: { value: new THREE.Color(0x245b70) }, uShallow: { value: new THREE.Color(0x4f96a3) }, uSun: { value: new THREE.Vector3(-48, 62, 34) } },
    vertexShader: `
      uniform float uTime;
      varying vec3 vWorld;
      varying float vWave;
      void main() {
        vec3 p = position;
        float w = sin(p.x * 0.11 + uTime * 0.55) * 0.14 + sin(p.y * 0.18 - uTime * 0.42) * 0.1 + sin((p.x + p.y) * 0.27 + uTime * 0.9) * 0.05;
        p.z += w;
        vWave = w;
        vec4 world = modelMatrix * vec4(p, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,
    fragmentShader: `
      uniform float uTime; uniform vec3 uDeep; uniform vec3 uShallow; uniform vec3 uSun;
      varying vec3 vWorld; varying float vWave;
      void main() {
        float bands = sin(vWorld.x * 0.32 + uTime * 0.7) * sin(vWorld.z * 0.27 - uTime * 0.5);
        vec3 col = mix(uDeep, uShallow, 0.35 + bands * 0.13 + vWave * 0.35);
        vec3 viewDir = normalize(cameraPosition - vWorld);
        float fres = pow(1.0 - max(viewDir.y, 0.0), 3.0);
        col = mix(col, vec3(0.58, 0.79, 0.83), fres * 0.32);
        vec3 sunDir = normalize(uSun);
        float glint = pow(max(dot(reflect(-sunDir, vec3(0.0, 1.0, 0.0)), viewDir), 0.0), 72.0);
        col += vec3(1.0, 0.86, 0.62) * glint * 0.45;
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const water = new THREE.Mesh(new THREE.PlaneGeometry(520, 520, 96, 96), waterMat);
  water.rotation.x = -Math.PI / 2;
  water.position.y = -7.65;
  water.receiveShadow = false;
  scene.add(water);

  // ---------- trees, rocks, flowers ----------
  const treePositions = [];
  let guard = 0;
  while (treePositions.length < (isMobile ? 48 : 74) && guard++ < 1200) {
    const a = Math.random() * Math.PI * 2;
    const r = rand(34, 46.5);
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (Math.abs(x) < 32 && Math.abs(z) < 32) continue;
    if (SPAWNS.some(s => Math.hypot(x - s.x, z - s.z) < 8)) continue;
    treePositions.push({ x, z, s: rand(0.75, 1.3) });
  }
  const trunkGeo = new THREE.CylinderGeometry(0.16, 0.28, 2.2, 5);
  const trunkMesh = new THREE.InstancedMesh(trunkGeo, material(0x6a4a2d, { roughness: 0.95 }), treePositions.length);
  const leafGeo = new THREE.IcosahedronGeometry(1.7, 0);
  const leafMesh = new THREE.InstancedMesh(leafGeo, material(0x5c8748, { roughness: 0.95 }), treePositions.length * 2);
  const dummy = new THREE.Object3D();
  const treeColors = [0x5c8748, 0x6e9852, 0x4f7b42, 0x7aa15a];
  treePositions.forEach((t, i) => {
    dummy.position.set(t.x, 1.1 * t.s, t.z);
    dummy.rotation.set(0, Math.random() * 6, 0);
    dummy.scale.setScalar(t.s);
    dummy.updateMatrix();
    trunkMesh.setMatrixAt(i, dummy.matrix);
    const c = new THREE.Color(treeColors[i % treeColors.length]);
    leafMesh.setColorAt(i * 2, c);
    dummy.position.set(t.x, 2.9 * t.s, t.z);
    dummy.scale.set(t.s * rand(0.9, 1.25), t.s * rand(0.95, 1.3), t.s * rand(0.9, 1.25));
    dummy.updateMatrix();
    leafMesh.setMatrixAt(i * 2, dummy.matrix);
    dummy.position.set(t.x + 0.3, 4.1 * t.s, t.z - 0.1);
    dummy.scale.setScalar(t.s * rand(0.65, 0.9));
    dummy.updateMatrix();
    leafMesh.setMatrixAt(i * 2 + 1, dummy.matrix);
    leafMesh.setColorAt(i * 2 + 1, c);
  });
  trunkMesh.castShadow = true; trunkMesh.receiveShadow = true;
  leafMesh.castShadow = true; leafMesh.receiveShadow = true;
  leafMesh.instanceColor.needsUpdate = true;
  scene.add(trunkMesh, leafMesh);

  const rockCount = 30;
  const rockMesh = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(1, 0), material(0x948d80, { roughness: 0.95 }), rockCount);
  for (let i = 0; i < rockCount; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = rand(31, 46);
    dummy.position.set(Math.cos(a) * r, rand(0.1, 0.4), Math.sin(a) * r);
    dummy.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
    dummy.scale.set(rand(0.6, 1.9), rand(0.5, 1.1), rand(0.6, 1.7));
    dummy.updateMatrix();
    rockMesh.setMatrixAt(i, dummy.matrix);
  }
  rockMesh.castShadow = true; rockMesh.receiveShadow = true;
  scene.add(rockMesh);

  // flowers outside the building grid
  const flowerCount = 150;
  const flowerMesh = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.11, 0), new THREE.MeshStandardMaterial({ roughness: 0.9, vertexColors: false }), flowerCount);
  const flowerColors = [0xe8c76e, 0xdf8a8a, 0xc9b6e6, 0xf2e6c4];
  for (let i = 0; i < flowerCount; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = rand(31, 46);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    dummy.position.set(x, 0.18 + Math.random() * 0.08, z);
    dummy.rotation.set(0, Math.random() * 3, 0);
    dummy.scale.setScalar(rand(0.7, 1.6));
    dummy.updateMatrix();
    flowerMesh.setMatrixAt(i, dummy.matrix);
    flowerMesh.setColorAt(i, new THREE.Color(flowerColors[i % flowerColors.length]));
  }
  flowerMesh.instanceColor.needsUpdate = true;
  scene.add(flowerMesh);

  // ---------- clouds ----------
  const clouds = [];
  const cloudMat = new THREE.MeshStandardMaterial({ color: 0xf4efe4, roughness: 1, transparent: true, opacity: 0.92, flatShading: true });
  for (let i = 0; i < 9; i++) {
    const g = new THREE.Group();
    const n = 3 + (i % 3);
    for (let k = 0; k < n; k++) {
      const s = rand(2.4, 5.2);
      const m = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 1), cloudMat);
      m.position.set(rand(-4, 4), rand(-0.7, 0.7), rand(-3, 3));
      m.scale.y = rand(0.45, 0.7);
      g.add(m);
    }
    const a = (i / 9) * Math.PI * 2 + rand(-0.3, 0.3);
    const r = rand(85, 170);
    g.position.set(Math.cos(a) * r, rand(26, 44), Math.sin(a) * r);
    g.scale.setScalar(rand(0.7, 1.4));
    g.userData.speed = rand(0.4, 1.1);
    scene.add(g);
    clouds.push(g);
  }

  // ---------- distant isles ----------
  for (let i = 0; i < 3; i++) {
    const a = 1.1 + i * 2.1;
    const r = 150 + i * 25;
    const g = new THREE.Group();
    const c = cone(g, rand(10, 16), rand(9, 15), 0x6b7d63, 0, 2, 0, { seg: 7, matOpts: { roughness: 1 } });
    c.scale.z = 1.4;
    const topDisc = cyl(g, 9, 11, 1, 0x6f9456, 0, 7, 0, { seg: 7 });
    topDisc.scale.z = 1.3;
    const t = cone(g, 2.6, 5, 0x4e7a44, rand(-2, 2), 11, rand(-2, 2), { seg: 5 });
    g.position.set(Math.cos(a) * r, -8, Math.sin(a) * r);
    g.rotation.y = rand(0, 5);
    scene.add(g);
  }

  // ---------- enemy camps ----------
  const camps = SPAWNS.map((s, idx) => makeCamp(scene, s, idx));

  // ---------- birds ----------
  const birds = [];
  const birdMat = new THREE.LineBasicMaterial({ color: 0x2c3236, transparent: true, opacity: 0.7 });
  for (let i = 0; i < 4; i++) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute([-0.8, 0.3, 0, 0, 0, 0, 0.8, 0.3, 0], 3));
    const line = new THREE.Line(geo, birdMat);
    line.userData = { a: Math.random() * 6, r: rand(55, 85), y: rand(18, 30), speed: rand(0.03, 0.07) };
    scene.add(line);
    birds.push(line);
  }

  // ---------- realm skies ----------
  let skyTheme = 'day';
  function applySkyTheme(name) {
    const key = SKY_THEMES[name] ? name : 'day';
    if (key === skyTheme) return key;
    const t = SKY_THEMES[key];
    skyTheme = key;
    skyMat.uniforms.uTop.value.setHex(t.top);
    skyMat.uniforms.uMid.value.setHex(t.mid);
    skyMat.uniforms.uHorizon.value.setHex(t.horizon);
    scene.background = new THREE.Color(t.bg);
    if (scene.fog) scene.fog.color.setHex(t.fog);
    hemi.color.setHex(t.hemiSky);
    hemi.groundColor.setHex(t.hemiGround);
    hemi.intensity = t.hemi;
    sun.color.setHex(t.sun);
    sun.intensity = t.sunI;
    rim.intensity = key === 'storm' ? 0.22 : key === 'crow' ? 0.5 : 0.45;
    waterMat.uniforms.uDeep.value.setHex(t.deep);
    waterMat.uniforms.uShallow.value.setHex(t.shallow);
    cloudMat.color.setHex(t.cloud);
    cloudMat.opacity = t.cloudO;
    foamMat.color.setHex(t.foam);
    return key;
  }

  // ---------- ambient animations ----------
  function update(dt, t) {
    timeUniform.value = t;
    foamMat.opacity = 0.13 + Math.sin(t * 0.5) * 0.035;
    for (const c of clouds) {
      c.position.x += c.userData.speed * dt;
      if (c.position.x > 200) c.position.x = -200;
    }
    for (const b of birds) {
      const u = b.userData;
      u.a += u.speed * dt;
      b.position.set(Math.cos(u.a) * u.r, u.y + Math.sin(t * 0.7 + u.a) * 1.5, Math.sin(u.a) * u.r);
      b.rotation.y = -u.a + Math.PI / 2;
    }
    for (const camp of camps) camp.update(dt, t);
  }

  return { update, sun, water, camps, top, isMobile, applySkyTheme, get skyTheme() { return skyTheme; } };
}

function buildIslandTop() {
  const seg = 72;
  const rings = 12;
  const positions = [];
  const colors = [];
  const indices = [];
  const rad = (a) => 49.5 + Math.sin(a * 3.1) * 1.4 + Math.sin(a * 5.7 + 1.1) * 0.9 + Math.sin(a * 9.3 + 2) * 0.45;

  positions.push(0, 0.02, 0);
  colors.push(0.44, 0.58, 0.31);
  for (let r = 1; r <= rings; r++) {
    const radF = r / rings;
    for (let s = 0; s < seg; s++) {
      const a = (s / seg) * Math.PI * 2;
      const rr = rad(a) * radF;
      const x = Math.cos(a) * rr;
      const z = Math.sin(a) * rr;
      // gentle rise only near the very edge
      const edge = Math.max(0, (radF - 0.88) / 0.12);
      const y = 0.02 + edge * edge * 0.55 + (Math.sin(a * 7.1) * 0.5 + 0.5) * 0.1 * edge;
      positions.push(x, y, z);
      const n = Math.sin(x * 0.24 + z * 0.13) * 0.5 + 0.5;
      const n2 = Math.sin(x * 0.08 - z * 0.22 + 1.4) * 0.5 + 0.5;
      const c = new THREE.Color(0x6e9751).lerp(new THREE.Color(0x84a965), n * 0.55 + n2 * 0.25);
      colors.push(c.r, c.g, c.b);
    }
  }
  for (let s = 0; s < seg; s++) {
    indices.push(0, 1 + ((s + 1) % seg), 1 + s);
  }
  for (let r = 1; r < rings; r++) {
    for (let s = 0; s < seg; s++) {
      const a = 1 + (r - 1) * seg + s;
      const b = 1 + (r - 1) * seg + ((s + 1) % seg);
      const c = 1 + r * seg + s;
      const d = 1 + r * seg + ((s + 1) % seg);
      indices.push(a, b, c, b, d, c);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  g.setIndex(indices);
  g.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.97, metalness: 0 });
  const m = new THREE.Mesh(g, mat);
  m.receiveShadow = true;
  return m;
}

function buildCliffs() {
  const seg = 72;
  const rings = [
    { r: 1.0, y: 0.02, color: new THREE.Color(0x747d4f) },
    { r: 0.99, y: -1.6, color: new THREE.Color(0x8c775e) },
    { r: 1.02, y: -4.6, color: new THREE.Color(0x76614c) },
    { r: 0.96, y: -8.2, color: new THREE.Color(0x665542) },
    { r: 0.9, y: -13.5, color: new THREE.Color(0x4d4538) },
  ];
  const positions = [];
  const colors = [];
  const indices = [];
  const rad = (a) => 49.5 + Math.sin(a * 3.1) * 1.4 + Math.sin(a * 5.7 + 1.1) * 0.9 + Math.sin(a * 9.3 + 2) * 0.45;
  for (let r = 0; r < rings.length; r++) {
    for (let s = 0; s < seg; s++) {
      const a = (s / seg) * Math.PI * 2;
      const rr = rad(a) * rings[r].r * (1 + Math.sin(a * 11 + r * 1.7) * 0.012);
      positions.push(Math.cos(a) * rr, rings[r].y, Math.sin(a) * rr);
      const c = rings[r].color.clone();
      const v = Math.sin(a * 9 + r) * 0.06;
      c.offsetHSL(0, 0, v);
      colors.push(c.r, c.g, c.b);
    }
  }
  for (let r = 0; r < rings.length - 1; r++) {
    for (let s = 0; s < seg; s++) {
      const a = r * seg + s;
      const b = r * seg + ((s + 1) % seg);
      const c = (r + 1) * seg + s;
      const d = (r + 1) * seg + ((s + 1) % seg);
      indices.push(a, b, c, b, d, c);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  g.setIndex(indices);
  g.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, flatShading: true });
  const m = new THREE.Mesh(g, mat);
  m.receiveShadow = true;
  return m;
}

function makeCamp(scene, spawn, idx) {
  const g = new THREE.Group();
  g.position.set(spawn.x, 0, spawn.z);
  g.rotation.y = Math.atan2(-spawn.x, -spawn.z) + Math.PI;
  const banner = makeBanner('red', 1.05);
  banner.group.position.set(4.5, 0, 1);
  g.add(banner.group);
  const tentColors = [0x6f5b46, 0x5d4c3b, 0x7a644c];
  for (let i = 0; i < 3; i++) {
    const t = new THREE.Group();
    t.position.set(-3.5 + i * 3.4, 0, -1.2 + (i % 2) * 2.5);
    t.rotation.y = rand(-0.5, 0.5);
    cone(t, 1.9, 2.7, tentColors[i], 0, 1.35, 0, { seg: 4 });
    box(t, 0.9, 1.45, 0.06, 0x34281d, 0, 0.7, 1.05);
    g.add(t);
  }
  const fire = new THREE.Group();
  fire.position.set(0, 0, 3.5);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    sphere(fire, 0.34, 0x6b6258, Math.cos(a) * 0.8, 0.2, Math.sin(a) * 0.8);
  }
  const flame = cone(fire, 0.4, 1.2, 0xff9b4a, 0, 0.75, 0, { seg: 5 });
  flame.material = new THREE.MeshBasicMaterial({ color: 0xffa24a, transparent: true, opacity: 0.9 });
  g.add(fire);
  const glow = new THREE.PointLight(0xff8c3a, 6, 12, 2);
  glow.position.set(0, 1.2, 3.5);
  g.add(glow);
  scene.add(g);
  return {
    group: g,
    update(dt, t) {
      flame.scale.setScalar(0.85 + Math.sin(t * 9 + idx) * 0.16);
      glow.intensity = 5 + Math.sin(t * 12 + idx * 2) * 1.6;
      banner.flag.rotation.y = Math.sin(t * 2.1 + idx) * 0.18;
    },
  };
}
