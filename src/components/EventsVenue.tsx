import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./ui/AnimatedSection";

interface EventType {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  capacity: string;
  isFeatured?: boolean;
}

const events: EventType[] = [
  {
    id: "wedding",
    title: "Your Dream Wedding, Elevated",
    description:
      "Exchange vows with the Bandung skyline as your witness. Our panoramic venue offers an unforgettable setting for both intimate ceremonies and grand receptions.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
    features: [
      "Garden ceremony option",
      "Indoor reception",
      "Custom catering",
      "Event coordinator",
    ],
    capacity: "50-200 guests",
    isFeatured: true,
  },
  {
    id: "corporate",
    title: "Impress with Views",
    description:
      "Whether it's a crucial client dinner, product launch, or team celebration, our sophisticated venue combines professionalism with the relaxed Bandung highland atmosphere.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
    features: [
      "AV equipment",
      "Meeting layouts",
      "Customized menus",
      "Convenient access",
    ],
    capacity: "20-100 guests",
  },
  {
    id: "live-music",
    title: "Intimate Performances",
    description:
      "Every weekend, we transform into a stage for acoustic artists, jazz ensembles, and local talents. Good music, great food, unforgettable nights.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074",
    features: [
      "Quality sound system",
      "Intimate seating",
      "Bar service",
      "Artist partnerships",
    ],
    capacity: "80-150 guests",
  },
  {
    id: "community",
    title: "Gathering the Community",
    description:
      "We believe in bringing people together. From cultural exhibitions to charity events, Heritage is a space for Bandung's creative and caring community.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070",
    features: [
      "Flexible layout",
      "Cultural event support",
      "Local partnerships",
    ],
    capacity: "50-150 guests",
  },
  {
    id: "private",
    title: "Private Parties",
    description:
      "Celebrate life's milestones in style. Birthday parties, anniversaries, family reunions - we make every occasion special with personalized attention.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070",
    features: [
      "Flexible seating",
      "Decorations",
      "Dietary options",
      "Custom menus",
    ],
    capacity: "10-50 guests",
  },
  {
    id: "birthdays",
    title: "Birthdays & Milestones",
    description:
      "Make your special day unforgettable with our dedicated team handling every detail, from decorations to custom cakes and personalized menus.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070",
    features: [
      "Custom decorations",
      "Personalized cakes",
      "Photo opportunities",
      "Flexible timing",
    ],
    capacity: "10-80 guests",
  },
];

export default function EventsVenue() {
  const featuredEvent = events.find((event) => event.isFeatured);
  const otherEvents = events.filter((event) => !event.isFeatured);

  return (
    <section id="events" className="py-24 md:py-32 bg-background bg-pattern">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="font-[family-name:var(--font-lato)] text-heritage-gold text-sm tracking-[0.3em] uppercase mb-4">
            Host Your Occasion
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-forest-deep mb-6">
            Let Heritage Be the <span className="text-heritage-gold">Backdrop</span>
          </h2>
          <div className="w-20 h-[2px] bg-heritage-gold mx-auto mb-6" />
          <p className="font-[family-name:var(--font-lato)] text-forest-deep/70 max-w-2xl mx-auto leading-relaxed">
            From intimate celebrations to grand gatherings, let Heritage be the stage for
            your story. We'll handle the details, you create the memories.
          </p>
        </AnimatedSection>

        {/* Featured Event (Wedding) */}
        {featuredEvent && (
          <AnimatedSection animation="fade-up" delay={100} className="mb-16">
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl group">
              <Image
                src={featuredEvent.image}
                alt={featuredEvent.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-3xl">
                  <div className="inline-block bg-heritage-gold text-white text-xs font-[family-name:var(--font-lato)] tracking-wider uppercase px-3 py-1 rounded mb-4">
                    Featured
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
                    {featuredEvent.title}
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-white/80 text-base md:text-lg leading-relaxed mb-6">
                    {featuredEvent.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {featuredEvent.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="font-[family-name:var(--font-lato)] text-xs text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-[family-name:var(--font-lato)] text-white/70 text-sm">
                      Capacity: {featuredEvent.capacity}
                    </span>
                    <Link
                      href="#contact"
                      className="inline-block font-[family-name:var(--font-lato)] px-8 py-3 bg-heritage-gold text-white hover:bg-sunset-amber transition-all duration-300 tracking-wider uppercase text-sm font-medium shadow-lg hover:shadow-xl"
                    >
                      Plan Your Wedding
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Other Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {otherEvents.map((event, index) => (
            <AnimatedSection
              key={event.id}
              animation="fade-up"
              delay={(index % 3) * 100}
              className="group"
            >
              <div className="relative h-64 overflow-hidden rounded-lg shadow-lg mb-4">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent" />
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-forest-deep mb-2">
                  {event.title}
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-forest-deep/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {event.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="font-[family-name:var(--font-lato)] text-xs text-forest-deep/60 bg-cream-warm px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-forest-deep/10">
                  <span className="font-[family-name:var(--font-lato)] text-xs text-forest-deep/60">
                    {event.capacity}
                  </span>
                  <Link
                    href="#contact"
                    className="font-[family-name:var(--font-lato)] text-xs text-heritage-gold hover:text-sunset-amber tracking-wider uppercase transition-colors"
                  >
                    Inquire →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="scale-in" delay={400} className="mt-16 text-center">
          <div className="bg-forest-deep rounded-2xl p-8 md:p-12">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mb-4">
              Planning Something Special?
            </h3>
            <p className="font-[family-name:var(--font-lato)] text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
              Let's talk about making your vision a reality. Our experienced team is here to
              help you create an unforgettable event.
            </p>
            <Link
              href="#contact"
              className="inline-block font-[family-name:var(--font-lato)] px-10 py-4 bg-heritage-gold text-white hover:bg-sunset-amber transition-all duration-300 tracking-wider uppercase text-sm font-medium shadow-lg hover:shadow-xl"
            >
              Inquire About Your Event
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
