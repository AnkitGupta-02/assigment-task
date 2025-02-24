const express = require("express");
const router = express.Router();
const {
  createService,
  updateService,
  getAllService,
  deleteService,
} = require("../controllers/serviceController");
const auth  = require('../middleware/auth');

router.post("/create", auth,createService);
router.get("/", getAllService);
router.put("/:id",auth, updateService);
router.delete("/:id",auth, deleteService);

module.exports = router;