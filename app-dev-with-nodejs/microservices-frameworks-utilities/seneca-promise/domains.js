const EventEmitter = require('events').EventEmitter;

const emit = new EventEmitter();

// Using async/await for asynchronous code
async function exampleAsyncFunction() {
  return new Promise((resolve, reject) => {
    // Your asynchronous code that might throw an error
    reject(new Error('An example error'));
  });
}

// Handling asynchronous errors with try...catch
async function handleAsyncError() {
  try {
    await exampleAsyncFunction();
  } catch (error) {
    console.error('Async error caught:', error.message);
  }
}

// Set up a listener for unhandled errors
emit.on('error', function (err) {
  console.log('listener caught an error: ' + err.message);
});

// Emit an error event to be caught by the listener
emit.emit('error', new Error('To be handled by listener'));

// Handling synchronous errors with try...catch
try {
  throw new Error('To be handled by domain');
} catch (error) {
  console.error('Error caught:', error.message);
}

// Using a Promise to handle errors in a domain-like context
const domain1Handler = new Promise((resolve, reject) => {
  const emit1 = new EventEmitter();

  // Set up a listener for errors in the domain-like context
  emit1.on('error', function (err) {
    console.log('domain1 handled this error (' + err.message + ')');
    resolve();
  });

  // Emit an error event to be caught by the domain-like context
  emit1.emit('error', new Error('To be handled by domain1'));
});

// Wait for the Promise to resolve
domain1Handler.then(() => {
  console.log('Handler for domain1 completed.');
});
