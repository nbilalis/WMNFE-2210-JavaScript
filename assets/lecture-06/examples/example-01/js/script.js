// @ts-check
'use strict';

const el1 = document.getElementById('content');
const el2 = document.getElementById('firstHeading');
const el3 = document.getElementById('secondHeading');

console.log(el1);
console.log(el2);
console.log(el3);

const col1 = document.getElementsByClassName('external');

console.log(col1.length);

for (const el of col1) {
  console.log(el);
}

/* for (let i = 0; i < col1.length; i++) {
  const el = col1[i];
}
 */
const col2 = document.getElementsByTagName('h2');

console.log(col2.length);

for (const el of col2) {
  console.log(el);
}

const el4 = document.querySelector('#top'); // document.getElementById('top');
const col3 = document.querySelectorAll('.mw-jump-link'); // document.getElementsByClassName('mw-jump-link');

console.log(el4);

for (const el of col3) {
  console.log(el);
}
