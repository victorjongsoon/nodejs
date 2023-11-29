const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 5, 4, 3, 2 , 1];
reverseArr = arr.reverse(); // reverse the array
console.log(reverseArr);
// evaluate the amount of heap memory used for arr.reverse()
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

