/* In this file, you will create all the code needed to perform CRUD operations using Mongoose. */
const Cars = require("../models/cars.model.js");

exports.create = async function (req, res) {
  // Create and Save a new car
  let carsModel = new Cars({
    Model: req.body.Model,
    Make: req.body.Make,
    Owner: req.body.Owner,
    RegistrationNumber: req.body.RegistrationNumber,
  });
  const carSave = await carsModel.save();
  res.send(carsModel);
};

exports.findAll = function (req, res) {
  Cars.find(function (err, test) {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "An error occurred while retrieving the cars." });
      console.log("findAll error");
    } else {
      res.send(test);
      console.log("findAll");
    }
  });
};

exports.updateByOwner = function (req, res) {
  let query = { Owner: req.body.Owner };
  Cars.findOneAndUpdate(
    query,
    { Owner: req.body.Owner },
    { new: true },
    function (err, doc) {
      if (err) {
        console.log("Something wrong when updating data!");
        res.send("ERROR: Not Updated. " + err);
      }
      res.send("Updated");
    }
  );
};

exports.deleteCarsByOwner = function (req, res) {
  let query = req.body._id;
  console.log("req.body", req.body);
  console.log("typeof", typeof req.body);
  console.log("query", query);
  Cars.findByIdAndDelete(req.body._id, function (err) {
    if (err) {
      console.log("ERROR: Car NOT removed. " + err);
      res.send("ERROR: Car NOT removed. " + err);
    }
    res.send("Car removed");
  });
};
