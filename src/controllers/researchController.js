const {
  createResearch,
  getAllResearch,
  updateResearch,
  deleteResearch,
} = require("../services/researchLogic");

exports.createResearch = async (req, res) => {
  const data = req.body;
  if (!data) res.status(400).send();
  const result = await createResearch(data);
  if (!result) res.status(400).send();

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
  const result = await updateResearch(id, updateData);
  if (!result) res.status(400).send();

  res.status(200).send("updated sucessfully");
};

exports.deleteResearch = async (req, res) => {
  const id = req.params.id;
  if (!id) res.status(400).send("id can not be empty");
  await deleteResearch(id);
  res.status(200).send();
};