// Mostra la pagina finale dopo il caricamento
window.onload = function () {
    const loadingScreen = document.getElementById('loading-screen');
    const fadeInContent = document.querySelector('.fade-in');

    // Nasconde il caricamento e mostra il contenuto con un delay
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        fadeInContent.classList.remove('hidden');
        fadeInContent.style.opacity = '1';
    }, 5000); // 5 secondi per completare la transizione
};
