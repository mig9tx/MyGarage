const axios = require("axios");
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Cars API and returns only the entries we haven't already saved

// It also makes sure that the Cars returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("https://marketcheck-prod.apigee.net/v1/vin/1C4HJWEG0FL650818/specs?api_key=p6ECtEomofJa2GGQ9Jlx1nD18dsJk03l", {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.make &&
            result.model &&
            result.trim &&
            result.body_type &&
            result.engine &&
            result.synopsis &&
            result.date
        )
      )
      .then(apiCars =>
        db.Car.find().then(dbCars =>
          apiCars.filter(apiCar =>
            dbCars.every(dbCar => dbCar.googleId.toString() !== apiCar.id)
          )
        )
      )
      .then(Cars => res.json(Cars))
      .catch(err => res.status(422).json(err));
  }
};

