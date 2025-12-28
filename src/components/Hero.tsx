import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 sm:pt-0 sm:pb-0">
      <Image
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
        alt="Restaurant interior"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/10 via-transparent to-charcoal/80" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-[1px] bg-gold/80" />
          <p className="font-[family-name:var(--font-lato)] text-gold-light/90 text-xs md:text-sm tracking-[0.4em] uppercase">
            Heritage Dining
          </p>
          <div className="w-10 h-[1px] bg-gold/80" />
        </div>
        
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight">
          Heritage Cafe
          <span className="block text-gold-light mt-3 text-3xl md:text-5xl lg:text-6xl">& Resto</span>
        </h1>
        
        <p className="font-[family-name:var(--font-lato)] text-sm md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mt-4">
          Experience the finest Indonesian cuisine in an elegant setting, 
          where culinary artistry meets the glow of Bandung’s city lights.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link
            href="#menu"
            className="font-[family-name:var(--font-lato)] px-10 py-3 bg-gold text-white hover:bg-gold-dark transition-all duration-300 tracking-wider uppercase text-xs md:text-sm font-medium"
          >
            Explore Menu
          </Link>
          <Link
            href="#reservation"
            className="font-[family-name:var(--font-lato)] px-10 py-3 border border-white/40 text-white hover:bg-white/10 transition-all duration-300 tracking-wider uppercase text-xs md:text-sm font-medium"
          >
            Make Reservation
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <Link href="#about" aria-label="Scroll down">
          <svg
            className="w-6 h-6 text-gold"
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
