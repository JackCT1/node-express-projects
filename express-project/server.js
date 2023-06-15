const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { text: "Text to render" });
});

app.get("/users", (req, res) => {
  res.send("User list");
});

app.get("/users/new", (req, res) => {
  res.send("users new form");
});

app.listen(3000);
