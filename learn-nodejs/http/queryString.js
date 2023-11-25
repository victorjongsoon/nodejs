const querystring = require('querystring');
/**
 * Represents a URL with query parameters.
 * @type {string}
 */
const url = 'https://www.example.com/p/a/t/h?course=node&lesson=http';
const queryToParse = url.split('?')[1]; // course=node&lesson=http
const parsedQuery = querystring.parse(queryToParse); // { course: 'node', lesson: 'http' }

parsedQuery.exercise = 'querystring'; // { course: 'node', lesson: 'http', exercise: 'querystring' }

const modifiedQueryString = querystring.stringify(parsedQuery); // course=node&lesson=http&exercise=querystring
console.log(modifiedQueryString); // course=node&lesson=http&exercise=querystring