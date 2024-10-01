$(document).ready(function() {
    // Vérifier chaque champ au chargement de la page
    $('.js-input').each(function() {
        if ($(this).val()) {
            $(this).addClass('not-empty');
        }
    });

    // Gérer l'événement de saisie
    $('.js-input').keyup(function() {
        if ($(this).val()) {
            $(this).addClass('not-empty');
        } else {
            $(this).removeClass('not-empty');
        }
    });
});
