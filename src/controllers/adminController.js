const {login} = require('../services/adminLogic');

exports.login = async (req, res) => {
    const {username, password} = req.body;
    const admin = await login({username, password});
    if(!admin) res.status(400).send("invalid credential");
    const token = admin.generateToken();
  
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.status(204).send();
  };