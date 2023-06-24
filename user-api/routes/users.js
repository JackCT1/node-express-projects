const express = require("express");
const userControllers = require("../controllers/users");

import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/users";

const router = express.Router();

// get all users
router.get("/", getAllUsers());

// create a user
router.post("/", createUser());

// get one user
router.get("/:id", getUser());

// delete a user
router.delete("/:id", deleteUser());

// update a user
router.patch("/:id", updateUser());

module.exports = router;
