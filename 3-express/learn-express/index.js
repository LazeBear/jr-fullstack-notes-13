const express = require('express');
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  // req.query;
  // req.body;
  // req.params
  // res.send('reject');
  req.time = new Date();

  console.log(1);
  next();
});

function m2(req, res, next) {
  console.log(2);
  next();
}

app.use(m2);

// m2
// app.use('/v1',(req, res, next) => {

// })
// app.get('/v1', (req, res) => { });

// app.use((req, res, next) => {});

// PUT VS PATCH
/**
 * {
 *    "name":"mason",
 *    "gender": "male"
 * }
 *
 * PUT , body: { "name": "alice" }
 *       ->    { "name": "alice" }
 *
 * PATCH, body: { "name": "alice" }
 *      ->     { "name": "alice", "gender": "male" }
 */

// url, href
// /api/v1/tasks?username=mason
// path, query params

// query params 用来进行数据的筛选 filtering
// [1000] filter -> [10]
// q = query = search
// parameters

// server, http method, path, route handler
// app,    get        , /   , (req, res)=>{}
// app.get('/', (req, res) => {
//   res.send('world');
// });

// variable -> route params
// /api/greeting/mason
// /api/greeting/james
// 变量名需要一一对应
// endpoint
app.use('/api/greeting/:name', m3);
app.get('/api/greeting/:name', (req, res) => {
  const { name } = req.params;
  const { title } = req.query;
  res.send(`${title}.${name}`);
});

function m3(req, res, next) {
  console.log(3);
  next();
}

// [m1,m2,m3,RH]
app.use('/api/students', m3);
app.post('/api/students', (req, res) => {
  // throw new Error('an error');

  // validate req.body
  // 1. res.sendStatus(400)
  // 2. throw error
  // req.body;
  res.send({ ...req.body, time: req.time }); // payload
});
// app.put();
// app.delete();

// [m1, ...., RH, m10]
app.use((req, res, next) => {
  // req.query;
  // req.body;
  // req.params
  res.send('reject');
  // next();
});

// 当server出错的时候，对相应的错误进行抓取，然后返回正确的状态信息
function errorHandler(error, req, res, next) {
  console.log(error);
  res.sendStatus(500);
}

app.use(errorHandler);

app.listen(3000, () => {
  console.log('server listening on port 3000');
});

// try {
//   foo();
// } catch (e) {

// }

// foo() {
//   if (//some condition) {
//     throw new Error()
//   }
// }
