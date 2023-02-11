'use strict';

// Make a new XMLHttpRequest object
const req = new XMLHttpRequest();

// Set the request parameters
req.open('GET', 'data.txt');

/* req.onload = function () {
  // callback function
  console.log(req.response);
}; */

// Add an event listener for the load event
req.addEventListener('load', () => {
  console.log(req.responseText);
});

// Send the request
req.send();
