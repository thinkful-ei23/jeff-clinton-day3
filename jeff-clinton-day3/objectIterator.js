'use strict';

const myObj = {
  foo: 'one',
  bar: 2,
  fum: 'three',
  quux: 4,
  spam: 'gross'
};

for (const key in myObj) {
  console.log(`${key} = ${myObj[key]}`);
}