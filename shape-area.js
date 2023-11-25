/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below

// Function to calculate the area of a circle
const circleArea = (radiusLength) => {
  return PI * radiusLength * radiusLength;
};

// Function to calculate the area of a square
const squareArea = (sideLength) => {
  return sideLength * sideLength;
};

// Export the functions
module.exports = {
  circleArea,
  squareArea,
};