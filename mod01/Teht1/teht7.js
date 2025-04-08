'use strict';

const rolls= parseInt(prompt("How many times should I roll the die?"));

let sum = 0;

for (let i = 0; i < rolls; i++) {
            const roll = Math.floor(Math.random() * 6) + 1;
            sum += roll;
}

document.write("The total sum of the dice rolls is " + sum + ".");
