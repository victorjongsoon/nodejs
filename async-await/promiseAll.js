let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library4.js');

// Write your code below:
/**
 * Asynchronously serves dinner by awaiting the completion of multiple promises.
 * @returns {Promise<void>} A promise that resolves when dinner is served.
 */
async function serveDinnerAgain(){
    let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
    console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}

serveDinnerAgain();