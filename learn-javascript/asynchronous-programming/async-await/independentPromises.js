let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library4.js');

// Write your code below:
/**
 * Asynchronously serves dinner by preparing and cooking various components.
 * @returns {Promise<void>} A promise that resolves when dinner is served.
 */
async function serveDinner(){
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}

serveDinner();


