const store = {
  sunglasses: {
    inventory: 817,
    cost: 9.99
  },
  pants: {
    inventory: 236,
    cost: 7.99
  },
  bags: {
    inventory: 17,
    cost: 12.99
  }
};

const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const itemsArr = order.items;
      let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);

      if (inStock) {
        let total = 0;
        itemsArr.forEach(item => {
          total += item[1] * store[item[0]].cost
        });
        console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
        resolve([order, total]);
      } else {
        reject(`The order could not be completed because some items are sold out.`);
      }
    }, generateRandomDelay());
  });
};

/**
 * Process payment for an order using a gift card.
 * @param {Array} responseArray - An array containing the order and total amount.
 * @returns {Promise<Array>} - A promise that resolves to an array containing the order and tracking number if payment is successful, or rejects with an error message if payment fails.
 */
const processPayment = (responseArray) => {
  const order = responseArray[0];
  const total = responseArray[1];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let hasEnoughMoney = order.giftcardBalance >= total;
      // For simplicity we've omited a lot of functionality
      // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
      if (hasEnoughMoney) {
        console.log(`Payment processed with giftcard. Generating shipping label.`);
        let trackingNum = generateTrackingNumber();
        resolve([order, trackingNum]);
      } else {
        reject(`Cannot process order: giftcard balance was insufficient.`);
      }

    }, generateRandomDelay());
  });
};


const shipOrder = (responseArray) => {
  const order = responseArray[0];
  const trackingNum = responseArray[1];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
    }, generateRandomDelay());
  });
};

/**
 * Checks the availability of an item at a distributor.
 * @param {string} itemName - The name of the item to check availability for.
 * @param {string} distributorName - The name of the distributor to check availability from.
 * @returns {Promise<string>} - A promise that resolves with the item name if it is in stock, or rejects with an error message if it is unavailable.
 */
const checkAvailability = (itemName, distributorName) => {
  console.log(`Checking availability of ${itemName} at ${distributorName}...`);
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (restockSuccess()) {
              console.log(`${itemName} are in stock at ${distributorName}`)
              resolve(itemName);
          } else {
              reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
          }
      }, 1000);
  });
};

// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
}

// This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
function generateRandomDelay() {
  return Math.floor(Math.random() * 2000);
}

// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
  return (Math.random() > .2);
}

module.exports = { checkInventory, processPayment, shipOrder, checkAvailability };