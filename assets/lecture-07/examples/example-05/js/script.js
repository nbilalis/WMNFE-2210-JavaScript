'use strict';

// Get the form and the input fields
const form = document.forms['login-form'];
const username = document.getElementById('username');
const password = document.getElementById('password');

// Add an event listener to the form
form.addEventListener('submit', (e) => {
  console.log('Form submitted');

  // If the username or password are empty
  if (username.value.trim() === '' || password.value.trim() === '') {
    // Prevent the form from being submitted
    e.preventDefault();
  }
});
