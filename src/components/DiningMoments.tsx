"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./ui/AnimatedSection";

interface DiningMoment {
  id: string;
  title: string;
  timeOfDay: "morning" | "afternoon" | "evening" | "anytime";
  icon: string;
  tagline: string;
  description: string;
  capacity: string;
  idealFor: string[];
  image: string;
}

const diningMoments: DiningMoment[] = [
  {
    id: "highland-breakfast",
    title: "Highland Breakfast",
    timeOfDay: "morning",
    icon: "☀️",
    tagline: "Sunrise views and fresh coffee",
    description:
      "Start your day with cool mountain air, panoramic vistas, and our signature breakfast spread featuring local ingredients.",
    capacity: "2-6 guests",
    idealFor: ["Early risers", "Business breakfast", "Family morning"],
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070",
  },
  {
    id: "casual-lunch",
    title: "Casual Lunch",
    timeOfDay: "afternoon",
    icon: "☕",
    tagline: "Light, airy, perfect for meetings",
    description:
      "Enjoy a relaxed afternoon with light bites and refreshing beverages in our sunlit dining area.",
    capacity: "2-8 guests",
    idealFor: ["Business meetings", "Friendly catch-ups", "Solo dining"],
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974",
  },
  {
    id: "romantic-dinner",
    title: "Romantic Dinner",
    timeOfDay: "evening",
    icon: "🌙",
    tagline: "City lights and candlelit tables",
    description:
      "An intimate evening with panoramic night views, soft music, and flavors designed for two.",
    capacity: "2-4 guests",
    idealFor: ["Date night", "Anniversary", "Proposal"],
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070",
  },
  {
    id: "family-gathering",
    title: "Family Gathering",
    timeOfDay: "anytime",
    icon: "👨‍👩‍👧‍👦",
    tagline: "Warm space for multi-generation meals",
    description:
      "Comfortable seating and a welcoming atmosphere perfect for creating memories with loved ones.",
    capacity: "6-12 guests",
    idealFor: ["Family lunch", "Sunday dinner", "Special occasions"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
  },
  {
    id: "corporate-meeting",
    title: "Corporate Meeting",
    timeOfDay: "anytime",
    icon: "💼",
    tagline: "Professional yet relaxed",
    description:
      "Impress clients and colleagues with our sophisticated venue combining professionalism with the relaxed highland atmosphere.",
    capacity: "4-20 guests",
    idealFor: ["Client dinners", "Team celebrations", "Product launches"],
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069",
  },
  {
    id: "live-music-night",
    title: "Live Music Night",
    timeOfDay: "evening",
    icon: "🎸",
    tagline: "Acoustic performances",
    description:
      "Every weekend, we transform into a stage for acoustic artists and local talents. Good music, great food, unforgettable nights.",
    capacity: "80-150 guests",
    idealFor: ["Evening out", "Music lovers", "Social gatherings"],
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074",
  },
  {
    id: "celebration",
    title: "Celebration",
    timeOfDay: "anytime",
    icon: "🎉",
    tagline: "Milestone moments",
    description:
      "Birthdays, anniversaries, or any reason to celebrate — let us help you make it memorable.",
    capacity: "10-50 guests",
    idealFor: ["Birthdays", "Anniversaries", "Graduations"],
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070",
  },
];

export default function DiningMoments() {
  const [filter, setFilter] = useState<"all" | "morning" | "afternoon" | "evening" | "anytime">("all");

  const filteredMoments =
    filter === "all" ? diningMoments : diningMoments.filter((moment) => moment.timeOfDay === filter);

  const timeFilters = [
    { id: "all", label: "All Moments" },
    { id: "morning", label: "Morning" },
    { id: "afternoon", label: "Afternoon" },
    { id: "evening", label: "Evening" },
    { id: "anytime", label: "Anytime" },
  ] as const;

  return (
    <section id="moments" className="py-24 md:py-32 bg-background bg-pattern">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="font-[family-name:var(--font-lato)] text-heritage-gold text-sm tracking-[0.3em] uppercase mb-4">
            Every Occasion
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-forest-deep mb-6">
            Every Moment, <span className="text-heritage-gold">Perfectly Hosted</span>
          </h2>
          <div className="w-20 h-[2px] bg-heritage-gold mx-auto mb-6" />
          <p className="font-[family-name:var(--font-lato)] text-forest-deep/70 max-w-2xl mx-auto leading-relaxed">
            From the first light of breakfast to the last note of an evening performance —
            find your perfect moment at Heritage.
          </p>
        </AnimatedSection>

        {/* Time Filters */}
        <AnimatedSection animation="fade-up" delay={100} className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {timeFilters.map((timeFilter) => (
            <button
              key={timeFilter.id}
              onClick={() => setFilter(timeFilter.id)}
              className={`font-[family-name:var(--font-lato)] px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm tracking-wider uppercase transition-all duration-300 ${
                filter === timeFilter.id
                  ? "bg-heritage-gold text-white shadow-lg"
                  : "border border-heritage-gold/30 text-forest-deep/80 hover:border-heritage-gold hover:bg-heritage-gold/10"
              }`}
            >
              {timeFilter.label}
            </button>
          ))}
        </AnimatedSection>

        {/* Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredMoments.map((moment, index) => (
            <AnimatedSection
              key={moment.id}
              animation="fade-up"
              delay={(index % 3) * 100}
              className="group"
            >
              <div className="relative h-64 md:h-72 overflow-hidden rounded-lg shadow-lg mb-4">
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent" />
                <div className="absolute top-4 right-4 text-4xl">{moment.icon}</div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-forest-deep mb-2">
                  {moment.title}
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-heritage-gold text-sm tracking-wider uppercase mb-3">
                  {moment.tagline}
                </p>
                <p className="font-[family-name:var(--font-lato)] text-forest-deep/70 text-sm leading-relaxed mb-4">
                  {moment.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {moment.idealFor.slice(0, 3).map((item, idx) => (
                    <span
                      key={idx}
                      className="font-[family-name:var(--font-lato)] text-xs text-forest-deep/60 bg-cream-warm px-2 py-1 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-forest-deep/10">
                  <span className="font-[family-name:var(--font-lato)] text-xs text-forest-deep/60">
                    {moment.capacity}
                  </span>
                  <Link
                    href="#reservation"
                    className="font-[family-name:var(--font-lato)] text-xs text-heritage-gold hover:text-sunset-amber tracking-wider uppercase transition-colors"
                  >
                    Book This Moment →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="scale-in" delay={400} className="text-center mt-16">
          <Link
            href="#reservation"
            className="inline-block font-[family-name:var(--font-lato)] px-10 py-4 bg-heritage-gold text-white hover:bg-sunset-amber transition-all duration-300 tracking-wider uppercase text-sm font-medium shadow-lg hover:shadow-xl"
          >
            Plan Your Perfect Moment
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
