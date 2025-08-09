const button = document.querySelector(".bottone");

button.addEventListener("click", () => {
  const nuovoInput = document.createElement("input");
  const nuovoInvia = document.createElement("button");
  const storicoTentativi = document.createElement("div");

  // Numero casuale da 1 a 100
  const numeroPC = Math.floor(Math.random() * 100) + 1;

  // Impostazioni input
  nuovoInput.setAttribute("type", "text");
  nuovoInput.setAttribute("maxlength", "3");
  nuovoInput.classList.add("input");

  // Impostazioni bottone invia
  nuovoInvia.classList.add("bottone");
  nuovoInvia.textContent = "Invia";

  // Nasconde bottone iniziale
  button.style.display = "none";

  // Aggiunge elementi al body
  document.body.appendChild(nuovoInput);
  document.body.appendChild(nuovoInvia);
  document.body.appendChild(storicoTentativi);
  storicoTentativi.classList.add("tentativi");

  // Quando clicchi su "Invia"
  nuovoInvia.addEventListener("click", () => {
    const numero = parseInt(nuovoInput.value);
    if (isNaN(numero) || numero < 1 || numero > 100) {
      alert("Inserisci un numero valido tra 1 e 100.");
      return;
    }

    const differenza = Math.abs(numeroPC - numero);

    const nuovoDiv = document.createElement("div");
    nuovoDiv.classList.add("risultato");

    // Aggiunge il numero ai tentativi precedenti
    storicoTentativi.textContent += numero + " || ";

    // Messaggi e colori in base alla differenza
    if (numero === numeroPC) {
      nuovoDiv.textContent = "🎉 COMPLIMENTI! Hai indovinato!";
      nuovoDiv.style.backgroundColor = "#00FF00"; // verde
      // Disattiva input e bottone
      nuovoInput.disabled = true;
      nuovoInvia.disabled = true;
      const reset = document.createElement("button");
reset.textContent = "Ricomincia";
document.body.appendChild(reset);

reset.addEventListener("click", () => {
  location.reload(); // 🔁 Ricarica la pagina
});

    } else if (differenza <= 16) {
      nuovoDiv.textContent = "🔥 Molto vicino";
      nuovoDiv.style.backgroundColor = "#FF0000";
    } else if (differenza <= 32) {
      nuovoDiv.textContent = "✨ Vicino";
      nuovoDiv.style.backgroundColor = "#FF4500";
    } else if (differenza <= 48) {
      nuovoDiv.textContent = "🟣 Abbastanza vicino";
      nuovoDiv.style.backgroundColor = "#800080";
    } else if (differenza <= 64) {
      nuovoDiv.textContent = "🔵 Abbastanza lontano";
      nuovoDiv.style.backgroundColor = "#4B0082";
    } else if (differenza <= 80) {
      nuovoDiv.textContent = "🔷 Lontano";
      nuovoDiv.style.backgroundColor = "#0000FF";
    } else {
      nuovoDiv.textContent = "❄️ Molto lontano";
      nuovoDiv.style.backgroundColor = "#00008B";
    }

    // Mostra il messaggio
    document.body.appendChild(nuovoDiv);
  });
});
