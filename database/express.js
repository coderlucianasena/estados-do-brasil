const express = require("express");
const estadoDatabase = require("./estados.json");
const server = express();

server.get("/contato", (req, resp) => {
    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.json(estadoDatabase);
    console.log(estadoDatabase);
});

server.listen(8000);