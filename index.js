const http = require("http");
const estadoDatabase = require("./database/estados.json");

const server = http.createServer ((req, resp) => {
    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.write (JSON.stringify(estadoDatabase));
    resp.end();
   
});

server.listen(8000);
