'use strict';

// Get the form and the button
const form = document.forms['hobbies'];
const button = document.getElementById('button');

// Add an event listener to the button
button.addEventListener('click', () => {
  console.log(form.elements['sports']);       // RadioNodeList
//console.log(form.elements['sports'].value); // Won't work

  // Get the values of the selected checkboxes in group 'sports'

  // The more traditional way
  const elements = document.querySelectorAll('input[name="sports"][type="checkbox"]');

  const values = [];
  for (let el of elements) {
    if (el.checked === true) {		// or just `el.checked`
      values.push(el.value);
    }
  }
  console.log(values);

  // The ES6 way
  /* const values = Array
    .from(document.querySelectorAll('input[name="sports"][type="checkbox"]'))
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  console.log(values); */

  // Get the 'consent' checkbox
  console.log(form.elements['consent'].value);
  console.log(form.elements['consent'].checked);
});
