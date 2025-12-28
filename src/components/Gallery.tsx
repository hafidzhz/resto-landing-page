const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070",
    span: "col-span-2 row-span-2",
    alt: "Golf course panoramic view",
  },
  {
    url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887",
    span: "col-span-1 row-span-1",
    alt: "Indonesian cuisine presentation",
  },
  {
    url: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1974",
    span: "col-span-1 row-span-1",
    alt: "Golf course green",
  },
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
    span: "col-span-1 row-span-2",
    alt: "Elegant dining room",
  },
  {
    url: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070",
    span: "col-span-1 row-span-1",
    alt: "Golf course landscape",
  },
  {
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974",
    span: "col-span-2 row-span-1",
    alt: "Restaurant terrace with golf view",
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
            A glimpse into the world of Sawangan Restaurant
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
