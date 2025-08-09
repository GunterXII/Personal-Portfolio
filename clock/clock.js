// JavaScript corretto
const hourHand   = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

setInterval(setClock, 1000);

function setClock() {
  const now = new Date();

  const seconds = now.getSeconds() / 60;
  const minutes = (seconds + now.getMinutes()) / 60;
  const hours   = (minutes + now.getHours()) / 12;

  setRotation(secondHand, seconds);
  setRotation(minuteHand, minutes);
  setRotation(hourHand,   hours);
}

function setRotation(element, rotationRatio) {
  const degrees = rotationRatio * 360;
  element.style.setProperty("transform", `rotate(${degrees}deg)`);
}

// Avvia subito l’orologio (senza attendere 1 secondo)
setClock();
