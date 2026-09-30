const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema(
  {
    college: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// One phone number = one unique participant within a college
participantSchema.index(
  { college: 1, phone: 1 },
  { unique: true },
);

module.exports = mongoose.model("Participant", participantSchema);