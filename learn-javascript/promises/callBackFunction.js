/**
 * Calculates the result of a callback function and doubles it.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @param {function} calc - The callback function to perform the calculation.
 * @returns {number} The doubled result of the callback function.
 */
function doubleResult(num1, num2, calc) {
    return calc(num1, num2) * 2;
}
  
function add(num1, num2) {
    return num1 + num2;
}
  
function multiply(num1, num2) {
    return num1 * num2;
}
  
console.log(doubleResult(4, 2, add));
console.log(doubleResult(4, 2, multiply));


/**
 * Creates a new array by applying a callback function to each element of the input array.
 * @param {Array} arr - The input array.
 * @param {Function} callback - The callback function to be applied to each element of the input array.
 * @returns {Array} - The new array created by applying the callback function to each element of the input array.
 */
function createNewArray(arr, callback) {
const output = [];
for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]));
};
return output;
}

function double(input) { return input * 2; };
function divide(input) { return input / 2; };
function increment(input) { return input + 1 };

const array = [1, 2, 3];

console.log(createNewArray(array, double));
console.log(createNewArray(array, divide));
console.log(createNewArray(array, increment));