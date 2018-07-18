'use strict';

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

function decode(word) {
  const firstChar = word[0];
  if (firstChar === 'a') {
    return word[cipher.a - 1];
  } else if (firstChar === 'b') {
    return word[cipher.b - 1];
  } else if (firstChar === 'c') {
    return word[cipher.c - 1];
  } else if (firstChar === 'd') {
    return word[cipher.d - 1];
  } else {
    return ' ';
  }
}

function decodeWords(message) {
  const arr = message.split(' ');
  let decoded = '';
  arr.forEach(word => decoded += decode(word));
  return decoded;
}

const codedMessage = 'craft block argon meter bells brown croon droop';

console.log(decodeWords(codedMessage));