// import React from "react";

// Replace this with your actual image import
// Example:
import kshitijaAbout from "../assets/about-kshitija.png";
import ppcAbout from "../assets/about-ppc.png"
import nssAbout from "../assets/about-nss.png"

const About = () => {
  return (
    <div className="min-h-screen bg-[#020b14] text-white overflow-hidden">
      {/* =========================
          ABOUT HERO
      ========================== */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-18">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#12304a_0%,#061421_45%,#020b14_80%)]" />

        {/* Decorative glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d99a35]/5 blur-[120px]" />

        {/* Left atmospheric blue */}
        <div className="absolute left-0 top-0 h-full w-[45%] bg-gradient-to-r from-[#06192a] to-transparent opacity-80" />

        {/* Right atmospheric blue */}
        <div className="absolute right-0 top-0 h-full w-[45%] bg-gradient-to-l from-[#06192a] to-transparent opacity-80" />

        {/* Hero Content */}
        <div className="relative z-10 px-6 text-center">
          <p className="mb-5 text-[10px] tracking-[0.45em] text-white/60 sm:text-xs">
            A DEEPER LOOK INTO
          </p>

          <h2 className="font-serif text-[64px] leading-none tracking-wide text-[#f2c873] sm:text-[90px] lg:text-[120px]">
            ABOUT
          </h2>

          {/* Gold ornament */}
          <div className="mx-auto my-7 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#c8943d]/70" />

            <span className="rotate-45 text-[#e7b65a]">◆</span>

            <span className="h-px w-16 bg-[#c8943d]/70" />
          </div>

          <p className="text-[10px] tracking-[0.4em] text-white/60 sm:text-xs">
            PEOPLE × PURPOSE × POSSIBILITIES
          </p>

          <p className="mt-8 text-xs tracking-[0.3em] text-[#e7b65a]">
            YUGMAM — WHERE TWO WORLDS UNITE
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020b14] to-transparent" />
      </section>

      {/* =========================
          ABOUT KSHITIJA
      ========================== */}
    <section className="relative min-h-[680px] overflow-hidden bg-[#020b14] sm:min-h-[720px] lg:min-h-[720px]">

  {/* =========================
      IMAGE
  ========================== */}
  <img
    src={kshitijaAbout}
    alt="Kshithija"
    className="
      absolute inset-0
      h-full w-full
      object-cover
      object-[60%_center]
      sm:object-center
    "
  />


  {/* =========================
      MOBILE GRADIENT
  ========================== */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-t
      from-[#020b14]
      via-[#020b14]/75
      to-[#020b14]/10

      lg:bg-gradient-to-r
      lg:from-[#020b14]
      lg:via-[#020b14]/70
      lg:to-transparent
    "
  />


  {/* Extra darkening at bottom on mobile */}
  <div
    className="
      absolute inset-x-0 bottom-0
      h-[55%]
      bg-gradient-to-t
      from-[#020b14]
      to-transparent
      lg:hidden
    "
  />


  {/* =========================
      CONTENT
  ========================== */}
  <div
    className="
      relative z-10
      flex min-h-[680px]
      items-end
      px-6 pb-12 pt-24

      sm:min-h-[720px]
      sm:px-10
      sm:pb-16

      lg:min-h-[720px]
      lg:items-center
      lg:px-20
      lg:py-24
    "
  >

    <div className="w-full max-w-xl">

      {/* Number */}
      <div className="mb-5 flex items-center gap-4 sm:mb-6">

        <span className="text-xs tracking-[0.2em] text-[#e7b65a] sm:text-sm">
          01
        </span>

        <span className="h-px w-12 bg-[#e7b65a]/70 sm:w-16" />

      </div>


      {/* Small heading */}
      <p className="mb-2 text-[10px] tracking-[0.35em] text-white/70 sm:text-sm">
        ABOUT
      </p>


      {/* Main heading */}
      <h3
        className="
          font-serif
          text-5xl
          leading-none
          tracking-wide
          text-[#f2c873]

          sm:text-6xl
          lg:text-7xl
        "
      >
        KSHITIJA
      </h3>


      {/* Divider */}
      <div className="my-5 h-px w-16 bg-[#e7b65a] sm:my-6 sm:w-20" />


      {/* Subtitle */}
      <h4
        className="
          max-w-sm
          text-[11px]
          font-medium
          uppercase
          leading-relaxed
          tracking-[0.22em]
          text-white/85

          sm:text-sm
          sm:tracking-[0.25em]
        "
      >
        MORE THAN A FEST,
        <br />
        A MEETING OF WORLDS.
      </h4>


      {/* Description */}
      <p
        className="
          mt-5
          max-w-md
          text-[13px]
          leading-6
          text-white/65

          sm:mt-6
          sm:text-sm
          sm:leading-7
        "
      >
        Kshithija is the annual college fest conducted by
        the NSS unit of Poornaprajna College, Udupi.
      </p>


      {/* Button */}
      <div className="mt-7 sm:mt-8">

        <a
          href="#events"
          className="
            group
            inline-flex
            items-center
            gap-4
            rounded-full
            border
            border-[#e7b65a]
            px-5
            py-2.5
            text-xs
            text-[#e7b65a]
            transition
            duration-300

            hover:bg-[#e7b65a]
            hover:text-[#07111c]

            sm:px-6
            sm:py-3
            sm:text-sm
          "
        >
          Explore Events

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>

        </a>

      </div>

    </div>

  </div>


  {/* =========================
      BOTTOM DECORATION
  ========================== */}
  <div className="absolute bottom-5 left-6 hidden sm:block lg:left-20">

    <p className="text-[8px] uppercase tracking-[0.35em] text-white/30">
      TRADITION
    </p>

    <p className="mt-1 text-[8px] uppercase tracking-[0.35em] text-white/30">
      MEETS TOMORROW
    </p>

  </div>

</section>

      {/* =========================
          SECTION 2 PLACEHOLDER
      ========================== */}

      {/* =====================================================
    ABOUT POORNAPRAJNA COLLEGE
===================================================== */}
<section className="relative min-h-[680px] overflow-hidden bg-[#030d17] sm:min-h-[720px] lg:min-h-[720px]">

  {/* =========================
      IMAGE
  ========================== */}
  <img
    src={ppcAbout}
    alt="Poornaprajna College"
    className="
      absolute inset-0
      h-full w-full
      object-cover
      object-center

      sm:object-center

      lg:object-cover
    "
  />


  {/* =========================
      MOBILE / DESKTOP GRADIENT
  ========================== */}
  <div
    className="
      absolute inset-0

      bg-gradient-to-t
      from-[#030d17]
      via-[#030d17]/75
      to-[#030d17]/10

      lg:bg-gradient-to-l
      lg:from-[#030d17]
      lg:via-[#030d17]/70
      lg:to-transparent
    "
  />


  {/* Extra bottom darkness on mobile */}
  <div
    className="
      absolute inset-x-0 bottom-0
      h-[55%]
      bg-gradient-to-t
      from-[#030d17]
      to-transparent
      lg:hidden
    "
  />


  {/* =========================
      CONTENT
  ========================== */}
  <div
    className="
      relative z-10
      flex min-h-[680px]
      items-end

      px-6
      pb-12
      pt-24

      sm:min-h-[720px]
      sm:px-10
      sm:pb-16

      lg:min-h-[720px]
      lg:items-center
      lg:justify-end
      lg:px-20
      lg:py-24
    "
  >

    <div className="w-full max-w-xl">


      {/* =========================
          NUMBER
      ========================== */}
      <div className="mb-5 flex items-center gap-4 sm:mb-6">

        <span className="text-xs tracking-[0.2em] text-[#e7b65a] sm:text-sm">
          02
        </span>

        <span className="h-px w-12 bg-[#e7b65a]/70 sm:w-16" />

      </div>


      {/* =========================
          SMALL HEADING
      ========================== */}
      <p className="mb-2 text-[10px] tracking-[0.35em] text-white/70 sm:text-sm">
        ABOUT
      </p>


      {/* =========================
          COLLEGE NAME
      ========================== */}
      <h3
        className="
          font-serif
          text-4xl
          leading-[0.95]
          tracking-wide
          text-[#f2c873]

          sm:text-5xl

          lg:text-6xl
        "
      >
        POORNAPRAJNA
        <br />
        COLLEGE
      </h3>


      {/* Location */}
      <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-white/50 sm:text-xs">
        UDUPI • KARNATAKA
      </p>


      {/* Divider */}
      <div className="my-5 h-px w-16 bg-[#e7b65a] sm:my-6 sm:w-20" />


      {/* =========================
          TAGLINE
      ========================== */}
      <h4
        className="
          max-w-md
          text-[11px]
          font-medium
          uppercase
          leading-relaxed
          tracking-[0.22em]
          text-white/85

          sm:text-sm
          sm:tracking-[0.25em]
        "
      >
        KNOWLEDGE
        <span className="mx-2 text-[#e7b65a] sm:mx-3">
          |
        </span>
        VALUES
        <span className="mx-2 text-[#e7b65a] sm:mx-3">
          |
        </span>
        EXCELLENCE
      </h4>


      {/* =========================
          DESCRIPTION
      ========================== */}
      <div className="mt-5 max-w-md sm:mt-6">

        <p
          className="
            text-[13px]
            leading-6
            text-white/65

            sm:text-sm
            sm:leading-7
          "
        >
          Poornaprajna College, Udupi, is an institution dedicated
          to providing quality education and nurturing the overall
          development of its students.
        </p>

        <p
          className="
            mt-4
            hidden
            text-sm
            leading-7
            text-white/60

            sm:block
          "
        >
          The college strives to create an environment where
          students can grow academically, culturally and socially,
          while developing the values and skills needed to
          contribute meaningfully to society.
        </p>

      </div>


      {/* =========================
          FEATURES
      ========================== */}
      <div className="mt-7 grid max-w-md grid-cols-3 gap-3 sm:mt-8 sm:gap-5">

        {/* Academic */}
        <div>

          <div className="mb-2 text-lg text-[#e7b65a] sm:text-2xl">
            ◈
          </div>

          <p className="text-[8px] uppercase tracking-[0.18em] text-white/55 sm:text-[10px]">
            ACADEMIC
            <br />
            EXCELLENCE
          </p>

        </div>


        {/* Development */}
        <div>

          <div className="mb-2 text-lg text-[#e7b65a] sm:text-2xl">
            ◇
          </div>

          <p className="text-[8px] uppercase tracking-[0.18em] text-white/55 sm:text-[10px]">
            HOLISTIC
            <br />
            DEVELOPMENT
          </p>

        </div>


        {/* Community */}
        <div>

          <div className="mb-2 text-lg text-[#e7b65a] sm:text-2xl">
            ⟡
          </div>

          <p className="text-[8px] uppercase tracking-[0.18em] text-white/55 sm:text-[10px]">
            COMMUNITY
            <br />
            VALUES
          </p>

        </div>

      </div>


      {/* =========================
          BUTTON
      ========================== */}
      <div className="mt-7 sm:mt-8">

        <a
          href="https://www.ppc.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            inline-flex
            items-center
            gap-4
            rounded-full
            border
            border-[#e7b65a]
            px-5
            py-2.5
            text-xs
            text-[#e7b65a]
            transition
            duration-300

            hover:bg-[#e7b65a]
            hover:text-[#07111c]

            sm:px-6
            sm:py-3
            sm:text-sm
          "
        >
          Visit College Website

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>

        </a>

      </div>

    </div>

  </div>


  {/* =========================
      DECORATIVE TEXT
  ========================== */}
  <div className="absolute bottom-5 left-6 hidden sm:block lg:left-20">

    <p className="text-[8px] uppercase tracking-[0.35em] text-white/30">
      VIDYA
    </p>

    <p className="mt-1 text-[8px] uppercase tracking-[0.35em] text-white/30">
      VINAYA
    </p>

    <p className="mt-1 text-[8px] uppercase tracking-[0.35em] text-white/30">
      SEVA
    </p>

  </div>

</section>

      {/* =========================
          SECTION 3 PLACEHOLDER
      ========================== */}

    {/* =====================================================
    ABOUT NSS
===================================================== */}
<section className="relative min-h-[680px] overflow-hidden bg-[#020b14] sm:min-h-[720px] lg:min-h-[720px]">

  {/* =========================
      IMAGE
  ========================== */}
  <img
    src={nssAbout}
    alt="National Service Scheme"
    className="
      absolute inset-0
      h-full w-full
      object-cover
      object-center

      sm:object-center

      lg:object-cover
    "
  />


  {/* =========================
      MOBILE / DESKTOP GRADIENT
  ========================== */}
  <div
    className="
      absolute inset-0

      bg-gradient-to-t
      from-[#020b14]
      via-[#020b14]/75
      to-[#020b14]/10

      lg:bg-gradient-to-r
      lg:from-[#020b14]
      lg:via-[#020b14]/70
      lg:to-transparent
    "
  />


  {/* Extra bottom darkness on mobile */}
  <div
    className="
      absolute inset-x-0 bottom-0
      h-[55%]
      bg-gradient-to-t
      from-[#020b14]
      to-transparent
      lg:hidden
    "
  />


  {/* =========================
      CONTENT
  ========================== */}
  <div
    className="
      relative z-10
      flex min-h-[680px]
      items-end

      px-6
      pb-12
      pt-24

      sm:min-h-[720px]
      sm:px-10
      sm:pb-16

      lg:min-h-[720px]
      lg:items-center
      lg:px-20
      lg:py-24
    "
  >

    <div className="w-full max-w-xl">


      {/* =========================
          NUMBER
      ========================== */}
      <div className="mb-5 flex items-center gap-4 sm:mb-6">

        <span className="text-xs tracking-[0.2em] text-[#e7b65a] sm:text-sm">
          03
        </span>

        <span className="h-px w-12 bg-[#e7b65a]/70 sm:w-16" />

      </div>


      {/* =========================
          SMALL HEADING
      ========================== */}
      <p className="mb-2 text-[10px] tracking-[0.35em] text-white/70 sm:text-sm">
        ABOUT
      </p>


      {/* =========================
          NSS TITLE
      ========================== */}
      <h3
        className="
          font-serif
          text-6xl
          leading-none
          tracking-wide
          text-[#f2c873]

          sm:text-7xl

          lg:text-8xl
        "
      >
        NSS
      </h3>


      {/* Subtitle */}
      <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-white/50 sm:text-xs">
        NATIONAL SERVICE SCHEME
      </p>


      {/* Divider */}
      <div className="my-5 h-px w-16 bg-[#e7b65a] sm:my-6 sm:w-20" />


      {/* =========================
          NSS TAGLINE
      ========================== */}
      <h4
        className="
          max-w-md
          text-[11px]
          font-medium
          uppercase
          leading-relaxed
          tracking-[0.22em]
          text-white/85

          sm:text-sm
          sm:tracking-[0.3em]
        "
      >
        NOT ME,
        <br />
        BUT YOU.
      </h4>


      {/* =========================
          DESCRIPTION
      ========================== */}
      <div className="mt-5 max-w-md sm:mt-6">

        <p
          className="
            text-[13px]
            leading-6
            text-white/65

            sm:text-sm
            sm:leading-7
          "
        >
          The National Service Scheme encourages young people
          to participate in community service and contribute
          meaningfully to society.
        </p>


        <p
          className="
            mt-4
            hidden
            text-sm
            leading-7
            text-white/60

            sm:block
          "
        >
          Through service, volunteering and community engagement,
          NSS provides students with opportunities to develop
          leadership, teamwork and a spirit of service.
        </p>

      </div>


      {/* =========================
          FEATURES
      ========================== */}
      <div className="mt-7 grid max-w-md grid-cols-3 gap-3 sm:mt-8 sm:gap-5">

        {/* Service */}
        <div>

          <div className="mb-2 text-lg text-[#e7b65a] sm:text-2xl">
            ✦
          </div>

          <p className="text-[8px] uppercase tracking-[0.18em] text-white/55 sm:text-[10px]">
            COMMUNITY
            <br />
            SERVICE
          </p>

        </div>


        {/* Leadership */}
        <div>

          <div className="mb-2 text-lg text-[#e7b65a] sm:text-2xl">
            ◇
          </div>

          <p className="text-[8px] uppercase tracking-[0.18em] text-white/55 sm:text-[10px]">
            YOUTH
            <br />
            LEADERSHIP
          </p>

        </div>


        {/* Unity */}
        <div>

          <div className="mb-2 text-lg text-[#e7b65a] sm:text-2xl">
            ⟡
          </div>

          <p className="text-[8px] uppercase tracking-[0.18em] text-white/55 sm:text-[10px]">
            UNITY
            <br />
            & SERVICE
          </p>

        </div>

      </div>


      {/* =========================
          BUTTON
      ========================== */}
      <div className="mt-7 sm:mt-8">

        <a
          href="https://nss.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            inline-flex
            items-center
            gap-4
            rounded-full
            border
            border-[#e7b65a]
            px-5
            py-2.5
            text-xs
            text-[#e7b65a]
            transition
            duration-300

            hover:bg-[#e7b65a]
            hover:text-[#07111c]

            sm:px-6
            sm:py-3
            sm:text-sm
          "
        >
          Explore NSS

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>

        </a>

      </div>

    </div>

  </div>


  {/* =========================
      DECORATIVE TEXT
  ========================== */}
  <div className="absolute bottom-5 right-6 hidden text-right sm:block lg:right-20">

    <p className="text-[8px] uppercase tracking-[0.35em] text-white/30">
      SERVE
    </p>

    <p className="mt-1 text-[8px] uppercase tracking-[0.35em] text-white/30">
      LEARN
    </p>

    <p className="mt-1 text-[8px] uppercase tracking-[0.35em] text-white/30">
      LEAD
    </p>

  </div>

</section>
    </div>
  );
};

export default About;
