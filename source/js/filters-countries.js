var filterCountriesMenu = document.querySelector('.sort__filter-menu');
var filterWorldList = document.querySelector('.sort__world-list');
var buttonAlphabetOpen = document.querySelector('.sort__toggle');
var buttonAlphabetClose = document.querySelector('.sort__close');

filterCountriesMenu.classList.remove('sort__filter-menu--nojs');
filterWorldList.classList.remove('sort__world-list--nojs');

buttonAlphabetOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (filterCountriesMenu.classList.contains('sort__filter-menu--hide')) {
    filterCountriesMenu.classList.remove('sort__filter-menu--hide');
    filterWorldList.classList.remove('sort__world-list--hide');
    buttonAlphabetOpen.classList.add('sort__toggle--close');
  } else {
    filterCountriesMenu.classList.add('sort__filter-menu--hide');
    filterWorldList.classList.add('sort__world-list--hide');
    buttonAlphabetOpen.classList.remove('sort__toggle--close');
  }
});

buttonAlphabetClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (filterCountriesMenu.classList.contains('sort__filter-menu--hide')) {
    filterCountriesMenu.classList.remove('sort__filter-menu--hide');
    filterWorldList.classList.remove('sort__world-list--hide');
    buttonAlphabetOpen.classList.add('sort__toggle--close');
  } else {
    filterCountriesMenu.classList.add('sort__filter-menu--hide');
    filterWorldList.classList.add('sort__world-list--hide');
    buttonAlphabetOpen.classList.remove('sort__toggle--close');
  }
});

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27) {
    if(!filterCountriesMenu.classList.contains('sort__filter-menu--hide')) {
      evt.preventDefault();
      filterCountriesMenu.classList.add('sort__filter-menu--hide');
      filterWorldList.classList.add('sort__world-list--hide');
      buttonAlphabetOpen.classList.remove('sort__toggle--close');
    }
  }
});
