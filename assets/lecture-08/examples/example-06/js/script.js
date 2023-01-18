// @ts-check
'use strict';

const form = document.forms['register-form'];

// Handle the submit event
form.addEventListener('submit', (event) => {
  // Reference to the form elements
  const name = form.elements['name'];
  const age = form.elements['age'];
  const email = form.elements['e-mail'];

  let isValid = true;
  let errorMessages = [];

  // Name checks
  if (name.value.trim().length === 0) {
    // Required
    console.error('Name is missing');
    errorMessages.push('Name is missing');
    isValid = false;
  }

  // Age checks
  if (age.value.trim().length === 0) {
    // Required
    console.error('Age is missing');
    errorMessages.push('Age is missing');
    isValid = false;
  } else if (isNaN(age.value)) {
    // Numeric
    console.error('Age is not a number');
    errorMessages.push('Age is not a number');
    isValid = false;
  }

  // E-mail checks
  if (email.value.trim().length === 0) {
    // Required
    console.error('E-mail is missing');
    errorMessages.push('E-mail is missing');
    isValid = false;
  } else if (email.value.indexOf('@') < 0) {
    // It must contain an @
    console.error('E-mail is not valid');
    errorMessages.push('E-mail is not valid');
    isValid = false;
  }

  // Prevent submit, if any validation failed
  if (!isValid) {
    alert(errorMessages.join('\n'));
    event.preventDefault();
  }
});
