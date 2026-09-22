const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    collegeName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const College = mongoose.model("College", collegeSchema);

module.exports = College;