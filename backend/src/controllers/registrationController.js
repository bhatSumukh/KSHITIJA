const mongoose = require("mongoose");

const Registration = require("../models/Registration");
const College = require("../models/College");
const Event = require("../models/Event");
const Participant = require("../models/Participant");

// Normalize phone numbers so formats like
// 9876543210 and +91 9876543210 can be compared consistently
const normalizePhone = (phone) => {
  return phone.replace(/\D/g, "");
};

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
    // NORMALIZE PHONE NUMBERS
    // ---------------------------------------

    const normalizedPhones = participants.map((participant) =>
      normalizePhone(participant.phone),
    );

    // ---------------------------------------
    // CHECK DUPLICATE PARTICIPANTS
    // WITHIN THIS EVENT
    // ---------------------------------------

    const uniquePhones = new Set(normalizedPhones);

    if (uniquePhones.size !== normalizedPhones.length) {
      return res.status(400).json({
        message:
          "The same participant cannot be registered more than once for the same event.",
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
    // START TRANSACTION
    // ---------------------------------------

    await session.startTransaction();

    // ---------------------------------------
    // FIND PARTICIPANTS ALREADY REGISTERED
    // FROM THIS COLLEGE
    // ---------------------------------------

    const existingParticipants = await Participant.find({
      college,
      phone: { $in: normalizedPhones },
    }).session(session);

    // Phones of participants who already exist
    const existingPhoneSet = new Set(
      existingParticipants.map((participant) =>
        normalizePhone(participant.phone),
      ),
    );

    // ---------------------------------------
    // COUNT EXISTING UNIQUE PARTICIPANTS
    // ---------------------------------------

    const existingParticipantCount = await Participant.countDocuments({
      college,
    }).session(session);

    // ---------------------------------------
    // COUNT ONLY NEW PARTICIPANTS
    // ---------------------------------------

    const newParticipantCount = normalizedPhones.filter(
      (phone) => !existingPhoneSet.has(phone),
    ).length;

    // ---------------------------------------
    // CHECK MAXIMUM 25 UNIQUE PARTICIPANTS
    // ---------------------------------------

    if (existingParticipantCount + newParticipantCount > 25) {
      await session.abortTransaction();

      return res.status(400).json({
        message:
          `Your college already has ${existingParticipantCount} unique participants. ` +
          `This registration adds ${newParticipantCount} new participants. ` +
          `A maximum of 25 unique participants is allowed.`,
      });
    }

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
    // MAP EXISTING PARTICIPANTS
    // ---------------------------------------

    const existingPhoneMap = new Map();

    existingParticipants.forEach((participant) => {
      existingPhoneMap.set(
        normalizePhone(participant.phone),
        participant,
      );
    });

    // ---------------------------------------
    // PREPARE PARTICIPANT IDS
    // ---------------------------------------

    const participantIds = [];
    const newParticipantDocuments = [];

    participants.forEach((participant, index) => {
      const normalizedPhone = normalizedPhones[index];

      const existingParticipant =
        existingPhoneMap.get(normalizedPhone);

      if (existingParticipant) {
        // Participant already exists for this college.
        // Reuse the same participant.
        participantIds.push(existingParticipant._id);
      } else {
        // New unique participant.
        newParticipantDocuments.push({
          college,
          name: participant.name.trim(),
          phone: normalizedPhone,
        });
      }
    });

    // ---------------------------------------
    // CREATE ONLY NEW PARTICIPANTS
    // ---------------------------------------

    const createdParticipants =
      newParticipantDocuments.length > 0
        ? await Participant.insertMany(newParticipantDocuments, {
            session,
          })
        : [];

    // Add newly created participant IDs
    createdParticipants.forEach((participant) => {
      participantIds.push(participant._id);
    });

    // ---------------------------------------
    // CONNECT PARTICIPANTS TO REGISTRATION
    // ---------------------------------------

    registration.participants = participantIds;

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
      participants: participantIds.length,
      newParticipants: newParticipantCount,
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