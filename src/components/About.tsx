import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream bg-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative mx-4 md:mx-0">
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full border-2 border-gold/30" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
                alt="Restaurant ambiance"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gold p-4 md:p-8">
              <p className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal">
                15+
              </p>
              <p className="font-[family-name:var(--font-lato)] text-sm text-charcoal/80 tracking-wider uppercase">
                Years of Excellence
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="font-[family-name:var(--font-lato)] text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Where Tradition Meets{" "}
              <span className="text-gold">Elegance</span>
            </h2>
            <div className="w-20 h-[2px] bg-gold mb-8" />
            
            <p className="font-[family-name:var(--font-lato)] text-charcoal/70 leading-relaxed mb-6">
              Nestled beside the pristine greens of the golf course, Heritage Cafe & Resto 
              offers an unparalleled dining experience that celebrates the rich heritage 
              of Indonesian cuisine. Our master chefs craft each dish with passion, 
              using traditional recipes passed down through generations.
            </p>
            
            <p className="font-[family-name:var(--font-lato)] text-charcoal/70 leading-relaxed mb-8">
              Whether you&apos;re seeking an intimate dinner for two, a memorable gathering 
              with loved ones, or an exclusive venue for your special celebration, 
              Heritage Cafe & Resto provides the perfect backdrop for life&apos;s precious moments.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-gold">
                  50+
                </p>
                <p className="font-[family-name:var(--font-lato)] text-xs text-charcoal/60 tracking-wider uppercase mt-1">
                  Menu Items
                </p>
              </div>
              <div className="text-center">
                <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-gold">
                  200+
                </p>
                <p className="font-[family-name:var(--font-lato)] text-xs text-charcoal/60 tracking-wider uppercase mt-1">
                  Seat Capacity
                </p>
              </div>
              <div className="text-center">
                <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-gold">
                  5★
                </p>
                <p className="font-[family-name:var(--font-lato)] text-xs text-charcoal/60 tracking-wider uppercase mt-1">
                  Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
