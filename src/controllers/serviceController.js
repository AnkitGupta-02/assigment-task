const {
  createService,
  getAllServices,
  updateService,
  deleteService,
} = require("../services/serviceLogic");
const { emitDataChange } = require("../sockets/emitters");

exports.createService = async (req, res) => {
  const data = req.body;
  if (!data) res.status(400).send();
  const newService = await createService(data);
  if (!newService) res.status(400).send();
  // Emit after successful creation
  emitDataChange("create", "Service", newService);
  res.status(201).send("created Sucessfully");
};

exports.getAllService = async (req, res) => {
  const result = await getAllServices();
  if (!result) res.status(204).send();

  res.status(200).send(result);
};

exports.updateService = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  if (!id && !updateData) res.status(400).send("id and data can not be empty");
  const updatedService = await updateService(id, updateData);
  if (!updatedService) res.status(400).send();
  // Emit after successful update
  emitDataChange("update", "Service", updatedService);
  res.status(200).send("updated sucessfully");
};

exports.deleteService = async (req, res) => {
  const id = req.params.id;
  if (!id) res.status(400).send("id can not be empty");
  await deleteService(id);
  // Emit after successful deletion
  emitDataChange("delete", "Service", { _id: id });
  res.status(200).send();
};
