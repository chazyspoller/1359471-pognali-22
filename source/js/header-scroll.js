var pageHeader = document.querySelector('.page-header');
var navLogo = document.querySelector('.main-nav__logo');
var navMenu = document.querySelector('.main-nav__menu');

window.addEventListener('scroll', function() {
  if (window.pageYOffset >= (pageHeader.offsetHeight - 2)) {
    pageHeader.classList.add('page-header--scroll');
      navLogo.classList.add('main-nav__logo--dark')
  } else {
    pageHeader.classList.remove('page-header--scroll');
    if (navMenu.classList.contains('main-nav__menu--closed')) {
      navLogo.classList.remove('main-nav__logo--dark')
    }
  }
});
