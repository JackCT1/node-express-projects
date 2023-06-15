const express = require("express");
const userRouter = require("./routes/users");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { text: "Text to render" });
});

app.use("/users", userRouter);

app.listen(3000);
