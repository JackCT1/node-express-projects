require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("./controllers/tasks");

const dataConnection = require("./db/connect");
require("dotenv").config();

const PORT = 3000;

//middleware

app.use(express.static("./public"));
app.use(express.json());

//routes

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await dataConnection(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
