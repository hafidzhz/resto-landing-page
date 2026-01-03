import Image from "next/image";
import AnimatedSection from "./ui/AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream-warm bg-pattern">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="font-[family-name:var(--font-lato)] text-heritage-gold text-sm tracking-[0.3em] uppercase mb-4">
            More Than a Restaurant
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-forest-deep mb-6">
            The Heritage <span className="text-heritage-gold">Experience</span>
          </h2>
          <div className="w-20 h-[2px] bg-heritage-gold mx-auto mb-6" />
          <p className="font-[family-name:var(--font-lato)] text-forest-deep/70 max-w-3xl mx-auto leading-relaxed">
            Nestled in the cool highlands of Dago, Heritage Cafe & Resto offers more than
            exceptional dining — it's a destination where panoramic views, timeless design,
            and warm community spirit come together.
          </p>
        </AnimatedSection>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Pillar 1: Panorama */}
          <AnimatedSection animation="fade-up" delay={100} className="group">
            <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-lg mb-6">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
                alt="Panoramic city views from Dago highlands"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent" />
              <div className="absolute top-4 left-4 text-4xl">🏔️</div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2">
                  Elevated Views
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-white/80 text-sm leading-relaxed">
                  Perched in Dago's green highlands, enjoy refreshing cool air and
                  uninterrupted vistas. Watch the city awaken at breakfast, unwind at
                  sunset, or fall in love with the sparkling lights below.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Pillar 2: Aesthetic */}
          <AnimatedSection animation="fade-up" delay={200} className="group">
            <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-lg mb-6">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
                alt="Classic modern fusion interior design"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent" />
              <div className="absolute top-4 left-4 text-4xl">🏛️</div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2">
                  Timeless Design
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-white/80 text-sm leading-relaxed">
                  Where classical elegance meets modern simplicity. Our thoughtfully
                  designed space offers soft lighting, spacious layouts, and countless
                  photogenic corners — effortlessly premium, never pretentious.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Pillar 3: Atmosphere */}
          <AnimatedSection animation="fade-up" delay={300} className="group">
            <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-lg mb-6">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
                alt="Warm gathering atmosphere with live music"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent" />
              <div className="absolute top-4 left-4 text-4xl">🎉</div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2">
                  Gathering Place
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-white/80 text-sm leading-relaxed">
                  More than meals — we host live music nights, cultural events,
                  community gatherings, and celebrations that become cherished
                  memories. A warm welcome awaits everyone.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Archipelago Cuisine Block */}
        <AnimatedSection animation="scale-in" delay={400} className="bg-forest-deep rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-[family-name:var(--font-lato)] text-heritage-gold text-sm tracking-[0.3em] uppercase mb-4">
                Our Culinary Philosophy
              </p>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-6">
                Archipelago on a Plate
              </h3>
              <p className="font-[family-name:var(--font-lato)] text-white/80 leading-relaxed mb-6">
                Our menu is a journey across Indonesia — from Padang's rich rendang to
                Bali's aromatic spices, reimagined with modern artistry while honoring
                ancestral wisdom. Each dish tells a story of our diverse culinary
                heritage.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-heritage-gold">
                    50+
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-xs text-white/60 tracking-wider uppercase mt-1">
                    Menu Items
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-heritage-gold">
                    200+
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-xs text-white/60 tracking-wider uppercase mt-1">
                    Seat Capacity
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-heritage-gold">
                    15+
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-xs text-white/60 tracking-wider uppercase mt-1">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1887"
                alt="Chef preparing signature Indonesian dish"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
