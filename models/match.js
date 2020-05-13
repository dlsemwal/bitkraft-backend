const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  teamA: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  teamB: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  venue: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Venue",
  },
  result: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Result",
  },
  date: Date,
});

exports.Match = mongoose.model("Match", matchSchema);
