const Research = require("../models/researchModel");

exports.createResearch = async (serviceData) => {
  const research = new Research(serviceData);
  await research.save();
  return research;
};

exports.getAllResearch = async () => {
  return await Research.find();
};

exports.updateResearch = async (id, value = {}) => {
  return await Research.findByIdAndUpdate(id, value, { new: true });
};

exports.deleteResearch = async (id) => {
  await Research.findByIdAndDelete(id);
};