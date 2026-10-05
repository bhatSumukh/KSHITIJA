function Footer() {
  const socialLinks = {
    instagram: "https://www.instagram.com/nss_ppcudupi/",
    facebook: "https://www.facebook.com/poornaprajnacollegeudupi",
    youtube: "https://youtube.com/@poornaprajnacollegeudupi8976?si=t0HGEsLytRDHxcY6",
    college: "https://www.ppc.ac.in/",
  };

  return (
    <footer className="border-t border-white/10 bg-[#020b14] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-20">

        {/* MAIN FOOTER */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

          {/* COLLEGE + EVENT */}
          <div className="text-center md:text-left">

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#e7b65a]">
              Poornaprajna College (Autonomous)
            </p>

            <h2 className="mt-3 font-serif text-3xl text-[#f2c873] sm:text-4xl">
              KSHITIJA
            </h2>

            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/40">
              State-Level Intercollegiate Fest
            </p>

            <p className="mt-4 text-sm text-white/40">
              Udupi, Karnataka
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-4">

            {/* Instagram */}
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition duration-300 hover:border-[#e7b65a]/50 hover:bg-[#e7b65a]/10 hover:text-[#e7b65a]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition duration-300 hover:border-[#e7b65a]/50 hover:bg-[#e7b65a]/10 hover:text-[#e7b65a]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition duration-300 hover:border-[#e7b65a]/50 hover:bg-[#e7b65a]/10 hover:text-[#e7b65a]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M23 12s0-4-1-5c-.6-1.1-1.7-1.7-2.9-1.8C17.4 5 12 5 12 5s-5.4 0-7.1.2C3.7 5.3 2.6 5.9 2 7c-1 1-1 5-1 5s0 4 1 5c.6 1.1 1.7 1.7 2.9 1.8C6.6 19 12 19 12 19s5.4 0 7.1-.2c1.2-.1 2.3-.7 2.9-1.8 1-1 1-5 1-5ZM10 15.5v-7l6 3.5-6 3.5Z" />
              </svg>
            </a>

            {/* College Website */}
            <a
              href={socialLinks.college}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Poornaprajna College Website"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition duration-300 hover:border-[#e7b65a]/50 hover:bg-[#e7b65a]/10 hover:text-[#e7b65a]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3c2.2 2.4 3.4 5.4 3.4 9s-1.2 6.6-3.4 9" />
                <path d="M12 3c-2.2 2.4-3.4 5.4-3.4 9s1.2 6.6 3.4 9" />
              </svg>
            </a>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-[11px] uppercase tracking-[0.2em] text-white/30">
            © 2026 Kshitija · Poornaprajna College
          </p>

          <a
            href={socialLinks.college}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-[0.2em] text-white/30 transition hover:text-[#e7b65a]"
          >
            Visit College Website →
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;