$(function () {

    $('.jeux').click(function () {
        console.log('prout');
       $('.text-aussi').html('<p class="blue-text text-darken-1">Passionné de jeux vidéo,</p><p class="blue-text text-darken-1">des plus anciens aux plus récents</p>');
    });

    $('.informatique').click(function(){
       $('.text-aussi').html('<p class="blue-text text-darken-1">Passionné d\'informatique</p>\n' +
           '            <p class="blue-text text-darken-1">et des nouvelles technologies</p>');
    });

    $('.tele').click(function () {
       $('.text-aussi').html('<p class="blue-text text-darken-1">Passionné de films / séries / livres :</p>\n' +
           '            <p class="blue-text text-darken-1">- Science-fiction</p>\n' +
           '            <p class="blue-text text-darken-1">- Heroique fantaisy</p>\n' +
           '            <p class="blue-text text-darken-1">- Manga et Comics</p>');
    });

    $('.voiture').click(function () {
       $('.text-aussi').html('<p class="blue-text text-darken-1">Permis voiture</p>\n' +
           '            <p class="blue-text text-darken-1">Permis moto</p>\n' +
           '            <p class="blue-text text-darken-1">Véhicules personnel</p>');
    });
});
