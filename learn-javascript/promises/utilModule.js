// Require in trails module from trails.js
const trails = require('./trails.js');
// Require in util module here
const util = require('util');

// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
    return setTimeout(() => {
        if (trails.hasOwnProperty(trail)) {
            const foundTrail = trails[trail];
            callback(null, foundTrail)
        } else {
            callback(new Error('Trail not found!'))
        }
    }, 1000);
}

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
function callback(error, trailData) {
    if (error) {
        console.error(error.message)
        process.exit(1)
    } else {
        const mi = trailData.miles;
        const nickname = trailData.nickname;
        console.log(`The ${nickname} is ${mi} miles long!`)
    }
}

getTrailDistance('North Country', callback)

// Promisify below!
// Declare a variable getTrailDistancePromise and store util.promisify(getTrailDistance).
const getTrailDistancePromise = util.promisify(getTrailDistance);

// Call the new promisified function getTrailDistancePromise with 'North Country' as the only argument.
// Resolve the promise with a .then() method, and reject the promise with a .catch() method.
getTrailDistancePromise('North Country')
    .then((trailData) => {
        const mi = trailData.miles;
        const nickname = trailData.nickname;
        console.log(`The ${nickname} is ${mi} miles long!`);
    })
    .catch((error) => {
        console.error(error.message);
        process.exit(1);
    });

getTrailDistancePromise('Singapore')
    .then((trailData) => {
        const mi = trailData.miles;
        const nickname = trailData.nickname;
        console.log(`The ${nickname} is ${mi} miles long!`)
    })
    .catch((error) => {
        console.error(error.message);
        process.exit(1);
    })