const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  status: String,
  height: Number,
  weight: Number,
  runs: Number,
  wickets: Number,
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team"
  },
});

exports.Player = mongoose.model("Player", playerSchema);
