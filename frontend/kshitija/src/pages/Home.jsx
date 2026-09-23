import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import nsslogo from "../assets/nsslogo.png";
import herobg from "../assets/hero-bg.png";
import ppclogo from "../assets/ppc-logo2.png";
import kshitijaLogo from "../assets/kshi2.png";
function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Fest starts: October 9, 2026
    const targetDate = new Date("2026-10-09T09:00:00+05:30").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // //   const scrollToExplore = () => {
  // //     window.scrollTo({
  // //       top: window.innerHeight,
  // //       behavior: "smooth",
  // //     });
  //   };

  return (
    <main className="min-h-screen bg-[#03101c] text-white">
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header className="fixed top-0 left-0 z-50 w-full">
        <nav className="mx-auto flex h-[72px] w-full items-center justify-between border-b border-white/10 bg-[#031426]/80 px-6 backdrop-blur-md lg:px-20">
          {/* NSS BRAND */}
          <div className="flex items-center gap-3">
            <img
              src={nsslogo}
              alt="NSS Poornaprajna College"
              className="h-10 w-10 object-contain"
            />
            <img
              src={ppclogo}
              alt="Poornaprajna college udupi"
              className="h-13 w-13 object-contain"
            />

            <div className="hidden leading-tight sm:block">
              <p className="font-serif text-xl tracking-wide text-white">NSS</p>

              <p className="text-[11px] uppercase tracking-[0.15em] text-white/80">
                POORNAPRAJNA COLLEGE AUTONOMOUS
              </p>

              <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                UDUPI
              </p>
            </div>
          </div>

          {/* CENTER BRAND */}
          {/* <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
            <p className="font-serif text-3xl tracking-[0.12em] text-[#f5c451]">
              KSHITIJA
            </p>
          </div> */}

          {/* NAVIGATION */}
          <div className="hidden items-center gap-10 lg:flex">
            <a
              href="#home"
              className="text-sm text-white/70 transition hover:text-[#f5c451]"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm text-white/70 transition hover:text-[#f5c451]"
            >
              About
            </a>

            <a
              href="#events"
              className="py-2 text-sm text-white/80 transition hover:text-[#f5c451]"
            >
              Events
            </a>

            <a
              href="#guidelines"
              className="py-2 text-sm text-white/80 transition hover:text-[#f5c451]"
            >
              Guidelines
            </a>

            <a
              href="#contact"
              className="py-2 text-sm text-white/80 transition hover:text-[#f5c451]"
            >
              Contact
            </a>

            <a
              href="#registration"
              className="flex items-center gap-3 rounded-full bg-[#f6c653] px-8 py-3 text-sm font-semibold text-[#07111c] transition duration-300 hover:scale-105 hover:bg-[#ffd978]"
            >
              Register Now
              <span className="text-lg">→</span>
            </a>
          </div>

          {/* MOBILE REGISTER */}
          <a
            href="#registration"
            className="rounded-full bg-[#f6c653] px-5 py-2.5 text-sm font-semibold text-[#07111c] lg:hidden"
          >
            Register
          </a>
        </nav>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${herobg})`,
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#02101d]/20" />

        {/* TOP GRADIENT */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#031426]/90 to-transparent" />

        {/* BOTTOM GRADIENT */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#020d17] to-transparent" />

        {/* =================================================
            SIDE TEXT — LEFT
        ================================================== */}
        <div className="absolute left-[5%] top-[20%] hidden w-28 text-center md:block">
          <p className="text-[10px] leading-[1.9] tracking-[0.32em] text-white/75">
            OUR
            <br />
            ROOTS
            <br />
            GIVE US
            <br />
            STRENGTH
          </p>

          <div className="mx-auto mt-4 h-[1px] w-10 bg-[#e8b94c]" />
        </div>

        {/* =================================================
            SIDE TEXT — RIGHT
        ================================================== */}
        <div className="absolute right-[5%] top-[20%] hidden w-28 text-center md:block">
          <p className="text-[10px] leading-[1.9] tracking-[0.32em] text-white/75">
            NEW
            <br />
            IDEAS
            <br />
            BUILD A
            <br />
            BRIGHTER
            <br />
            TOMORROW
          </p>

          <div className="mx-auto mt-4 h-[1px] w-10 bg-[#e8b94c]" />
        </div>

        {/* =================================================
            CENTER CONTENT
        ================================================== */}
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col justify-center items-center px-5 pt-24 text-center">
          {/* NSS PRESENTS */}
          <p className="text-[20px] uppercase tracking-[0.6em] text-white/80 sm:text-xs">
            NSS PRESENTS
          </p>

          {/* LOGO PLACEHOLDER */}
          <div className="flex min-h-[300px] items-center justify-center sm:min-h-[100px] lg:min-h-[100px]">
            <img
              src={kshitijaLogo}
              alt="Kshithija"
              className="w-[90vw] max-w-[500px] object-contain drop-shadow-[0_0_30px_rgba(255,200,80,0.35)] sm:w-[200px] lg:w-[600px]"
            />
          </div>

          {/* COLLEGE FEST */}
          <p className="text-xs uppercase tracking-[0.55em] text-white sm:text-sm">
            THE COLLEGE FEST
          </p>

          {/* DECORATIVE LINE */}
          <div className="mt-7 flex w-full max-w-[350px] items-center justify-center gap-3">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/50" />

            <span className="text-xl text-[#f5c451]">◇</span>

            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/50" />
          </div>

          {/* YUGMAM */}
          <h2 className="mt-3 font-serif text-2xl tracking-[0.3em] text-white sm:text-3xl md:text-4xl">
            YUGMAM
          </h2>

          <p className="mt-2 text-[10px] uppercase tracking-[0.38em] text-white/85 sm:text-xs">
            WHERE TWO WORLDS UNITE
          </p>

          {/* DATE + LOCATION */}
          <div className="mt-4 flex flex-col items-center gap-3 text-xs text-white/90 sm:flex-row sm:gap-6 sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="text-base text-[#f5c451]">◫</span>

              <span>OCT 9, 2026</span>
            </div>

            <span className="hidden text-[#f5c451] sm:block">|</span>

            <div className="flex items-center gap-2">
              <span className="text-base text-[#f5c451]">◉</span>

              <span>POORNAPRAJNA COLLEGE AUTONOMOUS, UDUPI</span>
            </div>
          </div>

          {/* REGISTER BUTTON */}
          {/* <a
            href="/register"
            className="group mt-7 flex items-center gap-4 rounded-full bg-[#f6c653] px-12 py-3.5 text-sm font-semibold text-[#06111d] shadow-[0_10px_40px_rgba(246,198,83,0.2)] transition duration-300 hover:scale-105 hover:bg-[#ffda75]"
          >
            Register Now

            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a> */}

          {/* =================================================
              COUNTDOWN
          ================================================== */}
          <div className="mt-8 w-full max-w-[560px]">
            {/* TITLE */}
            <div className="flex items-center gap-3">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d8a93e]/70" />

              <span className="text-[10px] uppercase tracking-[0.45em] text-white/90">
                FEST BEGINS IN
              </span>

              <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#d8a93e]/70" />
            </div>

            {/* COUNTDOWN BOXES */}
            <div className="mt-2 grid grid-cols-4 gap-2 sm:gap-3">
              <CountdownBox value={timeLeft.days} label="DAYS" />

              <CountdownBox value={timeLeft.hours} label="HOURS" />

              <CountdownBox value={timeLeft.minutes} label="MINUTES" />

              <CountdownBox value={timeLeft.seconds} label="SECONDS" />
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM LEFT TAGLINE
        ================================================== */}
        <div className="absolute bottom-8 left-[4%] hidden items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-white/70 lg:flex">
          <span>TRADITION</span>

          <span className="text-[#f5c451]">×</span>

          <span>CREATIVITY</span>

          <span className="text-[#f5c451]">×</span>

          <span>COMMUNITY</span>
        </div>

        {/* =================================================
            BOTTOM RIGHT TAGLINE
        ================================================== */}
        <div className="absolute bottom-8 right-[4%] hidden text-center text-[9px] uppercase leading-[1.8] tracking-[0.3em] text-white/70 lg:block">
          <p>SAME SKY</p>

          <p>NEW HORIZONS</p>
        </div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================== */}
        {/* <button
          onClick={scrollToExplore}
          className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition hover:text-[#f5c451]"
        >

          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/60 pt-1">

            <div className="h-2 w-[2px] rounded-full bg-white animate-bounce" />

          </div>

          <span className="text-[8px] uppercase tracking-[0.35em]">
            Scroll to explore
          </span>

        </button> */}
      </section>

      {/* =====================================================
          TEMPORARY NEXT SECTION
          This gives the scroll button somewhere to go.
      ====================================================== */}
    </main>
  );
}

/* ============================================================
   COUNTDOWN BOX COMPONENT
============================================================ */

function CountdownBox({ value, label }) {
  return (
    <div className="flex min-h-[78px] flex-col items-center justify-center rounded-xl border border-[#c99b37]/50 bg-[#061624]/50 px-2 backdrop-blur-sm sm:min-h-[88px]">
      <span className="font-serif text-3xl text-[#f5c451] sm:text-4xl">
        {String(value).padStart(2, "0")}
      </span>

      <span className="mt-1 text-[8px] tracking-[0.25em] text-white/60 sm:text-[9px]">
        {label}
      </span>
    </div>
  );
}

export default Home;
