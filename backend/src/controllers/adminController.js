const Registration = require("../models/Registration");

const getRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find()
      .populate("college", "collegeName")
      .populate("event", "name slug teamSize")
      .populate(
        "participants",
        "name phone"
      )
      .sort({ createdAt: -1 });

    res.status(200).json(registrations);
  } catch (error) {
    console.error("Admin registrations error:", error);

    res.status(500).json({
      message: "Failed to fetch registrations",
      error: error.message,
    });
  }
};

module.exports = {
  getRegistrations,
};