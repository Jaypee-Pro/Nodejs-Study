const http = require('http')
const server = http.createServer((req,res)=>{
  //check if url is end /
  //basic routing
  if(req.url === '/'){
    console.log(`User requesting for ${req.url}`)
    res.write('hello world from node.js')
    res.end();
  }else{
    console.log(`User requesting for ${req.url}`)
    res.write('hello world from unknow domain')
    res.end();
  }
})
server.listen('3000')