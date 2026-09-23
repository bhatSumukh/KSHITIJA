// import { Link } from "react-router-dom";

function Guidelines() {
  return (
    <main className="min-h-screen bg-[#020b14] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#e7b65a]/20 px-6 pb-20 pt-32 sm:px-10 lg:px-20">

        {/* Background glow */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#e7b65a]/5 blur-[140px]" />

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#0c6470]/10 blur-[120px]" />

        </div>


        <div className="relative mx-auto max-w-7xl">

          <p className="text-[10px] uppercase tracking-[0.5em] text-[#e7b65a]">
            KSHITIJA 2026
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] text-[#f2c873] sm:text-7xl lg:text-8xl">
            PARTICIPANT
            <br />
            GUIDELINES
          </h1>

          <div className="mt-8 max-w-2xl">

            <p className="text-sm leading-7 text-white/50 sm:text-base">
              Everything participating colleges,
              faculty coordinators and participants
              need to know before registering for
              Kshithija.
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#e7b65a]/70">
              YUGMAM — WHERE TRADITION MEETS TOMORROW
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="px-6 py-16 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-5xl">


          {/* =================================================
              INTRO
          ================================================= */}

          <div className="mb-16 border border-[#e7b65a]/20 bg-[#071522]/70 p-7 sm:p-10">

            <p className="text-[9px] uppercase tracking-[0.35em] text-[#e7b65a]">
              BEFORE YOU REGISTER
            </p>

            <h2 className="mt-3 font-serif text-3xl text-[#f2c873]">
              Please Read Carefully
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/50">
              Participating colleges are requested to
              read the complete guidelines before
              submitting their registration. The
              faculty coordinator is responsible for
              ensuring that the information submitted
              during registration is accurate and that
              all participating students are aware of
              the applicable event rules.
            </p>

          </div>


          {/* =================================================
              01 GENERAL
          ================================================= */}

          <GuidelineSection
            // number="01"
            title="General Guidelines"
          >

            <GuidelineItem>
              The fest is open to only NSS students
            </GuidelineItem>

            <GuidelineItem>
              Only one team per college is allowed to participate in each event. A team should consist of 25 students per college.
            </GuidelineItem>

            <GuidelineItem>
              Participants must carry a valid bonafide certificate and college id with them
            </GuidelineItem>

            <GuidelineItem>
              Colleges should be present at 8:00 am for registration 
            </GuidelineItem>

            <GuidelineItem>
              Only 3 students of final year are allowed to participate 
            </GuidelineItem>

            <GuidelineItem>
              Judges decision will be final
            </GuidelineItem>

            <GuidelineItem>
              Participants participating in escape room ,debate and reel making are not allowed to participate in other events.
            </GuidelineItem>

            <GuidelineItem>
              Participants are not allowed to disclose their college name during the fest
            </GuidelineItem>

          </GuidelineSection>


</div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

    </main>
  );
}


/* =========================================================
   REUSABLE GUIDELINE SECTION
========================================================= */

function GuidelineSection({
  number,
  title,
  children,
}) {
  return (
    <section className="border-t border-white/10 py-10">

      <div className="grid gap-6 md:grid-cols-[100px_1fr]">

        {/* Number */}

        <div>
          <span className="font-serif text-4xl text-[#e7b65a]/50">
            {number}
          </span>
        </div>


        {/* Content */}

        <div>

          <h2 className="font-serif text-3xl text-[#f2c873]">
            {title}
          </h2>

          <div className="mt-7 space-y-4">
            {children}
          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   GUIDELINE ITEM
========================================================= */

function GuidelineItem({ children }) {
  return (
    <div className="flex gap-4 border border-white/5 bg-[#071522]/60 p-5">

      <span className="mt-1 text-[#e7b65a]">
        ◆
      </span>

      <p className="text-sm leading-7 text-white/50">
        {children}
      </p>

    </div>
  );
}

export default Guidelines;