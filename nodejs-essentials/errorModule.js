const api = require('./api.js');

// An error-first callback
/**
 * Callback function that handles errors and data.
 *
 * @param {Error} err - The error object, if an error occurred.
 * @param {any} data - The data object, if no error occurred.
 * @returns {void}
 */
let errorFirstCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong. ${err}\n`);
  } else {
    console.log(`Something went right. Data: ${data}\n`);
  }
};

api.errorProneAsyncApi('problematic input', errorFirstCallback);

api.errorProneAsyncApi('good input', errorFirstCallback);
