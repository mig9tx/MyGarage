const axios = require("axios");
const db = require("../models");

// Defining methods for the vinController

// findAll searches the Google Cars API and returns only the entries we haven't already saved

// It also makes sure that the Cars returned from the API all contain a title, author, link, description, and image
// const VIN = $(this).attr("data-type");
// 1C4HJWEG0FL650818

module.exports = {
  findAll: function (req, res) {
    console.log(req.params.title);
    console.log("Are we here yet?");
    const { query: params } = req;
    axios
      .get("https://marketcheck-prod.apigee.net/v1/vin/1FTEW1CF7FKD77206/specs?api_key=p6ECtEomofJa2GGQ9Jlx1nD18dsJk03l")
      .then(results => {
        console.log(results);
        console.log("Are we here yetT !?");
        // const filtered =
        //   results.data.items.filter(
        //     result =>
        //       result.year &&
        //       result.make &&
        //       result.model &&
        //       result.trim &&
        //       result.body_type &&
        //       result.engine &&
        //       result.synopsis &&
        //       result.date
        //   )
        res.json(results.data);
      }
    );
    
      // .then(apiCars =>
      //   db.Car.find().then(dbCars => {
      //     console.log("How soon is Now?");

      //     apiCars.filter(apiCar =>
      //       dbCars.every(dbCar => dbCar.googleId.toString() !== apiCar.id)
      //     )
      //   }
      //   )
      // )
      // .then(Cars => res.json(Cars))
      // .catch(err => res.status(422).json(err));
  }
};

