const express = require("express");

const estadoController = require("../controllers/estados.controller");
const routes = express.Router();

routes.get("/home", estadoController.welcome);

routes.get("/", estadoController.listEstados);

routes.get("/", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.json(estadosDatabase);
});

module.exports = routes;
