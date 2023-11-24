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