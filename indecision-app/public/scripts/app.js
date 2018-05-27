'use strict';

var nameVar = 'Charles Hsu';
var nameVar = 'Johnson Wang';

console.log("nameVar", nameVar);

var nameLet = 'Jen';
nameLet = 'Julie';
console.log("nameLet", nameLet);

var nameConst = 'Frank';
console.log("nameConst", nameConst);

function getPetName() {
  var petName = "Hal";
  return petName;
}

var petName = getPetName();
console.log("Petname", petName);
