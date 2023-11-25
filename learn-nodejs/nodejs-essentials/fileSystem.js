const fs = require('fs');

// Use fs.readFile() to read the contents of fileOne.txt
let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
}; 

fs.readFile('./fileOne.txt', 'utf-8', readDataCallback);
fs.readFile('./anotherFile.txt', 'utf-8', readDataCallback);
fs.readFile('./finalFile.txt', 'utf-8', readDataCallback);

const secretWord = 'cheeseburgerpizzabagels';
console.log(`The secret word is: ${secretWord}`);