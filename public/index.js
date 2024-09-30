// LOADER ET ANIMATION DE LA PAGE
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    const maskedElements = document.querySelectorAll('.masked');

    // Simuler un délai de chargement
    setTimeout(() => {
        loader.classList.add('fade-out'); // Fait disparaître le loader
        content.style.display = 'block'; // Affiche le contenu principal

        setTimeout(() => {
            content.classList.add('show'); // Anime l'apparition du contenu global
            maskedElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('show'); // Anime chaque élément avec un effet de masque
                }, index * 300); // Délai progressif pour chaque élément
            });
        }, 100); // Légère pause pour un effet plus fluide
    }, 2000); // Délai de 2 secondes pour simuler le chargement
});

// AFFICHAGE DE LA DIV SCROLL TO TOP AU DEFILEMENT
window.addEventListener('scroll', function() {
    const scrollToTopElement = document.querySelector('.scroll-to-top');
    const scrollPosition = window.scrollY;

    // Définir le point de déclenchement (par exemple, 300 pixels)
    if (scrollPosition > 500) {
        scrollToTopElement.classList.add('visible');
        scrollToTopElement.style.display = 'flex'; // Affiche le bouton lorsque visible
    } else {
        scrollToTopElement.classList.remove('visible');
        scrollToTopElement.style.display = 'none'; // Cache le bouton lorsque non visible
    }
});

// TRANSITION DE LA PAGE HTML
window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0;
    setTimeout(function() {
        window.location.href = href;
    }, 1000);
}

// Utiliser 'pageshow' pour s'assurer que la page réapparaît correctement après un retour arrière
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {  // Détecte si la page est chargée à partir du cache
        document.querySelector('body').style.opacity = 1;
    }
});

// Assurer que l'opacité est réinitialisée lors du chargement initial de la page
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('body').style.opacity = 1;
});


// APPARITION DU MENU AU CLICK
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
        menuContainer.classList.remove('active');
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