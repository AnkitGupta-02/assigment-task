const Admin = require("../models/adminModel");

exports.login = async ({ username, password }) => {
  const admin = Admin.findByCredential({ username, password });
  return admin;
};

exports.createAdmin = async (data) => {
  const admin = new Admin(data);
  await admin.save();
 return admin;
}
