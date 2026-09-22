import { useCallback, useEffect, useMemo, useState } from "react";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function AdminDashboard() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [eventFilter, setEventFilter] = useState("ALL");

  const [expandedRegistration, setExpandedRegistration] = useState(null);

  // ---------------------------------------
  // FETCH REGISTRATIONS
  // ---------------------------------------

  const fetchRegistrations = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const response = await fetch(`${API_URL}/admin/registrations`);

      if (!response.ok) {
        throw new Error("Failed to fetch registrations.");
      }

      const data = await response.json();

      setRegistrations(data);
    } catch (error) {
      console.error("Admin dashboard error:", error);

      setError(error.message || "Unable to load registration data.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  fetchRegistrations();
}, [fetchRegistrations]);

  // ---------------------------------------
  // UNIQUE EVENTS
  // ---------------------------------------

  const eventList = useMemo(() => {
    const events = registrations
      .map((registration) => registration.event)
      .filter(Boolean);

    const uniqueEvents = new Map();

    events.forEach((event) => {
      uniqueEvents.set(event._id, event);
    });

    return Array.from(uniqueEvents.values()).sort((a, b) =>
      a.name.localeCompare(b.name),
    );
  }, [registrations]);

  // ---------------------------------------
  // FILTER REGISTRATIONS
  // ---------------------------------------

  const filteredRegistrations = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return registrations.filter((registration) => {
      const collegeName = registration.college?.collegeName || "";

      const facultyName = registration.facultyHeadName || "";

      const facultyEmail = registration.facultyEmail || "";

      const facultyPhone = registration.facultyPhone || "";

      const eventName = registration.event?.name || "";

      const matchesSearch =
        !searchValue ||
        collegeName.toLowerCase().includes(searchValue) ||
        facultyName.toLowerCase().includes(searchValue) ||
        facultyEmail.toLowerCase().includes(searchValue) ||
        facultyPhone.toLowerCase().includes(searchValue) ||
        eventName.toLowerCase().includes(searchValue);

      const matchesEvent =
        eventFilter === "ALL" || registration.event?._id === eventFilter;

      return matchesSearch && matchesEvent;
    });
  }, [registrations, search, eventFilter]);

  // ---------------------------------------
  // DASHBOARD STATISTICS
  // ---------------------------------------

  const totalRegistrations = registrations.length;

  const totalParticipants = registrations.reduce(
    (total, registration) => total + (registration.participants?.length || 0),
    0,
  );

  const totalColleges = new Set(
    registrations
      .map((registration) => registration.college?._id)
      .filter(Boolean),
  ).size;

  // ---------------------------------------
  // TOGGLE DETAILS
  // ---------------------------------------

  const toggleRegistration = (id) => {
    setExpandedRegistration((current) => (current === id ? null : id));
  };

  // ---------------------------------------
  // FORMAT DATE
  // ---------------------------------------

  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <main className="min-h-screen bg-[#020b14] text-white">
      {/* =====================================================
          TOP HEADER
      ===================================================== */}

      <header className="border-b border-[#e7b65a]/15 bg-[#050f19]/95">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-5 px-6 py-6 sm:px-10 lg:flex-row lg:items-center lg:px-12">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center border border-[#e7b65a]/50 text-[#e7b65a]">
                <span className="font-serif text-xl">K</span>
              </div>

              <div>
                <p className="font-serif text-2xl tracking-[0.08em] text-[#f2c873]">
                  KSHITIJA
                </p>

                <p className="text-[8px] uppercase tracking-[0.45em] text-white/35">
                  ADMINISTRATION • 2026
                </p>
              </div>
            </div>
          </div>

          {/* Refresh */}

          <button
            type="button"
            onClick={() => fetchRegistrations(true)}
            disabled={refreshing}
            className="flex items-center justify-center gap-3 border border-[#e7b65a]/40 px-5 py-3 text-[10px] uppercase tracking-[0.25em] text-[#e7b65a] transition hover:border-[#e7b65a] hover:bg-[#e7b65a] hover:text-[#020b14] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className={refreshing ? "animate-spin" : ""}>↻</span>

            {refreshing ? "Refreshing..." : "Refresh Data"}
          </button>
        </div>
      </header>

      {/* =====================================================
          DASHBOARD CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 py-10 sm:px-10 lg:px-12">
        {/* PAGE TITLE */}

        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#e7b65a]">
            KSHITIJA • YUGMAM
          </p>

          <h1 className="mt-3 font-serif text-4xl text-[#f2c873] sm:text-5xl">
            Registration Dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
            Manage college registrations, faculty information, event
            participation and participant details.
          </p>
        </div>

        {/* =================================================
            STATISTICS
        ================================================= */}

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {/* Registrations */}

          <div className="border border-white/10 bg-[#071522]/80 p-6">
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
              TOTAL REGISTRATIONS
            </p>

            <div className="mt-4 flex items-end justify-between">
              <p className="font-serif text-4xl text-[#f2c873]">
                {totalRegistrations}
              </p>

              <span className="text-2xl text-[#e7b65a]/40">#</span>
            </div>
          </div>

          {/* Colleges */}

          <div className="border border-white/10 bg-[#071522]/80 p-6">
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
              COLLEGES
            </p>

            <div className="mt-4 flex items-end justify-between">
              <p className="font-serif text-4xl text-[#f2c873]">
                {totalColleges}
              </p>

              <span className="text-2xl text-[#e7b65a]/40">◈</span>
            </div>
          </div>

          {/* Participants */}

          <div className="border border-white/10 bg-[#071522]/80 p-6">
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
              TOTAL PARTICIPANTS
            </p>

            <div className="mt-4 flex items-end justify-between">
              <p className="font-serif text-4xl text-[#f2c873]">
                {totalParticipants}
              </p>

              <span className="text-2xl text-[#e7b65a]/40">◎</span>
            </div>
          </div>

          {/* Events */}

          <div className="border border-white/10 bg-[#071522]/80 p-6">
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
              EVENTS
            </p>

            <div className="mt-4 flex items-end justify-between">
              <p className="font-serif text-4xl text-[#f2c873]">
                {eventList.length}
              </p>

              <span className="text-2xl text-[#e7b65a]/40">✦</span>
            </div>
          </div>
        </div>

        {/* =================================================
            SEARCH + FILTER
        ================================================= */}

        <div className="mt-10 border border-white/10 bg-[#071522]/70 p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
            {/* Search */}

            <div className="relative">
              <label className="mb-2 block text-[9px] uppercase tracking-[0.3em] text-white/35">
                SEARCH REGISTRATIONS
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search college, faculty, phone, email or event..."
                className="w-full border border-white/10 bg-[#020b14] px-5 py-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#e7b65a]"
              />
            </div>

            {/* Event filter */}

            <div>
              <label className="mb-2 block text-[9px] uppercase tracking-[0.3em] text-white/35">
                FILTER BY EVENT
              </label>

              <select
                value={eventFilter}
                onChange={(e) => setEventFilter(e.target.value)}
                className="w-full border border-white/10 bg-[#020b14] px-5 py-4 text-sm text-white outline-none focus:border-[#e7b65a]"
              >
                <option value="ALL">All Events</option>

                {eventList.map((event) => (
                  <option key={event._id} value={event._id}>
                    {event.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* =================================================
            REGISTRATION LIST HEADER
        ================================================= */}

        <div className="mt-12 flex flex-col justify-between gap-4 border-b border-[#e7b65a]/20 pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#e7b65a]">
              REGISTRATION RECORDS
            </p>

            <h2 className="mt-2 font-serif text-3xl text-white">
              Registered Colleges
            </h2>
          </div>

          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            SHOWING {filteredRegistrations.length} OF {totalRegistrations}
          </p>
        </div>

        {/* =================================================
            LOADING
        ================================================= */}

        {loading && (
          <div className="mt-8 border border-white/10 bg-[#071522]/70 p-12 text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#e7b65a]" />

            <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-white/35">
              Loading registrations...
            </p>
          </div>
        )}

        {/* =================================================
            ERROR
        ================================================= */}

        {!loading && error && (
          <div className="mt-8 border border-red-400/20 bg-red-400/5 p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-red-300">
              ERROR
            </p>

            <p className="mt-3 text-sm text-red-200/70">{error}</p>

            <button
              type="button"
              onClick={() => fetchRegistrations()}
              className="mt-5 border border-red-300/30 px-5 py-3 text-[9px] uppercase tracking-[0.25em] text-red-200 transition hover:bg-red-300 hover:text-[#020b14]"
            >
              Try Again
            </button>
          </div>
        )}

        {/* =================================================
            EMPTY
        ================================================= */}

        {!loading && !error && filteredRegistrations.length === 0 && (
          <div className="mt-8 border border-white/10 bg-[#071522]/70 p-14 text-center">
            <p className="font-serif text-2xl text-white/60">
              No registrations found
            </p>

            <p className="mt-3 text-sm text-white/30">
              Try changing your search or event filter.
            </p>
          </div>
        )}

        {/* =================================================
            REGISTRATION CARDS
        ================================================= */}

        {!loading && !error && filteredRegistrations.length > 0 && (
          <div className="mt-6 space-y-3">
            {filteredRegistrations.map((registration, index) => {
              const isExpanded = expandedRegistration === registration._id;

              const participants = registration.participants || [];

              return (
                <article
                  key={registration._id}
                  className={`overflow-hidden border transition duration-300 ${
                    isExpanded ? "border-[#e7b65a]/60" : "border-white/10"
                  }`}
                >
                  {/* ===================================
                          REGISTRATION SUMMARY
                      =================================== */}

                  <button
                    type="button"
                    onClick={() => toggleRegistration(registration._id)}
                    className={`group flex w-full flex-col gap-5 p-5 text-left transition sm:p-6 lg:flex-row lg:items-center lg:justify-between ${
                      isExpanded
                        ? "bg-[#e7b65a]/5"
                        : "bg-[#071522]/70 hover:bg-[#e7b65a]/5"
                    }`}
                  >
                    {/* College */}

                    <div className="flex min-w-0 items-center gap-5">
                      <span className="hidden font-serif text-xl text-[#e7b65a]/50 sm:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <p className="text-[9px] uppercase tracking-[0.3em] text-[#e7b65a]">
                          COLLEGE
                        </p>

                        <h3 className="mt-1 truncate font-serif text-xl text-white sm:text-2xl">
                          {registration.college?.collegeName ||
                            "Unknown College"}
                        </h3>

                        <p className="mt-1 truncate text-xs text-white/35">
                          Faculty: {registration.facultyHeadName || "—"}
                        </p>
                      </div>
                    </div>

                    {/* Summary info */}

                    <div className="grid grid-cols-2 gap-5 sm:flex sm:items-center sm:gap-10">
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                          EVENT
                        </p>

                        <p className="mt-1 text-sm text-[#e7b65a]">
                          {registration.event?.name || "—"}
                        </p>
                      </div>

                      <div>
                        <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                          MEMBERS
                        </p>

                        <p className="mt-1 text-sm text-white/70">
                          {participants.length}
                        </p>
                      </div>

                      <div className="hidden sm:block">
                        <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                          STATUS
                        </p>

                        <p className="mt-1 text-xs uppercase tracking-[0.15em] text-green-300">
                          {registration.status || "confirmed"}
                        </p>
                      </div>

                      <span
                        className={`text-[#e7b65a] transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        ↓
                      </span>
                    </div>
                  </button>

                  {/* ===================================
                          FULL DETAILS
                      =================================== */}

                  {isExpanded && (
                    <div className="border-t border-[#e7b65a]/15 bg-[#020b14]/70 p-5 sm:p-8">
                      {/* =================================
                              FACULTY DETAILS
                          ================================= */}

                      <div>
                        <div className="flex flex-col justify-between gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-end">
                          <div>
                            <p className="text-[9px] uppercase tracking-[0.3em] text-[#e7b65a]">
                              COLLEGE INFORMATION
                            </p>

                            <h4 className="mt-2 font-serif text-2xl text-[#f2c873]">
                              Faculty / Team Leader
                            </h4>
                          </div>

                          <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                            {formatDate(registration.createdAt)}
                          </span>
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          <div className="border border-white/10 bg-[#071522] p-4">
                            <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                              NAME
                            </p>

                            <p className="mt-2 text-sm text-white/80">
                              {registration.facultyHeadName || "—"}
                            </p>
                          </div>

                          <div className="border border-white/10 bg-[#071522] p-4">
                            <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                              PHONE
                            </p>

                            <p className="mt-2 text-sm text-white/80">
                              {registration.facultyPhone || "—"}
                            </p>
                          </div>

                          <div className="border border-white/10 bg-[#071522] p-4">
                            <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                              EMAIL
                            </p>

                            <p className="mt-2 break-all text-sm text-white/80">
                              {registration.facultyEmail || "—"}
                            </p>
                          </div>

                          <div className="border border-white/10 bg-[#071522] p-4">
                            <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                              REGISTERED
                            </p>

                            <p className="mt-2 text-sm text-white/80">
                              {formatDate(registration.createdAt)}
                            </p>

                            <p className="mt-1 text-[10px] text-white/30">
                              {formatTime(registration.createdAt)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* =================================
                              EVENT DETAILS
                          ================================= */}

                      <div className="mt-10">
                        <div className="border-b border-white/10 pb-4">
                          <p className="text-[9px] uppercase tracking-[0.3em] text-[#e7b65a]">
                            EVENT PARTICIPATION
                          </p>

                          <div className="mt-2 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                            <h4 className="font-serif text-2xl text-[#f2c873]">
                              {registration.event?.name || "Unknown Event"}
                            </h4>

                            <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                              TEAM SIZE:{" "}
                              <span className="text-[#e7b65a]">
                                {participants.length}
                              </span>
                              {registration.event?.teamSize
                                ? ` / ${registration.event.teamSize}`
                                : ""}
                            </p>
                          </div>
                        </div>

                        {/* =================================
                                PARTICIPANTS
                            ================================= */}

                        <div className="mt-5 overflow-hidden border border-white/10">
                          {/* Desktop header */}

                          <div className="hidden grid-cols-[70px_1fr_240px] border-b border-white/10 bg-[#071522] px-5 py-3 md:grid">
                            <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                              #
                            </p>

                            <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                              PARTICIPANT
                            </p>

                            <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                              PHONE
                            </p>
                          </div>

                          {participants.length === 0 ? (
                            <div className="p-6 text-sm text-white/35">
                              No participant data found.
                            </div>
                          ) : (
                            participants.map(
                              (participant, participantIndex) => (
                                <div
                                  key={participant._id || participantIndex}
                                  className="grid gap-2 border-b border-white/10 px-5 py-4 last:border-b-0 md:grid-cols-[70px_1fr_240px] md:items-center"
                                >
                                  <span className="text-xs text-[#e7b65a]">
                                    {String(participantIndex + 1).padStart(
                                      2,
                                      "0",
                                    )}
                                  </span>

                                  <div>
                                    <p className="text-sm text-white/80">
                                      {participant.name}
                                    </p>

                                    <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/25 md:hidden">
                                      PHONE
                                    </p>
                                  </div>

                                  <p className="text-sm text-white/50">
                                    {participant.phone}
                                  </p>
                                </div>
                              ),
                            )
                          )}
                        </div>
                      </div>

                      {/* =================================
                              REGISTRATION ID
                          ================================= */}

                      <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                          REGISTRATION ID
                        </p>

                        <p className="break-all font-mono text-[10px] text-white/30">
                          {registration._id}
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-[#e7b65a]/10 px-6 py-8 text-center">
        <p className="font-serif text-lg text-[#f2c873]">KSHITIJA • YUGMAM</p>

        <p className="mt-2 text-[8px] uppercase tracking-[0.4em] text-white/20">
          WHERE TWO WORLDS UNITE
        </p>
      </footer>
    </main>
  );
}

export default AdminDashboard;
