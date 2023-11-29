module.exports = function (options) {
    // send an email
    this.add({channel: 'email', action: 'send'}, function (msg, respond) {
        // send email
        respond(null, {result: 'success'})
    })
}