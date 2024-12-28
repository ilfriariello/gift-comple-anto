document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const finalContent = document.getElementById("final-content");
    const message = document.getElementById("message");
    const audio = document.getElementById("background-music");

    // Animazione barra di caricamento
    const progressBar = document.querySelector(".progress");
    progressBar.style.animation = "loadingProgress 5s linear forwards";

    // Dopo 5 secondi mostra il contenuto finale
    setTimeout(() => {
        loadingScreen.style.display = "none";
        finalContent.style.opacity = "1";

        // Mostra il messaggio dopo 3 secondi
        setTimeout(() => {
            message.style.opacity = "1";
        }, 3000);
    }, 5000);

    // Riproduzione audio dopo il primo click dell'utente
    const enableAudio = () => {
        audio.play().catch((error) => {
            console.error("Errore durante la riproduzione dell'audio:", error);
        });

        // Rimuove il listener dopo l'attivazione
        document.removeEventListener("click", enableAudio);
    };

    // Aggiunge un listener al primo click per avviare l'audio
    document.addEventListener("click", enableAudio);
});
