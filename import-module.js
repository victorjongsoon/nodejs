const converters = require('./export-module.js');

// celsiusToFahrenheit
const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);

// fahrenheitToCelsius
const x = 212;
const y = converters.fahrenheitToCelsius(x);
console.log(y);