"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

interface SignatureCard {
  id: string;
  productId: string;
  title: string;
  subtitle: string;
  price: string;
  oldPrice?: string;
  image: string;
}

const signatureCards: SignatureCard[] = [
  {
    id: "sig-1",
    productId: "1",
    title: "Aarunya Emerald",
    subtitle: "Pure Silk · Temple Border",
    price: "₹18,500",
    image: "/assets/Blush Floral Saree in Bloom.png"
  },
  {
    id: "sig-2",
    productId: "5",
    title: "Ruhani Temple Silk",
    subtitle: "Heritage Kanjivaram Weave",
    price: "₹16,400",
    image: "/assets/Luxurious Maroon Saree Display.png"
  },
  {
    id: "sig-3",
    productId: "3",
    title: "Saanjh Maroon Banarasi",
    subtitle: "Handspun Pure Zari",
    price: "₹24,000",
    image: "/assets/Emerald Gold Anarkali in Arched Atelier.png"
  },
  {
    id: "sig-4",
    productId: "2",
    title: "Prerna Festive Silk",
    subtitle: "Dual Tone · Contrast Border",
    price: "₹12,800",
    oldPrice: "₹16,500",
    image: "/assets/Embroidered Pastel Ensemble in Arched Studio.png"
  },
  {
    id: "sig-5",
    productId: "4",
    title: "Leela Courtyard Silk",
    subtitle: "Handpainted Floral Drape",
    price: "₹19,200",
    image: "/assets/Floral Palazzo Ensemble in an Arched Studio.png"
  },
  {
    id: "sig-6",
    productId: "6",
    title: "Virasat Royal Paithani",
    subtitle: "Pure Gold Brocade Pallu",
    price: "₹28,500",
    image: "/assets/sarees.png"
  }
];

export default function SignatureCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Dynamic 3D curved transformation calculation
  const getCardStyle = (index: number) => {
    const total = signatureCards.length;
    const center = (total - 1) / 2;
    const offset = index - center; // negative on left, 0 center, positive right

    // Parabolic arc displacement
    const rotateY = offset * 9; // -22deg to +22deg
    const rotateZ = offset * 1.5;
    const translateY = Math.abs(offset) * 14; // curved arc downwards on flanks
    const scale = hoveredIndex === index ? 1.08 : 1 - Math.abs(offset) * 0.02;
    const translateZ = hoveredIndex === index ? 90 : -Math.abs(offset) * 20;

    return {
      transform: `perspective(1200px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale})`,
      zIndex: hoveredIndex === index ? 40 : 20 - Math.abs(Math.round(offset)),
      transition: "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
    };
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[#FFF9F5] overflow-hidden select-none border-t border-b border-theme-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading Matching User's Screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-theme-text-muted flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" /> THE DRIFT SIGNATURES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-theme-text tracking-tight">
              Woven to Be <span className="italic font-light text-[#d4af37]">Remembered</span>
            </h2>
          </div>
          <Link 
            href="/sarees" 
            className="text-xs sm:text-sm font-medium uppercase tracking-widest text-theme-text hover:text-[#d4af37] transition-colors flex items-center gap-2 group w-fit pb-1 border-b border-theme-text/20 hover:border-[#d4af37]"
          >
            EXPLORE THE EDIT <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3D Arc Curved Carousel Container */}
        <div className="relative w-full pt-8 pb-16 flex items-center justify-center [perspective:1400px]">
          <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-5 w-full max-w-6xl mx-auto overflow-x-auto lg:overflow-visible no-scrollbar py-6 px-4">
            {signatureCards.map((card, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div
                  key={card.id}
                  style={getCardStyle(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative shrink-0 w-[200px] sm:w-[220px] md:w-[230px] aspect-[9/14] rounded-xl overflow-hidden cursor-pointer shadow-xl border border-black/10 group bg-[#171717]"
                >
                  <Link href={`/product/${card.productId}`} className="block w-full h-full">
                    {/* Background Image */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Editorial Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300"></div>

                    {/* Dark Vignette Border */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none"></div>

                    {/* Text Details in Card */}
                    <div className="absolute inset-x-0 bottom-0 p-4 text-left z-10">
                      <p className="text-[10px] uppercase tracking-wider text-[#f5d77f] font-medium drop-shadow-sm mb-1">
                        {card.subtitle}
                      </p>
                      <h3 className="font-serif text-base sm:text-lg text-white font-medium leading-snug drop-shadow-md mb-2 line-clamp-1">
                        {card.title}
                      </h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                          {card.price}
                        </span>
                        {card.oldPrice && (
                          <span className="text-[10px] text-white/60 line-through">
                            {card.oldPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Glow Highlight on Hover */}
                    <div className={`absolute inset-0 bg-[#d4af37]/10 transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
