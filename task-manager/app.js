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

const PORT = 3000;

//middleware

app.use(express.json());

//routes
app.get(getAllTasks);

app.use("/api/v1/tasks", tasks);

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
