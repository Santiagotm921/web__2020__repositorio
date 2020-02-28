//Colors
var black= "#000"
var red = "#aa0400";
var white = "#fff";
var blue = "#0098f0";

var breackpoint = 930;
var ancho = window.innerWidth;

//Class
var principal = document.querySelector('.menu');
var characteristics = document.querySelector('.characteristics');
var menu = document.querySelector('.menu__container');
var publiShoe = document.querySelector('.publicity__shoe');
var h1 = document.querySelector('h1');
var register = document.querySelector('.register');
var hamburguer = document.querySelector('.mainnav');


//Buttons
var btnRed = document.querySelector('.buttons--red');
var btnWhite = document.querySelector('.buttons--white');
var btnBlack = document.querySelector('.buttons--black');
var btnBlue = document.querySelector('.buttons--blue');

var handleBlack = function () {
    principal.style.background = black;
    characteristics.style.background = black;
    hamburguer.style.background = red;
    menu.style.background = red;
    //Preguntar: Si aplico lo mismo para h1, como hacer que coja todos los h1 y no solo 1;
    //publiShoe.style.background = red;
}

var handleWhite = function () {
    principal.style.background = white;
    characteristics.style.background = white;
    hamburguer.style.background = red;
    menu.style.background = red;
    //Preguntar: Si aplico lo mismo para h1, como hacer que coja todos los h1 y no solo 1;
    //publiShoe.style.background = red;
}

/*btnRed.addEventListener('click', handleRed);
btnBlue.addEventListener('click', handleBlue);*/
btnWhite.addEventListener('click', handleWhite); 
btnBlack.addEventListener('click', handleBlack);
