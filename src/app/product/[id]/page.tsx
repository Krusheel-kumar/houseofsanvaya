import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { products, getDiscount } from "@/lib/data";
import { Heart, Star, ChevronDown, ShieldCheck, RefreshCcw, CreditCard, Truck } from "lucide-react";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/ui/AddToCartButton";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-12">
      <div className="text-xs text-theme-text-muted flex items-center gap-2">
        <Link href="/" className="hover:text-theme-text">Home</Link>
        <span>/</span>
        <span className="text-theme-text-muted">{product.category}</span>
        <span>/</span>
        <span className="text-theme-text line-clamp-1">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Gallery */}
        <div className="flex-1 flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 shrink-0 no-scrollbar">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`w-20 md:w-full aspect-[3/4] rounded-lg overflow-hidden shrink-0 border-2 ${i === 1 ? 'border-theme-text' : 'border-transparent cursor-pointer'}`}>
                {i === 1 ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover object-top" />
                ) : (
                  <ImagePlaceholder aspectRatio="portrait" label={`Thumb ${i}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex-1 relative rounded-2xl overflow-hidden bg-theme-cream aspect-[3/4] shadow-md">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover object-top" 
            />
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white text-theme-text shadow-sm transition-transform active:scale-95 z-10">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product Details Panel */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif text-theme-text mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 bg-[#10251E]/5 px-2.5 py-1 rounded-full border border-theme-border">
                <Star className="w-3.5 h-3.5 fill-[#E6A122] text-[#E6A122]" />
                <span className="text-xs font-bold text-theme-text">{product.rating.toFixed(1)}</span>
              </div>
              <span className="text-xs text-theme-text-muted">({product.reviews} Customer Ratings)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl font-bold text-theme-text">₹{product.currentPrice.toLocaleString('en-IN')}</span>
              <span className="text-base text-theme-text-muted line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              <span className="text-xs font-bold text-[#D3413E] bg-[#FDE2E1] px-2 py-0.5 rounded">
                {getDiscount(product.originalPrice, product.currentPrice)}% OFF
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-theme-text mb-3">Color: <span className="text-theme-text-muted">{product.color || 'Artisan Festive Edition'}</span></h4>
              <div className="flex gap-3">
                {['#F4C7C5', '#F8EEE7', '#A3B18A', '#10251E'].map((c, i) => (
                  <button key={c} className={`w-8 h-8 rounded-full border-2 ${i === 0 ? 'border-theme-text' : 'border-transparent'} flex items-center justify-center p-0.5`} style={{ backgroundColor: i === 0 ? 'transparent' : undefined }}>
                    <div className="w-full h-full rounded-full border border-black/10" style={{ backgroundColor: c }}></div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-theme-text mb-3">Quantity</h4>
              <div className="flex items-center border border-theme-border rounded-lg w-fit bg-theme-cream">
                <button className="px-4 py-2 text-xl hover:bg-theme-border transition-colors rounded-l-lg">−</button>
                <span className="w-10 text-center font-medium">1</span>
                <button className="px-4 py-2 text-xl hover:bg-theme-border transition-colors rounded-r-lg">+</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <AddToCartButton product={product} />
            <Link href="/checkout" className="flex-1 bg-theme-blush text-theme-text py-4 rounded-full font-semibold text-center hover:bg-[#EEB4B1] transition-colors shadow-lg tracking-wide text-sm">
              Buy Now
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-2 pt-4 pb-6 border-b border-theme-border text-center mt-4">
            <div className="flex flex-col items-center gap-2 text-xs text-theme-text-muted">
              <ShieldCheck className="w-6 h-6 text-theme-green" />
              <span>Premium<br/>Quality</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-xs text-theme-text-muted">
              <RefreshCcw className="w-6 h-6 text-theme-green" />
              <span>Easy<br/>Returns</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-xs text-theme-text-muted">
              <CreditCard className="w-6 h-6 text-theme-green" />
              <span>Secure<br/>Payments</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-xs text-theme-text-muted">
              <Truck className="w-6 h-6 text-theme-green" />
              <span>COD<br/>Available</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-b border-theme-border pb-4">
              <button className="flex items-center justify-between w-full font-medium text-sm text-theme-text">
                Product Details & Fabric
                <ChevronDown className="w-4 h-4 rotate-180" />
              </button>
              <div className="mt-4 text-sm text-theme-text-muted space-y-2">
                <p>{product.description || "Experience the sheer elegance of our premium luxury wear. Handcrafted with intricate festive details, curated for your story."}</p>
                <div className="pt-2 text-xs text-theme-text font-medium flex gap-4">
                  <span>Fabric: <strong>{product.fabric || 'Pure Artisan Blend'}</strong></span>
                  <span>Category: <strong>{product.category}</strong></span>
                </div>
              </div>
            </div>
            <div className="border-b border-theme-border pb-4">
              <button className="flex items-center justify-between w-full font-medium text-sm text-theme-text">
                Shipping & Returns
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
