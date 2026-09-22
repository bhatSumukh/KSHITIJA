require("dotenv").config();

const mongoose = require("mongoose");
const Event = require("./src/models/Event");
const events = require("./src/data/events");

const seedEvents = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    for (const event of events) {
      await Event.findOneAndUpdate(
        { slug: event.slug },
        {
          $set: {
            name: event.name,
            minTeamSize: event.minTeamSize,
            teamSize: event.teamSize,
            teamSizeFinalized: event.teamSizeFinalized,
            description: event.description,
            registrationOpen: event.registrationOpen,
          },
        },
        {
          upsert: true,
          returnDocument: "after",
          setDefaultsOnInsert: true,
        },
      );
    }

    console.log("Events seeded successfully");

    await mongoose.disconnect();
  } catch (error) {
    console.error("Failed to seed events:", error);
    process.exit(1);
  }
};

seedEvents();
