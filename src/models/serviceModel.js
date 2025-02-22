const mongoose = require("mongoose");

const subServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  technologies: {
    type: [String],
    validate: {
      validator: function (arr) {
        return arr === null || new Set(arr).size === arr.length;
      },
      message: "Technologies array contains duplicate values",
    },
    default: undefined,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});

const serviceSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    sub_services: {
      type: [subServiceSchema],
      required: true,
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: "At least one sub-service is required",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Create model and exports
module.exports = mongoose.model("Service", serviceSchema);
