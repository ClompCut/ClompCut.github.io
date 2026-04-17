// ============================================================
//  CARD DATABASE — Terapia Strategica Breve CCG
// ============================================================
const CARDS_DB = [
  // === CREATURE PARADOSSALI ===
  {
    id: 'drago_sintomo',
    name: 'Drago del Sintomo',
    type: 'creature',
    subtype: 'Creatura Paradoxalis',
    cost: 4,
    atk: 5,
    hp: 4,
    emoji: '🐉',
    desc: 'Più lo combatti, più diventa forte. "Prescrivi il sintomo" per domarlo.',
    ability: 'symptom_growth',
    abilityDesc: 'All\'inizio del tuo turno, +1 ATK per ogni turno in campo.'
  },
  {
    id: 'fenice_paradosso',
    name: 'Fenice del Paradosso',
    type: 'creature',
    subtype: 'Creatura Paradoxalis',
    cost: 3,
    atk: 2,
    hp: 3,
    emoji: '🦅',
    desc: 'Rinasce dalle proprie ceneri attraverso il contro-paradosso.',
    ability: 'rebirth',
    abilityDesc: 'Quando muore, torna in campo con 1 HP e +1 ATK.'
  },
  {
    id: 'specchio_infranto',
    name: 'Specchio Infranto',
    type: 'creature',
    subtype: 'Creatura Paradoxalis',
    cost: 2,
    atk: 1,
    hp: 5,
    emoji: '🪞',
    desc: 'Riflette ogni attacco verso il suo mittente. Il tentativo di guardarsi dentro lo frantuma.',
    ability: 'reflect',
    abilityDesc: 'Quando subisce danno, l\'attaccante subisce 1 danno.'
  },
  {
    id: 'granchio_resistenza',
    name: 'Granchio della Resistenza',
    type: 'creature',
    subtype: 'Creatura Paradoxalis',
    cost: 2,
    atk: 2,
    hp: 3,
    emoji: '🦀',
    desc: 'Si muove solo lateralmente. Ogni tentativo di afferrarlo lo rafforza.',
    ability: 'sidestep',
    abilityDesc: 'Ha Provvedimento 1: il primo attacco che lo colpisce non fa danno.'
  },
  {
    id: 'sfinge_cambiamento',
    name: 'Sfinge del Cambiamento',
    type: 'creature',
    subtype: 'Creatura Paradoxalis',
    cost: 5,
    atk: 4,
    hp: 6,
    emoji: '🗿',
    desc: 'Pone enigmi che cambiano la realtà. Chi risponde male resta intrappolato.',
    ability: 'riddle',
    abilityDesc: 'Quando entra in campo: l\'avversario scarta una carta a caso.'
  },
  {
    id: 'ouroboros',
    name: 'Ouroboros',
    type: 'creature',
    subtype: 'Creatura Paradoxalis',
    cost: 6,
    atk: 7,
    hp: 7,
    emoji: '🐍',
    desc: 'Il serpente che divora se stesso. Simbolo del ciclo infinito del problema.',
    ability: 'eternal_cycle',
    abilityDesc: 'Alla fine del turno, cura 2 HP. Non può morire per effetto del tempo.'
  },
  {
    id: 'ombra_paura',
    name: 'Ombra della Paura',
    type: 'creature',
    subtype: 'Creatura Paradoxalis',
    cost: 1,
    atk: 1,
    hp: 1,
    emoji: '👤',
    desc: 'Cresce con la paura che incute. Più la temi, più diventa grande.',
    ability: 'fear_growth',
    abilityDesc: '+1/+1 per ogni carta nella mano dell\'avversario.'
  },
  {
    id: 'labirinto_ossessione',
    name: 'Labirinto dell\'Ossessione',
    type: 'creature',
    subtype: 'Creatura Paradoxalis',
    cost: 3,
    atk: 3,
    hp: 4,
    emoji: '🌀',
    desc: 'Chi vi entra non trova mai l\'uscita. I tentativi di soluzione peggiorano la trappola.',
    ability: 'trap',
    abilityDesc: 'Le creature nemiche attaccano con -1 ATK mentre è in campo.'
  },

  // === TECNICHE STRATEGICO-BREVE ===
  {
    id: 'prescrizione_sintomo',
    name: 'Prescrizione del Sintomo',
    type: 'technique',
    subtype: 'Tecnica Paradossale',
    cost: 2,
    emoji: '💊',
    desc: '"Devi avere il sintomo almeno 3 volte al giorno". Il sintomo perde potere.',
    effect: 'prescribe',
    effectDesc: 'Distrugge una creatura nemica con ATK ≥ 4. Cura 3 HP al giocatore.'
  },
  {
    id: 'peggioramento',
    name: 'Peggioramento Strategico',
    type: 'technique',
    subtype: 'Tecnica Paradossale',
    cost: 3,
    emoji: '📉',
    desc: '"Peggiora deliberatamente la situazione". Il cliente realizza di controllarla.',
    effect: 'worsen',
    effectDesc: 'Una creatura nemica attacta il suo controllore. Pesca 1 carta.'
  },
  {
    id: 'diario_appuntamenti',
    name: 'Diario degli Appuntamenti',
    type: 'technique',
    subtype: 'Tecnica di Monitoraggio',
    cost: 1,
    emoji: '📓',
    desc: '"Annota ogni volta che il problema si presenta". La consapevolezza rompe il ciclo.',
    effect: 'diary',
    effectDesc: 'Blocca tutte le creature nemiche questo turno. Pesca 2 carte.'
  },
  {
    id: 'riformulazione',
    name: 'Riformulazione',
    type: 'technique',
    subtype: 'Tecnica di Ristrutturazione',
    cost: 2,
    emoji: '🔄',
    desc: 'Cambia il significato del problema. Non è un difetto, è una risorsa nascosta.',
    effect: 'reframe',
    effectDesc: 'Scambia ATK e HP di una creatura nemica. Pesca 1 carta.'
  },
  {
    id: 'profezia',
    name: 'Profezia Autoavverante',
    type: 'technique',
    subtype: 'Tecnica Predittiva',
    cost: 4,
    emoji: '🔮',
    desc: '"Ciò che temi accadrà, ma tu sarai pronto". La paura diventa alleata.',
    effect: 'prophecy',
    effectDesc: 'Infligge 4 danni all\'avversario. Se ha creature in campo, infligge 6.'
  },
  {
    id: 'rottura_rituale',
    name: 'Rottura del Rituali',
    type: 'technique',
    subtype: 'Tecnica Comportamentale',
    cost: 2,
    emoji: '⚡',
    desc: 'Interrompe la sequenza compulsiva con un\'azione imprevedibile.',
    effect: 'break_ritual',
    effectDesc: 'Distrugge tutte le carte tecnica in campo. Infligge 2 danni per ognuna.'
  },
  {
    id: 'evocazione',
    name: 'Evocazione delle Risorse',
    type: 'technique',
    subtype: 'Tecnica di Attivazione',
    cost: 1,
    emoji: '✨',
    desc: '"Hai già dentro di te la soluzione". Attiva le risorse latenti del cliente.',
    effect: 'evoke',
    effectDesc: 'Evoca una creatura 2/2 dal mazzo. Guadagni 1 mana extra questo turno.'
  },
  {
    id: 'paradosso_terapeutico',
    name: 'Paradosso Terapeutico',
    type: 'technique',
    subtype: 'Tecnica Maestra',
    cost: 5,
    emoji: '♾️',
    desc: 'L\'intervento supremo: ordinare di non cambiare. Il cambiamento avviene da solo.',
    effect: 'master_paradox',
    effectDesc: 'Tutte le creature nemiche passano sotto il tuo controllo. Pesca 3 carte.'
  }
];

// ============================================================
//  GAME STATE
// ============================================================
let gameState = {
  turn: 1,
  phase: 'main', // draw, main, combat, end
  playerHP: 30,
  playerMaxHP: 30,
  playerMana: 1,
  playerMaxMana: 1,
  playerHand: [],
  playerDeck: [],
  playerField: [],
  playerManaSpent: 0,

  enemyHP: 30,
  enemyMaxHP: 30,
  enemyMana: 1,
  enemyMaxMana: 1,
  enemyHand: [],
  enemyDeck: [],
  enemyField: [],

  selectedCard: null,
  selectedFieldCard: null,
  turnOwner: 'player',
  gameOver: false,
  attackMode: false
};

// ============================================================
//  DECK BUILDING
// ============================================================
function buildDeck() {
  let deck = [];
  // 2 copies of each card
  CARDS_DB.forEach(card => {
    deck.push({...card, uid: Math.random().toString(36).substr(2,9)});
    deck.push({...card, uid: Math.random().toString(36).substr(2,9)});
  });
  // Shuffle
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

// ============================================================
//  INIT GAME
// ============================================================
function initGame() {
  gameState.playerDeck = buildDeck();
  gameState.enemyDeck = buildDeck();

  // Draw starting hands (5 cards)
  for (let i = 0; i < 5; i++) {
    gameState.playerHand.push(gameState.playerDeck.pop());
    gameState.enemyHand.push(gameState.enemyDeck.pop());
  }

  updateUI();
  addLog('Il duello inizia! La Terapia Strategica Breve è la tua arma.', '');
  addLog('Seleziona una carta dalla tua mano per giocarla.', '');
}

// ============================================================
//  THREE.JS 3D SCENE
// ============================================================
let scene, camera, renderer, clock;
let battlefield, playerSummonZone, enemySummonZone;
let particles = [];
let summonedMeshes = [];
let cameraDrag = {
  active: false,
  startX: 0,
  startY: 0,
  yaw: 0,
  pitch: 0,
  radius: 0,
  speed: 0.005
};

function initThreeJS() {
  clock = new THREE.Clock();

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0a12);
  scene.fog = new THREE.FogExp2(0x0a0a12, 0.015);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(0, 12, 18);
  camera.lookAt(0, 0, 0);

  cameraDrag.radius = camera.position.length();
  cameraDrag.pitch = Math.asin(camera.position.y / cameraDrag.radius);
  cameraDrag.yaw = Math.atan2(camera.position.x, camera.position.z);

  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas'), antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  // Lights
  const ambientLight = new THREE.AmbientLight(0x222244, 0.5);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffeedd, 1.0);
  mainLight.position.set(5, 15, 10);
  mainLight.castShadow = true;
  mainLight.shadow.mapSize.set(2048, 2048);
  mainLight.shadow.camera.near = 0.5;
  mainLight.shadow.camera.far = 50;
  mainLight.shadow.camera.left = -20;
  mainLight.shadow.camera.right = 20;
  mainLight.shadow.camera.top = 20;
  mainLight.shadow.camera.bottom = -20;
  scene.add(mainLight);

  const purpleLight = new THREE.PointLight(0x8844ff, 2, 25);
  purpleLight.position.set(-8, 5, -5);
  scene.add(purpleLight);

  const blueLight = new THREE.PointLight(0x4488ff, 1.5, 20);
  blueLight.position.set(8, 3, 5);
  scene.add(blueLight);

  const redLight = new THREE.PointLight(0xff4444, 1, 20);
  redLight.position.set(0, 3, -8);
  scene.add(redLight);

  // Ground / Battlefield
  createBattlefield();

  // Ambient particles
  createAmbientParticles();

  renderer.domElement.addEventListener('mousedown', onCanvasMouseDown);
  window.addEventListener('mousemove', onCanvasMouseMove);
  window.addEventListener('mouseup', onCanvasMouseUp);
  window.addEventListener('resize', onResize);
  animate();
}

function onCanvasMouseDown(event) {
  if (event.button !== 0) return;
  if (event.target !== renderer.domElement) return;

  const topElement = document.elementFromPoint(event.clientX, event.clientY);
  if (topElement && topElement !== renderer.domElement && !renderer.domElement.contains(topElement)) {
    return;
  }

  cameraDrag.active = true;
  cameraDrag.startX = event.clientX;
  cameraDrag.startY = event.clientY;
  cameraDrag.pitch = Math.asin(camera.position.y / cameraDrag.radius);
  cameraDrag.yaw = Math.atan2(camera.position.x, camera.position.z);
}

function onCanvasMouseMove(event) {
  if (!cameraDrag.active) return;

  const dx = event.clientX - cameraDrag.startX;
  const dy = event.clientY - cameraDrag.startY;

  cameraDrag.yaw += dx * cameraDrag.speed;
  cameraDrag.pitch += dy * cameraDrag.speed;
  cameraDrag.pitch = Math.max(0.2, Math.min(1.4, cameraDrag.pitch));

  const x = cameraDrag.radius * Math.cos(cameraDrag.pitch) * Math.sin(cameraDrag.yaw);
  const y = cameraDrag.radius * Math.sin(cameraDrag.pitch);
  const z = cameraDrag.radius * Math.cos(cameraDrag.pitch) * Math.cos(cameraDrag.yaw);

  camera.position.set(x, y, z);
  camera.lookAt(0, 0, 0);

  cameraDrag.startX = event.clientX;
  cameraDrag.startY = event.clientY;
}

function onCanvasMouseUp(event) {
  if (event.button !== 0) return;
  cameraDrag.active = false;
}

function createBattlefield() {
  // Main ground
  const groundGeo = new THREE.PlaneGeometry(40, 30, 40, 30);
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x111122,
    roughness: 0.8,
    metalness: 0.3
  });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Grid lines
  const gridHelper = new THREE.GridHelper(40, 40, 0x222244, 0x111133);
  gridHelper.position.y = 0.01;
  scene.add(gridHelper);

  // Center line
  const lineGeo = new THREE.PlaneGeometry(40, 0.1);
  const lineMat = new THREE.MeshBasicMaterial({ color: 0x444466, transparent: true, opacity: 0.5 });
  const centerLine = new THREE.Mesh(lineGeo, lineMat);
  centerLine.rotation.x = -Math.PI / 2;
  centerLine.position.y = 0.02;
  scene.add(centerLine);

  // Player summon zone (front)
  const playerZoneGeo = new THREE.PlaneGeometry(12, 4);
  const playerZoneMat = new THREE.MeshBasicMaterial({
    color: 0x4422aa,
    transparent: true,
    opacity: 0.08,
    side: THREE.DoubleSide
  });
  playerSummonZone = new THREE.Mesh(playerZoneGeo, playerZoneMat);
  playerSummonZone.rotation.x = -Math.PI / 2;
  playerSummonZone.position.set(0, 0.03, 2);
  scene.add(playerSummonZone);

  // Enemy summon zone (back)
  const enemyZoneMat = new THREE.MeshBasicMaterial({
    color: 0xaa2222,
    transparent: true,
    opacity: 0.08,
    side: THREE.DoubleSide
  });
  enemySummonZone = new THREE.Mesh(playerZoneGeo.clone(), enemyZoneMat);
  enemySummonZone.rotation.x = -Math.PI / 2;
  enemySummonZone.position.set(0, 0.03, -2);
  scene.add(enemySummonZone);

  // Decorative pillars
  for (let i = -2; i <= 2; i++) {
    createPillar(i * 6, 0.01, 8, 0x332266);
    createPillar(i * 6, 0.01, -8, 0x662233);
  }
}

function createPillar(x, y, z, color) {
  const pillarGeo = new THREE.CylinderGeometry(0.3, 0.4, 4, 8);
  const pillarMat = new THREE.MeshStandardMaterial({
    color: color,
    roughness: 0.6,
    metalness: 0.5,
    emissive: color,
    emissiveIntensity: 0.1
  });
  const pillar = new THREE.Mesh(pillarGeo, pillarMat);
  pillar.position.set(x, y + 2, z);
  pillar.castShadow = true;
  scene.add(pillar);

  // Orb on top
  const orbGeo = new THREE.SphereGeometry(0.4, 16, 16);
  const orbMat = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    emissive: 0xffaa00,
    emissiveIntensity: 0.5,
    roughness: 0.2,
    metalness: 0.8
  });
  const orb = new THREE.Mesh(orbGeo, orbMat);
  orb.position.set(x, y + 4.2, z);
  orb.userData = { baseY: y + 4.2, phase: Math.random() * Math.PI * 2 };
  scene.add(orb);
  particles.push({ mesh: orb, type: 'orb' });
}

function createAmbientParticles() {
  const particleCount = 200;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 1] = Math.random() * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

    const c = new THREE.Color();
    c.setHSL(Math.random() * 0.2 + 0.6, 0.8, 0.6);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.08,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(geo, mat);
  particleSystem.userData.type = 'ambient';
  scene.add(particleSystem);
  particles.push({ mesh: particleSystem, type: 'ambient' });
}

function createCreatureMesh(card, isPlayer) {
  const group = new THREE.Group();
  const color = isPlayer ? 0x8844ff : 0xff4444;
  const emissive = isPlayer ? 0x4422aa : 0xaa2222;

  // Base platform
  const baseGeo = new THREE.CylinderGeometry(1.2, 1.4, 0.2, 16);
  const baseMat = new THREE.MeshStandardMaterial({
    color: color,
    emissive: emissive,
    emissiveIntensity: 0.3,
    roughness: 0.4,
    metalness: 0.6
  });
  const base = new THREE.Mesh(baseGeo, baseMat);
  base.position.y = 0.1;
  base.receiveShadow = true;
  group.add(base);

  // Creature body — different shapes based on card
  let body;
  const bodyMat = new THREE.MeshStandardMaterial({
    color: color,
    emissive: emissive,
    emissiveIntensity: 0.4,
    roughness: 0.3,
    metalness: 0.5
  });

  const bodyMat2 = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    emissive: 0xaa8800,
    emissiveIntensity: 0.6,
    roughness: 0.2,
    metalness: 0.8
  });

  switch(card.id) {
    case 'drago_sintomo': {
      // Dragon body - large box with wings
      body = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2.5, 1), bodyMat);
      body.position.y = 1.5;
      body.castShadow = true;
      group.add(body);

      // Wings
      const wingGeo = new THREE.BoxGeometry(3, 0.1, 1.2);
      const wing1 = new THREE.Mesh(wingGeo, bodyMat2);
      wing1.position.set(0, 2.5, 0);
      wing1.rotation.z = 0.3;
      wing1.castShadow = true;
      group.add(wing1);
      const wing2 = wing1.clone();
      wing2.rotation.z = -0.3;
      group.add(wing2);

      // Head
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), bodyMat2);
      head.position.set(0, 3, 0.6);
      head.castShadow = true;
      group.add(head);

      // Fire particles
      for (let i = 0; i < 5; i++) {
        const fire = new THREE.Mesh(
          new THREE.SphereGeometry(0.1 + Math.random() * 0.15, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0xff6600, transparent: true, opacity: 0.8 })
        );
        fire.position.set(
          (Math.random() - 0.5) * 0.5,
          3.5 + Math.random() * 0.5,
          0.8 + Math.random() * 0.3
        );
        fire.userData = { baseY: fire.position.y, phase: Math.random() * Math.PI * 2, speed: 2 + Math.random() * 3 };
        group.add(fire);
        particles.push({ mesh: fire, type: 'fire' });
      }
      break;
    }

    case 'fenice_paradosso': {
      // Phoenix - elegant cone/tall shape
      body = new THREE.Mesh(new THREE.ConeGeometry(0.8, 3, 8), bodyMat);
      body.position.y = 1.7;
      body.castShadow = true;
      group.add(body);

      // Tail feathers
      for (let i = 0; i < 5; i++) {
        const feather = new THREE.Mesh(
          new THREE.ConeGeometry(0.15, 1.5, 4),
          new THREE.MeshStandardMaterial({ color: 0xff8844, emissive: 0xff4400, emissiveIntensity: 0.3 })
        );
        feather.position.set(
          (Math.random() - 0.5) * 0.6,
          0.8,
          (Math.random() - 0.5) * 0.6
        );
        feather.rotation.x = Math.PI * 0.3;
        group.add(feather);
      }

      // Glow aura
      const aura = new THREE.Mesh(
        new THREE.SphereGeometry(2, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xffaa44, transparent: true, opacity: 0.1, side: THREE.BackSide })
      );
      aura.position.y = 2;
      group.add(aura);
      break;
    }

    case 'specchio_infranto': {
      // Mirror - flat diamond shapes
      for (let i = 0; i < 7; i++) {
        const shard = new THREE.Mesh(
          new THREE.OctahedronGeometry(0.3 + Math.random() * 0.3, 0),
          new THREE.MeshStandardMaterial({
            color: 0xaaccff,
            emissive: 0x4466aa,
            emissiveIntensity: 0.3,
            roughness: 0.1,
            metalness: 0.9
          })
        );
        shard.position.set(
          (Math.random() - 0.5) * 1.5,
          1 + Math.random() * 1.5,
          (Math.random() - 0.5) * 1
        );
        shard.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        shard.userData = { rotSpeed: (Math.random() - 0.5) * 0.02 };
        shard.castShadow = true;
        group.add(shard);
        particles.push({ mesh: shard, type: 'shard' });
      }
      break;
    }

    case 'granchio_resistenza': {
      // Crab - wide body with claws
      body = new THREE.Mesh(new THREE.BoxGeometry(2, 0.8, 1.5), bodyMat);
      body.position.y = 1;
      body.castShadow = true;
      group.add(body);

      // Claws
      const clawGeo = new THREE.BoxGeometry(0.6, 0.6, 0.8);
      const claw1 = new THREE.Mesh(clawGeo, bodyMat2);
      claw1.position.set(-1.3, 1.2, 0.5);
      claw1.rotation.z = 0.4;
      group.add(claw1);
      const claw2 = claw1.clone();
      claw2.position.set(1.3, 1.2, 0.5);
      claw2.rotation.z = -0.4;
      group.add(claw2);

      // Shell
      const shell = new THREE.Mesh(
        new THREE.SphereGeometry(0.9, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
        new THREE.MeshStandardMaterial({ color: 0x884422, roughness: 0.7 })
      );
      shell.position.y = 1.2;
      group.add(shell);
      break;
    }

    case 'sfinge_cambiamento': {
      // Sphinx - seated cat with human head
      body = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.8, 2), bodyMat);
      body.position.y = 1.1;
      body.castShadow = true;
      group.add(body);

      // Head (human-like)
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 12), bodyMat2);
      head.position.set(0, 2.3, 0.8);
      head.castShadow = true;
      group.add(head);

      // Crown
      const crown = new THREE.Mesh(
        new THREE.ConeGeometry(0.5, 0.8, 4),
        new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xaa8800, emissiveIntensity: 0.5 })
      );
      crown.position.set(0, 2.9, 0.8);
      group.add(crown);
      break;
    }

    case 'ouroboros': {
      // Ouroboros - torus ring
      body = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.4, 12, 24), bodyMat);
      body.position.y = 2;
      body.rotation.x = Math.PI / 4;
      body.castShadow = true;
      group.add(body);

      // Head at the end
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 12), bodyMat2);
      head.position.set(1.5, 2, 0);
      head.castShadow = true;
      group.add(head);

      // Inner glow
      const innerGlow = new THREE.Mesh(
        new THREE.SphereGeometry(1.2, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0x44ff44, transparent: true, opacity: 0.15, side: THREE.BackSide })
      );
      innerGlow.position.y = 2;
      group.add(innerGlow);
      break;
    }

    case 'ombra_paura': {
      // Shadow - tall dark shape
      body = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.8, 3, 8),
        new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9, transparent: true, opacity: 0.8 })
      );
      body.position.y = 1.5;
      group.add(body);

      // Eyes
      const eyeGeo = new THREE.SphereGeometry(0.12, 8, 8);
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const eye1 = new THREE.Mesh(eyeGeo, eyeMat);
      eye1.position.set(-0.2, 2.5, 0.5);
      group.add(eye1);
      const eye2 = eye1.clone();
      eye2.position.set(0.2, 2.5, 0.5);
      group.add(eye2);
      break;
    }

    case 'labirinto_ossessione': {
      // Labyrinth - maze-like structure
      for (let i = 0; i < 12; i++) {
        const wall = new THREE.Mesh(
          new THREE.BoxGeometry(0.15, 0.5 + Math.random() * 1.5, 0.8 + Math.random()),
          bodyMat
        );
        wall.position.set(
          (Math.random() - 0.5) * 2,
          0.5 + Math.random() * 0.5,
          (Math.random() - 0.5) * 2
        );
        wall.castShadow = true;
        group.add(wall);
      }

      // Center orb
      const centerOrb = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0xff00ff, transparent: true, opacity: 0.8 })
      );
      centerOrb.position.y = 2;
      group.add(centerOrb);
      break;
    }

    default: {
      // Generic creature
      body = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), bodyMat);
      body.position.y = 1.2;
      body.castShadow = true;
      group.add(body);

      const top = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 12), bodyMat2);
      top.position.y = 2.5;
      top.castShadow = true;
      group.add(top);
    }
  }

  // Position in the field
  const zPos = isPlayer ? 2 : -2;
  group.position.set(0, 0, zPos);

  // Summon animation
  group.scale.set(0, 0, 0);
  group.userData = {
    targetScale: 1,
    summonTime: 0,
    card: card,
    isPlayer: isPlayer,
    currentHP: card.hp,
    maxHP: card.hp,
    currentATK: card.atk,
    hasAttacked: false,
    uid: card.uid
  };

  scene.add(group);
  summonedMeshes.push(group);

  // Summon particles
  createSummonParticles(group.position, color);

  return group;
}

function removeCreatureMesh(card, isPlayer) {
  const meshIndex = summonedMeshes.findIndex(m => m.userData.uid === card.uid && m.userData.isPlayer === isPlayer);
  if (meshIndex !== -1) {
    const mesh = summonedMeshes[meshIndex];
    scene.remove(mesh);
    summonedMeshes.splice(meshIndex, 1);
  }
}

function cleanupDeadCreatures() {
  gameState.playerField = gameState.playerField.filter(card => {
    const hp = card._currentHP !== undefined ? card._currentHP : card.hp;
    if (hp <= 0) {
      removeCreatureMesh(card, true);
      return false;
    }
    return true;
  });

  gameState.enemyField = gameState.enemyField.filter(card => {
    const hp = card._currentHP !== undefined ? card._currentHP : card.hp;
    if (hp <= 0) {
      removeCreatureMesh(card, false);
      return false;
    }
    return true;
  });
}

function createSummonParticles(position, color) {
  const count = 30;
  for (let i = 0; i < count; i++) {
    const geo = new THREE.SphereGeometry(0.05 + Math.random() * 0.1, 6, 6);
    const mat = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1
    });
    const p = new THREE.Mesh(geo, mat);
    p.position.copy(position);
    p.position.y += 0.5;
    p.userData = {
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        Math.random() * 0.3 + 0.1,
        (Math.random() - 0.5) * 0.3
      ),
      life: 1
    };
    scene.add(p);
    particles.push({ mesh: p, type: 'summon' });
  }
}

function createDamageParticles(position, isPlayer) {
  const color = isPlayer ? 0x44aaff : 0xff4444;
  for (let i = 0; i < 20; i++) {
    const geo = new THREE.SphereGeometry(0.05 + Math.random() * 0.08, 6, 6);
    const mat = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 1 });
    const p = new THREE.Mesh(geo, mat);
    p.position.copy(position);
    p.position.y += 1;
    p.userData = {
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.4,
        Math.random() * 0.4,
        (Math.random() - 0.5) * 0.4
      ),
      life: 1
    };
    scene.add(p);
    particles.push({ mesh: p, type: 'damage' });
  }
}

function updateParticles(delta) {
  particles.forEach((p, index) => {
    if (p.type === 'summon' || p.type === 'damage') {
      p.mesh.position.add(p.mesh.userData.velocity);
      p.mesh.userData.velocity.y -= delta * 0.5;
      p.mesh.userData.life -= delta * 1.5;
      p.mesh.material.opacity = Math.max(0, p.mesh.userData.life);
      if (p.mesh.userData.life <= 0) {
        scene.remove(p.mesh);
        particles.splice(index, 1);
      }
    } else if (p.type === 'orb') {
      p.mesh.position.y = p.mesh.userData.baseY + Math.sin(Date.now() * 0.002 + p.mesh.userData.phase) * 0.3;
    } else if (p.type === 'ambient') {
      const positions = p.mesh.geometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += Math.sin(Date.now() * 0.001 + i) * 0.002;
      }
      p.mesh.geometry.attributes.position.needsUpdate = true;
    } else if (p.type === 'fire') {
      p.mesh.position.y = p.mesh.userData.baseY + Math.sin(Date.now() * 0.005 * p.mesh.userData.speed + p.mesh.userData.phase) * 0.3;
    } else if (p.type === 'shard') {
      if (p.mesh.userData.rotSpeed) {
        p.mesh.rotation.y += p.mesh.userData.rotSpeed;
      }
    }
  });
}

function updateSummonedMeshes() {
  summonedMeshes.forEach(mesh => {
    const d = mesh.userData;
    // Summon animation
    if (d.summonTime < 1) {
      d.summonTime += 0.03;
      const t = d.summonTime;
      const scale = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      mesh.scale.set(scale, scale, scale);
    }

    // Idle animation
    mesh.position.y = Math.sin(Date.now() * 0.001 + mesh.id) * 0.1;
    mesh.rotation.y += 0.003;

    // Update position based on field index
    updateMeshPosition(mesh);
  });
}

function updateMeshPosition(mesh) {
  const d = mesh.userData;
  const field = d.isPlayer ? gameState.playerField : gameState.enemyField;
  const idx = field.findIndex(c => c.uid === d.uid);
  if (idx !== -1) {
    const total = field.length;
    const spacing = 2.5;
    const startX = -(total - 1) * spacing / 2;
    mesh.position.x = startX + idx * spacing;
    mesh.position.z = d.isPlayer ? 2 : -2;
  }
}

function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  updateParticles(delta);
  updateSummonedMeshes();

  // Camera gentle sway
  const time = Date.now() * 0.0003;
  camera.position.x = Math.sin(time) * 1;
  camera.lookAt(0, 1, 0);

  renderer.render(scene, camera);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// ============================================================
//  UI FUNCTIONS
// ============================================================
function updateUI() {
  cleanupDeadCreatures();
  updateHPBars();
  updateManaDisplay();
  updateHand();
  updateField();
  updateDeckCount();
  updateTurnIndicator();
  updatePhaseIndicator();
}

function updateHPBars() {
  const playerPct = (gameState.playerHP / gameState.playerMaxHP) * 100;
  const enemyPct = (gameState.enemyHP / gameState.enemyMaxHP) * 100;

  document.getElementById('player-hp-bar')?.style && null;

  const enemyBar = document.getElementById('enemy-hp-bar');
  if (enemyBar) {
    enemyBar.style.width = enemyPct + '%';
  }
  const enemyText = document.getElementById('enemy-hp-text');
  if (enemyText) enemyText.textContent = gameState.enemyHP;

  // Player HP is in the bottom bar
  let playerBarEl = document.getElementById('player-hp-bar');
  if (!playerBarEl) {
    // Create it if missing
    const barContainer = document.createElement('div');
    barContainer.className = 'hp-bar-container';
    barContainer.innerHTML = '<div class="hp-bar player-hp" id="player-hp-bar" style="width:100%"></div><div class="hp-text"><span id="player-hp-text">30</span> / 30</div>';
    const playerBar = document.querySelector('.player-bar.player .player-info');
    if (playerBar) playerBar.appendChild(barContainer);
    playerBarEl = document.getElementById('player-hp-bar');
  }
  if (playerBarEl) playerBarEl.style.width = playerPct + '%';
  const playerText = document.getElementById('player-hp-text');
  if (playerText) playerText.textContent = gameState.playerHP;
}

function updateManaDisplay() {
  const manaContainer = document.querySelector('.player-bar.player .mana-display') ||
    (() => {
      const div = document.createElement('div');
      div.className = 'mana-display';
      div.id = 'player-mana';
      document.querySelector('.player-bar.player').appendChild(div);
      return div;
    })();

  manaContainer.innerHTML = '';
  for (let i = 0; i < gameState.playerMaxMana; i++) {
    const gem = document.createElement('div');
    gem.className = 'mana-gem' + (i >= gameState.playerMana - gameState.playerManaSpent ? ' empty' : '');
    manaContainer.appendChild(gem);
  }

  const enemyManaDiv = document.getElementById('enemy-mana');
  if (enemyManaDiv) {
    enemyManaDiv.innerHTML = '';
    for (let i = 0; i < gameState.enemyMaxMana; i++) {
      const gem = document.createElement('div');
      gem.className = 'mana-gem' + (i >= gameState.enemyMana ? ' empty' : '');
      enemyManaDiv.appendChild(gem);
    }
  }
}

function updateHand() {
  const handEl = document.getElementById('player-hand');
  handEl.innerHTML = '';

  gameState.playerHand.forEach((card, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = `card ${card.type}`;
    if (gameState.selectedCard === index) cardEl.classList.add('selected');

    const canPlay = card.cost <= (gameState.playerMana - gameState.playerManaSpent) &&
                    gameState.turnOwner === 'player' &&
                    !gameState.gameOver;

    cardEl.style.opacity = canPlay ? '1' : '0.5';

    cardEl.innerHTML = `
      <div class="card-inner">
        <div class="card-header">${card.name}</div>
        <div class="card-art">${card.emoji}</div>
        <div class="card-body">
          <div class="card-type-label">${card.subtype}</div>
          <div class="card-desc">${card.desc}</div>
        </div>
        <div class="card-footer">
          <div class="card-cost">${card.cost}</div>
          ${card.type === 'creature' ? `<div class="card-stats"><span class="stat-atk">⚔${card.atk}</span><span class="stat-def">❤${card.hp}</span></div>` : ''}
        </div>
      </div>
    `;

    cardEl.addEventListener('click', () => selectCard(index));
    cardEl.addEventListener('mouseenter', (e) => showTooltip(e, card));
    cardEl.addEventListener('mouseleave', hideTooltip);

    handEl.appendChild(cardEl);
  });
}

function updateField() {
  const playerFieldEl = document.getElementById('player-field');
  playerFieldEl.innerHTML = '';

  gameState.playerField.forEach((card, index) => {
    const mesh = summonedMeshes.find(m => m.userData.uid === card.uid && m.userData.isPlayer);
    const el = document.createElement('div');
    el.className = 'field-card';
    if (gameState.attackMode) el.classList.add('targetable');

    el.innerHTML = `
      <div class="card-inner">
        <div class="fc-art">${card.emoji}</div>
        <div class="fc-name">${card.name}</div>
        <div class="fc-stats">
          <span class="stat-atk">⚔${card._currentATK || card.atk}</span>
          <span class="stat-def">❤${card._currentHP || card.hp}</span>
        </div>
      </div>
    `;

    if (gameState.attackMode) {
      el.addEventListener('click', () => attackCreature(index, 'player'));
    }

    playerFieldEl.appendChild(el);
  });

  const enemyFieldEl = document.getElementById('enemy-field');
  enemyFieldEl.innerHTML = '';

  enemyFieldEl.onclick = event => {
    const clickedCard = event.target.closest('.field-card');
    if (clickedCard) return;
    if (!enemyFieldEl.contains(event.target)) return;
    if (gameState.turnOwner !== 'player' || !gameState.attackMode || gameState.selectedCard === null) return;
    const card = gameState.playerHand[gameState.selectedCard];
    if (!card || card.type !== 'creature') return;

    playCardOnTarget(gameState.selectedCard, null, 'enemy');
  };

  gameState.enemyField.forEach((card, index) => {
    const el = document.createElement('div');
    el.className = 'field-card enemy-field-card';
    if (gameState.attackMode || gameState.selectedCard !== null) el.classList.add('targetable');

    el.innerHTML = `
      <div class="card-inner">
        <div class="fc-art">${card.emoji}</div>
        <div class="fc-name">${card.name}</div>
        <div class="fc-stats">
          <span class="stat-atk">⚔${card._currentATK || card.atk}</span>
          <span class="stat-def">❤${card._currentHP || card.hp}</span>
        </div>
      </div>
    `;

    el.addEventListener('click', () => {
      if (gameState.attackMode) {
        attackCreature(index, 'enemy');
      } else if (gameState.selectedCard !== null) {
        playCardOnTarget(gameState.selectedCard, index, 'enemy');
      }
    });

    enemyFieldEl.appendChild(el);
  });
}

function updateDeckCount() {
  const el = document.getElementById('enemy-deck');
  if (el) el.textContent = gameState.enemyDeck.length;
}

function updateTurnIndicator() {
  const el = document.getElementById('turn-indicator');
  if (gameState.turnOwner === 'player') {
    el.textContent = `Turno ${gameState.turn} — La Tua Mossa`;
    el.style.color = '#ffd700';
  } else {
    el.textContent = `Turno ${gameState.turn} — Turno Avversario`;
    el.style.color = '#ff6b6b';
  }
}

function updatePhaseIndicator() {
  const phases = ['draw', 'main', 'combat', 'end'];
  const dots = document.querySelectorAll('.phase-dot');
  const currentIdx = phases.indexOf(gameState.phase);

  dots.forEach((dot, i) => {
    dot.classList.remove('active', 'completed');
    if (i === currentIdx) dot.classList.add('active');
    else if (i < currentIdx) dot.classList.add('completed');
  });
}

// ============================================================
//  GAME LOGIC
// ============================================================
function selectCard(index) {
  if (gameState.turnOwner !== 'player' || gameState.gameOver) return;

  const card = gameState.playerHand[index];
  const availableMana = gameState.playerMana - gameState.playerManaSpent;

  if (card.cost > availableMana) {
    addLog(`Mana insufficiente per ${card.name}!`, '');
    return;
  }

  if (gameState.selectedCard === index) {
    // Deselect
    gameState.selectedCard = null;
    gameState.attackMode = false;
  } else {
    gameState.selectedCard = index;

    if (card.type === 'technique') {
      // Technique: play immediately
      playCard(index);
      gameState.selectedCard = null;
      return;
    } else if (card.type === 'creature') {
      // Creature: select target or place on empty field
      if (gameState.enemyField.length > 0) {
        addLog(`Seleziona un bersaglio per ${card.name}, oppure clicca su un'area vuota.`, '');
        gameState.attackMode = true;
      } else {
        playCard(index);
        gameState.selectedCard = null;
      }
    }
  }

  updateUI();
}

function playCard(index) {
  const card = gameState.playerHand[index];
  gameState.playerManaSpent += card.cost;

  if (card.type === 'creature') {
    const fieldCard = {
      ...card,
      _currentHP: card.hp,
      _currentHPMax: card.hp,
      _currentATK: card.atk,
      hasAttacked: false
    };
    gameState.playerField.push(fieldCard);

    createCreatureMesh(card, true);

    addLog(`🐾 Evocato: ${card.name} (${card.atk}/${card.hp})`, 'log-summon');

    triggerEnterEffect(fieldCard, 'player');

  } else if (card.type === 'technique') {
    executeTechnique(card, 'player');
    addLog(`✨ Tecnica: ${card.name}`, 'log-tech');
  }

  gameState.playerHand.splice(index, 1);
  updateUI();
}

function playCardOnTarget(handIndex, targetIndex, targetOwner) {
  const card = gameState.playerHand[handIndex];
  if (card.type === 'creature' && targetOwner === 'enemy') {
    if (targetIndex === null) {
      gameState.playerManaSpent += card.cost;
      const fieldCard = {
        ...card,
        _currentHP: card.hp,
        _currentHPMax: card.hp,
        _currentATK: card.atk,
        hasAttacked: false
      };
      gameState.playerField.push(fieldCard);
      createCreatureMesh(card, true);
      addLog(`🐾 Evocato: ${card.name} (${card.atk}/${card.hp})`, 'log-summon');
      triggerEnterEffect(fieldCard, 'player');
      gameState.playerHand.splice(handIndex, 1);
      gameState.selectedCard = null;
      gameState.attackMode = false;
      updateUI();
      return;
    }

    const targetCard = gameState.enemyField[targetIndex];
    const atk = card.atk;

    addLog(`⚔️ ${card.name} attacca ${targetCard.name}!`, '');

    targetCard._currentHP -= atk;

    if (targetCard._currentHP <= 0) {
      addLog(`💀 ${targetCard.name} è stato distrutto!`, 'log-damage');
      gameState.enemyField.splice(targetIndex, 1);
      const mesh = summonedMeshes.find(m => m.userData.uid === targetCard.uid && !m.userData.isPlayer);
      if (mesh) {
        scene.remove(mesh);
        summonedMeshes = summonedMeshes.filter(m => m !== mesh);
      }
    } else {
      addLog(`❤️ ${targetCard.name} ha ${targetCard._currentHP} HP rimasti`, 'log-heal');
    }

    card._currentHP = card.hp - (targetCard._currentATK || targetCard.atk);
    if (card._currentHP <= 0) {
      addLog(`💀 ${card.name} cade in battaglia!`, 'log-damage');
      gameState.playerHand.splice(handIndex, 1);
    } else {
      gameState.playerField.push(card);
      gameState.playerHand.splice(handIndex, 1);
      gameState.playerManaSpent += card.cost;
      createCreatureMesh(card, true);
    }

    gameState.selectedCard = null;
    gameState.attackMode = false;
    updateUI();
  }
}

function attackCreature(fieldIndex, owner) {
  if (gameState.turnOwner !== 'player') return;

  if (owner === 'enemy') {
    let attacker = gameState.selectedFieldCard;
    if (!attacker && gameState.playerField.length > 0) {
      attacker = gameState.playerField[0];
    }

    const target = gameState.enemyField[fieldIndex];
    const atk = attacker._currentATK;

    addLog(`⚔️ ${attacker.name} attacca ${target.name}!`, '');
    target._currentHP -= atk;

    createDamageParticles(
      new THREE.Vector3(0, 1, -6),
      false
    );

    if (target._currentHP <= 0) {
      addLog(`💀 ${target.name} è stato distrutto!`, 'log-damage');
      gameState.enemyField.splice(fieldIndex, 1);
      const mesh = summonedMeshes.find(m => m.userData.uid === target.uid && !m.userData.isPlayer);
      if (mesh) {
        scene.remove(mesh);
        summonedMeshes = summonedMeshes.filter(m => m !== mesh);
      }
    } else {
      attacker._currentHP -= (target._currentATK || target.atk);
      addLog(`↩️ ${target.name} contrattacca! ${attacker.name} ha ${attacker._currentHP} HP`, 'log-damage');
      if (attacker._currentHP <= 0) {
        addLog(`💀 ${attacker.name} cade!`, 'log-damage');
        const idx = gameState.playerField.indexOf(attacker);
        if (idx !== -1) gameState.playerField.splice(idx, 1);
        const mesh = summonedMeshes.find(m => m.userData.uid === attacker.uid && m.userData.isPlayer);
        if (mesh) {
          scene.remove(mesh);
          summonedMeshes = summonedMeshes.filter(m => m !== mesh);
        }
      }
    }

    gameState.attackMode = false;
    gameState.selectedFieldCard = null;
    updateUI();
  }
}

function executeTechnique(card, owner) {
  switch(card.effect) {
    case 'prescribe': {
      const target = gameState.enemyField.find(c => (c._currentATK || c.atk) >= 4);
      if (target) {
        const idx = gameState.enemyField.indexOf(target);
        gameState.enemyField.splice(idx, 1);
        const mesh = summonedMeshes.find(m => m.userData.uid === target.uid && !m.userData.isPlayer);
        if (mesh) { scene.remove(mesh); summonedMeshes = summonedMeshes.filter(m => m !== mesh); }
        addLog(`💊 ${target.name} è stato neutralizzato dalla Prescrizione!`, 'log-tech');
      } else {
        addLog(`💊 Nessuna creatura da prescrivere. Cura 3 HP.`, 'log-heal');
      }
      if (owner === 'player') {
        gameState.playerHP = Math.min(gameState.playerMaxHP, gameState.playerHP + 3);
        addLog(`❤️ +3 HP curati!`, 'log-heal');
      }
      break;
    }

    case 'worsen': {
      if (gameState.enemyField.length > 0) {
        const target = gameState.enemyField[0];
        const dmg = target._currentATK || target.atk;
        gameState.enemyHP -= dmg;
        addLog(`📉 ${target.name} attacca il suo controllore! ${dmg} danni!`, 'log-tech');
      }
      drawCard('player', 1);
      break;
    }

    case 'diary': {
      gameState.enemyField.forEach(c => c.frozen = true);
      drawCard('player', 2);
      addLog(`📓 Creature nemiche congelate questo turno!`, 'log-tech');
      break;
    }

    case 'reframe': {
      if (gameState.enemyField.length > 0) {
        const target = gameState.enemyField[0];
        const temp = target._currentATK;
        target._currentATK = target._currentHP;
        target._currentHP = temp;
        addLog(`🔄 ${target.name}: ATK e HP scambiati! (${target._currentATK}/${target._currentHP})`, 'log-tech');
      }
      drawCard('player', 1);
      break;
    }

    case 'prophecy': {
      let dmg = 4;
      if (gameState.enemyField.length > 0) dmg = 6;
      gameState.enemyHP -= dmg;
      addLog(`🔮 Profezia! ${dmg} danni all'avversario!`, 'log-tech');
      break;
    }

    case 'break_ritual': {
      let totalDmg = 0;
      gameState.enemyField = gameState.enemyField.filter(c => {
        if (c.type === 'technique' || c.ability === 'trap' || c.ability === 'fear_growth') {
          totalDmg += 2;
          const mesh = summonedMeshes.find(m => m.userData.uid === c.uid && !m.userData.isPlayer);
          if (mesh) { scene.remove(mesh); summonedMeshes = summonedMeshes.filter(m => m !== mesh); }
          return false;
        }
        return true;
      });
      if (totalDmg > 0) {
        gameState.enemyHP -= totalDmg;
        addLog(`⚡ ${totalDmg} danni da Rottura del Rituale!`, 'log-tech');
      } else {
        addLog(`⚡ Nessun rituale da rompere.`, 'log-tech');
      }
      break;
    }

    case 'evoke': {
      const evokeCard = {
        id: 'risorsa_evocata',
        name: 'Risorsa Latente',
        type: 'creature',
        subtype: 'Creatura Evocata',
        cost: 0,
        atk: 2,
        hp: 2,
        emoji: '✨',
        desc: 'Una risorsa interiore manifestata.',
        ability: 'none'
      };
      const fieldCard = {
        ...evokeCard,
        _currentHP: 2,
        _currentHPMax: 2,
        _currentATK: 2,
        hasAttacked: false
      };
      gameState.playerField.push(fieldCard);
      createCreatureMesh(evokeCard, true);
      addLog(`✨ Evocata: Risorsa Latente (2/2)`, 'log-summon');
      break;
    }

    case 'master_paradox': {
      while (gameState.enemyField.length > 0) {
        const card = gameState.enemyField.pop();
        card._owner = 'player';
        gameState.playerField.push(card);
        const mesh = summonedMeshes.find(m => m.userData.uid === card.uid && !m.userData.isPlayer);
        if (mesh) {
          mesh.userData.isPlayer = true;
          mesh.children.forEach(c => {
            if (c.material) {
              c.material.color.setHex(0x8844ff);
              c.material.emissive.setHex(0x4422aa);
            }
          });
        }
        addLog(`♾️ ${card.name} passa al tuo controllo!`, 'log-tech');
      }
      drawCard('player', 3);
      break;
    }
  }
}

function triggerEnterEffect(card, owner) {
  if (card.ability === 'riddle' && owner === 'player') {
    if (gameState.enemyHand.length > 0) {
      const idx = Math.floor(Math.random() * gameState.enemyHand.length);
      const discarded = gameState.enemyHand.splice(idx, 1)[0];
      addLog(`🗿 ${card.name}: l'avversario scarta ${discarded.name}!`, 'log-summon');
    }
  }
}

function drawCard(who, count) {
  for (let i = 0; i < count; i++) {
    if (who === 'player' && gameState.playerDeck.length > 0) {
      gameState.playerHand.push(gameState.playerDeck.pop());
    } else if (who === 'enemy' && gameState.enemyDeck.length > 0) {
      gameState.enemyHand.push(gameState.enemyDeck.pop());
    }
  }
}

// ============================================================
//  TURN MANAGEMENT
// ============================================================
function endTurn() {
  if (gameState.turnOwner !== 'player' || gameState.gameOver) return;

  gameState.phase = 'end';
  gameState.selectedCard = null;
  gameState.attackMode = false;

  playerAttackPhase();

  if (checkGameOver()) return;

  gameState.turnOwner = 'enemy';
  updateUI();

  setTimeout(() => {
    enemyTurn();
  }, 1000);
}

function playerAttackPhase() {
  gameState.playerField.forEach(card => {
    if (card.frozen) {
      card.frozen = false;
      return;
    }
    if (gameState.enemyField.length > 0) {
      const target = gameState.enemyField[0];
      const dmg = card._currentATK;
      target._currentHP -= dmg;
      addLog(`⚔️ ${card.name} attacca ${target.name} per ${dmg} danni!`, '');

      const counterDmg = target._currentATK || target.atk;
      card._currentHP -= counterDmg;

      createDamageParticles(new THREE.Vector3(0, 1, -6), false);

      if (target._currentHP <= 0) {
        const idx = gameState.enemyField.indexOf(target);
        gameState.enemyField.splice(idx, 1);
        const mesh = summonedMeshes.find(m => m.userData.uid === target.uid && !m.userData.isPlayer);
        if (mesh) { scene.remove(mesh); summonedMeshes = summonedMeshes.filter(m => m !== mesh); }
        addLog(`💀 ${target.name} distrutto!`, 'log-damage');
      }

      if (card._currentHP <= 0) {
        const idx = gameState.playerField.indexOf(card);
        gameState.playerField.splice(idx, 1);
        const mesh = summonedMeshes.find(m => m.userData.uid === card.uid && m.userData.isPlayer);
        if (mesh) { scene.remove(mesh); summonedMeshes = summonedMeshes.filter(m => m !== mesh); }
        addLog(`💀 ${card.name} cade!`, 'log-damage');
      }
    } else {
      const dmg = card._currentATK;
      gameState.enemyHP -= dmg;
      addLog(`⚔️ ${card.name} colpisce direttamente! ${dmg} danni!`, 'log-damage');
      createDamageParticles(new THREE.Vector3(0, 1, -6), false);
    }
  });

  updateUI();
  checkGameOver();
}

function enemyTurn() {
  if (gameState.gameOver) return;

  gameState.turn++;

  gameState.enemyMaxMana = Math.min(10, gameState.enemyMaxMana + (gameState.turn % 2 === 0 ? 1 : 0));
  gameState.enemyMana = gameState.enemyMaxMana;
  gameState.enemyManaSpent = 0;

  drawCard('enemy', 1);

  addLog(`--- Turno ${gameState.turn} dell'avversario ---`, '');

  setTimeout(() => {
    enemyPlayCards();
  }, 800);
}

function scoreEnemyCard(card) {
  let score = 0;
  const hasPlayerField = gameState.playerField.length > 0;
  const hasEnemyField = gameState.enemyField.length > 0;
  const playerHP = gameState.playerHP;
  const enemyHP = gameState.enemyHP;

  if (card.type === 'creature') {
    score = card.atk * 2 + card.hp * 1.2;
    if (!hasEnemyField) score += 4;
    if (hasPlayerField) score += 1;
    if (card.ability === 'trap' || card.ability === 'fear_growth') score += 1;
  } else {
    switch (card.effect) {
      case 'prescribe':
        score = hasEnemyField ? 6 : 4;
        if (enemyHP <= playerHP) score += 1;
        break;
      case 'worsen':
        score = hasEnemyField ? 5 : 2;
        break;
      case 'diary':
        score = hasPlayerField ? 6 : 2;
        break;
      case 'reframe':
        score = hasEnemyField ? 5 : 2;
        break;
      case 'prophecy':
        score = 5 + (playerHP <= 12 ? 2 : 0);
        break;
      case 'break_ritual':
        score = hasEnemyField ? 6 : 2;
        break;
      case 'evoke':
        score = hasEnemyField ? 3 : 5;
        break;
      case 'master_paradox':
        score = hasEnemyField ? 6 : 1;
        break;
      default:
        score = 3;
    }
  }

  score += Math.max(0, 5 - card.cost) * 0.1;
  return score;
}

function chooseEnemyCard(playable) {
  return playable.reduce((best, current) => {
    const bestScore = scoreEnemyCard(best.card);
    const currentScore = scoreEnemyCard(current.card);
    return currentScore > bestScore ? current : best;
  });
}

function enemyPlayCards() {
  if (gameState.gameOver) return;

  let hasPlayed = false;
  while (true) {
    const playable = gameState.enemyHand
      .map((c, i) => ({ card: c, index: i }))
      .filter(x => x.card.cost <= gameState.enemyMana - gameState.enemyManaSpent);

    if (playable.length === 0) break;

    const toPlay = chooseEnemyCard(playable);
    gameState.enemyManaSpent += toPlay.card.cost;

    if (toPlay.card.type === 'creature') {
      const fieldCard = {
        ...toPlay.card,
        _currentHP: toPlay.card.hp,
        _currentHPMax: toPlay.card.hp,
        _currentATK: toPlay.card.atk,
        hasAttacked: false
      };
      gameState.enemyField.push(fieldCard);
      createCreatureMesh(toPlay.card, false);
      addLog(`🐾 Nemico evoca: ${toPlay.card.name}`, 'log-summon');
    } else {
      executeTechnique(toPlay.card, 'enemy');
      addLog(`✨ Nemico usa: ${toPlay.card.name}`, 'log-tech');
    }

    gameState.enemyHand.splice(toPlay.index, 1);
    hasPlayed = true;

    if (Math.random() < 0.15) break;
  }

  if (!hasPlayed && gameState.enemyHand.length > 0) {
    addLog('🧠 Nemico pensa, ma si ritira per ora.', '');
  }

  updateUI();

  setTimeout(() => {
    enemyAttackPhase();
  }, 800);
}

function scoreEnemyAttack(card, target) {
  const targetAtk = target._currentATK || target.atk;
  const damageToTarget = card._currentATK;
  const targetRemainingHP = target._currentHP - damageToTarget;
  const attackerRemainingHP = card._currentHP - targetAtk;
  let score = 0;

  if (targetRemainingHP <= 0) {
    score += 80;
    score += targetAtk * 2;
    score += target._currentHP * 0.5;
    if (attackerRemainingHP > 0) score += 20;
    if (attackerRemainingHP <= 0) score -= 10;
  } else {
    score += targetAtk * 1.2;
    score -= targetRemainingHP * 0.5;
    if (attackerRemainingHP <= 0) score -= 30;
    if (attackerRemainingHP > 0) score += 5;
  }

  return score;
}

function chooseEnemyAttackTarget(card) {
  if (gameState.playerField.length === 0) return null;

  let bestTarget = null;
  let bestScore = -Infinity;
  for (const target of gameState.playerField) {
    const score = scoreEnemyAttack(card, target);
    if (score > bestScore) {
      bestScore = score;
      bestTarget = target;
    }
  }

  return bestScore > 0 ? bestTarget : null;
}

function enemyAttackPhase() {
  gameState.enemyField.forEach(card => {
    if (card.frozen) { card.frozen = false; return; }
    if (gameState.playerField.length > 0) {
      const target = chooseEnemyAttackTarget(card);
      if (!target) {
        addLog(`🧠 ${card.name} resta in posizione, evita lo scontro sfavorevole.`, '');
      } else {
        const dmg = card._currentATK;
        target._currentHP -= dmg;
        addLog(`⚔️ ${card.name} attacca ${target.name} per ${dmg} danni!`, '');

        const counterDmg = target._currentATK || target.atk;
        card._currentHP -= counterDmg;

        createDamageParticles(new THREE.Vector3(0, 1, 6), true);

        if (target._currentHP <= 0) {
          const idx = gameState.playerField.indexOf(target);
          gameState.playerField.splice(idx, 1);
          const mesh = summonedMeshes.find(m => m.userData.uid === target.uid && m.userData.isPlayer);
          if (mesh) { scene.remove(mesh); summonedMeshes = summonedMeshes.filter(m => m !== mesh); }
          addLog(`💀 ${target.name} distrutto!`, 'log-damage');
        }
        if (card._currentHP <= 0) {
          const idx = gameState.enemyField.indexOf(card);
          gameState.enemyField.splice(idx, 1);
          const mesh = summonedMeshes.find(m => m.userData.uid === card.uid && !m.userData.isPlayer);
          if (mesh) { scene.remove(mesh); summonedMeshes = summonedMeshes.filter(m => m !== mesh); }
          addLog(`💀 ${card.name} cade!`, 'log-damage');
        }
      }
    } else {
      const dmg = card._currentATK;
      gameState.playerHP -= dmg;
      addLog(`⚔️ ${card.name} colpisce direttamente! ${dmg} danni!`, 'log-damage');
      createDamageParticles(new THREE.Vector3(0, 1, 6), true);
    }
  });

  updateUI();
  if (checkGameOver()) return;

  setTimeout(() => {
    startPlayerTurn();
  }, 500);
}

function startPlayerTurn() {
  gameState.turnOwner = 'player';
  gameState.phase = 'main';
  gameState.attackMode = false;
  gameState.selectedCard = null;
  gameState.playerManaSpent = 0;

  gameState.playerMaxMana = Math.min(10, gameState.playerMaxMana + (gameState.turn % 2 === 0 ? 1 : 0));
  gameState.playerMana = gameState.playerMaxMana;

  drawCard('player', 1);

  gameState.playerField.forEach(card => {
    if (card.ability === 'symptom_growth') {
      card._currentATK += 1;
      addLog(`🐉 ${card.name} cresce! ATK +1`, 'log-summon');
    }
    if (card.ability === 'eternal_cycle') {
      card._currentHP = Math.min(card._currentHPMax, card._currentHP + 2);
      addLog(`🐍 ${card.name} si cura! +2 HP`, 'log-heal');
    }
    if (card.ability === 'fear_growth') {
      card._currentATK += gameState.enemyHand.length;
      card._currentHP += gameState.enemyHand.length;
    }
    card.hasAttacked = false;
  });

  addLog(`--- Turno ${gameState.turn} --- La tua mossa!`, '');
  updateUI();
}

function checkGameOver() {
  if (gameState.enemyHP <= 0) {
    gameState.gameOver = true;
    const overlay = document.getElementById('game-over-overlay');
    const text = document.getElementById('game-over-text');
    text.textContent = 'VITTORIA!';
    text.className = 'game-over-text victory';
    overlay.classList.add('active');
    addLog('🏆 VITTORIA! Hai sconfitto Nemesi Paradoxalis!', '');
    return true;
  }
  if (gameState.playerHP <= 0) {
    gameState.gameOver = true;
    const overlay = document.getElementById('game-over-overlay');
    const text = document.getElementById('game-over-text');
    text.textContent = 'SCONFITTA';
    text.className = 'game-over-text defeat';
    overlay.classList.add('active');
    addLog('💀 Sconfitta... La Nemesi prevale.', '');
    return true;
  }
  return false;
}

// ============================================================
//  TOOLTIP
// ============================================================
function showTooltip(event, card) {
  const tooltip = document.getElementById('tooltip');
  tooltip.style.display = 'block';
  tooltip.style.left = (event.pageX + 15) + 'px';
  tooltip.style.top = (event.pageY - 10) + 'px';

  const typeColor = card.type === 'creature' ? '#d4a0ff' : '#80d4ff';

  tooltip.innerHTML = `
    <h3>${card.emoji} ${card.name}</h3>
    <div class="tt-type" style="color:${typeColor}">${card.subtype} — Costo: ${card.cost}</div>
    <div class="tt-desc">${card.desc}</div>
    ${card.type === 'creature' ? `
      <div class="tt-stats">
        <span class="stat-atk">⚔ ATK: ${card.atk}</span>
        <span class="stat-def">❤ HP: ${card.hp}</span>
      </div>
      <div class="tt-desc" style="margin-top:5px;font-style:italic;color:#aaa;">${card.abilityDesc || ''}</div>
    ` : `
      <div class="tt-desc" style="margin-top:5px;font-style:italic;color:#aaa;">${card.effectDesc || ''}</div>
    `}
  `;

  const rect = tooltip.getBoundingClientRect();
  if (rect.right > window.innerWidth) {
    tooltip.style.left = (event.pageX - rect.width - 15) + 'px';
  }
  if (rect.bottom > window.innerHeight) {
    tooltip.style.top = (event.pageY - rect.height - 10) + 'px';
  }
}

function hideTooltip() {
  document.getElementById('tooltip').style.display = 'none';
}

// ============================================================
//  LOG
// ============================================================
function addLog(message, cls) {
  const logEl = document.getElementById('game-log');
  const entry = document.createElement('div');
  entry.className = `log-entry ${cls}`;
  entry.innerHTML = message;
  logEl.appendChild(entry);
  logEl.scrollTop = logEl.scrollHeight;
}

// ============================================================
//  ADD PLAYER BAR DYNAMICALLY
// ============================================================
function createPlayerBar() {
  const bar = document.createElement('div');
  bar.className = 'player-bar player';
  bar.innerHTML = `
    <div class="avatar">🧠</div>
    <div class="player-info">
      <div class="player-name">Terapeuta Strategico</div>
    </div>
    <div class="mana-display" id="player-mana"></div>
    <div class="deck-count">🂠 <span id="player-deck">12</span></div>
  `;
  document.getElementById('ui-layer').appendChild(bar);

  const hpContainer = document.createElement('div');
  hpContainer.className = 'hp-bar-container';
  hpContainer.innerHTML = '<div class="hp-bar player-hp" id="player-hp-bar" style="width:100%"></div><div class="hp-text"><span id="player-hp-text">30</span> / 30</div>';
  bar.querySelector('.player-info').appendChild(hpContainer);
}

// ============================================================
//  INIT
// ============================================================
window.addEventListener('load', () => {
  createPlayerBar();
  initThreeJS();
  initGame();
});
