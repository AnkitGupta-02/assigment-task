const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxLength: 500 
  },
  link: {
    type: String,
    required: true,
    trim: true,
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Product', productSchema);

