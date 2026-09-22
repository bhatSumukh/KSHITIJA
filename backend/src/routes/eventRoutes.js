const express = require("express");
const { getEvents } = require("../controllers/eventController");

const router = express.Router();

// GET all events that are open for registration
router.get("/", getEvents);

module.exports = router;