'use strict';

const testFun = (value = 'some text') => {
  return value;
};

console.log(testFun('some of my text'));

module.exports = testFun;
