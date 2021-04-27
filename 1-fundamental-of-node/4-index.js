const requestEvent = require('./4-event-emitter');

requestEvent.on('Request', (date) => {
  console.log(date);
});
