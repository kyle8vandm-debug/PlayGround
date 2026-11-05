import * as THREE from 'three';
import { createWorld } from './world.js';
import { Castle } from './castle.js';
import { Particles, FloatingText } from './fx.js';
import { AudioEngine } from './audio.js';
import { Game } from './game.js';
import { HALF } from './defs.js';
import { clamp } from './util.js';

const canvas = document.getElementById('scene');

// ------------------------------------------------------------------
// Renderer
// ------------------------------------------------------------------
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: 'high-performance',
  stencil: false,
});
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x9ec6dd);

const camera = new THREE.PerspectiveCamera(50, 1, 0.5, 520);
camera.position.set(48, 52, 52);

const world = createWorld(scene, renderer);
const fx = new Particles(scene);
const floatText = new FloatingText(scene);
const audio = new AudioEngine();
const castle = new Castle(scene, fx, audio);

document.body.classList.add('cinematic');

// ------------------------------------------------------------------
// Camera / pointer controls
// ------------------------------------------------------------------
const GROUND = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

class Controls {
  constructor(camera, dom, isMobile) {
    this.camera = camera;
    this.dom = dom;
    this.isMobile = isMobile;
    this.game = null;

    this.target = new THREE.Vector3(0, 0, 0);
    this.desiredTarget = new THREE.Vector3(0, 0, 0);
    this.yaw = 0.74;
    this.pitch = 0.74;
    this.dist = isMobile ? 70 : 66;

    this.minDist = 24;
    this.maxDist = isMobile ? 155 : 135;
    this.minPitch = 0.2;
    this.maxPitch = 1.34;

    this.cinematic = true;
    this.cineTime = 0;
    this.pointers = new Map();
    this.mode = null;
    this.pinchStart = 0;
    this.midStart = { x: 0, y: 0 };
    this.downAt = 0;
    this.moved = false;
    this.multi = false;
    this.pointerStart = { x: 0, y: 0 };
    this.shakeAmt = 0;
    this.time = 0;
    this.raycaster = new THREE.Raycaster();
    this.ndc = new THREE.Vector2();
    this.groundPoint = new THREE.Vector3();
    this._right = new THREE.Vector3();
    this._forward = new THREE.Vector3();
    this._mid = { x: 0, y: 0 };

    this.bind();
    this.focusHome(true);
    this.applyCamera(0);
  }

  bind() {
    const dom = this.dom;
    dom.addEventListener('pointerdown', e => this.onDown(e), { passive: false });
    dom.addEventListener('pointermove', e => this.onMove(e), { passive: false });
    dom.addEventListener('pointerup', e => this.onUp(e), { passive: false });
    dom.addEventListener('pointercancel', e => this.onUp(e), { passive: false });
    dom.addEventListener('pointerleave', e => this.onLeave(e));
    dom.addEventListener('wheel', e => this.onWheel(e), { passive: false });
    dom.addEventListener('contextmenu', e => e.preventDefault());
    window.addEventListener('blur', () => {
      this.pointers.clear();
      this.mode = null;
      if (this.game) this.game.endPaint();
    });
  }

  setCinematic(on) {
    if (this.cinematic === on) return;
    this.cinematic = on;
    document.body.classList.toggle('cinematic', on);
    if (!on) this.focusHome(true);
    else {
      this.desiredTarget.set(0, 3.5, 0);
      this.yaw = 0.5;
      this.pitch = 0.34;
      this.dist = this.isMobile ? 104 : 88;
    }
  }

  focusHome(instant = false) {
    this.desiredTarget.set(0, 1.5, 0);
    if (instant) this.target.copy(this.desiredTarget);
    this.yaw = 0.72;
    this.pitch = this.isMobile ? 0.86 : 0.8;
    this.dist = this.isMobile ? 72 : 65;
  }

  focusOn(point, dist = 42) {
    this.desiredTarget.set(point.x, 1.2, point.z);
    this.dist = Math.min(this.dist, dist + 12);
  }

  shake(amount = 0.3) {
    this.shakeAmt = Math.min(2.4, this.shakeAmt + amount);
  }

  screenToGround(clientX, clientY, out = new THREE.Vector3()) {
    const rect = this.dom.getBoundingClientRect();
    const x = ((clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1;
    const y = -((clientY - rect.top) / Math.max(1, rect.height)) * 2 + 1;
    this.ndc.set(x, y);
    this.raycaster.setFromCamera(this.ndc, this.camera);
    const hit = this.raycaster.ray.intersectPlane(GROUND, out);
    if (!hit) return null;
    hit.x = clamp(hit.x, -HALF - 8, HALF + 8);
    hit.z = clamp(hit.z, -HALF - 8, HALF + 8);
    return hit;
  }

  onDown(e) {
    this.dom.setPointerCapture?.(e.pointerId);
    this.game?.audio?.init();
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, button: e.button, type: e.pointerType });
    const p = this.screenToGround(e.clientX, e.clientY);
    if (!p) return;
    e.preventDefault();

    if (this.pointers.size === 1) {
      this.downAt = performance.now();
      this.moved = false;
      this.multi = false;
      this.pointerStart.x = e.clientX;
      this.pointerStart.y = e.clientY;
      const game = this.game;
      const canPaint = game && (game.state === 'build' || game.state === 'sandbox') && game.isPaintTool;
      if (canPaint) {
        this.mode = 'paint';
        game.startPaint(p);
      } else if (e.button === 2 || e.button === 1) {
        this.mode = 'pan';
      } else {
        this.mode = 'orbit';
      }
    } else if (this.pointers.size === 2) {
      this.multi = true;
      if (this.mode === 'paint') this.game?.endPaint();
      this.mode = 'gesture';
      const pts = [...this.pointers.values()];
      this.pinchStart = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      this._mid.x = (pts[0].x + pts[1].x) / 2;
      this._mid.y = (pts[0].y + pts[1].y) / 2;
      this.midStart.x = this._mid.x;
      this.midStart.y = this._mid.y;
    }
  }

  onMove(e) {
    if (!this.pointers.has(e.pointerId)) {
      if (e.pointerType === 'mouse') {
        const p = this.screenToGround(e.clientX, e.clientY);
        if (p) this.game?.onPointerGround(p);
      }
      return;
    }
    const prev = this.pointers.get(e.pointerId);
    const prevX = prev.x, prevY = prev.y;
    prev.x = e.clientX;
    prev.y = e.clientY;

    if (this.mode === 'paint') {
      e.preventDefault();
      const p = this.screenToGround(e.clientX, e.clientY);
      if (p) {
        if (Math.abs(e.clientX - this.pointerStart.x) + Math.abs(e.clientY - this.pointerStart.y) > 4) this.moved = true;
        this.game?.dragPaint(p);
      }
      return;
    }

    if (this.mode === 'gesture' && this.pointers.size >= 2) {
      e.preventDefault();
      const pts = [...this.pointers.values()];
      const pinch = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const mid = { x: (pts[0].x + pts[1].x) / 2, y: (pts[0].y + pts[1].y) / 2 };
      if (this.pinchStart > 10 && pinch > 10) {
        this.dist = clamp(this.dist * (this.pinchStart / pinch), this.minDist, this.maxDist);
      }
      const dx = mid.x - this._mid.x;
      const dy = mid.y - this._mid.y;
      if (Math.abs(dx) + Math.abs(dy) > 0.5) this.pan(dx, dy, 1.6);
      this.pinchStart = pinch;
      this._mid.x = mid.x;
      this._mid.y = mid.y;
      this.moved = true;
      return;
    }

    if (this.mode === 'orbit') {
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      if (Math.abs(e.clientX - this.pointerStart.x) + Math.abs(e.clientY - this.pointerStart.y) > 5) this.moved = true;
      if (!this.moved) return;
      e.preventDefault();
      this.yaw -= dx * 0.0062;
      this.pitch = clamp(this.pitch + dy * 0.0052, this.minPitch, this.maxPitch);
      return;
    }

    if (this.mode === 'pan') {
      e.preventDefault();
      this.pan(e.clientX - prevX, e.clientY - prevY, 1.2);
    }
  }

  pan(dx, dy, mult = 1) {
    const scale = this.dist * 0.0016 * mult;
    this._right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    this._forward.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    this.desiredTarget.addScaledVector(this._right, -dx * scale);
    this.desiredTarget.addScaledVector(this._forward, dy * scale);
    const r = Math.hypot(this.desiredTarget.x, this.desiredTarget.z);
    if (r > HALF + 4) {
      this.desiredTarget.x *= (HALF + 4) / r;
      this.desiredTarget.z *= (HALF + 4) / r;
    }
  }

  onUp(e) {
    if (!this.pointers.has(e.pointerId)) return;
    const wasMode = this.mode;
    const wasMulti = this.multi;
    this.pointers.delete(e.pointerId);
    this.dom.releasePointerCapture?.(e.pointerId);

    if (wasMode === 'paint') {
      if (this.pointers.size === 0) this.game?.endPaint();
      this.mode = this.pointers.size === 1 ? 'orbit' : null;
      return;
    }

    if (this.pointers.size === 0) {
      const elapsed = performance.now() - this.downAt;
      const isTap = wasMode === 'orbit' && !this.moved && !wasMulti && elapsed < 750;
      if (isTap) {
        const p = this.screenToGround(e.clientX, e.clientY);
        if (p) this.game?.onTap(p);
      }
      this.mode = null;
    } else if (this.pointers.size === 1) {
      // dropping from two fingers back to one: do not snap or tap
      this.mode = 'orbit';
      this.pointerStart.x = e.clientX;
      this.pointerStart.y = e.clientY;
      this.moved = true;
    }
  }

  onLeave(e) {
    if (e.pointerType === 'mouse' && this.pointers.size === 0) this.game?.castle?.hideGhost();
  }

  onWheel(e) {
    e.preventDefault();
    this.game?.audio?.init();
    const factor = Math.exp(e.deltaY * 0.0012);
    this.dist = clamp(this.dist * factor, this.minDist, this.maxDist);
  }

  update(dt) {
    this.time += dt;
    if (this.cinematic) {
      this.cineTime += dt;
      this.yaw = 0.45 + Math.sin(this.cineTime * 0.045) * 0.32;
      this.pitch = 0.47 + Math.sin(this.cineTime * 0.07) * 0.03;
    }
    const damp = 1 - Math.exp(-7 * dt);
    this.target.lerp(this.desiredTarget, damp);
    this.applyCamera(dt);
  }

  applyCamera(dt) {
    const cp = Math.cos(this.pitch);
    const sp = Math.sin(this.pitch);
    let x = this.target.x + Math.sin(this.yaw) * cp * this.dist;
    let y = this.target.y + sp * this.dist;
    let z = this.target.z + Math.cos(this.yaw) * cp * this.dist;

    if (this.shakeAmt > 0.001) {
      const s = this.shakeAmt;
      x += Math.sin(this.time * 61) * s * 0.42;
      y += Math.sin(this.time * 73 + 1.7) * s * 0.3;
      z += Math.cos(this.time * 67 + 0.4) * s * 0.42;
      this.shakeAmt = Math.max(0, this.shakeAmt - (dt || 0.016) * 2.8);
    }

    this.camera.position.set(x, y, z);
    this.camera.lookAt(this.target);

    // Keep the island above the water line and inside a useful framing envelope.
    if (this.camera.position.y < 6) this.camera.position.y = 6;
  }
}

const controls = new Controls(camera, canvas, world.isMobile);

// ------------------------------------------------------------------
// Resize
// ------------------------------------------------------------------
function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, world.isMobile ? 1.6 : 2);
  renderer.setPixelRatio(dpr);
  renderer.setSize(w, h, false);
  camera.aspect = w / Math.max(1, h);
  camera.fov = camera.aspect < 0.85 ? 56 : 50;
  camera.updateProjectionMatrix();
  controls.isMobile = Math.min(w, h) < 700;
}
window.addEventListener('resize', resize);
window.visualViewport?.addEventListener('resize', resize);
resize();

// ------------------------------------------------------------------
// Game
// ------------------------------------------------------------------
let game;
try {
  game = new Game({ scene, camera, renderer, world, castle, fx, audio, controls });
} catch (err) {
  console.error('Steel & Stone failed to start:', err);
  const title = document.getElementById('title');
  const content = title?.querySelector('.title-content');
  if (content) {
    const box = document.createElement('div');
    box.style.cssText = 'margin-top:18px;padding:12px 14px;border:1px solid rgba(184,70,51,.5);border-radius:8px;background:rgba(30,10,8,.75);color:#f0c3b7;font-size:12px;line-height:1.5;max-width:520px';
    box.textContent = `The castle could not be raised: ${err?.message || err}. Check the console for details.`;
    content.appendChild(box);
  }
  throw err;
}

// expose for debugging / automated verification
window.__steel = { game, castle, combat: game.combat, controls, scene, camera, renderer, world };
window.__steelReady = true;

// ------------------------------------------------------------------
// Main loop
// ------------------------------------------------------------------
let last = performance.now();
let elapsed = 0;

function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
  last = now;
  elapsed += dt;

  controls.update(dt);
  world.update(dt, elapsed);
  castle.update(dt, camera, elapsed);
  game.update(dt);
  fx.update(dt);
  floatText.update(dt);

  renderer.render(scene, camera);
}
requestAnimationFrame(frame);

// Pause the world when the tab is hidden so economy timers do not jump.
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    last = performance.now();
  } else {
    last = performance.now();
  }
});

// Recover from WebGL context loss gracefully.
canvas.addEventListener('webglcontextlost', e => {
  e.preventDefault();
  console.warn('WebGL context lost');
});
canvas.addEventListener('webglcontextrestored', () => {
  console.info('WebGL context restored');
});
