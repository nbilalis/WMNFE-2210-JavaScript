'use strict';

// Get the first form
console.log(document.forms['firstForm']);
console.log(document.firstForm);
console.log(document.forms.firstForm);
console.log(document.forms[0]);

// Get the second form
console.log(document.forms['secondForm']);
console.log(document.getElementById('secondForm'));
console.log(document.forms.secondForm);
console.log(document.forms[1]);

// Get the third form
console.log(document.forms['third-form']);
console.log(document.forms['thirdForm']);

// How many forms are there?
console.log(document.forms.length);
