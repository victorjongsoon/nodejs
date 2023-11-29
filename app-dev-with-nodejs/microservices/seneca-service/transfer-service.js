// Seneca microservices plugin for handling different actions 
// related to channels such as email, SMS, and cloud transfer

module.exports = function (options) {
    // sends an email
    this.add({channel: 'email', action: 'send'}, function (msg, respond) {
        // send email
        respond(null, {result: 'success'})
    })

    // gets a list of pending email
    this.add({channel: 'sms', action: 'send'}, function (msg, respond) {
        // send sms
        respond(null, {result: 'success'})
    })
    
    // cloud transfer   
    this.add({channel: 'cloudtransfer', action: 'transfer'}, function (msg, respond) {
        // transfer file
        respond(null, {result: 'success'})
    })

}