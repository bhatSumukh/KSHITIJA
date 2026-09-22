const express = require("express");
const { createRegistration } = require("../controllers/registrationController");

const router = express.Router();

// POST a new registration
router.post("/", createRegistration);

module.exports = router;
