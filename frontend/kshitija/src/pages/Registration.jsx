import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function Registration() {
  const [colleges, setColleges] = useState([]);
  const [events, setEvents] = useState([]);

  const [form, setForm] = useState({
    college: "",
    facultyHeadName: "",
    facultyPhone: "",
    facultyEmail: "",
  });

  // Selected event IDs
  const [selectedEvents, setSelectedEvents] = useState([]);

  // Participants stored separately for each event
  const [participantsByEvent, setParticipantsByEvent] = useState({});

  const [loadingColleges, setLoadingColleges] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // --------------------------------------------------
  // FETCH COLLEGES
  // --------------------------------------------------

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await fetch(`${API_URL}/colleges`);

        if (!response.ok) {
          throw new Error("Failed to fetch colleges");
        }

        const data = await response.json();

        setColleges(data);
      } catch (error) {
        console.error(error);
        setMessage("Failed to load colleges.");
      } finally {
        setLoadingColleges(false);
      }
    };

    fetchColleges();
  }, []);

  // --------------------------------------------------
  // FETCH EVENTS
  // --------------------------------------------------

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_URL}/events`);

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();

        setEvents(data);
      } catch (error) {
        console.error(error);
        setMessage("Failed to load events.");
      } finally {
        setLoadingEvents(false);
      }
    };

    fetchEvents();
  }, []);

  // --------------------------------------------------
  // FORM CHANGE
  // --------------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // --------------------------------------------------
  // SELECT / DESELECT EVENT
  // --------------------------------------------------

  const handleEventSelect = (event) => {
    setMessage("");

    const isSelected = selectedEvents.includes(event._id);

    // -----------------------------------------------
    // DESELECT EVENT
    // -----------------------------------------------

    if (isSelected) {
      setSelectedEvents((previous) =>
        previous.filter((id) => id !== event._id),
      );

      setParticipantsByEvent((previous) => {
        const updated = { ...previous };

        delete updated[event._id];

        return updated;
      });

      return;
    }

    // -----------------------------------------------
    // EVENT SIZE VALIDATION
    // -----------------------------------------------

    if (!event.teamSizeFinalized || !event.minTeamSize || !event.teamSize) {
      setMessage(
        `The participant limits for ${event.name} have not been finalized yet.`,
      );

      return;
    }

    if (event.minTeamSize > event.teamSize) {
      setMessage(`Invalid participant limits configured for ${event.name}.`);

      return;
    }

    // -----------------------------------------------
    // CHECK COLLEGE 25 PARTICIPANT LIMIT
    // -----------------------------------------------

    const currentTotalParticipants = Object.values(participantsByEvent).reduce(
      (total, participants) => {
        return total + participants.length;
      },
      0,
    );

    if (currentTotalParticipants + event.minTeamSize > 25) {
      setMessage(
        "A college can register a maximum of 25 participants in total.",
      );

      return;
    }

    // -----------------------------------------------
    // SELECT EVENT
    // -----------------------------------------------

    setSelectedEvents((previous) => [...previous, event._id]);

    // Start with MINIMUM participants
    setParticipantsByEvent((previous) => ({
      ...previous,

      [event._id]: Array.from({ length: event.minTeamSize }, () => ({
        name: "",
        phone: "",
      })),
    }));
  };

  // --------------------------------------------------
  // PARTICIPANT CHANGE
  // --------------------------------------------------

  const handleParticipantChange = (eventId, participantIndex, field, value) => {
    setParticipantsByEvent((previous) => {
      const updatedParticipants = [...(previous[eventId] || [])];

      updatedParticipants[participantIndex] = {
        ...updatedParticipants[participantIndex],
        [field]: value,
      };

      return {
        ...previous,
        [eventId]: updatedParticipants,
      };
    });
  };

  // --------------------------------------------------
  // ADD PARTICIPANT
  // --------------------------------------------------

  const addParticipant = (event) => {
    setMessage("");

    setParticipantsByEvent((previous) => {
      const currentParticipants = previous[event._id] || [];

      // Already reached event maximum
      if (currentParticipants.length >= event.teamSize) {
        return previous;
      }

      // Check overall college limit
      const otherEventParticipants = Object.entries(previous).reduce(
        (total, [eventId, participants]) => {
          if (eventId === event._id) {
            return total;
          }

          return total + participants.length;
        },
        0,
      );

      if (otherEventParticipants + currentParticipants.length + 1 > 25) {
        setMessage(
          "A college can register a maximum of 25 participants in total.",
        );

        return previous;
      }

      return {
        ...previous,

        [event._id]: [
          ...currentParticipants,
          {
            name: "",
            phone: "",
          },
        ],
      };
    });
  };

  // --------------------------------------------------
  // REMOVE PARTICIPANT
  // --------------------------------------------------

  const removeParticipant = (event) => {
    setMessage("");

    setParticipantsByEvent((previous) => {
      const currentParticipants = previous[event._id] || [];

      // Cannot go below minimum
      if (currentParticipants.length <= event.minTeamSize) {
        return previous;
      }

      return {
        ...previous,

        [event._id]: currentParticipants.slice(0, -1),
      };
    });
  };

  // --------------------------------------------------
  // NORMALIZE PHONE
  // --------------------------------------------------

  const normalizePhone = (phone) => {
    return phone.replace(/\D/g, "");
  };

  // --------------------------------------------------
  // TOTAL PARTICIPANTS
  // --------------------------------------------------

  const getTotalParticipants = () => {
    return Object.values(participantsByEvent).reduce(
      (total, participants) => total + participants.length,
      0,
    );
  };

  // --------------------------------------------------
  // REGISTER
  // --------------------------------------------------

  const handleRegister = async (e) => {
    e.preventDefault();

    setMessage("");

    // -----------------------------------------------
    // BASIC VALIDATION
    // -----------------------------------------------

    if (!form.college) {
      setMessage("Please select your college.");

      return;
    }

    if (!form.facultyHeadName.trim()) {
      setMessage("Please enter the faculty / team leader name.");

      return;
    }

    if (!form.facultyPhone.trim()) {
      setMessage("Please enter the faculty phone number.");

      return;
    }

    if (!form.facultyEmail.trim()) {
      setMessage("Please enter the faculty email.");

      return;
    }

    // -----------------------------------------------
    // EVENT VALIDATION
    // -----------------------------------------------

    if (selectedEvents.length === 0) {
      setMessage("Please select at least one event.");

      return;
    }

    // -----------------------------------------------
    // TOTAL PARTICIPANT LIMIT
    // -----------------------------------------------

    const totalParticipants = getTotalParticipants();

    if (totalParticipants > 25) {
      setMessage(
        "A college can register a maximum of 25 participants in total.",
      );

      return;
    }

    // -----------------------------------------------
    // VALIDATE EVERY EVENT
    // -----------------------------------------------

    for (const eventId of selectedEvents) {
      const event = events.find((item) => item._id === eventId);

      if (!event) {
        setMessage("One of the selected events could not be found.");

        return;
      }

      // Make sure both minimum and maximum exist
      if (!event.teamSizeFinalized || !event.minTeamSize || !event.teamSize) {
        setMessage(
          `The participant limits for ${event.name} have not been finalized.`,
        );

        return;
      }

      // Make sure minimum isn't greater than maximum
      if (event.minTeamSize > event.teamSize) {
        setMessage(`Invalid participant limits configured for ${event.name}.`);

        return;
      }

      const participants = participantsByEvent[eventId] || [];

      // -------------------------------------------
      // MINIMUM / MAXIMUM CHECK
      // -------------------------------------------

      if (
        participants.length < event.minTeamSize ||
        participants.length > event.teamSize
      ) {
        setMessage(
          `${event.name} requires between ${event.minTeamSize} and ${event.teamSize} participants.`,
        );

        return;
      }

      // -------------------------------------------
      // EMPTY PARTICIPANT CHECK
      // -------------------------------------------

      const incompleteParticipant = participants.some(
        (participant) => !participant.name.trim() || !participant.phone.trim(),
      );

      if (incompleteParticipant) {
        setMessage(
          `Please complete all participant details for ${event.name}.`,
        );

        return;
      }
    }

    // -----------------------------------------------
    // CHECK PARTICIPANT PHONE DUPLICATES
    // ACROSS ALL EVENTS
    // -----------------------------------------------

    const allParticipants = [];

    selectedEvents.forEach((eventId) => {
      const participants = participantsByEvent[eventId] || [];

      participants.forEach((participant) => {
        allParticipants.push({
          ...participant,
          eventId,
        });
      });
    });

    const phoneMap = new Map();

    for (const participant of allParticipants) {
      const normalizedPhone = normalizePhone(participant.phone);

      if (!normalizedPhone) {
        setMessage(
          `Please enter a valid phone number for ${participant.name}.`,
        );

        return;
      }

      if (phoneMap.has(normalizedPhone)) {
        const previousParticipant = phoneMap.get(normalizedPhone);

        setMessage(
          `${participant.name} and ${previousParticipant.name} cannot be registered for the same college because they use the same phone number.`,
        );

        return;
      }

      phoneMap.set(normalizedPhone, participant);
    }

    // -----------------------------------------------
    // SUBMIT
    // -----------------------------------------------

    try {
      setLoading(true);

      // Submit every selected event
      // as a separate registration
      for (const eventId of selectedEvents) {
        const event = events.find((item) => item._id === eventId);

        const participants = participantsByEvent[eventId] || [];

        const response = await fetch(`${API_URL}/registrations`, {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            college: form.college,

            facultyHeadName: form.facultyHeadName.trim(),

            facultyPhone: form.facultyPhone.trim(),

            facultyEmail: form.facultyEmail.trim(),

            event: eventId,

            participants,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || `Registration failed for ${event.name}`,
          );
        }
      }

      // ---------------------------------------------
      // SUCCESS
      // ---------------------------------------------

      setRegistrationSuccess(true);
    } catch (error) {
      console.error("Registration error:", error);

      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // SUCCESS SCREEN
  // --------------------------------------------------

  if (registrationSuccess) {
    return (
      <main className="min-h-screen bg-[#020b14] text-white">
        <section className="flex min-h-screen items-center justify-center px-6 py-16">
          <div className="w-full max-w-2xl border border-[#e7b65a]/30 bg-[#071522] px-8 py-14 text-center shadow-2xl sm:px-14">
            <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#e7b65a]/50">
              <span className="font-serif text-3xl text-[#e7b65a]">✓</span>
            </div>

            <p className="mt-8 text-[10px] uppercase tracking-[0.45em] text-[#e7b65a]">
              KSHITIJA • YUGMAM
            </p>

            <h1 className="mt-5 font-serif text-5xl text-[#f2c873] sm:text-6xl">
              Thank You
            </h1>

            <h2 className="mt-3 font-serif text-2xl text-white/90">
              For Registering
            </h2>

            <p className="mx-auto mt-8 max-w-lg text-sm leading-7 text-white/50">
              Your registration for Kshithija has been successfully submitted.
            </p>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-white/50">
              We look forward to welcoming you to{" "}
              <span className="text-[#e7b65a]">Yugmam</span> — Where Two Worlds
              Unite.
            </p>

            <div className="mx-auto my-8 h-px w-24 bg-[#e7b65a]/30" />

            <p className="text-[9px] uppercase tracking-[0.3em] text-[#e7b65a]">
              REGISTRATION SUCCESSFUL
            </p>

            <p className="mx-auto mt-5 max-w-md text-xs leading-6 text-white/35">
              Your registration details have been recorded. Please follow the
              instructions provided by the organizers for further confirmation.
            </p>

            <p className="mt-10 text-[9px] uppercase tracking-[0.3em] text-white/20">
              KSHITIJA 2026 • NSS • POORNAPRAJNA COLLEGE
            </p>
          </div>
        </section>
      </main>
    );
  }

  // --------------------------------------------------
  // MAIN PAGE
  // --------------------------------------------------

  return (
    <main className="min-h-screen bg-[#020b14] text-white">
      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative overflow-hidden border-b border-white/5 px-6 pb-20 pt-32 sm:px-10 lg:px-20">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#e7b65a]/5 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#e7b65a]">
            KSHITIJA • YUGMAM
          </p>

          <h1 className="mt-6 font-serif text-5xl text-[#f2c873] sm:text-7xl">
            Registration
          </h1>

          <div className="mx-auto mt-6 h-px w-20 bg-[#e7b65a]/50" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/40">
            Register your college and select the events you wish to participate
            in.
          </p>
        </div>
      </section>

      {/* =================================================
          FORM
      ================================================= */}

      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <form onSubmit={handleRegister} className="mx-auto max-w-5xl">
          {/* =================================================
              COLLEGE DETAILS
          ================================================= */}

          <div className="border border-white/10 bg-[#071522] p-7 sm:p-10">
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#e7b65a]">
                COLLEGE DETAILS
              </p>

              <h2 className="mt-3 font-serif text-3xl text-white">
                Registration Information
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {/* College */}

              <div className="md:col-span-2">
                <label className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                  College
                </label>

                <select
                  name="college"
                  value={form.college}
                  onChange={handleChange}
                  disabled={loadingColleges}
                  className="mt-2 w-full appearance-none border border-white/10 bg-[#020b14] px-4 py-4 text-sm text-white outline-none transition focus:border-[#e7b65a]/50"
                >
                  <option value="">
                    {loadingColleges
                      ? "Loading colleges..."
                      : "Select your college"}
                  </option>

                  {colleges.map((college) => (
                    <option
                      key={college._id}
                      value={college._id}
                      className="bg-[#071522]"
                    >
                      {college.collegeName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Faculty Name */}

              <div>
                <label className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                  Faculty / Team Leader Name
                </label>

                <input
                  type="text"
                  name="facultyHeadName"
                  value={form.facultyHeadName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="mt-2 w-full border border-white/10 bg-[#020b14] px-4 py-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#e7b65a]/50"
                />
              </div>

              {/* Faculty Phone */}

              <div>
                <label className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                  Faculty Phone
                </label>

                <input
                  type="tel"
                  name="facultyPhone"
                  value={form.facultyPhone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="mt-2 w-full border border-white/10 bg-[#020b14] px-4 py-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#e7b65a]/50"
                />
              </div>

              {/* Faculty Email */}

              <div className="md:col-span-2">
                <label className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                  Faculty Email
                </label>

                <input
                  type="email"
                  name="facultyEmail"
                  value={form.facultyEmail}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="mt-2 w-full border border-white/10 bg-[#020b14] px-4 py-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#e7b65a]/50"
                />
              </div>
            </div>
          </div>

          {/* =================================================
              EVENTS
          ================================================= */}

          <div className="mt-8 border border-white/10 bg-[#071522] p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#e7b65a]">
                  EVENTS
                </p>

                <h2 className="mt-3 font-serif text-3xl text-white">
                  Select Events
                </h2>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Participants
                </p>

                <p className="mt-1 font-serif text-2xl text-[#e7b65a]">
                  {getTotalParticipants()} / 25
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-white/35">
              Select one or more events. Each event has its own minimum and
              maximum team size.
            </p>

            {/* EVENT LIST */}

            <div className="mt-8 space-y-3">
              {loadingEvents ? (
                <div className="border border-white/10 px-6 py-8 text-center text-xs text-white/30">
                  Loading events...
                </div>
              ) : events.length === 0 ? (
                <div className="border border-white/10 px-6 py-8 text-center text-xs text-white/30">
                  No events are currently available.
                </div>
              ) : (
                events.map((event, index) => {
                  const isSelected = selectedEvents.includes(event._id);

                  const participants = participantsByEvent[event._id] || [];

                  return (
                    <div
                      key={event._id}
                      className={`overflow-hidden border transition duration-300 ${
                        isSelected
                          ? "border-[#e7b65a]/60 bg-[#0a1b2b]"
                          : "border-white/10 bg-[#020b14] hover:border-white/20"
                      }`}
                    >
                      {/* EVENT HEADER */}

                      <button
                        type="button"
                        onClick={() => handleEventSelect(event)}
                        className="flex w-full items-center justify-between px-5 py-5 text-left sm:px-7"
                      >
                        <div className="flex items-center gap-5">
                          <span
                            className={`font-serif text-lg ${
                              isSelected ? "text-[#e7b65a]" : "text-white/20"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div>
                            <h3
                              className={`font-serif text-xl ${
                                isSelected ? "text-[#f2c873]" : "text-white"
                              }`}
                            >
                              {event.name} <br />
                              <span className="ml-2 text-sm text-gray-400">
                                — {event.type}
                              </span>
                            </h3>

                            <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/30">
                              {event.teamSizeFinalized &&
                              event.minTeamSize &&
                              event.teamSize
                                ? `Team Size: ${event.minTeamSize}–${event.teamSize}`
                                : "Participant limit not finalized"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          {isSelected && (
                            <span className="text-[9px] uppercase tracking-[0.2em] text-[#e7b65a]">
                              Selected
                            </span>
                          )}

                          <span
                            className={`flex h-7 w-7 items-center justify-center border text-sm transition ${
                              isSelected
                                ? "border-[#e7b65a] bg-[#e7b65a] text-[#020b14]"
                                : "border-white/15 text-white/30"
                            }`}
                          >
                            {isSelected ? "✓" : "+"}
                          </span>
                        </div>
                      </button>

                      {/* =================================================
                            PARTICIPANTS
                        ================================================= */}

                      {isSelected && (
                        <div className="border-t border-[#e7b65a]/10 px-5 pb-7 pt-6 sm:px-7">
                          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                            <div>
                              <p className="text-[9px] uppercase tracking-[0.3em] text-[#e7b65a]">
                                PARTICIPANTS
                              </p>

                              <p className="mt-2 text-xs text-white/35">
                                Enter between{" "}
                                <span className="text-white/60">
                                  {event.minTeamSize}
                                </span>{" "}
                                and{" "}
                                <span className="text-white/60">
                                  {event.teamSize}
                                </span>{" "}
                                participants.
                              </p>
                            </div>

                            <span className="text-[10px] text-white/30">
                              {participants.length} / {event.teamSize}
                            </span>
                          </div>

                          {/* PARTICIPANT FIELDS */}

                          <div className="space-y-4">
                            {participants.map(
                              (participant, participantIndex) => (
                                <div
                                  key={participantIndex}
                                  className="grid gap-4 border border-white/5 bg-[#020b14] p-4 md:grid-cols-[60px_1fr_1fr]"
                                >
                                  <div className="flex items-center">
                                    <span className="font-serif text-lg text-[#e7b65a]/50">
                                      {String(participantIndex + 1).padStart(
                                        2,
                                        "0",
                                      )}
                                    </span>
                                  </div>

                                  {/* NAME */}

                                  <div>
                                    <label className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                                      Participant Name
                                    </label>

                                    <input
                                      type="text"
                                      value={participant.name}
                                      onChange={(e) =>
                                        handleParticipantChange(
                                          event._id,
                                          participantIndex,
                                          "name",
                                          e.target.value,
                                        )
                                      }
                                      placeholder="Full name"
                                      className="mt-2 w-full border border-white/10 bg-[#071522] px-3 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#e7b65a]/40"
                                    />
                                  </div>

                                  {/* PHONE */}

                                  <div>
                                    <label className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                                      Phone Number
                                    </label>

                                    <input
                                      type="tel"
                                      value={participant.phone}
                                      onChange={(e) =>
                                        handleParticipantChange(
                                          event._id,
                                          participantIndex,
                                          "phone",
                                          e.target.value,
                                        )
                                      }
                                      placeholder="Phone number"
                                      className="mt-2 w-full border border-white/10 bg-[#071522] px-3 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#e7b65a]/40"
                                    />
                                  </div>
                                </div>
                              ),
                            )}
                          </div>

                          {/* =================================================
                                ADD / REMOVE BUTTONS
                            ================================================= */}

                          <div className="mt-6 flex flex-wrap items-center gap-3">
                            <button
                              type="button"
                              onClick={() => removeParticipant(event)}
                              disabled={
                                participants.length <= event.minTeamSize
                              }
                              className="border border-white/10 px-5 py-3 text-[9px] uppercase tracking-[0.2em] text-white/50 transition hover:border-[#e7b65a]/40 hover:text-[#e7b65a] disabled:cursor-not-allowed disabled:opacity-20"
                            >
                              − Remove
                            </button>

                            <button
                              type="button"
                              onClick={() => addParticipant(event)}
                              disabled={
                                participants.length >= event.teamSize ||
                                getTotalParticipants() >= 25
                              }
                              className="border border-[#e7b65a]/40 px-5 py-3 text-[9px] uppercase tracking-[0.2em] text-[#e7b65a] transition hover:bg-[#e7b65a] hover:text-[#020b14] disabled:cursor-not-allowed disabled:opacity-20"
                            >
                              + Add Participant
                            </button>

                            <span className="ml-auto text-[9px] uppercase tracking-[0.2em] text-white/25">
                              {participants.length} / {event.teamSize}
                            </span>
                          </div>

                          {/* LIMIT INFORMATION */}

                          <div className="mt-4 flex flex-wrap justify-between gap-2 text-[8px] uppercase tracking-[0.2em] text-white/20">
                            <span>Minimum: {event.minTeamSize}</span>

                            <span>Maximum: {event.teamSize}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* =================================================
              ERROR MESSAGE
          ================================================= */}

          {message && (
            <div className="mt-6 border border-red-500/20 bg-red-500/5 px-5 py-4 text-xs leading-6 text-red-300">
              {message}
            </div>
          )}

          {/* =================================================
              SUBMIT
          ================================================= */}

          <div className="mt-8 flex flex-col items-center border-t border-white/10 pt-8">
            <div className="text-center">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                Ready to participate?
              </p>

              <p className="mt-2 text-xs text-white/40">
                {selectedEvents.length}{" "}
                {selectedEvents.length === 1 ? "event" : "events"} selected •{" "}
                {getTotalParticipants()} participants
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || selectedEvents.length === 0}
              className="mt-6 w-full border border-[#e7b65a] bg-[#e7b65a] px-10 py-4 text-[10px] uppercase tracking-[0.3em] text-[#020b14] transition duration-300 hover:bg-transparent hover:text-[#e7b65a] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              {loading ? "Submitting..." : "Register Now"}
            </button>

            <p className="mt-4 max-w-lg text-center text-[10px] leading-5 text-white/30">
              Please ensure that all participant details entered above are
              correct before submitting the registration.
            </p>
          </div>
        </form>
      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="border-t border-white/5 px-6 py-10 text-center">
        <p className="text-[9px] uppercase tracking-[0.35em] text-white/20">
          KSHITIJA 2026 • NSS • POORNAPRAJNA COLLEGE
        </p>

        <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-[#e7b65a]/40">
          YUGMAM — WHERE TRADITION MEETS TOMORROW
        </p>
      </footer>
    </main>
  );
}

export default Registration;
