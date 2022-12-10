// @ts-check
'use strict';

const col = document.getElementsByTagName('a');

for (const anchor of col) {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    // @ts-ignore
    alert(event.target.href);
  });
}
