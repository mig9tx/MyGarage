const axios = require("axios");
const db = require("../models");

// Defining methods for the vinController

// findAll searches the Google Cars API and returns only the entries we haven't already saved

// It also makes sure that the Cars returned from the API all contain a title, author, link, description, and image
// const VIN = $(this).attr("data-type");
// 1C4HJWEG0FL650818

module.exports = {
  findAll: function (req, res) {
    const vin = req.query.vin;
    axios
      .get("https://marketcheck-prod.apigee.net/v1/vin/" + vin + "/specs?api_key=p6ECtEomofJa2GGQ9Jlx1nD18dsJk03l")
      .then(results => {
        res.json(results.data);
      }
    );
  }
};

