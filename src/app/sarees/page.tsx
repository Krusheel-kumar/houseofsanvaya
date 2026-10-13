import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { products, getDiscount } from "@/lib/data";
import { Filter, ChevronRight, Heart, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SareesPage() {
  const sarees = products.filter(p => p.category === 'Sarees');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
      {/* Breadcrumb */}
      <div className="text-xs text-theme-text-muted flex items-center gap-2">
        <Link href="/" className="hover:text-theme-text">Home</Link>
        <span>/</span>
        <span className="text-theme-text">Sarees</span>
      </div>

      {/* Banner */}
      <div className="w-full relative h-[200px] md:h-[300px] rounded-2xl overflow-hidden flex items-center p-8 md:p-12">
        <ImagePlaceholder aspectRatio="wide" className="absolute inset-0 w-full h-full border-none" label="Category Banner" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-theme-text mb-2">Sarees</h1>
          <p className="text-theme-text-muted">Grace in every drape</p>
        </div>
      </div>

      {/* Filters & Sort */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-b border-theme-border">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {['All', 'Organza', 'Silk', 'Georgette', 'Chiffon'].map((f, i) => (
            <button key={f} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${i === 0 ? 'bg-theme-text text-[#F8EEE7]' : 'bg-theme-cream text-theme-text-muted hover:bg-theme-border'}`}>
              {f}
            </button>
          ))}
          <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-theme-border bg-theme-cream text-theme-text hover:bg-theme-border whitespace-nowrap ml-2">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-6 text-sm">
          <span className="text-theme-text-muted font-medium">{sarees.length} Products</span>
          <div className="flex items-center gap-2">
            <span className="text-theme-text-muted">Sort by:</span>
            <select className="bg-transparent font-medium text-theme-text focus:outline-none cursor-pointer">
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {sarees.map((product) => (
          <div key={product.id} className="group flex flex-col gap-3">
            <div className="relative rounded-2xl overflow-hidden bg-theme-cream aspect-[3/4] shadow-sm">
              <Link href={`/product/${product.id}`} className="block w-full h-full overflow-hidden">
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
              <Link href={`/product/${product.id}`}>
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
                <span className="text-[10px] font-bold text-[#D3413E] bg-[#FDE2E1] px-1.5 py-0.5 rounded">
                  {getDiscount(product.originalPrice, product.currentPrice)}% OFF
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

