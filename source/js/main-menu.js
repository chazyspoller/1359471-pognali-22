var navMenu = document.querySelector('.main-nav__menu');
var navLogo = document.querySelector('.main-nav__logo');
var navToggle = document.querySelector('.main-nav__toggle');
var headerMainBox = document.querySelector('.main-nav__box-top');

navMenu.classList.remove('main-nav__menu--nojs');

navToggle.addEventListener('click', function() {
  if (navMenu.classList.contains('main-nav__menu--closed')) {
    navMenu.classList.remove('main-nav__menu--closed');
    navMenu.classList.add('main-nav__menu--opened');
    navToggle.classList.add('main-nav__toggle--close');
    navLogo.classList.add('main-nav__logo--dark')
    headerMainBox.classList.add('main-nav__box-top--menu-opened');
  } else {
    navMenu.classList.add('main-nav__menu--closed');
    navMenu.classList.remove('main-nav__menu--opened');
    navToggle.classList.remove('main-nav__toggle--close');
    headerMainBox.classList.remove('main-nav__box-top--menu-opened');
    if (!pageHeader.classList.contains('page-header--scroll')) {
      navLogo.classList.remove('main-nav__logo--dark')
    }
  }
});
