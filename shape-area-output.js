const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.
// const areaFunctions = require("./shape-area.js");

// Option 2: import circleArea and squareArea with object destructuring
const { circleArea, squareArea } = require("./shape-area.js");

// use the imported .circleArea() and .squareArea() methods here
const areaOfCircle = circleArea(radius);
const areaOfSquare = squareArea(sideLength);

console.log(`Area of the circle: ${areaOfCircle}`);
console.log(`Area of the square: ${areaOfSquare}`);