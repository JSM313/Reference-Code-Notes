const EventEmitter = require("events");

const uuid = require("uuid");

console.log(uuid.v4());

class Logger extends EventEmitter {
  log(message) {
    // Call Event
    this.emit("message", { id: uuid.v4(), message: message });
  }
}

module.exports = Logger;
