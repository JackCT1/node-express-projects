const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User list");
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/", (req, res) => {
  res.send("Create user");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Remove user with ID ${req.params.id}`);
  });

const users = [{ name: "Jack" }, { name: "Thomas" }];

router.param("id", (req, res, next, id) => {
  req.user = user[id];
  console.log(id);
  next();
});

module.exports = router;
