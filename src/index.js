require("express-async-errors");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("./database/db.js");
// const error = require("./middleware/error.js");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

// app.use(error);

app.listen(process.env.PORT, () => console.log("listning at " + process.env.PORT));

module.exports = app;
