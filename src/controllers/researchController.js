const {
  createResearch,
  getAllResearch,
  updateResearch,
  deleteResearch,
} = require("../services/researchLogic");

exports.createResearch = async (req, res) => {
  const data = req.body;
  if (!data) res.status(400).send();
  const newResearch = await createResearch(data);
  if (!newResearch) res.status(400).send();
   // Broadcast the new service to all connected clients
   const io = req.app.get("io");
   io.emit("research-updated", newResearch);
  res.status(201).send("created Sucessfully");
};

exports.getAllResearch = async (req, res) => {
  const result = await getAllResearch();
  if (!result) res.status(204).send();

  res.status(200).send(result);
};

exports.updateResearch = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  if (!id && !updateData) res.status(400).send("id and data can not be empty");
  const updatedResearch = await updateResearch(id, updateData);
  if (!updatedResearch) res.status(400).send();

 // Broadcast the updated service
 const io = req.app.get("io");
 io.emit("research-updated", updatedResearch);

  res.status(200).send("updated sucessfully");
};

exports.deleteResearch = async (req, res) => {
  const id = req.params.id;
  if (!id) res.status(400).send("id can not be empty");
  await deleteResearch(id);
  // Broadcast the deleted service ID
  const io = req.app.get("io");
  io.emit("research-deleted", req.params.id);

  res.status(200).send();
};