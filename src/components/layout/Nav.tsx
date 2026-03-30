"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Our Story" },
  { href: "#experience", label: "Experience" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled || isOpen ? "bg-black" : "bg-transparent"}`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-heading text-3xl font-semibold text-white tracking-widest"
            aria-label="Cirilo Filipino Kainan — home"
          >
            CIRILO
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-lg font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
            <a
              href="#reservations"
              className="border border-white/40 text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-white hover:text-black hover:border-white transition-colors duration-200"
            >
              Reserve a Table
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div id="mobile-nav" className="md:hidden pb-4">
            <div className="flex flex-col gap-3 pt-3">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-3 rounded-md text-lg font-medium transition-colors"
                >
                  {label}
                </Link>
              ))}
              <a
                href="#reservations"
                onClick={() => setIsOpen(false)}
                className="mt-2 border border-white/40 text-white text-lg font-medium px-8 py-4 rounded-full text-center hover:bg-white hover:text-black hover:border-white transition-colors"
              >
                Reserve a Table
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
