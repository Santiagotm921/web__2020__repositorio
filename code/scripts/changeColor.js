//Colors
var black = "#000"
var red = "#aa0400";
var white = "#fff";
var blue = "#0098f0";

var breackpoint = 930;
var ancho = window.innerWidth;

//Buttons
var btnRed = document.querySelector('.buttons--red');
var btnWhite = document.querySelector('.buttons--white');
var btnBlack = document.querySelector('.buttons--black');
var btnBlue = document.querySelector('.buttons--blue');

//Class
var principal = document.querySelector('.menu');
var characteristics = document.querySelector('.characteristics');
var register = document.querySelector('.register');
var hamburguer = document.querySelector('.mainnav');
var bannerTexts = document.querySelector('.bannershoe__texts');
var btnGiant = document.querySelector('.bannershoe__button');


var h1 = document.querySelectorAll('h1');
var publiTexts = document.querySelectorAll('.publicity__text');


/*CHANGE CLASSES */

var menu = document.querySelector('.menu__container');
var menuBlack = document.querySelector('.menu__container--black');

var publiShoes = document.querySelectorAll('.publicity__shoe');
var publiShoesBlack = document.querySelectorAll('.publicity__shoe--black');


/*CHANGE CLASSES */

var handleBlack = function () {

    principal.style.background = black;
    characteristics.style.background = black;
    register.style.background = black;

    
    for (let i = 0; i < publiShoes.length; i++) {
        const shoe = publiShoes[i];
        shoe.classList.toggle('publicity__shoe--black');
    }

    for (let i = 0; i < publiTexts.length; i++) {
        const textsShoes = publiTexts[i];
        textsShoes.classList.toggle('publicity__shoe--black');
    } 

    /*CHANGE CLASSES */
    menu.classList.toggle('menu__container--black');
}

var handleWhite = function () {
    principal.style.background = white;
    characteristics.style.background = white;
    hamburguer.style.background = red;
    menu.style.background = red;
    bannerTexts.style.color = red;
    btnGiant.style.background = red;

    for (let i = 0; i < publiShoes.length; i++) {
        const shoe = publiShoes[i];
        shoe.style.background = red;
        shoe.style.color = white;
    }
}

var handleRed = function () {
    window.location.reload();
}


/*btnBlue.addEventListener('click', handleBlue);*/
btnRed.addEventListener('click', handleRed);
btnBlack.addEventListener('click', handleBlack);
btnWhite.addEventListener('click', handleWhite);
