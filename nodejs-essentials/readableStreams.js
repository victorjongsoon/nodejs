const readline = require('readline');
const fs = require('fs');

/**
 * Creates a readable stream from a file and sets it as the input for the readline interface.
 *
 * @param {string} filePath - The path to the file to be read.
 * @returns {Interface} - The readline interface with the readable stream as the input.
 */
const myInterface = readline.createInterface({
    input: fs.createReadStream('shoppingList.txt')
  });
  
const printData = (data) => {
  console.log(`Item: ${data}`);
};

myInterface.on('line', printData);