var seneca = require('seneca')()

seneca.client();

seneca.act({role: 'command', value: 'command executed'}, function (err, result) {
    if (err) return console.error(err)
    console.log(result)
});