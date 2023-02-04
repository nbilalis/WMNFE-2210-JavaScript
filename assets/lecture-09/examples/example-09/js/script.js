'use strict';

const main = document.getElementById('main');
const title = document.getElementById('title');
const hint = document.getElementById('hint');
main.removeChild(hint);

const titleNew = document.createElement('h1');
titleNew.textContent = 'Hello World!';
main.replaceChild(titleNew, title);
