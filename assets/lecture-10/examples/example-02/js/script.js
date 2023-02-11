// @ts-check
'use strict';

const students1 = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];
console.log(students1[0]);
console.log(students1);

const students2 = { A001: 'Alice', A002: 'Bob', A003: 'Charlie', B004: 'Diana', B005: 'Eve' };
console.log(students2['A001']);
students2['A004'] = 'Frank';
console.log(students2);
