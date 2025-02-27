const express = require('express');
const router = express.Router();

const {createAdmin,login,getAdminInfo,logout} = require("../controllers/adminController");
const hashPassword = require('../middleware/hashPassword');
const auth = require('../middleware/auth');

router.post("/signup", hashPassword,createAdmin);
router.post('/login',login);
router.get("/profile",auth,getAdminInfo);
router.post('/logout',logout);


module.exports = router;