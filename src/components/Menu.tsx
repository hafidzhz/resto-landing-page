"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "./ui/AnimatedSection";

const menuCategories = [
  { id: "signatures", label: "Heritage Signatures" },
  { id: "nusantara", label: "Nusantara Journey" },
  { id: "modern", label: "Modern Plates" },
  { id: "desserts", label: "Sweet Endings" },
];

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  region: string;
  spiceLevel?: "mild" | "medium" | "spicy";
  dietary?: string[];
  isChefFavorite?: boolean;
}

const menuItems: Record<string, MenuItem[]> = {
  signatures: [
    {
      name: "Rendang Wagyu",
      description:
        "Premium wagyu beef slow-cooked in rich coconut and spice blend for 8 hours",
      price: "385.000",
      image: "https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=800",
      region: "PADANG",
      spiceLevel: "medium",
      dietary: ["GF"],
      isChefFavorite: true,
    },
    {
      name: "Bebek Betutu",
      description:
        "Balinese style duck marinated in traditional spice paste, wrapped in banana leaf",
      price: "425.000",
      image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=800",
      region: "BALI",
      spiceLevel: "mild",
      dietary: ["GF"],
      isChefFavorite: true,
    },
    {
      name: "Iga Bakar Madu",
      description:
        "Grilled beef ribs glazed with aromatic honey and Indonesian spices",
      price: "345.000",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
      region: "HERITAGE",
      spiceLevel: "mild",
      dietary: [],
    },
    {
      name: "Gurame Asam Manis",
      description:
        "Crispy gourami fish with sweet and sour sauce, served with jasmine rice",
      price: "295.000",
      image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?q=80&w=800",
      region: "JAVA",
      spiceLevel: "mild",
      dietary: [],
    },
  ],
  nusantara: [
    {
      name: "Lumpia Semarang",
      description:
        "Handcrafted spring rolls filled with bamboo shoots and prawns",
      price: "85.000",
      image: "https://images.unsplash.com/photo-1548507200-ebbbce498e1b?q=80&w=800",
      region: "JAVA",
      spiceLevel: "mild",
      dietary: ["V"],
    },
    {
      name: "Sate Lilit Bali",
      description:
        "Minced seafood satay wrapped around lemongrass skewers",
      price: "95.000",
      image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?q=80&w=800",
      region: "BALI",
      spiceLevel: "medium",
      dietary: ["GF"],
    },
    {
      name: "Gado-Gado Jakarta",
      description:
        "Fresh vegetables with homemade peanut sauce and prawn crackers",
      price: "75.000",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800",
      region: "JAVA",
      spiceLevel: "mild",
      dietary: ["V", "GF"],
    },
    {
      name: "Ayam Taliwang",
      description:
        "Grilled free-range chicken with spicy Lombok chili sauce",
      price: "185.000",
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800",
      region: "LOMBOK",
      spiceLevel: "spicy",
      dietary: ["GF"],
    },
  ],
  modern: [
    {
      name: "Nasi Goreng Heritage",
      description:
        "Signature fried rice with prawns, chicken satay, and fried egg",
      price: "165.000",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800",
      region: "MODERN FUSION",
      spiceLevel: "medium",
      dietary: [],
    },
    {
      name: "Sop Buntut",
      description:
        "Clear oxtail soup with aromatic spices, served with steamed rice",
      price: "245.000",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800",
      region: "HERITAGE",
      spiceLevel: "mild",
      dietary: ["GF"],
    },
    {
      name: "Mie Goreng Seafood",
      description:
        "Stir-fried noodles with prawns, squid, and fresh vegetables",
      price: "155.000",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800",
      region: "MODERN FUSION",
      spiceLevel: "medium",
      dietary: [],
    },
    {
      name: "Siomay Premium",
      description:
        "Steamed fish dumplings with tofu, served with peanut sauce",
      price: "85.000",
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800",
      region: "HERITAGE",
      spiceLevel: "mild",
      dietary: [],
    },
  ],
  desserts: [
    {
      name: "Es Cendol Durian",
      description:
        "Traditional cendol with premium D24 durian and palm sugar",
      price: "75.000",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800",
      region: "HERITAGE",
      spiceLevel: "mild",
      dietary: ["V"],
    },
    {
      name: "Klepon Cake",
      description:
        "Modern interpretation of traditional klepon in cake form",
      price: "85.000",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800",
      region: "MODERN FUSION",
      spiceLevel: "mild",
      dietary: ["V"],
    },
    {
      name: "Pisang Goreng Keju",
      description:
        "Crispy fried banana with vanilla ice cream and cheese sauce",
      price: "65.000",
      image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800",
      region: "HERITAGE",
      spiceLevel: "mild",
      dietary: ["V"],
    },
    {
      name: "Kue Lapis Legit",
      description:
        "Traditional thousand-layer spice cake, sliced to order",
      price: "95.000",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800",
      region: "HERITAGE",
      spiceLevel: "mild",
      dietary: ["V"],
    },
  ],
};

const getSpiceLevelIcon = (level?: string) => {
  switch (level) {
    case "mild":
      return "🌶️";
    case "medium":
      return "🌶️🌶️";
    case "spicy":
      return "🌶️🌶️🌶️";
    default:
      return null;
  }
};

const getRegionColor = (region: string) => {
  switch (region) {
    case "PADANG":
      return "bg-red-100 text-red-700 border-red-200";
    case "BALI":
      return "bg-purple-100 text-purple-700 border-purple-200";
    case "JAVA":
      return "bg-green-100 text-green-700 border-green-200";
    case "LOMBOK":
      return "bg-orange-100 text-orange-700 border-orange-200";
    case "HERITAGE":
      return "bg-amber-100 text-amber-700 border-amber-200";
    case "MODERN FUSION":
      return "bg-blue-100 text-blue-700 border-blue-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("signatures");

  return (
    <section id="menu" className="py-24 md:py-32 bg-forest-deep">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="font-[family-name:var(--font-lato)] text-heritage-gold text-sm tracking-[0.3em] uppercase mb-4">
            Taste the Archipelago
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-6">
            Signature Dishes from <span className="text-heritage-gold">Indonesia</span>
          </h2>
          <div className="w-20 h-[2px] bg-heritage-gold mx-auto mb-6" />
          <p className="font-[family-name:var(--font-lato)] text-white/60 max-w-2xl mx-auto leading-relaxed">
            From the fiery heat of Padang to the gentle sweetness of Java, our menu
            celebrates the diverse flavors that make Indonesian cuisine extraordinary.
            Each dish honors tradition while embracing modern presentation.
          </p>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection animation="fade-up" delay={100} className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`font-[family-name:var(--font-lato)] px-3 py-2 md:px-6 md:py-3 text-xs md:text-sm tracking-wider uppercase transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-heritage-gold text-white shadow-lg"
                  : "border border-heritage-gold/50 text-white/80 hover:border-heritage-gold hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </AnimatedSection>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {menuItems[activeCategory].map((item, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={(index % 2) * 100}
              className="group flex gap-3 md:gap-5 p-3 md:p-4 border border-heritage-gold/20 hover:border-heritage-gold/50 transition-all duration-300 bg-forest-deep/50 hover:bg-forest-deep/70"
            >
              <div className="relative w-20 h-20 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 80px, 128px"
                />
                {item.isChefFavorite && (
                  <div className="absolute top-1 left-1 bg-heritage-gold text-white text-[10px] px-1.5 py-0.5 rounded font-[family-name:var(--font-lato)] tracking-wider uppercase">
                    Chef's Pick
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-2 mb-1 md:mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-[family-name:var(--font-playfair)] text-base md:text-xl text-white group-hover:text-heritage-gold transition-colors">
                      {item.name}
                    </h3>
                    {item.spiceLevel && (
                      <span className="text-xs">{getSpiceLevelIcon(item.spiceLevel)}</span>
                    )}
                  </div>
                  <span className="font-[family-name:var(--font-lato)] text-white/90 font-medium text-xs md:text-base whitespace-nowrap">
                    IDR {item.price}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`font-[family-name:var(--font-lato)] text-[10px] md:text-xs px-2 py-0.5 border rounded ${getRegionColor(
                      item.region
                    )}`}
                  >
                    {item.region}
                  </span>
                  {item.dietary &&
                    item.dietary.map((diet, idx) => (
                      <span
                        key={idx}
                        className="font-[family-name:var(--font-lato)] text-[10px] text-white/60 bg-white/10 px-1.5 py-0.5 rounded"
                      >
                        {diet}
                      </span>
                    ))}
                </div>

                <p className="font-[family-name:var(--font-lato)] text-white/50 text-xs md:text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Footer Note */}
        <AnimatedSection animation="fade-up" delay={400} className="text-center mt-12">
          <p className="font-[family-name:var(--font-lato)] text-white/40 text-sm mb-4">
            * Prices are subject to 10% service charge and applicable taxes
          </p>
          <p className="font-[family-name:var(--font-lato)] text-white/40 text-xs mb-4">
            🌶️ Spice level: 🌶️ Mild | 🌶️🌶️ Medium | 🌶️🌶️🌶️ Spicy
          </p>
          <p className="font-[family-name:var(--font-lato)] text-white/40 text-xs">
            Dietary: V = Vegetarian | GF = Gluten Free
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
