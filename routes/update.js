module.exports = function (app) {
  const cars = require("../controllers/cars.controller.js");
  app.get("/update", cars.updateByOwner);
};
