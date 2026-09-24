const event = {
  name: "YUGANTARA",
  type: "STREET PLAY",

  description:
    "Bring stories to life through powerful acting, social themes, and creative storytelling.",

  guidelines: [
    "The maximum number of participants is 7-10, 8+2 min.",

    " Participants must perform in Kannada only.",

    "No political references are allowed.",

    "The performance must stay within the given topic.",

    "No songs are allowed; only instrumental music can be used.",

    "Phones are not allowed.",

    "2 minutes for preparation; no extra time will be given.",
  ],

  timing: {
    // reporting: "9:00 AM",
    event: "11:00AM",
    // duration: "10 – 15 minutes",
  },

  studentCoordinator1: {
    name: "Ashwin",
    phone: "+91 8722920996",
  },
  studentCoordinator2: {
    name: "Priya",
    phone: "+91 8217566933",
  },
  staffCoordinator: {
    name: "Staff Coordinator Name",
    phone: "+91 ",
  },
};

function StreetPlay() {
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

        <h1 className="font-serif text-3xl text-[#f2c873] sm:text-6xl lg:text-7xl">
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
              {/* <span className="text-sm text-[#e7b65a]">01</span> */}

              <h2 className="font-serif text-3xl text-white">Guidelines</h2>
            </div>

            <div className="space-y-5">
              {event.guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="flex gap-4 border-b border-white/10 pb-5 last:border-0"
                >

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

export default StreetPlay;
