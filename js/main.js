const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const header = document.querySelector('.header');
const logo = document.querySelector('.header__logo');
const button = document.querySelector('.header__button');

burger.addEventListener('click', function() {
  console.log(nav.className);
  if (nav.classList.contains('show')) {
    header.classList.remove('column');
    nav.classList.add('hide');
    nav.classList.remove('show');
    burger.style.backgroundImage = "url('../img/hamburger.svg')";
    logo.classList.remove('hide');
    button.classList.remove('hide');
  } else {
    nav.classList.add('show');
    nav.classList.remove('hide');
    header.classList.add('column');
    burger.style.backgroundImage = "url('../img/close.svg')";
    logo.classList.add('hide');
    button.classList.add('hide');
  }
})