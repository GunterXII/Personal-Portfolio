
    // Seleziona tutti gli elementi delle opzioni
    const optionImages = document.querySelectorAll(".option-image");
    // Seleziona gli elementi dei risultati
    const userHand = document.querySelector(".user-result img");
    const cpuHand = document.querySelector(".cpu-result img");
    // Seleziona l'elemento del risultato testuale
    const resultText = document.querySelector(".result");
    
    // Opzioni disponibili
    const choices = ["sasso", "carta", "forbici"];
    // Percorsi immagini per ogni scelta
    const choiceImages = {
        sasso: "fist.png",
        carta: "hand-paper.png",
        forbici: "scissors.png"
    };
    
    // Variabili per l'animazione
    let animationInterval;
    let bounceCount = 0;
    const totalBounces = 6; // 3 su e 3 giù (3 cicli completi)
    let isPlaying = false;
    
    // Funzione per animare le mani (su e giù)
    function animateHands() {
        // Stato iniziale: mani in posizione bassa
        let isUp = false;
        
        // Avvia l'intervallo di animazione
        animationInterval = setInterval(() => {
            // Alterna la posizione delle mani (su/giù)
            if (isUp) {
                // Posizione giù
                userHand.style.transform = "rotate(90deg) translateY(0)";
                cpuHand.style.transform = "rotate(-90deg) rotateY(180deg) translateY(0)";
            } else {
                // Posizione su
                userHand.style.transform = "rotate(90deg) translateY(-30px)";
                cpuHand.style.transform = "rotate(-90deg) rotateY(180deg) translateY(-30px)";
            }
            
            // Alterna lo stato per il prossimo ciclo
            isUp = !isUp;
            
            // Controlla se abbiamo completato i cicli
            bounceCount++;
            if (bounceCount >= totalBounces) {
                clearInterval(animationInterval);
                bounceCount = 0;
            }
        }, 300); // Ogni 300ms (0.3 secondi)
    }
    
    // Funzione per fermare l'animazione e mostrare la scelta finale
    function stopAnimationAndShowResult(userChoice, cpuChoice) {
        // Ferma l'animazione
        clearInterval(animationInterval);
        
        // Ripristina la posizione originale
        userHand.style.transform = "rotate(90deg)";
        cpuHand.style.transform = "rotate(-90deg) rotateY(180deg)";
        
        // Aggiorna le immagini con le scelte finali
        userHand.src = choiceImages[userChoice];
        cpuHand.src = choiceImages[cpuChoice];
        
        // Riabilita le opzioni di gioco
        isPlaying = false;
    }
    
    // Funzione per determinare il vincitore
    function determineWinner(userChoice, cpuChoice) {
        if (userChoice === cpuChoice) {
            return "PAREGGIO! 😐";
        } else if (
            (userChoice === "sasso" && cpuChoice === "forbici") ||
            (userChoice === "carta" && cpuChoice === "sasso") ||
            (userChoice === "forbici" && cpuChoice === "carta")
        ) {
            return "HAI VINTO! 🎉";
        } else {
            return "HAI PERSO! 😢";
        }
    }
    
    // Aggiungi event listener a ogni opzione
    optionImages.forEach((option) => {
        option.addEventListener("click", () => {
            // Se c'è già un gioco in corso, ignora il click
            if (isPlaying) return;
            
            // Imposta il flag di gioco in corso
            isPlaying = true;
            
            // Ottieni scelta utente dall'attributo data
            const userChoice = option.getAttribute("data-choice");
            
            // Resetta le mani allo stato iniziale (pugni chiusi)
            userHand.src = "fist.png";
            cpuHand.src = "fist.png";
            
            // Resetta il risultato precedente
            resultText.textContent = "Sasso... Carta... Forbici!";
            
            // Avvia l'animazione delle mani che oscillano
            animateHands();
            
            // Dopo 3 secondi (durata dell'animazione) mostra il risultato
            setTimeout(() => {
                // Genera scelta casuale per CPU
                const randomIndex = Math.floor(Math.random() * 3);
                const cpuChoice = choices[randomIndex];
                
                // Ferma animazione e mostra risultato
                stopAnimationAndShowResult(userChoice, cpuChoice);
                
                // Determina il vincitore
                const result = determineWinner(userChoice, cpuChoice);
                
                // Mostra il risultato con effetto di animazione
                resultText.textContent = result;
                resultText.style.transform = "scale(1.2)";
                setTimeout(() => {
                    resultText.style.transform = "scale(1)";
                }, 300);
                
            }, 3000); // Ritardo di 3 secondi
        });
    });
