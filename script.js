window.onload = function() {
    // Barra di caricamento
    let progress = document.querySelector('.progress');
    let loadingScreen = document.getElementById('loading-screen');
    let finalContent = document.getElementById('final-content');
    let message = document.getElementById('message');

    // Animazione della barra di caricamento
    let progressWidth = 0;
    let interval = setInterval(function() {
        progressWidth += 1;
        progress.style.width = progressWidth + '%';
        if (progressWidth >= 100) {
            clearInterval(interval);
            setTimeout(function() {
                loadingScreen.style.display = 'none'; // Nasconde la schermata di caricamento
                finalContent.style.opacity = 1; // Mostra il contenuto finale
                message.style.opacity = 1; // Mostra il messaggio
            }, 500); // 500 ms di ritardo
        }
    }, 30); // Ogni 30 ms aggiorna la barra di caricamento

    // Rimuovi il mute dopo 1 secondo per sbloccare l'audio
    setTimeout(function() {
        const audio = document.getElementById('background-music');
        audio.muted = false; // Disattiva il mute
    }, 1000); // Dopo 1 secondo
};
