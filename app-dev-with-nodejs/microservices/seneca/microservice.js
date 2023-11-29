var seneca = require('seneca')()

/**
 * Calculates the length of the phrase by splitting it into words.
 *
 * @param {string} msg.phrase - The phrase to calculate the length of.
 * @returns {number} The length of the phrase in words.
 */
seneca.add({cmd: 'counter'}, function (msg, respond) {
    var length = msg.phrase.split(' ').length
    respond(null, {words: length})
})

/**
 * Splits the given phrase into an array of words and counts the number of words with length greater than 3.
 *
 * @param {string} msg.phrase - The phrase to be split into words.
 * @returns {number} The number of words with length greater than 3.
 */
seneca.add({cmd: 'counter', skipShort: true}, function (msg, respond) {
    var words = msg.phrase.split(' ')
    var validWords = 0
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 3) {
            validWords++
        }
    }
    respond(null, {length: validWords})
})

/*
in 'This is sample', there are 3 words
in 'This is sample', there are 2 words with length greater than 3
therefore the output is:
{ words: 3 }
{ length: 2 }
*/

/*
If skipShort is set to true, the action counts only the 
words hat are longer than 3 letters.
If skipShort is not provided or set to false (default behavior),
 the action counts all words regardless of their length.
*/

seneca.act({cmd: 'counter', phrase: 'This is sample'}, function (err, result) {
    if (err) return console.error(err)
    console.log(result)
})

seneca.act({cmd: 'counter', phrase: 'This is sample', skipShort: true}, function (err, result) {
    if (err) return console.error(err)
    console.log(result)
})

