const express = require("express");
const uuid = require("uuid");

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

// create a user
router.post("/", (req, res) => {
  const user = req.body;
  const userId = uuid();
  const userWithId = { ...user, id: userId };
  user.push(userWithId);
  console.log(`User with username ${firstName}${lastName} added.`);
});

// get one user
router.get("/:id", (req, res) => {
  const { id } = req.params.id;
  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
});

module.exports = router;
