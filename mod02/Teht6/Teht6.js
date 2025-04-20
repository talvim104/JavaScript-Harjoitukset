'use strict'

function myRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

document.write('<ul>');

let result;

do {
  result = myRoll();
  console.log(`The rolled number is ${result}`);
} while (result !== 6);

document.write('</ul>')
