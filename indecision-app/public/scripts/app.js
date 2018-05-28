'use strict';

function square(x) {
  return x * x;
}

console.log(square(3));

// const squareArrow = (x) => {
//   return x * x;
// };

var squareArrow = function squareArrow(x) {
  return x * x;
};
console.log(square(3));

// Challenge
// getFirstName('Mike Smith')
// Create regular arrow functiona
// Create arrow function using shorthand syntax

// function getFirstName(fullName) {
//   return fullName.split(' ')[0];
// }

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// }

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};
console.log(getFirstName('Mikes Smith'));
