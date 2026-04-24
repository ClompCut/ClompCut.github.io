// ============================================================
//  THREE.JS 3D SCENE — Paradosso3D
// ============================================================

// Variabili globali Three.js
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

// Inizializza la scena Three.js
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
  cameraDrag.yaw = Math.atan2(camera.position.x, cameraDrag.z);

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

      const top = new THREE.Mesh(new THREE.ConeGeometry(0.6, 0.8, 4), bodyMat2);
      top.position.y = 2.4;
      top.castShadow = true;
      group.add(top);
      break;
    }
  }

  // Set position based on owner and field index
  const count = summonedMeshes.filter(m => m.userData.isPlayer === isPlayer).length;
  const offset = (count - (gameState[isPlayer ? 'playerField' : 'enemyField'].length - 1)) * 2.5 - 2.5;
  group.position.set(offset, 0, isPlayer ? 2 : -2);

  // Store metadata
  group.userData = {
    uid: card.uid,
    isPlayer: isPlayer,
    cardId: card.id,
    targetY: group.position.y,
    floatPhase: Math.random() * Math.PI * 2,
    floatSpeed: 1 + Math.random()
  };

  scene.add(group);
  summonedMeshes.push(group);

  // Summon effect
  createSummonParticles(group.position, color);

  return group;
}

function removeCreatureMesh(card, isPlayer) {
  const meshIndex = summonedMeshes.findIndex(m => m.userData.uid === card.uid && m.userData.isPlayer === isPlayer);
  if (meshIndex >= 0) {
    const mesh = summonedMeshes[meshIndex];
    scene.remove(mesh);
    summonedMeshes.splice(meshIndex, 1);
  }
}

function cleanupDeadCreatures() {
  // Remove dead player creatures
  gameState.playerField.forEach(card => {
    if (card._currentHP <= 0) {
      removeCreatureMesh(card, true);
      card._markedForRemoval = true;
    }
  });
  gameState.playerField = gameState.playerField.filter(c => !c._markedForRemoval);

  // Remove dead enemy creatures
  gameState.enemyField.forEach(card => {
    if (card._currentHP <= 0) {
      removeCreatureMesh(card, false);
      card._markedForRemoval = true;
    }
  });
  gameState.enemyField = gameState.enemyField.filter(c => !c._markedForRemoval);
}

function createSummonParticles(position, color) {
  const particleCount = 30;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = position.x + (Math.random() - 0.5) * 2;
    positions[i * 3 + 1] = position.y + Math.random() * 2;
    positions[i * 3 + 2] = position.z + (Math.random() - 0.5) * 2;

    velocities.push({
      x: (Math.random() - 0.5) * 0.3,
      y: Math.random() * 0.5,
      z: (Math.random() - 0.5) * 0.3
    });
  }

  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    color: color,
    size: 0.15,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(geo, mat);
  particleSystem.userData = {
    type: 'summon',
    velocities: velocities,
    life: 1.0
  };
  scene.add(particleSystem);
  particles.push({ mesh: particleSystem, type: 'summon' });
}

function createDamageParticles(position, isPlayer) {
  const particleCount = 20;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];
  const color = isPlayer ? 0x8844ff : 0xff4444;

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = position.x;
    positions[i * 3 + 1] = position.y + 1;
    positions[i * 3 + 2] = position.z;

    velocities.push({
      x: (Math.random() - 0.5) * 0.4,
      y: Math.random() * 0.6,
      z: (Math.random() - 0.5) * 0.4
    });
  }

  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    color: color,
    size: 0.12,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(geo, mat);
  particleSystem.userData = {
    type: 'damage',
    velocities: velocities,
    life: 0.8
  };
  scene.add(particleSystem);
  particles.push({ mesh: particleSystem, type: 'damage' });
}

function updateParticles(delta) {
  particles.forEach((p, index) => {
    const mesh = p.mesh;
    const type = p.type;

    if (type === 'ambient') {
      // Slowly rotate ambient particles
      mesh.rotation.y += delta * 0.05;
    } else if (type === 'orb') {
      // Floating orbs on pillars
      mesh.position.y = mesh.userData.baseY + Math.sin(Date.now() * 0.002 + mesh.userData.phase) * 0.2;
    } else if (type === 'fire') {
      // Flickering fire
      mesh.position.y = mesh.userData.baseY + Math.sin(Date.now() * 0.01 * mesh.userData.speed + mesh.userData.phase) * 0.15;
      mesh.scale.setScalar(1 + Math.sin(Date.now() * 0.015 + mesh.userData.phase) * 0.2);
    } else if (type === 'shard') {
      // Rotating mirror shards
      mesh.rotation.x += mesh.userData.rotSpeed;
      mesh.rotation.y += mesh.userData.rotSpeed;
    } else if (type === 'summon' || type === 'damage') {
      // Animated particles
      const positions = mesh.geometry.attributes.position.array;
      const vels = mesh.userData.velocities;

      for (let i = 0; i < positions.length / 3; i++) {
        positions[i * 3] += vels[i].x;
        positions[i * 3 + 1] += vels[i].y;
        positions[i * 3 + 2] += vels[i].z;

        vels[i].y -= 0.015; // gravity
      }

      mesh.geometry.attributes.position.needsUpdate = true;
      mesh.userData.life -= delta * 0.8;
      mesh.material.opacity = mesh.userData.life;

      if (mesh.userData.life <= 0) {
        scene.remove(mesh);
        particles.splice(index, 1);
      }
    }
  });
}

function updateSummonedMeshes() {
  summonedMeshes.forEach(mesh => {
    updateMeshPosition(mesh);
  });
}

function updateMeshPosition(mesh) {
  const data = mesh.userData;
  const time = Date.now() * 0.001;

  // Floating animation
  const floatY = Math.sin(time * data.floatSpeed + data.floatPhase) * 0.15;
  mesh.position.y = floatY;

  // Gentle rotation
  mesh.rotation.y += 0.005;
}

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();

  updateParticles(delta);
  updateSummonedMeshes();

  renderer.render(scene, camera);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Esporta le funzioni necessarie per la logica di gioco
window.ThreeJSScene = {
  initThreeJS,
  createCreatureMesh,
  removeCreatureMesh,
  cleanupDeadCreatures,
  createDamageParticles,
  getScene: () => scene,
  getSummonedMeshes: () => summonedMeshes
};
