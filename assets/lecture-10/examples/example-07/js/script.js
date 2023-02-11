'use strict';

const ul = document.getElementById('list');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentPage = 1;

const getData = () => {
  fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
    // .then((response) => { return response.json(); })
    .then((response) => response.json())
    .then((data) => {
      ul.innerHTML = '';
      for (const person of data.results) {
        const li = document.createElement('li');
        li.textContent = `${person.name} - ${person.height}cm - ${person.birth_year}`;
        ul.appendChild(li);
      }
    });
};

getData();

prev.addEventListener('click', () => {
  currentPage--;
  getData();
});

next.addEventListener('click', () => {
  currentPage++;
  getData();
});
