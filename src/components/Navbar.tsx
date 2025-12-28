"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#events", label: "Events" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col items-start">
          <span className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-gold tracking-wide">
            Sawangan
          </span>
          <span className="font-[family-name:var(--font-lato)] text-xs text-gold-light/80 tracking-[0.3em] uppercase">
            Restaurant
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-lato)] text-sm text-white/90 hover:text-gold transition-colors tracking-wider uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#reservation"
            className="font-[family-name:var(--font-lato)] text-sm px-6 py-2.5 bg-gold text-charcoal hover:bg-gold-light transition-colors tracking-wider uppercase font-medium"
          >
            Reserve
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-md border-t border-gold/20 mt-4">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-[family-name:var(--font-lato)] text-sm text-white/90 hover:text-gold transition-colors tracking-wider uppercase py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#reservation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-[family-name:var(--font-lato)] text-sm px-6 py-3 bg-gold text-charcoal hover:bg-gold-light transition-colors tracking-wider uppercase font-medium text-center mt-2"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
