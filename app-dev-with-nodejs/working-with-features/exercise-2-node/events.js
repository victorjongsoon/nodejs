var events = require('events');
var emitter = new events.EventEmitter(); 

/**
 * Handles the connection event.
 */
var handler = function handle(){ 
    console.log('connection successful.');
    emitter.emit('data_received');
}

emitter.on('connection', handler);
emitter.emit('connection');