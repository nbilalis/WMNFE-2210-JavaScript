'use strict';

const messages = [
  `Hello, <img src="https://www.plaisio.gr/images/logo.svg" onload="window.location='http://malicious.site'">!`,
  'Hello, JavaScript!',
  'Hello, HTML!',
  'Hello, CSS!',
  'Hello, DOM!',
];

const list = document.getElementById('message-list');

for (const message of messages) {
  const div = document.createElement('div');
  // div.innerHTML = message; // XSS attack
  div.textContent = message;
  list.appendChild(div);
}
