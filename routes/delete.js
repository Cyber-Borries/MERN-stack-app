module.exports = function (app) {
  const cars = require("../controllers/cars.controller.js");
  app.delete("/remove", cars.deleteCarsByOwner);
};
