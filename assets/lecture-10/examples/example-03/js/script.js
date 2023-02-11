// @ts-check
'use strict';

const characters1 = [
  { nickname: 'king_crow', fullname: 'Jon Snow', age: 23 },
  { nickname: 'khaleesi', fullname: 'Daenerys Targaryen', age: 26 },
  { nickname: 'mercy', fullname: 'Arya Stark', age: 15 },
];

console.log(characters1[1]);

for (const c of characters1) {
  console.log(c.fullname);
}

const characters2 = {
  king_crow: { fullname: 'Jon Snow', age: 23 },
  khaleesi: { fullname: 'Daenerys Targaryen', age: 26 },
  mercy: { fullname: 'Arya Stark', age: 15 },
};

console.log(characters1['khaleesi']);

for (const key of Object.keys(characters2)) {
  console.log(characters2[key].fullname);
}

s
dfsdfsfd
