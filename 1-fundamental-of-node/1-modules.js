// IIFE
// immediately invoked function expression

// function statement
// function expression

// const iife = function () {
//   console.log('hello');
// }();

// (function () {
//   console.log('hello');
// })();

// const moduleA = { exports: {} };

// (function (module) {
//   let count = 0;

//   function increaseCount() {
//     count++;
//   }

//   function getCount() {
//     return count;
//   }

//   module.exports = { increaseCount, getCount };
// })(moduleA);

// setInterval(() => {
//   moduleA.exports.increaseCount();
//   console.log(moduleA.exports.getCount());
// }, 1000);

const { increaseCount, getCount } = require('./count');
const count = require('./count');

setInterval(() => {
  increaseCount();
  console.log(getCount());
}, 1000);

console.log(__dirname);
console.log(__filename);
// module

// design patterns
// singleton pattern
