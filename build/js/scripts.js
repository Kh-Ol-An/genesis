'use strict';

var btnContinue = document.getElementById('continue');
var array = document.querySelectorAll('.section-form-box_orange');
var inputOrange = Array.from(array);
var labels = inputOrange.filter(function (input) {
  return !(getComputedStyle(input).display === 'none');
}); // console.log('label', label);

labels.forEach(function (label) {
  return label.addEventListener('click', function () {
    // console.log('btnContinue.style.display', btnContinue.style.display);
    console.log('btnContinue', btnContinue);
    btnContinue.classList.remove('display'); // btnContinue.style.display = 'block';
  });
});