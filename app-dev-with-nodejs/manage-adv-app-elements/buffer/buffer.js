// Create a buffer with a specified length
const buffer1 = Buffer.alloc(10);

// Create a buffer from an array
const buffer2 = Buffer.from([1, 2, 3]);

// Create a buffer from a string
const buffer3 = Buffer.from('hello', 'utf-8');

console.log(buffer1);
console.log(buffer2);
console.log(buffer3);

// Enconding
const buffer = Buffer.from('hello', 'utf-8');
const str = buffer.toString('utf-8');

console.log(buffer);
console.log(str);

// Manipulation
const bufferManipulation = Buffer.from('Node.js');

// Read from the buffer
console.log(bufferManipulation.toString('utf-8', 0, 4));  // Output: Node

// Write to the buffer
bufferManipulation.write('JS', 4);
console.log(bufferManipulation.toString('utf-8', 0, 6));  // Output: NodeJS

// Binary Arithemetic
const buffer4 = Buffer.from([1, 2, 3]);
const buffer5 = Buffer.from([4, 5, 6]);

const result = Buffer.concat([buffer4, buffer5]);
console.log(result);  // Output: <Buffer 01 02 03 04 05 06>
