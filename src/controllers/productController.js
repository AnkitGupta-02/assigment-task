const {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
} = require("../services/productLogic");

exports.createProduct = async (req, res) => {
  const data = req.body;
  if (!data) res.status(400).send();
  const newProduct = await createProduct(data);
  if (!newProduct) res.status(400).send();
   // Broadcast the new service to all connected clients
   const io = req.app.get("io");
   io.emit("product-updated", newProduct);

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
  const updatedProduct = await updateProduct(id, updateData);
  if (!updatedProduct) res.status(400).send();
  // Broadcast the updated service
  const io = req.app.get("io");
  io.emit("product-updated", updatedProduct);

  res.status(200).send("updated sucessfully");
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  if (!id) res.status(400).send("id can not be empty");
  await deleteProduct(id);
   // Broadcast the deleted service ID
   const io = req.app.get("io");
   io.emit("product-deleted", req.params.id);
 
  res.status(200).send();
};