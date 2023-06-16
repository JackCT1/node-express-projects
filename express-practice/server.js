const express = require("express");
const userRouter = require("./routes/users");
const app = express();

app.use(logger);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", logger, (req, res) => {
  res.render("index", { text: "Text to render" });
});

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
