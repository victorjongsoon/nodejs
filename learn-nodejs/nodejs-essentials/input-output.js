let { testNumber } = require('./game.js');

// Function to play the game
/**
 * Executes the game based on user input.
 * @param {any} userInput - The user input to be processed.
 * @returns {void}
 */
let playGame = (userInput) => {
  let input = userInput.toString().trim();

  // Check if the user wants to quit
  if (input.toLowerCase() === 'quit') {
    console.log('Quitting the game.');
    process.exit(); // Exit the program
  } else {
    testNumber(input); // Test the user's input
  }
};

process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

// Listen for user input
process.stdin.on('data', playGame);
