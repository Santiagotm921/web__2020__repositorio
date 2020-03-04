//Colors
var black = "#000"
var red = "#aa0400";
var white = "#fff";
var yellow = "#f9be24";
var rose = "#fc0085";
var none = "none";
var flex = "flex";

var breackpoint = 930;
var ancho = window.innerWidth;

//Buttons
var btnRed = document.querySelector('.buttons--red');
var btnWhite = document.querySelector('.buttons--white');
var btnBlack = document.querySelector('.buttons--black');
var btnYellow = document.querySelector('.buttons--yellow');
//Buttons

//Class
var principal = document.querySelector('.menu');
var principalBlack = document.querySelector('.menu--black');
var principalWhite = document.querySelector('.menu--white');


var characteristics = document.querySelector('.characteristics');
var characteristicsBlack = document.querySelector('.characteristics--black');
var characteristicsWhite = document.querySelector('.characteristics--white');
var hamburguer = document.querySelector('.mainnav');
var hamburguerWhite = document.querySelector('.mainnav--white');

var bannerTexts = document.querySelector('.bannershoe__texts');
var bannerTextsWhite = document.querySelector('.bannershoe__texts--white');

var btnGiant = document.querySelector('.bannershoe__button');
var btnGiantWhite = document.querySelector('.bannershoe__button--white');

var publiTexts = document.querySelectorAll('.publicity__text');


/*CHANGE CLASSES */

var menu = document.querySelector('.menu__container');
var menuBlack = document.querySelector('.menu__container--black');
var menuWhite = document.querySelector('.menu__container--white');

var changeColor = document.querySelector('.changeColor');
var changeColorBlack = document.querySelector('.changeColor--black');

var publiShoes = document.querySelectorAll('.publicity__shoe');
var publiShoesBlack = document.querySelectorAll('.publicity__shoe--black');
var publiShoesWhite = document.querySelectorAll('.publicity__shoe--white');

var register = document.querySelector('.register');
var registerBlack = document.querySelector('.register--black');
var registerWhite = document.querySelector('.register--white');

var shoeColors = document.querySelector('.changeColor__shoe');
var shoeColorsWhite = document.querySelector('.changeColor__shoe--white');
var shoeColorsBlack = document.querySelector('.changeColor__shoe--black');
var shoeColorsYellow = document.querySelector('.changeColor__shoe--yellow');

/*CHANGE CLASSES */

var handleBlack = function () {

    for (let i = 0; i < publiShoes.length; i++) {
        const shoe = publiShoes[i];
        shoe.classList.add('publicity__shoe--black');
    }

    for (let i = 0; i < publiTexts.length; i++) {
        const textsShoes = publiTexts[i];
        textsShoes.classList.add('publicity__shoe--black');
    }

    /*CHANGE CLASSES */
    menu.classList.add('menu__container--black');
    characteristics.classList.add('characteristics--black');
    changeColor.classList.add('changeColor--black');
    principal.classList.add('menu--black');
    register.classList.add('register--black');

    //CAMBIAR ZAPATO POR OTRO ------- CONDIONAL------
    shoeColors.classList.add('changeColor__shoe--black');
    shoeColorsBlack.style.display = flex;

    if (shoeColorsBlack.style.display = flex) {

        shoeColors.style.display = none;
        shoeColorsWhite.style.display = none;
        shoeColorsYellow.style.display = none;
    }

    removeWhite();
}

var handleWhite = function () {

    for (let i = 0; i < publiShoes.length; i++) {
        const shoe = publiShoes[i];
        shoe.classList.add('publicity__shoe--white');
    }

    register.classList.add('register--white');
    principal.classList.add('menu--white');
    characteristics.classList.add('characteristics--white');
    hamburguer.classList.add('mainnav--white')
    bannerTexts.classList.add('bannershoe__texts--white');
    btnGiant.classList.add('bannershoe__button--white');
    menu.classList.add('menu__container--white');

    //CAMBIAR ZAPATO POR OTRO ------- CONDIONAL------

    shoeColors.classList.add('changeColor__shoe--white');
    shoeColorsWhite.style.display = flex;

    if (shoeColorsWhite.style.display = flex) {

        shoeColors.style.display = none;
        shoeColorsBlack.style.display = none;
        shoeColorsYellow.style.display = none;
    }

    removeBlack();

}

var handleYellow = function () {

    //CAMBIAR ZAPATO POR OTRO ------- CONDIONAL------
    shoeColors.classList.add('changeColor__shoe--yellow');
    shoeColorsYellow.style.display = flex;

    if (shoeColorsYellow.style.display = flex) {

        shoeColors.style.display = none;
        shoeColorsBlack.style.display = none;
        shoeColorsWhite.style.display = none;
    }

    removeBlack();
    removeWhite();

}

var handleRed = function () {
    window.location.reload();
}

var removeBlack = function () {
    /*publiShoes.classList.remove('publicity__shoe--black');
    publiTexts.classList.remove('publicity__shoe--black'); */
    menu.classList.remove('menu__container--black');
    characteristics.classList.remove('characteristics--black');
    changeColor.classList.remove('changeColor--black');
    principal.classList.remove('menu--black');
    register.classList.remove('register--black');
    shoeColors.classList.remove('changeColor__shoe--black');
}

var removeWhite = function () {

    register.classList.remove('register--white');
    principal.classList.remove('menu--white');
    characteristics.classList.remove('characteristics--white');
    hamburguer.classList.remove('mainnav--white')
    bannerTexts.classList.remove('bannershoe__texts--white');
    btnGiant.classList.remove('bannershoe__button--white');
    menu.classList.remove('menu__container--white');
    shoeColors.classList.remove('changeColor__shoe--white');
}

btnYellow.addEventListener('click', handleYellow);
btnRed.addEventListener('click', handleRed);
btnBlack.addEventListener('click', handleBlack);
btnWhite.addEventListener('click', handleWhite);


