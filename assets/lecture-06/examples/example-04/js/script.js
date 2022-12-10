// @ts-check
'use strict';

const button = document.getElementById('the-button'); // document.getElementsByTagName('button')[0];

// Anonymous function
button?.addEventListener('click', function () {
  console.log('Button clicked!');
});

// Arrow function
button?.addEventListener('click', () => {
  console.log('Button clicked!');
});

// ?. is called optional chaining
