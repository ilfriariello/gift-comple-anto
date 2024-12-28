// Funzione che si attiva dopo la transizione (quando la schermata rossa è visibile)
function showRedScreen() {
    // Mostra la seconda schermata (sfondo rosso e foto)
    document.getElementById('red-screen').style.display = 'block';

    // Mostra il testo dopo un ritardo di 3 secondi
    setTimeout(function() {
        document.getElementById('text-message').style.display = 'block';
    }, 3000); // Testo appare dopo 3 secondi
}

// Funzione per la schermata di caricamento nera
function showLoadingScreen() {
    // Imposta il colore di sfondo su nero
    document.body.style.backgroundColor = 'black';
    // Mostra la barra di caricamento
    document.getElementById('loading').style.display = 'block';

    // Dopo 5 secondi, mostra la schermata rossa
    setTimeout(showRedScreen, 5000);
}

// Esegui la funzione della schermata nera all'avvio della pagina
window.onload = function() {
    showLoadingScreen();
};
