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
              YUGMAM — WHERE TWO WORLDS UNITE
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
            number="01"
            title="General Guidelines"
          >

            <GuidelineItem>
              All participating colleges must complete
              the registration process through the
              official Kshithija registration portal.
            </GuidelineItem>

            <GuidelineItem>
              The information submitted during
              registration must be accurate and
              complete.
            </GuidelineItem>

            <GuidelineItem>
              Each participating college must provide
              a faculty coordinator or responsible
              contact person.
            </GuidelineItem>

            <GuidelineItem>
              Participants are expected to follow the
              instructions given by the event
              coordinators and organizers.
            </GuidelineItem>

          </GuidelineSection>


          {/* =================================================
              02 REGISTRATION
          ================================================= */}

          <GuidelineSection
            number="02"
            title="Registration Guidelines"
          >

            <GuidelineItem>
              Select the correct college from the
              college list while registering.
            </GuidelineItem>

            <GuidelineItem>
              Provide valid faculty name, phone number
              and email address.
            </GuidelineItem>

            <GuidelineItem>
              Select the event carefully before entering
              participant details.
            </GuidelineItem>

            <GuidelineItem>
              The number of participants entered for an
              event must match the maximum team size
              specified for that event.
            </GuidelineItem>

            <GuidelineItem>
              Participant names and phone numbers must
              be entered correctly.
            </GuidelineItem>

            <GuidelineItem>
              A participant should not be registered
              for multiple events where the event rules
              prohibit such participation.
            </GuidelineItem>

          </GuidelineSection>


          {/* =================================================
              03 PARTICIPANTS
          ================================================= */}

          <GuidelineSection
            number="03"
            title="Participant Guidelines"
          >

            <GuidelineItem>
              Participants must carry valid college
              identification when required by the
              organizers.
            </GuidelineItem>

            <GuidelineItem>
              Participants must report to the designated
              venue within the time specified by the
              event coordinators.
            </GuidelineItem>

            <GuidelineItem>
              Participants are responsible for bringing
              any materials specifically mentioned in
              their event guidelines.
            </GuidelineItem>

            <GuidelineItem>
              Participants must follow the instructions
              of event coordinators, volunteers and
              judges.
            </GuidelineItem>

          </GuidelineSection>


          {/* =================================================
              04 EVENT
          ================================================= */}

          <GuidelineSection
            number="04"
            title="Event Guidelines"
          >

            <GuidelineItem>
              Every event may have its own team size,
              duration, reporting time, rules and
              evaluation criteria.
            </GuidelineItem>

            <GuidelineItem>
              Participants must read the individual
              event guidelines before participating.
            </GuidelineItem>

            <GuidelineItem>
              Event-specific decisions made by the
              designated judges and event coordinators
              will be communicated to participants.
            </GuidelineItem>

            <GuidelineItem>
              Any event-specific requirements should be
              checked on the corresponding event
              details page.
            </GuidelineItem>

          </GuidelineSection>


          {/* =================================================
              05 REPORTING
          ================================================= */}

          <GuidelineSection
            number="05"
            title="Reporting & Timing"
          >

            <GuidelineItem>
              Participants must report at the venue
              within the reporting time communicated by
              the organizers.
            </GuidelineItem>

            <GuidelineItem>
              Participants arriving after the specified
              reporting time may be subject to the
              rules of the respective event.
            </GuidelineItem>

            <GuidelineItem>
              Participants should keep sufficient time
              for registration verification and movement
              between event venues.
            </GuidelineItem>

          </GuidelineSection>


          {/* =================================================
              06 DISCIPLINE
          ================================================= */}

          <GuidelineSection
            number="06"
            title="Discipline & Conduct"
          >

            <GuidelineItem>
              All participants are expected to maintain
              respectful and responsible conduct
              throughout the fest.
            </GuidelineItem>

            <GuidelineItem>
              Misconduct, harassment, intimidation or
              disruptive behaviour will not be
              tolerated.
            </GuidelineItem>

            <GuidelineItem>
              Participants must respect fellow
              participants, volunteers, faculty,
              organizers and judges.
            </GuidelineItem>

            <GuidelineItem>
              Participants must follow the instructions
              issued by the organizing committee.
            </GuidelineItem>

          </GuidelineSection>


          {/* =================================================
              07 SAFETY
          ================================================= */}

          <GuidelineSection
            number="07"
            title="Safety & Responsibility"
          >

            <GuidelineItem>
              Participants are responsible for their
              personal belongings and equipment.
            </GuidelineItem>

            <GuidelineItem>
              Participants must follow all safety
              instructions provided by the organizers.
            </GuidelineItem>

            <GuidelineItem>
              Any emergency or safety concern should be
              immediately reported to the nearest
              organizer or volunteer.
            </GuidelineItem>

          </GuidelineSection>


          <GuidelineSection
            number="09"
            title="Important Notes"
          >

            <GuidelineItem>
              Please verify all registration details
              before submitting the registration form.
            </GuidelineItem>

            <GuidelineItem>
              Keep the registered faculty coordinator's
              phone number and email accessible for
              official communication.
            </GuidelineItem>

            <GuidelineItem>
              Event-specific guidelines should always
              be checked before attending the event.
            </GuidelineItem>

            <GuidelineItem>
              Any instructions communicated by the
              organizing committee before or during the
              event should be followed.
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