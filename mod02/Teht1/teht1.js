'use strict'

const arr = [];

for (let i = 1; i <=5; i++){
  const myNum = Number(prompt("Type your number"));
  arr.push(myNum);
}

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

