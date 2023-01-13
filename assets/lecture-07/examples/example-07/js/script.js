'use strict';

// Get the form and the button
const form = document.forms['register-form'];
const button = document.getElementById('register-button');

// Add an event listener to the button
button.addEventListener('click', () => {
  const gender = form.elements['gender'];

  console.log(gender); // RadioNodeList
  console.log(gender.value);

  // If nothing is selected
  if (gender.value === '')
  {
    const other = form.elements['gender-other'];

    // Get the state
    console.log(other.checked);

    // Set the state
    other.checked = true;
  }

});
