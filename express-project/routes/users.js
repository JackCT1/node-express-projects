const express = require("express");
const router = express.Router();

app.get("/users", (req, res) => {
  res.send("User list");
});

app.get("/users/new", (req, res) => {
  res.send("users new form");
});
