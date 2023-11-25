// Import the url module
const urlModule = require('url');

const URL_TO_PARSE = 'https://www.example.com/p/a/t/h?prop1=value1&prop2=value2';

// Create a new instance of a URL object
const myUrl = new URL(URL_TO_PARSE);

// Extract the hostname
const hostname = myUrl.hostname;

// Extract the path
const pathname = myUrl.pathname;

// Extract the query parameters
const searchParams = myUrl.searchParams;

// print the hostname, path and the query parameters
console.log(`Hostname: ${hostname}, Pathname: ${pathname}, Search Params: ${searchParams}`);