const {login,createAdmin} = require('../services/adminLogic');

exports.createAdmin = async (req, res) => {
  const data = req.body;
 const response = await createAdmin(data);
 if(response){
  res.status(201).send("created sucessfully");
 }
};

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

  
  exports.getAdminInfo = async (req, res) => {
    const adminData = req.admin;
    res.status(200).send(adminData);
  };
  
  exports.logout = async (req, res) => {
    res.clearCookie('token', {
      httpOnly: true, 
      secure: true,  
      sameSite: 'none',
    });
    res.status(204).send();
  };