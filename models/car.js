const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    trim: { type: String, required: true },
    body_type: { type: String, required: true },
    engine: { type: String, required: true },
    synopsis: String,
    date: { type: Date, default: Date.now }
});

const Car = mongoose.model("car", carSchema);

module.exports = Car;


