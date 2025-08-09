// Recupera nome da localStorage
const nomeUtente = localStorage.getItem("nomeUtente") || "Amico/a";

// Mostra saluto in base all'ora
const ora = new Date().getHours();
let saluto = "";

if (ora >= 5 && ora < 12) {
  saluto = "Buongiorno";
} else if (ora >= 12 && ora < 18) {
  saluto = "Buon pomeriggio";
} else {
  saluto = "Buonasera";
}

const titolo = document.getElementById("titolo");
titolo.textContent = `${saluto}, ${nomeUtente}! 😊`;

// Regex per felicità
const regexFelicita = /\b(felice|content[oa]|al settimo cielo|super|fantastic[oa]|meraviglios[oa]|entusiast[ao]|mi sento (benissimo|felice|molto bene|super|alla grande)|oggi.*bell[oa]|giornata.*bell[oa]|tutto.*perfett[oa]|sono.*fortunat[oa]|grat[oa])\b|[😊😄😁😃😍🥰😎✨🎉❤️💕]/gi;

// Regex per tristezza
const regexTristezza = /\b(triste|depresso|giù|male|non va|stanco|deluso|in difficoltà|abbattut[ao]|giù di morale|ansios[ao]|stressat[ao]|disperat[ao])\b|[😢😞😔☹️😭😟😕💔]/gi;

// Frasi motivazionali per felicità
const frasiMotivazionali = [
  "Continua così, stai andando alla grande! 💪",
  "Ogni giorno è un'opportunità per brillare ✨",
  "La tua energia positiva è contagiosa 😄",
  "Non smettere mai di credere in te stesso/a 🌈",
  "Hai tutte le carte in regola per riuscire 🎯",
  "Oggi è il giorno perfetto per essere felici ☀️",
  "La felicità è dentro di te, lasciala uscire! 💖",
  "Non dimenticare quanto vali ⭐",
  "Il meglio deve ancora venire 🚀",
  "Sorridi, sei più forte di quanto pensi 😊",
];

// Frasi di conforto per tristezza
const frasiConforto = [
  "Anche le giornate difficili finiscono, resisti 🌈",
  "Ogni passo avanti è un successo, non mollare 💪",
  "Sei più forte di quanto pensi, ce la farai 💫",
  "Non sei solo/a, ci sono persone che ti vogliono bene ❤️",
  "Ricorda: dopo la pioggia torna sempre il sole ☀️",
  "Prenditi cura di te stesso/a, meriti amore e serenità 🌸",
  "Ogni difficoltà è un'opportunità per crescere 🌱",
  "Respira, un passo alla volta 🧘",
  "Hai già superato momenti difficili, puoi farlo ancora ✨",
  "Il tuo valore non dipende da come ti senti oggi 💖",
];

// Funzione che trasforma il testo dell'umore in un valore numerico (0-100)
function moodToValue(moodText) {
  if (regexFelicita.test(moodText)) return 90;
  if (regexTristezza.test(moodText)) return 20;
  return 50; // neutro
}

// Setup Chart.js
const ctx = document.getElementById("moodChart").getContext("2d");
let labels = [];
let dataPoints = [];

const moodChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Il tuo umore",
        data: dataPoints,
        borderColor: "rgb(0, 255, 136)",
        backgroundColor: "rgba(0, 255, 136, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  },
  options: {
    scales: {
      y: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: "Livello umore",
        },
      },
      x: {
        title: {
          display: true,
          text: "Tempo (tentativi)",
        },
      },
    },
  },
});

// Gestione click su "Invia"
document.getElementById("feel").addEventListener("click", () => {
  const moodInput = document.getElementById("mood");
  const testo = moodInput.value.trim();

  if (!testo) {
    alert("Per favore, scrivi come ti senti.");
    return;
  }

  const valore = moodToValue(testo);

  // Aggiungi dati per il grafico
  labels.push(`Tentativo ${labels.length + 1}`);
  dataPoints.push(valore);
  moodChart.update();

  // Mostra risposta motivazionale
  let risposta = "";
  if (valore >= 70) {
    risposta = frasiMotivazionali[Math.floor(Math.random() * frasiMotivazionali.length)];
  } else if (valore <= 30) {
    risposta = frasiConforto[Math.floor(Math.random() * frasiConforto.length)];
  } else {
    risposta = "Grazie per aver condiviso come ti senti!";
  }

  document.getElementById("response").textContent = risposta;

  // Pulisci textarea
  moodInput.value = "";
});
