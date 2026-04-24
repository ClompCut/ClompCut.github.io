// ============================================================
//  LOGICA DI GIOCO — Paradosso3D
//  (Terapia Strategica Breve CCG)
// ============================================================

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
//  UI FUNCTIONS
// ============================================================
function updateUI() {
  if (window.ThreeJSScene && window.ThreeJSScene.cleanupDeadCreatures) {
    window.ThreeJSScene.cleanupDeadCreatures();
  }
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

    if (card.type === 'creature') {
      gameState.attackMode = true;
      addLog(`Selezionato ${card.name}. Clicca su una creatura nemica per attaccarla, o sul campo vuoto per evocarla.`, '');
    } else if (card.type === 'technique') {
      gameState.attackMode = false;
      addLog(`Selezionato ${card.name}. Clicca su un bersaglio nemico.`, '');
    }
  }

  updateUI();
}

function playCard(index) {
  const card = gameState.playerHand[index];
  if (!card) return;

  gameState.playerManaSpent += card.cost;
  gameState.playerHand.splice(index, 1);

  if (card.type === 'creature') {
    // Initialize creature stats
    card._currentATK = card.atk;
    card._currentHP = card.hp;
    card._summonTurn = gameState.turn;
    gameState.playerField.push(card);

    // Three.js visual
    if (window.ThreeJSScene && window.ThreeJSScene.createCreatureMesh) {
      window.ThreeJSScene.createCreatureMesh(card, true);
    }

    addLog(`Hai evocato ${card.name}!`, '');

    // Enter effect
    triggerEnterEffect(card, 'player');
  }

  gameState.selectedCard = null;
  gameState.attackMode = false;
  updateUI();
}

function playCardOnTarget(handIndex, targetIndex, targetOwner) {
  const card = gameState.playerHand[handIndex];
  if (!card) return;

  if (card.type === 'creature') {
    // Creature attacks or is summoned
    if (targetIndex !== null) {
      // Attack target creature
      const targetField = targetOwner === 'player' ? gameState.playerField : gameState.enemyField;
      const targetCard = targetField[targetIndex];

      if (!targetCard) return;

      // Combat
      const damageToTarget = card.atk;
      const damageToAttacker = targetCard._currentATK || targetCard.atk;

      targetCard._currentHP -= damageToTarget;
      card._currentHP -= damageToAttacker;

      addLog(`${card.name} attacca ${targetCard.name}! ${damageToTarget} danni.`, '');

      // Visual feedback
      if (targetOwner === 'enemy' && window.ThreeJSScene) {
        const mesh = window.ThreeJSScene.getSummonedMeshes().find(m => m.userData.uid === targetCard.uid && !m.userData.isPlayer);
        if (mesh && window.ThreeJSScene.createDamageParticles) {
          window.ThreeJSScene.createDamageParticles(mesh.position, false);
        }
      }

      // Remove dead creatures
      if (targetCard._currentHP <= 0) {
        addLog(`${targetCard.name} è stata distrutta!`, '');
        if (targetOwner === 'enemy' && window.ThreeJSScene) {
          window.ThreeJSScene.getSummonedMeshes().filter(m => m !== mesh);
        }
      }

      if (card._currentHP <= 0) {
        addLog(`${card.name} è stata distrutta in combattimento!`, '');
      } else {
        // Attacker survives, summon it
        gameState.playerHand.splice(handIndex, 1);
        card._currentATK = card.atk;
        card._currentHP = card.hp;
        card._summonTurn = gameState.turn;
        gameState.playerField.push(card);

        if (window.ThreeJSScene && window.ThreeJSScene.createCreatureMesh) {
          window.ThreeJSScene.createCreatureMesh(card, true);
        }

        triggerEnterEffect(card, 'player');
      }
    } else {
      // Summon to empty field
      gameState.playerManaSpent += card.cost;
      gameState.playerHand.splice(handIndex, 1);

      card._currentATK = card.atk;
      card._currentHP = card.hp;
      card._summonTurn = gameState.turn;
      gameState.playerField.push(card);

      if (window.ThreeJSScene && window.ThreeJSScene.createCreatureMesh) {
        window.ThreeJSScene.createCreatureMesh(card, true);
      }

      addLog(`Hai evocato ${card.name}!`, '');
      triggerEnterEffect(card, 'player');
    }
  } else if (card.type === 'technique') {
    // Technique card
    gameState.playerManaSpent += card.cost;
    gameState.playerHand.splice(handIndex, 1);

    executeTechnique(card, 'player');
  }

  gameState.selectedCard = null;
  gameState.attackMode = false;
  updateUI();
}

function attackCreature(fieldIndex, owner) {
  if (!gameState.attackMode || gameState.selectedCard === null) return;

  const attackerCard = gameState.playerHand[gameState.selectedCard];
  if (!attackerCard || attackerCard.type !== 'creature') return;

  const targetField = owner === 'player' ? gameState.playerField : gameState.enemyField;
  const targetCard = targetField[fieldIndex];

  if (!targetCard) return;

  playCardOnTarget(gameState.selectedCard, fieldIndex, owner);
}

function executeTechnique(card, owner) {
  const isPlayer = owner === 'player';
  const opponent = isPlayer ? 'enemy' : 'player';

  addLog(`${isPlayer ? 'Hai usato' : 'L\'avversario ha usato'} ${card.name}!`, '');

  switch(card.effect) {
    case 'prescribe':
      // Destroy enemy creature with ATK >= 4, heal 3 HP
      const highThreats = gameState.enemyField.filter(c => (c._currentATK || c.atk) >= 4);
      if (highThreats.length > 0) {
        const target = highThreats[0];
        target._currentHP = 0;
        addLog(`${target.name} è stata eliminata dalla prescrizione!`, '');
        if (window.ThreeJSScene) {
          const mesh = window.ThreeJSScene.getSummonedMeshes().find(m => m.userData.uid === target.uid && !m.userData.isPlayer);
          if (mesh) { window.ThreeJSScene.getScene().remove(mesh); window.ThreeJSScene.getSummonedMeshes().filter(m => m !== mesh); }
        }
      }
      if (isPlayer) gameState.playerHP = Math.min(gameState.playerMaxHP, gameState.playerHP + 3);
      break;

    case 'worsen':
      // Enemy creature attacks its owner, draw 1
      if (gameState.enemyField.length > 0) {
        const victim = gameState.enemyField[Math.floor(Math.random() * gameState.enemyField.length)];
        const dmg = victim._currentATK || victim.atk;
        gameState.enemyHP -= dmg;
        addLog(`${victim.name} attacca il suo controllore per ${dmg} danni!`, '');
      }
      if (isPlayer) drawCard('player', 1);
      break;

    case 'diary':
      // Block all enemy creatures this turn, draw 2
      addLog('Tutte le creature nemiche sono bloccate questo turno!', '');
      if (isPlayer) drawCard('player', 2);
      break;

    case 'reframe':
      // Swap ATK and HP of enemy creature, draw 1
      if (gameState.enemyField.length > 0) {
        const target = gameState.enemyField[Math.floor(Math.random() * gameState.enemyField.length)];
        const oldAtk = target._currentATK || target.atk;
        const oldHp = target._currentHP || target.hp;
        target._currentATK = oldHp;
        target._currentHP = oldAtk;
        addLog(`${target.name} ora ha ATK=${oldHp} e HP=${oldAtk}!`, '');
      }
      if (isPlayer) drawCard('player', 1);
      break;

    case 'prophecy':
      // Deal 4 damage, or 6 if enemy has creatures
      const dmg = gameState.enemyField.length > 0 ? 6 : 4;
      gameState.enemyHP -= dmg;
      addLog(`La profezia si avvera! ${dmg} danni all'avversario.`, '');
      break;

    case 'break_ritual':
      // Destroy all technique cards in play, deal 2 damage per each
      // (In this simplified version, techniques don't stay in play)
      addLog('I rituali sono infranti!', '');
      break;

    case 'evoke':
      // Summon a 2/2 creature from deck, gain 1 extra mana
      if (isPlayer) {
        const evokeCards = gameState.playerDeck.filter(c => c.type === 'creature');
        if (evokeCards.length > 0) {
          const evokeCard = evokeCards[Math.floor(Math.random() * evokeCards.length)];
          const idx = gameState.playerDeck.indexOf(evokeCard);
          gameState.playerDeck.splice(idx, 1);

          evokeCard._currentATK = 2;
          evokeCard._currentHP = 2;
          evokeCard._summonTurn = gameState.turn;
          gameState.playerField.push(evokeCard);

          if (window.ThreeJSScene && window.ThreeJSScene.createCreatureMesh) {
            window.ThreeJSScene.createCreatureMesh(evokeCard, true);
          }

          addLog(`Hai evocato una risorsa dal mazzo: ${evokeCard.name}!`, '');
        }
        gameState.playerMana++;
      }
      break;

    case 'master_paradox':
      // Take control of all enemy creatures, draw 3
      if (isPlayer && gameState.enemyField.length > 0) {
        gameState.enemyField.forEach(c => {
          gameState.playerField.push(c);
          if (window.ThreeJSScene) {
            const mesh = window.ThreeJSScene.getSummonedMeshes().find(m => m.userData.uid === c.uid && !m.userData.isPlayer);
            if (mesh) { window.ThreeJSScene.getScene().remove(mesh); window.ThreeJSScene.getSummonedMeshes().filter(m => m !== mesh); }
          }
        });
        addLog('Tutte le creature nemiche passano sotto il tuo controllo!', '');
        gameState.enemyField = [];
        drawCard('player', 3);
      }
      break;
  }

  checkGameOver();
}

function triggerEnterEffect(card, owner) {
  // Handle enter-the-battlefield effects
  if (card.ability === 'riddle' && owner === 'player') {
    // Enemy discards a random card
    if (gameState.enemyHand.length > 0) {
      const discardIdx = Math.floor(Math.random() * gameState.enemyHand.length);
      const discarded = gameState.enemyHand.splice(discardIdx, 1)[0];
      addLog(`${card.name} costringe l'avversario a scartare ${discarded.name}!`, '');
    }
  }
}

function drawCard(who, count) {
  for (let i = 0; i < count; i++) {
    if (who === 'player') {
      if (gameState.playerDeck.length > 0) {
        gameState.playerHand.push(gameState.playerDeck.pop());
      } else {
        gameState.playerHP -= 1; // Fatigue damage
        addLog('Il mazzo è vuoto! Subisci 1 danno da fatica.', '');
      }
    } else {
      if (gameState.enemyDeck.length > 0) {
        gameState.enemyHand.push(gameState.enemyDeck.pop());
      }
    }
  }
  updateUI();
}

// ============================================================
//  TURN MANAGEMENT
// ============================================================
function endTurn() {
  if (gameState.turnOwner !== 'player' || gameState.gameOver) return;

  gameState.phase = 'end';
  updateUI();

  setTimeout(() => {
    gameState.turnOwner = 'enemy';
    gameState.phase = 'draw';
    gameState.enemyMana = Math.min(10, gameState.enemyMana + 1);
    gameState.enemyMaxMana = gameState.enemyMana;

    // Enemy draws
    if (gameState.enemyDeck.length > 0) {
      gameState.enemyHand.push(gameState.enemyDeck.pop());
    }

    addLog('--- Turno Avversario ---', '');
    updateUI();

    setTimeout(enemyTurn, 1000);
  }, 500);
}

function playerAttackPhase() {
  if (gameState.turnOwner !== 'player') return;

  gameState.phase = 'combat';
  updateUI();

  // Ready creatures for attack
  gameState.playerField.forEach(card => {
    card._hasAttacked = false;
  });

  addLog('Fase di combattimento! Seleziona una carta dalla mano per attaccare.', '');
}

function enemyTurn() {
  if (gameState.gameOver) return;

  // Draw phase
  gameState.phase = 'main';

  // Enemy plays cards
  setTimeout(() => {
    enemyPlayCards();
  }, 800);

  // Enemy attacks
  setTimeout(() => {
    enemyAttackPhase();
  }, 2000);

  // End turn
  setTimeout(() => {
    startPlayerTurn();
  }, 3500);
}

function scoreEnemyCard(card) {
  // Simple AI scoring
  let score = card.cost;
  if (card.type === 'creature') {
    score += (card.atk + card.hp) * 0.5;
  }
  return score;
}

function chooseEnemyCard(playable) {
  if (playable.length === 0) return null;
  playable.sort((a, b) => scoreEnemyCard(b.card) - scoreEnemyCard(a.card));
  return playable[0];
}

function enemyPlayCards() {
  if (gameState.gameOver) return;

  const playable = [];
  let manaLeft = gameState.enemyMana;

  gameState.enemyHand.forEach((card, index) => {
    if (card.cost <= manaLeft) {
      playable.push({ index, card });
    }
  });

  while (playable.length > 0) {
    const choice = chooseEnemyCard(playable);
    if (!choice) break;

    const card = choice.card;
    const idx = choice.index;

    gameState.enemyManaSpent = (gameState.enemyManaSpent || 0) + card.cost;
    manaLeft -= card.cost;

    gameState.enemyHand.splice(idx, 1);

    if (card.type === 'creature') {
      card._currentATK = card.atk;
      card._currentHP = card.hp;
      card._summonTurn = gameState.turn;
      gameState.enemyField.push(card);

      if (window.ThreeJSScene && window.ThreeJSScene.createCreatureMesh) {
        window.ThreeJSScene.createCreatureMesh(card, false);
      }

      addLog(`L'avversario ha evocato ${card.name}!`, '');
      triggerEnterEffect(card, 'enemy');
    } else if (card.type === 'technique') {
      executeTechnique(card, 'enemy');
    }

    // Remove played card from playable list
    const newPlayable = [];
    playable.forEach(p => {
      if (p.index > idx) {
        p.index--;
        newPlayable.push(p);
      } else if (p.index < idx) {
        newPlayable.push(p);
      }
    });
    playable.length = 0;
    playable.push(...newPlayable.filter(p => p.card.cost <= manaLeft));
  }

  updateUI();
}

function scoreEnemyAttack(card, target) {
  // AI attack scoring
  if (!target) return card._currentATK || card.atk;
  const targetHp = target._currentHP || target.hp;
  const targetAtk = target._currentATK || target.atk;
  return (card._currentATK || card.atk) - targetAtk + (targetHp <= (card._currentATK || card.atk) ? 5 : 0);
}

function chooseEnemyAttackTarget(card) {
  // Choose best target for enemy creature
  const possibleTargets = gameState.playerField.slice();

  if (possibleTargets.length === 0) {
    return null; // Face attack
  }

  possibleTargets.sort((a, b) => {
    const scoreA = scoreEnemyAttack(card, a);
    const scoreB = scoreEnemyAttack(card, b);
    return scoreB - scoreA;
  });

  return possibleTargets[0];
}

function enemyAttackPhase() {
  if (gameState.gameOver) return;

  addLog('L\'avversario entra in fase di attacco!', '');

  gameState.enemyField.forEach(card => {
    if (gameState.gameOver) return;

    const target = chooseEnemyAttackTarget(card);
    const dmg = card._currentATK || card.atk;

    if (!target) {
      // Attack face
      gameState.playerHP -= dmg;
      addLog(`${card.name} ti attacca direttamente per ${dmg} danni!`, '');
    } else {
      // Attack creature
      target._currentHP -= dmg;
      addLog(`${card.name} attacca ${target.name} per ${dmg} danni!`, '');

      if (target._currentHP <= 0) {
        addLog(`${target.name} è stata distrutta!`, '');
        if (window.ThreeJSScene) {
          const mesh = window.ThreeJSScene.getSummonedMeshes().find(m => m.userData.uid === target.uid && m.userData.isPlayer);
          if (mesh) { window.ThreeJSScene.getScene().remove(mesh); window.ThreeJSScene.getSummonedMeshes().filter(m => m !== mesh); }
        }
      }
    }

    // Check for death of attacker too (if has reflect etc.)
    if (card._currentHP <= 0) {
      addLog(`${card.name} è stata distrutta!`, '');
      if (window.ThreeJSScene) {
        const mesh = window.ThreeJSScene.getSummonedMeshes().find(m => m.userData.uid === card.uid && !m.userData.isPlayer);
        if (mesh) { window.ThreeJSScene.getScene().remove(mesh); window.ThreeJSScene.getSummonedMeshes().filter(m => m !== mesh); }
      }
    }

    updateUI();
  });

  checkGameOver();
}

function startPlayerTurn() {
  if (gameState.gameOver) return;

  gameState.turn++;
  gameState.turnOwner = 'player';
  gameState.phase = 'draw';
  gameState.playerManaSpent = 0;
  gameState.playerMana = Math.min(10, gameState.playerMana + 1);
  gameState.playerMaxMana = gameState.playerMana;

  // Draw card
  drawCard('player', 1);

  // Buff creatures on field
  gameState.playerField.forEach(card => {
    if (card.ability === 'symptom_growth') {
      card._currentATK = (card._currentATK || card.atk) + 1;
    }
    if (card.ability === 'eternal_cycle') {
      card._currentHP = Math.min(card.hp, (card._currentHP || card.hp) + 2);
    }
  });

  addLog(`--- Turno ${gameState.turn} ---`, '');
  addLog('È il tuo turno! Hai pescato una carta.', '');

  updateUI();
}

function checkGameOver() {
  if (gameState.playerHP <= 0) {
    gameState.gameOver = true;
    addLog('HAI PERSO! Il sintomo ha vinto... per ora.', 'game-over');
  } else if (gameState.enemyHP <= 0) {
    gameState.gameOver = true;
    addLog('HAI VINTO! La Terapia Strategica Breve trionfa!', 'game-over');
  }

  if (gameState.gameOver) {
    updateUI();
  }
}

// ============================================================
//  TOOLTIP
// ============================================================
function showTooltip(event, card) {
  const tooltip = document.getElementById('tooltip');
  tooltip.style.display = 'block';
  tooltip.style.left = (event.pageX + 15) + 'px';
  tooltip.style.top = (event.pageY + 15) + 'px';

  tooltip.innerHTML = `
    <div class="tt-header">${card.name}</div>
    <div class="tt-subtype">${card.subtype}</div>
    <div class="tt-cost">Costo: ${card.cost}</div>
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

// Esporta le funzioni per l'inizializzazione
window.GameLogic = {
  initGame,
  endTurn,
  createPlayerBar
};
