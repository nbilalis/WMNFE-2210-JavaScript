// @ts-check
'use strict';

const re1 = /\.(gr|com|org)$/;

console.log(re1.test('example.gr')); // true
console.log(re1.test('example.com')); // true
console.log(re1.test('example.org')); // true
console.log(re1.test('example.net')); // false

const re2 = /^[-+]?\d+$/;

console.log(re2.test('12')); // true
console.log(re2.test('-24')); // true
console.log(re2.test('+100')); // true
console.log(re2.test('-1234')); // true

const re3 = /^[a-zA-Z0-9!@#$%]{8,}$/;

console.log(re3.test('12345678')); // true
console.log(re3.test('12345678!')); // true
console.log(re3.test('h4s1dhJd@fbhh$G!')); // true
console.log(re3.test('-12345678!-')); // false

const re4 = /^[a-zA-Z_]\w+$/; // \w = [a-zA-Z0-9_]

console.log(re4.test('example')); // true
console.log(re4.test('example_1')); // true
console.log(re4.test('_example')); // true
console.log(re4.test('1example')); // false

const re5 = /^[-+]?\d+(\.\d+)?[$€]$/;

console.log(re5.test('12$')); // true
console.log(re5.test('-24€')); // true
console.log(re5.test('+100$')); // true
console.log(re5.test('-1234€')); // true
console.log(re5.test('12.34$')); // true
console.log(re5.test('-24.56€')); // true

const re6 = /^[a-z0-9.]@[a-z0-9]\.[a-z0-9]{2,10}$/i;

console.log(re6.test('john.doe@gmail.com')); // true
console.log(re6.test('john.doe@sae.edu')); // true
