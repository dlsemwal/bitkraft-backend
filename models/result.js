const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  match: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Match",
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  manOfTheMatch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
  },
  outcome: String,
});

exports.Result = mongoose.model("Result", resultSchema);
