'use strict';

const name = prompt("What is your name?");
const number = Math.floor(Math.random() * 4) + 1;

let house = "";

if (number === 1) {
    house = "Gryffindor";
} else if (number === 2) {
    house = "Slytherin";
} else if (number === 3) {
    house = "Hufflepuff";
} else {
    house = "Ravenclaw";
}

document.write(name + ' you are ' + house + '.');
