const http = require('http');

server = http.createServer((req,res)=>{
	res.end('Hello world from my first server');
});

server.listen(3000);