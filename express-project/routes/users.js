const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User list");
});

router.get("/new", (req, res) => {
  res.send("users new form");
});

router.post("/", (req, res) => {
  res.send("Create user");
});

router.get("/:id", (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

module.exports = router;
