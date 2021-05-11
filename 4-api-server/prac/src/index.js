// environment variable
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const swaggerUI = require('swagger-ui-express');

const router = require('./routes');
const logger = require('./utils/logger');
const swaggerDoc = require('./utils/swagger');

const app = express();

const PORT = process.env.PORT || 3000;

// logging

app.use(helmet());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev'));
app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
// app.use(taskRouter);
// app.use(userRouter);

// api versioning
// app.use('/v1', router);
// app.use('/v2', v2router);
app.use(router);

// 24000
app.listen(PORT, () => {
  // logger.debug('debug output');
  logger.info(`server listening on port ${PORT}`);
});
