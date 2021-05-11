/**
 * {
 *    id: number,
 *    description: string,
 *    done: boolean
 * }
 */
const tasks = [];
let id = 1;

// create
function addTask({ description }) {
  const task = { description, id: id++, done: false };
  tasks.push(task);
  return task;
}

// read all
function getAllTask({ description }) {
  if (description) {
    const filtered = tasks.filter((i) => i.description.includes(description));
    return filtered;
  }
  return tasks;
}

// read one
function getTaskById(id) {
  return tasks.find((i) => i.id === id);
}

// update
function updateTaskById(id, { done, description }) {
  const task = getTaskById(id);
  if (done !== undefined) {
    task.done = !!done;
  }
  if (description) {
    task.description = description;
  }
  return task;
}

// delete
function deleteTaskById(id) {
  const taskIndex = getTaskIndexById(id);
  tasks.splice(taskIndex, 1);
}

// helper function
function getTaskIndexById(id) {
  return tasks.findIndex((i) => i.id === id);
}

// clean code

module.exports = {
  getAllTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  addTask
};
