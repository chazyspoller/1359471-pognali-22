var pageHeader = document.querySelector('.page-header');
var navLogo = document.querySelector('.main-nav__logo');

window.addEventListener('scroll', function() {
  if (window.pageYOffset >= (pageHeader.offsetHeight - 2)) {
    pageHeader.classList.add('page-header--scroll');
    navLogo.classList.add('main-nav__logo--dark')
  } else {
    pageHeader.classList.remove('page-header--scroll');
    navLogo.classList.remove('main-nav__logo--dark')
  }
});
