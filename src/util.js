import * as THREE from 'three';

const matCache = new Map();

export function material(color, opts = {}) {
  const key = `${color}|${opts.roughness ?? 0.82}|${opts.metalness ?? 0.02}|${opts.flat ?? true}|${opts.emissive ?? 0}|${opts.emissiveIntensity ?? 1}|${opts.transparent ?? false}|${opts.opacity ?? 1}|${opts.side ?? 0}`;
  if (matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.82,
    metalness: opts.metalness ?? 0.02,
    flatShading: opts.flat ?? true,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 1,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    side: opts.side ?? THREE.FrontSide,
  });
  matCache.set(key, m);
  return m;
}

export function basic(color, opts = {}) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    depthTest: opts.depthTest ?? true,
    depthWrite: opts.depthWrite ?? true,
    side: opts.side ?? THREE.FrontSide,
    toneMapped: opts.toneMapped ?? true,
  });
}

export function mesh(geo, mat, opts = {}) {
  const m = new THREE.Mesh(geo, mat);
  if (opts.x !== undefined || opts.y !== undefined || opts.z !== undefined) {
    m.position.set(opts.x || 0, opts.y || 0, opts.z || 0);
  }
  if (opts.rx) m.rotation.x = opts.rx;
  if (opts.ry) m.rotation.y = opts.ry;
  if (opts.rz) m.rotation.z = opts.rz;
  if (opts.cast !== false) m.castShadow = true;
  if (opts.receive !== false) m.receiveShadow = true;
  if (opts.scale) m.scale.setScalar(opts.scale);
  if (opts.parent) opts.parent.add(m);
  return m;
}

export function box(parent, w, h, d, color, x = 0, y = 0, z = 0, opts = {}) {
  const mat = opts.mat || material(color, opts.matOpts);
  const g = new THREE.BoxGeometry(w, h, d);
  return mesh(g, mat, { x, y, z, ry: opts.ry, rx: opts.rx, rz: opts.rz, parent, cast: opts.cast, receive: opts.receive });
}

export function cyl(parent, rTop, rBot, h, color, x = 0, y = 0, z = 0, opts = {}) {
  const mat = opts.mat || material(color, opts.matOpts);
  const g = new THREE.CylinderGeometry(rTop, rBot, h, opts.seg || 8, opts.hseg || 1, false);
  return mesh(g, mat, { x, y, z, ry: opts.ry, rx: opts.rx, rz: opts.rz, parent, cast: opts.cast, receive: opts.receive });
}

export function cone(parent, r, h, color, x = 0, y = 0, z = 0, opts = {}) {
  const mat = opts.mat || material(color, opts.matOpts);
  const g = new THREE.ConeGeometry(r, h, opts.seg || 8, 1);
  return mesh(g, mat, { x, y, z, ry: opts.ry, rx: opts.rx, rz: opts.rz, parent, cast: opts.cast, receive: opts.receive });
}

export function sphere(parent, r, color, x = 0, y = 0, z = 0, opts = {}) {
  const mat = opts.mat || material(color, opts.matOpts);
  const g = new THREE.IcosahedronGeometry(r, opts.detail ?? 1);
  return mesh(g, mat, { x, y, z, parent, scale: opts.scale, cast: opts.cast, receive: opts.receive });
}

export function plane(parent, w, h, color, x = 0, y = 0, z = 0, opts = {}) {
  const mat = opts.mat || material(color, { ...opts.matOpts, side: THREE.DoubleSide, transparent: opts.transparent, opacity: opts.opacity });
  const g = new THREE.PlaneGeometry(w, h, opts.segW || 1, opts.segH || 1);
  return mesh(g, mat, { x, y, z, rx: opts.rx, ry: opts.ry, rz: opts.rz, parent, cast: opts.cast ?? false, receive: opts.receive ?? false });
}

export function addPostField(group, w, d, y, color) {
  // four corner posts
  const inset = 0.3;
  for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
    box(group, 0.16, 1.5, 0.16, color, sx * (w / 2 - inset), y + 0.75, sz * (d / 2 - inset));
  }
}

export function addCrenellations(group, w, d, topY, opts = {}) {
  const color = opts.color ?? 0xc9c0ac;
  const mh = opts.h ?? 0.52;
  const mw = opts.w ?? 0.44;
  const md = opts.d ?? 0.38;
  const n = opts.n ?? 5;
  const mat = material(color, { roughness: 0.9 });
  const stepX = w / n;
  const stepZ = d / n;
  for (let k = 0; k < n; k++) {
    const px = -w / 2 + stepX * (k + 0.5);
    const pz = -d / 2 + stepZ * (k + 0.5);
    if (!opts.noNorth) box(group, mw, mh, md, color, px, topY + mh / 2, -d / 2 + md / 2, { mat });
    if (!opts.noSouth) box(group, mw, mh, md, color, px, topY + mh / 2, d / 2 - md / 2, { mat });
    if (!opts.noWest) box(group, md, mh, mw, color, -w / 2 + md / 2, topY + mh / 2, pz, { mat });
    if (!opts.noEast) box(group, md, mh, mw, color, w / 2 - md / 2, topY + mh / 2, pz, { mat });
  }
}

export function gableRoof(parent, w, d, h, color, x, y, z, opts = {}) {
  // simple triangular prism, ridge runs along z
  const w2 = w / 2;
  const d2 = d / 2;
  const verts = new Float32Array([
    -w2, 0, -d2, w2, 0, -d2, 0, h, -d2,
    -w2, 0, d2, 0, h, d2, w2, 0, d2,
    -w2, 0, -d2, 0, h, -d2, 0, h, d2,
    -w2, 0, -d2, 0, h, d2, -w2, 0, d2,
    w2, 0, -d2, w2, 0, d2, 0, h, d2,
    w2, 0, -d2, 0, h, d2, 0, h, -d2,
  ]);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(verts, 3));
  g.computeVertexNormals();
  const mat = opts.mat || material(color, { roughness: 0.9 });
  return mesh(g, mat, { x, y, z, parent, ry: opts.ry });
}

const BANNER_PALETTES = {
  blue: { bg: '#244763', fg: '#e7c37a', emblem: 'crown' },
  red: { bg: '#5f1f1b', fg: '#d9a441', emblem: 'crown' },
  frost: { bg: '#2f5a72', fg: '#d6eef8', emblem: 'snow' },
  ember: { bg: '#3a1616', fg: '#f08a5d', emblem: 'flame' },
  verdant: { bg: '#1f3b2a', fg: '#b7d99a', emblem: 'leaf' },
  sun: { bg: '#4a2e10', fg: '#ffd86b', emblem: 'sun' },
  rat: { bg: '#3d3524', fg: '#c9b18a', emblem: 'rat' },
};
const bannerTexCache = new Map();

export function bannerTexture(kind = 'blue') {
  const key = BANNER_PALETTES[kind] ? kind : 'blue';
  if (bannerTexCache.has(key)) return bannerTexCache.get(key);
  const pal = BANNER_PALETTES[key];
  const c = document.createElement('canvas');
  c.width = 64; c.height = 96;
  const g = c.getContext('2d');
  g.fillStyle = pal.bg; g.fillRect(0, 0, 64, 96);
  g.strokeStyle = pal.fg; g.lineWidth = 4; g.strokeRect(5, 5, 54, 86);
  g.fillStyle = pal.fg;
  const drawCrown = () => {
    g.beginPath();
    g.moveTo(17, 48); g.lineTo(17, 33); g.lineTo(25, 40); g.lineTo(32, 26);
    g.lineTo(39, 40); g.lineTo(47, 33); g.lineTo(47, 48); g.closePath(); g.fill();
    g.fillRect(17, 51, 30, 6);
  };
  if (pal.emblem === 'sun') {
    g.beginPath(); g.arc(32, 42, 11, 0, Math.PI * 2); g.fill();
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      g.save(); g.translate(32, 42); g.rotate(a);
      g.fillRect(-1.4, -20, 2.8, 7); g.restore();
    }
  } else if (pal.emblem === 'snow') {
    g.lineWidth = 3;
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      g.beginPath(); g.moveTo(32, 42);
      g.lineTo(32 + Math.cos(a) * 16, 42 + Math.sin(a) * 16); g.stroke();
      g.beginPath();
      g.arc(32 + Math.cos(a) * 11, 42 + Math.sin(a) * 11, 2.1, 0, Math.PI * 2); g.fill();
    }
  } else if (pal.emblem === 'flame') {
    g.beginPath();
    g.moveTo(32, 24); g.bezierCurveTo(45, 36, 43, 50, 32, 58);
    g.bezierCurveTo(21, 50, 19, 36, 32, 24); g.fill();
    g.fillStyle = pal.bg;
    g.beginPath();
    g.moveTo(32, 39); g.bezierCurveTo(38, 46, 36, 52, 32, 54);
    g.bezierCurveTo(28, 52, 26, 46, 32, 39); g.fill();
  } else if (pal.emblem === 'leaf') {
    g.beginPath();
    g.moveTo(32, 24); g.bezierCurveTo(49, 34, 45, 54, 32, 59);
    g.bezierCurveTo(19, 54, 15, 34, 32, 24); g.fill();
    g.strokeStyle = pal.bg; g.lineWidth = 2;
    g.beginPath(); g.moveTo(32, 28); g.lineTo(32, 57); g.stroke();
    for (let i = 0; i < 4; i++) {
      g.beginPath(); g.moveTo(32, 35 + i * 5); g.lineTo(27 - i, 31 + i * 5); g.stroke();
      g.beginPath(); g.moveTo(32, 38 + i * 5); g.lineTo(37 + i, 34 + i * 5); g.stroke();
    }
  } else if (pal.emblem === 'rat') {
    g.beginPath(); g.arc(32, 44, 13, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.arc(23, 33, 7, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.arc(41, 33, 7, 0, Math.PI * 2); g.fill();
    g.fillStyle = pal.bg;
    g.beginPath(); g.arc(27, 41, 2, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.arc(37, 41, 2, 0, Math.PI * 2); g.fill();
    g.fillStyle = pal.fg; g.fillRect(30, 48, 4, 3);
  } else {
    drawCrown();
    g.beginPath();
    g.arc(32, 68, 5, 0, Math.PI * 2); g.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  bannerTexCache.set(key, tex);
  return tex;
}

export function makeBanner(kind = 'blue', scale = 1) {
  const group = new THREE.Group();
  const pole = cyl(group, 0.055 * scale, 0.075 * scale, 3.4 * scale, 0x4d3b2a, 0, 1.7 * scale, 0, { seg: 5 });
  pole.castShadow = false;
  const tex = bannerTexture(kind);
  const geo = new THREE.PlaneGeometry(0.92 * scale, 1.35 * scale, 6, 1);
  const mat = new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide, roughness: 0.92, metalness: 0 });
  const flag = new THREE.Mesh(geo, mat);
  flag.position.set(0.48 * scale, 2.6 * scale, 0);
  flag.castShadow = false;
  group.add(flag);
  return { group, flag, base: geo.attributes.position.array.slice(), phase: Math.random() * 10 };
}

export function makeRoadTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#7f7d70'; g.fillRect(0, 0, 128, 128);
  const cols = ['#8d8a7c', '#767467', '#969384', '#6f6d62', '#858275'];
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const px = x * 16 + (y % 2 ? 8 : 0);
      g.fillStyle = cols[(x * 3 + y * 5) % cols.length];
      g.beginPath();
      const ox = (px % 128) + (Math.random() * 2 - 1);
      const oy = y * 16 + (Math.random() * 2 - 1);
      g.roundRect(ox + 1, oy + 1, 13, 13, 4);
      g.fill();
    }
  }
  g.fillStyle = 'rgba(35,35,30,.12)';
  for (let i = 0; i < 140; i++) g.fillRect(Math.random() * 128, Math.random() * 128, 1.4, 1.4);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 4;
  return tex;
}

export function rand(min, max) { return min + Math.random() * (max - min); }
export function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }
export function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
export function lerp(a, b, t) { return a + (b - a) * t; }
export function damp(a, b, lambda, dt) { return lerp(a, b, 1 - Math.exp(-lambda * dt)); }

export function disposeGroup(group) {
  group.traverse(o => {
    if (o.isMesh) {
      if (o.geometry && !o.geometry.userData?.shared) o.geometry.dispose?.();
    }
  });
}

export const COLORS = {
  stone: 0xc9c1af,
  stoneDark: 0x9d9584,
  stoneLight: 0xded5c0,
  plaster: 0xe6d9bc,
  timber: 0x6b4a2e,
  wood: 0x7d5a37,
  woodDark: 0x55402a,
  roof: 0xa84b38,
  roofDark: 0x82382b,
  grass: 0x739b53,
  grassDark: 0x54763f,
  gold: 0xd9b467,
  blue: 0x335a79,
  water: 0x2b6478,
  red: 0x92362a,
  iron: 0x596065,
};
