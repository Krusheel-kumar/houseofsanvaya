"use client";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { products, getDiscount } from "@/lib/data";
import { PlayCircle, ShieldCheck, Star, RefreshCcw, CreditCard, ChevronRight, ChevronLeft, Truck, Clock, HeadphonesIcon, Heart, Sparkles, Tag, Gift } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import SignatureCarousel from "@/components/ui/SignatureCarousel";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-8">
      
                        {/* Cinematic Premium Hero */}
      <section className="w-full relative h-[500px] md:h-[70vh] flex items-center justify-center overflow-hidden bg-[#171717]">
        
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
        >
          <source src="/assets/showcasevideo.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle Dark Overlay for perfect contrast (removes the foggy look) */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* Centered Elegant Content */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 flex flex-col items-center text-center text-white mt-8">
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-serif leading-tight mb-4 drop-shadow-lg tracking-wide">
            Tradition Meets <br />
            <span className="text-[#F4C7C5] italic font-light">Modern You</span>
          </h1>
          <p className="text-white/90 text-lg max-w-xl leading-relaxed mb-10 font-light drop-shadow-md">
            Elegant ethnic wear for every occasion. Curated with love, made for your story.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/sarees" className="bg-white text-[#171717] px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl tracking-wider uppercase text-xs">
              Shop Collection
            </Link>
            <button className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold border border-white/80 hover:bg-white/10 transition-colors text-white backdrop-blur-md tracking-wider uppercase text-xs">
              <PlayCircle className="w-4 h-4" /> Watch Video
            </button>
          </div>
        </div>
      </section>

      {/* Sleek Trust Badges Bar (Moved out of video to look cleaner) */}
      <div className="bg-theme-cream border-b border-theme-border py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-theme-border">
            <div className="flex flex-col items-center justify-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
              <Star className="w-5 h-5 text-theme-text" />
              <span className="text-[10px] font-bold text-theme-text uppercase tracking-widest">Premium Quality</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
              <ShieldCheck className="w-5 h-5 text-theme-text" />
              <span className="text-[10px] font-bold text-theme-text uppercase tracking-widest">Trendy Designs</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
              <RefreshCcw className="w-5 h-5 text-theme-text" />
              <span className="text-[10px] font-bold text-theme-text uppercase tracking-widest">7-Day Returns</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
              <CreditCard className="w-5 h-5 text-theme-text" />
              <span className="text-[10px] font-bold text-theme-text uppercase tracking-widest">Secure Payments</span>
            </div>
          </div>
        </div>
      </div>

            {/* Shop Our Collections */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-serif text-theme-text">Shop Our Collections</h2>
          <Link href="/sarees" className="text-sm font-medium flex items-center gap-1 hover:text-theme-text-muted transition-colors">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {[
            { name: 'Sarees', image: '/assets/sarees.png', href: '/sarees' },
            { name: 'Kurtis', image: '/assets/kurtasets.png', href: '#' },
            { name: 'Dresses', image: '/assets/dresses.png', href: '#' },
            { name: 'Co-ord Sets', image: '/assets/coord.png', href: '#' },
            { name: 'Lehenga Sets', image: '/assets/lehangaset.png', href: '#' },
            { name: 'Accessories', image: '/assets/accessories.png', href: '#' }
          ].map((cat) => (
            <Link key={cat.name} href={cat.href} className="group flex flex-col items-center gap-4">
              <div className="w-full rounded-t-[100px] overflow-hidden transition-transform group-hover:scale-95 bg-theme-cream">
                <img src={cat.image} alt={cat.name} className="w-full aspect-[3/4] object-cover" />
              </div>
              <span className="font-medium text-sm text-theme-text">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

                        {/* Dussehra Festive Special Showcase */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-14 mb-8">
        <div className="bg-gradient-to-r from-[#10251E] via-[#1b3d32] to-[#10251E] rounded-3xl p-6 sm:p-10 text-[#F8EEE7] border border-[#d4af37]/30 shadow-xl relative overflow-hidden">
          {/* Subtle Golden Glow / Festive Background Effect */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#F4C7C5]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d77f] text-xs font-semibold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Dussehra Mahotsav 2026
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide">
                Celebrate The Victory of Grace
              </h2>
              <p className="text-sm md:text-base text-[#F8EEE7]/80 mt-2 max-w-xl font-light">
                Handcrafted pure silk weaves, royal zari details, and regal silhouettes specially curated for Vijayadashami festivities.
              </p>
            </div>
            <Link href="/sarees" className="bg-[#f5d77f] hover:bg-[#ffe39c] text-[#10251E] font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg flex items-center gap-2 text-sm whitespace-nowrap">
              Explore Dussehra Edit <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Festive Promo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#f5d77f]/40 transition-all rounded-2xl p-6 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#f5d77f] tracking-widest uppercase">Pure Silks & Banarasi</span>
                  <Tag className="w-4 h-4 text-[#f5d77f]" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-2">Flat 25% OFF</h3>
                <p className="text-xs text-[#F8EEE7]/70 leading-relaxed mb-4">
                  Elevate your festive aura with auspicious golden zari and handcrafted drape collections.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs font-mono bg-white/10 text-[#f5d77f] px-3 py-1 rounded-md font-semibold tracking-wider">CODE: DUSSEHRA25</span>
                <Link href="/sarees" className="text-xs text-[#F8EEE7] group-hover:text-[#f5d77f] transition-colors flex items-center gap-1">
                  Shop <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#f5d77f]/40 transition-all rounded-2xl p-6 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#F4C7C5] tracking-widest uppercase">Festive Anarkalis & Sets</span>
                  <Sparkles className="w-4 h-4 text-[#F4C7C5]" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-2">Buy 2 Get 1 Free</h3>
                <p className="text-xs text-[#F8EEE7]/70 leading-relaxed mb-4">
                  Celebrate puja evenings with family in coordinated royal hand-embroidered suit ensembles.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs font-mono bg-white/10 text-[#F4C7C5] px-3 py-1 rounded-md font-semibold tracking-wider">AUTO APPLIED</span>
                <Link href="/sarees" className="text-xs text-[#F8EEE7] group-hover:text-[#F4C7C5] transition-colors flex items-center gap-1">
                  Shop <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#f5d77f]/40 transition-all rounded-2xl p-6 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#f5d77f] tracking-widest uppercase">Festive Shagun Gift</span>
                  <Gift className="w-4 h-4 text-[#f5d77f]" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-2">Free Silver Coin</h3>
                <p className="text-xs text-[#F8EEE7]/70 leading-relaxed mb-4">
                  Complimentary 999-purity certified Shagun Silver Coin on all festive orders above ₹2,999.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs font-mono bg-white/10 text-[#f5d77f] px-3 py-1 rounded-md font-semibold tracking-wider">MIN. ORDER ₹2,999</span>
                <Link href="/sarees" className="text-xs text-[#F8EEE7] group-hover:text-[#f5d77f] transition-colors flex items-center gap-1">
                  Claim <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-6 mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Banner 1: Festive Collection */}
          <div className="bg-[#10251E] rounded-2xl p-8 md:p-12 flex items-center relative overflow-hidden group min-h-[300px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img src="/assets/collection.png" alt="Festive Collection" className="w-full h-full object-cover object-[70%_center] group-hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#10251E] via-[#10251E]/80 to-transparent z-10"></div>
            
            {/* Text Content */}
            <div className="relative z-20 max-w-[250px] text-[#F8EEE7]">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#f5d77f] mb-1 block">Vijayadashami Edit</span>
              <h3 className="text-3xl font-serif mb-2 drop-shadow-sm">Festive Collection</h3>
              <p className="text-sm opacity-90 mb-6 leading-relaxed drop-shadow-sm">Celebrate every moment with timeless styles</p>
              <Link href="/sarees" className="bg-[#F8EEE7] text-[#171717] px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:bg-white transition-colors shadow-md">
                Shop Now <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* Banner 2: Flat 20% OFF */}
          <div className="bg-[#F4C7C5] rounded-2xl p-8 md:p-12 flex items-center relative overflow-hidden group min-h-[300px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img src="/assets/offer.png" alt="Flat 20% OFF" className="w-full h-full object-cover object-[70%_center] group-hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4C7C5] via-[#F4C7C5]/90 to-transparent z-10"></div>
            
            {/* Text Content */}
            <div className="relative z-20 max-w-[250px]">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#171717]/80 mb-1 block">Festival Exclusive</span>
              <div className="text-4xl font-serif mb-1 leading-tight text-[#171717] drop-shadow-sm">Flat<br/>20% OFF</div>
              <p className="text-sm opacity-90 mb-6 text-[#171717] font-medium drop-shadow-sm">On Selected Styles</p>
              <div className="bg-white/90 backdrop-blur-md border border-white px-4 py-2 rounded-md text-sm font-bold inline-block shadow-sm text-[#171717]">
                Use Code: POETIC20
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 3D Curved Perspective Showcase: Woven to Be Remembered */}
      <SignatureCarousel />

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#E6A122] uppercase tracking-widest block mb-1">Festive Season Edit</span>
            <h2 className="text-3xl md:text-4xl font-serif text-theme-text">New Arrivals</h2>
          </div>
          <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2 text-sm font-medium no-scrollbar whitespace-nowrap">
            {['All', 'Sarees', 'Kurtis', 'Dresses', 'Co-ord Sets', 'Accessories'].map((f) => (
              <button 
                key={f} 
                onClick={() => setSelectedCategory(f)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === f 
                    ? 'bg-theme-green text-[#F8EEE7] shadow-sm' 
                    : 'bg-theme-cream text-theme-text-muted hover:text-theme-text hover:bg-theme-border/60'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <Link href="/sarees" className="hidden md:flex text-sm font-medium items-center gap-1 hover:text-theme-text-muted transition-colors whitespace-nowrap">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden bg-theme-cream aspect-[3/4] shadow-sm">
                  <Link href={'/product/' + product.id} className="block w-full h-full overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                    />
                  </Link>
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white text-theme-text shadow-sm transition-transform active:scale-95 z-10">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <Link href={'/product/' + product.id}>
                    <h3 className="font-medium text-sm text-theme-text line-clamp-1 hover:underline">{product.name}</h3>
                  </Link>

                  {/* Elegant Product Rating Badge */}
                  <div className="flex items-center gap-1.5 mt-1 mb-1.5">
                    <div className="flex items-center gap-1 bg-[#10251E]/5 px-2 py-0.5 rounded-full border border-theme-border/60">
                      <Star className="w-3 h-3 fill-[#E6A122] text-[#E6A122]" />
                      <span className="text-[11px] font-bold text-theme-text">{product.rating.toFixed(1)}</span>
                    </div>
                    <span className="text-[11px] text-theme-text-muted">({product.reviews})</span>
                  </div>

                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="font-semibold text-theme-text">₹{product.currentPrice.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-theme-text-muted line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                    <span className="text-[10px] font-bold text-[#D3413E] bg-[#FDE2E1] px-1.5 py-0.5 rounded">{getDiscount(product.originalPrice, product.currentPrice)}% OFF</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-theme-green text-[#F8EEE7] py-8 px-4 sm:px-6 lg:px-8 mt-12 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <Truck className="w-8 h-8 opacity-80" />
            <div>
              <h4 className="font-medium text-sm">Free Shipping</h4>
              <p className="text-xs opacity-60">on orders above ₹999</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <CreditCard className="w-8 h-8 opacity-80" />
            <div>
              <h4 className="font-medium text-sm">Cash on Delivery</h4>
              <p className="text-xs opacity-60">Available</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <RefreshCcw className="w-8 h-8 opacity-80" />
            <div>
              <h4 className="font-medium text-sm">7-Day Easy Returns</h4>
              <p className="text-xs opacity-60">Hassle free</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <HeadphonesIcon className="w-8 h-8 opacity-80" />
            <div>
              <h4 className="font-medium text-sm">24/7 Support</h4>
              <p className="text-xs opacity-60">On WhatsApp</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}








