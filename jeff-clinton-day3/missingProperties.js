'use strict';

function peopleCreator(name, jobTitle, boss) {
  if (jobTitle === 'Founder') {
    return {
      name,
      jobTitle,
    };
  } else return {
    name,
    jobTitle,
    boss
  };
}

const clint = peopleCreator('Clint', 'Student', 'Fred' );
const jeff = peopleCreator('Jeff', 'Student', 'Fred');
const rich = peopleCreator('Rich', 'Instructor', 'Fred');
const Fred = peopleCreator('Fred', 'Founder');

const arr = [clint, jeff, rich, Fred];

arr.forEach(function(person) {
  if (person.jobTitle === 'Founder') {
    console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
  } else {
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
  }
});