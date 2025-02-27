require("./database/db.js");
require("dotenv").config();
require("express-async-errors");

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

// Routes
const serviceRoute = require('./routes/serviceRoute.js');
const productRoute = require('./routes/productRoute.js');
const researchRoute = require('./routes/researchRoute.js');
const adminRoute = require('./routes/adminRoute.js');

// middlewares
const cors = require("cors");
const cookieParser = require("cookie-parser");
const error = require("./middleware/error.js");

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3001", "http://localhost:5173"],
    credentials: true,
  })
);

// WebSocket setup
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3001", "http://localhost:5173"], // Allow frontend origins
    methods: ["GET", "POST"],
    credentials: true
  },
});

io.on("connection", (socket) => {
  console.log("A client connected");

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

// Attach io instance to app for use in routes
app.set("io", io);              

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use('/api/services',serviceRoute);
app.use('/api/products',productRoute);
app.use('/api/research',researchRoute);
app.use('/api/admin',adminRoute);

app.use(error);

server.listen(process.env.PORT, () => console.log("listning at " + process.env.PORT));
