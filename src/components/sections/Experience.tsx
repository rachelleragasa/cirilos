function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-4 bg-black"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <p className="text-white/50 text-xs font-medium tracking-[0.3em] uppercase mb-3">
            Visit Us
          </p>
          <h2
            id="experience-heading"
            className="font-heading text-4xl sm:text-5xl font-bold text-white leading-tight"
          >
            Plan Your Visit
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-5 bg-white/15"
              aria-hidden="true"
            >
              <svg
                className="w-5 h-5 text-white/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold text-white mb-3">
              Location
            </h3>
            <address className="not-italic text-white/60 text-lg leading-relaxed">
              4 Cable Street
              <br />
              London
              <br />
              E1 8JG
              <br />
              <a
                href="tel:+442077022299"
                className="hover:text-white transition-colors mt-2 inline-block"
              >
                (+44) 020 7702 2299
              </a>
            </address>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-5 bg-white/15"
              aria-hidden="true"
            >
              <svg
                className="w-5 h-5 text-white/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold text-white mb-3">
              Hours
            </h3>
            <dl className="text-white/60 text-lg space-y-2">
              <div className="flex justify-between gap-4">
                <dt>Tuesday</dt>
                <dd className="text-white/80">6:00 – 10 PM</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Wednesday</dt>
                <dd className="text-white/80">5:30 – 10 PM</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Thursday – Sunday</dt>
                <dd className="text-white/80">12:00 – 10 PM</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Monday</dt>
                <dd className="text-white/40">Closed</dd>
              </div>
            </dl>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-5 bg-white/15"
              aria-hidden="true"
            >
              <svg
                className="w-5 h-5 text-white/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold text-white mb-3">
              Group Bookings
            </h3>
            <p className="text-white/60 text-lg leading-relaxed mb-4">
              Gathering a group? We welcome parties of up to 10 guests. Whether
              it&apos;s a birthday, a celebration, or just an excuse to eat well
              together — book ahead and we&apos;ll take care of the rest.
            </p>
            <a
              href="mailto:eat@cirilofilipinokainan.co.uk"
              className="text-white/70 text-lg hover:text-white transition-colors"
            >
              Book a table →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
