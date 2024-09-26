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

/** DRAW CURSOR **/

const cursor = document.querySelector(".cursor");

let CURSOR_X = 0, CURSOR_Y = 0;
let OFFSET_X = 0, OFFSET_Y = 0;
function storeCursorPosition(event) {
    CURSOR_X = event.pageX;
    CURSOR_Y = event.pageY;
}
document.body.addEventListener("mousemove", storeCursorPosition, false);

function getCursorPosition() {
    return [
        CURSOR_X - OFFSET_X,
        CURSOR_Y - OFFSET_Y,
    ];
}
function step() {
    const [x, y] = getCursorPosition();
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

/** STYLEIST **/

feather.replace()


/** APPARITION FLECHE TO TOP **/
window.addEventListener('scroll', function() {
    const scrollToTopElement = document.querySelector('.scroll-to-top');
    const scrollPosition = window.scrollY;

    // Définir le point de déclenchement (par exemple, 300 pixels)
    if (scrollPosition > 300) {
        scrollToTopElement.classList.add('active');
        scrollToTopElement.style.display = 'block'; // Affiche le bouton lorsque visible
    } else {
        scrollToTopElement.classList.remove('active');
        scrollToTopElement.style.display = 'none'; // Cache le bouton lorsque non visible
    }
});

// Fonction pour faire défiler la page vers le haut
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement doux
    });
}

