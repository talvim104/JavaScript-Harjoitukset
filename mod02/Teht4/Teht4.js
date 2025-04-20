'use strict'

const arr =[]


while (true) {
  const num = Number(prompt("Type your number: "));
  if(num === 0) break;
  arr.push(num);
}

arr.sort((a, b) => b - a);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}