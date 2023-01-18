// @ts-check
'use strict';

const re1 = /([01]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?/;
// const re1 = /([01]?\d|2[0-3])(:[0-5]\d){1,2}/;

console.log(re1.test('8:15')); // true
console.log(re1.test('08:15')); // true
console.log(re1.test('14:30')); // true
console.log(re1.test('20:45')); // true
console.log(re1.test('27:00')); // false
console.log(re1.test('20:27:15')); // true

const re2 = /[0-3]\d[/-][01]\d[/-][12]\d{3}/;

console.log(re2.test('01-01-2000')); // true
console.log(re2.test('01/01/2000')); // true
console.log(re2.test('01-01/2000')); // true
console.log(re2.test('01-01-200')); // false
console.log(re2.test('39-19-2999')); // true... but it shouldn't be
