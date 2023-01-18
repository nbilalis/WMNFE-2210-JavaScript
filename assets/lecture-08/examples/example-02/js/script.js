// @ts-check
'use strict';

const re1 = /\w/; // /[a-zA-Z0-9_]/

console.log(re1.test('a')); // true
console.log(re1.test('A')); // true
console.log(re1.test('z')); // true
console.log(re1.test('0')); // true
console.log(re1.test('_')); // true
console.log(re1.test('Γ')); // false
console.log(re1.test('!')); // false

const re2 = /\W/; // /[^a-zA-Z0-9_]/

console.log(re2.test('a')); // false
console.log(re2.test('Γ')); // true
console.log(re2.test('@')); // true

const re3 = /\d/; // /[0-9]/

console.log(re3.test('0')); // true
console.log(re3.test('a')); // false

const re4 = /\D/; // /[^0-9]/

console.log(re4.test('0')); // false
console.log(re4.test('a')); // true

const re5 = /\s/; // /[ \t\n\r\f\v]/

console.log(re5.test(' ')); // true
console.log(re5.test('a')); // false

const re6 = /[0-3]\d[/-][01]\d[/-][12]\d\d\d/;

console.log(re7.test('01-01-2000')); // true
console.log(re7.test('01/01/2000')); // true
console.log(re7.test('01-01/2000')); // true
console.log(re7.test('01-01-200')); // false
console.log(re7.test('39-19-2999')); // true... but it shouldn't be
