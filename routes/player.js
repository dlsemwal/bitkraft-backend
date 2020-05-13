const express = require("express");
const router = express.Router();
const { Player } = require("../models/player");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const player = await Player.findById(id);
  res.send(player)
});

module.exports = router
