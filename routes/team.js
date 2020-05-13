const express = require("express");
const router = express.Router();
const { Team } = require("../models/team");

router.get("/", async (req, res) => {
  const teams = await Team.find().populate("country");
  res.send(teams);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const team = await Team.findById(id).populate("country").populate("players");

  res.send(team);
});

module.exports = router;
