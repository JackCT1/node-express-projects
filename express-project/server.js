const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("First get request!");
});

app.listen(3000);
