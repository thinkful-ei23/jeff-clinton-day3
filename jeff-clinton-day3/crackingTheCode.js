'use strict';

function decode(word) {
  const cipher = {a: 2, b: 3, c: 4, d: 5};
  const first = word[0];
  const keys = Object.keys(cipher);

  return (keys.includes(first)) ? word[cipher[first] - 1] : ' ';
}

function decodeWords(message) {
  return message
    .split(' ')
    .reduce(((decoded, word) => decoded += decode(word)), '');
}

const codedMessage = 'craft block argon meter bells brown croon droop';

console.log(decodeWords(codedMessage));