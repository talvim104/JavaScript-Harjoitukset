'use strict';

const target = document.getElementById('target');

const elem1 = document.createElement('li');
elem1.textContent = 'First item';
target.appendChild(elem1);

const elem2 = document.createElement('li');
elem2.textContent = 'Second item';
elem2.classList.add('my-item');
target.appendChild(elem2);

const elem3 = document.createElement('li');
elem3.textContent = 'Third item';
target.appendChild(elem3);
