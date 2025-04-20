'use strict'

const arr = []

while(true) {
  const num = Number(prompt('Type your number: '));
  if (arr.includes(num)) {
    alert('This number was already given!');
    break;
  }
  arr.push(num);
}

arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}