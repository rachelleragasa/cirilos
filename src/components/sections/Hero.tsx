import Link from "next/link";
import Image from "next/image";
import HeroImg from "../../../public/images/hero.jpg";

function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black"
      aria-labelledby="hero-heading"
    >
      <Image
        src={HeroImg}
        alt="Photo of filipino food"
        fill
        className="object-cover"
        quality={60}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-white/50 text-sm font-medium tracking-[0.35em] uppercase mb-3">
          Filipino Food · Cable Street, London
        </p>

        <h1
          id="hero-heading"
          className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-none uppercase mb-8 tracking-tight"
        >
          Filipino Kainan
        </h1>

        <p className="font-heading text-xl sm:text-2xl text-white/65 italic mb-12 max-w-lg mx-auto leading-relaxed">
          A family kitchen. Filipino food, done Cirilo&apos;s way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#menu"
            className="bg-white text-black font-medium px-10 py-5 rounded-full hover:bg-white/90 transition-colors duration-200 text-lg tracking-wide"
          >
            Explore Our Menu
          </Link>
          <Link
            href="#reservations"
            className="border border-white/30 text-white font-medium px-10 py-5 rounded-full hover:bg-white hover:text-black transition-colors duration-200 text-lg tracking-wide"
          >
            Reserve a Table
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
