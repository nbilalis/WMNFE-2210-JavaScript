// @ts-check
'use strict';

const re1 = /[abc]/;

console.log(re1.test('a')); // true
console.log(re1.test('B')); // false
console.log(re1.test('z')); // false

const re2 = /[!@#$%]/;

console.log(re2.test('!')); // true
console.log(re2.test('!!')); // true
console.log(re2.test('This is a whole phrase!')); // true
console.log(re2.test('@')); // true
console.log(re2.test('~')); // false
console.log(re2.test('a')); // false

const re3 = /[^!@#$%]/;

console.log(re3.test('!')); // false
console.log(re3.test('@')); // false
console.log(re3.test('~')); // true

const re4 = /[a-z]/; // /[abcdefghijklmnopqrstuvwxyz]/

console.log(re4.test('a')); // true
console.log(re4.test('A')); // false
console.log(re4.test('z')); // true
console.log(re4.test('0')); // false
console.log(re4.test('Γ')); // false

const re5 = /[0-9]/; // /0123456789/

console.log(re5.test('0')); // true
console.log(re5.test('a')); // false
console.log(re5.test('9')); // true

const re6 = /[a-zA-Z0-9]/; // /[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]/

console.log(re6.test('a')); // true
console.log(re6.test('A')); // true
console.log(re6.test('z')); // true
console.log(re6.test('0')); // true
console.log(re6.test('_')); // false

const re7 = /[0-3][0-9][/-][01][0-9][/-][12][0-9][0-9][0-9]/;

console.log(re7.test('01-01-2000')); // true
console.log(re7.test('01/01/2000')); // true
console.log(re7.test('01-01/2000')); // true
console.log(re7.test('01-01-200')); // false
console.log(re7.test('39-19-2999')); // true... but it shouldn't be
