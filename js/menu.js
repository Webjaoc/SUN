//menu hamburger

const Menu = document.querySelector('.menu');
const nav_Bar = document.querySelector('.nav');
const close_menu = document.querySelector('.close_menu');


Menu.addEventListener('click', () => {
    if(nav_Bar.style.visibility = 'hidden'){
        nav_Bar.style.visibility = 'visible';
    }
})
close_menu.addEventListener('click', () => {
    if(nav_Bar.style.visibility = 'visible'){
        nav_Bar.style.visibility = 'hidden';
    }
})