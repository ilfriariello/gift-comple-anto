window.onload = function() {
    let progress = document.querySelector('.progress');
    let loadingScreen = document.getElementById('loading-screen');
    let finalContent = document.getElementById('final-content');
    let message = document.getElementById('message');
    let audio = document.getElementById('background-music');
    
    // Barra di caricamento
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
            }, 500); // 500 ms di ritardo per permettere di vedere la fine del caricamento
        }
    }, 30); // Ogni 30 ms aggiorna la barra di caricamento

    // Aggiungi un evento di clic per avviare la musica
    document.body.addEventListener('click', function() {
        audio.muted = false; // Rimuove il mute
        audio.play(); // Inizia a riprodurre l'audio
    });
};
