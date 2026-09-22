const College = require("../models/College");

const getColleges = async (req, res) => {
  try {
    const colleges = await College.find().sort({
      collegeName: 1,
    });

    res.status(200).json(colleges);
  } catch (error) {
    console.error("Error fetching colleges:", error);

    res.status(500).json({
      message: "Failed to fetch colleges",
      error: error.message,
    });
  }
};

module.exports = {
  getColleges,
};