const Admin = require('../models/adminModel');

exports.login = async ({username, password}) => {
    const admin = Admin.findByCredential({username, password});
    return admin;
  };