'use strict';

const number = parseInt(prompt("Enter number:"));

let primeNum = true;
if (number <= 1) {
  primeNum = false
} else {
  for ( let i = 2; i < number; i++)
    if (number % i === 0) {
      primeNum = false;
      break;
    }
  }

if (primeNum) {
  document.write(number + ' is a prime number.');
} else {
    document.write(number + ' is not a prime number.');
  }








