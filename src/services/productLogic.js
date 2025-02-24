const Product = require("../models/productModel");

exports.createProduct = async (serviceData) => {
  const product = new Product(serviceData);
  await product.save();
  return product;
};

exports.getAllProduct = async () => {
  return await Product.find();
};

exports.updateProduct = async (id, value = {}) => {
  return await Product.findByIdAndUpdate(id, value, { new: true });
};

exports.deleteProduct = async (id) => {
  await Product.findByIdAndDelete(id);
};