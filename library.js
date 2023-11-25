const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
/**
 * Checks the inventory to determine if the items in the order are available.
 * @param {Array<Array<string, number>>} order - The order containing items and their quantities.
 * @returns {Promise<string>} - A promise that resolves to a success message if the order can be fulfilled, or rejects with an error message if some items are sold out.
 */
  const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let inStock = order.every(item => inventory[item[0]] >= item[1]);
        if (inStock) {
          resolve(`Thank you. Your order was successful.`);
        } else {
          reject(`We're sorry. Your order could not be completed because some items are sold out.`);
        }
      }, 1000);
    })
  };
  
  module.exports = { checkInventory };