import Image from "next/image";

const events = [
  {
    title: "Wedding Celebrations",
    description:
      "Create unforgettable memories with our bespoke wedding packages. From intimate ceremonies to grand receptions, our team ensures every detail is perfect.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
    features: ["Up to 200 guests", "Custom menu", "Event coordinator"],
  },
  {
    title: "Corporate Events",
    description:
      "Impress clients and colleagues with our sophisticated venue. Ideal for business dinners, product launches, and corporate gatherings.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
    features: ["AV equipment", "Meeting rooms", "Tailored catering"],
  },
  {
    title: "Private Gatherings",
    description:
      "Celebrate life's milestones in style. Birthday parties, anniversaries, family reunions - we make every occasion special.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070",
    features: ["Flexible seating", "Decorations", "Dietary options"],
  },
  {
    title: "Mini Concerts",
    description:
      "Experience live music in an intimate setting. Our venue hosts exclusive performances with exceptional acoustics and ambiance.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074",
    features: ["Sound system", "Stage setup", "VIP seating"],
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 md:py-32 bg-background bg-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-lato)] text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Exclusive Venues
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Events & <span className="text-gold">Celebrations</span>
          </h2>
          <div className="w-20 h-[2px] bg-gold mx-auto mb-6" />
          <p className="font-[family-name:var(--font-lato)] text-charcoal/60 max-w-2xl mx-auto">
            Transform your special moments into extraordinary experiences at Heritage Cafe & Resto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                  {event.title}
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-white/70 text-xs md:text-sm leading-relaxed mb-2 md:mb-4 line-clamp-2 md:line-clamp-none">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {event.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="font-[family-name:var(--font-lato)] text-[10px] md:text-xs text-white border border-white/20 bg-charcoal/60 px-1.5 md:px-2 py-0.5 md:py-1"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block font-[family-name:var(--font-lato)] px-10 py-4 bg-gold text-white hover:bg-gold-dark transition-colors tracking-wider uppercase text-sm font-medium"
          >
            Inquire About Events
          </a>
        </div>
      </div>
    </section>
  );
}
