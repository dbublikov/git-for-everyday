
let x = {};
let y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y);
// true

// ***************************
// Prototype is just a regular root object in memory!
// (contained inside '__proto__' property)
// ***************************

/* Multi-level inheritance */
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }

  // 'return this;' happens automaticaly
  // when we use 'new' operator
}

const circle = new Circle(10);

// ***********************************
// Objects created by a given constructor
// will have the same prototype
// **********************************


/* Property descriptors */

let person = { name: 'Dmitry' };
let objectBase = Object.getPrototypeOf(person);

// !!!descriptor obj contains properties attached to 'toString' method of the object
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

Object.defineProperty(person, 'name', {
  writable: false, // can't overwrite
  enumerable: true, // can't iterate over prop's
  configurable: false, // can't delete them
});


person.name = 'John';
delete person.name; // nothing will happen

console.log(person);
console.log(Object.keys(person));


/* Property constructor */

Object.getPrototypeOf(person);
// person.__proto__ (parent of myObj e.g objectBase)
// Constructor.prototype (parent of objects created by constructor)
let z = {}
// z.__proto__ == Object.prototype


/* Prototype vs Instance member */

function Circle(radius) {
  // Instance member
  this.radius = radius;
  this.move = function() {
    this.draw();
    console.log('move');
  }
}


// Prototype members (method set on the prototype)
Circle.prototype.draw = function() {
  console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

Circle.prototype.toString = function() {
  return 'Circle with radius ' + this.radius 
}

// console.log(c1.move());
// -> draw
// -> move

c1.draw()

/* How to iterate over instance vs. prototype properties */

// Returns only instance members
console.log(Object.keys(c1)); // -> 'radius', 'move'

// Returns all members (instance + prototype)
for (let key in c1) {
  console.log(key);
}
// -> 'radius', 'move', 'draw'

c1.hasOwnProperty('radius'); // true
c1.hasOwnProperty('draw'); // false


// ****************************************************
// Don't modify objects you don't own (build-in object)!!!
// ****************************************************

Array.prototype.shuffle = function() {
  // ...
};
const array = [];
array.shuffle();
