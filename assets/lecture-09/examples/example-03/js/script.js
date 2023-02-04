'use strict';

const main = document.getElementById('main');

// console.log(main.childNodes);

// First check that the element has child nodes
if (main.hasChildNodes()) {
  // Get the first and last child node
  console.log('First child node: ' + main.childNodes[0].nodeName);
  console.log('Last child node: ' + main.childNodes[main.childNodes.length - 1].nodeName);
  // Firstly, convert the node list to an array -> [...main.childNodes]
  // Then use the .at() method to get the last child node
  console.log('Last child node: ' + [...main.childNodes].at(-1).nodeName);

  // Loop through node list and display node name
  for (const child of main.childNodes) {
    console.log(child.nodeName);
  }
}
