const express = require("express");
const router = express.Router();
const {
  createResearch,
  updateResearch,
  getAllResearch,
  deleteResearch,
} = require("../controllers/researchController");
const auth  = require('../middleware/auth');

router.post("/create", auth,createResearch);
router.get("/", getAllResearch);
router.put("/:id",auth, updateResearch);
router.delete("/:id",auth, deleteResearch);

module.exports = router;