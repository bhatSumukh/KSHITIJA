const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema(
  {
    college: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
      required: true,
    },

    registration: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Registration",
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
  }
);

// A participant cannot participate in multiple events
// within the same college.
participantSchema.index(
  { college: 1, phone: 1 },
  { unique: true }
);

const Participant = mongoose.model(
  "Participant",
  participantSchema
);

module.exports = Participant;