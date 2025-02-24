require("dotenv").config();
const mongoose = require("mongoose");
const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
});

adminSchema.statics.findByCredential = async function ({ username, password }) {
  const admin = await Admin.findOne({ username });
  if (!admin) throw Unauthorized("email & password are invalid");

  const isValid = await bcrypt.compare(password, admin.password);
  if (!isValid) throw Unauthorized("email & password are invalid");
  return admin;
};

adminSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id.toString() }, process.env.JWT_KEY);
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
