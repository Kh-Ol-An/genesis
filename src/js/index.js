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

// form
const arrForm = document.querySelectorAll('.section_form-box');
const forms = Array.from(arrForm);
const form = forms[forms.length - 1];

// inputs
const arrInputs = form.querySelectorAll('.section-form-box_input');
const inputs = Array.from(arrInputs);
inputs.slice(-3);

// input
const arrNameInput = document.querySelectorAll(
  '.section_form-box input[type=text]',
);
const nameInputs = Array.from(arrNameInput);
const nameInput = nameInputs[nameInputs.length - 1];

// email
const arrEmailInput = document.querySelectorAll(
  '.section_form-box input[type=email]',
);
const arrEmailInputs = Array.from(arrEmailInput);
const emailInput = arrEmailInputs[arrEmailInputs.length - 1];

// password
const arrPasswordInput = document.querySelectorAll(
  '.section_form-box input[type=password]',
);
const arrPasswordInputs = Array.from(arrPasswordInput);
const passwordInput = arrPasswordInputs[arrPasswordInputs.length - 1];

// checkbox
const arrCheckboxInput = document.querySelectorAll(
  '.section-form-box-age-limit_input',
);
const checkboxInputs = Array.from(arrCheckboxInput);
const checkboxInput = checkboxInputs[checkboxInputs.length - 1];

// btnForm
const btnContinueForm = btnContinue[btnContinue.length - 1];

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

const resetErrorMessage = input => (input.value = '');

const createErrorMessage = (input, message) => (input.placeholder = message);

const validationName = () => {
  if (nameInput.value) {
    const validName = /^[a-zA-Zа-яА-Я]+$/.test(nameInput.value);
    if (validName) return;
    resetErrorMessage(nameInput);
    const validNameMessage = 'Допускаются только буквы';
    createErrorMessage(nameInput, validNameMessage);
    nameInput.classList.add('error');
  } else {
    const validNameMessage = 'Введите свое имя';
    createErrorMessage(nameInput, validNameMessage);
    nameInput.classList.add('error');
  }
};

const validationEmail = () => {
  if (emailInput.value) {
    const validEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(
      emailInput.value,
    );
    if (validEmail) return;
    resetErrorMessage(emailInput);
    const validEmailMessage = 'Неверный формат email';
    createErrorMessage(emailInput, validEmailMessage);
    emailInput.classList.add('error');
  } else {
    const validEmailMessage = 'Введите свой email';
    createErrorMessage(emailInput, validEmailMessage);
    emailInput.classList.add('error');
  }
};

const validationPassword = () => {
  if (passwordInput.value) {
    const validPassword = passwordInput.value.length > 3;
    if (validPassword) return;
    resetErrorMessage(passwordInput);
    const validPasswordMessage = 'Пароль должен быть длинее 3 символов';
    createErrorMessage(passwordInput, validPasswordMessage);
    passwordInput.classList.add('error');
  } else {
    const validPasswordMessage = 'Придумайте новый пароль';
    createErrorMessage(passwordInput, validPasswordMessage);
    passwordInput.classList.add('error');
  }
};
