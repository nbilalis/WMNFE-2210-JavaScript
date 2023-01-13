// @ts-check
'use strict';

// Get the form
const registerForm = document.forms['register-form'];

// Show the collection of the form elements, at the console
console.log(registerForm.elements);

// Show the first name and last name elements, at the console
console.log(registerForm.elements['first-name']);
console.log(registerForm.elements['last-name']);
