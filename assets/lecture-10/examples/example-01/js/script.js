// @ts-check
'use strict';

const student = {
  firstname: 'Joan',
  lastname: 'Doe',
  age: 21,
};

student.age += 1;

console.log(student);
console.log(student.firstname); // console.log(student['firstname']);
console.log(student['lastname']);
