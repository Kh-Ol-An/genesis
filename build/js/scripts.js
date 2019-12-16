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
// form


var arrForm = document.querySelectorAll('.section_form-box');
var forms = Array.from(arrForm);
var form = forms[forms.length - 1]; // inputs

var arrInputs = form.querySelectorAll('.section-form-box_input');
var inputs = Array.from(arrInputs);
inputs.slice(-3); // input

var arrNameInput = document.querySelectorAll('.section_form-box input[type=text]');
var nameInputs = Array.from(arrNameInput);
var nameInput = nameInputs[nameInputs.length - 1]; // email

var arrEmailInput = document.querySelectorAll('.section_form-box input[type=email]');
var arrEmailInputs = Array.from(arrEmailInput);
var emailInput = arrEmailInputs[arrEmailInputs.length - 1]; // password

var arrPasswordInput = document.querySelectorAll('.section_form-box input[type=password]');
var arrPasswordInputs = Array.from(arrPasswordInput);
var passwordInput = arrPasswordInputs[arrPasswordInputs.length - 1]; // checkbox

var arrCheckboxInput = document.querySelectorAll('.section-form-box-age-limit_input');
var checkboxInputs = Array.from(arrCheckboxInput);
var checkboxInput = checkboxInputs[checkboxInputs.length - 1]; // btnForm

var btnContinueForm = btnContinue[btnContinue.length - 1];
btnContinueForm.disabled = !checkboxInput.checked;
checkboxInput.addEventListener('click', handleCheckedSubmit);

function handleCheckedSubmit() {
  btnContinueForm.disabled = !checkboxInput.checked;
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  validationName();
  validationEmail();
  validationPassword();
}

var resetErrorMessage = function resetErrorMessage(input) {
  return input.value = '';
};

var createErrorMessage = function createErrorMessage(input, message) {
  return input.placeholder = message;
};

var validationName = function validationName() {
  if (nameInput.value) {
    var validName = /^[a-zA-Zа-яА-Я]+$/.test(nameInput.value);
    if (validName) return;
    resetErrorMessage(nameInput);
    var validNameMessage = 'Допускаются только буквы';
    createErrorMessage(nameInput, validNameMessage);
    nameInput.classList.add('error');
  } else {
    var _validNameMessage = 'Введите свое имя';
    createErrorMessage(nameInput, _validNameMessage);
    nameInput.classList.add('error');
  }
};

var validationEmail = function validationEmail() {
  if (emailInput.value) {
    var validEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(emailInput.value);
    if (validEmail) return;
    resetErrorMessage(emailInput);
    var validEmailMessage = 'Неверный формат email';
    createErrorMessage(emailInput, validEmailMessage);
    emailInput.classList.add('error');
  } else {
    var _validEmailMessage = 'Введите свой email';
    createErrorMessage(emailInput, _validEmailMessage);
    emailInput.classList.add('error');
  }
};

var validationPassword = function validationPassword() {
  if (passwordInput.value) {
    var validPassword = passwordInput.value.length > 3;
    if (validPassword) return;
    resetErrorMessage(passwordInput);
    var validPasswordMessage = 'Пароль должен быть длинее 3 символов';
    createErrorMessage(passwordInput, validPasswordMessage);
    passwordInput.classList.add('error');
  } else {
    var _validPasswordMessage = 'Придумайте новый пароль';
    createErrorMessage(passwordInput, _validPasswordMessage);
    passwordInput.classList.add('error');
  }
};