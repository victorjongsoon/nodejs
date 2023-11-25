/**
 * Converts Celsius to Fahrenheit.
 * @param {number} celsius - The temperature in Celsius.
 * @returns {number} The temperature in Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
  }
  
  // export celsiusToFahrenheit
  module.exports.celsiusToFahrenheit = celsiusToFahrenheit;
  
  // export fahrenheitToCelsius
  module.exports.fahrenheitToCelsius = function(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
  };
  