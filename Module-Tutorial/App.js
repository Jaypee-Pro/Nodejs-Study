const moduleFunction = require('./Module');
const http = require('http');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const obj = new moduleFunction.dataClass;
  res.end(`class ${obj}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('accessing file...')
  //object list from module
  console.log(moduleFunction);
  
  //accessing object
  console.log('Accessing node Object...');
  console.log(moduleFunction.sum(2,3));
  console.log(moduleFunction.pi);
  console.log(new moduleFunction.dataClass);
});