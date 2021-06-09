const express = require('express');
const studentRoute = require('./students');
const courseRoute = require('./courses');

const router = express.Router();

router.use('/students', studentRoute);
router.use('/courses', courseRoute);

module.exports = router;
