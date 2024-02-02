const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

navLink.addEventListener('click', () => {
    navLink.classList.toggle('hide');
});