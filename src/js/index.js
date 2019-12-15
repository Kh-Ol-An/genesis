'use strict';

const btnContinue = document.getElementById('continue');
const array = document.querySelectorAll('.section-form-box_orange');
const inputOrange = Array.from(array);
const labels = inputOrange.filter(
  input => !(getComputedStyle(input).display === 'none'),
);
// console.log('label', label);
labels.forEach(label =>
  label.addEventListener('click', () => {
    // console.log('btnContinue.style.display', btnContinue.style.display);
    console.log('btnContinue', btnContinue);
    btnContinue.classList.remove('display');
    // btnContinue.style.display = 'block';
  }),
);
