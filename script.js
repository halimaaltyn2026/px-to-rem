const BASE_PX = 16;

function readInput() {
  const field = document.getElementById('px-input');
  return field.value.trim().replace(',', '.');
}

function validateInput(text) {
  if (text === '') return 'Введите число.';
  const number = Number(text);
  if (!Number.isFinite(number)) return 'Это не число. Пример: 24';
  if (number < 0) return 'Число не может быть отрицательным.';
  return '';
}

function pxToRem(px) {
  return px / BASE_PX;
}

function showMessage(text, isError) {
  const result = document.getElementById('result');
  result.textContent = text;
  result.classList.toggle('error', isError);
}

function handleConvert() {
  const text = readInput();
  const error = validateInput(text);
  if (error) {
    showMessage(error, true);
    return;
  }
  const rem = Number(pxToRem(Number(text)).toFixed(4));
  showMessage(text + ' px = ' + rem + ' rem', false);
}

document.getElementById('convert-btn').addEventListener('click', handleConvert);
