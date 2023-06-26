const express = require("express");
const app = express();

const PORT = 3000;

//routes
app.get("/", (req, res) => {
  res.send("Task Manager App");
});

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
