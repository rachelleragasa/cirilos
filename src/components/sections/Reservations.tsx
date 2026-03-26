function Reservations() {
  return (
    <section
      id="reservations"
      className="py-24 px-4 bg-black"
      aria-labelledby="reservations-heading"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-white/55 text-sm font-medium tracking-[0.3em] uppercase mb-4">
          Join Us
        </p>
        <h2
          id="reservations-heading"
          className="font-heading text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
        >
          Make a Reservation
        </h2>
        <p className="text-white/70 mb-10 text-lg leading-relaxed">
          Reserve your table and let us bring the warmth of Filipino hospitality
          to your evening.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:++4402077022299"
            className="bg-white text-black font-semibold px-10 py-5 rounded-full hover:bg-white/90 transition-colors duration-200 text-lg tracking-wide"
          >
            Call Us
          </a>
          <a
            href="mailto:eat@cirilofilipinokainan.co.uk"
            className="border border-white/40 text-white font-medium px-10 py-5 rounded-full hover:bg-white hover:text-black transition-colors duration-200 text-lg tracking-wide"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reservations;
