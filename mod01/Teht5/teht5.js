'use strict';

const year = parseInt(prompt("Enter years number:"));

if (year % 400 === 0) {
    document.write(year + ' year is leap. ');
} else if (year % 100 === 0) {
    document.write(year + ' year is not leap. ');
} else if (year % 4 === 0) {
    document.write(year + ' year is leap. ');
} else {
    document.write(year + ' year is not leap. ');
}
