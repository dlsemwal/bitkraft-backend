const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema({
  name: String,
  city: String,
  country: String,
});

exports.Venue = mongoose.model("Venue", venueSchema);
