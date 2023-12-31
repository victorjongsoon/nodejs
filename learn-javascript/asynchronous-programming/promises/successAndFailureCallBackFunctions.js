const {checkInventory} = require('./library1.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

/**
 * Handles the failure of a callback function.
 * @param {string} rejectionReason - The reason for the rejection.
 */
const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
};

// both sunglassses and bags are in stock, so the order is successful
checkInventory(order).then(handleSuccess, handleFailure);
