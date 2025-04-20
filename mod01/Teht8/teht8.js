'use strict';

const year1 = parseInt(prompt("Enter the start year number:"));
const year2 = parseInt(prompt("Enter the end year number:"));

document.write('<ul>');
for (let year = year1; year <= year2; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    document.write('<li>' + year + '</li>');
  }
}
document.write('</ul>');
