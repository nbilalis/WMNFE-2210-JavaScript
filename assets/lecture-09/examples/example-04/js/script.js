'use strict';

const main = document.getElementById('main');

// console.log(main.children);

// First check that the element has child nodes
if (main.children.length > 0) {
  // Get the first and last child node
  console.log('First child node: ' + main.children[0].nodeName);
  console.log('Last child node: ' + main.children[main.children.length - 1].nodeName);
  // Firstly, convert the node list to an array -> [...main.childNodes]
  // Then use the .at() method to get the last child node
  console.log('Last child node: ' + [...main.children].at(-1).nodeName);

  // Loop through node list and display node name
  for (const child of main.children) {
    console.log(child.nodeName);
  }
}
