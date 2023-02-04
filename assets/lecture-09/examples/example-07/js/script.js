'use strict';

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

const main = document.getElementById('main');
const h1 = main.children[0]; // main.firstElementChild

const ul = document.createElement('ul');
main.appendChild(ul);

for (const planet of planets) {
  const li = document.createElement('li');
  ul.appendChild(li);

  const text = document.createTextNode(planet);
  li.appendChild(text);
}

const h2 = document.createElement('h2');
main.insertBefore(h2, ul);

const text = document.createTextNode('... of our Solar System');
h2.appendChild(text);
// h2.textContent = '... of our Solar System';
