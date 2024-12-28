/ Gestione del caricamento e transizione
window.onload = function () {
    const loadingScreen = document.getElementById('loading-screen');
    const finalContent = document.getElementById('final-content');
    const music = document.getElementById('music'); // Seleziona l'elemento audio
    const message = document.getElementById('message'); // Seleziona il testo

    // Dopo 5 secondi, passa dalla schermata di caricamento alla pagina finale
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Nasconde la schermata di caricamento
        finalContent.style.opacity = '1'; // Mostra il contenuto finale con transizione
        music.play(); // Avvia la riproduzione della canzone (anche se autoplay è già impostato)
    }, 5000); // 5 secondi di caricamento

    // Dopo 3 secondi dalla visualizzazione del contenuto, mostra il testo
    setTimeout(() => {
        message.style.opacity = '1'; // Fa apparire il messaggio
    }, 8000); // 8 secondi in totale (5 + 3)
};
