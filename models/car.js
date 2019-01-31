const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  year: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String },
  trim: { type: String, required: true },
  body_type: { type: String, required: true },
  engine: { type: String, required: true },
  highway_miles: { type: String, required: true },
  city_miles: { type: String, required: true, unique: true }
});

const CarInfo = mongoose.model("CarInfo", carSchema);

module.exports = CarInfo;