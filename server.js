const http = require("http")
const PORT = process.env.PORT || 8888
var url = require('url');

const busyXsec = function(seconds){
  const countTo = 500 * 1000 * 1000
  let count = 0
  while(count  > countTo){ count++ }
}

http.createServer(function(request, response) {
    let seconds = url.parse(request.url, true).query['seconds'];
    if (!seconds){seconds = 5}
    console.log(seconds)
    busyXsec(seconds);
    if(request.header){
        response.setHeader('Access-Control-Allow-Headers', '*');
    }
    response.writeHead(200);
    response.write(JSON.stringify({seconds : seconds}), "json");
    response.end();
}).listen(parseInt(PORT, 10));

console.log("Server running at on: " + PORT);
