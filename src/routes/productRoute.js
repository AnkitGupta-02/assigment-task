const express = require("express");
const router = express.Router();
const {
  createProduct,
  updateProduct,
  getAllProduct,
  deleteProduct,
} = require("../controllers/productController");
const auth  = require('../middleware/auth');

router.post("/create",auth, createProduct);
router.get("/", getAllProduct);
router.put("/:id",auth, updateProduct);
router.delete("/:id",auth, deleteProduct);

module.exports = router;