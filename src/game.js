import * as THREE from 'three';
import {
  RESOURCES, START_RESOURCES, TICK, STRUCTURES, BUILD_ORDER, TOTAL_WAVES, WAVES,
  QUESTS, UPGRADES, RANKS, rankForSplendor, costFor, upgradeCostFor,
  workerCostFor, populationFor, garrisonFor, towerStatsFor,
  cellKey, worldToCell, HALF, CELL, GRID,
  REGIONS, regionForWave, isRegionConquered, CHRONICLES, VICTORY,
  DUNGEONS, dungeonById, SKINS, SKIN_CATEGORIES, DEFAULT_SKINS, skinById,
  SUBSCRIPTION, CAPTAIN_PALETTES, CROWN_PACKS,
} from './defs.js';
import { UI } from './ui.js';
import { Combat } from './units.js';

const CAMPAIGN_KEY = 'steelstone_campaign_v2';
const SANDBOX_KEY = 'steelstone_sandbox_v2';
const BEST_KEY = 'steelstone_best_v2';
const PREMIUM_KEY = 'steelstone_premium_v1';

export class Game {
  constructor({ scene, camera, renderer, world, castle, fx, audio, controls }) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.world = world;
    this.castle = castle;
    this.fx = fx;
    this.audio = audio;
    this.controls = controls;
    this.castle.game = this;
    this.controls.game = this;

    this.state = 'title';
    this.previousState = null;
    this.sandbox = false;
    this.wave = 1;
    this.wavesSurvived = 0;
    this.resources = { ...START_RESOURCES };
    this.upgrades = [];
    this.rankIndex = 0;
    this.bestWave = Number(localStorage.getItem(BEST_KEY) || 0);
    this.quests = { active: [], done: [] };
    this.tool = 'camera';
    this.selectedType = null;
    this.selectedStructure = null;
    this.undoStack = [];
    this.lastPaintCell = null;
    this.aimingVolley = false;
    this.cooldowns = { volley: 0, horn: 0, repair: 0 };
    this.cooldownMax = { volley: 25, horn: 45, repair: 35 };
    this.tickTimer = TICK;
    this.time = 0;
    this.questTimer = 0;
    this.rankTimer = 0;
    this.saveDirty = false;
    this.saveTimer = 0;
    this.snapshot = null;
    this.heroHintShown = false;
    this.completed = false;
    this.timeScale = 1;
    this.clearedDungeons = [];
    this.regionsClaimed = [];
    this.activeDungeon = null;
    this.tutorialDone = false;
    this.mapSelected = null;

    this.premium = this.loadPremium();

    this.combat = new Combat(scene, castle, fx, audio, {
      onWaveComplete: n => this.onWaveComplete(n),
      onDungeonComplete: d => this.onDungeonComplete(d),
      onBossSpawn: e => this.onBossSpawn(e),
      onBossKilled: e => this.onBossKilled(e),
      onKill: e => this.onEnemyKilled(e),
      onBoom: amt => this.shake(amt),
    });
    this.combat.callbacks.heroHpMult = 1;
    this.combat.callbacks.heroDmgMult = 1;

    castle.reset();
    this.ui = new UI(this);
    this.applyEquippedSkins();
    this.enterTitle(true);
  }

  // ---------------------------------------------------------- premium vault
  loadPremium() {
    const defaults = {
      crowns: 320,
      ownedSkins: ['livery_ashbourne', 'roof_terracotta', 'stone_limestone', 'sky_day', 'captain_steel'],
      equipped: { ...DEFAULT_SKINS },
      subscriptionUntil: 0,
      purchased: [],
    };
    try {
      const raw = localStorage.getItem(PREMIUM_KEY);
      if (!raw) return defaults;
      const data = JSON.parse(raw);
      const equipped = { ...defaults.equipped, ...(data.equipped || {}) };
      for (const cat of Object.keys(DEFAULT_SKINS)) {
        const skin = skinById(equipped[cat]);
        if (!skin || skin.cat !== cat) equipped[cat] = DEFAULT_SKINS[cat];
      }
      return {
        crowns: Math.max(0, Number(data.crowns) || 0),
        ownedSkins: Array.isArray(data.ownedSkins) ? [...new Set([...defaults.ownedSkins, ...data.ownedSkins])] : defaults.ownedSkins,
        equipped,
        subscriptionUntil: Number(data.subscriptionUntil) || 0,
        purchased: Array.isArray(data.purchased) ? data.purchased : [],
      };
    } catch { return defaults; }
  }

  savePremium() {
    try { localStorage.setItem(PREMIUM_KEY, JSON.stringify(this.premium)); } catch {}
  }

  isSubscribed() {
    return (this.premium?.subscriptionUntil || 0) > Date.now();
  }

  ownsSkin(id) {
    const skin = skinById(id);
    if (!skin) return false;
    if (skin.free) return true;
    if (skin.subscription && this.isSubscribed()) return true;
    return this.premium.ownedSkins.includes(id);
  }

  isDungeonCleared(id) {
    return this.clearedDungeons.includes(id);
  }

  addCrowns(n) {
    this.premium.crowns = Math.max(0, (this.premium.crowns || 0) + n);
    this.savePremium();
    this.ui?.updateCrowns();
  }

  buySkin(id) {
    const skin = skinById(id);
    if (!skin) return false;
    if (this.ownsSkin(id)) {
      this.ui?.toast('You already own that skin.', 'good');
      return false;
    }
    if (skin.dungeon) {
      this.ui?.toast('Dungeon skins are earned by defeating their boss.', 'bad');
      return false;
    }
    if (skin.subscription) {
      this.ui?.toast('This skin is included with the Sovereign\u2019s Oath.', 'bad');
      return false;
    }
    if ((this.premium.crowns || 0) < skin.price) {
      this.ui?.toast(`You need ${skin.price - this.premium.crowns} more Crowns.`, 'bad');
      return false;
    }
    this.premium.crowns -= skin.price;
    this.premium.ownedSkins.push(id);
    this.savePremium();
    this.equipSkin(id, true);
    this.ui?.updateCrowns?.();
    this.ui?.toast(`${skin.name} unlocked.`, 'good');
    this.audio.upgrade();
    return true;
  }

  equipSkin(id) {
    const skin = skinById(id);
    if (!skin || !this.ownsSkin(id)) return false;
    this.premium.equipped[skin.cat] = id;
    this.savePremium();
    this.applyEquippedSkins();
    this.ui?.toast(`${skin.name} equipped.`, 'good');
    this.audio.select();
    return true;
  }

  buyCrowns(packId) {
    const pack = CROWN_PACKS.find(p => p.id === packId);
    if (!pack) return false;
    this.addCrowns(pack.crowns);
    this.premium.purchased.push({ id: packId, at: Date.now() });
    this.savePremium();
    this.ui?.toast(`Demo purchase complete: +${pack.crowns} Crowns. No real payment was taken.`, 'good');
    this.audio.victory();
    return true;
  }

  activateSubscription() {
    if (this.isSubscribed()) {
      this.ui?.toast('Your Sovereign\u2019s Oath is already active.', 'good');
      return false;
    }
    this.premium.subscriptionUntil = Date.now() + SUBSCRIPTION.days * 86400000;
    this.premium.crowns = (this.premium.crowns || 0) + SUBSCRIPTION.crowns;
    this.premium.ownedSkins.push('livery_sun');
    this.premium.equipped.livery = 'livery_sun';
    this.savePremium();
    this.applyEquippedSkins();
    this.ui?.updateCrowns();
    this.ui?.toast(`The Sovereign\u2019s Oath is sworn. ${SUBSCRIPTION.crowns} Crowns granted (demo, no charge).`, 'good');
    this.audio.victory();
    return true;
  }

  subscriptionDaysLeft() {
    const ms = (this.premium?.subscriptionUntil || 0) - Date.now();
    return Math.max(0, Math.ceil(ms / 86400000));
  }

  applyEquippedSkins() {
    const equipped = this.premium?.equipped || DEFAULT_SKINS;
    const livery = skinById(equipped.livery);
    const sky = skinById(equipped.sky);
    const captain = skinById(equipped.captain);
    this.castle?.applySkins(equipped);
    this.world?.applySkyTheme?.(sky?.theme || 'day');
    this.combat?.hero?.applyPalette?.(CAPTAIN_PALETTES[captain?.palette] || CAPTAIN_PALETTES.steel);
    if (livery) {
      document.documentElement.style.setProperty('--gold', livery.ui || '#e7c37a');
      document.documentElement.style.setProperty('--gold-2', livery.ui2 || '#b8914d');
    }
  }

  // ---------------------------------------------------------- state
  enterTitle(first = false) {
    this.state = 'title';
    this.combat.clear();
    this.castle.select(null);
    this.ui.closeModal(true);
    this.ui.showHUD(false);
    this.ui.showTitle(true);
    this.controls.setCinematic(true);
    this.ui.updateTitle();
    if (!first) this.saveNow();
  }

  startNewCampaign(resetConfirmed = false) {
    if (this.hasCampaignSave() && !resetConfirmed) {
      this.ui.showConfirm('Found a new city?', 'Your current campaign save will be replaced. The old castle cannot be recovered.', 'Found New City', () => this.startNewCampaign(true));
      return;
    }
    this.castle.bonuses.masonry = 0;
    this.castle.reset();
    this.combat.clear();
    this.resources = { ...START_RESOURCES };
    this.wave = 1;
    this.wavesSurvived = 0;
    this.upgrades = [];
    this.rankIndex = 0;
    this.bestWave = this.bestWave || 0;
    this.quests = { active: [], done: [] };
    this.completed = false;
    this.sandbox = false;
    this.clearedDungeons = [];
    this.regionsClaimed = [];
    this.activeDungeon = null;
    this.tutorialDone = false;
    this.tool = 'camera';
    this.selectedType = null;
    this.selectedStructure = null;
    this.undoStack = [];
    this.aimingVolley = false;
    this.cooldowns = { volley: 0, horn: 0, repair: 0 };
    this.tickTimer = TICK;
    this.time = 0;
    this.ensureQuests();
    this.state = 'build';
    this.applyEquippedSkins();
    this.ui.closeModal(true);
    this.ui.showTitle(false);
    this.ui.showHUD(true);
    this.ui.setBuildMode();
    this.controls.setCinematic(false);
    this.controls.focusHome(true);
    this.saveNow();
    this.updateRank(true);
    this.ui.toast('Your banners rise over a new island. Build your city.', 'good');
    setTimeout(() => {
      if (this.state === 'build' && !this.tutorialDone) this.ui.showPrologue();
    }, 350);
  }

  continueCampaign() {
    const data = this.readSave(CAMPAIGN_KEY);
    if (!data) { this.ui.toast('No saved castle was found.', 'bad'); return; }
    if (data.completed) {
      this.startSandbox(data);
      return;
    }
    this.loadState(data);
    this.sandbox = false;
    this.state = 'build';
    this.completed = false;
    this.ui.closeModal(true);
    this.ui.showTitle(false);
    this.ui.showHUD(true);
    this.ui.setBuildMode();
    this.controls.setCinematic(false);
    this.controls.focusHome(true);
    this.ensureQuests();
    this.ui.toast(`Welcome back. Wave ${this.wave} awaits.`, 'good');
    this.updateRank(true);
  }

  startSandbox(data = null) {
    const save = data || this.readSave(SANDBOX_KEY);
    if (save && save.city) {
      this.loadState(save);
      this.resources = save.resources || { gold: 50000, wood: 50000, stone: 50000, food: 50000 };
    } else {
      this.castle.bonuses.masonry = 0;
      this.castle.reset();
      this.resources = { gold: 50000, wood: 50000, stone: 50000, food: 50000 };
      this.wave = 1;
      this.wavesSurvived = save?.wavesSurvived || 0;
      this.upgrades = [];
      this.rankIndex = 0;
      this.quests = { active: [], done: [] };
      this.ensureQuests();
    }
    this.sandbox = true;
    this.state = 'sandbox';
    this.completed = false;
    this.tutorialDone = true;
    this.activeDungeon = null;
    this.combat.clear();
    this.applyEquippedSkins();
    this.tool = 'camera';
    this.selectedType = null;
    this.undoStack = [];
    this.cooldowns = { volley: 0, horn: 0, repair: 0 };
    this.tickTimer = TICK;
    this.ui.closeModal(true);
    this.ui.showTitle(false);
    this.ui.showHUD(true);
    this.ui.setBuildMode();
    this.controls.setCinematic(false);
    this.controls.focusHome(true);
    this.saveNow();
    this.updateRank(true);
    this.ui.toast('Free Build — no raiders will come. Raise whatever you dream.', 'good');
    this.ui.hint('Stone, wood and coin are plentiful here. Every street is yours.', 8000);
  }

  loadState(data) {
    this.resources = { ...START_RESOURCES, ...(data.resources || {}) };
    this.wave = data.wave || 1;
    this.wavesSurvived = data.wavesSurvived || 0;
    this.upgrades = Array.isArray(data.upgrades) ? data.upgrades : [];
    this.castle.bonuses.masonry = this.upgrades.includes('mason') ? 0.3 : 0;
    this.rankIndex = data.rankIndex || 0;
    this.quests = data.quests && Array.isArray(data.quests.active) ? data.quests : { active: [], done: [] };
    this.bestWave = Math.max(this.bestWave, data.bestWave || 0, data.wavesSurvived || 0);
    this.completed = !!data.completed;
    this.clearedDungeons = Array.isArray(data.clearedDungeons) ? [...data.clearedDungeons] : [];
    this.regionsClaimed = Array.isArray(data.regionsClaimed) ? [...data.regionsClaimed] : [];
    this.tutorialDone = !!data.tutorialDone;
    this.activeDungeon = null;
    this.combat.clear();
    this.castle.clearAll();
    if (data.city) this.castle.load(data.city);
    else this.castle.reset();
    this.castle.applyMasonry();
    this.ensureQuests();
    this.undoStack = [];
    this.snapshot = null;
    this.castle.select(null);
    this.applyEquippedSkins();
    this.ui?.markCityDirty();
  }

  hasCampaignSave() {
    const d = this.readSave(CAMPAIGN_KEY);
    return !!(d && d.city);
  }

  getSaveInfo(key = CAMPAIGN_KEY) {
    return this.readSave(key);
  }

  readSave(key) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch { return null; }
  }

  saveNow() {
    if (this.state === 'title' || this.state === 'paused' || this.state === 'defeat') return;
    if (this.state === 'combat') return;
    const payload = {
      version: 2,
      resources: { ...this.resources },
      wave: this.wave,
      wavesSurvived: this.wavesSurvived,
      upgrades: [...this.upgrades],
      rankIndex: this.rankIndex,
      quests: { active: [...this.quests.active], done: [...this.quests.done] },
      city: this.castle.serialize(),
      bestWave: this.bestWave,
      completed: this.completed,
      clearedDungeons: [...this.clearedDungeons],
      regionsClaimed: [...this.regionsClaimed],
      tutorialDone: this.tutorialDone,
      updated: Date.now(),
    };
    try {
      localStorage.setItem(this.sandbox ? SANDBOX_KEY : CAMPAIGN_KEY, JSON.stringify(payload));
      localStorage.setItem(BEST_KEY, String(this.bestWave));
      this.saveDirty = false;
    } catch {}
  }

  saveSoon() {
    this.saveDirty = true;
    this.saveTimer = 1.2;
  }

  // ---------------------------------------------------------- economy
  canAfford(cost) {
    if (this.sandbox) return true;
    for (const [k, v] of Object.entries(cost || {})) {
      if ((this.resources[k] || 0) < v) return false;
    }
    return true;
  }

  missingResources(cost) {
    const miss = {};
    for (const [k, v] of Object.entries(cost || {})) {
      const have = this.resources[k] || 0;
      if (have < v) miss[k] = Math.ceil(v - have);
    }
    return miss;
  }

  spend(cost) {
    if (this.sandbox) return;
    for (const [k, v] of Object.entries(cost || {})) {
      this.resources[k] = Math.max(0, (this.resources[k] || 0) - v);
    }
    this.ui?.markResourcesDirty();
  }

  grant(cost, silent = false) {
    for (const [k, v] of Object.entries(cost || {})) {
      this.resources[k] = (this.resources[k] || 0) + v;
    }
    this.ui?.markResourcesDirty();
    if (!silent) this.ui?.pulseAll();
  }

  stats() { return this.castle.stats(); }

  productionMultiplier() {
    const st = this.stats();
    let factor = 0.8 + st.happiness / 250;
    if (this.hasUpgrade('bounty')) factor *= 1.4;
    factor *= 1 + this.rankIndex * 0.02;
    if (this.isSubscribed()) factor *= 1.2;
    return factor;
  }

  tickEconomy() {
    const st = this.castle.stats();
    const mult = this.productionMultiplier();
    const gained = {};
    for (const [k, v] of Object.entries(st.production)) {
      if (v <= 0) continue;
      let amount = v * mult;
      if (k === 'gold' && this.hasUpgrade('tax')) amount *= 1.5;
      this.resources[k] = (this.resources[k] || 0) + amount;
      gained[k] = Math.round(amount * 10) / 10;
    }
    if (Object.keys(gained).length) {
      this.ui?.markResourcesDirty();
      this.ui?.pulseResources(Object.keys(gained));
    }
    this.tickTimer = TICK;
  }

  getCost(type) {
    let cost = { ...costFor(type, 1) };
    if (this.hasUpgrade('stone') && (type === 'wall' || type === 'gate')) {
      cost.stone = Math.max(1, Math.round((cost.stone || 0) * 0.75));
    }
    return cost;
  }

  getUpgradeCost(st) {
    let cost = upgradeCostFor(st);
    if (!cost) return null;
    if (this.hasUpgrade('stone') && (st.type === 'wall' || st.type === 'gate')) {
      cost.stone = Math.max(1, Math.round((cost.stone || 0) * 0.75));
    }
    return cost;
  }

  canStaff(type, level = 1, oldLevel = 0) {
    if (this.sandbox) return true;
    const stats = this.stats();
    const delta = workerCostFor(type, level) - workerCostFor(type, oldLevel);
    if (delta <= 0) return true;
    return stats.used + delta <= stats.capacity;
  }

  staffMissing(type, level = 1, oldLevel = 0) {
    const stats = this.stats();
    const delta = workerCostFor(type, level) - workerCostFor(type, oldLevel);
    return Math.max(0, stats.used + delta - stats.capacity);
  }

  hasUpgrade(id) { return this.upgrades.includes(id); }

  combatBonuses() {
    const oath = this.isSubscribed() ? 1.1 : 1;
    return {
      towerDamageMult: (this.hasUpgrade('fletch') ? 1.25 : 1) * (1 + this.rankIndex * 0.04) * oath,
      fireRateMult: this.hasUpgrade('rapid') ? 1.2 : 1,
      siegeDamageMult: (this.hasUpgrade('siege') ? 1.35 : 1) * oath,
      heroHpMult: (this.hasUpgrade('medic') ? 1.4 : 1) * (this.hasUpgrade('hero') ? 1.3 : 1),
      heroDmgMult: (this.hasUpgrade('hero') ? 1.5 : 1),
    };
  }

  repairGold(amount) {
    const mult = this.isSubscribed() ? 0.75 : 1;
    return Math.max(1, Math.round(amount * mult));
  }

  // ---------------------------------------------------------- tools & build
  selectBuild(type) {
    if (this.state === 'combat' || this.state === 'reward' || this.state === 'victory' || this.state === 'defeat') return;
    if (type === 'keep') return;
    this.tool = 'build';
    this.selectedType = type;
    this.aimingVolley = false;
    this.castle.select(null);
    this.selectedStructure = null;
    this.ui.closeModal(true);
    this.ui.setTool('build', type);
    this.ui.updateSelected();
    this.audio.select();
    this.ui.tutorialEvent?.('select', type);
    const def = STRUCTURES[type];
    if (def.road) this.ui.hint('Drag across the grass to pave a road.', 4500);
    else if (type === 'wall') this.ui.hint('Drag across the grass to raise a wall line.', 4500);
  }

  selectCamera() {
    this.tool = 'camera';
    this.selectedType = null;
    this.castle.hideGhost();
    this.castle.select(null);
    this.selectedStructure = null;
    this.ui.closeModal(true);
    this.ui.setTool('camera');
    this.audio.click();
  }

  selectDemolish() {
    if (this.state === 'combat') return;
    if (this.tool === 'demolish') { this.selectCamera(); return; }
    this.tool = 'demolish';
    this.selectedType = null;
    this.selectedStructure = null;
    this.castle.select(null);
    this.castle.hideGhost();
    this.ui.closeModal(true);
    this.ui.setTool('demolish');
    this.ui.hint('Tap or drag across buildings to raze them. Half the cost is refunded.', 5000);
    this.audio.select();
  }

  get isPaintTool() {
    return this.tool === 'demolish' || (this.tool === 'build' && (this.selectedType === 'wall' || this.selectedType === 'road' || this.selectedType === 'gate'));
  }

  updateGhostAt(point) {
    if ((this.state !== 'build' && this.state !== 'sandbox')) { this.castle.hideGhost(); return; }
    if (this.tool !== 'build' || !this.selectedType) { this.castle.hideGhost(); return; }
    const { i, j } = worldToCell(point.x, point.z);
    const def = STRUCTURES[this.selectedType];
    const valid = this.castle.canPlace(this.selectedType, i, j).ok && this.canAfford(this.getCost(this.selectedType));
    this.castle.updateGhost(this.selectedType, i, j, valid);
    this.lastGhost = { i, j };
  }

  onTap(point) {
    this.audio.init();
    if (this.state === 'title' || this.state === 'paused' || this.state === 'reward' || this.state === 'victory' || this.state === 'defeat') return;
    if (this.state === 'combat') {
      if (this.aimingVolley) {
        this.castVolley(point);
        return;
      }
      if (this.combat.commandHero(point)) {
        this.ui.tutorialEvent?.('hero');
        if (!this.heroHintShown) {
          this.heroHintShown = true;
          this.ui.toast('Captain Aldric answers your command.', 'good');
        }
      } else {
        this.ui.toast('The captain is recovering from his wounds.', 'bad');
      }
      return;
    }
    const { i, j } = worldToCell(point.x, point.z);
    if (this.tool === 'build') {
      this.tryPlace(this.selectedType, i, j);
    } else if (this.tool === 'demolish') {
      this.demolishAt(i, j);
    } else {
      const st = this.castle.getStructureAt(i, j);
      if (st) this.inspect(st);
      else if (this.selectedStructure) this.clearSelection();
    }
  }

  onPointerGround(point) {
    if (this.state === 'build' || this.state === 'sandbox') {
      if (this.tool === 'build') this.updateGhostAt(point);
      else this.castle.hideGhost();
    }
  }

  startPaint(point) {
    if (!this.isPaintTool) return false;
    this.audio.init();
    this.lastPaintCell = null;
    if (this.tool === 'demolish') this.paintDemolish(point);
    else this.paintBuild(point);
    return true;
  }

  dragPaint(point) {
    if (!this.isPaintTool) return;
    if (this.tool === 'demolish') this.paintDemolish(point);
    else this.paintBuild(point);
  }

  endPaint() {
    this.lastPaintCell = null;
    this.ui?.markResourcesDirty();
  }

  paintBuild(point) {
    const { i, j } = worldToCell(point.x, point.z);
    const key = `${i}:${j}`;
    if (this.lastPaintCell === key) return;
    this.lastPaintCell = key;
    this.updateGhostAt(point);
    const cost = this.getCost(this.selectedType);
    if (!this.castle.canPlace(this.selectedType, i, j).ok) return;
    if (!this.canAfford(cost)) { this.ui.toast('Not enough resources.', 'bad'); return; }
    if (this.selectedType !== 'road' && !this.canStaff(this.selectedType, 1)) {
      this.ui.toast(`Need ${this.staffMissing(this.selectedType, 1)} more population — raise a house.`, 'bad');
      return;
    }
    const st = this.castle.place(this.selectedType, i, j, { force: true });
    if (!st) return;
    this.spend(cost);
    this.undoStack.push({ type: this.selectedType, i, j, cost });
    if (this.undoStack.length > 40) this.undoStack.shift();
    this.audio.place();
    this.saveSoon();
    this.ui.markCityDirty();
    this.ui.tutorialEvent?.('place', this.selectedType);
  }

  paintDemolish(point) {
    const { i, j } = worldToCell(point.x, point.z);
    const key = `${i}:${j}`;
    if (this.lastPaintCell === key) return;
    this.lastPaintCell = key;
    this.demolishAt(i, j, true);
  }

  tryPlace(type, i, j) {
    if (!type) return;
    if (this.state !== 'build' && this.state !== 'sandbox') return;
    if (this.castle.structures.length >= 140) { this.ui.toast('Your castle is at capacity.', 'bad'); return; }
    const valid = this.castle.canPlace(type, i, j);
    if (!valid.ok) { this.audio.error(); this.ui.toast(valid.reason, 'bad'); return; }
    const cost = this.getCost(type);
    if (!this.canAfford(cost)) {
      this.audio.error();
      const missing = this.missingResources(cost);
      const txt = Object.entries(missing).map(([k, v]) => `${Math.ceil(v)} ${RESOURCES[k].name.toLowerCase()}`).join(', ');
      this.ui.toast(`You need ${txt}.`, 'bad');
      return;
    }
    if (type !== 'road' && !this.canStaff(type, 1)) {
      this.audio.error();
      this.ui.toast(`Not enough workers. Build a house for ${this.staffMissing(type, 1)} more people.`, 'bad');
      return;
    }
    const st = this.castle.place(type, i, j, { force: true });
    if (!st) return;
    this.spend(cost);
    this.undoStack.push({ type, i, j, cost });
    if (this.undoStack.length > 40) this.undoStack.shift();
    this.audio.place();
    this.saveSoon();
    this.ui.markCityDirty();
    this.checkQuests();
    this.ui.tutorialEvent?.('place', type);
    if (!this.defsHintShown && type === 'house') {
      this.defsHintShown = true;
    }
  }

  demolishAt(i, j, quiet = false) {
    const st = this.castle.getStructureAt(i, j);
    if (st) {
      if (st.type === 'keep') { this.ui.toast('The keep cannot be razed.', 'bad'); return; }
      const refund = this.refundFor(st);
      this.castle.removeStructure(st);
      this.grant(refund, true);
      if (this.selectedStructure === st) this.clearSelection();
      this.saveSoon();
      this.ui.markCityDirty();
      if (!quiet) {
        this.ui.toast(`Razed ${STRUCTURES[st.type].name}. Recovered ${this.costText(refund)}.`, 'good');
        this.audio.raze();
      }
      return;
    }
    const key = cellKey(i, j);
    if (this.castle.roads.has(key)) {
      this.castle.removeRoad(i, j, { quiet: quiet });
      if (!this.sandbox) this.resources.stone += 1;
      this.saveSoon();
      this.ui.markCityDirty();
    }
  }

  refundFor(st) {
    const def = STRUCTURES[st.type];
    const refund = {};
    const add = (cost, factor) => {
      for (const [k, v] of Object.entries(cost || {})) refund[k] = (refund[k] || 0) + Math.floor(v * factor);
    };
    add(costFor(st.type, 1), 0.5);
    for (let l = 1; l < st.level; l++) add(costFor(st.type, l + 1), 0.35);
    return refund;
  }

  costText(cost) {
    return Object.entries(cost).filter(([, v]) => v > 0).map(([k, v]) => `${Math.floor(v)} ${RESOURCES[k].name.toLowerCase()}`).join(' · ');
  }

  undo() {
    if (this.state === 'combat') return;
    const last = this.undoStack.pop();
    if (!last) { this.ui.toast('Nothing to undo.', 'bad'); return; }
    if (last.type === 'road') {
      this.castle.removeRoad(last.i, last.j, { quiet: true });
    } else {
      const st = this.castle.getStructureAt(last.i, last.j);
      if (!st) { this.ui.toast('That structure is already gone.', 'bad'); return; }
      this.castle.removeStructure(st, { quiet: true });
    }
    this.grant(last.cost, true);
    if (this.selectedStructure) this.clearSelection();
    this.audio.place();
    this.saveSoon();
    this.ui.markCityDirty();
    this.ui.toast('Last build undone.', 'good');
  }

  inspect(st) {
    this.selectedStructure = st;
    this.castle.select(st);
    this.ui.showBuilding(st);
    this.audio.select();
  }

  clearSelection() {
    this.selectedStructure = null;
    this.castle.select(null);
    this.ui.closeModal(true);
  }

  upgradeSelected() {
    const st = this.selectedStructure;
    if (!st) return;
    const def = STRUCTURES[st.type];
    if (!def.maxLevel || st.level >= def.maxLevel) return;
    const cost = this.getUpgradeCost(st);
    if (!this.canAfford(cost)) {
      this.audio.error();
      this.ui.toast('Not enough resources for that upgrade.', 'bad');
      return;
    }
    if (!this.canStaff(st.type, st.level + 1, st.level)) {
      this.audio.error();
      this.ui.toast(`Upgrading needs ${this.staffMissing(st.type, st.level + 1, st.level)} more population.`, 'bad');
      return;
    }
    this.spend(cost);
    this.castle.upgrade(st);
    this.audio.upgrade();
    this.shake(0.18);
    this.ui.toast(`${def.name} upgraded to level ${st.level}.`, 'good');
    this.ui.showBuilding(st);
    this.saveSoon();
    this.ui.markCityDirty();
    this.checkQuests();
    this.updateRank();
    this.ui.tutorialEvent?.('upgrade', st.type);
  }

  repairStructure(st) {
    if (!st || st.hp >= st.maxHp) return;
    const missing = st.maxHp - st.hp;
    const cost = { gold: this.repairGold(Math.max(8, Math.round(missing * 0.055 + 8))) };
    if (!this.canAfford(cost)) { this.audio.error(); this.ui.toast('Not enough gold for repairs.', 'bad'); return; }
    this.spend(cost);
    st.hp = st.maxHp;
    this.castle.updateBar(st);
    if (st.type === 'wall') this.castle.updateWallColor(st);
    this.audio.upgrade();
    this.ui.toast(`${STRUCTURES[st.type].name} repaired for ${cost.gold} gold.`, 'good');
    this.ui.showBuilding(st);
    this.saveSoon();
  }

  repairAll() {
    if (this.state === 'combat') return;
    const damaged = this.castle.structures.some(s => s.hp < s.maxHp);
    if (!damaged) { this.ui.toast('Everything is already standing firm.', 'good'); return; }
    const gold = this.repairGold(60);
    const cost = { gold, wood: 40, stone: 40 };
    if (!this.canAfford(cost)) { this.audio.error(); this.ui.toast(`You need ${gold} gold, 40 wood and 40 stone to repair the city.`, 'bad'); return; }
    this.spend(cost);
    const healed = this.castle.repairAll(0.3);
    this.audio.upgrade();
    this.ui.toast(`Repairs complete — ${Math.round(healed)} hit points restored.`, 'good');
    this.saveSoon();
    this.ui.markCityDirty();
    if (this.selectedStructure) this.ui.showBuilding(this.selectedStructure);
  }

  // ---------------------------------------------------------- waves
  beginWave() {
    if (this.state !== 'build') return;
    if (this.wave > TOTAL_WAVES) { this.showVictory(); return; }
    if (this.wave > 1 && this.castle.structures.length < 4) {
      this.ui.toast('Raise some defenses before sounding the horn.', 'bad');
    }
    this.ui.tutorialEvent?.('wave', this.wave);
    this.activeDungeon = null;
    this.clearSelection();
    this.ui.closeModal(true);
    this.tool = 'camera';
    this.selectedType = null;
    this.ui.setTool('camera');
    this.castle.hideGhost();
    this.snapshot = {
      city: this.castle.serialize(),
      resources: { ...this.resources },
      wave: this.wave,
      wavesSurvived: this.wavesSurvived,
      upgrades: [...this.upgrades],
      rankIndex: this.rankIndex,
      quests: { active: [...this.quests.active], done: [...this.quests.done] },
      completed: this.completed,
    };
    this.saveNow();
    this.state = 'combat';
    this.cooldowns = { volley: 0, horn: 0, repair: 0 };
    this.aimingVolley = false;
    this.combat.startWave(this.wave, this.combatBonuses());
    this.ui.enterCombat();
    this.audio.wave();
    setTimeout(() => this.audio.horn(), 250);
    const wave = WAVES[this.wave - 1];
    this.ui.callout(`WAVE ${this.wave}`, wave?.name || 'The enemy approaches', wave?.sub || '', 'combat');
    this.heroHintShown = false;
    setTimeout(() => {
      if (this.state === 'combat') this.ui.hint('Tap the ground to command Captain Aldric. Towers fire on their own.', 7000);
    }, 2400);
  }

  onWaveComplete(n) {
    if (this.state !== 'combat') return;
    this.combat.active = false;
    this.state = 'reward';
    this.wavesSurvived = Math.max(this.wavesSurvived, n);
    this.bestWave = Math.max(this.bestWave, n);
    try { localStorage.setItem(BEST_KEY, String(this.bestWave)); } catch {}
    this.wave = n + 1;
    const loot = { gold: 80 + n * 25, wood: 50 + n * 18, stone: 60 + n * 22, food: 35 + n * 12 };
    this.grant(loot, true);
    this.ui.tutorialEvent?.('waveComplete', n);
    const chronicle = CHRONICLES[n - 1] || '';
    const claim = this.claimRegionIfDue(n);
    this.updateRank(true);
    this.checkQuests(true);
    this.audio.victory();
    this.shake(0.2);
    if (n >= TOTAL_WAVES) {
      this.completed = true;
      this.wave = TOTAL_WAVES;
      this.saveNowForced();
      this.showVictory();
      return;
    }
    this.ui.showReward(n, loot, this.rewardChoices(), { claim, chronicle });
    this.saveDirty = true;
  }

  claimRegionIfDue(wave) {
    const region = regionForWave(wave);
    if (!region || this.regionsClaimed.includes(region.id)) return null;
    if (!isRegionConquered(region, this.wavesSurvived)) return null;
    this.regionsClaimed.push(region.id);
    this.addCrowns(60);
    this.audio.victory();
    this.ui?.toast(`${region.name} is yours. +60 Crowns.`, 'good');
    this.saveSoon();
    return { ...region, reward: 60 };
  }

  saveNowForced() {
    const state = this.state;
    this.state = 'build';
    this.saveNow();
    this.state = state;
  }

  rewardChoices() {
    const pool = UPGRADES.filter(u => !this.hasUpgrade(u.id));
    for (let i = pool.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const out = pool.slice(0, 3);
    while (out.length < 3) out.push({ id: 'spoils', name: 'Spoils of War', icon: 'i-coin', desc: 'Gain 250 gold, 160 wood and 160 stone immediately.' });
    return out;
  }

  pickUpgrade(id) {
    if (this.state !== 'reward') return;
    if (id === 'spoils') {
      this.grant({ gold: 250, wood: 160, stone: 160 });
    } else {
      if (!this.upgrades.includes(id)) this.upgrades.push(id);
      if (id === 'chest') this.grant({ gold: 300, wood: 250, stone: 250 });
      if (id === 'mason') {
        this.castle.bonuses.masonry = 0.3;
        this.castle.applyMasonry();
      }
      if (id === 'medic') this.castle.repairAll(0.25);
    }
    this.audio.upgrade();
    this.ui.closeModal(true);
    this.combat.clear();
    this.state = 'build';
    this.ui.setBuildMode();
    this.saveNow();
    this.ui.markCityDirty();
    this.checkQuests(true);
    this.updateRank(true);
    this.ui.toast('Boon chosen. The next wave will be harder.', 'good');
  }

  onDefeat() {
    if (this.state !== 'combat') return;
    this.state = 'defeat';
    this.combat.active = false;
    this.combat.hero.group.visible = false;
    this.combat.hero.ring.visible = false;
    this.audio.defeat();
    this.shake(0.8);
    this.ui.showDefeat(!!this.activeDungeon, this.activeDungeon);
  }

  onKeepDestroyed() {
    this.onDefeat();
  }

  retryWave() {
    if (this.activeDungeon || this.snapshot?.dungeonId) { this.retryDungeon(); return; }
    if (!this.snapshot) { this.startNewCampaign(true); return; }
    this.restoreSnapshot();
    this.audio.click();
    this.ui.closeModal(true);
    this.ui.toast('The keep is rebuilt. Try a different defense.', 'good');
  }

  restoreSnapshot() {
    if (!this.snapshot) return;
    const s = this.snapshot;
    this.resources = { ...s.resources };
    this.wave = s.wave;
    this.wavesSurvived = s.wavesSurvived;
    this.upgrades = [...s.upgrades];
    this.castle.bonuses.masonry = this.upgrades.includes('mason') ? 0.3 : 0;
    this.rankIndex = s.rankIndex;
    this.quests = { active: [...s.quests.active], done: [...s.quests.done] };
    this.castle.clearAll();
    this.castle.load(s.city);
    this.castle.applyMasonry();
    this.combat.clear();
    this.state = 'build';
    this.activeDungeon = null;
    this.completed = s.completed;
    this.undoStack = [];
    this.tool = 'camera';
    this.selectedType = null;
    this.selectedStructure = null;
    this.castle.select(null);
    this.applyEquippedSkins();
    this.ui.showHUD(true);
    this.ui.setBuildMode();
    this.ui.markCityDirty();
    this.controls.setCinematic(false);
    this.controls.focusHome(true);
    this.saveNow();
    this.updateRank(true);
  }

  showVictory() {
    this.state = 'victory';
    this.completed = true;
    this.combat.active = false;
    this.saveNowForced();
    this.ui.showVictory();
    this.audio.victory();
  }

  keepBuilding() {
    this.completed = true;
    this.sandbox = true;
    this.state = 'sandbox';
    this.combat.clear();
    this.tool = 'camera';
    this.ui.closeModal(true);
    this.ui.setBuildMode();
    this.ui.showHUD(true);
    this.saveNow();
    this.ui.toast('Your castle endures. Free Build is now yours.', 'good');
    this.controls.setCinematic(false);
  }

  // ---------------------------------------------------------- war map / dungeons
  dungeonAvailable(d) {
    return !!d && this.wavesSurvived >= d.unlockWave;
  }

  openWarMap() {
    if (this.state === 'combat' || this.state === 'reward' || this.state === 'victory' || this.state === 'defeat') {
      this.ui.toast('The war table is closed while the walls are under attack.', 'bad');
      return;
    }
    if (this.state === 'paused') this.resume();
    this.ui.tutorialEvent?.('map');
    this.ui.showWarMap();
  }

  openShop() {
    if (this.state === 'combat' || this.state === 'reward' || this.state === 'victory' || this.state === 'defeat') {
      this.ui.toast('The Crown vault is sealed during a siege.', 'bad');
      return;
    }
    if (this.state === 'paused') this.resume();
    this.ui.showShop();
  }

  startDungeon(id) {
    const d = typeof id === 'string' ? dungeonById(id) : id;
    if (!d) return;
    if (this.state !== 'build' && this.state !== 'sandbox') {
      this.ui.toast('Finish what you are doing first.', 'bad');
      return;
    }
    if (!this.dungeonAvailable(d)) {
      const need = Math.max(0, d.unlockWave - this.wavesSurvived);
      this.ui.toast(`This dungeon unlocks after ${need} more wave${need === 1 ? '' : 's'}.`, 'bad');
      return;
    }
    this.clearSelection();
    this.ui.closeModal(true);
    this.tool = 'camera';
    this.selectedType = null;
    this.ui.setTool('camera');
    this.castle.hideGhost();
    this.snapshot = {
      city: this.castle.serialize(),
      resources: { ...this.resources },
      wave: this.wave,
      wavesSurvived: this.wavesSurvived,
      upgrades: [...this.upgrades],
      rankIndex: this.rankIndex,
      quests: { active: [...this.quests.active], done: [...this.quests.done] },
      completed: this.completed,
      dungeonId: d.id,
    };
    this.saveNow();
    this.state = 'combat';
    this.activeDungeon = d;
    this.cooldowns = { volley: 0, horn: 0, repair: 0 };
    this.aimingVolley = false;
    this.combat.startDungeon(d, this.combatBonuses());
    this.ui.enterCombat();
    this.ui.enterDungeon(d);
    this.audio.wave();
    setTimeout(() => this.audio.horn(), 220);
    this.ui.callout(d.power.toUpperCase(), d.name, d.bossLine, 'boss');
    this.heroHintShown = false;
    setTimeout(() => {
      if (this.state === 'combat') this.ui.hint(`Slay ${this.combat.boss?.def?.name || 'the boss'} to clear the dungeon.`, 7000);
    }, 2600);
  }

  onDungeonComplete(d) {
    if (this.state !== 'combat' || !this.activeDungeon || this.activeDungeon.id !== d.id) return;
    this.combat.active = false;
    this.state = 'reward';
    const first = !this.clearedDungeons.includes(d.id);
    const loot = { ...d.loot };
    if (!first) {
      for (const k of ['gold', 'wood', 'stone']) loot[k] = Math.round(loot[k] * 0.45);
    }
    const crowns = loot.crowns || 0;
    delete loot.crowns;
    this.grant(loot, true);
    if (crowns) this.addCrowns(crowns);
    let skin = null;
    if (first) {
      this.clearedDungeons.push(d.id);
      skin = skinById(d.skin);
      if (skin && !this.premium.ownedSkins.includes(skin.id)) {
        this.premium.ownedSkins.push(skin.id);
        this.savePremium();
      }
    }
    this.castle.repairAll(0.35);
    this.updateRank(true);
    this.checkQuests(true);
    this.audio.victory();
    this.shake(0.3);
    this.saveNowForced();
    this.ui.showDungeonComplete(d, { first, loot: { ...loot, crowns }, skin });
  }

  finishDungeon() {
    this.combat.clear();
    this.activeDungeon = null;
    this.state = 'build';
    this.ui.closeModal(true);
    this.ui.setBuildMode();
    this.ui.showHUD(true);
    this.controls.setCinematic(false);
    this.tool = 'camera';
    this.ui.setTool('camera');
    this.saveNow();
    this.updateRank(true);
    this.ui.toast('The dungeon is quiet. Its loot is yours.', 'good');
  }

  retryDungeon() {
    const id = this.activeDungeon?.id || this.snapshot?.dungeonId;
    if (!id) return;
    this.restoreSnapshot();
    this.ui.closeModal(true);
    this.startDungeon(id);
  }

  // ---------------------------------------------------------- hero / abilities
  useAbility(id) {
    if (this.state !== 'combat') return;
    if (this.cooldowns[id] > 0) {
      this.ui.toast(`${id === 'volley' ? 'Arrow Volley' : id === 'horn' ? 'War Horn' : 'Repair'} is not ready yet.`, 'bad');
      return;
    }
    this.ui.tutorialEvent?.('ability', id);
    if (id === 'volley') {
      this.aimingVolley = !this.aimingVolley;
      this.ui.setAimingVolley(this.aimingVolley);
      if (this.aimingVolley) this.ui.hint('Tap the battlefield to loose the volley.', 4000);
      return;
    }
    if (id === 'horn') {
      this.combat.activateHorn();
      this.cooldowns.horn = this.cooldownMax.horn;
      this.ui.callout('WAR HORN', 'Arrows fly faster', 'Towers deal more damage for 12 seconds', 'buff');
      this.ui.toast('War horns sound across the walls!', 'good');
      this.shake(0.25);
      return;
    }
    if (id === 'repair') {
      this.combat.healAll(0.22);
      this.cooldowns.repair = this.cooldownMax.repair;
      this.ui.toast('Masons rush the walls. All structures repaired 22%.', 'good');
      this.audio.upgrade();
    }
  }

  castVolley(point) {
    if (!this.aimingVolley) return;
    this.aimingVolley = false;
    this.ui.setAimingVolley(false);
    this.combat.castVolley(point);
    this.cooldowns.volley = this.cooldownMax.volley;
    this.audio.horn();
    this.ui.callout('ARROW VOLLEY', 'The sky darkens', 'A rain of arrows falls on the enemy', 'combat');
    this.shake(0.15);
  }

  focusHero() {
    if (!this.combat.hero.group.visible) { this.ui.toast('Captain Aldric is recovering.', 'bad'); return; }
    this.controls.focusOn(new THREE.Vector3(this.combat.hero.x, 0, this.combat.hero.z), 40);
    this.audio.click();
  }

  onEnemyKilled(e) {
    const bounty = e.boss ? (this.activeDungeon ? 260 : 150) : e.type === 'ram' ? 14 : e.type === 'shield' ? 4 : e.type === 'berserk' ? 3 : 2;
    this.resources.gold = (this.resources.gold || 0) + bounty;
    this.ui?.markResourcesDirty();
    if (e.boss) {
      this.shake(0.6);
      this.ui.toast(`${e.def?.name || 'The champion'} has fallen!`, 'good');
      this.ui.hideBoss();
    }
  }

  onBossSpawn(e) {
    this.ui.showBoss(e.def?.name || 'Champion');
    this.audio.horn();
    const name = e.def?.name || 'Champion';
    if (this.activeDungeon) {
      this.ui.callout(name.toUpperCase(), 'Dungeon boss', this.activeDungeon.bossLine, 'boss');
    } else {
      this.ui.callout(name.toUpperCase(), 'The horde parts', 'A champion of the north enters the field', 'boss');
    }
    this.shake(0.5);
  }

  onBossKilled() {
    this.ui.hideBoss();
    this.audio.victory();
  }

  shake(amount) {
    this.controls?.shake(amount);
  }

  // ---------------------------------------------------------- quests / ranks
  ensureQuests() {
    if (!this.quests) this.quests = { active: [], done: [] };
    if (!Array.isArray(this.quests.active)) this.quests.active = [];
    if (!Array.isArray(this.quests.done)) this.quests.done = [];
    for (const q of [...this.quests.active]) {
      if (!QUESTS.find(x => x.id === q)) this.quests.active = this.quests.active.filter(x => x !== q);
    }
    const slots = 3 + (this.isSubscribed() ? 1 : 0);
    for (const q of QUESTS) {
      if (this.quests.active.length >= slots) break;
      if (this.quests.done.includes(q.id) || this.quests.active.includes(q.id)) continue;
      this.quests.active.push(q.id);
    }
  }

  questProgress(q) {
    const goal = q.goal;
    if (goal.kind === 'count') {
      if (goal.type === 'road') return { cur: Math.min(this.castle.roads.size, goal.n), n: goal.n };
      const cur = this.castle.structures.filter(s => s.type === goal.type).length;
      return { cur: Math.min(cur, goal.n), n: goal.n };
    }
    if (goal.kind === 'roads') return { cur: Math.min(this.castle.roads.size, goal.n), n: goal.n };
    if (goal.kind === 'population') { const c = this.castle.stats().capacity; return { cur: Math.min(c, goal.n), n: goal.n }; }
    if (goal.kind === 'upgrades') {
      const c = this.castle.structures.filter(s => s.level >= 2).length;
      return { cur: Math.min(c, goal.n), n: goal.n };
    }
    if (goal.kind === 'happiness') { const h = Math.round(this.castle.stats().happiness); return { cur: Math.min(h, goal.n), n: goal.n }; }
    if (goal.kind === 'splendor') { const s = this.castle.splendor(this.wavesSurvived); return { cur: Math.min(s, goal.n), n: goal.n }; }
    if (goal.kind === 'wave') return { cur: Math.min(this.wavesSurvived, goal.n), n: goal.n };
    return { cur: 0, n: goal.n };
  }

  checkQuests(force = false) {
    if (!force && this.state === 'combat') return;
    this.ensureQuests();
    let changed = false;
    for (const id of [...this.quests.active]) {
      const q = QUESTS.find(x => x.id === id);
      if (!q) { continue; }
      const p = this.questProgress(q);
      if (p.cur >= p.n) {
        this.quests.active = this.quests.active.filter(x => x !== id);
        this.quests.done.push(id);
        this.grant(q.reward, true);
        this.ui?.toast(`Goal complete: ${q.title}. Reward: ${this.costText(q.reward)}.`, 'good');
        changed = true;
      }
    }
    if (changed) {
      this.ensureQuests();
      this.ui?.markQuestsDirty();
      this.saveSoon();
    }
    this.ui?.markQuestsDirty();
  }

  updateRank(force = false) {
    if (this.state === 'title' || this.state === 'paused') return;
    this.rankTimer -= 1;
    if (!force && this.rankTimer > 0) return;
    this.rankTimer = 1.0;
    const score = this.castle.splendor(this.wavesSurvived);
    const rank = rankForSplendor(score);
    if (rank.index > this.rankIndex) {
      let total = { gold: 0, wood: 0, stone: 0, food: 0 };
      for (let i = this.rankIndex + 1; i <= rank.index; i++) {
        const r = RANKS[i];
        if (r.reward) for (const [k, v] of Object.entries(r.reward)) total[k] = (total[k] || 0) + v;
      }
      this.rankIndex = rank.index;
      this.grant(total, true);
      this.audio.victory();
      this.shake(0.25);
      this.ui.callout(rank.name.toUpperCase(), 'Your settlement grows', `A new chapter for your castle · ${this.costText(total)}`, 'rank');
      this.ui.toast(`Your city is now a ${rank.name}. Rank bonus: +${rank.index * 4}% tower damage.`, 'good');
      this.saveSoon();
      this.ui.markQuestsDirty();
    }
    this.ui?.updateRank(score, rank);
  }

  finishTutorial() {
    this.tutorialDone = true;
    this.saveSoon();
    this.ui?.toast('The Crown System will keep its counsel. Press M for the war map and the Crown for the vault.', 'good');
  }

  // ---------------------------------------------------------- pause / abandon
  pause() {
    if (this.state === 'title' || this.state === 'paused' || this.state === 'reward' || this.state === 'victory' || this.state === 'defeat') return;
    this.previousState = this.state;
    this.state = 'paused';
    if (this.previousState === 'build' || this.previousState === 'sandbox') this.saveNow();
    this.ui.showPause();
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = this.previousState || 'build';
    this.ui.closeModal(true);
    this.controls.setCinematic(false);
  }

  returnToTitle() {
    if (this.state === 'combat') {
      if (this.snapshot) this.restoreSnapshot();
    }
    if (this.state === 'build' || this.state === 'sandbox') this.saveNow();
    this.combat.clear();
    this.selectedStructure = null;
    this.castle.select(null);
    this.state = 'title';
    this.ui.closeModal(true);
    this.ui.showHUD(false);
    this.ui.showTitle(true);
    this.ui.updateTitle();
    this.controls.setCinematic(true);
  }

  toggleSound() {
    this.audio.init();
    const on = this.audio.toggle();
    this.ui.updateSound(on);
    this.ui.toast(on ? 'Sound on.' : 'Sound muted.', 'good');
  }

  // ---------------------------------------------------------- main update
  update(dt) {
    this.time += dt;
    if (this.state === 'title' || this.state === 'paused') {
      if (this.saveDirty) {
        this.saveTimer -= dt;
        if (this.saveTimer <= 0) this.saveNow();
      }
      return;
    }

    for (const k of Object.keys(this.cooldowns)) this.cooldowns[k] = Math.max(0, this.cooldowns[k] - dt);

    if (this.state !== 'reward' && this.state !== 'victory' && this.state !== 'defeat') {
      this.tickTimer -= dt;
      if (this.tickTimer <= 0) this.tickEconomy();
    }

    if (this.state === 'combat') {
      this.combat.update(dt, this.combatBonuses());
      this.ui.updateCombat();
    }

    if (this.state === 'build' || this.state === 'sandbox' || this.state === 'reward') {
      this.questTimer -= dt;
      if (this.questTimer <= 0) {
        this.questTimer = 0.7;
        this.checkQuests(this.state === 'reward');
      }
      this.rankTimer -= dt;
      if (this.rankTimer <= 0) this.updateRank();
    }

    if (this.saveDirty) {
      this.saveTimer -= dt;
      if (this.saveTimer <= 0 && (this.state === 'build' || this.state === 'sandbox')) this.saveNow();
    }

    this.ui.tick(dt);
  }

  onCityChanged() {
    if (this.state === 'title') return;
    this.ui?.markCityDirty();
    this.saveSoon();
  }

  onStructureDestroyed(st) {
    if (this.selectedStructure === st) this.clearSelection();
    this.ui?.markCityDirty();
  }
}
