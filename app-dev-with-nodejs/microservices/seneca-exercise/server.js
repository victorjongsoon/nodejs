var seneca = require('seneca')()

seneca.add({role: 'command'}, function (msg, respond) {
    respond(null, {value: msg.value});
});

seneca.listen();
    