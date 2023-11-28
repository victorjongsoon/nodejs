function callMeAfter4Seconds() {
  console.log("I was called after 4 seconds");
}   

setTimeout(callMeAfter4Seconds, 4000); // 4000 ms = 4 seconds

setInterval(callMeAfter4Seconds, 4000); // this will run every 4 seconds