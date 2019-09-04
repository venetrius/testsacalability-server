const http = require("http")
const PORT = process.env.PORT || 8888

const buzyXsec = function(seconds){
    const waitTill = new Date(new Date().getTime() + seconds * 1000);
    while(waitTill > new Date()){}
}

http.createServer(function(request, response) {
    buzyXsec(5);
    response.writeHead(200);
    response.write(JSON.stringify({message : 'hello'}), "json");
    response.end();
}).listen(parseInt(PORT, 10));

console.log("Server running at on: " + PORT);
