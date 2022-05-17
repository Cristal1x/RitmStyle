const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const header = document.querySelector('.header');
const logo = document.querySelector('.header__logo');
const button = document.querySelector('.header__button');
const image = document.querySelector('.header__image');

burger.addEventListener('click', function() {
  if (nav.classList.contains('show')) {
    header.classList.remove('column');
    nav.classList.add('hide');
    nav.classList.remove('show');
    image.src = "../img/hamburger.png";
    logo.classList.remove('hide');
    button.classList.remove('hide');
  } else {
    nav.classList.add('show');
    nav.classList.remove('hide');
    header.classList.add('column');
    image.src = "../img/close.png";
    logo.classList.add('hide');
    button.classList.add('hide');
  }
})