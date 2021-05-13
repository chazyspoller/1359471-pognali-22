//Registration error field
var registrationButton = document.querySelector('.registration__button');
var registrationForm = document.querySelector('.registration__mail');

registrationButton.addEventListener('click', function() {
  registrationForm.classList.add('registration__mail--submitted');
});
