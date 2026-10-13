"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, ShoppingBag, Sparkles, ArrowRight } from "lucide-react";
import { useCartStore } from "@/lib/store";

interface BridalProduct {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
}

const bridalTickerPrices = [
  "₹23,700", "₹17,900", "₹24,200", "₹19,800", "₹22,400", "₹28,500", "₹31,000", "₹18,600"
];

const bridalItems: BridalProduct[] = [
  {
    id: "5",
    name: "Aanvikha Muhurtham Silk",
    subtitle: "Pure Kanjivaram · Korvai Border",
    price: 25600,
    image: "/assets/Luxurious Maroon Saree Display.png"
  },
  {
    id: "1",
    name: "Riva Temple Red Silk",
    subtitle: "Auspicious Bridal Crimson Weave",
    price: 21200,
    image: "/assets/Blush Floral Saree in Bloom.png"
  },
  {
    id: "3",
    name: "Vidhya Royal Violet Silk",
    subtitle: "Heavy Zari Pallu · Heritage Loom",
    price: 19800,
    image: "/assets/Emerald Gold Anarkali in Arched Atelier.png"
  },
  {
    id: "2",
    name: "Kumudini Temple Weave",
    subtitle: "Pure Mulberry Silk · Zari Buttas",
    price: 18900,
    image: "/assets/Embroidered Pastel Ensemble in Arched Studio.png"
  },
  {
    id: "4",
    name: "Meera Courtyard Brocade",
    subtitle: "Handspun Banarasi Kadwa Weave",
    price: 24500,
    image: "/assets/Floral Palazzo Ensemble in an Arched Studio.png"
  },
  {
    id: "6",
    name: "Sanskriti Royal Paithani",
    subtitle: "Peacock Motif Pure Zari Brocade",
    price: 27800,
    image: "/assets/sarees.png"
  }
];

export default function BridalCollectionSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const addToCart = useCartStore((state) => state.addToCart);
  const [addedId, setAddedId] = useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const handleQuickAdd = (item: BridalProduct) => {
    addToCart({
      id: item.id,
      name: item.name,
      currentPrice: item.price,
      originalPrice: Math.round(item.price * 1.25),
      category: "Sarees",
      size: "Free Size",
      color: "Bridal Red",
      image: item.image
    });
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#14060c] text-white overflow-hidden select-none">
      
      {/* Top Scalloped Wave SVG */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          className="relative block w-full h-[30px] sm:h-[45px] text-[#FFF9F5] fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,0 L0,0 Z"></path>
        </svg>
      </div>

      {/* Floating Animated Price Ticker at Top */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-6 flex items-center justify-between text-xs sm:text-sm font-mono text-[#f5d77f]/80 overflow-x-auto no-scrollbar gap-8 border-b border-white/10 opacity-75">
        {bridalTickerPrices.map((price, idx) => (
          <span key={idx} className="whitespace-nowrap tracking-wider">
            {price}
          </span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10">

          {/* Left Feature Editorial Card */}
          <div className="w-full lg:w-[380px] shrink-0 relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-t from-black via-black/40 to-transparent group border border-white/15">
            <img
              src="/assets/Luxurious Maroon Saree Display.png"
              alt="The Bridal Collection"
              className="w-full h-full min-h-[460px] lg:min-h-[540px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Deep Red / Black Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#14060c] via-black/30 to-transparent"></div>

            {/* Bottom Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between z-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5d77f] flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> ROYAL ATELIER
                </span>
                <h3 className="text-3xl font-serif text-white tracking-wide leading-tight">
                  View the <br /> collection
                </h3>
              </div>
              <Link
                href="/sarees"
                className="w-12 h-12 rounded-full bg-[#E5A93C] hover:bg-[#ffbe42] text-[#14060c] flex items-center justify-center transition-all duration-300 shadow-xl group-hover:rotate-45"
                aria-label="View Collection"
              >
                <ArrowRight className="w-5 h-5 font-bold" />
              </Link>
            </div>
          </div>

          {/* Right Product Slider Carousel */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            {/* Section Heading & Controls */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-[#FFF9F5]">
                  The Bridal Collection
                </h2>
                <p className="text-xs sm:text-sm text-white/60 font-light mt-1">
                  Heirloom silk sarees draped in heritage motifs & gold zari
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Product Cards Row */}
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1"
            >
              {bridalItems.map((item) => {
                const isAdded = addedId === item.id;
                return (
                  <div
                    key={item.id}
                    className="w-[230px] sm:w-[250px] shrink-0 rounded-xl overflow-hidden bg-white text-[#171717] shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group border border-white/20"
                  >
                    <Link href={`/product/${item.id}`} className="block overflow-hidden relative aspect-[3/4] bg-[#F8EEE7]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#14060c]/70 backdrop-blur-sm text-[10px] font-bold text-[#f5d77f] uppercase tracking-wider">
                        Pure Silk
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-4 flex flex-col justify-between flex-1 gap-3">
                      <div>
                        <Link href={`/product/${item.id}`}>
                          <h4 className="font-serif text-base font-semibold leading-snug line-clamp-1 hover:text-[#E5A93C] transition-colors">
                            {item.name}
                          </h4>
                        </Link>
                        <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                          {item.subtitle}
                        </p>
                        <div className="mt-2 text-sm font-bold text-[#171717]">
                          ₹{item.price.toLocaleString("en-IN")}
                        </div>
                      </div>

                      {/* Golden Mustard ADD TO CART Button Matching Reference */}
                      <button
                        onClick={() => handleQuickAdd(item)}
                        className={`w-full py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md ${
                          isAdded
                            ? "bg-[#10251E] text-white"
                            : "bg-[#E5A93C] hover:bg-[#d49729] text-[#14060c]"
                        }`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        {isAdded ? "Added ✓" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scalloped Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180">
        <svg
          viewBox="0 0 1440 60"
          className="relative block w-full h-[30px] sm:h-[45px] text-[#FFF9F5] fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,0 L0,0 Z"></path>
        </svg>
      </div>

    </section>
  );
}
