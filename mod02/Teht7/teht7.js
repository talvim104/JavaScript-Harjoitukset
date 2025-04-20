'use strict'

const sidesNumber = Number(prompt('Type your number of sides on the dice: '))

function myRoll(sidesNumber) {
  return Math.floor(Math.random() * sidesNumber) + 1;
}

document.write('<ul>');

let result;

do {
  result = myRoll(sidesNumber);
  console.log(`The rolled number is ${result}`);
} while (result !== sidesNumber);

document.write('</ul>')