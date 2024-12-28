window.onload = function () {
    const loadingScreen = document.getElementById('loading-screen');
    const finalContent = document.getElementById('final-content');
    const message = document.getElementById('message'); // Seleziona il testo sotto la foto
    const progress = document.querySelector('.progress'); // Seleziona la barra di progressione

    // Simuliamo il riempimento della barra di progressione
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval); // Ferma l'intervallo quando la barra raggiunge il 100%
            setTimeout(() => {
                // Dopo che la barra è piena, passa alla pagina finale
                loadingScreen.style.display = 'none'; // Nasconde la schermata di caricamento
                finalContent.style.opacity = '1'; // Mostra il contenuto finale con transizione
            }, 100); // Piccola attesa per evitare glitch
        } else {
            width++;
            progress.style.width = width + '%'; // Aumenta la larghezza della barra
        }
    }, 50); // Ogni 50 millisecondi la barra aumenta di 1%

    // Dopo 3 secondi dalla visualizzazione del contenuto, mostra il testo
    setTimeout(() => {
        message.style.opacity = '1'; // Fa apparire il messaggio
    }, 8000); // 8 secondi in totale (5 per la barra + 3 per il testo)
};
