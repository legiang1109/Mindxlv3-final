const inventoryController = require("../controller/inventoryController");
const middlewareController = require("../controller/middlewareController");

const routes = require("express").Router();

routes.get(
  "/all",
  middlewareController.verifyToken,
  inventoryController.getAllInventory
);
routes.get(
  "/query",
  middlewareController.verifyToken,
  inventoryController.productQuery
);
module.exports = routes;
