const express = require('express');
const app = express();

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
app.get('/api/greeting/:name', (req, res) => {
  const { name } = req.params;
  const { title } = req.query;
  res.send(`${title}.${name}`);
});
// app.post();
// app.put();
// app.delete();

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
