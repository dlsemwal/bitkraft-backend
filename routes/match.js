const express = require("express");
const router = express.Router();
const { Match } = require("../models/match");

router.get("/", async (req, res) => {
  const matches = await Match.find().populate([
    { path: "teamA" },
    { path: "teamB" },
    { path: "venue" },
  ]);

  res.send(matches);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const matches = await Match.findById().populate([
    { path: "teamA" },
    { path: "teamB" },
    { path: "venue" },
  ]);

  res.send(matches);
});

module.exports = router;
