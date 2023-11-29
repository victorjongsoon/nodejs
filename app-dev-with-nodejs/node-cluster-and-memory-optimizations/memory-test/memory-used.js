const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 5, 4, 3, 2 , 1];
reverseArr = arr.reverse(); // reverse the array
console.log(reverseArr);
const used = process.memoryUsage()

for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}