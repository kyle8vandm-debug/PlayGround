import {
  RESOURCES, STRUCTURES, BUILD_ORDER, QUESTS, WAVES, TOTAL_WAVES, RANKS,
  rankForSplendor, workerCostFor, populationFor, happinessFor, garrisonFor,
  towerStatsFor, productionFor, upgradeCostFor,
  PROLOGUE, REGIONS, regionForWave, isRegionConquered, CHRONICLES, VICTORY,
  DUNGEONS, dungeonById, ENEMIES, SKIN_CATEGORIES, skinsInCategory, skinById,
  DEFAULT_SKINS, SUBSCRIPTION, CAPTAIN_PALETTES, CROWN_PACKS,
} from './defs.js';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function icon(name, cls = 'ic') {
  return `<svg class="${cls}"><use href="#${name}"/></svg>`;
}

function round(n) { return Math.floor(n + 0.0001); }

const SKY_PREVIEW = {
  day: ['#3d78b0', '#9ec6dd', '#f1d6a8'],
  golden: ['#4b5f92', '#c49a86', '#f6c97a'],
  storm: ['#2b3442', '#5e6b74', '#8e9a96'],
  dawn: ['#5c6f9d', '#d39aa2', '#ffd9b0'],
  crow: ['#201c3a', '#4b3560', '#9a5f6e'],
};

const TUTORIAL_STEPS = [
  {
    kicker: 'The Crown System',
    title: 'A second life, a new interface',
    icon: 'i-crown',
    text: 'You died once. You woke as Caelan Ashbourne with a city-builder\u2019s memories and a voice only you can hear. The Crown System turns land, labour and loyalty into numbers. This is the field manual it wrote for you.',
  },
  {
    kicker: 'Step 1 · Foundations',
    title: 'Build your first house',
    icon: 'i-house',
    text: 'Pick a building from the palette below, then tap the island. Houses add population; population staffs every other building. Your keep is already standing at the centre of the grid.',
    events: [{ type: 'place' }],
    wait: 'Place any building to continue.',
  },
  {
    kicker: 'Step 2 · The economy',
    title: 'Feed the machine',
    icon: 'i-farm',
    text: 'Farms, lumber camps and quarries produce resources every six seconds. Markets turn that surplus into gold. Happiness multiplies everything \u2014 gardens and taverns keep people smiling.',
    events: [{ type: 'place', data: ['farm', 'lumber', 'quarry', 'market', 'tavern', 'garden'] }],
    wait: 'Place a production building to continue.',
  },
  {
    kicker: 'Step 3 · Streets',
    title: 'Pave the way',
    icon: 'i-road',
    text: 'Roads are cheap, raise city splendor, and make a city feel like a city. Choose the road tool and drag across the grass.',
    events: [{ type: 'place', data: ['road'] }],
    wait: 'Pave at least one road tile to continue.',
  },
  {
    kicker: 'Step 4 · Defences',
    title: 'Raise the wall',
    icon: 'i-wall',
    text: 'Walls slow raiders; gates attract them; towers shoot them. Drag the wall tool to paint a line of stone around your keep. A wall is only as good as the gate that funnels the enemy.',
    events: [{ type: 'place', data: ['wall', 'gate', 'tower'] }],
    wait: 'Build a wall, gate or tower to continue.',
  },
  {
    kicker: 'Step 5 · Progress',
    title: 'Upgrade everything',
    icon: 'i-upgrade',
    text: 'Tap a building with the Camera tool to inspect it. Upgrading raises output, hit points and tower damage. Your city rank rises with splendor \u2014 and so does your army.',
    events: [{ type: 'upgrade' }],
    wait: 'Upgrade any building to continue.',
  },
  {
    kicker: 'Step 6 · The world',
    title: 'Open the war map',
    icon: 'i-tent',
    text: 'Five regions stand between your grey island and Warlord Gruk. The map also hides dungeons: elite bosses with unique loot and first-clear skins. Open it now.',
    events: [{ type: 'map' }],
    wait: 'Open the War Map to continue.',
  },
  {
    kicker: 'Step 7 · The siege',
    title: 'Sound the horn',
    icon: 'i-horn',
    text: 'When your walls are ready, press Begin Wave. Towers fire automatically; you command Captain Aldric and the battle boons. Every wave survived makes the next one stronger.',
    events: [{ type: 'wave' }],
    wait: 'Begin a wave to continue.',
  },
  {
    kicker: 'Step 8 · Command',
    title: 'Lead from the front',
    icon: 'i-captain',
    text: 'During a siege, tap the ground to send Captain Aldric there. Q looses an arrow volley, W sounds the war horn, E repairs the walls. Hold the keep, and the region is yours.',
    events: [{ type: 'hero' }, { type: 'ability' }],
    wait: 'Command the captain or use an ability to finish the tutorial.',
  },
];

export class UI {
  constructor(game) {
    this.game = game;
    this.el = {
      title: $('#title'),
      hud: $('#hud'),
      modal: $('#modal'),
      modalCard: $('#modal-card'),
      resources: $('#resources'),
      phasePill: $('#phase-pill'),
      phaseLabel: $('#phase-label'),
      waveLabel: $('#wave-label'),
      waveProgress: $('#wave-progress'),
      wprogFill: $('#wprog-fill'),
      wprogText: $('#wprog-text'),
      bossBar: $('#boss-bar'),
      bossFill: $('#boss-fill'),
      bossName: $('#boss-name-text'),
      quest: $('#quest'),
      questList: $('#quest-list'),
      rankLabel: $('#rank-label'),
      rpFill: $('#rp-fill'),
      rpLabel: $('#rp-label'),
      abilities: $('#battle-abilities'),
      heroHud: $('#hero-hud'),
      heroFill: $('#hero-fill'),
      heroState: $('#hero-state'),
      targetHint: $('#target-hint'),
      bottombar: $('#bottombar'),
      palette: $('#palette'),
      selName: $('#sel-name'),
      selDesc: $('#sel-desc'),
      selCost: $('#sel-cost'),
      selIcon: $('.sel-ic'),
      btnWave: $('#btn-wave'),
      waveMain: $('#wave-btn-main'),
      waveSub: $('#wave-btn-sub'),
      btnCamera: $('#tool-camera'),
      btnUndo: $('#btn-undo'),
      btnDemolish: $('#btn-demolish'),
      btnRepair: $('#btn-repair'),
      btnMap: $('#btn-map'),
      btnShop: $('#btn-shop'),
      crownBadge: $('#crown-badge'),
      btnSound: $('#btn-sound'),
      btnMenu: $('#btn-menu'),
      tutorial: $('#tutorial'),
      tutStep: $('#tut-step'),
      tutKicker: $('#tut-kicker'),
      tutTitle: $('#tut-title'),
      tutText: $('#tut-text'),
      tutWait: $('#tut-wait'),
      tutIcon: $('#tut-icon-use'),
      tutBar: $('#tut-bar-fill'),
      tutNext: $('#tut-next'),
      tutSkip: $('#tut-skip'),
      toast: $('#toast'),
      callout: $('#wave-callout'),
      hint: $('#hint-banner'),
      best: $('#best-label'),
      btnContinue: $('#btn-continue'),
      titleFoot: $('.title-foot'),
    };
    this.resourceEls = {};
    this.resourceState = {};
    this.cardEls = {};
    this.resourcesDirty = true;
    this.cityDirty = true;
    this.questsDirty = true;
    this.modalOpen = false;
    this.modalCloseable = true;
    this.howFromPause = false;
    this.currentRank = rankForSplendor(0);
    this.waveButtonState = '';
    this.toastTimer = null;
    this.hintTimer = null;
    this.calloutTimer = null;
    this.mapSelected = null;
    this.shopTab = 'livery';
    this.tutorialIndex = 0;
    this.tutorialActive = false;
    this.currentDungeon = null;

    this.buildResources();
    this.buildPalette();
    this.bind();
    this.updateSound(game.audio.enabled);
    this.markQuestsDirty();
    this.updateResources();
    this.updateQuests();
    this.updateTitle();
    this.updateCrowns();
    this.setBuildMode();
  }

  // ---------------------------------------------------------- crowns
  updateCrowns() {
    const n = Math.max(0, Math.floor(this.game.premium?.crowns || 0));
    const pretty = n.toLocaleString('en-US');
    if (this.el.crownBadge) this.el.crownBadge.textContent = n >= 10000 ? `${Math.floor(n / 1000)}k` : pretty;
    $$('[data-crown-balance]').forEach(el => { el.textContent = pretty; });
  }

  // ---------------------------------------------------------- DOM build
  buildResources() {
    const defs = [
      ['gold', 'i-coin'], ['wood', 'i-wood'], ['stone', 'i-stone'], ['food', 'i-food'],
    ];
    let html = '';
    for (const [key, ic] of defs) {
      html += `<div class="res" data-type="${key}" title="${RESOURCES[key].name}"><svg class="ic"><use href="#${ic}"/></svg><b id="res-${key}">0</b><span class="delta"></span></div>`;
    }
    html += `<div class="res city" data-type="pop" title="Population: workers / housing"><svg class="ic"><use href="#i-people"/></svg><b id="res-pop">0/10</b></div>`;
    html += `<div class="res city" data-type="happy" title="Happiness: boosts resource production"><svg class="ic"><use href="#i-happy"/></svg><b id="res-happy">55</b></div>`;
    this.el.resources.innerHTML = html;
    for (const key of ['gold', 'wood', 'stone', 'food', 'pop', 'happy']) {
      this.resourceEls[key] = $(`#res-${key}`);
    }
  }

  buildPalette() {
    let html = '';
    for (const type of BUILD_ORDER) {
      const def = STRUCTURES[type];
      if (!def || def.hidden) continue;
      const costs = Object.entries(def.cost).map(([k, v]) =>
        `<span class="c"><svg class="ic"><use href="#${RESOURCES[k].icon}"/></svg>${v}</span>`).join('');
      html += `<button class="build-card" data-type="${type}" data-cat="${def.category}" title="${def.name} — ${def.desc}">
        ${icon(def.icon)}
        <span class="name">${def.name.replace('Stone ', '').replace('Cobbled ', '').replace('Archer ', '')}</span>
        <span class="cost">${costs}</span>
      </button>`;
    }
    this.el.palette.innerHTML = html;
    $$('.build-card', this.el.palette).forEach(el => {
      this.cardEls[el.dataset.type] = el;
      el.addEventListener('click', () => {
        this.game.audio.init();
        this.game.selectBuild(el.dataset.type);
      });
    });
  }

  bind() {
    const g = this.game;
    $('#btn-play').addEventListener('click', () => { g.audio.init(); g.audio.click(); g.startNewCampaign(); });
    $('#btn-continue').addEventListener('click', () => { g.audio.init(); g.audio.click(); g.continueCampaign(); });
    $('#btn-sandbox').addEventListener('click', () => { g.audio.init(); g.audio.click(); g.startSandbox(); });
    $('#btn-how').addEventListener('click', () => { g.audio.init(); g.audio.click(); this.showHowTo(); });
    this.el.btnMap.addEventListener('click', () => { g.audio.init(); g.audio.click(); g.openWarMap(); });
    this.el.btnShop.addEventListener('click', () => { g.audio.init(); g.audio.click(); g.openShop(); });
    this.el.btnSound.addEventListener('click', () => g.toggleSound());
    this.el.btnMenu.addEventListener('click', () => { g.audio.init(); g.audio.click(); g.pause(); });
    this.el.tutNext.addEventListener('click', () => this.advanceTutorial());
    this.el.tutSkip.addEventListener('click', () => this.finishTutorial());
    this.el.btnWave.addEventListener('click', () => { g.audio.init(); g.audio.click(); g.beginWave(); });
    this.el.btnCamera.addEventListener('click', () => g.selectCamera());
    this.el.btnUndo.addEventListener('click', () => g.undo());
    this.el.btnDemolish.addEventListener('click', () => g.selectDemolish());
    this.el.btnRepair.addEventListener('click', () => {
      g.audio.init();
      if (g.state === 'combat') g.useAbility('repair');
      else g.repairAll();
    });
    $('#ability-volley').addEventListener('click', () => g.useAbility('volley'));
    $('#ability-horn').addEventListener('click', () => g.useAbility('horn'));
    $('#ability-repair').addEventListener('click', () => g.useAbility('repair'));
    $('#cancel-target').addEventListener('click', () => {
      g.aimingVolley = false;
      this.setAimingVolley(false);
    });
    $('#hero-focus').addEventListener('click', () => g.focusHero());

    this.el.modal.querySelector('.modal-backdrop').addEventListener('click', () => {
      if (this.modalCloseable) this.escapeModal();
    });

    window.addEventListener('keydown', e => this.onKey(e));
  }

  onKey(e) {
    const g = this.game;
    if (e.target && e.target.matches && e.target.matches('input, textarea')) return;
    if (e.key === 'Escape') {
      if (this.modalOpen) {
        if (this.modalCloseable) this.escapeModal();
        else if (g.state === 'paused') g.resume();
        return;
      }
      if (g.aimingVolley) { g.aimingVolley = false; this.setAimingVolley(false); return; }
      if (g.state === 'combat') { g.pause(); return; }
      if (g.state === 'build' || g.state === 'sandbox') { g.selectCamera(); return; }
    }
    if (this.modalOpen) return;
    if (g.state === 'title') return;
    const k = e.key.toLowerCase();
    if ((e.ctrlKey || e.metaKey) && k === 'z') { e.preventDefault(); g.undo(); return; }
    if (k === 'm') { e.preventDefault(); g.openWarMap(); return; }
    if (k === 'c') { e.preventDefault(); g.openShop(); return; }
    if (k === 'v') { g.selectCamera(); return; }
    if (k === 'x') { g.selectDemolish(); return; }
    if (k === 'q' && g.state === 'combat') { g.useAbility('volley'); return; }
    if (k === 'w') {
      if (g.state === 'combat') { g.useAbility('horn'); return; }
      e.preventDefault(); g.beginWave(); return;
    }
    if (k === 'e') {
      e.preventDefault();
      if (g.state === 'combat') g.useAbility('repair');
      else g.repairAll();
      return;
    }
    if (k === ' ' && g.state === 'build') { e.preventDefault(); g.beginWave(); return; }
    if (k >= '1' && k <= '9') {
      const idx = Number(k) - 1;
      const type = BUILD_ORDER[idx];
      if (type) g.selectBuild(type);
    }
  }

  // ---------------------------------------------------------- screen state
  showHUD(show) {
    this.el.hud.classList.toggle('hidden', !show);
  }

  showTitle(show) {
    if (show) {
      this.el.title.classList.remove('hidden', 'fade-out');
      this.el.title.style.display = 'flex';
      this.el.title.style.pointerEvents = '';
      this.updateTitle();
    } else {
      this.el.title.classList.add('fade-out');
      setTimeout(() => {
        if (this.el.title.classList.contains('fade-out')) {
          this.el.title.classList.add('hidden');
          this.el.title.style.display = 'none';
        }
      }, 450);
    }
  }

  updateTitle() {
    const save = this.game.getSaveInfo();
    const sandbox = this.game.getSaveInfo('steelstone_sandbox_v2');
    if (this.el.btnContinue) {
      const show = !!(save && save.city);
      this.el.btnContinue.classList.toggle('hidden', !show);
      const label = this.el.btnContinue.querySelector('span');
      if (show && label) label.textContent = save.completed ? 'Continue Castle' : `Continue · Wave ${save.wave || 1}`;
    }
    const best = Math.max(this.game.bestWave || 0, save?.wavesSurvived || 0, sandbox?.wavesSurvived || 0);
    this.el.best.textContent = best > 0 ? `Best defense: Wave ${best} / ${TOTAL_WAVES}` : 'Best defense: —';
    if (save?.completed) this.el.best.textContent = `Campaign complete · Best defense: all ${TOTAL_WAVES} waves`;
  }

  setBuildMode() {
    const g = this.game;
    this.currentDungeon = null;
    this.el.bottombar.classList.remove('hidden', 'combat');
    this.el.bottombar.style.display = '';
    this.el.abilities.classList.add('hidden');
    this.el.heroHud.classList.add('hidden');
    this.el.waveProgress.classList.add('hidden');
    this.el.bossBar.classList.add('hidden');
    this.el.quest.classList.remove('hidden');
    this.el.quest.classList.remove('done');
    this.el.phasePill.classList.remove('combat');
    this.showHUD(true);
    this.el.btnWave.style.display = g.sandbox ? 'none' : '';
    this.el.btnWave.classList.toggle('ready', !g.sandbox && g.state === 'build');
    this.updatePhase();
    this.updateWaveButton();
    this.setTool(g.tool, g.selectedType);
    this.markResourcesDirty();
    this.markCityDirty();
    this.markQuestsDirty();
    this.setAimingVolley(false);
    this.updateSound(g.audio.enabled);
    setTimeout(() => this.el.quest.classList.remove('hidden'), 10);
  }

  enterCombat() {
    const g = this.game;
    this.currentDungeon = null;
    this.el.bottombar.classList.add('hidden');
    this.el.abilities.classList.remove('hidden');
    this.el.heroHud.classList.remove('hidden');
    this.el.waveProgress.classList.remove('hidden');
    this.el.quest.classList.add('hidden');
    this.el.phasePill.classList.add('combat');
    this.el.btnWave.classList.remove('ready');
    this.el.targetHint.classList.add('hidden');
    this.setAimingVolley(false);
    this.updatePhase();
    this.updateWaveProgress();
    this.updateHeroHud();
    this.updateAbilities();
    this.el.bossBar.classList.add('hidden');
    this.game.castle.hideGhost();
    this.game.castle.select(null);
    this.game.ui.closeModal(true);
  }

  enterDungeon(d) {
    this.currentDungeon = d;
    this.el.phasePill.classList.add('combat');
    this.updatePhase();
    this.updateWaveProgress();
    this.el.quest.classList.add('hidden');
    this.el.heroHud.classList.remove('hidden');
    this.el.abilities.classList.remove('hidden');
    this.el.waveProgress.classList.remove('hidden');
  }

  updatePhase() {
    const g = this.game;
    if (g.state === 'combat' && this.currentDungeon) {
      this.el.phaseLabel.textContent = 'Dungeon';
      this.el.waveLabel.textContent = this.currentDungeon.name;
      this.el.phasePill.classList.add('combat');
    } else if (g.state === 'combat') {
      this.el.phaseLabel.textContent = 'Under Siege';
      this.el.waveLabel.textContent = `Wave ${g.wave} / ${TOTAL_WAVES}`;
      this.el.phasePill.classList.add('combat');
    } else if (g.state === 'sandbox') {
      this.el.phaseLabel.textContent = 'Free Build';
      this.el.waveLabel.textContent = 'No sieges';
      this.el.phasePill.classList.remove('combat');
    } else if (g.state === 'title') {
      this.el.phaseLabel.textContent = 'Build Phase';
      this.el.waveLabel.textContent = `Wave ${g.wave} / ${TOTAL_WAVES}`;
    } else {
      this.el.phaseLabel.textContent = 'Build Phase';
      this.el.waveLabel.textContent = `Wave ${Math.min(g.wave, TOTAL_WAVES)} / ${TOTAL_WAVES}`;
      this.el.phasePill.classList.remove('combat');
    }
  }

  updateWaveButton() {
    const g = this.game;
    if (g.sandbox) { this.el.btnWave.style.display = 'none'; return; }
    this.el.btnWave.style.display = '';
    this.el.waveMain.textContent = g.wave === TOTAL_WAVES ? 'Final Wave' : 'Begin Wave';
    const wave = WAVES[Math.min(g.wave, TOTAL_WAVES) - 1];
    const total = wave ? Object.values(wave.comp).reduce((a, b) => a + b, 0) : 0;
    this.el.waveSub.textContent = wave ? `Wave ${g.wave} · ${total} enemies` : 'The raiders are coming';
    this.el.btnWave.classList.toggle('ready', g.state === 'build');
  }

  setTool(tool, type) {
    this.el.btnCamera.classList.toggle('active', tool === 'camera');
    this.el.btnDemolish.classList.toggle('active', tool === 'demolish');
    for (const [t, el] of Object.entries(this.cardEls)) {
      el.classList.toggle('selected', tool === 'build' && t === type);
    }
    this.updateSelected();
  }

  updateSelected() {
    const g = this.game;
    if (g.tool === 'build' && g.selectedType) {
      const def = STRUCTURES[g.selectedType];
      this.el.selIcon.innerHTML = `<use href="#${def.icon}"/>`;
      this.el.selName.textContent = def.name;
      this.el.selDesc.textContent = def.desc;
      this.el.selCost.innerHTML = this.costHTML(g.getCost(g.selectedType), true, true);
    } else if (g.tool === 'demolish') {
      this.el.selIcon.innerHTML = `<use href="#i-hammer"/>`;
      this.el.selName.textContent = 'Raze';
      this.el.selDesc.textContent = 'Tap or drag to remove buildings. Half the cost is recovered.';
      this.el.selCost.innerHTML = '<span style="color:#a99f8c">Keep is permanent</span>';
    } else {
      this.el.selIcon.innerHTML = `<use href="#i-eye"/>`;
      this.el.selName.textContent = 'Inspect & Camera';
      this.el.selDesc.textContent = 'Drag to look around. Tap a building to inspect or upgrade it.';
      this.el.selCost.innerHTML = '<span style="color:#a99f8c">Two fingers to pan & zoom</span>';
    }
  }

  costHTML(cost, check = false, includeZero = false) {
    const g = this.game;
    const parts = [];
    for (const [k, v] of Object.entries(cost || {})) {
      if (!includeZero && v <= 0) continue;
      const short = check && !g.sandbox && (g.resources[k] || 0) < v;
      parts.push(`<span class="${short ? 'short' : ''}">${icon(RESOURCES[k].icon)}${Math.ceil(v)}</span>`);
    }
    return parts.join('');
  }

  // ---------------------------------------------------------- resources / city
  markResourcesDirty() { this.resourcesDirty = true; this.cityDirty = true; }
  markCityDirty() { this.cityDirty = true; }
  markQuestsDirty() { this.questsDirty = true; }

  pulseAll() {
    for (const key of ['gold', 'wood', 'stone', 'food']) this.pulseResource(key);
  }

  pulseResources(keys) {
    for (const key of keys) this.pulseResource(key);
  }

  pulseResource(key) {
    const el = this.resourceEls[key];
    if (!el) return;
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 380);
  }

  updateResources() {
    const g = this.game;
    const st = g.castle.stats();
    for (const key of ['gold', 'wood', 'stone', 'food']) {
      const val = round(g.resources[key] || 0);
      if (this.resourceEls[key]) this.resourceEls[key].textContent = val;
    }
    if (this.resourceEls.pop) {
      this.resourceEls.pop.textContent = `${st.used}/${st.capacity}`;
      this.resourceEls.pop.parentElement?.classList.toggle('crowded', st.used / Math.max(1, st.capacity) > 0.9);
    }
    if (this.resourceEls.happy) {
      this.resourceEls.happy.textContent = `${Math.round(st.happiness)}`;
      this.resourceEls.happy.parentElement?.classList.toggle('unhappy', st.happiness < 35);
    }
    this.resourcesDirty = false;
  }

  updateCity() {
    const g = this.game;
    this.updateResources();
    for (const [type, el] of Object.entries(this.cardEls)) {
      const cost = g.getCost(type);
      el.classList.toggle('unaffordable', !g.canAfford(cost));
    }
    this.updateSelected();
    this.updatePhase();
    if (g.state !== 'combat') this.updateWaveButton();
    this.cityDirty = false;
  }

  // ---------------------------------------------------------- quests & rank
  updateQuests() {
    const g = this.game;
    g.ensureQuests();
    let html = '';
    const slots = 3 + (g.isSubscribed?.() ? 1 : 0);
    for (const id of g.quests.active.slice(0, slots)) {
      const q = QUESTS.find(x => x.id === id);
      if (!q) continue;
      const p = g.questProgress(q);
      const rewards = Object.entries(q.reward).map(([k, v]) =>
        `<span title="${RESOURCES[k].name}">${icon(RESOURCES[k].icon)}${v}</span>`).join('');
      html += `<li>
        <span class="qbox"></span>
        <span class="qtext">${q.title}<span class="qprog">${Math.min(p.cur, p.n)}/${p.n}</span>
          <span class="qreward">${rewards}</span>
        </span>
      </li>`;
    }
    this.el.questList.innerHTML = html;
    const score = g.castle.splendor(g.wavesSurvived);
    const rank = rankForSplendor(score);
    this.currentRank = rank;
    this.el.rankLabel.textContent = rank.name;
    const next = rank.next;
    const span = next ? Math.max(1, next.min - rank.min) : 1;
    const prog = next ? Math.max(0, Math.min(1, (score - rank.min) / span)) : 1;
    this.el.rpFill.style.width = `${prog * 100}%`;
    this.el.rpLabel.textContent = next ? `${score} splendor · ${Math.max(0, next.min - score)} to ${next.name}` : `${score} splendor · legendary`;
    this.questsDirty = false;
  }

  updateRank(score, rank) {
    this.currentRank = rank;
    this.el.rankLabel.textContent = rank.name;
    const next = rank.next;
    const span = next ? Math.max(1, next.min - rank.min) : 1;
    const prog = next ? Math.max(0, Math.min(1, (score - rank.min) / span)) : 1;
    this.el.rpFill.style.width = `${prog * 100}%`;
    this.el.rpLabel.textContent = next ? `${score} splendor · ${Math.max(0, next.min - score)} to ${next.name}` : `${score} splendor · legendary`;
  }

  // ---------------------------------------------------------- combat HUD
  updateCombat() {
    this.updateWaveProgress();
    this.updateAbilities();
    this.updateHeroHud();
    this.updateBoss();
    if (this.resourcesDirty) this.updateResources();
  }

  updateWaveProgress() {
    const g = this.game;
    let total = g.combat?.totalEnemies || 0;
    if (!this.currentDungeon) {
      const wave = WAVES[g.wave - 1];
      if (!wave) return;
      total = Object.values(wave.comp).reduce((a, b) => a + b, 0);
    }
    if (!total) total = Math.max(1, (g.combat?.queue.length || 0) + (g.combat?.enemies?.length || 0));
    const remaining = (g.combat?.queue.length || 0) + (g.combat?.enemies || []).filter(e => e.hp > 0).length;
    this.el.wprogFill.style.width = `${Math.max(0, Math.min(100, (remaining / total) * 100))}%`;
    this.el.wprogText.textContent = this.currentDungeon
      ? `${remaining} of ${total} dungeon foes`
      : `${remaining} of ${total} remaining`;
  }

  updateAbilities() {
    const g = this.game;
    for (const id of ['volley', 'horn', 'repair']) {
      const el = $(`#ability-${id}`);
      if (!el) continue;
      const cd = g.cooldowns[id] || 0;
      const max = g.cooldownMax[id] || 1;
      const ratio = Math.max(0, Math.min(1, cd / max));
      el.classList.toggle('cooling', cd > 0);
      el.classList.toggle('ready', cd <= 0);
      el.style.setProperty('--cd', (ratio * 100).toFixed(1));
      el.classList.toggle('targeting', id === 'volley' && g.aimingVolley);
    }
  }

  updateHeroHud() {
    const g = this.game;
    if (!g.combat) return;
    const hero = g.combat.hero;
    this.el.heroHud.classList.remove('hidden');
    const ratio = hero.maxHp ? Math.max(0, hero.hp / hero.maxHp) : 0;
    this.el.heroFill.style.width = `${ratio * 100}%`;
    this.el.heroHud.classList.toggle('dead', !hero.alive);
    if (!hero.alive) this.el.heroState.textContent = `Fallen · ${Math.ceil(hero.respawnTimer)}s`;
    else if (hero.target) this.el.heroState.textContent = 'Fighting';
    else if (hero.hasCommand) this.el.heroState.textContent = 'Moving';
    else this.el.heroState.textContent = 'Guarding';
  }

  updateBoss() {
    const g = this.game;
    const b = g.combat?.boss;
    if (!b || b.hp <= 0) {
      this.el.bossBar.classList.add('hidden');
      return;
    }
    this.el.bossBar.classList.remove('hidden');
    if (this.el.bossName) this.el.bossName.textContent = b.def?.name || 'Champion';
    this.el.bossFill.style.width = `${Math.max(0, b.hp / b.maxHp) * 100}%`;
  }

  showBoss(name = 'Warlord Gruk') {
    if (this.el.bossName) this.el.bossName.textContent = name;
    this.el.bossBar.classList.remove('hidden');
  }
  hideBoss() { this.el.bossBar.classList.add('hidden'); }

  setAimingVolley(on) {
    this.el.targetHint.classList.toggle('hidden', !on);
    this.el.abilities.classList.toggle('targeting-mode', on);
    if (on) this.el.abilities.classList.remove('hidden');
  }

  updateSound(on) {
    if (!this.el.btnSound) return;
    this.el.btnSound.innerHTML = `<svg class="ic"><use href="#${on ? 'i-sound' : 'i-muted'}"/></svg>`;
    this.el.btnSound.setAttribute('aria-label', on ? 'Mute sound' : 'Enable sound');
  }

  tick(dt) {
    if (this.resourcesDirty) this.updateResources();
    if (this.cityDirty) this.updateCity();
    if (this.questsDirty && this.game.state !== 'combat') this.updateQuests();
    if (this.game.state === 'combat') this.updateAbilities();
  }

  // ---------------------------------------------------------- toast / callout
  toast(text, kind = '') {
    this.el.toast.textContent = text;
    this.el.toast.className = `show ${kind}`.trim();
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.el.toast.className = this.el.toast.className.replace('show', '').trim();
    }, 3400);
  }

  hint(text, ms = 6000) {
    this.el.hint.textContent = text;
    this.el.hint.classList.remove('hidden');
    this.el.hint.style.animation = 'none';
    void this.el.hint.offsetWidth;
    this.el.hint.style.animation = '';
    clearTimeout(this.hintTimer);
    this.hintTimer = setTimeout(() => this.el.hint.classList.add('hidden'), ms);
  }

  callout(title, kicker = '', sub = '', kind = '') {
    const el = this.el.callout;
    el.innerHTML = `<div class="wc-kicker">${kicker}</div><div class="wc-title">${title}</div><div class="wc-sub">${sub}</div>`;
    el.classList.remove('hidden');
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
    clearTimeout(this.calloutTimer);
    this.calloutTimer = setTimeout(() => el.classList.add('hidden'), 3800);
  }

  // ---------------------------------------------------------- modal plumbing
  openModal(html, opts = {}) {
    this.el.modalCard.className = `modal-card ${opts.className || ''}`.trim();
    this.el.modalCard.innerHTML = html;
    this.el.modal.classList.remove('hidden');
    this.modalOpen = true;
    this.modalCloseable = opts.closeable !== false;
    if (opts.onMount) opts.onMount(this.el.modalCard);
    $$('[data-close]', this.el.modalCard).forEach(btn => btn.addEventListener('click', () => this.escapeModal()));
  }

  closeModal(force = false) {
    this.el.modal.classList.add('hidden');
    this.modalOpen = false;
    if (force) this.el.modalCard.innerHTML = '';
  }

  escapeModal() {
    const g = this.game;
    if (g.state === 'paused') {
      if (this.howFromPause) { this.howFromPause = false; g.resume(); this.el.modal.classList.add('hidden'); this.modalOpen = false; return; }
      g.resume();
      return;
    }
    this.closeModal(true);
    if (g.selectedStructure) g.clearSelection();
  }

  // ---------------------------------------------------------- building modal
  showBuilding(st) {
    const g = this.game;
    const def = STRUCTURES[st.type];
    const level = st.level;
    const stStats = g.castle.stats();
    const rows = [];
    const hpPct = Math.max(0, Math.min(100, (st.hp / st.maxHp) * 100));
    rows.push(`<div class="bld-stat"><span>${icon('i-shield')}Integrity</span><b>${Math.ceil(st.hp)} / ${st.maxHp}</b></div>`);
    if (def.population) rows.push(`<div class="bld-stat"><span>${icon('i-people')}Population</span><b>+${populationFor(st.type, level)} capacity</b></div>`);
    if (def.workers) rows.push(`<div class="bld-stat"><span>${icon('i-people')}Workers</span><b>${workerCostFor(st.type, level)}</b></div>`);
    const prod = productionFor(st.type, level);
    if (Object.keys(prod).length) {
      const txt = Object.entries(prod).map(([k, v]) => `${icon(RESOURCES[k].icon)} +${(Math.round(v * 10) / 10)}`).join(' ');
      rows.push(`<div class="bld-stat"><span>${icon('i-farm')}Per 6s</span><b>${txt}</b></div>`);
    }
    if (def.happiness) rows.push(`<div class="bld-stat"><span>${icon('i-happy')}Happiness</span><b>+${happinessFor(st.type, level)}</b></div>`);
    if (def.garrison) rows.push(`<div class="bld-stat"><span>${icon('i-captain')}Garrison</span><b>${garrisonFor(st.type, level)} guards</b></div>`);
    const tower = towerStatsFor(st.type, level);
    if (tower) {
      rows.push(`<div class="bld-stat"><span>${icon('i-tower')}Damage</span><b>${Math.round(tower.damage)} per shot</b></div>`);
      rows.push(`<div class="bld-stat"><span>${icon('i-eye')}Range</span><b>${tower.range.toFixed(1)}</b></div>`);
    }

    let upgradeHTML = '';
    if (def.maxLevel && level < def.maxLevel) {
      const cost = g.getUpgradeCost(st);
      const missingWorkers = g.staffMissing(st.type, level + 1, level);
      const canAfford = g.canAfford(cost);
      const canStaff = missingWorkers <= 0;
      const nextProd = productionFor(st.type, level + 1);
      const prodDiff = Object.keys(nextProd).length
        ? Object.entries(nextProd).map(([k, v]) => {
          const cur = productionFor(st.type, level)[k] || 0;
          return `${RESOURCES[k].name} +${Math.round((v - cur) * 10) / 10}/6s`;
        }).join(' · ')
        : '';
      const extra = def.happiness ? ` · Happiness +${Math.round(happinessFor(st.type, level + 1) - happinessFor(st.type, level))}` : '';
      const towerNext = towerStatsFor(st.type, level + 1);
      const towerTxt = towerNext ? ` · Damage ${Math.round(towerNext.damage)} · Range ${towerNext.range.toFixed(1)}` : '';
      upgradeHTML = `<div class="bld-up">
        <h4>${icon('i-upgrade')}Upgrade to level ${level + 1}</h4>
        <p>${prodDiff || 'Stronger structure'}${extra}${towerTxt}<br/>
        Costs ${g.costText(cost)}${def.workers ? ` · +1 worker` : ''}${missingWorkers > 0 ? ` · <span style="color:#e08b7b">needs ${missingWorkers} more population</span>` : ''}.</p>
        <div class="up-cost">${this.costHTML(cost, true)}</div>
      </div>`;
    } else if (def.maxLevel) {
      upgradeHTML = `<div class="bld-up"><h4>${icon('i-star')}Masterwork</h4><p>This building is at its highest level. It stands as a monument to your city.</p></div>`;
    }

    const html = `
      <button class="modal-close" data-close aria-label="Close">${icon('i-x')}</button>
      <div class="bld-head">
        <div class="bld-art">${icon(def.icon)}</div>
        <div class="bld-headtext">
          <div class="modal-kicker">${def.category} · Level ${level}${def.maxLevel ? ` / ${def.maxLevel}` : ''}</div>
          <h2 class="modal-title">${def.name}</h2>
        </div>
      </div>
      <p class="modal-sub">${def.desc}</p>
      <div class="bld-stats">${rows.join('')}</div>
      ${upgradeHTML}
      <div class="bld-actions">
        ${def.maxLevel && level < def.maxLevel ? `<button class="btn gold" data-upgrade ${(!g.canAfford(g.getUpgradeCost(st)) || g.staffMissing(st.type, level + 1, level) > 0) ? 'disabled style="opacity:.45"' : ''}>${icon('i-upgrade')}Upgrade</button>` : ''}
        <button class="btn" data-repair ${st.hp >= st.maxHp ? 'disabled style="opacity:.45"' : ''}>${icon('i-repair')}Repair</button>
        ${st.type !== 'keep' ? `<button class="btn demolish" data-demolish>${icon('i-hammer')}Raze</button>` : ''}
        <button class="btn" data-close>${icon('i-x')}Close</button>
      </div>
      <div class="modal-note" style="margin-top:10px;font-size:10px;color:#8d8473">${def.workers ? `Employs ${workerCostFor(st.type, level)} of your ${stStats.capacity} people. ` : ''}${st.type === 'tower' || st.type === 'ballista' || st.type === 'catapult' ? 'Fires automatically during a siege.' : ''}</div>
    `;
    this.openModal(html, {
      closeable: true,
      className: 'narrow',
      onMount: card => {
        const up = $('[data-upgrade]', card);
        if (up) up.addEventListener('click', () => g.upgradeSelected());
        const rep = $('[data-repair]', card);
        if (rep) rep.addEventListener('click', () => g.repairStructure(st));
        const dem = $('[data-demolish]', card);
        if (dem) dem.addEventListener('click', () => {
          g.demolishAt(st.i, st.j);
          g.clearSelection();
        });
      },
    });
  }

  // ---------------------------------------------------------- reward / end modals
  showReward(wave, loot, choices, extra = {}) {
    const g = this.game;
    const region = regionForWave(wave);
    const lootHTML = Object.entries(loot).map(([k, v]) =>
      `<span class="loot-chip">${icon(RESOURCES[k].icon)}+${v}</span>`).join('');
    const cards = choices.map(u => `
      <button class="upgrade-card" data-upgrade="${u.id}">
        <div class="uic">${icon(u.icon)}</div>
        <h4>${u.name}</h4>
        <p>${u.desc}</p>
      </button>`).join('');
    const claimHTML = extra.claim ? `
      <div class="claim-banner">
        <span class="claim-icon">${icon('i-crown')}</span>
        <div><b>${extra.claim.name} is yours.</b><span>${extra.claim.claim}</span></div>
        <span class="claim-crowns">${icon('i-crown')}+${extra.claim.reward} Crowns</span>
      </div>` : '';
    const chronicleHTML = extra.chronicle ? `<div class="chronicle-line">${icon('i-eye')}<span>${extra.chronicle}</span></div>` : '';
    const html = `
      <div class="modal-kicker">${region?.tag || 'The Chronicle'} · Wave ${wave} survived</div>
      <h2 class="modal-title">The line holds.</h2>
      <p class="modal-sub">Your people cheer from the battlements. Choose a permanent boon before the next raid — the enemy will return stronger.</p>
      ${claimHTML}
      ${chronicleHTML}
      <div class="rew-loot">${lootHTML}</div>
      <div class="upgrade-grid">${cards}</div>
      <div class="modal-actions"><span class="modal-note">Choose one boon. It applies immediately.</span></div>
    `;
    this.openModal(html, {
      closeable: false,
      onMount: card => {
        $$('[data-upgrade]', card).forEach(btn => btn.addEventListener('click', () => g.pickUpgrade(btn.dataset.upgrade)));
      },
    });
    this.el.quest.classList.add('hidden');
  }

  showVictory() {
    const g = this.game;
    const st = g.castle.stats();
    const score = g.castle.splendor(g.wavesSurvived);
    const html = `
      <div class="rankup-card story-finale">
        <div class="rankup-crest">${icon('i-crown')}</div>
        <div class="modal-kicker">${VICTORY.kicker}</div>
        <h2 class="modal-title">${VICTORY.title}</h2>
        <p class="modal-sub">${VICTORY.body}</p>
        <div class="oath-line">${VICTORY.oath}</div>
        <div class="stats-grid">
          <div class="stat"><b>${TOTAL_WAVES}</b><span>Waves held</span></div>
          <div class="stat"><b>${g.regionsClaimed.length}</b><span>Regions claimed</span></div>
          <div class="stat"><b>${score}</b><span>Splendor</span></div>
        </div>
        <div class="modal-actions" style="justify-content:center;margin-top:18px">
          <button class="btn gold" data-keep>${icon('i-hammer')}Keep Building</button>
          <button class="btn" data-map>${icon('i-tent')}War Map</button>
          <button class="btn" data-shop>${icon('i-crown')}Crown Vault</button>
          <button class="btn" data-title>Return to Title</button>
        </div>
      </div>`;
    this.openModal(html, {
      closeable: false,
      className: 'narrow',
      onMount: card => {
        $('[data-keep]', card).addEventListener('click', () => { this.closeModal(true); g.keepBuilding(); });
        $('[data-map]', card).addEventListener('click', () => { this.closeModal(true); g.keepBuilding(); g.openWarMap(); });
        $('[data-shop]', card).addEventListener('click', () => { g.openShop(); });
        $('[data-title]', card).addEventListener('click', () => { this.closeModal(true); g.returnToTitle(); });
      },
    });
  }

  showDefeat(isDungeon = false, dungeon = null) {
    const g = this.game;
    const score = g.castle.splendor(g.wavesSurvived);
    const html = `
      <div class="rankup-card">
        <div class="rankup-crest" style="color:#d98b7c;border-color:rgba(184,70,51,.55);background:radial-gradient(circle at 40% 30%,rgba(184,70,51,.25),rgba(0,0,0,.3))">${icon('i-skull')}</div>
        <div class="modal-kicker">${isDungeon ? 'The dungeon claims you' : 'The keep has fallen'}</div>
        <h2 class="modal-title" style="color:#f0c3b7">${isDungeon ? `${dungeon?.name || 'The dungeon'} holds.` : 'Your city burns.'}</h2>
        <p class="modal-sub">${isDungeon
          ? `The boss is still breathing and your company is broken. The Crown System logs the attempt and offers you the door. Retry the dungeon with a stronger castle \u2014 or walk away with your city intact.`
          : 'The raiders broke through and put the keep to the torch. The island remembers what you built \u2014 return to the planning table and try a different defense.'}</p>
        <div class="stats-grid">
          <div class="stat"><b>${g.wavesSurvived}</b><span>Waves held</span></div>
          <div class="stat"><b>${g.clearedDungeons.length}</b><span>Dungeons cleared</span></div>
          <div class="stat"><b>${score}</b><span>Splendor</span></div>
        </div>
        <div class="modal-actions" style="justify-content:center;margin-top:18px">
          <button class="btn gold" data-retry>${icon('i-undo')}${isDungeon ? 'Retry Dungeon' : 'Retry Wave'}</button>
          <button class="btn" data-title>Return to Title</button>
        </div>
        <div class="modal-note" style="text-align:center;margin-top:10px">Retry restores your castle exactly as it stood before the ${isDungeon ? 'dungeon' : 'wave'}.</div>
      </div>`;
    this.openModal(html, {
      closeable: false,
      className: 'narrow',
      onMount: card => {
        $('[data-retry]', card).addEventListener('click', () => (isDungeon ? g.retryDungeon() : g.retryWave()));
        $('[data-title]', card).addEventListener('click', () => { this.closeModal(true); g.returnToTitle(); });
      },
    });
  }

  // ---------------------------------------------------------- misc modals
  showPause() {
    const g = this.game;
    const sound = g.audio.enabled;
    const html = `
      <button class="modal-close" data-close aria-label="Resume">${icon('i-x')}</button>
      <div class="modal-kicker">${g.sandbox ? 'Free build' : 'Campaign'}</div>
      <h2 class="modal-title">Paused</h2>
      <p class="modal-sub">${g.sandbox ? 'Your city is quiet. The sea is calm.' : `Wave ${Math.min(g.wave, TOTAL_WAVES)} of ${TOTAL_WAVES} · ${g.wavesSurvived} survived`}</p>
      <div class="pause-list">
        <div class="pause-row"><span>Sound</span><button class="switch ${sound ? 'on' : ''}" data-sound aria-label="Toggle sound"></button></div>
      </div>
      <div class="modal-actions">
        <button class="btn gold" data-resume>${icon('i-play')}Resume</button>
        <button class="btn" data-map>${icon('i-tent')}War Map</button>
        <button class="btn" data-shop>${icon('i-crown')}Crown Vault</button>
        <button class="btn" data-how>${icon('i-eye')}How to Play</button>
      </div>
      <div class="modal-actions" style="margin-top:8px">
        <button class="btn" data-title>Save & Return to Title</button>
        <button class="btn danger" data-restart>New City</button>
      </div>
      <div class="modal-note" style="margin-top:12px">Press Esc to resume. Your campaign is autosaved while you build.</div>
    `;
    this.openModal(html, {
      closeable: true,
      className: 'narrow',
      onMount: card => {
        $('[data-resume]', card).addEventListener('click', () => g.resume());
        $('[data-sound]', card).addEventListener('click', e => {
          const on = g.audio.toggle();
          e.currentTarget.classList.toggle('on', on);
          this.updateSound(on);
        });
        $('[data-how]', card).addEventListener('click', () => { this.howFromPause = true; this.showHowTo(); });
        $('[data-map]', card).addEventListener('click', () => g.openWarMap());
        $('[data-shop]', card).addEventListener('click', () => g.openShop());
        $('[data-title]', card).addEventListener('click', () => { this.closeModal(true); g.returnToTitle(); });
        $('[data-restart]', card).addEventListener('click', () => {
          this.showConfirm('Found a new city?', 'This campaign castle and its progress will be lost.', 'Abandon & Rebuild', () => {
            this.closeModal(true);
            g.state = 'title';
            g.startNewCampaign(true);
          });
        });
      },
    });
  }

  showHowTo() {
    const html = `
      <button class="modal-close" data-close aria-label="Close">${icon('i-x')}</button>
      <div class="modal-kicker">Field manual</div>
      <h2 class="modal-title">Build it your way.</h2>
      <p class="modal-sub">Steel &amp; Stone is a free-form castle-city builder with real sieges. There is no correct castle — only the one you can hold.</p>
      <div class="how-grid">
        <div class="how-item"><h4>${icon('i-hand')}Place & paint</h4><p>Choose a building from the bottom bar, then tap the island. <b>Walls, gates and roads paint</b> while you drag. Tap <b>Camera</b> to look around and inspect.</p></div>
        <div class="how-item"><h4>${icon('i-house')}Grow a city</h4><p>Houses add <b>population</b>; farms, lumber camps, quarries and markets employ workers and produce resources every 6 seconds. Happiness boosts output.</p></div>
        <div class="how-item"><h4>${icon('i-upgrade')}Upgrade everything</h4><p>Tap any building with the Camera tool to inspect it. Spend resources to upgrade it — more output, more hit points, better towers.</p></div>
        <div class="how-item"><h4>${icon('i-captain')}Command the captain</h4><p>During a siege, <b>tap the ground</b> to send Captain Aldric there. He fights on his own, cleaves nearby raiders, and revives if he falls.</p></div>
        <div class="how-item"><h4>${icon('i-tower')}Hold the line</h4><p>Towers and siege engines fire automatically. Raiders path toward your keep and will break the cheapest route — gates attract them, walls slow them.</p></div>
        <div class="how-item"><h4>${icon('i-horn')}Use your boons</h4><p>Q volleys arrows, W sounds the war horn, E repairs the walls. After every wave, choose a permanent boon for your castle.</p></div>
      </div>
      <div class="modal-actions">
        <span class="modal-note">Tip: houses first, then economy, then walls and towers.</span>
        <button class="btn gold" data-close>Understood</button>
      </div>
    `;
    this.openModal(html, {
      closeable: true,
      className: '',
      onMount: card => {
        $$('[data-close]', card).forEach(btn => btn.addEventListener('click', () => {
          if (this.howFromPause) {
            this.howFromPause = false;
            this.showPause();
          } else {
            this.closeModal(true);
          }
        }));
      },
    });
  }

  // ---------------------------------------------------------- prologue & tutorial
  showPrologue() {
    const g = this.game;
    const body = PROLOGUE.body.map(p => `<p>${p}</p>`).join('');
    const html = `
      <div class="story-modal">
        <div class="story-glow"></div>
        <div class="modal-kicker">${PROLOGUE.kicker}</div>
        <h2 class="modal-title story-title">${PROLOGUE.title}</h2>
        <p class="story-lead">${PROLOGUE.lead}</p>
        <div class="story-body">${body}</div>
        <div class="oath-line">${PROLOGUE.oath}</div>
        <div class="modal-actions" style="justify-content:center;margin-top:18px">
          <button class="btn gold" data-awaken>${icon('i-crown')}${PROLOGUE.cta}</button>
        </div>
        <div class="modal-note" style="text-align:center;margin-top:10px">The Crown System will guide you through your first city. You can skip it at any time.</div>
      </div>`;
    this.openModal(html, {
      closeable: false,
      className: 'story-modal-card',
      onMount: card => {
        $('[data-awaken]', card).addEventListener('click', () => {
          g.audio.init();
          g.audio.victory();
          this.closeModal(true);
          this.startTutorial();
        });
      },
    });
  }

  startTutorial() {
    if (!this.game || this.game.tutorialDone) return;
    this.tutorialIndex = 0;
    this.tutorialActive = true;
    this.renderTutorial();
  }

  renderTutorial() {
    const step = TUTORIAL_STEPS[this.tutorialIndex];
    if (!step) { this.finishTutorial(); return; }
    const n = this.tutorialIndex + 1;
    this.el.tutStep.textContent = `${n} / ${TUTORIAL_STEPS.length}`;
    this.el.tutKicker.textContent = step.kicker;
    this.el.tutTitle.textContent = step.title;
    this.el.tutText.textContent = step.text;
    this.el.tutIcon.setAttribute('href', `#${step.icon}`);
    this.el.tutBar.style.width = `${(n / TUTORIAL_STEPS.length) * 100}%`;
    const interactive = !!(step.events && step.events.length);
    this.el.tutWait.classList.toggle('hidden', !interactive);
    if (interactive) this.el.tutWait.innerHTML = `${icon('i-arrow')}<span>${step.wait || 'Complete the action to continue.'}</span>`;
    this.el.tutNext.classList.toggle('hidden', interactive);
    this.el.tutNext.textContent = this.tutorialIndex === 0 ? 'Begin' : 'Continue';
    this.el.tutorial.classList.remove('hidden');
    this.tutorialActive = true;
  }

  tutorialEvent(type, data) {
    if (!this.tutorialActive) return;
    const step = TUTORIAL_STEPS[this.tutorialIndex];
    if (!step?.events?.length) return;
    const hit = step.events.some(ev => {
      if (ev.type !== type) return false;
      if (Array.isArray(ev.data)) return ev.data.includes(data);
      return true;
    });
    if (!hit) return;
    this.game.audio?.select?.();
    this.tutorialIndex++;
    this.renderTutorial();
  }

  advanceTutorial() {
    if (!this.tutorialActive) return;
    const step = TUTORIAL_STEPS[this.tutorialIndex];
    if (!step) { this.finishTutorial(); return; }
    if (step.events?.length) return;
    this.game.audio?.click?.();
    this.tutorialIndex++;
    this.renderTutorial();
  }

  finishTutorial() {
    if (!this.tutorialActive) { this.el.tutorial.classList.add('hidden'); return; }
    this.tutorialActive = false;
    this.el.tutorial.classList.add('hidden');
    this.game.finishTutorial?.();
  }

  // ---------------------------------------------------------- war map
  regionById(id) {
    return REGIONS.find(r => r.id === id) || null;
  }

  regionStatus(region) {
    const g = this.game;
    const claimed = g.regionsClaimed.includes(region.id);
    if (claimed) return { key: 'claimed', label: 'Claimed', note: 'Banner raised' };
    const current = g.wave >= region.from && g.wave <= region.to && !g.completed;
    if (current) return { key: 'current', label: 'Front line', note: `Wave ${Math.min(g.wave, region.to)}` };
    if (g.wave < region.from) return { key: 'locked', label: 'Sealed', note: `Wave ${region.from}` };
    return { key: 'cleared', label: 'Unclaimed', note: 'Ready' };
  }

  showWarMap() {
    const g = this.game;
    if (!this.mapSelected) {
      const current = regionForWave(Math.min(g.wave, TOTAL_WAVES));
      this.mapSelected = { type: 'region', id: current.id };
    }
    const pts = REGIONS.map(r => `${r.x},${r.y}`).join(' ');
    const regionNodes = REGIONS.map(r => {
      const s = this.regionStatus(r);
      return `<button class="map-node region ${s.key}" style="left:${r.x}%;top:${r.y}%" data-node="region" data-id="${r.id}" aria-label="${r.name}">
        <span class="node-pin">${icon(r.icon)}</span>
        <span class="node-label"><b>${r.short}</b><i>${s.label}</i></span>
        ${s.key === 'claimed' ? `<span class="node-badge">${icon('i-crown')}</span>` : ''}
      </button>`;
    }).join('');
    const dungeonNodes = DUNGEONS.map(d => {
      const available = g.dungeonAvailable(d);
      const cleared = g.isDungeonCleared(d.id);
      const region = this.regionById(d.region);
      const line = region ? `<path class="dungeon-path" d="M ${region.x} ${region.y} L ${d.x} ${d.y}"/>` : '';
      return `${line}<button class="map-node dungeon ${available ? (cleared ? 'cleared' : 'open') : 'locked'}" style="left:${d.x}%;top:${d.y}%" data-node="dungeon" data-id="${d.id}" aria-label="${d.name}">
        <span class="node-pin">${icon(cleared ? 'i-star' : 'i-skull')}</span>
        <span class="node-label"><b>${d.name.replace(/^The /, '')}</b><i>${cleared ? 'Cleared' : available ? 'Dungeon' : `Wave ${d.unlockWave}`}</i></span>
      </button>`;
    }).join('');

    const html = `
      <button class="modal-close" data-close aria-label="Close">${icon('i-x')}</button>
      <div class="map-head">
        <div class="map-heading">
          <div class="modal-kicker">The War Table</div>
          <h2 class="modal-title">The crowns of Vareth</h2>
          <p class="modal-sub">Five regions stand between your grey island and the Iron Citadel. Claim them by holding their waves — then descend into the dungeons hidden along the road.</p>
        </div>
        <div class="map-wealth">
          <span class="crown-pill">${icon('i-crown')}<b data-crown-balance>${(g.premium.crowns || 0).toLocaleString('en-US')}</b><em>Crowns</em></span>
          <button class="btn small gold" data-shop>${icon('i-crown')}Crown Vault</button>
        </div>
      </div>
      <div class="map-body">
        <div class="war-map">
          <div class="map-terrain"></div>
          <svg class="map-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polyline class="map-route" points="${pts}"/>
            ${dungeonNodes.match(/<path[^>]*>/g)?.join('') || ''}
          </svg>
          ${regionNodes}
          ${dungeonNodes.replace(/<path[^>]*>/g, '')}
          <span class="map-compass">N</span>
          <span class="map-sea-label">The Sundered Sea</span>
          <span class="map-iron-label">The Iron Citadel</span>
        </div>
        <aside class="map-panel" id="map-panel"></aside>
      </div>
      <div class="map-legend">
        <span><i class="legend-dot claimed"></i>Claimed</span>
        <span><i class="legend-dot current"></i>Front line</span>
        <span><i class="legend-dot locked"></i>Sealed</span>
        <span><i class="legend-dot dungeon"></i>Dungeon</span>
        <span class="legend-spacer"></span>
        <span>${g.regionsClaimed.length} / ${REGIONS.length} regions · ${g.clearedDungeons.length} / ${DUNGEONS.length} dungeons</span>
      </div>`;

    this.openModal(html, {
      closeable: true,
      className: 'war-map-modal',
      onMount: card => {
        $$('[data-node]', card).forEach(btn => btn.addEventListener('click', () => {
          g.audio.init();
          g.audio.click();
          this.mapSelected = { type: btn.dataset.node, id: btn.dataset.id };
          this.renderMapInfo();
        }));
        $('[data-shop]', card)?.addEventListener('click', () => g.openShop());
        this.renderMapInfo();
        this.updateCrowns();
      },
    });
  }

  renderMapInfo() {
    const g = this.game;
    const card = this.el.modalCard;
    const panel = $('#map-panel', card);
    if (!panel) return;
    const sel = this.mapSelected || { type: 'region', id: REGIONS[0].id };
    $$('.map-node', card).forEach(n => n.classList.toggle('active', n.dataset.node === sel.type && n.dataset.id === sel.id));

    if (sel.type === 'dungeon') {
      const d = dungeonById(sel.id);
      if (!d) return;
      const boss = ENEMIES[d.boss];
      const skin = skinById(d.skin);
      const available = g.dungeonAvailable(d);
      const cleared = g.isDungeonCleared(d.id);
      const region = this.regionById(d.region);
      const loot = Object.entries(d.loot).filter(([k, v]) => v > 0).map(([k, v]) => {
        const ic = k === 'crowns' ? 'i-crown' : RESOURCES[k].icon;
        return `<span class="loot-chip">${icon(ic)}+${v}</span>`;
      }).join('');
      panel.innerHTML = `
        <div class="panel-kicker">${d.power}${cleared ? ' · Cleared' : ''}</div>
        <h3 class="panel-title">${d.name}</h3>
        <div class="panel-where">${icon(region?.icon || 'i-tent')}${region?.name || 'Vareth'}</div>
        <p class="panel-lore">${d.lore}</p>
        <div class="panel-boss">
          <span class="panel-boss-ic">${icon('i-skull')}</span>
          <div><b>${boss?.name || d.boss}</b><span>${d.bossLine}</span></div>
        </div>
        <div class="panel-section"><h4>Loot</h4><div class="rew-loot tight">${loot}</div></div>
        <div class="panel-section">
          <h4>First clear</h4>
          <div class="panel-skin">${skin ? this.skinPreviewHTML(skin) : ''}<div><b>${skin?.name || 'Exclusive skin'}</b><span>${cleared ? 'Already claimed — repeat clears give reduced resources.' : 'Awarded the first time you defeat this boss.'}</span></div></div>
        </div>
        <div class="panel-actions">
          <button class="btn gold wide" data-enter ${available ? '' : 'disabled'}>${icon('i-skull')}${available ? (cleared ? 'Descend Again' : 'Enter the Dungeon') : `Unlocks after Wave ${d.unlockWave}`}</button>
        </div>
        ${available ? '' : `<div class="panel-note">Survive ${d.unlockWave - g.wavesSurvived} more wave${d.unlockWave - g.wavesSurvived === 1 ? '' : 's'} to open this dungeon.</div>`}`;
      $('[data-enter]', panel)?.addEventListener('click', () => this.showDungeonBrief(d));
      return;
    }

    const r = this.regionById(sel.id) || REGIONS[0];
    const s = this.regionStatus(r);
    const canMarch = !g.sandbox && (s.key === 'current' || s.key === 'cleared');
    const claim = g.regionsClaimed.includes(r.id);
    panel.innerHTML = `
      <div class="panel-kicker">${r.tag} · ${s.label}</div>
      <h3 class="panel-title">${r.name}</h3>
      <div class="panel-where">${icon(r.icon)}Waves ${r.from}–${r.to}</div>
      <p class="panel-lore">${r.lore}</p>
      <div class="panel-stats">
        <div><span>Waves held</span><b>${Math.min(g.wavesSurvived, r.to)} / ${r.to}</b></div>
        <div><span>Status</span><b class="st-${s.key}">${s.label}</b></div>
      </div>
      ${claim
        ? `<div class="panel-claim">${icon('i-crown')}<span>${r.claim}</span></div>`
        : `<div class="panel-note">Hold every wave through Wave ${r.to} to claim this region. Each claim grants <b>60 Crowns</b>.</div>`}
      <div class="panel-section">
        <h4>Dungeons in this region</h4>
        ${this.regionDungeonList(r.id)}
      </div>
      <div class="panel-actions">
        ${canMarch
          ? `<button class="btn gold wide" data-march>${icon('i-horn')}March to Wave ${Math.min(g.wave, r.to)}</button>`
          : `<button class="btn wide" data-close>${claim ? 'Return to your city' : 'Close the war table'}</button>`}
      </div>`;
    $('[data-march]', panel)?.addEventListener('click', () => {
      this.closeModal(true);
      g.beginWave();
    });
    $$('[data-dungeon]', panel).forEach(btn => btn.addEventListener('click', () => {
      const d = dungeonById(btn.dataset.dungeon);
      if (d) { this.mapSelected = { type: 'dungeon', id: d.id }; this.renderMapInfo(); }
    }));
  }

  regionDungeonList(regionId) {
    const g = this.game;
    const list = DUNGEONS.filter(d => d.region === regionId);
    if (!list.length) return `<div class="panel-note">No dungeons are marked here. The Crown System is silent.</div>`;
    return list.map(d => {
      const available = g.dungeonAvailable(d);
      const cleared = g.isDungeonCleared(d.id);
      return `<button class="panel-dungeon ${available ? '' : 'locked'}" data-dungeon="${d.id}">
        <span class="pd-ic">${icon(cleared ? 'i-star' : 'i-skull')}</span>
        <span class="pd-name">${d.name}<i>${d.power}</i></span>
        <span class="pd-state">${cleared ? 'Cleared' : available ? 'Open' : `W${d.unlockWave}`}</span>
      </button>`;
    }).join('');
  }

  // ---------------------------------------------------------- premium shop
  skinPreviewHTML(skin) {
    if (!skin) return '';
    if (skin.cat === 'sky') {
      const p = SKY_PREVIEW[skin.theme] || SKY_PREVIEW.day;
      return `<div class="skin-swatch sky" style="--s1:${p[0]};--s2:${p[1]};--s3:${p[2]}"><span class="swatch-sun"></span></div>`;
    }
    if (skin.cat === 'roof') {
      const hex = `#${(skin.color || 0xa84b38).toString(16).padStart(6, '0')}`;
      return `<div class="skin-swatch roof" style="--swatch:${hex}"><span class="swatch-roof"></span></div>`;
    }
    if (skin.cat === 'stone') {
      const hex = skin.color === 0xffffff ? '#d8cdb4' : `#${skin.color.toString(16).padStart(6, '0')}`;
      return `<div class="skin-swatch stone" style="--swatch:${hex}"><span class="swatch-brick"></span></div>`;
    }
    if (skin.cat === 'captain') {
      const pal = CAPTAIN_PALETTES[skin.palette] || CAPTAIN_PALETTES.steel;
      const hex = n => `#${n.toString(16).padStart(6, '0')}`;
      return `<div class="skin-swatch captain" style="--tunic:${hex(pal.tunic)};--cape:${hex(pal.cape)};--plate:${hex(pal.plate)};--trim:${hex(pal.trim)}">${icon('i-captain')}</div>`;
    }
    const cloth = { blue: '#244763', red: '#5f1f1b', frost: '#2f5a72', ember: '#3a1616', verdant: '#1f3b2a', sun: '#4a2e10', rat: '#3d3524' }[skin.banner] || '#244763';
    return `<div class="skin-swatch livery" style="--cloth:${cloth};--trim:${skin.ui || '#e7c37a'}">${icon('i-crown')}</div>`;
  }

  showShop() {
    const g = this.game;
    if (!SKIN_CATEGORIES.some(c => c.id === this.shopTab)) this.shopTab = SKIN_CATEGORIES[0].id;
    const tabs = SKIN_CATEGORIES.map(c =>
      `<button class="shop-tab ${this.shopTab === c.id ? 'active' : ''}" data-tab="${c.id}">${icon(c.icon)}<span>${c.name}</span></button>`).join('');
    const packs = CROWN_PACKS.map(p => `
      <button class="crown-pack" data-pack="${p.id}">
        <span class="pack-amount">${icon('i-crown')}${p.crowns.toLocaleString('en-US')}</span>
        <b>${p.name}</b>
        <i>${p.price}</i>
        <em>Simulated</em>
      </button>`).join('');
    const html = `
      <button class="modal-close" data-close aria-label="Close">${icon('i-x')}</button>
      <div class="shop-head">
        <div>
          <div class="modal-kicker">The Crown Vault</div>
          <h2 class="modal-title">Dress your kingdom.</h2>
          <p class="modal-sub">Banners, roofs, stone and skies. Everything here is cosmetic — your city still rises on its own merit.</p>
        </div>
        <div class="shop-wealth">
          <span class="crown-pill big">${icon('i-crown')}<b data-crown-balance>${(g.premium.crowns || 0).toLocaleString('en-US')}</b><em>Crowns</em></span>
        </div>
      </div>
      <div class="shop-tabs">${tabs}</div>
      <div class="shop-grid" id="shop-grid"></div>
      <div class="shop-cols">
        <section class="shop-block">
          <h3>${icon('i-crown')}Packs of Crowns</h3>
          <p>Crowns unlock cosmetics and region banners. Packs are simulated in this demo — no payment is taken.</p>
          <div class="pack-grid">${packs}</div>
        </section>
        <section class="shop-block oath-block" id="shop-oath"></section>
      </div>
      <div class="demo-note">${icon('i-eye')} <span><b>Demo store.</b> Crowns, packs and the Sovereign's Oath are entirely simulated. No money is charged, no card is needed, and nothing here affects save progress.</span></div>`;
    this.openModal(html, {
      closeable: true,
      className: 'shop-modal',
      onMount: card => {
        $$('[data-tab]', card).forEach(btn => btn.addEventListener('click', () => {
          g.audio.init();
          g.audio.click();
          this.shopTab = btn.dataset.tab;
          $$('[data-tab]', card).forEach(b => b.classList.toggle('active', b.dataset.tab === this.shopTab));
          this.renderShopGrid();
        }));
        $$('[data-pack]', card).forEach(btn => btn.addEventListener('click', () => {
          g.buyCrowns(btn.dataset.pack);
          this.updateCrowns();
        }));
        this.renderOath();
        this.renderShopGrid();
        this.updateCrowns();
      },
    });
  }

  renderShopGrid() {
    const g = this.game;
    const grid = $('#shop-grid', this.el.modalCard);
    if (!grid) return;
    const cat = SKIN_CATEGORIES.find(c => c.id === this.shopTab) || SKIN_CATEGORIES[0];
    const skins = skinsInCategory(cat.id);
    const cards = skins.map(skin => {
      const owned = g.ownsSkin(skin.id);
      const equipped = g.premium.equipped[skin.cat] === skin.id;
      let buttons;
      if (equipped) {
        buttons = `<button class="btn small" disabled>${icon('i-shield')}Equipped</button>`;
      } else if (owned) {
        buttons = `<button class="btn small gold" data-equip="${skin.id}">Equip</button>`;
      } else if (skin.dungeon) {
        const d = dungeonById(skin.dungeon);
        buttons = `<button class="btn small" disabled title="${d ? d.name : 'Dungeon'}">${icon('i-skull')}First clear</button>`;
      } else if (skin.subscription) {
        buttons = `<button class="btn small" disabled>${icon('i-crown')}Oath exclusive</button>`;
      } else {
        buttons = `<button class="btn small gold" data-buy="${skin.id}">Buy · ${skin.price}</button>`;
      }
      const tag = equipped ? 'Equipped' : owned ? 'Owned' : skin.dungeon ? 'Dungeon reward' : skin.subscription ? 'Sovereign\'s Oath' : skin.price ? `${skin.price} Crowns` : 'Free';
      return `<article class="skin-card ${equipped ? 'equipped' : ''} ${owned ? 'owned' : ''}">
        ${this.skinPreviewHTML(skin)}
        <div class="skin-body">
          <div class="skin-head"><h4>${skin.name}</h4><span class="skin-tag">${tag}</span></div>
          <p>${skin.desc}</p>
          <div class="skin-foot">
            ${skin.dungeon && !owned ? `<span class="skin-source">${icon('i-tent')}${dungeonById(skin.dungeon)?.name || 'Dungeon'}</span>` : '<span></span>'}
            ${buttons}
          </div>
        </div>
      </article>`;
    }).join('');
    grid.innerHTML = `<div class="shop-cat-blurb">${icon(cat.icon)}<div><b>${cat.name}</b><span>${cat.blurb}</span></div></div>${cards}`;
    $$('[data-equip]', grid).forEach(btn => btn.addEventListener('click', () => {
      g.equipSkin(btn.dataset.equip);
      this.renderShopGrid();
    }));
    $$('[data-buy]', grid).forEach(btn => btn.addEventListener('click', () => {
      g.buySkin(btn.dataset.buy);
      this.updateCrowns();
      this.renderShopGrid();
    }));
  }

  renderOath() {
    const g = this.game;
    const box = $('#shop-oath', this.el.modalCard);
    if (!box) return;
    const active = g.isSubscribed();
    const days = g.subscriptionDaysLeft();
    box.innerHTML = `
      <h3>${icon('i-crown')}${SUBSCRIPTION.name}</h3>
      <div class="oath-price">${active ? `<b>Active</b><span>${days} day${days === 1 ? '' : 's'} remaining</span>` : `<b>${SUBSCRIPTION.price}</b><span>cancel anytime</span>`}</div>
      <p>${active ? 'Your oath holds. The Crown System notes your continued patronage — the benefits below are already applied.' : 'A monthly pledge for a sovereign who wants every edge. Activation is simulated in this prototype.'}</p>
      <ul class="oath-benefits">${SUBSCRIPTION.benefits.map(b => `<li>${icon('i-star')}<span>${b}</span></li>`).join('')}</ul>
      <button class="btn ${active ? '' : 'gold'} wide" data-oath ${active ? 'disabled' : ''}>${active ? 'Oath Sworn' : 'Swear the Oath · demo'}</button>
      <div class="demo-mini">No card, no charge. The subscription is simulated for demonstration.</div>`;
    $('[data-oath]', box)?.addEventListener('click', () => {
      if (g.isSubscribed()) return;
      const ok = g.activateSubscription();
      if (ok) {
        this.updateCrowns();
        this.renderOath();
        this.renderShopGrid();
      }
    });
  }

  // ---------------------------------------------------------- dungeons
  showDungeonBrief(d) {
    const g = this.game;
    const boss = ENEMIES[d.boss];
    const skin = skinById(d.skin);
    const available = g.dungeonAvailable(d);
    const cleared = g.isDungeonCleared(d.id);
    const region = this.regionById(d.region);
    const loot = Object.entries(d.loot).filter(([k, v]) => v > 0).map(([k, v]) => {
      const ic = k === 'crowns' ? 'i-crown' : RESOURCES[k].icon;
      return `<span class="loot-chip">${icon(ic)}+${v}</span>`;
    }).join('');
    const html = `
      <button class="modal-close" data-close aria-label="Close">${icon('i-x')}</button>
      <div class="dungeon-brief">
        <div class="brief-emblem">${icon('i-skull')}</div>
        <div class="modal-kicker">${d.power} · ${region?.name || 'Vareth'}</div>
        <h2 class="modal-title">${d.name}</h2>
        <p class="modal-sub">${d.lore}</p>
        <div class="brief-cols">
          <div class="brief-block">
            <h4>${icon('i-skull')}Boss</h4>
            <b>${boss?.name || d.boss}</b>
            <p>${d.bossLine}</p>
            <div class="brief-hp">${icon('i-shield')}${boss?.hp || '?'} HP · ${boss?.damage || '?'} damage</div>
          </div>
          <div class="brief-block">
            <h4>${icon('i-crown')}Loot</h4>
            <div class="rew-loot tight">${loot}</div>
            ${skin ? `<div class="brief-skin">${this.skinPreviewHTML(skin)}<div><b>${skin.name}</b><span>${cleared ? 'First clear already claimed. Repeat clears give reduced resources.' : 'Exclusive first-clear reward.'}</span></div></div>` : ''}
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn" data-close>Not yet</button>
          <button class="btn gold" data-launch ${available ? '' : 'disabled'}>${icon('i-horn')}${available ? 'Begin the Descent' : `Unlocks after Wave ${d.unlockWave}`}</button>
        </div>
        ${available ? '<div class="modal-note" style="text-align:center;margin-top:10px">Your castle is saved before the fight. Defeat returns you to the war table.</div>' : ''}
      </div>`;
    this.openModal(html, {
      closeable: true,
      className: 'dungeon-brief-card',
      onMount: card => {
        $$('[data-close]', card).forEach(btn => btn.addEventListener('click', () => this.closeModal(true)));
        $('[data-launch]', card)?.addEventListener('click', () => {
          g.audio.init();
          this.closeModal(true);
          g.startDungeon(d.id);
        });
      },
    });
  }

  showDungeonComplete(d, result = {}) {
    const g = this.game;
    const loot = result.loot || {};
    const crownCount = loot.crowns || 0;
    const lootHTML = Object.entries(loot).map(([k, v]) => {
      if (!v || k === 'crowns') return '';
      return `<span class="loot-chip">${icon(RESOURCES[k].icon)}+${v}</span>`;
    }).join('') + (crownCount ? `<span class="loot-chip crown">${icon('i-crown')}+${crownCount} Crowns</span>` : '');
    const skin = result.skin;
    const html = `
      <div class="rankup-card dungeon-win">
        <div class="rankup-crest">${icon('i-skull')}</div>
        <div class="modal-kicker">${d.power} · ${result.first ? 'First clear' : 'Cleared again'}</div>
        <h2 class="modal-title">${d.name} is silent.</h2>
        <p class="modal-sub">${result.first
          ? 'The boss falls and the dark gives up its hoard. The Crown System marks the dungeon complete — and something new hangs in your vault.'
          : 'The boss falls again. The hoard is thinner the second time, but your name is still carved into the stone.'}</p>
        <div class="rew-loot">${lootHTML}</div>
        ${skin && result.first ? `<div class="first-clear">
          ${this.skinPreviewHTML(skin)}
          <div><div class="fc-kicker">${icon('i-star')}First clear unlocked</div><b>${skin.name}</b><span>Equip it from the Crown Vault.</span></div>
        </div>` : ''}
        <div class="modal-actions" style="justify-content:center;margin-top:18px">
          <button class="btn gold" data-return>${icon('i-hammer')}Return to the City</button>
          <button class="btn" data-map>${icon('i-tent')}War Map</button>
        </div>
        <div class="modal-note" style="text-align:center;margin-top:10px">${result.first ? 'First-clear skin added to your collection.' : 'Repeat clears grant reduced gold, wood and stone.'}</div>
      </div>`;
    this.openModal(html, {
      closeable: false,
      className: 'narrow',
      onMount: card => {
        $('[data-return]', card).addEventListener('click', () => {
          this.closeModal(true);
          g.finishDungeon();
        });
        $('[data-map]', card).addEventListener('click', () => {
          g.finishDungeon();
          g.openWarMap();
        });
      },
    });
  }

  showConfirm(title, text, confirmLabel, onConfirm) {
    const html = `
      <button class="modal-close" data-close aria-label="Cancel">${icon('i-x')}</button>
      <div class="modal-kicker">A new beginning</div>
      <h2 class="modal-title">${title}</h2>
      <p class="modal-sub">${text}</p>
      <div class="modal-actions">
        <button class="btn" data-close>Cancel</button>
        <button class="btn gold" data-confirm>${confirmLabel}</button>
      </div>`;
    this.openModal(html, {
      closeable: true,
      className: 'narrow',
      onMount: card => {
        $$('[data-close]', card).forEach(btn => btn.addEventListener('click', () => this.closeModal(true)));
        $('[data-confirm]', card).addEventListener('click', () => { this.closeModal(true); onConfirm(); });
      },
    });
  }
}
