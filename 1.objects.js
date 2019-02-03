// Factory Func
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}

const circleFirst = createCircle(1);

// Constructor Func
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };

  // 'return this;' happens automaticaly
  // when we use 'new' operator
}

const circleSecond = new Circle(1);

/* using build-in constructors: */
// let x = {};
// let x = new Object();
// new String() -> // '', "", ``
// new Boolean() -> // true, false
// new Number(); // 1, 2, 3, ...

// ******************************************
// every object has 'CONSTRUCTOR' property
// references 'FUNCTION' used to create that object
// ******************************************

/* Functions are objects */
const Circle1 = new Function(
  "radius",
  `
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
`
);

const circleOne = new Circle1(1);

Circle1.call({}, 1);
Circle1.apply({}, [1, 2, 3]);
// where '{}' specifies the target of 'this'
// equals to 'const another = new Circle1(1)';

// ********************************************
// FUNCTIONS ARE OBJECTS, they have all OBJECT methods
// and FUNCTION properties
// ********************************************

/* Value vs Reference types */

let x = 10;
let y = x;
x = 20;

let x1 = { value: 10 };
let y1 = x1;
x1.value = 20;
// not object, but the adress of memory location for {value: 10} stored
// inside x1. Both x1 and y1 point to the same object in memory

// *****************************************
// Primitives are copied by their VALUE,
// Objects are copied by their REFERENCE
// *****************************************

let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);
// console.log(obj);
// Local parameter 'obj' in func and variable 'obj' above point to
// the same obj in memory { value: 11 }.
// Chages we make to this obj will be visible
// to the other variable

/* Adding or Removing properties */

circleSecond.location = { x: 1 };

const propertyName = "center-location"; // calculated at the runtime
circleSecond[propertyName] = { x: 1 };

delete circleSecond[propertyName];

/* Enumerating properties */

// to enumerate all the members
const circle = new Circle(20);
for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circleSecond[key]);
}

// to get all the keys
const keys = Object.keys(circle);
console.log(keys);

// to check the existance of property
if ("radius" in circle) {
  console.log("Circle has radius");
}

/* Abstraction */
// Hide the details, show the essentials!!!

/* Privat properties and methods */
// *********************************************
// Local variable inside of the function means:
// when we get out of the function, this variable goes out
// of the scope and dies
// *********************************************

function circleThird(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  let computeOtimumLocation = function(factor) {
    // ...
  };
  this.draw = function() {
    computeOtimumLocation(0.1);
    // defaultLocation
    // this.radius
    console.log("draw");
  };
}

const circleHidingDetails = new Circle(10);
circleHidingDetails.draw();
// only 'radius' and 'draw' method available,
// whereas others are privat

/* Getters and setters */
function CircleWithGetter(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  Object.defineProperty(this, "defaultLocation", {
    // 'get' and 'set' are the special keywords here
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location.");
      }
      defaultLocation = value;
    }
  });
}

const circleGetter = new CircleWithGetter(10);
circleGetter.defaultLocation;
// type in 'circleGetter' to the console
// to whach changes in the object

circleGetter.defaultLocation = { x: 1, y: 2 };
// circleGetter.defaultLocation = { x: 1 };
// throws error

// new comments goes here!
console.log("Hello there!");
