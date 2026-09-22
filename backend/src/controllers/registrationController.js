const mongoose = require("mongoose");

const Registration = require("../models/Registration");
const College = require("../models/College");
const Event = require("../models/Event");
const Participant = require("../models/Participant");

const createRegistration = async (req, res) => {
  const session = await mongoose.startSession();

  try {
    const {
      college,
      event,
      facultyHeadName,
      facultyPhone,
      facultyEmail,
      participants,
    } = req.body;

    // ---------------------------------------
    // BASIC VALIDATION
    // ---------------------------------------

    if (
      !college ||
      !event ||
      !facultyHeadName?.trim() ||
      !facultyPhone?.trim() ||
      !facultyEmail?.trim()
    ) {
      return res.status(400).json({
        message: "Please fill all required details.",
      });
    }

    if (!Array.isArray(participants) || participants.length === 0) {
      return res.status(400).json({
        message: "No participants provided.",
      });
    }

    // ---------------------------------------
    // CHECK COLLEGE
    // ---------------------------------------

    const collegeExists = await College.findById(college);

    if (!collegeExists) {
      return res.status(400).json({
        message: "Invalid college.",
      });
    }

    // ---------------------------------------
    // CHECK EVENT
    // ---------------------------------------

    const eventExists = await Event.findById(event);

    if (!eventExists) {
      return res.status(400).json({
        message: "Invalid event.",
      });
    }

    // ---------------------------------------
    // CHECK REGISTRATION OPEN
    // ---------------------------------------

    if (!eventExists.registrationOpen) {
      return res.status(400).json({
        message: "Registration for this event is closed.",
      });
    }

    // ---------------------------------------
    // CHECK TEAM SIZE
    // ---------------------------------------

    // ---------------------------------------
    // CHECK TEAM SIZE
    // ---------------------------------------

    if (
      !eventExists.teamSizeFinalized ||
      !eventExists.teamSize ||
      !eventExists.minTeamSize
    ) {
      return res.status(400).json({
        message: "Team size for this event has not been finalized.",
      });
    }

    if (
      participants.length < eventExists.minTeamSize ||
      participants.length > eventExists.teamSize
    ) {
      return res.status(400).json({
        message:
          `${eventExists.name} requires between ` +
          `${eventExists.minTeamSize} and ${eventExists.teamSize} participants.`,
      });
    }
    // ---------------------------------------
    // VALIDATE PARTICIPANTS
    // ---------------------------------------

    for (const participant of participants) {
      if (!participant.name?.trim() || !participant.phone?.trim()) {
        return res.status(400).json({
          message: "Every participant must have a name and phone number.",
        });
      }
    }

    // ---------------------------------------
    // DUPLICATE PHONE NUMBERS
    // ---------------------------------------

    const phoneNumbers = participants.map((participant) =>
      participant.phone.trim(),
    );

    const uniquePhones = new Set(phoneNumbers);

    if (uniquePhones.size !== phoneNumbers.length) {
      return res.status(400).json({
        message: "Two participants cannot have the same phone number.",
      });
    }

    // ---------------------------------------
    // CHECK COLLEGE + EVENT DUPLICATE
    // ---------------------------------------

    const existingRegistration = await Registration.findOne({
      college,
      event,
      status: { $ne: "cancelled" },
    });

    if (existingRegistration) {
      return res.status(409).json({
        message: "This college has already registered for this event.",
      });
    }

    // ---------------------------------------
    // CHECK 25 PARTICIPANT LIMIT
    // ---------------------------------------

    const existingParticipantCount = await Participant.countDocuments({
      college,
    });

    // ---------------------------------------
    // CHECK 25 PARTICIPANT LIMIT
    // ---------------------------------------

    if (existingParticipantCount + participants.length > 25) {
      return res.status(400).json({
        message:
          `Your college has already registered ${existingParticipantCount} participants. ` +
          `A maximum of 25 participants is allowed.`,
      });
    }

    // ---------------------------------------
    // START TRANSACTION
    // ---------------------------------------

    session.startTransaction();

    // ---------------------------------------
    // CREATE REGISTRATION
    // ---------------------------------------

    const registrationResult = await Registration.create(
      [
        {
          college,
          facultyHeadName: facultyHeadName.trim(),
          facultyPhone: facultyPhone.trim(),
          facultyEmail: facultyEmail.trim().toLowerCase(),
          event,
          participants: [],
          status: "confirmed",
        },
      ],
      { session },
    );

    const registration = registrationResult[0];

    // ---------------------------------------
    // CREATE PARTICIPANTS
    // ---------------------------------------

    const participantDocuments = participants.map((participant) => ({
      college,
      registration: registration._id,
      name: participant.name.trim(),
      phone: participant.phone.trim(),
    }));

    const createdParticipants = await Participant.insertMany(
      participantDocuments,
      { session },
    );

    // ---------------------------------------
    // CONNECT PARTICIPANTS TO REGISTRATION
    // ---------------------------------------

    registration.participants = createdParticipants.map(
      (participant) => participant._id,
    );

    await registration.save({ session });

    // ---------------------------------------
    // COMMIT TRANSACTION
    // ---------------------------------------

    await session.commitTransaction();

    console.log("Registration created:", registration._id);

    res.status(201).json({
      message: "Registration successful.",
      registrationId: registration._id,
      college: collegeExists.collegeName,
      event: eventExists.name,
      participants: createdParticipants.length,
    });
  } catch (error) {
    // ---------------------------------------
    // ROLLBACK
    // ---------------------------------------

    if (session.inTransaction()) {
      await session.abortTransaction();
    }

    console.error("Registration error:", error);

    // Duplicate MongoDB index
    if (error.code === 11000) {
      return res.status(409).json({
        message:
          "A participant with this phone number is already registered from this college.",
      });
    }

    res.status(500).json({
      message: "Registration failed.",
      error: error.message,
    });
  } finally {
    await session.endSession();
  }
};

module.exports = {
  createRegistration,
};
