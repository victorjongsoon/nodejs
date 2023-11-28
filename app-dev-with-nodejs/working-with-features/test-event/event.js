var events = require('events');

var emitEvent = new events.EventEmitter();

var handler = function connected() {
    console.log('connection successful.');
    emitEvent.emit('data_received');
}

// binding the connection event with the handler

// bind event with handler
emitEvent.on('connection', handler);

// data received is bound with anonymous function
emitEvent.on('data_received', function() {
    console.log('data received fired successfully.');
});


emitEvent.emit('connection');
console.log("Program Ended.");