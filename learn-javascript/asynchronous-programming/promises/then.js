/**
 * Creates a new Promise that resolves if the sum of 2 and 2 is equal to 3, otherwise rejects with an error object.
 * @returns {Promise<string|object>} A Promise that resolves with a success message if the sum is correct, or rejects with an error object if the sum is incorrect.
 */
const myPromise = new Promise((resolve, reject) => {
if (2 + 2 === 3) {
    resolve('Success!');
} else {
    reject({
    errorType: 'ArithmeticError',
    message: "The numbers don't add up!",
    });
}
});

myPromise.then(
(result) => {
    console.log(result);
},
(reason) => {
    console.log(`${reason.errorType}: ${reason.message}`); // ArithmeticError: The numbers don't add up!
}
);

/**
 * Represents a person.
 * @typedef {Object} Person
 * @property {string} occupation - The occupation of the person.
 */

/**
 * Creates a new Promise that resolves with a person object.
 * @type {Promise<Person>}
 */
let person = new Promise(function(resolve){
    resolve('I am a gamer');
});
person.then(console.log);
