require('./seed/seed')
const cors = require("cors");
const express = require("express");
const app = express();
const player = require("./routes/player");
const match = require("./routes/match");
const result = require("./routes/result");
const team = require("./routes/team");
require("express-async-errors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/player", player);
app.use("/api/match", match);
app.use("/api/result", result);
app.use("/api/team", team);

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send("Something failed...");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
