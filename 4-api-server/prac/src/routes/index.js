const express = require('express');
const tasksRouter = require('./task.js');

const router = express.Router();

router.use('/tasks', tasksRouter);

module.exports = router;
