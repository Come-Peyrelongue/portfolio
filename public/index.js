const menuButton = document.getElementById('menu-button');
const menuContainer = document.getElementById('menu-container');

// Gérer l'ouverture et la fermeture du menu et appliquer la classe active
menuButton.addEventListener('click', () => {
    if (menuContainer.classList.contains('visible')) {
        menuContainer.classList.remove('visible');
        menuButton.classList.remove('active'); // Retirer la classe active lorsque le menu est fermé
    } else {
        menuContainer.classList.add('visible');
        menuButton.classList.add('active'); // Ajouter la classe active lorsque le menu est ouvert
    }
});

// Fermer le menu si on clique à l'extérieur du menu et retirer la classe active du bouton
document.addEventListener('click', (e) => {
    if (!menuContainer.contains(e.target) && !menuButton.contains(e.target)) {
        menuContainer.classList.remove('visible');
        menuButton.classList.remove('active'); // Retirer la classe active
    }
});
