'use strict';

const answer = confirm('Should I calculate the square root?');

if (answer === true) {
  const number = parseInt(prompt('Enter your number:'));

  if (number < 0) {
    document.write('The square root of a negative number is not defined.');
  } else {
    const result = Math.sqrt(number);
    document.write('The square root of ' + number + ' is ' + result + '.');
  }

} else {
  document.write('The square root is not calculated.');
}


