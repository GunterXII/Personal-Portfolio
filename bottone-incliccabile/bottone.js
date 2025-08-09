const bottone = document.getElementById("magico");
const score = document.getElementById("numero");
const reset = document.querySelector(".contenitore1")

let count = 0;

bottone.addEventListener("mouseover", () => {
  const top = Math.random() * (window.innerHeight - 100); // Evita di farlo uscire dallo schermo
  const left = Math.random() * (window.innerWidth - 150);
  bottone.style.position = "absolute"; // NECESSARIO per usare top/left
  bottone.style.top = `${top}px`;
  bottone.style.left = `${left}px`;

  // Cambio colore casuale
  const colori = ["#00ff88", "#ff00ff", "#00ffff", "#ffff00"];
  bottone.style.backgroundColor = colori[Math.floor(Math.random() * colori.length)];
});

bottone.addEventListener("click", () => {
  count++;
  score.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  score.textContent = 0;
});
