const http = require('http');
// express.js

const server = http.createServer((req, res) => {
  console.log(req.url);
  // if 来判断url的具体路径，从而进行相应的逻辑处理
  res.write('<h1>hello</h1>');
  res.end();
});

// protocol, http->80 https->443
// 80, 443, 8080, 3000, 4200
server.listen(8080);
console.log('server listening on port 8080');
