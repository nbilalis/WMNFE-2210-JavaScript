'use strict';

const main = document.getElementById('main');
const title = document.getElementById('title');
const hint = document.getElementById('hint');

main.id = 'main-header'; // main.setAttribute('id', 'main-header');

main.className = 'main-header'; // Replace all classes
title.classList.add('title'); // Add a class
hint.style.backgroundColor = 'red'; // Set a style
