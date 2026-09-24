const event = {
  name: "NARIPARIVARTANAM",
  type: "DANCE",

  description:
    "Express the unity of tradition and modernity through rhythm, movement, and choreography.",

  guidelines: [
    "Each team should consist of minimum of 7 members and maximum of 10 members",

    "Use of fire, water or any hazardous materials is strictly prohibited",

    "Any form of vulgarity, explicit content or gestures will lead to disqualification",

    "Music should be submitted a day prior",

    "Any use of language is permitted, MC should be done in kannada",

    "Vulgarity is not allowed.",

    "The dance should be decent and appropriate.",
  ],

  timing: {
    // reporting: "9:00 AM",
    event: "1:45PM",
    // duration: "10 – 15 minutes",
  },

  studentCoordinator1: {
    name: "Aditi",
    phone: "+91 9449991613",
  },
  studentCoordinator2: {
    name: "Savi",
    phone: "+91 8971766204",
  },
  staffCoordinator: {
    name: "Staff Coordinator Name",
    phone: "+91 ",
  },
};

function Dance() {
  return (
    <section className="min-h-screen bg-[#020b14] px-6 py-24 text-white sm:px-10 lg:px-20">
      {/* HEADER */}
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 flex items-center gap-4">
          <span className="text-sm tracking-[0.25em] text-[#e7b65a]">
            EVENT DETAILS
          </span>

          <span className="h-px w-16 bg-[#e7b65a]/60" />
        </div>

        <h1 className="font-serif text-3xl text-[#f2c873] sm:text-2xl lg:text-7xl">
          {event.name}
        </h1>

        <p className="mt-3 text-sm tracking-[0.35em] text-white/50">
          {event.type}
        </p>

        <div className="mt-8 h-px w-full bg-white/10" />

        {/* DESCRIPTION */}
        <p className="mt-8 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
          {event.description}
        </p>

        {/* CONTENT GRID */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* GUIDELINES */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
            <div className="mb-8 flex items-center gap-4">
              <h2 className="font-serif text-3xl text-white">Guidelines</h2>
            </div>

            <div className="space-y-5">
              {event.guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="flex gap-4 border-b border-white/10 pb-5 last:border-0"
                >
                  <span className="text-sm text-[#e7b65a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-7 text-white/65">{guideline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TIMING */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
            <div className="">
              <div className="mb-8 flex items-center gap-4">
                {/* <span className="text-sm text-[#e7b65a]">03</span> */}

                <h2 className="font-serif text-3xl text-white">
                  Student Coordinator
                </h2>
              </div>

              <p className="text-xl text-white">
                {event.studentCoordinator1.name}
              </p>

              <p className="mb-3 text-sm text-white/50">
                {event.studentCoordinator1.phone}
              </p>

              <p className="text-xl text-white">
                {event.studentCoordinator2.name}
              </p>

              <p className="mb-3 text-sm text-white/50">
                {event.studentCoordinator2.phone}
              </p>
            </div>

            <div>
              <p className="text-xl text-white">Event Time</p>

              <p className="mt-2 text-lg text-[#f2c873]">
                {event.timing.event}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dance;
