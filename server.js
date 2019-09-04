const http = require("http"),
    port = 8888;

const buzyXsec = function(seconds){
    const waitTill = new Date(new Date().getTime() + seconds * 1000);
    while(waitTill > new Date()){}
}

http.createServer(function(request, response) {
    buzy5sec(5);
    response.writeHead(200);
    response.write(JSON.stringify({message : 'hello'}), "json");
    response.end();
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
