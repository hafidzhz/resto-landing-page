"use client";

import { useState } from "react";
import Image from "next/image";

const menuCategories = [
  { id: "signatures", label: "Signatures" },
  { id: "appetizers", label: "Appetizers" },
  { id: "mains", label: "Main Course" },
  { id: "desserts", label: "Desserts" },
];

const menuItems = {
  signatures: [
    {
      name: "Rendang Wagyu",
      description: "Premium wagyu beef slow-cooked in rich coconut and spice blend for 8 hours",
      price: "385.000",
      image: "https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=800",
    },
    {
      name: "Bebek Betutu",
      description: "Balinese style duck marinated in traditional spice paste, wrapped in banana leaf",
      price: "425.000",
      image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=800",
    },
    {
      name: "Iga Bakar Madu",
      description: "Grilled beef ribs glazed with aromatic honey and Indonesian spices",
      price: "345.000",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
    },
    {
      name: "Gurame Asam Manis",
      description: "Crispy gourami fish with sweet and sour sauce, served with jasmine rice",
      price: "295.000",
      image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?q=80&w=800",
    },
  ],
  appetizers: [
    {
      name: "Lumpia Semarang",
      description: "Handcrafted spring rolls filled with bamboo shoots and prawns",
      price: "85.000",
      image: "https://images.unsplash.com/photo-1548507200-ebbbce498e1b?q=80&w=800",
    },
    {
      name: "Sate Lilit Bali",
      description: "Minced seafood satay wrapped around lemongrass skewers",
      price: "95.000",
      image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?q=80&w=800",
    },
    {
      name: "Gado-Gado Jakarta",
      description: "Fresh vegetables with homemade peanut sauce and prawn crackers",
      price: "75.000",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800",
    },
    {
      name: "Siomay Premium",
      description: "Steamed fish dumplings with tofu, served with peanut sauce",
      price: "85.000",
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800",
    },
  ],
  mains: [
    {
      name: "Nasi Goreng Heritage",
      description: "Signature fried rice with prawns, chicken satay, and fried egg",
      price: "165.000",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800",
    },
    {
      name: "Sop Buntut",
      description: "Clear oxtail soup with aromatic spices, served with steamed rice",
      price: "245.000",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800",
    },
    {
      name: "Ayam Taliwang",
      description: "Grilled free-range chicken with spicy Lombok chili sauce",
      price: "185.000",
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800",
    },
    {
      name: "Mie Goreng Seafood",
      description: "Stir-fried noodles with prawns, squid, and fresh vegetables",
      price: "155.000",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800",
    },
  ],
  desserts: [
    {
      name: "Es Cendol Durian",
      description: "Traditional cendol with premium D24 durian and palm sugar",
      price: "75.000",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800",
    },
    {
      name: "Klepon Cake",
      description: "Modern interpretation of traditional klepon in cake form",
      price: "85.000",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800",
    },
    {
      name: "Pisang Goreng Keju",
      description: "Crispy fried banana with vanilla ice cream and cheese sauce",
      price: "65.000",
      image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800",
    },
    {
      name: "Kue Lapis Legit",
      description: "Traditional thousand-layer spice cake, sliced to order",
      price: "95.000",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800",
    },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("signatures");

  return (
    <section id="menu" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-lato)] text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Culinary Excellence
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gold">Menu</span>
          </h2>
          <div className="w-20 h-[2px] bg-gold mx-auto mb-6" />
          <p className="font-[family-name:var(--font-lato)] text-white/60 max-w-2xl mx-auto">
            Discover the authentic flavors of Indonesia, reimagined with modern elegance
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`font-[family-name:var(--font-lato)] px-3 py-2 md:px-6 md:py-3 text-xs md:text-sm tracking-wider uppercase transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gold text-white"
                  : "border border-gold/50 text-white/80 hover:border-gold hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div
              key={index}
              className="group flex gap-3 md:gap-5 p-3 md:p-4 border border-gold/20 hover:border-gold/50 transition-all duration-300 bg-charcoal/50"
            >
              <div className="relative w-20 h-20 md:w-32 md:h-32 flex-shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 80px, 128px"
                />
              </div>
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-2 mb-1 md:mb-2">
                  <h3 className="font-[family-name:var(--font-playfair)] text-base md:text-xl text-white group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-[family-name:var(--font-lato)] text-white/90 font-medium text-xs md:text-base whitespace-nowrap">
                    IDR {item.price}
                  </span>
                </div>
                <p className="font-[family-name:var(--font-lato)] text-white/50 text-xs md:text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-[family-name:var(--font-lato)] text-white/40 text-sm">
            * Prices are subject to 10% service charge and applicable taxes
          </p>
        </div>
      </div>
    </section>
  );
}
