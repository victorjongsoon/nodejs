var fileSystem1 = require('fs'); // Asynchronous - Opening File
const path = require("path");
const pathToFile = path.join(__dirname, "greeting.txt");

var dataToWrite = "This is a test data to write into the file"; // Create a writable stream

var stream1 = fileSystem1.createWriteStream(pathToFile); // Create a writable stream
stream1.write(dataToWrite, 'UTF8'); // write the data to stream with encoding to be utf8
stream1.end(); // mark the end of file

stream1.on('finish', function () {
  console.log("Write completed.");
}); // handle stream events --> finish, and error

console.log("Program Ended and File is created with the name output.txt")