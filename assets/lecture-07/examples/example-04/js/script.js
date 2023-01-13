'use strict';

// Get the form and the button
const form = document.forms['login-form'];
const button = document.getElementById('login-button');

// Add an event listener to the button
button.addEventListener('click', () => {
  // For each element in the form
  for (const el of form.elements) {
    // If the element is a text or password input
    if (el.type === 'text' || el.type === 'password') {
      // Output the name and the value of the element
      console.log(`${el.name}: ${el.value}`);
    }
  }
});
