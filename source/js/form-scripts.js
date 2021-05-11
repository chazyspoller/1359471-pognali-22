//Fun-plans error field
var buttonStepsSubmit = document.querySelector('.step__button-submit');
var funPlans = document.querySelectorAll('.fun-plans');
var textareaFunPlans = document.querySelectorAll('.fun-plans__plan');

buttonStepsSubmit.addEventListener('click', function() {
  for (let i=0; i < textareaFunPlans.length; i++) {
    if (textareaFunPlans[i].value == '') {
    funPlans[i].classList.add('fun-plans--error');
    } else {
      funPlans[i].classList.remove('fun-plans--error');
    }
  }
});

// Plus and minus of counter
const plus = document.querySelectorAll('.form-box__button--plus');
const minus = document.querySelectorAll('.form-box__button--minus');
var days = document.getElementById('days');
var travelers = document.getElementById('travelers');

console.log(days);

for (let i=0; i < plus.length; i++) {
  plus[i].addEventListener('click', function() {
    if (i == 0) {
      travelers.value++;
    } else {
      days.value++;
    }
  });
}

for (let i=0; i < minus.length; i++){
  minus[i].addEventListener('click', function() {
    if (i == 0) {
    if (travelers.value != 0) {
    travelers.value--;
  }} else {
    if (days.value != 0) {
      days.value--;
    }
  }
});
}
