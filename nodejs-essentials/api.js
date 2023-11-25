/**
 * Module containing error-prone asynchronous APIs and functions.
 * @module api
 */

module.exports = {
    /**
     * Executes an error-prone asynchronous API.
     * @param {string} input - The input for the API.
     * @param {function} callback - The callback function to be called upon completion.
     */
    errorProneAsyncApi: (input, callback) => {
        console.log(`Running errorProneAsyncApi with input: ${input}...\n`)
        setTimeout(() => {
            let myErr;
            if (input === 'problematic input') {
                myErr = new Error('whoops')
                callback(myErr)
            } else {
                let responseData = `Received valid input "${input}"`
                callback(myErr, responseData)
            }
        }, 0)
    },

    /**
     * Executes a naive error-prone asynchronous function.
     * @param {string} input - The input for the function.
     * @param {function} callback - The callback function to be called upon completion.
     */
    naiveErrorProneAsyncFunction: (input, callback) => {
        console.log(`Running naiveErrorProneAsyncFunction with input: ${input}...\n`)
        setTimeout(() => {
            if (input === 'problematic input') {
                throw new Error('whoops')
            } else {
                let responseData = `Received valid input "${input}"`
                callback(responseData)
            }
        }, 0)
    }
}
