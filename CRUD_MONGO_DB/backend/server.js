const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const router = require('./routes/route');
require("dotenv").config();
const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.use(cors());
console.log('url', process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL)
app.listen(port, (err) => {
  if (err) {
    console.log("error... while starting server", err);
    process.exit(-1);
  }
  console.log("application started on port", port);
});
app.use(router);
exports.app = app;
