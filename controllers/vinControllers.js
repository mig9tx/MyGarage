const db = require("../models");

// Defining methods for the CarController
module.exports = {
  findAll: function(req, res) {
    db.Car.find(req.query)
      .then(dbCar => res.json(dbCar))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Car.findById(req.params.id)
      .then(dbCar => res.json(dbCar))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Car.create(req.body)
      .then(dbCar => res.json(dbCar))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Car.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbCar => res.json(dbCar))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Car.findById(req.params.id)
      .then(dbCar => dbCar.remove())
      .then(dbCar => res.json(dbCar))
      .catch(err => res.status(422).json(err));
  }
};
