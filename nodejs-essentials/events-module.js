// Import the events module to use Event Emitter functionality
const events = require('events');
// Import the fs module for file system operations
const fs = require('fs');

// Create an instance of the EventEmitter
let myEmitter = new events.EventEmitter();

// Define a function to be used as an event listener
let newWelcomeMessage = (data) => {
  console.log(`Welcome to Node.js, what's your name? ${data}.`);
};

// Register the event listener for the 'welcome' event
myEmitter.on('welcome', newWelcomeMessage);

// Emit the 'welcome' event with additional data 'Codey'
myEmitter.emit('welcome', 'Codey');

// Create a Buffer from the string 'Hello World'
const buffer = Buffer.from('Hello World');
console.log(buffer); // Log the Buffer object
console.log(buffer.toString()); // Log the string representation of the Buffer

// Define a callback function for reading file data
let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

// Read the contents of 'file.txt' asynchronously and handle the result using the callback
fs.readFile('./file.txt', 'utf-8', readDataCallback);

// Use setImmediate to execute a function immediately after the current event loop cycle
setImmediate(() => {
  console.log('Welcome to Node.js');
});
