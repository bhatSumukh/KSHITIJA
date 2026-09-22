const dotenv = require("dotenv");

const connectDB = require("./src/config/db");
const College = require("./src/models/College");
const colleges = require("./src/data/colleges");

dotenv.config();

const seedColleges = async () => {
  try {
    await connectDB();

    await College.deleteMany({});

    await College.insertMany(colleges);

    console.log("Colleges added successfully 🚀");

    process.exit(0);
  } catch (error) {
    console.error("Error while adding colleges:", error.message);

    process.exit(1);
  }
};

seedColleges();