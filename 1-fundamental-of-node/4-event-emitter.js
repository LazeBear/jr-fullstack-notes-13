// observer pattern
const EventEmitter = require('events');

class RequestEvent extends EventEmitter {
  constructor() {
    super();
    this.start();
  }

  start() {
    setInterval(() => {
      this.emit('Request', new Date());
    }, 1000);
  }
}

module.exports = new RequestEvent();
