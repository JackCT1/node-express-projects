import express from "express";

const router = express.Router();

// get all users
router.get("/users", (req, res) => {
  res.send("Hello");
});

export default router;
