require("dotenv").config();
const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
const Admin  = require("../models/adminModel");

async function auth(req, res, next) {
  const token = req.cookies.token;
  if (!token) throw Unauthorized();

  const decoded = jwt.verify(token, process.env.JWT_KEY);

  if (!decoded.id) throw Unauthorized();

  const admin = await Admin.findById({_id:decoded.id});

  if (!admin) throw Unauthorized();
  req.admin = admin;
  next();
}

module.exports = auth;