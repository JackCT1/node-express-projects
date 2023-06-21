const express = require("express");

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 30,
  },
];

// get all users
router.get("/", (req, res) => {
  res.send(users);
});

module.exports = router;
