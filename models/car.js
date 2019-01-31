const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  year: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String },
  drivetrain: { type: String},
  trim: { type: String, required: true },
  body_type: { type: String, required: true },
  engine: { type: String, required: true },
  highway_miles: { type: String, required: true },
  city_miles: { type: String, required: true, unique: true }
});

const CarInfo = mongoose.model("CarInfo", carSchema);

module.exports = CarInfo;

// { year: 2015,
//   [0]   model: 'Wrangler',
//   [0]   trim: 'Unlimited Sahara',
//   [0]   body_type: 'SUV',
//   [0]   drivetrain: '4WD',
//   [0]   engine: '3.6L V6 DOHC 24V FFV',
//   [0]   highway_miles: '21 miles/gallon',
//   [0]   city_miles: '16 miles/gallon' }