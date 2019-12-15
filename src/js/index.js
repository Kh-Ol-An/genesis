'use strict';

const arrBtn = document.querySelectorAll('.section-form-box_continue');
const btnContinue = Array.from(arrBtn);

const arrOrange = document.querySelectorAll('.section-form-box_orange');
const orange = Array.from(arrOrange);

const arrGender = document.querySelectorAll('.section-form-box-gender_wrap');
const gender = Array.from(arrGender);

const arrLabels = orange.concat(gender);

const arrTextWrap = document.querySelectorAll('.article-bg-box_text-wrap');
const textWraps = Array.from(arrTextWrap);
const infoA = document.querySelector('.orange .info-a');
const infoB = document.querySelector('.orange .info-b');
const infoC = document.querySelector('.orange .info-c');
const infoM = document.querySelector('.yellow .info-m');
const infoF = document.querySelector('.yellow .info-f');

const labelsOrange = arrLabels.filter(
  input => !(getComputedStyle(input).display === 'none'),
);

labelsOrange.forEach(label => label.addEventListener('click', removeClassList));
function removeClassList() {
  textWraps.forEach(textWrap => textWrap.classList.add('display-opacity'));
  const checkedLabel = labelsOrange.find(label => label.firstChild.checked);
  checkedLabel.className.includes('option-a') &&
    infoA.classList.remove('display-opacity');
  checkedLabel.className.includes('option-b') &&
    infoB.classList.remove('display-opacity');
  checkedLabel.className.includes('option-c') &&
    infoC.classList.remove('display-opacity');
  checkedLabel.className.includes('option-m') &&
    infoM.classList.remove('display-opacity');
  checkedLabel.className.includes('option-f') &&
    infoF.classList.remove('display-opacity');
  btnContinue.forEach(btn => btn.classList.remove('display-none'));
}

// ====================================================================

const arrForm = document.querySelectorAll('.section_form-box');
const forms = Array.from(arrForm);
const form = forms[forms.length - 1];
const inputs = form.querySelectorAll('.section-form-box_input');
const nameInput = document.querySelector('.section_form-box input[type=text]');
const emailInput = document.querySelector(
  '.section_form-box input[type=email]',
);

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  console.log('form', form);
  console.log('object');
  e.preventDefault();

  resetErrorMessage();

  requiredInput();

  validationName();
  validationEmail();
}

const resetErrorMessage = () => {
  const errors = form.querySelectorAll('.error');
  errors.forEach(error => error.remove());
};

const createErrorMessage = (input, message) => {
  const error = document.createElement('p');
  error.className = 'error';
  error.textContent = message;
  input.after(error);
};

const requiredInput = () =>
  inputs.forEach(input => {
    if (input.value) return;
    const requiredMessage = 'Это поле обязательно к заполнению';
    createErrorMessage(input, requiredMessage);
  });

const validationName = () => {
  const validName = /^[a-zA-Zа-яА-Я]+$/.test(nameInput.value);
  if (validName) return;
  const validNameMessage = 'Допускаются только буквы';
  createErrorMessage(nameInput, validNameMessage);
};

const validationEmail = () => {
  const validEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(
    emailInput.value,
  );
  if (validEmail) return;
  const validEmailMessage = 'Введите валидный email';
  createErrorMessage(emailInput, validEmailMessage);
};
