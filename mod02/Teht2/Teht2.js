'use strict'

const numParticipants = prompt('Type number of participants: ');

const arr = []

for (let i = 1; i <= numParticipants; i++){
  const name = prompt("Type participants name: ");
   arr.push(name);
}

arr.sort();
document.write('<ol>');
for (let i = 0; i < arr.length; i++) {
  document.write(`<li>${arr[i]}</li>`);
}
document.write('</ol>')