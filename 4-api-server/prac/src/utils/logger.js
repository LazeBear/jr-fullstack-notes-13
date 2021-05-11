const { createLogger, format, transports } = require('winston');
const path = require('path');

const logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: format.combine(
    format.colorize(),
    // /Users/mason/Desktop/jr-fullstack-notes-13/4-api-server/prac
    // logger.js
    format.label({ label: path.basename(module.parent.filename) }),
    format.timestamp({ format: 'HH:mm:ss' }), //'YYYY-MM-DD HH:mm:ss'
    format.printf(
      (info) =>
        `${info.timestamp} [${info.label}] [${info.level}]: "${info.message}"`
    )
  ),
  transports: [new transports.Console()]
});

module.exports = logger;
