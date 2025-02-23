const Service = require("../models/serviceModel");

exports.createService = async (serviceData) => {
  const service = new Service(serviceData);
  await service.save();
  return service;
};

exports.getAllServices = async () => {
  return await Service.find();
};

exports.updateService = async (id, value = {}) => {
  return await Service.findByIdAndUpdate(id, value, { new: true });
};

exports.deleteService = async (id) => {
  await Service.findByIdAndDelete(id);
};
