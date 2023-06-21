import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello world"));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
