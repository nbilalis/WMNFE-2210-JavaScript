// @ts-check
'use strict';

const re1 = /[A-Z]/;

console.log(re1.test('This is a test')); // true

const re2 = /^[A-Z]/;

console.log(re2.test('This is a test')); // true
console.log(re2.test('-This is a test')); // false

const re3 = /^[A-Z]$/;

console.log(re3.test('This is a test')); // false
console.log(re3.test('T')); // true

const re4 = /^[A-Z]+$/;

console.log(re3.test('TEST')); // true

const re5 = /[.!;?]$/;

console.log(re5.test('This is a test.')); // true
console.log(re5.test('This is a test!')); // true
console.log(re5.test('This is a test')); // false
