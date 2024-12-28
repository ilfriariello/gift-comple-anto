// Gestione del caricamento e transizione
window.onload = function () {
    const loadingScreen = document.getElementById('loading-screen');
    const finalContent = document.getElementById('final-content');
    const message = document.getElementById('message'); // Seleziona il testo sotto la foto

    // Dopo 5 secondi, passa dalla schermata di caricamento alla pagina finale
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Nasconde la schermata di caricamento
        finalContent.style.opacity = '1'; // Mostra il contenuto finale con transizione
    }, 5000); // 5 secondi di caricamento

    // Dopo 3 secondi dalla visualizzazione del contenuto, mostra il testo
    setTimeout(() => {
        message.style.opacity = '1'; // Fa apparire il messaggio
    }, 8000); // 8 secondi in totale (5 + 3)
};
