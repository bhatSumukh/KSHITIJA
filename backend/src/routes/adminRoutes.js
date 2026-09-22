const express = require("express");

const {
  getRegistrations,
} = require("../controllers/adminController");

const router = express.Router();

router.get(
  "/registrations",
  getRegistrations
);

module.exports = router;