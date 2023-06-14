const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(500).send("Second get request!");
});

app.listen(3000);
