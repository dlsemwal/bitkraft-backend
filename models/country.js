const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: String,
});

exports.Country = mongoose.model("Country", countrySchema);
