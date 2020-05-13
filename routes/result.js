const express = require("express");
const router = express.Router();
const { Result } = require("../models/result");

router.get("/", async (req, res) => {
  const results = await Result.find().populate([
    { path: "match" },
    { path: "winner" },
    { path: "manOfTheMatch" },
  ]);

  res.send(results);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Result.findById(id).populate([
    { path: "match" },
    { path: "winner" },
    { path: "manOfTheMatch" },
  ]);

  res.send(result);
});

module.exports = router;
