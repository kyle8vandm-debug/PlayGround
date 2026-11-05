import * as THREE from 'three';
import { rand } from './util.js';

const MAX = 520;

export class Particles {
  constructor(scene) {
    this.positions = new Float32Array(MAX * 3);
    this.colors = new Float32Array(MAX * 3);
    this.sizes = new Float32Array(MAX);
    this.alphas = new Float32Array(MAX);
    this.vel = new Float32Array(MAX * 3);
    this.life = new Float32Array(MAX);
    this.maxLife = new Float32Array(MAX);
    this.gravity = new Float32Array(MAX);
    this.drag = new Float32Array(MAX);
    this.baseSize = new Float32Array(MAX);
    this.cursor = 0;
    this.active = 0;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.colors, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.sizes, 1));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1));
    geo.setDrawRange(0, 0);
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      vertexShader: `
        attribute float aSize;
        attribute float aAlpha;
        attribute vec3 aColor;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = aColor; vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (300.0 / max(1.0, -mv.z));
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          float a = smoothstep(0.5, 0.08, d) * vAlpha;
          if (a < 0.01) discard;
          gl_FragColor = vec4(vColor, a);
        }`,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 20;
    scene.add(this.points);
    this.geo = geo;
  }

  spawn(x, y, z, opts = {}) {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % MAX;
    const p = i * 3;
    this.positions[p] = x + (opts.jitter ?? 0) * (Math.random() - 0.5);
    this.positions[p + 1] = y + (opts.jitter ?? 0) * 0.5 * Math.random();
    this.positions[p + 2] = z + (opts.jitter ?? 0) * (Math.random() - 0.5);
    const sp = opts.speed ?? 1;
    const up = opts.up ?? 0.5;
    this.vel[p] = (Math.random() - 0.5) * sp;
    this.vel[p + 1] = (Math.random() * 0.7 + up) * sp;
    this.vel[p + 2] = (Math.random() - 0.5) * sp;
    const col = new THREE.Color(opts.color ?? 0xffffff);
    const v = opts.colorJitter ?? 0.12;
    this.colors[p] = col.r * rand(1 - v, 1 + v);
    this.colors[p + 1] = col.g * rand(1 - v, 1 + v);
    this.colors[p + 2] = col.b * rand(1 - v, 1 + v);
    const life = opts.life ?? 1;
    this.life[i] = life;
    this.maxLife[i] = life;
    this.gravity[i] = opts.gravity ?? -2;
    this.drag[i] = opts.drag ?? 0.8;
    this.baseSize[i] = opts.size ?? 6;
    this.sizes[i] = this.baseSize[i];
    this.alphas[i] = opts.alpha ?? 1;
    this.active = Math.min(MAX, this.active + 1);
    return i;
  }

  burst(pos, opts = {}) {
    const n = opts.count ?? 10;
    for (let k = 0; k < n; k++) {
      this.spawn(pos.x, pos.y, pos.z, {
        ...opts,
        speed: (opts.speed ?? 2) * rand(0.45, 1.25),
        size: (opts.size ?? 8) * rand(0.55, 1.35),
        life: (opts.life ?? 1) * rand(0.6, 1.25),
        up: opts.up ?? 0.4,
      });
    }
  }

  update(dt) {
    if (!this.active) return;
    let count = 0;
    for (let i = 0; i < MAX; i++) {
      if (this.life[i] <= 0) {
        if (this.alphas[i] !== 0) this.alphas[i] = 0;
        continue;
      }
      this.life[i] -= dt;
      const p = i * 3;
      const t = Math.max(0, this.life[i] / this.maxLife[i]);
      this.vel[p + 1] += this.gravity[i] * dt;
      const d = Math.exp(-this.drag[i] * dt);
      this.vel[p] *= d; this.vel[p + 2] *= d;
      this.positions[p] += this.vel[p] * dt;
      this.positions[p + 1] += this.vel[p + 1] * dt;
      this.positions[p + 2] += this.vel[p + 2] * dt;
      if (this.positions[p + 1] < 0.06) {
        this.positions[p + 1] = 0.06;
        this.vel[p + 1] *= -0.25;
      }
      this.sizes[i] = this.baseSize[i] * (0.5 + t * 0.8);
      this.alphas[i] = t < 0.25 ? t / 0.25 : Math.min(1, t * 1.4);
      count++;
    }
    this.active = count;
    this.geo.setDrawRange(0, MAX);
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.aColor.needsUpdate = true;
    this.geo.attributes.aSize.needsUpdate = true;
    this.geo.attributes.aAlpha.needsUpdate = true;
  }
}

export function dustBurst(fx, pos, color = 0xbfb49c, n = 18, power = 2.4) {
  fx.burst(pos, {
    count: n, color, speed: power, life: 1.15, size: 10, gravity: -1.2, drag: 1.8, up: 0.25, alpha: 0.75,
  });
}

export function sparkBurst(fx, pos, color = 0xffd27a, n = 12) {
  fx.burst(pos, {
    count: n, color, speed: 4, life: 0.6, size: 5, gravity: -6, drag: 0.6, up: 0.6, alpha: 1,
  });
}

export function bloodBurst(fx, pos, color = 0x8e2f27, n = 10) {
  fx.burst(pos, {
    count: n, color, speed: 2.8, life: 0.7, size: 6, gravity: -7, drag: 0.5, up: 0.5, alpha: 0.9,
  });
}

export function fireBurst(fx, pos, n = 20) {
  fx.burst(pos, { count: n, color: 0xff8c3a, speed: 3.2, life: 1.3, size: 12, gravity: 1.4, drag: 1.0, up: 0.8, alpha: 0.85 });
  fx.burst(pos, { count: Math.round(n * 0.5), color: 0xffd27a, speed: 2, life: 0.5, size: 6, gravity: -2, drag: 0.8, up: 0.4, alpha: 1 });
}

export class FloatingText {
  constructor(scene) {
    this.scene = scene;
    this.items = [];
    this.canvas = document.createElement('canvas');
    this.canvas.width = 256;
    this.canvas.height = 64;
    this.ctx = this.canvas.getContext('2d');
  }
  spawn(text, pos, color = '#f2e6ca', size = 30) {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 64;
    const g = c.getContext('2d');
    g.font = `700 ${size}px Georgia, serif`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.lineWidth = 6;
    g.strokeStyle = 'rgba(10,12,14,.65)';
    g.strokeText(text, 128, 34);
    g.fillStyle = color;
    g.fillText(text, 128, 34);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false });
    const sprite = new THREE.Sprite(mat);
    sprite.position.copy(pos);
    sprite.scale.set(4, 1, 1);
    sprite.renderOrder = 50;
    this.scene.add(sprite);
    this.items.push({ sprite, life: 1.4, vy: 1.4, mat, tex });
  }
  update(dt) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i];
      it.life -= dt;
      it.sprite.position.y += it.vy * dt;
      it.vy *= 0.97;
      it.mat.opacity = Math.max(0, Math.min(1, it.life * 1.8));
      if (it.life <= 0) {
        this.scene.remove(it.sprite);
        it.mat.dispose(); it.tex.dispose();
        this.items.splice(i, 1);
      }
    }
  }
}
