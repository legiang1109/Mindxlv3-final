const usersController = require("../controller/usersController");

const routes = require("express").Router();

routes.post("/login", usersController.login);

module.exports = routes;
