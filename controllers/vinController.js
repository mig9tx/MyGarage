const axios = require("axios");
const db = require("../models");

// Defining methods for the vinController

// findAll searches the Google Cars API and returns only the entries we haven't already saved

// It also makes sure that the Cars returned from the API all contain a title, author, link, description, and image
// const VIN = $(this).attr("data-type");
// 1C4HJWEG0FL650818

module.exports = {
  findAll: function (req, res) {
    // const { vin: query } = vin;
    // const { query: params } = req;
    console.log('line 14' + JSON.stringify(req.query));
    console.log(req.query.vin);
    const vin = req.query.vin;
    console.log("Are we here yet?");
    axios
      .get("https://marketcheck-prod.apigee.net/v1/vin/" + vin + "/specs?api_key=p6ECtEomofJa2GGQ9Jlx1nD18dsJk03l")
      .then(results => {
        // console.log(results);
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
    
      
  }
};

