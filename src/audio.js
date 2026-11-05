// Tiny procedural sound engine — no external assets.
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.enabled = localStorage.getItem('steelstone_sound') !== 'off';
    this.started = false;
    this.wind = null;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.enabled ? 0.5 : 0;
    this.master.connect(this.ctx.destination);
    this.noiseBuffer = this.makeNoise(2.5);
    this.startWind();
    this.started = true;
  }

  makeNoise(seconds = 2) {
    const ctx = this.ctx;
    const buf = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  startWind() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 320;
    filter.Q.value = 0.6;
    const gain = ctx.createGain();
    gain.gain.value = 0.05;
    src.connect(filter).connect(gain).connect(this.master);
    src.start();
    this.wind = { src, filter, gain };
    // slow LFO on wind
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 120;
    lfo.connect(lfoGain).connect(filter.frequency);
    lfo.start();
    this.windLfo = lfo;
  }

  setEnabled(on) {
    this.enabled = on;
    localStorage.setItem('steelstone_sound', on ? 'on' : 'off');
    if (this.master) this.master.gain.setTargetAtTime(on ? 0.5 : 0, this.ctx.currentTime, 0.05);
  }

  toggle() { this.setEnabled(!this.enabled); return this.enabled; }

  tone(freq, dur = 0.15, type = 'sine', gain = 0.1, opts = {}) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx;
    const t = ctx.currentTime + (opts.delay || 0);
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (opts.slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, opts.slide), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + Math.min(0.02, dur * 0.2));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if (pan) { pan.pan.value = opts.pan || 0; o.connect(g).connect(pan).connect(this.master); }
    else o.connect(g).connect(this.master);
    o.start(t); o.stop(t + dur + 0.05);
  }

  noise(dur = 0.2, freq = 1400, gain = 0.1, opts = {}) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx;
    const t = ctx.currentTime + (opts.delay || 0);
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = opts.type || 'bandpass';
    filter.frequency.setValueAtTime(freq, t);
    if (opts.slide) filter.frequency.exponentialRampToValueAtTime(Math.max(60, opts.slide), t + dur);
    filter.Q.value = opts.q ?? 0.8;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t); src.stop(t + dur + 0.05);
  }

  click() { this.tone(320, 0.06, 'triangle', 0.045); }
  select() { this.tone(440, 0.07, 'sine', 0.05); this.tone(660, 0.08, 'sine', 0.03, { delay: 0.03 }); }
  error() { this.tone(180, 0.12, 'square', 0.045, { slide: 120 }); }
  build() {
    this.noise(0.18, 700, 0.11, { type: 'lowpass' });
    this.tone(110, 0.18, 'triangle', 0.09, { slide: 70 });
    this.tone(260, 0.08, 'square', 0.025, { delay: 0.02 });
  }
  place() { this.tone(140, 0.12, 'triangle', 0.07, { slide: 95 }); }
  upgrade() {
    [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.22, 'triangle', 0.05, { delay: i * 0.055 }));
    this.noise(0.5, 2400, 0.02, { type: 'highpass' });
  }
  raze() { this.noise(0.35, 400, 0.14, { type: 'lowpass', slide: 90 }); this.tone(80, 0.3, 'sawtooth', 0.05, { slide: 45 }); }
  arrow() { this.noise(0.09, 2400, 0.035, { type: 'highpass' }); }
  bolt() { this.noise(0.14, 900, 0.07, { type: 'bandpass' }); this.tone(180, 0.1, 'sawtooth', 0.03, { slide: 90 }); }
  hit() { this.noise(0.07, 800, 0.05, { type: 'bandpass' }); }
  sword() { this.noise(0.1, 1800, 0.04, { type: 'highpass' }); this.tone(240, 0.06, 'triangle', 0.02); }
  boom() {
    this.noise(0.7, 250, 0.26, { type: 'lowpass', slide: 60 });
    this.tone(65, 0.6, 'sine', 0.2, { slide: 32 });
  }
  horn() {
    [196, 247, 294].forEach((f, i) => {
      this.tone(f, 1.1, 'sawtooth', 0.035, { delay: i * 0.03 });
      this.tone(f * 1.005, 1.0, 'triangle', 0.03, { delay: i * 0.03 });
    });
  }
  wave() {
    this.tone(130, 1.3, 'sawtooth', 0.06, { slide: 98 });
    this.tone(196, 1.2, 'triangle', 0.04);
    this.noise(1.2, 300, 0.05, { type: 'lowpass' });
  }
  victory() {
    [523, 659, 784, 1046, 1318].forEach((f, i) => this.tone(f, 0.7, 'triangle', 0.06, { delay: i * 0.12 }));
    this.tone(262, 1.8, 'sine', 0.05, { delay: 0.24 });
  }
  defeat() {
    [330, 294, 247, 196].forEach((f, i) => this.tone(f, 0.6, 'sawtooth', 0.045, { delay: i * 0.18, slide: f * 0.96 }));
  }
  cooldownReady() { this.tone(880, 0.09, 'sine', 0.03); this.tone(1320, 0.12, 'sine', 0.02, { delay: 0.05 }); }
  hero() { this.tone(392, 0.16, 'triangle', 0.045); this.tone(587, 0.2, 'triangle', 0.035, { delay: 0.05 }); }
}
