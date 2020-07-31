const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch((error) => {
    console.error("ERROR ERROR", error);
  });

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get("/test", function (req, res) {
  res.send("Hello World");
});
