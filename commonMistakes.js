const {checkInventory, processPayment, shipOrder} = require('./library.js');

/**
 * Represents an order with items and gift card balance.
 * @typedef {Object} Order
 * @property {Array<Array<string, number>>} items - The items in the order, each represented as an array with the item name and quantity.
 * @property {number} giftcardBalance - The balance of the gift card used for the order.
 */

/**
 * The order details.
 * @type {Order}
 */
const order = {
    items: [['sunglasses', 1], ['bags', 2]],
    giftcardBalance: 79.82
};

// Refactor the code below:
checkInventory(order)
    .then((resolvedValueArray) => {
        return processPayment(resolvedValueArray);
    })
    .then((resolvedValueArray) => {
        return shipOrder(resolvedValueArray);
    })
    .then((successMessage) => {
        console.log(successMessage);
    });