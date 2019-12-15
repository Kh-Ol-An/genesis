'use strict';

var arrBtn = document.querySelectorAll('.section-form-box_continue');
var btnContinue = Array.from(arrBtn);
var arrOrange = document.querySelectorAll('.section-form-box_orange');
var orange = Array.from(arrOrange);
var arrGender = document.querySelectorAll('.section-form-box-gender_wrap');
var gender = Array.from(arrGender);
var arrLabels = orange.concat(gender);
var arrTextWrap = document.querySelectorAll('.article-bg-box_text-wrap');
var textWraps = Array.from(arrTextWrap);
var infoA = document.querySelector('.orange .info-a');
var infoB = document.querySelector('.orange .info-b');
var infoC = document.querySelector('.orange .info-c');
var infoM = document.querySelector('.yellow .info-m');
var infoF = document.querySelector('.yellow .info-f');
var labelsOrange = arrLabels.filter(function (input) {
  return !(getComputedStyle(input).display === 'none');
});
labelsOrange.forEach(function (label) {
  return label.addEventListener('click', removeClassList);
});

function removeClassList() {
  textWraps.forEach(function (textWrap) {
    return textWrap.classList.add('display-opacity');
  });
  var checkedLabel = labelsOrange.find(function (label) {
    return label.firstChild.checked;
  });
  checkedLabel.className.includes('option-a') && infoA.classList.remove('display-opacity');
  checkedLabel.className.includes('option-b') && infoB.classList.remove('display-opacity');
  checkedLabel.className.includes('option-c') && infoC.classList.remove('display-opacity');
  checkedLabel.className.includes('option-m') && infoM.classList.remove('display-opacity');
  checkedLabel.className.includes('option-f') && infoF.classList.remove('display-opacity');
  btnContinue.forEach(function (btn) {
    return btn.classList.remove('display-none');
  });
} // ====================================================================


var arrForm = document.querySelectorAll('.section_form-box');
var forms = Array.from(arrForm);
var form = forms[forms.length - 1];
var inputs = form.querySelectorAll('.section-form-box_input');
var nameInput = document.querySelector('.section_form-box input[type=text]');
var emailInput = document.querySelector('.section_form-box input[type=email]');
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

var resetErrorMessage = function resetErrorMessage() {
  var errors = form.querySelectorAll('.error');
  errors.forEach(function (error) {
    return error.remove();
  });
};

var createErrorMessage = function createErrorMessage(input, message) {
  var error = document.createElement('p');
  error.className = 'error';
  error.textContent = message;
  input.after(error);
};

var requiredInput = function requiredInput() {
  return inputs.forEach(function (input) {
    if (input.value) return;
    var requiredMessage = 'Это поле обязательно к заполнению';
    createErrorMessage(input, requiredMessage);
  });
};

var validationName = function validationName() {
  var validName = /^[a-zA-Zа-яА-Я]+$/.test(nameInput.value);
  if (validName) return;
  var validNameMessage = 'Допускаются только буквы';
  createErrorMessage(nameInput, validNameMessage);
};

var validationEmail = function validationEmail() {
  var validEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(emailInput.value);
  if (validEmail) return;
  var validEmailMessage = 'Введите валидный email';
  createErrorMessage(emailInput, validEmailMessage);
};