var popupPrices = document.querySelector('.popup-business');
var buttonPopupPricesOpen = document.querySelector('.prices__link');
var buttonPopupPricesClose = document.querySelector('.popup-business__close');

buttonPopupPricesOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupPrices.classList.remove('popup-business--hide');
});

buttonPopupPricesClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupPrices.classList.add('popup-business--hide');
});

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27) {
    if(!popupPrices.classList.contains('popup-business--hide')) {
      evt.preventDefault();
      popupPrices.classList.add('popup-business--hide');
    }
  }
});
