// import { Link } from "react-router-dom";

const coordinators = [
  {
    role: "Student Coordinator",
    name: "Shrithesh Shetty",
    phone: "+91 8591132441",
    email: "student@example.com",
  },
    {
    role: "Student Coordinator",
    name: "Deepthi D Suvarna",
    phone: "+91 9108324292",
    email: "student@example.com",
  },
    {
    role: "Student Coordinator",
    name: "Savi",
    phone: "+91 8971766204",
    email: "student@example.com",
  },
    {
    role: "Student Coordinator",
    name: "Manvith",
    phone: "+91 9481837253",
    email: "student@example.com",
  },
  {
    role: "Faculty Coordinator",
    name: "Mrs.Suparna",
    phone: "+91 7353544795",
    email: "faculty1@example.com",
  },
  {
    role: "Faculty Coordinator",
    name: "Mr.Nagraj GP",
    phone: "+91 9902502586",
    email: "faculty2@example.com",
  },
];

function Contact() {
  return (
    <main className="min-h-screen bg-[#020b14] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden px-6 py-24">
        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e7b65a]/5 blur-[120px]" />

        {/* Decorative lines */}
        <div className="absolute left-0 top-1/2 h-px w-[20%] bg-[#e7b65a]/20" />
        <div className="absolute right-0 top-1/2 h-px w-[20%] bg-[#e7b65a]/20" />

        <div className="relative z-10 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#e7b65a]">
            KSHITIJA • YUGMAM
          </p>

          <h1 className="mt-6 font-serif text-5xl text-[#f2c873] sm:text-7xl">
            Contact
          </h1>

          <div className="mx-auto mt-6 h-px w-20 bg-[#e7b65a]/50" />

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/50">
            For registrations, event-related queries, participation details,
            and other enquiries, please contact the coordinators below.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 pb-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#e7b65a]">
              REACH OUT TO US
            </p>

            <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
              Coordination Team
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {coordinators.map((coordinator, index) => (
              <div
                key={index}
                className="group border border-[#e7b65a]/20 bg-[#071522] p-8 transition duration-500 hover:border-[#e7b65a]/50 hover:bg-[#0a1b2b]"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  {/* <span className="font-serif text-4xl text-[#e7b65a]/20">
                    0{index + 1}
                  </span> */}

                  <div className="h-px w-12 bg-[#e7b65a]/30 transition-all duration-500 group-hover:w-20" />
                </div>

                {/* Role */}
                <p className="mt-8 text-[9px] uppercase tracking-[0.35em] text-[#e7b65a]">
                  {coordinator.role}
                </p>

                {/* Name */}
                <h3 className="mt-4 font-serif text-2xl text-white">
                  {coordinator.name}
                </h3>

                {/* Details */}
                <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
                  {/* Phone */}
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                      Phone
                    </p>

                    <a
                      href={`tel:${coordinator.phone.replace(/\s/g, "")}`}
                      className="mt-2 block text-sm text-white/70 transition hover:text-[#e7b65a]"
                    >
                      {coordinator.phone}
                    </a>
                  </div>

                  {/* Email */}
                  {/* <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                      Email
                    </p>

                    <a
                      href={`mailto:${coordinator.email}`}
                      className="mt-2 block break-all text-sm text-white/70 transition hover:text-[#e7b65a]"
                    >
                      {coordinator.email}
                    </a>
                  </div> */}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-3">
                  <a
                    href={`tel:${coordinator.phone.replace(/\s/g, "")}`}
                    className="flex-1 border border-[#e7b65a]/40 px-4 py-3 text-center text-[9px] uppercase tracking-[0.2em] text-[#e7b65a] transition hover:bg-[#e7b65a] hover:text-[#020b14]"
                  >
                    Call
                  </a>

                  {/* <a
                    href={`mailto:${coordinator.email}`}
                    className="flex-1 border border-white/10 px-4 py-3 text-center text-[9px] uppercase tracking-[0.2em] text-white/60 transition hover:border-[#e7b65a]/40 hover:text-[#e7b65a]"
                  >
                    Email
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK HELP */}
      {/* <section className="border-y border-white/5 bg-[#050f1a] px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#e7b65a]">
            NEED HELP?
          </p>

          <h2 className="mt-4 font-serif text-3xl text-white">
            Have a question about Kshithija?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40">
            For event registration, participant details, event rules, or any
            other queries, feel free to get in touch with our coordination
            team.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/register"
              className="border border-[#e7b65a] bg-[#e7b65a] px-8 py-4 text-[10px] uppercase tracking-[0.3em] text-[#020b14] transition hover:bg-transparent hover:text-[#e7b65a]"
            >
              Register Now
            </Link>

            <Link
              to="/guidelines"
              className="border border-white/15 px-8 py-4 text-[10px] uppercase tracking-[0.3em] text-white/70 transition hover:border-[#e7b65a]/50 hover:text-[#e7b65a]"
            >
              View Guidelines
            </Link>
          </div>
        </div>
      </section> */}

      {/* FOOTER */}
      <footer className="px-6 py-10 text-center">
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

export default Contact;