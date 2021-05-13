var navMenu = document.querySelector('.main-nav__menu');
var navLogo = document.querySelector('.main-nav__logo');
var navToggle = document.querySelector('.main-nav__toggle');
var headerMain = document.querySelector('.main-nav');
//var body = document.querySelector('.page__body');

navMenu.classList.remove('main-nav__menu--nojs');

navToggle.addEventListener('click', function() {
  if (navMenu.classList.contains('main-nav__menu--closed')) {
    navMenu.classList.remove('main-nav__menu--closed');
    navMenu.classList.add('main-nav__menu--opened');
    navToggle.classList.add('main-nav__toggle--close');
    navLogo.classList.add('main-nav__logo--dark')
    headerMain.classList.add('main-nav--margin-top-menu');
    //body.classList.add('page__body--lock-scroll');
  } else {
    navMenu.classList.add('main-nav__menu--closed');
    navMenu.classList.remove('main-nav__menu--opened');
    navToggle.classList.remove('main-nav__toggle--close');
    headerMain.classList.remove('main-nav--margin-top-menu');
    //body.classList.remove('page__body--lock-scroll');
    if (!pageHeader.classList.contains('page-header--scroll')) {
      navLogo.classList.remove('main-nav__logo--dark')
    }
  }
});
