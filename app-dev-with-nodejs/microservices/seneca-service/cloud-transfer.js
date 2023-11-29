module.exports = function (options) {
    // cloud transfer
    this.add({channel: 'cloudtransfer', action: 'transfer'}, function (msg, respond) {
        // transfer file
        respond(null, {result: 'success'})
    })  
}