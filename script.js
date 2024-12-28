// Gestione del caricamento e transizione
window.onload = function () {
    const loadingScreen = document.getElementById('loading-screen');
    const finalContent = document.getElementById('final-content');

    // Dopo 5 secondi, passa dalla schermata di caricamento alla pagina finale
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Nasconde la schermata di caricamento
        finalContent.style.opacity = '1'; // Mostra il contenuto finale con transizione
    }, 5000); // 5 secondi di caricamento
};
