'use strict';

const button = document.getElementById('start');

button.addEventListener('click', function() {
  const a = Number(document.getElementById('num1').value);
  const b = Number(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;
  let answer = 0;

  if (operation === 'add') {
    answer = a + b;
  } else if (operation === 'sub') {
    answer = a - b;
  } else if (operation === 'multi') {
    answer = a * b;
  } else if (operation === 'div') {
    answer = a / b;
  }

  document.getElementById('result').textContent = answer;
});