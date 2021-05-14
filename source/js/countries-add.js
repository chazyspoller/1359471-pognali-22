var openCountriesSelection = document.querySelector('.tour-list__field--dropdown');
var countriesSelection = document.querySelector('.tour-list__countries-selection');
var closeCountriesSelection = document.querySelector('.tour-list__button--open');

openCountriesSelection.addEventListener('click', function(evt) {
  evt.preventDefault();

  if (!openCountriesSelection.classList.contains('tour-list__field--open-dropdown')) {
    openCountriesSelection.classList.add('tour-list__field--open-dropdown');
    closeCountriesSelection.classList.add('tour-list__button--close');
    closeCountriesSelection.classList.remove('tour-list__button--more');
    countriesSelection.classList.remove('countries-selection--hide');
  } else {
    openCountriesSelection.classList.remove('tour-list__field--open-dropdown');
    closeCountriesSelection.classList.remove('tour-list__button--close');
    closeCountriesSelection.classList.add('tour-list__button--more');
    countriesSelection.classList.add('countries-selection--hide');
  }
});

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27) {
    if(openCountriesSelection.classList.contains('tour-list__field--open-dropdown')) {
      evt.preventDefault();
      openCountriesSelection.classList.remove('tour-list__field--open-dropdown');
      closeCountriesSelection.classList.remove('tour-list__button--close');
      closeCountriesSelection.classList.add('tour-list__button--more');
      countriesSelection.classList.add('countries-selection--hide');
    }
  }
});
