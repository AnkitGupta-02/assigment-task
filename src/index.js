require("express-async-errors");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("./database/db.js");
const serviceRoute = require('./routes/serviceRoute.js');
const productRoute = require('./routes/productRoute.js');
const researchRoute = require('./routes/researchRoute.js');
const adminRoute = require('./routes/adminRoute.js');
const error = require("./middleware/error.js");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use('/api/services',serviceRoute);
app.use('/api/products',productRoute);
app.use('/api/research',researchRoute);
app.use('/api/admin',adminRoute);

app.use(error);

app.listen(process.env.PORT, () => console.log("listning at " + process.env.PORT));

module.exports = app;
