export const GRID = 22;
export const CELL = 2.7;
export const HALF = (GRID * CELL) / 2;
export const KEEP_I = 9;
export const KEEP_J = 9;
export const KEEP_W = 4;
export const KEEP_H = 4;
export const TICK = 6;
export const MAX_STRUCTURES = 140;
export const MAX_LEVEL = 3;

export const RESOURCES = {
  gold: { name: 'Gold', icon: 'i-coin', color: '#e7c37a' },
  wood: { name: 'Wood', icon: 'i-wood', color: '#c58e56' },
  stone: { name: 'Stone', icon: 'i-stone', color: '#c3c5c2' },
  food: { name: 'Food', icon: 'i-food', color: '#b7cd79' },
};

export const START_RESOURCES = { gold: 520, wood: 420, stone: 540, food: 320 };

// base production is per 6 second cycle at level 1
export const STRUCTURES = {
  keep: {
    name: 'The Keep', icon: 'i-crown', w: KEEP_W, h: KEEP_H,
    cost: {}, hp: 3800, workers: 0, hidden: true,
    category: 'Heart', maxLevel: 0, population: 10,
    production: { gold: 2, wood: 2, stone: 2, food: 1 },
    desc: 'The heart of your city. If it falls, everything falls.',
  },
  wall: {
    name: 'Stone Wall', icon: 'i-wall', w: 1, h: 1,
    cost: { stone: 8 }, hp: 340, workers: 0,
    category: 'Fortify', maxLevel: 0,
    desc: 'Drag to raise a line of stone walls. Raiders must break through.',
  },
  gate: {
    name: 'Gatehouse', icon: 'i-gate', w: 1, h: 1,
    cost: { stone: 45, wood: 15, gold: 20 }, hp: 820, workers: 0,
    category: 'Fortify', maxLevel: 3,
    desc: 'A reinforced gate. Raiders are drawn to it — make it strong.',
  },
  tower: {
    name: 'Archer Tower', icon: 'i-tower', w: 2, h: 2,
    cost: { stone: 55, wood: 20, gold: 30 }, hp: 720, workers: 0,
    category: 'Fortify', maxLevel: 3,
    desc: 'Archers loose arrows at nearby raiders. Range 17.',
    tower: { kind: 'arrow', range: 17, damage: 16, cooldown: 1.05 },
  },
  house: {
    name: 'House', icon: 'i-house', w: 2, h: 2,
    cost: { wood: 45, stone: 25, gold: 15 }, hp: 340, workers: 0,
    category: 'City', maxLevel: 3, population: 8,
    production: { gold: 2 },
    desc: 'Homes for your people. Adds population and collects taxes.',
  },
  farm: {
    name: 'Farm & Mill', icon: 'i-farm', w: 3, h: 3,
    cost: { wood: 45, gold: 15 }, hp: 260, workers: 3,
    category: 'City', maxLevel: 3,
    production: { food: 7 },
    desc: 'Fields, orchard and a windmill. Produces food.',
  },
  lumber: {
    name: 'Lumber Camp', icon: 'i-lumber', w: 2, h: 2,
    cost: { wood: 50, stone: 20, gold: 15 }, hp: 280, workers: 2,
    category: 'City', maxLevel: 3,
    production: { wood: 6 },
    desc: 'Sawpit and log yard. Produces wood.',
  },
  quarry: {
    name: 'Quarry', icon: 'i-quarry', w: 2, h: 2,
    cost: { wood: 50, stone: 20, gold: 15 }, hp: 300, workers: 3,
    category: 'City', maxLevel: 3,
    production: { stone: 6 },
    desc: 'A terraced stone pit. Produces stone.',
  },
  market: {
    name: 'Market', icon: 'i-market', w: 2, h: 2,
    cost: { wood: 65, stone: 30, gold: 35 }, hp: 320, workers: 2,
    category: 'City', maxLevel: 3,
    production: { gold: 5 }, happiness: 2,
    desc: "Traders' stalls. Produces gold and a little joy.",
  },
  tavern: {
    name: 'Tavern', icon: 'i-tavern', w: 2, h: 2,
    cost: { wood: 55, stone: 40, gold: 30 }, hp: 320, workers: 2,
    category: 'City', maxLevel: 3,
    production: { gold: 3 }, happiness: 9,
    desc: 'Ale and song. Lifts happiness and earns coin.',
  },
  chapel: {
    name: 'Chapel', icon: 'i-chapel', w: 2, h: 2,
    cost: { stone: 60, wood: 20, gold: 30 }, hp: 360, workers: 1,
    category: 'City', maxLevel: 3,
    production: { gold: 1 }, happiness: 6,
    desc: 'A quiet spire. Lifts the spirit of your people.',
  },
  garden: {
    name: 'Garden', icon: 'i-garden', w: 2, h: 2,
    cost: { wood: 30, stone: 10, gold: 10 }, hp: 160, workers: 0,
    category: 'City', maxLevel: 3, happiness: 7,
    desc: 'Green terraces, hedges and flowers. Adds happiness.',
  },
  barracks: {
    name: 'Barracks', icon: 'i-barracks', w: 3, h: 2,
    cost: { wood: 80, stone: 40, gold: 50 }, hp: 480, workers: 4,
    category: 'War', maxLevel: 3, garrison: 2,
    desc: 'Trains a garrison of swordsmen. More levels, more guards.',
  },
  ballista: {
    name: 'Ballista', icon: 'i-ballista', w: 2, h: 2,
    cost: { wood: 80, stone: 60, gold: 70 }, hp: 460, workers: 2,
    category: 'War', maxLevel: 3,
    desc: 'Slow, piercing bolts. Excellent against rams and warlords.',
    tower: { kind: 'ballista', range: 23, damage: 62, cooldown: 2.5 },
  },
  catapult: {
    name: 'Catapult', icon: 'i-catapult', w: 3, h: 3,
    cost: { wood: 100, stone: 90, gold: 90 }, hp: 520, workers: 3,
    category: 'War', maxLevel: 3,
    desc: 'Lobs firepots that damage groups of raiders. Range 26.',
    tower: { kind: 'catapult', range: 26, damage: 52, cooldown: 3.3 },
  },
  road: {
    name: 'Cobbled Road', icon: 'i-road', w: 1, h: 1,
    cost: { stone: 2 }, hp: 0, workers: 0,
    category: 'City', maxLevel: 0, road: true,
    desc: 'Paint cobbled streets freely. Your city, your winding ways.',
  },
};

export const BUILD_ORDER = [
  'wall', 'gate', 'road', 'tower', 'house', 'farm', 'lumber', 'quarry',
  'market', 'tavern', 'chapel', 'garden', 'barracks', 'ballista', 'catapult',
];

export const CATEGORY_LABELS = {
  Fortify: 'Fortify', City: 'City', War: 'War',
};

export const ENEMIES = {
  raider: {
    name: 'Raider', hp: 90, speed: 2.45, damage: 9, cooldown: 1.0,
    radius: 0.42, scale: 1, color: 0x9d3f31, shield: 0.8,
    cost: 0, structureDamage: 1,
  },
  shield: {
    name: 'Shieldman', hp: 235, speed: 1.62, damage: 15, cooldown: 1.2,
    radius: 0.5, scale: 1.13, color: 0x6e2d29, shield: 1.25,
    structureDamage: 1.15,
  },
  berserk: {
    name: 'Berserker', hp: 150, speed: 2.95, damage: 23, cooldown: 0.82,
    radius: 0.44, scale: 1.02, color: 0xb25a2a, shield: 0.5,
    structureDamage: 1.3,
  },
  ram: {
    name: 'Battering Ram', hp: 720, speed: 1.16, damage: 62, cooldown: 1.5,
    radius: 0.82, scale: 1.5, color: 0x5d4935, shield: 0,
    structureDamage: 2.4, siege: true,
  },
  warlord: {
    name: 'Warlord Gruk', hp: 3200, speed: 1.4, damage: 48, cooldown: 1.0,
    radius: 0.95, scale: 1.95, color: 0x4d2342, shield: 1.6,
    structureDamage: 2.0, boss: true,
  },
  ratking: {
    name: 'The Gnawing King', hp: 1400, speed: 1.9, damage: 28, cooldown: 0.9,
    radius: 0.72, scale: 1.7, color: 0x6b4a2f, shield: 1.35,
    structureDamage: 2.0, boss: true,
  },
  crowqueen: {
    name: 'The Crow Queen', hp: 2300, speed: 1.7, damage: 38, cooldown: 0.85,
    radius: 0.8, scale: 1.85, color: 0x382a4a, shield: 1.5,
    structureDamage: 2.2, boss: true,
  },
  ironcolossus: {
    name: 'The Iron Colossus', hp: 3900, speed: 1.2, damage: 56, cooldown: 1.1,
    radius: 0.98, scale: 2.12, color: 0x4a4f55, shield: 1.8,
    structureDamage: 2.8, boss: true,
  },
  frostmaw: {
    name: 'Frostmaw', hp: 5400, speed: 1.55, damage: 68, cooldown: 0.92,
    radius: 1.02, scale: 2.22, color: 0x8fc7dc, shield: 1.6,
    structureDamage: 2.6, boss: true,
  },
  ashking: {
    name: 'The Ash King', hp: 7600, speed: 1.45, damage: 84, cooldown: 0.86,
    radius: 1.08, scale: 2.38, color: 0x381c24, shield: 1.9,
    structureDamage: 3.1, boss: true,
  },
};

export const WAVES = [
  { name: 'The First Raid', sub: 'A raiding party has been spotted on the coast.', comp: { raider: 6 } },
  { name: 'Axes at the Gate', sub: 'They brought a battering ram this time.', comp: { raider: 9, ram: 1 } },
  { name: 'Shield Wall', sub: 'Hardened shieldmen march behind the raiders.', comp: { raider: 11, shield: 4 } },
  { name: 'Sack and Burn', sub: 'The warband wants your granary.', comp: { raider: 13, shield: 6, ram: 2 } },
  { name: 'Fury of the North', sub: 'Berserkers have joined the horde.', comp: { raider: 15, shield: 7, berserk: 3, ram: 2 } },
  { name: 'The Long Siege', sub: 'Three rams. Hold the walls.', comp: { raider: 17, shield: 9, berserk: 4, ram: 3 } },
  { name: 'Red Sky Morning', sub: 'Scouts say a warlord leads them.', comp: { raider: 19, shield: 11, berserk: 6, ram: 4 } },
  { name: 'Warlord Gruk', sub: 'The warlord has come to take your crown.', comp: { raider: 20, shield: 12, berserk: 7, ram: 5, warlord: 1 }, boss: true },
];
export const TOTAL_WAVES = WAVES.length;

// ------------------------------------------------------------------
// A Second Life — the Crown System chronicle
// ------------------------------------------------------------------
export const PROLOGUE = {
  kicker: 'The Chronicle · Prologue',
  title: 'A Second Life',
  lead: 'You remember dying.',
  body: [
    'A rain-slick street. A blinding light. Then nothing — until you woke in the body of Caelan Ashbourne, last heir of a house that no longer exists.',
    'This is Vareth, a world of warring crowns and iron hordes. Six kingdoms have knelt to Warlord Gruk. Your house was burned, your people scattered. You have no army, no gold, and one grey island no one wanted.',
    'But you have something no one else in this world has: memories of another life, and the Crown System — a voice only you can hear that turns land, labour and loyalty into numbers you can bend. In your old world you built cities. Here, you will build an empire.',
    'You died once. This time, you will not be forgotten.',
  ],
  oath: '“A second life. A broken crown. A world that has no idea what is about to hit it.”',
  cta: 'Awaken',
};

export const REGIONS = [
  {
    id: 'home', name: 'The Home Shore', short: 'Home Shore', from: 1, to: 2,
    x: 16, y: 74, icon: 'i-house', flag: 'blue',
    tag: 'Chapter I',
    lore: 'A grey island, a broken keep, and the last oath of House Ashbourne. In my old life I called this a blank slate. Here, they call it a grave. Either way, it is mine.',
    claim: 'The Home Shore is yours. Exiles gather beneath your banner — and your name crosses the water for the first time.',
  },
  {
    id: 'greenvale', name: 'Greenvale', short: 'Greenvale', from: 3, to: 4,
    x: 34, y: 47, icon: 'i-farm', flag: 'green',
    tag: 'Chapter II',
    lore: 'The old kingdom\'s granary. A granary is worth more than a crown. My old world learned that the hard way; this one is about to.',
    claim: 'Greenvale swears to you. Grain carts roll toward your island, and the first true kingdom answers your call.',
  },
  {
    id: 'ashen', name: 'The Ashen March', short: 'Ashen March', from: 5, to: 6,
    x: 55, y: 66, icon: 'i-tent', flag: 'red',
    tag: 'Chapter III',
    lore: 'Burned orchards and berserker camps. They burned the farms to starve me. They never studied logistics. Give them steel instead.',
    claim: 'The Ashen March has a new lord. Berserker banners are cut down and hung from your walls.',
  },
  {
    id: 'frostfang', name: 'Frostfang Pass', short: 'Frostfang', from: 7, to: 7,
    x: 71, y: 29, icon: 'i-tower', flag: 'blue',
    tag: 'Chapter IV',
    lore: 'The only road to the Iron Citadel. Hold the pass, hold the world. Geography is destiny — I did not need a second life to know that.',
    claim: 'Frostfang falls. The road to Gruk\'s throne lies open, and the north holds its breath.',
  },
  {
    id: 'citadel', name: 'Citadel of Gruk', short: 'Iron Citadel', from: 8, to: 8,
    x: 87, y: 48, icon: 'i-skull', flag: 'red',
    tag: 'Chapter V',
    lore: 'The Iron Horde\'s throne. One throne. One system. One last siege. I died once already — he should have known better.',
    claim: 'Warlord Gruk is dead. The Iron Horde scatters. Six crowns wait for the last Ashbourne to speak.',
  },
];

export function regionForWave(wave) {
  return REGIONS.find(r => wave >= r.from && wave <= r.to) || REGIONS[REGIONS.length - 1];
}

export function isRegionConquered(region, wavesSurvived) {
  return wavesSurvived >= region.to;
}

export const CHRONICLES = [
  'First blood. The Crown System rewards me with numbers. I can work with numbers.',
  'The Home Shore is mine. In my old life I never owned more than an apartment. This is better.',
  'Shield wall broken. I saw the flaw before the battle — they built it to face a charge, not a city.',
  'Greenvale kneels. Grain is a weapon. I will not forget it.',
  'The berserkers break. Fear is a resource too, and I have spent it well.',
  'The north is mine. Only the pass and the warlord remain.',
  'Frostfang falls. I can almost see his throne from here. I died once already. He should have known better.',
  'Gruk is dead. Six crowns kneel. The System says the tutorial is complete. Of course it does.',
];

export const VICTORY = {
  kicker: 'The Chronicle · Finale',
  title: 'A World Reborn',
  body: 'The Iron Horde is broken. Six crowns send envoys to your island — not to demand tribute, but to swear. The last heir has become the first sovereign of a united Vareth. Then the Crown System speaks one last time: “Congratulations, Administrator. The tutorial is complete.” You died once. Now the world is your blueprint.',
  oath: '“They gave us an island no one wanted. We gave them a world.”',
};

// ------------------------------------------------------------------
// Dungeons — elite bosses with loot and exclusive skins
// ------------------------------------------------------------------
export const DUNGEONS = [
  {
    id: 'warrens', name: 'The Gnawing Warrens', region: 'home', x: 26, y: 89,
    tier: 1, power: 'Tier I · Elite', unlockWave: 1, boss: 'ratking',
    comp: { raider: 8 },
    loot: { gold: 260, wood: 160, stone: 160, crowns: 90 },
    skin: 'livery_rat',
    lore: 'A collapsed granary where the rats grew bold enough to wear a crown. The villagers left offerings. The Crown System left a quest marker.',
    bossLine: 'Something enormous is dragging a rusted crown through the dark.',
  },
  {
    id: 'crypt', name: 'Crowspire Crypt', region: 'greenvale', x: 45, y: 62,
    tier: 2, power: 'Tier II · Deadly', unlockWave: 3, boss: 'crowqueen',
    comp: { shield: 6, berserk: 3 },
    loot: { gold: 420, wood: 240, stone: 260, crowns: 140 },
    skin: 'sky_crow',
    lore: 'A bell tower buried upside down. Every crow in Greenvale roosts here, and their queen remembers every farmer who ever threw a stone.',
    bossLine: 'The flock parts. A woman in a cloak of black feathers descends.',
  },
  {
    id: 'forge', name: 'The Black Forge', region: 'ashen', x: 67, y: 79,
    tier: 3, power: 'Tier III · Brutal', unlockWave: 5, boss: 'ironcolossus',
    comp: { raider: 7, shield: 7, berserk: 5 },
    loot: { gold: 680, wood: 360, stone: 420, crowns: 190 },
    skin: 'stone_blackiron',
    lore: 'The Iron Horde\'s first foundry, still hot. Its master was once a smith. Now he is a walking wall of black iron with a hammer the size of a gate.',
    bossLine: 'The forge doors open. Something made of iron and anger steps out.',
  },
  {
    id: 'hollow', name: 'Frostmaw Hollow', region: 'frostfang', x: 80, y: 19,
    tier: 4, power: 'Tier IV · Nightmare', unlockWave: 7, boss: 'frostmaw',
    comp: { shield: 10, berserk: 7, ram: 2 },
    loot: { gold: 940, wood: 460, stone: 560, crowns: 260 },
    skin: 'roof_frost',
    lore: 'A glacier split open like a wound. The thing inside has been eating the pass for a hundred years. It has never been hungry enough to leave — until now.',
    bossLine: 'The ice groans. A white shape unfolds to its full height.',
  },
  {
    id: 'vault', name: 'Vault of the Ash King', region: 'citadel', x: 93, y: 64,
    tier: 5, power: 'Tier V · Apocalyptic', unlockWave: 7, boss: 'ashking',
    comp: { raider: 12, shield: 10, berserk: 8, ram: 4 },
    loot: { gold: 1400, wood: 700, stone: 900, crowns: 380 },
    skin: 'captain_ashen',
    lore: 'Beneath Gruk\'s citadel, behind nine sealed doors, the first king of the Iron Horde waits for a worthy heir. The System marks him simply: optional. It is lying.',
    bossLine: 'Nine doors open at once. The Ash King is already awake.',
  },
];

export function dungeonById(id) { return DUNGEONS.find(d => d.id === id) || null; }

// ------------------------------------------------------------------
// Premium vault — cosmetic skins and the Sovereign's Oath
// ------------------------------------------------------------------
export const SKIN_CATEGORIES = [
  { id: 'livery', name: 'Livery', icon: 'i-crown', blurb: 'Banners and royal accents.' },
  { id: 'roof', name: 'Roofing', icon: 'i-house', blurb: 'The skyline of your city.' },
  { id: 'stone', name: 'Masonry', icon: 'i-wall', blurb: 'Walls, keeps and stonework.' },
  { id: 'sky', name: 'Realm Skies', icon: 'i-star', blurb: 'The light above your world.' },
  { id: 'captain', name: 'Captain', icon: 'i-captain', blurb: 'Armour for Captain Aldric.' },
];

export const SKINS = [
  // Livery
  { id: 'livery_ashbourne', cat: 'livery', name: 'Ashbourne Blue', desc: 'The last banner of your fallen house. Free and proud.', price: 0, free: true, banner: 'blue', ui: '#e7c37a', ui2: '#b8914d' },
  { id: 'livery_frost', cat: 'livery', name: 'Frostguard', desc: 'Pale blue banners and a cold silver interface.', price: 140, banner: 'frost', ui: '#9fd8ef', ui2: '#5f9bb8' },
  { id: 'livery_ember', cat: 'livery', name: 'Ember Company', desc: 'Blackened red cloth, lit by the fires of the Ashen March.', price: 140, banner: 'ember', ui: '#f08a5d', ui2: '#b85a3b' },
  { id: 'livery_verdant', cat: 'livery', name: 'Verdant Oath', desc: 'Green livery for a city that grows faster than it burns.', price: 120, banner: 'verdant', ui: '#a9d18e', ui2: '#6f9a55' },
  { id: 'livery_sun', cat: 'livery', name: 'Sun King', desc: 'The gilded banner of a sovereign. Exclusive to the Sovereign\'s Oath.', price: 0, subscription: true, banner: 'sun', ui: '#ffd86b', ui2: '#c9a24e' },
  { id: 'livery_rat', cat: 'livery', name: 'Rat Crown', desc: 'A grubby banner taken from the Gnawing King. First clear: The Gnawing Warrens.', price: 0, dungeon: 'warrens', banner: 'rat', ui: '#c9b18a', ui2: '#8d7a5a' },

  // Roofs
  { id: 'roof_terracotta', cat: 'roof', name: 'Terracotta', desc: 'Warm clay tiles, the colour of home.', price: 0, free: true, color: 0xa84b38 },
  { id: 'roof_slate', cat: 'roof', name: 'Storm Slate', desc: 'Dark blue-grey stone that sheds rain and arrows alike.', price: 150, color: 0x596774 },
  { id: 'roof_copper', cat: 'roof', name: 'Copper Verdant', desc: 'Aging copper roofs with a green patina.', price: 180, color: 0x4f8b72 },
  { id: 'roof_gilded', cat: 'roof', name: 'Gilded Tiles', desc: 'Roofs that catch the sun and hold it.', price: 260, color: 0xd1ab55 },
  { id: 'roof_frost', cat: 'roof', name: 'Frostmaw Ice', desc: 'Roofs of pale glacial stone. First clear: Frostmaw Hollow.', price: 0, dungeon: 'hollow', color: 0xbcdbe6 },

  // Masonry
  { id: 'stone_limestone', cat: 'stone', name: 'Honey Limestone', desc: 'The honest stone of the Home Shore.', price: 0, free: true, color: 0xffffff },
  { id: 'stone_marble', cat: 'stone', name: 'Pale Marble', desc: 'White stone for a city that intends to be remembered.', price: 160, color: 0xf1ede1 },
  { id: 'stone_granite', cat: 'stone', name: 'Grey Granite', desc: 'Heavy, dark and almost impossible to break.', price: 160, color: 0x93959a },
  { id: 'stone_sandstone', cat: 'stone', name: 'Desert Sandstone', desc: 'Warm southern stone, carried north by conquest.', price: 140, color: 0xdec59c },
  { id: 'stone_blackiron', cat: 'stone', name: 'Black Iron', desc: 'Walls darkened in the Black Forge. First clear: The Black Forge.', price: 0, dungeon: 'forge', color: 0x50545b },

  // Skies
  { id: 'sky_day', cat: 'sky', name: 'Clear Day', desc: 'The clean northern light of Vareth.', price: 0, free: true, theme: 'day' },
  { id: 'sky_golden', cat: 'sky', name: 'Golden Hour', desc: 'Long shadows, warm stone, and the feeling that something is about to begin.', price: 220, theme: 'golden' },
  { id: 'sky_storm', cat: 'sky', name: 'Siege Storm', desc: 'Heavy clouds and hard rain. Perfect weather for a siege.', price: 220, theme: 'storm' },
  { id: 'sky_dawn', cat: 'sky', name: 'Rose Dawn', desc: 'A soft pink morning after a long night on the walls.', price: 180, theme: 'dawn' },
  { id: 'sky_crow', cat: 'sky', name: 'Crow Moon', desc: 'A violet sky full of wings. First clear: Crowspire Crypt.', price: 0, dungeon: 'crypt', theme: 'crow' },

  // Captain
  { id: 'captain_steel', cat: 'captain', name: 'Steel & Blue', desc: 'Aldric\'s trusted campaign armour.', price: 0, free: true, palette: 'steel' },
  { id: 'captain_gold', cat: 'captain', name: 'Gilded Captain', desc: 'Gold plate for the commander of a growing kingdom.', price: 200, palette: 'gold' },
  { id: 'captain_crimson', cat: 'captain', name: 'Crimson Blade', desc: 'Red cloak, dark steel, and absolutely no subtlety.', price: 180, palette: 'crimson' },
  { id: 'captain_obsidian', cat: 'captain', name: 'Obsidian Watch', desc: 'Black armour that seems to swallow torchlight.', price: 240, palette: 'obsidian' },
  { id: 'captain_ashen', cat: 'captain', name: 'Ash King\'s Bane', desc: 'Armour reforged from the Ash King\'s shell. First clear: Vault of the Ash King.', price: 0, dungeon: 'vault', palette: 'ashen' },
];

export function skinsInCategory(cat) { return SKINS.filter(s => s.cat === cat); }
export function skinById(id) { return SKINS.find(s => s.id === id) || null; }
export const DEFAULT_SKINS = {
  livery: 'livery_ashbourne',
  roof: 'roof_terracotta',
  stone: 'stone_limestone',
  sky: 'sky_day',
  captain: 'captain_steel',
};

export const SUBSCRIPTION = {
  id: 'sovereign',
  name: 'The Sovereign\'s Oath',
  price: '$4.99 / month',
  crowns: 200,
  days: 30,
  benefits: [
    '+20% resource production from every building',
    '+10% damage from towers and siege engines',
    '−25% gold cost for all repairs',
    '+1 active city goal',
    'Sun King livery included while active',
    '200 Crowns granted on activation',
  ],
};

export const CAPTAIN_PALETTES = {
  steel: { tunic: 0x3b6385, cape: 0x2f4d6e, plate: 0xa9b0b4, trim: 0xd9b467, plume: 0xb84633 },
  gold: { tunic: 0x7a5c23, cape: 0xb8914d, plate: 0xe3c274, trim: 0xffe6a1, plume: 0xffd86b },
  crimson: { tunic: 0x7c2a22, cape: 0x8f2f26, plate: 0x8d4a44, trim: 0xe0a878, plume: 0xf08a5d },
  obsidian: { tunic: 0x242630, cape: 0x1b1d24, plate: 0x4a4e59, trim: 0x8a8f9c, plume: 0x8f6bc4 },
  ashen: { tunic: 0x3b1f27, cape: 0x4a1d25, plate: 0x6a5147, trim: 0xd08a5a, plume: 0xff7a4a },
};

export const CROWN_PACKS = [
  { id: 'pouch', name: 'Pouch of Crowns', crowns: 500, price: '$1.99' },
  { id: 'chest', name: 'War Chest', crowns: 1200, price: '$4.99' },
  { id: 'vault', name: 'Royal Vault', crowns: 2600, price: '$9.99' },
];

export const SPAWNS = [
  { x: 2, z: -42, camp: 'north' },
  { x: 39, z: 14, camp: 'east' },
  { x: -38, z: 17, camp: 'west' },
];

export const RANKS = [
  { name: 'Camp', min: 0, reward: null },
  { name: 'Hamlet', min: 45, reward: { gold: 120, wood: 100, stone: 100, food: 60 } },
  { name: 'Village', min: 110, reward: { gold: 200, wood: 160, stone: 160, food: 90 } },
  { name: 'Town', min: 195, reward: { gold: 300, wood: 220, stone: 220, food: 120 } },
  { name: 'Bastion', min: 300, reward: { gold: 420, wood: 300, stone: 300, food: 160 } },
  { name: 'Castle', min: 430, reward: { gold: 560, wood: 380, stone: 380, food: 200 } },
  { name: 'Citadel', min: 590, reward: { gold: 800, wood: 500, stone: 500, food: 260 } },
];

export const QUESTS = [
  { id: 'house2', title: 'Raise 2 houses for your people', goal: { kind: 'count', type: 'house', n: 2 }, reward: { wood: 70, stone: 50 } },
  { id: 'farm1', title: 'Build a farm and windmill', goal: { kind: 'count', type: 'farm', n: 1 }, reward: { food: 80, gold: 40 } },
  { id: 'wall10', title: 'Lay 10 stone wall segments', goal: { kind: 'count', type: 'wall', n: 10 }, reward: { stone: 90, gold: 30 } },
  { id: 'tower1', title: 'Raise an archer tower', goal: { kind: 'count', type: 'tower', n: 1 }, reward: { wood: 60, gold: 50 } },
  { id: 'road14', title: 'Pave 14 stretches of road', goal: { kind: 'roads', n: 14 }, reward: { gold: 50, stone: 50 } },
  { id: 'market1', title: 'Open a market', goal: { kind: 'count', type: 'market', n: 1 }, reward: { gold: 90, food: 30 } },
  { id: 'pop24', title: 'Grow your population to 24', goal: { kind: 'population', n: 24 }, reward: { gold: 100, wood: 80 } },
  { id: 'upgrade2', title: 'Upgrade any 2 buildings', goal: { kind: 'upgrades', n: 2 }, reward: { stone: 120, wood: 100 } },
  { id: 'tavern1', title: 'Build a tavern for the garrison', goal: { kind: 'count', type: 'tavern', n: 1 }, reward: { gold: 80, food: 70 } },
  { id: 'barracks1', title: 'Build a barracks', goal: { kind: 'count', type: 'barracks', n: 1 }, reward: { gold: 110, food: 60 } },
  { id: 'happy70', title: 'Reach 70 happiness', goal: { kind: 'happiness', n: 70 }, reward: { gold: 120, wood: 80 } },
  { id: 'tower3', title: 'Have 3 archer towers standing', goal: { kind: 'count', type: 'tower', n: 3 }, reward: { stone: 150, gold: 90 } },
  { id: 'wave1', title: 'Survive the first raid', goal: { kind: 'wave', n: 1 }, reward: { gold: 140, wood: 90, stone: 90 } },
  { id: 'splendor150', title: 'Reach 150 city splendor', goal: { kind: 'splendor', n: 150 }, reward: { gold: 180, food: 100 } },
  { id: 'ballista1', title: 'Build a ballista', goal: { kind: 'count', type: 'ballista', n: 1 }, reward: { gold: 160, stone: 100 } },
  { id: 'upgrade5', title: 'Upgrade 5 buildings', goal: { kind: 'upgrades', n: 5 }, reward: { gold: 220, stone: 160 } },
  { id: 'wave3', title: 'Survive the shield wall', goal: { kind: 'wave', n: 3 }, reward: { gold: 250, wood: 160, stone: 160 } },
  { id: 'pop50', title: 'Grow your population to 50', goal: { kind: 'population', n: 50 }, reward: { gold: 260, food: 160 } },
  { id: 'catapult1', title: 'Build a catapult', goal: { kind: 'count', type: 'catapult', n: 1 }, reward: { gold: 280, stone: 180 } },
  { id: 'wave5', title: 'Break the northern fury', goal: { kind: 'wave', n: 5 }, reward: { gold: 340, wood: 220, stone: 220 } },
  { id: 'splendor400', title: 'Reach 400 city splendor', goal: { kind: 'splendor', n: 400 }, reward: { gold: 420, food: 240 } },
  { id: 'wave8', title: 'Defeat Warlord Gruk', goal: { kind: 'wave', n: 8 }, reward: { gold: 700, wood: 400, stone: 400 } },
];

export const UPGRADES = [
  { id: 'fletch', name: 'Fletching', icon: 'i-volley', desc: '+25% damage from every tower and siege engine.' },
  { id: 'mason', name: 'Masonry', icon: 'i-wall', desc: '+30% max HP for every structure. Walls hold longer.' },
  { id: 'bounty', name: 'Bountiful Land', icon: 'i-farm', desc: '+40% resource production from all city buildings.' },
  { id: 'rapid', name: 'Rapid Fire', icon: 'i-tower', desc: '+20% fire rate for towers and siege engines.' },
  { id: 'chest', name: 'War Chest', icon: 'i-coin', desc: 'Gain 300 gold, 250 wood and 250 stone immediately.' },
  { id: 'medic', name: 'Field Medics', icon: 'i-repair', desc: 'Your captain and garrison heal fully, and gain +40% HP.' },
  { id: 'siege', name: 'Siege Engineers', icon: 'i-catapult', desc: '+35% damage from ballistas and catapults.' },
  { id: 'stone', name: 'Stonemason', icon: 'i-stone', desc: 'Walls and gates cost 25% less stone.' },
  { id: 'hero', name: 'Oath of the Captain', icon: 'i-captain', desc: 'Captain Aldric gains +50% damage and +30% HP.' },
  { id: 'tax', name: 'Tax Reform', icon: 'i-market', desc: 'Houses and markets produce +50% gold.' },
];

export function rankForSplendor(score) {
  let idx = 0;
  for (let i = 0; i < RANKS.length; i++) if (score >= RANKS[i].min) idx = i;
  return { index: idx, ...RANKS[idx], next: RANKS[idx + 1] || null };
}

export function costFor(type, level = 1) {
  const def = STRUCTURES[type];
  const mult = level === 1 ? 1 : Math.pow(1.95, level - 1);
  const out = {};
  for (const [k, v] of Object.entries(def.cost)) out[k] = Math.max(1, Math.round(v * mult));
  return out;
}

export function upgradeCostFor(structure) {
  const def = STRUCTURES[structure.type];
  if (!def.maxLevel || structure.level >= def.maxLevel) return null;
  const base = costFor(structure.type, structure.level + 1);
  const out = {};
  for (const [k, v] of Object.entries(base)) out[k] = Math.max(1, Math.round(v * 0.85));
  out.gold = (out.gold || 0) + Math.round(35 * structure.level);
  return out;
}

export function maxHpFor(type, level = 1) {
  const def = STRUCTURES[type];
  return Math.round(def.hp * (1 + (level - 1) * 0.45));
}

export function productionFor(type, level = 1) {
  const def = STRUCTURES[type];
  if (!def.production) return {};
  const factor = 1 + (level - 1) * 0.7;
  const out = {};
  for (const [k, v] of Object.entries(def.production)) out[k] = v * factor;
  return out;
}

export function happinessFor(type, level = 1) {
  const def = STRUCTURES[type];
  if (!def.happiness) return 0;
  return def.happiness * (1 + (level - 1) * 0.55);
}

export function workerCostFor(type, level = 1) {
  const def = STRUCTURES[type];
  const base = def.workers || 0;
  return base + Math.max(0, level - 1);
}

export function populationFor(type, level = 1) {
  const def = STRUCTURES[type];
  if (!def.population) return 0;
  return Math.round(def.population * (1 + (level - 1) * 0.75));
}

export function garrisonFor(type, level = 1) {
  const def = STRUCTURES[type];
  if (!def.garrison) return 0;
  return def.garrison + (level - 1);
}

export function towerStatsFor(type, level = 1) {
  const def = STRUCTURES[type];
  if (!def.tower) return null;
  return {
    ...def.tower,
    damage: def.tower.damage * (1 + (level - 1) * 0.55),
    range: def.tower.range + (level - 1) * 1.6,
  };
}

export function formatCost(cost) {
  return Object.entries(cost).map(([k, v]) => `${v} ${RESOURCES[k].name.toLowerCase()}`).join(' · ');
}

export function cellKey(i, j) { return j * GRID + i; }

export function worldToCell(x, z) {
  const i = Math.floor((x + HALF) / CELL);
  const j = Math.floor((z + HALF) / CELL);
  return { i, j };
}

export function cellToWorld(i, j) {
  return { x: (i + 0.5) * CELL - HALF, z: (j + 0.5) * CELL - HALF };
}

export function clampCell(v) { return Math.max(0, Math.min(GRID - 1, v)); }
