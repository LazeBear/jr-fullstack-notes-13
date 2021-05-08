const express = require('express');

const app = express();

app.use(express.json());

/**
 * {
 *    id: number,
 *    description: string,
 *    done: boolean
 * }
 */
const tasks = [];
let id = 1;

app.use(cors);

// push, pop, unshift, shift
// splice 进行中间删除或添加的时候
// slice 是取subarray
// find, findIndex, filter, map, some, reduce

app.get('/tasks', (req, res) => {
  const { description } = req.query;
  if (description) {
    const filteredTasks = tasks.filter((i) =>
      i.description.includes(description)
    );
    return res.json(filteredTasks);
  }
  return res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const { id } = req.params; // string
  const task = tasks.find((i) => i.id === Number(id));
  if (!task) {
    return res.sendStatus(404);
  }
  return res.json(task);
});

app.post('/tasks', (req, res) => {
  const { description } = req.body;
  // id++ => id+=1; =>  id = id+1;
  // ++id, id现在为 2
  const task = { description, id: id++, done: false };
  // id++, id现在为 2
  tasks.push(task);
  return res.json(task);
});

app.put('/tasks/:id', (req, res) => {
  // const { id, description, done } = req.params;
  const { id } = req.params;
  const { description, done } = req.body;

  let task = tasks.find((i) => i.id === Number(id));
  if (!task) {
    return res.sendStatus(404);
  }

  // task = { id, description, done };
  // tasks.push(task);
  // if (description) {
  //   task.description = description;
  // }
  // if (done !== undefined) {
  //   task.done = !!done;
  // }
  const newTask = {
    id: Number(id),
    description: description || task.description,
    done: !!done || task.done
  };
  const taskIndex = tasks.findIndex((i) => i.id === Number(id));
  tasks[taskIndex] = newTask;
  return res.json(newTask);
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((i) => i.id === Number(id));
  if (taskIndex === -1) {
    return res.sendStatus(404);
  }
  tasks.splice(taskIndex, 1);
  return res.sendStatus(204);
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});

function cors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  next();
}

/**
 * {id: number, author: string, content: string}
 */

/**
 * Bracket Pair Colorizer 2
 * Code Spell Checker
 * Indent-Rainbow
 * Material Icon Theme
 * Prettier Formatter
 */
