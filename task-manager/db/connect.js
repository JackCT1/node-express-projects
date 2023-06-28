require("dotenv").config();

const mongoose = require("mongoose");

const connectionString = `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@${process.env.ATLAS_CLUSTER}s.sbfv6yu.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));
