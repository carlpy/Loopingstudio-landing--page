const burger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.header__menu-mobile');

burger.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('show__menu-mobile');
    burger.classList.toggle('rotate-burger');
})