import danceBan from "../assets/singing-bg.png";

const event = {
  name: "BHAVATHARANGA",
  type: "SINGING",

  description:
    "Bhavageethe – A Kannada Bhavageethe singing competition showcasing musical talent and creativity. A platform for participants to express themselves through music.",

  guidelines: [
    "4–6 members per team, including instrumentalists.",

    "Kannada Bhavageethe only.",

    "Only non-electrical instruments are allowed.",

    "Lyrics must not contain references to caste or religion.",

    "Lyrics/reference materials and mobile phones are not allowed during performance.",

    "Vulgar or offensive content is strictly prohibited.",

    "Creative musical innovations and original arrangements are encouraged.",

    "Judgement based on voice clarity, coordination, rhythm, musicality and presentation.",

    "Judges’ decision shall be final and binding.",
  ],

  timing: {
    event: "11:00AM",
  },

  fees: {
    Reg: "100Rs",
  },

  studentCoordinator1: {
    name: "Khushi",
    phone: "+91 6362856747",
  },

  studentCoordinator2: {
    name: "Apoorva",
    phone: "+91 7892394541",
  },

  staffCoordinator: {
    name: "Staff Coordinator Name",
    phone: "+91 ",
  },
};

function Singing() {
  return (
    <section className="min-h-screen bg-[#020b14] px-6 py-24 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* ================= HERO / EVENT BANNER ================= */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          {/* Banner Image */}
          <img
            src={danceBan}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-[#020b14]/20" />

          {/* Hero Content */}
          <div className="relative z-10 min-h-[420px] px-8 py-12 sm:px-12 lg:px-16">
            {/* Small Heading */}
            <div className="mb-5 flex items-center gap-4">
              <span className="text-sm tracking-[0.25em] text-[#e7b65a]">
                EVENT DETAILS
              </span>

              <span className="h-px w-16 bg-[#e7b65a]/60" />
            </div>

            {/* Event Name */}
            <h1 className="font-serif text-3xl text-[#f2c873] sm:text-6xl lg:text-7xl">
              {event.name}
            </h1>

            {/* Event Type */}
            <p className="mt-3 text-sm tracking-[0.35em] text-white/50">
              {event.type}
            </p>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              {event.description}
            </p>
          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}

        {/* ================= CONTENT GRID ================= */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* ================= GUIDELINES ================= */}
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

          {/* ================= COORDINATOR / TIMING ================= */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
            {/* Student Coordinator */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <h2 className="font-serif text-3xl text-white">
                  Student Coordinator
                </h2>
              </div>

              {/* Coordinator 1 */}
              <p className="text-xl text-white">
                {event.studentCoordinator1.name}
              </p>

              <p className="mb-3 text-sm text-white/50">
                {event.studentCoordinator1.phone}
              </p>

              {/* Coordinator 2 */}
              <p className="text-xl text-white">
                {event.studentCoordinator2.name}
              </p>

              <p className="mb-3 text-sm text-white/50">
                {event.studentCoordinator2.phone}
              </p>
            </div>

            {/* Event Time */}
            <div className="mt-8">
              <p className="text-xl text-white">Event Time</p>

              <p className="mt-2 text-lg text-[#f2c873]">
                {event.timing.event}
              </p>

              <p className="text-xl text-white">Registration Fees</p>

              <p className="mt-2 text-lg text-[#f2c873]">{event.fees.Reg}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Singing;
