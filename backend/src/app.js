const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const collegeRoutes = require("./routes/collegeRoutes");
const eventRoutes = require("./routes/eventRoutes");
const registrationRoutes = require("./routes/registrationRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use((req, res, next) => {
  console.log("REQUEST:", req.method, req.url);
  next();
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
app.use(express.json());
app.use("/api/colleges", collegeRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/registrations", registrationRoutes);
app.use("/api/admin", adminRoutes);


app.get("/", (req, res) => {
  res.json({
    message: "Kshithija backend is running 🚀",
  });
});

module.exports = app;