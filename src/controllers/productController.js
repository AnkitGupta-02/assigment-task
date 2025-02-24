const {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
} = require("../services/productLogic");

exports.createProduct = async (req, res) => {
  const data = req.body;
  if (!data) res.status(400).send();
  const result = await createProduct(data);
  if (!result) res.status(400).send();

  res.status(201).send("created Sucessfully");
};

exports.getAllProduct = async (req, res) => {
  const result = await getAllProduct();
  if (!result) res.status(204).send();

  res.status(200).send(result);
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  if (!id && !updateData) res.status(400).send("id and data can not be empty");
  const result = await updateProduct(id, updateData);
  if (!result) res.status(400).send();

  res.status(200).send("updated sucessfully");
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  if (!id) res.status(400).send("id can not be empty");
  await deleteProduct(id);
  res.status(200).send();
};