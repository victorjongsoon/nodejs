function callMeAfter2Seconds() {
    console.log('callMeAfter2Seconds() is called');
}
console.log('setTimeout() is called'); 
setTimeout(callMeAfter2Seconds, 2000);

console.log('setInterval() is called');
setInterval(callMeAfter2Seconds, 2000); // This will run forever at 2 seconds interval