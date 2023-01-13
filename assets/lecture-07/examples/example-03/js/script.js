'use strict';

// Get the button and the input fields
const button = document.getElementById('login-button');
const username = document.getElementById('username');
const password = document.getElementById('password');

/* const form = document.forms['login-form'];
const username = form.elements['username'];
const password = form.elements['password']; */

// Add an event listener to the button
button.addEventListener('click', () => {
  // Check if the username and password are correct
  if (username.value === 'admin' && password.value === 'admin') {
    alert('Welcome!');
  } else {
    alert('Wrong username or password!');
  }
});
