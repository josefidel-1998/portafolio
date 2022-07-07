let boton = document.querySelector('.switch input');
let body = document.querySelector('body');
let menu = document.querySelector('#bar');
let nav = document.querySelector('nav');
let main = document.querySelector('main');

let html = document.querySelector('.html');
let bootstrap = document.querySelector('.bootstrap');
let tailwind = document.querySelector('.tailwind');
let wordpress = document.querySelector('.wordpress');
let javascript = document.querySelector('.javascript');
let vue = document.querySelector('.vue');
let textos = document.querySelectorAll('p,h2,h3,h4');
let type = document.querySelector('#about');

boton.addEventListener('click', e =>{
    body.classList.toggle('dark-mode');
    html.classList.toggle('neon');
    bootstrap.classList.toggle('neon');
    tailwind.classList.toggle('neon');
    wordpress.classList.toggle('neon');
    javascript.classList.toggle('neon');
    vue.classList.toggle('neon');
    textos.style.color = 'white';
});
menu.addEventListener('click', e =>{
    type.classList.toggle('about-show');
    nav.classList.toggle('nav-show');
    //main.setAttribute('id', 'particles-js');
});


let typed = new Typed('.typed', {
    strings: [
    '<i class="por">Hola mi nombre es</i>', 
    '<i class="por">Jose Fidel Diaz</i>',
    '<i class="por">Front-end Developer</i>',
    '<i class="por">Diseñador web</i>',
    ],
    typeSpeed: 80, // velocidad de la animacion
    startDelay: 300, // tiempo que tarda la animacion en empezar
    loop: true, // si se repite la animacion o no
    showCursor: true, // mostrar el cursor palpitando o no

});