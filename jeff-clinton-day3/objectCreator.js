'use strict';


function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return 'hello';
    }
  };
}
const Object = createMyObject();

console.log(Object);

console.log(Object.sayHello());