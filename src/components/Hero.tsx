"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [isDay, setIsDay] = useState(true);
  const [isAutoSwitch, setIsAutoSwitch] = useState(true);

  // Auto-switch between day and night every 5 seconds
  useEffect(() => {
    if (!isAutoSwitch) return;

    const interval = setInterval(() => {
      setIsDay((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoSwitch]);

  const handleManualToggle = () => {
    setIsAutoSwitch(false);
    setIsDay((prev) => !prev);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 sm:pt-0 sm:pb-0">
      {/* Background Image with Day/Night Toggle */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        <Image
          src={
            isDay
              ? "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
              : "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070"
          }
          alt={isDay ? "Panoramic day view of Dago highlands" : "Panoramic night view with city lights"}
          fill
          priority
          className="object-cover object-center parallax-bg"
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/10 via-transparent to-forest-deep/80" />

      {/* Day/Night Toggle Button */}
      <button
        onClick={handleManualToggle}
        className="absolute top-28 right-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label={isDay ? "Switch to night view" : "Switch to day view"}
      >
        <span className="text-2xl">{isDay ? "☀️" : "🌙"}</span>
        <span className="text-xs font-[family-name:var(--font-lato)] tracking-wider uppercase">
          {isDay ? "Day View" : "Night View"}
        </span>
      </button>

      {/* Open Today Badge */}
      <div className="absolute top-28 left-6 z-20 px-4 py-2 rounded-full bg-heritage-gold/90 text-white flex items-center gap-2">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span className="text-xs font-[family-name:var(--font-lato)] tracking-wider uppercase">
          Open Today: 10am - 10pm
        </span>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4 animate-fade-in-up">
          <div className="w-10 h-[1px] bg-heritage-gold/80" />
          <p className="font-[family-name:var(--font-lato)] text-gold-light/90 text-xs md:text-sm tracking-[0.4em] uppercase">
            Elevated Dining in the Heart of Dago
          </p>
          <div className="w-10 h-[1px] bg-heritage-gold/80" />
        </div>

        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight animate-fade-in-up delay-100">
          Heritage Cafe
          <span className="block text-heritage-gold mt-3 text-3xl md:text-5xl lg:text-6xl">
            & Resto
          </span>
        </h1>

        <p className="font-[family-name:var(--font-lato)] text-sm md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mt-4 animate-fade-in-up delay-200">
          Where Panoramic Views Meet Timeless Indonesian Cuisine
        </p>

        <p className="font-[family-name:var(--font-lato)] text-xs md:text-sm text-white/60 max-w-xl mx-auto leading-relaxed mt-2 animate-fade-in-up delay-300">
          Experience cool highland air, breathtaking city vistas, and the warmth of
          Archipelago flavors — from sunrise to city lights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up delay-400">
          <Link
            href="#menu"
            className="font-[family-name:var(--font-lato)] px-10 py-3 bg-heritage-gold text-white hover:bg-sunset-amber transition-all duration-300 tracking-wider uppercase text-xs md:text-sm font-medium shadow-lg hover:shadow-xl"
          >
            Explore Menu
          </Link>
          <Link
            href="#reservation"
            className="font-[family-name:var(--font-lato)] px-10 py-3 border border-white/40 text-white hover:bg-white/10 transition-all duration-300 tracking-wider uppercase text-xs md:text-sm font-medium"
          >
            Book Your Moment
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 animate-scroll-bounce hidden sm:block">
        <Link href="#about" aria-label="Scroll down" className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs font-[family-name:var(--font-lato)] tracking-wider uppercase">
            Scroll
          </span>
          <svg
            className="w-6 h-6 text-heritage-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
