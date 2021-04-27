const fs = require('fs');

const content = fs.readFileSync('./note.txt', 'utf8');

console.log(content);

const newContent = content + '\nhello from node.js';

fs.writeFileSync('./note.txt', newContent);
