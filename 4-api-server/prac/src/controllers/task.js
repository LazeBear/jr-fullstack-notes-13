const Task = require('../models/task');

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: Object
 *      required:
 *        - description
 *      properties:
 *        id:
 *          type: string
 *          description: auto generated unique identifier
 *        description:
 *          type: string
 *          description: description of the task
 *        done:
 *          type: boolean
 *          description: status of the task
 *      example:
 *        id: 1
 *        description: task No.1
 *        done: false
 *
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *    summary: Return all tasks
 *    tags: [Tasks]
 *    parameters:
 *      - name: description
 *        in: query
 *        description: filter tasks by description
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: The array of tasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 *
 */
function getAllTask(req, res) {
  const { description } = req.query;
  const tasks = Task.getAllTask({ description });
  // parse data
  return res.json(tasks);
}

function getTaskById(req, res) {
  const { id } = req.params;
  const task = Task.getTaskById(id);
  return res.json(task);
}

function addTask(req, res) {
  const { description } = req.body;
  // should do some data validation, but will leave to future
  const task = Task.addTask({ description });
  return res.status(201).json(task);
}

function updateTaskById(req, res) {
  const { id } = req.params;
  const { description, done } = req.body;
  const task = Task.updateTaskById(id, { description, done });
  return res.json(task);
}

function deleteTaskById(req, res) {
  const { id } = req.params;
  Task.deleteTaskById(id);
  return res.sendStatus(204);
}

module.exports = {
  getAllTask,
  getTaskById,
  addTask,
  updateTaskById,
  deleteTaskById
};
