// arguments object - no loger bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(44,1,1001));

// this keyword - no longer bound

const user = {
  name: 'Charles',
  cities: ['Taipei', 'Taichung', 'Kaoshong'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in 11' + city);
  }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());