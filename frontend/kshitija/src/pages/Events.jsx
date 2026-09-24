// import React from "react";

import { Link } from "react-router-dom";
import bestwest from "../assets/bestwest.png";
import escaperoom from "../assets/escaperoom.png";
import dance from "../assets/dance.png";
import debate from "../assets/debate.png";
import facepainting from "../assets/facepainting.png";
import reelmaking from "../assets/reelmaking.png";
import singing from "../assets/singing.png";
import streetplay from "../assets/streetplay.png";
import ScrollReveal from "../components/scrollReveal";
// import

const events = [
  {
    id: 1,
    name: "YUGANTARA",
    slug: "yugantara",
    category: "STREET PLAY",
    description:
      "Bring stories to life through powerful acting, social themes, and creative storytelling.",
    teamSize: "7-10 Members",
    image: streetplay,
  },

  {
    id: 2,
    name: "NARIPARIVARTANAM",
    slug: "nariparivartanam",
    category: "DANCE",
    description:
      "Express the unity of tradition and modernity through rhythm, movement, and choreography.",
    teamSize: "7-10 Members",
    image: dance,
  },

  {
    id: 3,
    name: "BHAVATARANGA",
    slug: "bhavataranga",
    category: "SINGING",
    description:
      "Let your voice bridge generations with melodies that connect the past, present, and future.",
    teamSize: "4-6 Members",
    image: singing,
  },

  {
    id: 4,
    name: "ANTARIKSHA",
    slug: "antariksha",
    category: "FACE PAINTING",
    description:
      "Turn faces into canvases and create imaginative art inspired by your creativity.",
    teamSize: "2 Members",
    image: facepainting,
  },

  {
    id: 5,
    name: "RUPANTARA",
    slug: "rupantara",
    category: "BEST OUT OF WASTE",
    description:
      "Transform discarded materials into creative, meaningful, and visually striking art.",
    teamSize: "2 Members",
    image: bestwest,
  },

  {
    id: 6,
    name: "RAHASYADVĀRAM",
    slug: "rahasyadvaram",
    category: "ESCAPE ROOM",
    description:
      "Solve clues, crack puzzles, and work together to escape before time runs out.",
    teamSize: "2 Members",
    image: escaperoom,
  },

  {
    id: 7,
    name: "JANSABHA",
    slug: "janasabha",
    category: "DEBATE",
    description:
      "Challenge ideas, defend your perspective, and engage in a battle of words and reasoning.",
    teamSize: "2 Members",
    image: debate,
  },

  {
    id: 8,
    name: "KSHANACHITRA",
    slug: "kshanachitra",
    category: "REEL MAKING",
    description:
      "Capture the spirit of Yugmam through a short, creative, and visually engaging reel.",
    teamSize: "1 Member",
    image: reelmaking,
  },
];

const Events = () => {
  return (
    <section
      id="events"
      className="relative min-h-screen overflow-hidden bg-[#020b14] text-white"
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#12304a_0%,#061421_40%,#020b14_80%)]" />

      <div className="absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#0d3b5e]/20 blur-[140px]" />

      <div className="absolute right-[-200px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#c8943d]/5 blur-[140px]" />

      {/* =========================================
          PAGE CONTENT
      ========================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-28 sm:px-10 lg:px-20">
        {/* =====================================
            HEADER
        ====================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-[10px] tracking-[0.45em] text-white/50 sm:text-xs">
            KSHITIJA 2026
          </p>

          <h1 className="font-serif text-6xl leading-none text-[#f2c873] sm:text-7xl lg:text-8xl">
            EVENTS
          </h1>

          <div className="mx-auto my-7 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#e7b65a]/70" />

            <span className="rotate-45 text-sm text-[#e7b65a]">◆</span>

            <span className="h-px w-16 bg-[#e7b65a]/70" />
          </div>

          <p className="text-sm leading-7 text-white/55 sm:text-base">
            Discover the events of Kshithija 2026 — where creativity, knowledge,
            communication and competition come together.
          </p>
        </div>

        {/* =====================================
            EVENTS GRID
        ====================================== */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group relative overflow-hidden border border-white/10 bg-[#071522]/70 transition duration-500 hover:-translate-y-2 hover:border-[#e7b65a]/50"
            >
              {/* ===============================
                  EVENT IMAGE
              ================================ */}

              <div className="relative h-[360px] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-[#020b14]/20 to-transparent" />

                {/* Event number */}
                <div className="absolute left-5 top-5">
                  <span className="text-xs tracking-[0.25em] text-[#e7b65a]">
                    0{index + 1}
                  </span>
                </div>

                {/* Category */}
                <div className="absolute right-5 top-5">
                  <span className="border border-white/20 bg-[#020b14]/50 px-3 py-1.5 text-[8px] tracking-[0.2em] text-white/70 backdrop-blur-sm">
                    {event.category}
                  </span>
                </div>

                {/* Event name on image */}
                <div className="absolute bottom-6 left-5 right-5">
                  <h2 className="font-serif text-2xl tracking-wide text-[#f2c873]">
                    {event.name}
                  </h2>
                </div>
              </div>

              {/* ===============================
                  EVENT INFO
              ================================ */}
              <ScrollReveal delay={300}>
              <div className="p-6">
                <p className="min-h-[84px] text-sm leading-6 text-white/55">
                  {event.description}
                </p>

                {/* Team size */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                    FORMAT
                  </span>

                  <span className="text-xs text-[#e7b65a]">
                    {event.teamSize}
                  </span>
                </div>
              </div>
              </ScrollReveal>
              <Link
                to={`/events/${event.slug}`}
                className="mt-6 flex w-full items-center justify-between border border-[#e7b65a]/40 px-4 py-3 text-[10px] uppercase tracking-[0.25em] text-[#e7b65a] transition duration-300 hover:border-[#e7b65a] hover:bg-[#e7b65a] hover:text-[#020b14]"
              >
                <span>EVENT DETAILS</span>

                <span className="text-base">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
