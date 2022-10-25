const estadoModel = require("../models/estados");

const controller = {
  welcome(request, response) {
    response.json("Seja bem vindo");
  },

  listEstados(request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*");

    const estadosDatabase = estadoModel.getEstados();

    response.json(estadosDatabase);
  },
};

module.exports = controller;
