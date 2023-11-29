module.exports = function (options) {
    // send an SMS
    this.add({channel: 'sms', action: 'send'}, function (msg, respond) {
        // send SMS
        respond(null, {result: 'success'})
    })
}