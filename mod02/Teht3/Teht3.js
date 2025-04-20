'use strict'

const arr = []

for (let i =1; i <= 6; i++) {
  const dogs = prompt("Type dogs name: ");
  arr.push(dogs)
}

arr.sort();
arr.reverse();
document.write('<ul>');
for (let i = 0; i < arr.length; i++) {
  document.write(`<li>${arr[i]}</li>`);
}
document.write('</ul>')
