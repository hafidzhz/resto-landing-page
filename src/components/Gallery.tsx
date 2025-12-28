const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    span: "col-span-2 row-span-2",
    alt: "Restaurant interior ambiance",
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1887",
    span: "col-span-1 row-span-1",
    alt: "Signature plated cuisine",
  },
  {
    url: "https://images.unsplash.com/photo-1421622548261-c45bfe178854?q=80&w=1974",
    span: "col-span-1 row-span-1",
    alt: "Chef plating a dish",
  },
  {
    url: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2070",
    span: "col-span-1 row-span-2",
    alt: "Elegant dining room setting",
  },
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    span: "col-span-1 row-span-1",
    alt: "Restaurant atmosphere",
  },
  {
    url: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1974",
    span: "col-span-2 row-span-1",
    alt: "Chef's tasting table",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-lato)] text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Visual Journey
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gold">Gallery</span>
          </h2>
          <div className="w-20 h-[2px] bg-gold mx-auto mb-6" />
          <p className="font-[family-name:var(--font-lato)] text-white/60 max-w-2xl mx-auto">
            A glimpse into the world of Heritage Cafe & Resto
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${image.span} cursor-pointer`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${image.url}')` }}
              />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gold"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
