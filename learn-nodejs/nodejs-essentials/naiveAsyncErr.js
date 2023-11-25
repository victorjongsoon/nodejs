const api = require('./api.js');

// Not an error-first callback
/**
 * Callback function that logs the received data.
 *
 * @param {any} data - The data received from the asynchronous operation.
 * @returns {void}
 */
let callbackFunc = (data) => {
   console.log(`Something went right. Data: ${data}\n`);
};
  
try {
  api.naiveErrorProneAsyncFunction('problematic input', callbackFunc);
} catch(err) {
  console.log(`Something went wrong. ${err}\n`);
}

