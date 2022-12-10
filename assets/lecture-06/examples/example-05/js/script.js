// @ts-check
'use strict';

const buttons = document.getElementsByTagName('button');

for (const button of buttons) {
  button.addEventListener('click', () => {
    console.log(this);
  });
}

for (const button of buttons) {
  button.addEventListener('click', function () {
    console.log(this);
  });
}

for (const button of buttons) {
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    // @ts-ignore
    console.log(e.target.textContent);
  });
}
