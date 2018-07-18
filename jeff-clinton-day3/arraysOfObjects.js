'use strict';

function peopleCreator(name, jobTitle) {
  return {
    name,
    jobTitle
  };
}

const clint = peopleCreator('Clint', 'Student');
const jeff = peopleCreator('Jeff', 'Student');
const rich = peopleCreator('Rich', 'Instructor');

const arr = [clint, jeff, rich];

arr.forEach(person => console.log(person));