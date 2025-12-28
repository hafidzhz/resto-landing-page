import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070')`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/80" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-[1px] bg-gold" />
        </div>
        
        <p className="font-[family-name:var(--font-lato)] text-gold-light text-sm md:text-base tracking-[0.4em] uppercase mb-4 animate-fade-in-up">
          Heritage Dining
        </p>
        
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up delay-100">
          Heritage Cafe
          <span className="block text-gold mt-2">& Resto</span>
        </h1>
        
        <p className="font-[family-name:var(--font-lato)] text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          Experience the finest Indonesian cuisine in an elegant setting, 
          where culinary artistry meets breathtaking views of the golf course.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <Link
            href="#menu"
            className="font-[family-name:var(--font-lato)] px-10 py-4 bg-gold text-white hover:bg-gold-dark transition-all duration-300 tracking-wider uppercase text-sm font-medium"
          >
            Explore Menu
          </Link>
          <Link
            href="#reservation"
            className="font-[family-name:var(--font-lato)] px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 tracking-wider uppercase text-sm font-medium"
          >
            Make Reservation
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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
