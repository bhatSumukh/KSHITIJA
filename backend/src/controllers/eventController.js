const Event = require("../models/Event");

const getEvents = async (req, res) => {
  try {
    const events = await Event.find({
      registrationOpen: true,
    }).sort({ name: 1 });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch events",
      error: error.message,
    });
  }
};

module.exports = {
  getEvents,
};