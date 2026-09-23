const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    type: {
      type: String,
      trim: true,
    },

    minTeamSize: {
      type: Number,
      min: 1,
      default: 1,
    },

    teamSize: {
      type: Number,
      min: 1,
      default: null,
    },

    teamSizeFinalized: {
      type: Boolean,
      default: false,
    },

    description: {
      type: String,
      trim: true,
    },

    registrationOpen: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
