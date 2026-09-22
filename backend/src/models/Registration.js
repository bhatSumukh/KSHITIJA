const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    // Approved college
    college: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
      required: true,
    },

    // Faculty information
    facultyHeadName: {
      type: String,
      required: true,
      trim: true,
    },

    facultyPhone: {
      type: String,
      required: true,
      trim: true,
    },

    facultyEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    // Event being registered for
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },

    // Participants registered for this event
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Participant",
      },
    ],

    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "confirmed",
    },
  },
  {
    timestamps: true,
  }
);

// A college can register for an event only once
registrationSchema.index(
  { college: 1, event: 1 },
  { unique: true }
);

const Registration = mongoose.model(
  "Registration",
  registrationSchema
);

module.exports = Registration;