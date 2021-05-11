const express = require('express');
const checkTaskExist = require('../middleware/checkTaskExist');
const parseId = require('../middleware/parseId');
const {
  getAllTask,
  getTaskById,
  addTask,
  updateTaskById,
  deleteTaskById
} = require('../controllers/task');

const router = express.Router();

router.get('', getAllTask);
router.get('/:id', parseId, checkTaskExist, getTaskById);
router.post('', addTask);
// PUT '/tasks/:id';
router.put('/:id', parseId, checkTaskExist, updateTaskById);
router.delete('/:id', parseId, checkTaskExist, deleteTaskById);

// app.use('/tasks',middleware, m2, m3)

module.exports = router;
