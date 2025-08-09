// tictactoe.js

window.addEventListener('DOMContentLoaded', () => {
  // 1) Selezioni e variabili di stato
  const cells       = document.querySelectorAll('.cell');
  const indicator   = document.getElementById('turn-indicator');
  const container   = document.querySelector('.container');
  const resetBtn    = document.getElementById('reset-btn');
  const blueScoreEl = document.querySelector('#blue-score span');
  const redScoreEl  = document.querySelector('#red-score span');

  let turnoX    = true;   // true = Blu, false = Rosso
  let blueScore = 0;
  let redScore  = 0;

  // 2) Combinazioni vincenti
  const winCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  // 3) Crea X/O (preview o definitivo)
  function creaElemento(isX, isPreview) {
    const el = document.createElement('div');
    el.classList.add(isX ? 'x1' : 'cerchio');
    el.classList.add(isPreview ? 'preview' : 'played');
    return el;
  }

  // 4) Mostra indicatore di turno
  function mostraIndicatore() {
    const isBlu = turnoX;
    indicator.textContent = isBlu ? 'Turno del Blu' : 'Turno del Rosso';
    indicator.classList.remove('show-left','show-right');
    void indicator.offsetWidth;
    indicator.classList.add(isBlu ? 'show-left' : 'show-right');
  }

  // 5) Controlla vittoria o pareggio
  function checkGameStatus() {
    const board = Array.from(cells).map(c => {
      if (c.querySelector('.played.x1'))      return 'X';
      if (c.querySelector('.played.cerchio')) return 'O';
      return null;
    });
    for (const combo of winCombos) {
      const [a,b,c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], combo };
      }
    }
    if (board.every(v => v !== null)) return { winner: 'Tie' };
    return null;
  }

  // 6) Aggiorna lo scoreboard
  function updateScore(winner) {
    if (winner === 'X') {
      blueScore++;
      blueScoreEl.textContent = blueScore;
    } else if (winner === 'O') {
      redScore++;
      redScoreEl.textContent = redScore;
    }
  }

  // 7) Reset della griglia e turno
  function resetGame() {
    // Pulisce celle e linee
    cells.forEach(c => c.innerHTML = '');
    document.querySelectorAll('.win-line').forEach(l => l.remove());
    // Reset del turno
    turnoX = true;
    mostraIndicatore();
  }

  // 8) Disegna linea vincente, pulse la griglia, poi reset
  function drawWinLine(winner, combo) {
    updateScore(winner);
    // Applica classe di victory per pulse
    container.classList.add(winner === 'X' ? 'victory-blue' : 'victory-red');

    const line = document.createElement('div');
    line.classList.add('win-line', winner === 'X' ? 'blue' : 'red');

    const contRect = container.getBoundingClientRect();
    const cellRect = cells[0].getBoundingClientRect();
    const cw = cellRect.width, ch = cellRect.height;

    if (combo[0] + 1 === combo[1]) {
      // orizzontale
      const row = Math.floor(combo[0] / 3);
      line.style.width  = `${contRect.width}px`;
      line.style.height = `5px`;
      line.style.top    = `${row * ch + ch/2}px`;
      line.style.left   = `0`;
    }
    else if (combo[0] + 3 === combo[1]) {
      // verticale
      line.style.width     = `5px`;
      line.style.height    = `${contRect.height}px`;
      line.style.left      = `${(combo[0] % 3) * cw + cw/2}px`;
      line.style.top       = `0`;
      line.style.animation = `draw-vertical 1.2s ease-out forwards`;
    }
    else {
      // diagonale
      const diag = Math.hypot(contRect.width, contRect.height);
      line.style.width  = `${diag}px`;
      line.style.height = `5px`;
      line.style.top    = `${contRect.height/2}px`;
      line.style.left   = `${contRect.width/2 - diag/2}px`;
      const angle = combo[0] === 0 ? 45 : -45;
      line.style.transform = `rotate(${angle}deg) scaleX(0)`;
      line.style.transformOrigin = `0 50%`;
    }

    container.append(line);

    // Al termine dell'animazione della linea...
    line.addEventListener('animationend', () => {
      // Attendi anche la fine del pulse della container
      container.addEventListener('animationend', () => {
        container.classList.remove('victory-blue','victory-red');
        resetGame();
      }, { once: true });
    });
  }

  // 9) Inizializza indicatore
  mostraIndicatore();

  // 10) Event listeners su ogni cella
  cells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
      if (!cell.querySelector('.played')) {
        cell.append(creaElemento(turnoX, true));
      }
    });
    cell.addEventListener('mouseleave', () => {
      const p = cell.querySelector('.preview');
      if (p) p.remove();
    });
    cell.addEventListener('click', () => {
      if (cell.querySelector('.played')) return;
      const p = cell.querySelector('.preview');
      if (p) p.remove();
      cell.append(creaElemento(turnoX, false));

      const status = checkGameStatus();
      if (status) {
        if (status.winner === 'Tie') {
          setTimeout(resetGame, 800);
        } else {
          drawWinLine(status.winner, status.combo);
        }
        return;
      }
      turnoX = !turnoX;
      mostraIndicatore();
    });
  });

  // 11) Pulsante Reset: reset della griglia e del turno
  resetBtn.addEventListener('click', resetGame);
});
