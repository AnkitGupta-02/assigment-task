const mongoose = require('mongoose');

const researchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim:true,
  },
  year: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
    trim:true,
  },
  description: {
    type: String,
    required: true,
    trim:true,
  },
  doi: {
    type: String,
    required: true,
    trim:true,
  }
});

const Research = mongoose.model('Research', researchSchema);

module.exports = Research;