var navMain = document.querySelector('.main-nav__menu');
var navLogo = document.querySelector('.main-nav__logo');
var navToggle = document.querySelector('.main-nav__toggle');
//var body = document.querySelector('.page__body');

navMain.classList.remove('main-nav__menu--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__menu--closed')) {
    navMain.classList.remove('main-nav__menu--closed');
    navMain.classList.add('main-nav__menu--opened');
    navToggle.classList.add('main-nav__toggle--close');
    navLogo.classList.add('main-nav__logo--dark')
    //body.classList.add('page__body--lock-scroll');
  } else {
    navMain.classList.add('main-nav__menu--closed');
    navMain.classList.remove('main-nav__menu--opened');
    navToggle.classList.remove('main-nav__toggle--close');
    //body.classList.remove('page__body--lock-scroll');
    if (!pageHeader.classList.contains('page-header--scroll')) {
      navLogo.classList.remove('main-nav__logo--dark')
    }
  }
});
