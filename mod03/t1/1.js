'use strict';

//etsitään html sivulta ul-tag, jonka id on target
const ulElem = document.querySelector('#target');

const html = `
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li> `;

ulElem.innerHTML =html;

//asetetaan listalle css-luokkamääritys
ulElem.classList.add('my-list');