'use strict';

// Get the form and the input fields as a collection
const form = document.forms['login-form'];
const inputs = form.getElementsByTagName('input');
// const inputs = form.querySelectorAll('input[type="text"]');

// For each input field
for (const input of inputs) {
  // Add an event listener for the focus event
  input.addEventListener('focus', () => {
    const el = e.target;
    el.classList.remove('error');
  });

  // Add an event listener for the blur event
  input.addEventListener('blur', (e) => {
    const el = e.target;

    if (el.value.trim() === '') {
      el.classList.add('error');
    } else {
      el.classList.remove('error');
    }

    // Alternatively using the toggle() method
    // el.classList.toggle('error', el.value.trim() === '');
  });
}
