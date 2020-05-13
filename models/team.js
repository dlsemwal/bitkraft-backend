const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
  },
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
  totalMatches: Number,
  playedMatches: Number,
  won: Number,
  tied: Number,
  lost: Number,
});

exports.Team = mongoose.model("Team", teamSchema);
