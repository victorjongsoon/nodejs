const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
/**
 * Executes a promise to process a sunglasses order.
 *
 * @param {function} resolve - The function to call when the order is processed successfully.
 * @param {function} reject - The function to call when the order cannot be processed.
 */
const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
      resolve('Sunglasses order processed.');
    } else {
      reject('That item is sold out.');
    }
  };
  
const orderSunglasses = () => {
return new Promise(myExecutor);
};
  
const orderPromise = orderSunglasses();
console.log(orderPromise);