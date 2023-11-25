const {checkInventory} = require('./library1.js');

const order = [['sunglasses', 1], ['bags', 2]];

/**
 * Handles the success case by logging the resolved value.
 * @param {any} resolvedValue - The value resolved by the promise.
 * @returns {void}
 */
const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
    console.log(rejectReason);
};

// Write your code below:
// checkInventory(order).then(handleSuccess, handleFailure);
checkInventory(order)
    .then(handleSuccess)
    .catch(handleFailure);