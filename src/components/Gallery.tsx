"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "./ui/AnimatedSection";

interface GalleryImage {
  url: string;
  span: string;
  alt: string;
  category: "panorama" | "interior" | "atmosphere" | "cuisine";
}

const galleryImages: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
    span: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
    alt: "Panoramic day view from Dago highlands",
    category: "panorama",
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1887",
    span: "col-span-1 row-span-1",
    alt: "Signature plated Indonesian cuisine",
    category: "cuisine",
  },
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    span: "col-span-1 row-span-1",
    alt: "Classic modern fusion interior design",
    category: "interior",
  },
  {
    url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070",
    span: "col-span-1 row-span-1 md:row-span-2",
    alt: "Panoramic night view with city lights",
    category: "panorama",
  },
  {
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074",
    span: "col-span-1 row-span-1",
    alt: "Live music night performance",
    category: "atmosphere",
  },
  {
    url: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1974",
    span: "col-span-1 md:col-span-2 row-span-1",
    alt: "Chef preparing signature dish",
    category: "cuisine",
  },
  {
    url: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2070",
    span: "col-span-1 row-span-1",
    alt: "Elegant dining room setting",
    category: "interior",
  },
  {
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
    span: "col-span-1 row-span-1",
    alt: "Warm gathering atmosphere",
    category: "atmosphere",
  },
  {
    url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070",
    span: "col-span-1 row-span-1",
    alt: "Birthday celebration moment",
    category: "atmosphere",
  },
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    span: "col-span-1 row-span-1",
    alt: "Photogenic corner in restaurant",
    category: "interior",
  },
  {
    url: "https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=800",
    span: "col-span-1 row-span-1",
    alt: "Rendang Wagyu signature dish",
    category: "cuisine",
  },
  {
    url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070",
    span: "col-span-1 row-span-1",
    alt: "Romantic dinner setting",
    category: "atmosphere",
  },
];

const categoryTabs = [
  { id: "all", label: "All" },
  { id: "panorama", label: "Panorama" },
  { id: "interior", label: "Interior" },
  { id: "atmosphere", label: "Moments" },
  { id: "cuisine", label: "Cuisine" },
] as const;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<(typeof categoryTabs)[number]["id"]>("all");
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-forest-deep">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="font-[family-name:var(--font-lato)] text-heritage-gold text-sm tracking-[0.3em] uppercase mb-4">
            Visual Journey
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-6">
            Experience <span className="text-heritage-gold">Heritage</span>
          </h2>
          <div className="w-20 h-[2px] bg-heritage-gold mx-auto mb-6" />
          <p className="font-[family-name:var(--font-lato)] text-white/60 max-w-2xl mx-auto leading-relaxed">
            A glimpse into our world — from sunrise to city lights
          </p>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection animation="fade-up" delay={100} className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`font-[family-name:var(--font-lato)] px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm tracking-wider uppercase transition-all duration-300 ${
                activeCategory === tab.id
                  ? "bg-heritage-gold text-white shadow-lg"
                  : "border border-heritage-gold/50 text-white/80 hover:border-heritage-gold hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </AnimatedSection>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {filteredImages.map((image, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={(index % 4) * 50}
              className={`group relative overflow-hidden ${image.span} cursor-pointer`}
              role="button"
              tabIndex={0}
              onClick={() => setActiveImage(image)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveImage(image);
                }
              }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-forest-deep/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 text-heritage-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Instagram CTA */}
        <AnimatedSection animation="scale-in" delay={400} className="mt-16 text-center">
          <p className="font-[family-name:var(--font-lato)] text-white/60 text-sm mb-4">
            Follow us for more moments
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-lato)] text-heritage-gold hover:text-sunset-amber transition-colors tracking-wider uppercase text-sm"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @heritagecafebandung
          </a>
        </AnimatedSection>
      </div>

      {/* Lightbox Modal */}
      {activeImage ? (
        <div
          className="fixed inset-0 z-50 bg-forest-deep/95 backdrop-blur-sm flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-forest-deep"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-12 right-0 text-white/80 hover:text-white text-sm tracking-wider uppercase transition-colors"
              onClick={() => setActiveImage(null)}
            >
              Close
            </button>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
              <Image
                src={activeImage.url}
                alt={activeImage.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 900px"
              />
            </div>
            <div className="px-4 py-3 text-white/70 text-sm">
              {activeImage.alt}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
