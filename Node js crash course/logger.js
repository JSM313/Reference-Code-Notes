const eventEmitter = require('events');

const uuid = require('uuid'); // creates a certain format of id

console.log(uuid.v4());

class Logger extends eventEmitter {

  log(message) {

    // Call event
    this.emit('message', { id: uuid.v4(), message: message });
  }
}

module.exports = Logger;