const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const modelRoute = require("./routes/Model");

dotenv.config();
// Connect DB
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json({ limit: "50mb" }));

app.use(cors());
// app.use(morgan("common"));

app.get("/api", (req, res) => {
  res.status(200).json("hello sadas");
});

//ROUTES
// app.use("/v1/model", modelRoute);

app.listen(3001, () => {
  console.log("Running on port 3001");
});
