// ── Known names database (seed from MITRE ATT&CK + public threat intel) ──

const KNOWN_NAMES = {
  groups: new Set([
    // APT groups (nation-state)
    'APT1','APT3','APT10','APT28','APT29','APT32','APT33','APT34','APT38','APT40','APT41',
    'Fancy Bear','Cozy Bear','Lazarus Group','Sandworm','Turla','Kimsuky','Gamaredon',
    'MuddyWater','FIN7','FIN8','Carbanak','Scattered Spider','Lapsus$','TA505','TA453',
    'DarkHydrus','Charming Kitten','HEXANE','GALLIUM','HAFNIUM','NOBELIUM','PHOSPHORUS',
    'THALLIUM','Voodoo Bear','Gossamer Bear','OceanLotus','OilRig','Elfin','Helix Kitten',
    'Refined Kitten','Mint Sandstorm','Peach Sandstorm','Silk Typhoon','Volt Typhoon',
    'Salt Typhoon','Flax Typhoon','Granite Typhoon','Cotton Sandstorm','Charcoal Typhoon',
    'Wicked Panda','Double Dragon','Bronze Mohawk','Circuit Panda','Velvet Chollima',
    'Black Banshee','Sidewinder','Transparent Tribe','SideWinder','Bitter','Patchwork',
    'Confucius','Dropping Elephant','Donot Team','TEMP.Periscope','Kryptonite Panda',
    'Muddy Water','Static Kitten','Pioneer Kitten','Fox Kitten','Lemon Sandstorm',
    'MERCURY','Seedworm','UNC2452','UNC1878','UNC3944','DEV-0537','RomCom','UAC-0056',
    'Dragonfly','Energetic Bear','Berserk Bear','Crouching Yeti','Havex Group',
    'Equation Group','The Shadow Brokers','DarkOverlord','ShinyHunters','LAPSUS$',
    'Vice Society','BlackByte','Hive Group','Karakurt','BianLian','Royal Group',
    'Play Group','Akira Group','8base','Rhysida','Medusa Group','Cl0p','LockBit Group',
    'ALPHV','BlackCat Group','REvil','DarkSide Group','Conti Group','Maze Group',
    'RagnarLocker','DoppelPaymer','NetWalker Group','Egregor Group','SunCrypt',
    'Cuba Ransomware Group','AvosLocker','BlackMatter Group','Lorenz','Grief',
    'Sabbath','Pysa','Snatch','Mespinoza','Clop Group','Haron','Atom Silo',
    'LV Ransomware','Arvin Club','Spook',
    // Vendor naming conventions
    'Iron Viking','Iron Tilden','Iron Liberty','Iron Hunter','Indrik Spider',
    'Carbon Spider','Gold Southfield','Gold Ulrick','Gold Niagara',
    'Narwhal Spider','Sprite Spider','Graceful Spider','Mummy Spider',
    'Wizard Spider','Grim Spider','Hermit','TA2101','TA551','TA578',
    'SilverFish','WinterVivern','YoroTrooper','Confucius','Bahamut',
    'Bitter APT','ModifiedElephant','PatchWork','Transparent Tribe',
    'IndigoZebra','BackdoorDiplomacy','Aoqin Dragon','Moshen Dragon',
    'RedAlpha','RedDelta','Mustang Panda','Nomad Panda','Tonto Team',
    'Bronze Butler','Tick Group','MenuPass','Stone Panda','APT10',
  ]),
  campaigns: new Set([
    'Operation Aurora','Operation Cloud Hopper','Operation Shady RAT','Operation GhostNet',
    'Operation Buckshot Yankee','Operation Newscaster','Operation Cleaver','Operation Ababil',
    'Operation Wocao','Operation SoftCell','Operation Wilted Tulip','Operation CuckooBees',
    'Operation DreamJob','Operation Triangulation','Operation ForumTroll','Operation Monsoon',
    'Operation Pawn Storm','Operation Saffron Rose','Operation Woolen Goldfish',
    'Operation Deputy Dog','Operation Ephemeral Hydra','Operation SnowMan',
    'Operation Hangover','Operation Groundbait','Operation Bugdrop','Operation AppleJeus',
    'Operation GoldDragon','Operation Oceansalt','Operation Cobalt Kitty',
    'Operation WizardOpium','Operation NightScout','Operation SilkBean',
    'Operation DoubleAgent','Operation ChamelGang','Operation GhostShell',
    'Operation TunnelSnake','Operation Backbone','Operation SignalArrows',
    'Operation HammerDrill','Operation CUPCAKE','Operation ShadowHammer',
    'Operation WildPressure','Operation Poisoned News','Operation In(ter)ception',
    'Operation PowerFall','Operation StealthMango','Operation Dust Storm',
    'Operation Lotus Blossom','Operation Bitter Biscuit','Operation SilverTerrier',
    'Operation RemoteAccess','Operation Cyclone','Operation Spalax','Operation NightFury',
    'Operation Tokhta','Operation Secondary Infektion','Operation Poisonous Needle',
  ]),
  malware: new Set([
    // Famous malware
    'WannaCry','WannaCrypt','NotPetya','Nyetya','Stuxnet','Flame','Duqu','Regin',
    'BlackEnergy','Industroyer','Crashoverride','LockerGoga','Ryuk','Emotet',
    'TrickBot','Dridex','Zeus','SpyEye','Mirai','Shamoon','Petya','GandCrab',
    'Sodinokibi','REvil','DarkSide','LockBit','Conti','BlackMatter','Maze','Egregor',
    'NetWalker','DoppelPaymer','Clop','RagnarLocker','Hive','BlackCat','ALPHV',
    'Cuba','AvosLocker','Royal','Play','Akira','BianLian','Vice Society','BlackByte',
    // RATs & Stealers
    'PlugX','PoisonIvy','njRAT','AsyncRAT','QuasarRAT','DarkComet','Gh0stRAT',
    'RedLine','Raccoon','Vidar','AZORult','FormBook','AgentTesla','LokiBot',
    'NanoCore','Remcos','NetWire','WarzonRAT','BitRAT','XLoader','SnakeKeylogger',
    // Loaders & Droppers
    'IcedID','BokBot','QakBot','QBot','BazarLoader','BazarBackdoor','Ursnif','Gozi',
    'Hancitor','Chanitor','ZLoader','SystemBC','SocGholish','Tofsee','Amadey',
    'SmokeLoader','PrivateLoader','GuLoader','CloudEyE',
    // C2 frameworks (misused)
    'CobaltStrike','Sliver','BruteRatel','Havoc','Nighthawk','PoshC2','Metasploit',
    // Backdoors & Implants
    'SUNBURST','TEARDROP','SUNSPOT','RAINDROP','BEACON','Uroburos','Snake',
    'Turla','Kazuar','Gazer','Carbon','ComRAT','HyperStack','BigBoss','StuffedHyena',
    'FinFisher','FinSpy','Pegasus','Chrysaor','Predator','Hermit','LightSpy',
    'Triton','TRISIS','EKANS','Industroyer2','Pipedream','COSMICENERGY',
    'Duqu2','MiniDuke','CosmicDuke','OnionDuke','CloudDuke','HammerDuke',
    'GeminiDuke','CozyDuke','MiniDionis','SeaDuke','FatDuke','PolyglotDuke',
    'WellMail','WellMess','SoreFang','TEARDROP','VaporRage','Flipside','GoldMax',
    'Sibot','GoldFinder','Sunshuttle','NativeZone','CobaltWeb',
    'Bumblebee','Matanbuchus','GootLoader','NightSky','Diavol','Pandora',
    'BlackBasta','LockFile','AtomSilo','Grief','Haron','Sabbath',
  ]),
};

// ── Additional sources: Malpedia families (malware) ──
const MALPEDIA_MALWARE = [
  'Lumma Stealer','Stealc','PicassoLoader','HijackLoader','SectopRAT','WastedLocker','Qilin',
  'TONESHELL','SafePay','DracuLoader','FINALDRAFT','STOWAWAY','SNAPPYBEE','SNOWLIGHT',
  'PylangGhost','BeaverTail','InvisibleFerret','EternalPetya','GeckoStealer','MicroStealer',
  'LucidRook','LucidKnight','LucidPawn','SpyFRPTunnel','VoltStealer','SpankRAT','HanGhost',
  'AGEWHEEZE','ABCDoor','GhostSocks','OtterCookie','SNOWBASIN','ZionSiphon','GRAMDOOR',
  'STARWHALE','PowGoop','POWERSTATS','AgendaCrypt','JADESNOW','Bedep','killada','SMOKEDHAM',
  'SmartLoader','SHEETCREEP','Albiriox','FriendlyFerret','AmodalTea','BetaBot','RTM',
  'Mirax','Tenzor','Remus','JSOutProx','WAVESHAPER','Aura Stealer','Socks5 Systemz',
  'SnappyClient','magecart','StoatWaffle','GolangGhost','tsh','Macaw','QLNX','Phorpiex',
  'RandomQuery','Coruna','Tsundere','VShell','fast16','ProSpy','LedgerChecker Stealer',
  'Supper','Stealerium','3snake','Payload','SmartApeSG','WannaCryptor',
  'NetSupportManager RAT','Phantom Stealer','Xloader',
];

// ── Additional sources: Malpedia actors (threat groups + campaigns) ──
const MALPEDIA_GROUPS = [
  'Cleaver','Silent Chollima','APT37','FIN11','APT15','APT35','BlackTech','APT27','Molerats',
  'AridViper','DarkHotel','Earth Lusca','Cobalt Group','DragonOK','Hellsing','Naikon',
  'APT17','TA428','GOLD CABIN','HenBox','VENOM SPIDER','Callisto','Evilnum','Gelsemium',
  'Longhorn','Lucky Cat','Thrip','El Machete','Handala','LOTUS PANDA','RANCOR',
  'Red Menshen','SideCopy','TA410','Tortoiseshell','YoroTrooper','Aoqin Dragon',
  'Blind Eagle','APT18','APT19','APT21','Dark Caracal','DNSpionage','DOPPEL SPIDER',
  'Greenbug','GreyEnergy','IcePeony','IndigoZebra','MirrorFace','MUMMY SPIDER',
  'PlushDaemon','POISON CARP','RansomHub','Rocke','Scarlet Mimic','Silence Group',
  'Sowbug','Void Manticore','Yanbian Gang','Evil Corp','Ghostwriter','INDRIK SPIDER',
  'Earth Kasha','Earth Estries','Earth Berberoka','GOLD DRAKE','Earth Freybug',
  'Vanilla Tempest','APT31','APT3','MUSTANG PANDA','Rocket Kitten','QUILTED TIGER',
  'The Gorgon Group','VICEROY TIGER','GOLD CABIN','UNC1069','UNC1860','UNC2970',
  'UNC4393','UNC5174','Dust Storm','WageMole','ModifiedElephant','CHRYSENE','APT39',
  'APT12','APT16','APT2','APT4','APT5','APT9','APT20','APT22','APT23','APT24',
  'APT26','APT30','APT42','APT43','APT45','Bahamut','BackdoorDiplomacy','Blackwood',
  'BuhTrap','Careto','CopyKittens','CoralRaider','CosmicBeetle','DarkPink',
  'DragonForce','Evasive Panda','GhostEmperor','GoldenJackal','Higaisa','InvisiMole',
  'IronHusky','LightBasin','Lancefly','LYCEUM','Metador','Moshen Dragon',
  'MustachedBouncer','PLATINUM','ProjectSauron','PROMETHIUM','RedAlpha','RedDelta',
  'RedJuliett','Red Menshen','RipperSec','SaintBear','Scattered Canary','ScarredManticore',
  'Sea Turtle','ShinyHunters','ShroudedSnooper','SilverFish','SilverTerrier',
  'SparklingGoblin','ToddyCat','TraderTraitor','Void Arachne','Void Banshee',
  'WildNeutron','Winter Vivern','WIRTE','WildPressure','Worok',
  'Caramel Tsunami','Denim Tsunami','Blue Tsunami','Carmine Tsunami',
  'CostaRicto','DarkGaboon','FunkSec','GambleForce','GopherWhisper',
  'GreedyBear','GrayBravo','Iron Group','JavaGhost','Karakurt',
  'Killnet','Kinsing','LabHost','Lapsus','LilacSquid','LofyGang',
  'Luna Moth','MoneyTaker','MosesStaff','NoName057(16)','OldGremlin',
  'Predatory Sparrow','Prophet Spider','RansomHouse','RuskyNet','Scarab',
  'ShadowSyndicate','SilentLibrarian','Smishing Triad','Solntsepek',
  'Stargazer Goblin','TeamTNT','ToddyCat','UAC-0056','UserSec','ViceLeaker',
  'Void Balaur','Void Rabisu','Water Barghest','Water Gamayun','Webworm',
  'XakNet','XDSpy','Zerosevengroup','ZOMBIE SPIDER','ZooPark',
];

const MALPEDIA_CAMPAIGNS = [
  'Operation C-Major','Operation Soft Cell','Operation Sharpshooter','Operation ShadowHammer',
  'Operation Ghoul','Operation Parliament','Operation DRBControl','Operation Cobalt Whisper',
  'Operation Comando','Operation Emmental','Operation Kabar Cobra',
  'Operation Poison Needles','Operation Red Signature','Operation Shadow Force',
  'Operation BugDrop','Operation Groundbait','Operation CuckooBees',
];

// ── Additional sources: Macworld Mac malware list ──
const MACWORLD_MALWARE = [
  'HiddenRisk','RustyAttr','InletDrift','Cthulhu','ToDoSwift','Banshee','LightSpy',
  'KandyKorn','JaskaGO','MetaStealer','NokNok','Realst','JokerSpy','AtomicStealer',
  'RustBucket','SparkRAT','Geacon','MacStealer','XMRig','Alchimist','CloudMensis',
  'oRAT','Gimmick','DazzleSpy','ChromeLoader','XCSSET','Pirri','Silver Sparrow',
  'OSAMiner','ElectroRAT','GravityRAT','ThiefQuest','Mokes','CookieMiner',
  'MacDownloader','Fruitfly','Pirrit','KeRanger','MacDefender','Mshelper','MaMi','Dok',
  'RustDoor','SpectralBlur','PyStealer','NotLockBit','WSClient','Activator',
  'LoudMiner','Flashback','BlackHole RAT','EvasivePanda','CloudChat','SnowLight',
  'HZ Rat','OSX.Zuru','XcodeSpy','Silver Toucan','macOS.Macma','NetWire','OSAMiner',
  'OSX/Shlayer','OSX/CrescentCore','OSX/Linker','OSX/NewTab','Pegasus','Stuxnet',
];

// Merge all sources into KNOWN_NAMES
MALPEDIA_MALWARE.forEach(n => KNOWN_NAMES.malware.add(n));
MACWORLD_MALWARE.forEach(n => KNOWN_NAMES.malware.add(n));
MALPEDIA_GROUPS.forEach(n => KNOWN_NAMES.groups.add(n));
MALPEDIA_CAMPAIGNS.forEach(n => KNOWN_NAMES.campaigns.add(n));

// ── Word banks ──

const WORD_BANKS = {
  natural: {
    metals: ['Iron','Steel','Copper','Lead','Mercury','Tungsten','Titanium','Cobalt',
      'Nickel','Chromium','Radium','Uranium','Beryllium','Bismuth','Osmium',
      'Iridium','Cesium','Arsenic','Phosphorus','Sulfur','Vanadium','Gallium',
      'Antimony','Tellurium','Thallium','Barium','Strontium','Lithium','Cesium'],
    forces: ['Storm','Tornado','Hurricane','Tsunami','Avalanche','Eruption','Blizzard',
      'Wildfire','Geyser','Maelstrom','Vortex','Riptide','Undertow','Firestorm',
      'Permafrost','Thunderhead','Sandstorm','Flashflood','Cyclone','Monsoon',
      'Hailstorm','Landslide','Mudslide','Rockfall','Whirlpool','Whirlwind'],
    phenomena: ['Aurora','Eclipse','Solstice','Mirage','Tremor','Seismic','Magnetic',
      'Cataclysm','Fissure','Deluge','Drought','Inferno','Penumbra','Nadir',
      'Zenith','Equinox','Apogee','Perigee','Perihelion','Polarity','Flux'],
    geological: ['Obsidian','Granite','Basalt','Flint','Quartz','Magma','Lava',
      'Tectonic','Glacial','Tundra','Bedrock','Chasm','Crevasse','Abyss',
      'Shale','Schist','Diorite','Pumice','Feldspar','Pyroclast','Lithosphere'],
    organisms: ['Mantis','Viper','Cobra','Mamba','Scorpion','Locust','Cicada',
      'Wasp','Hornet','Tick','Leech','Centipede','Tarantula','Widow',
      'Chameleon','Lamprey','Nematode','Termite','Botfly','Tsetse'],
  },
  mythological: {
    gods: ['Anubis','Osiris','Hades','Ares','Odin','Loki','Thor','Tyr','Freyr','Morrigan',
      'Cernunnos','Hecate','Nemesis','Nyx','Erebus','Kali','Shiva','Baal','Moloch',
      'Dagon','Asmodeus','Mammon','Beelzebub','Mephisto','Azrael','Samael','Belial',
      'Ahriman','Angra Mainyu','Apophis','Sekhmet','Sobek','Set','Typhon','Cronus',
      'Thanatos','Ares','Eris','Phobos','Deimos','Enyo'],
    creatures: ['Chimera','Griffin','Basilisk','Fenrir','Jormungandr','Cerberus','Hydra',
      'Gorgon','Minotaur','Sphinx','Leviathan','Behemoth','Manticore','Typhon',
      'Echidna','Charybdis','Scylla','Wendigo','Wyvern','Zmey','Strix','Lamia',
      'Empusa','Harpy','Siren','Cyclops','Hecatoncheir','Geryon','Orthrus',
      'Ammit','Apophis','Jabberwock','Bandersnatch','Kraken','Rusalka'],
    concepts: ['Ragnarok','Apocalypse','Nemesis','Doom','Void','Abyss','Chaos',
      'Entropy','Eclipse','Twilight','Niflheim','Gehenna','Tartarus','Avernus',
      'Pandemonium','Sheol','Limbo','Purgatory','Inferno','Oblivion'],
    relics: ['Excalibur','Mjolnir','Gungnir','Aegis','Caduceus','Spear','Trident',
      'Scythe','Obsidian','Ankh','Ouroboros','Sigil','Rune'],
  },
  technical: {
    prefixes: ['Zero','Dark','Ghost','Shadow','Null','Root','Void','Hex','Bit','Byte',
      'Nano','Meta','Crypto','Cipher','Phantom','Stealth','Rogue','Silent',
      'Blind','Dead','Raw','Cold','Hard','Deep','Back'],
    terms: ['Stack','Buffer','Kernel','Socket','Heap','Cache','Thread','Process',
      'Register','Gate','Bridge','Payload','Exploit','Overflow','Injection',
      'Escalation','Pivot','Exfil','Backdoor','Rootkit','Beacon','Hook','Shim',
      'Probe','Scan','Traverse','Bypass','Intercept','Tunnel','Proxy','Relay',
      'Splice','Fork','Splice','Patch','Patch','Canary','Trap','Segment',
      'Sector','Cluster','Block','Chain','Node','Mesh','Vector','Matrix'],
    concepts: ['Overflow','Injection','Traversal','Escalation','Exfiltration',
      'Persistence','Evasion','Obfuscation','Enumeration','Reconnaissance',
      'Execution','Implant','Staging','Pivoting','Lateral','Foothold'],
    protocols: ['DNS','TCP','SMTP','SSH','SSL','ICMP','UDP','RPC','SMB','LDAP',
      'SNMP','Kerberos','NTLM','OAuth','SAML','JWT','TLS','VPN','BGP','ARP'],
  },
  literature: {
    characters: ['Iago','Caliban','Prospero','Oberon','Puck','Hamlet','Ophelia','Hecate',
      'Faustus','Mephistopheles','Dorian','Hyde','Moreau','Ahab','Ishmael',
      'Frankenstein','Dracula','Renfield','Dorian','Heathcliff','Rochester',
      'Raskolnikov','Stavrogin','Smerdyakov','Karamazov','Bazarov','Oblomov',
      'Woland','Behemoth','Koroviev','Pilate','Caiphas','Judas',
      'Kurtz','Humbert','Lolita','Gatsby','Caraway','Wolfsheim'],
    dystopia: ['Thoughtcrime','Doublethink','Unperson','Newspeak','Ministry','Telescreen',
      'Proles','Crimestop','Blackwhite','Duckspeak','Miniluv','Minitrue',
      'Minipax','Miniplenty','Airstrip','Oceania','Eurasia','Eastasia',
      'Alphas','Deltas','Epsilons','Bokanovsky','Soma','Pneumatic',
      'Mechanized','Savage','Mustapha','Lenina'],
    gothic: ['Phantom','Specter','Wraith','Revenant','Ghoul','Shade','Umbra',
      'Penumbra','Necromancer','Lich','Carrion','Charnel','Ossuary',
      'Sepulcher','Catacombs','Mausoleum','Crypt','Barrow','Gallows'],
    themes: ['Betrayal','Hubris','Nemesis','Damnation','Obsession','Madness',
      'Downfall','Deception','Vengeance','Corruption','Unraveling','Descent'],
  },
};

// ── Suffixes / patterns by type ──

const TYPE_PATTERNS = {
  group: {
    patterns: [
      (w) => `${w} Group`,
      (w) => `${w} Collective`,
      (w) => `${w} Team`,
      (w) => `${w} Crew`,
      (w) => `${w} Squad`,
      (w) => `${w} Unit`,
      (w) => `${w} Bear`,
      (w) => `${w} Tiger`,
      (w) => `${w} Dragon`,
      (w) => `${w} Panda`,
      (w) => `${w} Lynx`,
      (w) => `${w} Jackal`,
      (w) => `${w} Fox`,
      (w) => `${w} Hawk`,
      (w, adj) => `${adj} ${w}`,
      (w) => `${w} Alliance`,
      (w) => `${w} Syndicate`,
      (w) => `${w} Nexus`,
      (w) => `${w} Cell`,
    ],
    adjectives: ['Fancy','Cozy','Silent','Scattered','Refined','Wicked','Double','Lazy',
      'Hungry','Hidden','Midnight','Dark','Frozen','Burning','Crimson','Violet',
      'Ghost','Iron','Steel','Black','White','Grey','Void','Neon','Shadow'],
  },
  campaign: {
    patterns: [
      (w) => `Operation ${w}`,
      (w, adj) => `Operation ${adj} ${w}`,
      (w) => `${w} Storm`,
      (w) => `${w} Wave`,
      (w) => `${w} Strike`,
      (w) => `${w} Tide`,
      (w) => `${w} Surge`,
      (w) => `${w} Veil`,
      (w) => `${w} Breach`,
      (w) => `${w} Horizon`,
      (w) => `${w} Fallout`,
      (w) => `${w} Protocol`,
      (w, adj) => `Project ${adj}`,
      (w) => `${w} Initiative`,
      (w, adj) => `${adj} Tide`,
    ],
    adjectives: ['Silent','Hidden','Golden','Crimson','Iron','Dark','Black','Ghost',
      'Phantom','Crystal','Frozen','Burning','Midnight','Arctic','Cobalt',
      'Violet','Scarlet','Azure','Obsidian','Onyx','Amber','Electric'],
  },
  malware: {
    patterns: [
      (w) => w,
      (w) => `${w}Bot`,
      (w) => `${w}RAT`,
      (w) => `${w}Kit`,
      (w) => `${w}Loader`,
      (w) => `${w}Stealer`,
      (w) => `${w}Dropper`,
      (w) => `${w}Worm`,
      (w) => `${w}Miner`,
      (w) => `${w}Banker`,
      (w) => `${w}Gate`,
      (w) => `${w}Spy`,
      (w) => `${w}Lock`,
      (w) => `${w}Crypt`,
      (w) => `${w}Exec`,
      (w) => `${w}Net`,
      (w, adj) => `${adj}${w}`,
      (w) => `${w}X`,
      (w) => `${w}Zero`,
    ],
    adjectives: ['Dark','Black','Red','Ghost','Silent','Void','Null','Rogue',
      'Neon','Dead','Cold','Raw','Deep','Shadow','Crypto','Hex'],
  },
};

// ── Etymology templates ──

const ETYMOLOGY = {
  natural: (word) => {
    const metalTerms = new Set(['Iron','Steel','Copper','Lead','Mercury','Tungsten','Titanium','Cobalt','Nickel','Chromium','Radium','Uranium','Beryllium','Bismuth','Osmium','Iridium','Cesium','Arsenic','Phosphorus','Sulfur','Vanadium','Gallium','Antimony','Tellurium','Thallium','Barium','Strontium','Lithium']);
    const forceTerms = new Set(['Storm','Tornado','Hurricane','Tsunami','Avalanche','Eruption','Blizzard','Wildfire','Geyser','Maelstrom','Vortex','Riptide','Undertow','Firestorm','Permafrost','Thunderhead','Sandstorm','Flashflood','Cyclone','Monsoon','Hailstorm','Landslide','Mudslide','Rockfall','Whirlpool','Whirlwind']);
    const w = esc(word);
    if (metalTerms.has(word)) return `Named after the element or alloy <span class="ety-part">${w}</span> — metals evoke density, hardness, and conductivity, suggesting a threat that is persistent, resilient, and difficult to dislodge.`;
    if (forceTerms.has(word)) return `Named after the natural force <span class="ety-part">${w}</span> — weather and geological events imply overwhelming, rapid, or large-scale impact. A popular convention among nation-state attribution frameworks.`;
    return `Drawn from the natural world: <span class="ety-part">${w}</span> references a geological feature or natural phenomenon, projecting power, unpredictability, and environmental scale.`;
  },
  mythological: (word) =>
    `Derived from <span class="ety-part">${esc(word)}</span>, a figure from ancient mythology associated with power, destruction, or deception. Mythological names signal intent and project psychological weight.`,
  technical: (word) =>
    `References the technical concept of <span class="ety-part">${esc(word)}</span>, a nod to the underlying exploitation technique or attack surface leveraged by this entity.`,
  literature: (word) =>
    `Drawn from literary canon, <span class="ety-part">${esc(word)}</span> carries thematic weight: betrayal, obsession, or descent. Literature names often reflect the actor's self-perception or tactical philosophy.`,
  mashup: (word1, word2) =>
    `A compound of <span class="ety-part">${esc(word1)}</span> and <span class="ety-part">${esc(word2)}</span> from different naming traditions. Hybrid names are intentionally disorienting and harder to attribute.`,
};

// ── Utility ──

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function normalizeName(name) {
  return name.toLowerCase().replace(/[\s\-_]/g, '');
}

function isKnownName(name, type) {
  const norm = normalizeName(name);
  const checkSet = (set) => {
    for (const known of set) {
      if (normalizeName(known) === norm) return true;
    }
    return false;
  };

  if (type === 'group') return checkSet(KNOWN_NAMES.groups);
  if (type === 'campaign') return checkSet(KNOWN_NAMES.campaigns);
  if (type === 'malware') return checkSet(KNOWN_NAMES.malware);

  // check all
  return checkSet(KNOWN_NAMES.groups) || checkSet(KNOWN_NAMES.campaigns) || checkSet(KNOWN_NAMES.malware);
}

// ── Core name generator ──

const REAL_FLAVOURS = ['natural','mythological','technical','literature','mashup'];

function generateName(type, flavour) {
  let baseWord, secondWord, flavourLabel, etymologyText;

  if (flavour === 'random') {
    flavour = pick(REAL_FLAVOURS);
  }

  if (flavour === 'mashup') {
    const flavours = ['natural','mythological','technical','literature'];
    const f1 = pick(flavours);
    let f2 = pick(flavours.filter(f => f !== f1));
    baseWord = pickWordFromFlavour(f1);
    secondWord = pickWordFromFlavour(f2);
    flavourLabel = `${capitalize(f1)} + ${capitalize(f2)}`;
    etymologyText = ETYMOLOGY.mashup(baseWord, secondWord);

    // for mashup, combine words into a single base
    baseWord = baseWord + secondWord;
  } else {
    baseWord = pickWordFromFlavour(flavour);
    flavourLabel = capitalize(flavour);
    etymologyText = ETYMOLOGY[flavour](baseWord, type);
  }

  const patterns = TYPE_PATTERNS[type].patterns;
  const adjectives = TYPE_PATTERNS[type].adjectives;
  const pattern = pick(patterns);
  const adj = pick(adjectives);
  const name = pattern(baseWord, adj);

  return { name, flavourLabel, etymologyText };
}

function pickWordFromFlavour(flavour) {
  const bank = WORD_BANKS[flavour];
  const keys = Object.keys(bank);
  const key = pick(keys);
  return pick(bank[key]);
}

// ── Security helpers ──

// Escape HTML entities before any innerHTML injection
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Validate a name coming from an untrusted source (GitHub API)
const NAME_PATTERN = /^[\w\s\-\.\(\)\/]{1,80}$/;
function isSafeName(str) {
  return typeof str === 'string' && NAME_PATTERN.test(str);
}

// ── GitHub repo config ──
const GITHUB_REPO = 'yotamgutman/cyber-name-generator';
const ISSUE_TEMPLATE = '.github/ISSUE_TEMPLATE/name-submission.yml';

function buildIssueURL(name, type, source) {
  const title = encodeURIComponent(`Exclude: ${name}`);
  const body = encodeURIComponent(
    `## Name Submission\n\n**Name:** ${name}\n**Type:** ${type}\n**Source:** ${source || 'N/A'}\n\n` +
    `This name should be added to the exclusion list as it is a known/published threat entity.`
  );
  return `https://github.com/${GITHUB_REPO}/issues/new?template=name-submission.yml&title=${title}&body=${body}`;
}

function buildClaimIssueURL(name, type) {
  const title = encodeURIComponent(`Claim: ${name} (${type})`);
  const body = encodeURIComponent(
    `## Name Claim\n\n**Name:** ${name}\n**Type:** ${type}\n\n` +
    `I am claiming this generated name to reserve it from future generation.\n\n` +
    `_This issue was created via the Threat Name Generator._`
  );
  return `https://github.com/${GITHUB_REPO}/issues/new?title=${title}&body=${body}&labels=claimed`;
}

// ── Load claimed names from GitHub Issues API ──
// Read-only, unauthenticated public API call. No tokens are used or stored.
// Rate-limited to one call per session via sessionStorage flag.
const ALLOWED_CLAIM_TYPES = new Set(['group', 'campaign', 'malware']);
const CLAIM_TITLE_RE = /^Claim:\s*(.{1,80}?)\s*\((group|campaign|malware)\)\s*$/i;

function loadClaimedNames() {
  if (sessionStorage.getItem('claimedLoaded')) return;
  sessionStorage.setItem('claimedLoaded', '1');

  fetch(`https://api.github.com/repos/${GITHUB_REPO}/issues?labels=claimed&state=open&per_page=100`, {
    method: 'GET',
    headers: { 'Accept': 'application/vnd.github.v3+json' },
  })
    .then(r => r.ok ? r.json() : [])
    .then(issues => {
      if (!Array.isArray(issues)) return;
      let added = 0;
      issues.forEach(issue => {
        if (typeof issue.title !== 'string') return;
        const match = issue.title.match(CLAIM_TITLE_RE);
        if (!match) return;
        const name = match[1].trim();
        const type = match[2].toLowerCase();
        if (!isSafeName(name) || !ALLOWED_CLAIM_TYPES.has(type)) return;
        if (type === 'group') KNOWN_NAMES.groups.add(name);
        else if (type === 'campaign') KNOWN_NAMES.campaigns.add(name);
        else if (type === 'malware') KNOWN_NAMES.malware.add(name);
        added++;
      });
      if (added > 0) updateStatsBar();
    })
    .catch(() => {});
}

// ── Session state ──

let generatedCount = 0;
let savedNames = [];
let currentName = null;
let currentType = 'group';
let currentFlavour = 'natural';

// ── Community names loader ──
function updateStatsBar() {
  const total = KNOWN_NAMES.groups.size + KNOWN_NAMES.campaigns.size + KNOWN_NAMES.malware.size;
  const el = document.getElementById('stat-known');
  if (el) el.textContent = `◈ ${total.toLocaleString()} known threat names loaded`;
}

loadClaimedNames();

fetch('data/community-names.json')
  .then(r => r.json())
  .then(data => {
    let added = 0;
    (data.groups || []).forEach(n => { KNOWN_NAMES.groups.add(n); added++; });
    (data.malware || []).forEach(n => { KNOWN_NAMES.malware.add(n); added++; });
    (data.campaigns || []).forEach(n => { KNOWN_NAMES.campaigns.add(n); added++; });
    if (added > 0) updateStatsBar();
  })
  .catch(() => {});

// ── UI helpers ──

function setTypeBadge(type) {
  const badge = document.getElementById('result-badge');
  badge.className = 'result-type-badge type-' + type;
  badge.textContent = type.toUpperCase();
}

function typewriterEffect(element, text, onDone) {
  element.classList.add('typing');
  element.textContent = '';
  let i = 0;
  const speed = Math.max(30, Math.min(80, 800 / text.length));
  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      element.classList.remove('typing');
      if (onDone) onDone();
    }
  }, speed);
}

function showResult(type, flavour) {
  const btn = document.getElementById('generate-btn');
  btn.classList.add('loading');
  btn.querySelector('.btn-text').textContent = 'GENERATING...';

  setTimeout(() => {
    const strict = document.getElementById('opt-strict').checked;
    const explain = document.getElementById('opt-explain').checked;

    let result, attempts = 0;
    do {
      result = generateName(type, flavour);
      attempts++;
    } while (strict && isKnownName(result.name, type) && attempts < 20);

    const { name, flavourLabel, etymologyText } = result;
    const conflict = isKnownName(name, type);

    currentName = { name, type, flavour: flavourLabel };

    const placeholder = document.getElementById('result-placeholder');
    const content = document.getElementById('result-content');
    const nameEl = document.getElementById('result-name');
    const flavourTag = document.getElementById('result-flavour-tag');
    const etymEl = document.getElementById('result-etymology');
    const conflictBanner = document.getElementById('conflict-banner');

    placeholder.classList.add('hidden');
    content.classList.remove('hidden');

    setTypeBadge(type);
    flavourTag.textContent = '[ ' + flavourLabel + ' ]';
    etymEl.style.display = explain ? '' : 'none';

    conflictBanner.classList.toggle('hidden', !conflict);

    typewriterEffect(nameEl, name);

    if (explain) {
      setTimeout(() => {
        etymEl.innerHTML = etymologyText;
      }, 100);
    }

    generatedCount++;
    document.getElementById('stat-generated').textContent =
      `○ ${generatedCount} generated this session`;

    btn.classList.remove('loading');
    btn.querySelector('.btn-text').textContent = 'GENERATE';
  }, 180);
}

function addToSaved(item) {
  if (savedNames.find(s => s.name === item.name)) return;
  savedNames.push(item);
  renderSaved();
}

function removeFromSaved(name) {
  savedNames = savedNames.filter(s => s.name !== name);
  renderSaved();
}

function renderSaved() {
  const list = document.getElementById('saved-list');
  if (savedNames.length === 0) {
    list.innerHTML = '<p class="saved-empty">No names saved yet</p>';
    return;
  }
  const ALLOWED_TYPES = new Set(['group','campaign','malware']);
  list.innerHTML = savedNames.map((s) => {
    const safeType = ALLOWED_TYPES.has(s.type) ? s.type : 'group';
    return `<div class="saved-item">
      <span class="saved-item-name">${esc(s.name)}</span>
      <span class="saved-item-meta">
        <span class="saved-item-type type-${safeType}-tag">${safeType.toUpperCase()}</span>
        <button class="remove-saved" data-name="${esc(s.name)}" title="Remove">&#x2715;</button>
      </span>
    </div>`;
  }).join('');

  list.querySelectorAll('.remove-saved').forEach(btn => {
    btn.addEventListener('click', () => removeFromSaved(btn.dataset.name));
  });
}

function exportCSV() {
  if (savedNames.length === 0) return;
  const rows = [['Name','Type','Flavour'], ...savedNames.map(s => [s.name, s.type, s.flavour])];
  const csv = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'threat-names.csv';
  a.click();
  URL.revokeObjectURL(url);
}

// ── Event wiring ──

// ── Legal disclaimer ──
function showDisclaimer() {
  document.getElementById('legal-overlay').classList.remove('hidden');
}

function hideDisclaimer() {
  document.getElementById('legal-overlay').classList.add('hidden');
  localStorage.setItem('disclaimerAccepted', '1');
}

document.addEventListener('DOMContentLoaded', () => {
  // Show disclaimer on first visit
  if (!localStorage.getItem('disclaimerAccepted')) showDisclaimer();

  document.getElementById('legal-accept-btn').addEventListener('click', hideDisclaimer);
  document.getElementById('reopen-disclaimer-btn').addEventListener('click', showDisclaimer);

  // Pill selectors
  document.getElementById('type-selector').addEventListener('click', e => {
    const pill = e.target.closest('.pill');
    if (!pill) return;
    document.querySelectorAll('#type-selector .pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentType = pill.dataset.value;
  });

  document.getElementById('flavour-selector').addEventListener('click', e => {
    const pill = e.target.closest('.pill');
    if (!pill) return;
    document.querySelectorAll('#flavour-selector .pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentFlavour = pill.dataset.value;
  });

  // Generate
  document.getElementById('generate-btn').addEventListener('click', () => {
    showResult(currentType, currentFlavour);
  });

  // Keyboard shortcut: Enter or Space on page
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.target.matches('button,input')) {
      showResult(currentType, currentFlavour);
    }
  });

  // Regen
  document.getElementById('regen-btn').addEventListener('click', () => {
    showResult(currentType, currentFlavour);
  });

  // Copy
  document.getElementById('copy-btn').addEventListener('click', () => {
    if (!currentName) return;
    navigator.clipboard.writeText(currentName.name).then(() => {
      const btn = document.getElementById('copy-btn');
      const orig = btn.innerHTML;
      btn.innerHTML = '<span>&#x2713;</span> COPIED';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.classList.remove('copied');
      }, 1500);
    });
  });

  // Save
  document.getElementById('save-btn').addEventListener('click', () => {
    if (!currentName) return;
    addToSaved(currentName);
  });

  // Claim modal
  const claimOverlay = document.getElementById('claim-overlay');

  document.getElementById('claim-btn').addEventListener('click', () => {
    if (!currentName) return;
    document.getElementById('claim-name-display').textContent = currentName.name;
    document.getElementById('claim-issue-btn').href = buildClaimIssueURL(currentName.name, currentName.type);
    claimOverlay.classList.remove('hidden');
  });

  document.getElementById('claim-cancel-btn').addEventListener('click', () => {
    claimOverlay.classList.add('hidden');
  });

  claimOverlay.addEventListener('click', e => {
    if (e.target === claimOverlay) claimOverlay.classList.add('hidden');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') claimOverlay.classList.add('hidden');
  });

  // Flag as real name — pre-fills submit form and scrolls to it
  document.getElementById('flag-btn').addEventListener('click', () => {
    if (!currentName) return;
    document.getElementById('submit-name-input').value = currentName.name;
    document.getElementById('submit-type-select').value = currentName.type;
    document.getElementById('submit-name-input').scrollIntoView({ behavior: 'smooth', block: 'center' });
    document.getElementById('submit-name-input').focus();
  });

  // Submit known name — opens pre-filled GitHub issue
  document.getElementById('submit-known-btn').addEventListener('click', () => {
    const name = document.getElementById('submit-name-input').value.trim();
    const type = document.getElementById('submit-type-select').value;
    const source = document.getElementById('submit-source-input').value.trim();
    if (!name) {
      document.getElementById('submit-name-input').focus();
      return;
    }
    if (!source) {
      document.getElementById('submit-source-input').focus();
      return;
    }
    window.open(buildIssueURL(name, type, source), '_blank');
  });

  // Clear saved
  document.getElementById('clear-saved-btn').addEventListener('click', () => {
    savedNames = [];
    renderSaved();
  });

  // Export
  document.getElementById('export-btn').addEventListener('click', exportCSV);

  // Stats
  const totalKnown = KNOWN_NAMES.groups.size + KNOWN_NAMES.campaigns.size + KNOWN_NAMES.malware.size;
  document.getElementById('stat-known').textContent =
    `◈ ${totalKnown.toLocaleString()} known threat names loaded`;
});
