/**
 * Represents a person.
 * @typedef {Object} Person
 * @property {string} firstName - The first name of the person.
 * @property {string} lastName - The last name of the person.
 * @property {number} age - The age of the person.
 * @property {string} eyeColor - The eye color of the person.
 * @property {Function} greeting - A function that returns a greeting message.
 */

/**
 * Creates a person object.
 * @type {Person}
 */
const person = {
  firstName: 'Elizabeth',
  lastName: 'Harmon',
  age: 22,
  eyeColor: 'Hazel',
  
  /**
   * Generates a greeting message.
   * @returns {string} The greeting message.
   */
  greeting: function () {
    return `Hi, I am ${this.firstName} ${this.lastName}.`;
  },
};

console.log(person.greeting());
// Dot notation can be used to access properties of an object:
console.log(person.firstName);
// Bracket notation must be used if the property name has spaces, special characters, or begins with a number:
console.log(person['firstName']);
