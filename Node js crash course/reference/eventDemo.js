const eventEmitter = require('events');

// Create class of emitter
class MyEmittter extends eventEmitter { }

// Creating the object
const myemitter = new MyEmittter();

// Event listener (this will be executed when the event is triggered)
myemitter.on('event', () => console.log("Event Fired"));

// Init event
myemitter.emit('event');// this is used to trigger the event.

