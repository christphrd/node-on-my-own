let http = require('http');

//create a server object
http.createServer(function (request, response) {
  response.write('Hello World!');
  response.end();
}).listen(3000, function(){
  console.log("server start at port 3000"); //the server object listens on port 3000
})

//http is the built in module of Node JS through which data is transferred over HTTP protocols
//see more built-in modules here: https://nodejs.org/dist/latest-v8.x/docs/api/
