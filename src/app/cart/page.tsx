"use client";

import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { useCartStore } from "@/lib/store";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CartPage() {
  const { items, removeFromCart, updateQty } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="max-w-4xl mx-auto px-4 py-16 text-center min-h-[60vh]">Loading...</div>;

  const subtotal = items.reduce((acc, item) => acc + (item.currentPrice * item.qty), 0);
  const discount = subtotal > 0 ? Math.min(subtotal, 440) : 0; // Simple demo discount
  const total = subtotal - discount;

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center min-h-[60vh] flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-serif text-theme-text">Your Cart is Empty</h1>
        <p className="text-theme-text-muted">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/sarees" className="bg-theme-green text-[#F8EEE7] px-8 py-3 rounded-full font-medium mt-4 hover:bg-theme-green/90 transition-colors shadow-lg">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-8 min-h-[60vh]">
      <h1 className="text-3xl md:text-4xl font-serif text-theme-text">Your Cart <span className="text-lg text-theme-text-muted font-sans font-normal">({items.length} items)</span></h1>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        <div className="flex-[2] flex flex-col gap-6">
          {items.map((item) => (
            <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 border-b border-theme-border pb-6">
              <Link href={`/product/${item.id}`} className="w-24 md:w-32 aspect-[3/4] rounded-lg overflow-hidden shrink-0 bg-theme-cream shadow-sm">
                <img src={item.image || "/assets/sarees.png"} alt={item.name} className="w-full h-full object-cover object-top" />
              </Link>
              <div className="flex flex-col flex-1 py-1 justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <Link href={`/product/${item.id}`}>
                      <h3 className="font-medium text-theme-text hover:underline">{item.name}</h3>
                    </Link>
                    <button 
                      onClick={() => removeFromCart(item.id, item.size, item.color)}
                      className="text-theme-text-muted hover:text-[#D3413E] transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-theme-text-muted mt-1">{item.color} | {item.size}</p>
                </div>
                
                <div className="flex justify-between items-end">
                  <span className="font-bold text-theme-text">₹{item.currentPrice.toLocaleString('en-IN')}</span>
                  <div className="flex items-center border border-theme-border rounded-lg bg-theme-cream h-8">
                    <button 
                      onClick={() => updateQty(item.id, item.size, item.color, -1)}
                      className="px-3 text-lg hover:bg-white transition-colors rounded-l-lg h-full flex items-center justify-center text-theme-text"
                    >−</button>
                    <span className="w-8 text-center text-sm font-medium text-theme-text">{item.qty}</span>
                    <button 
                      onClick={() => updateQty(item.id, item.size, item.color, 1)}
                      className="px-3 text-lg hover:bg-white transition-colors rounded-r-lg h-full flex items-center justify-center text-theme-text"
                    >+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1">
          <div className="bg-theme-cream p-6 rounded-2xl border border-theme-border sticky top-24">
            <h2 className="font-serif text-xl mb-4 text-theme-text">Order Summary</h2>
            
            <div className="mb-6">
              <label className="text-xs font-medium text-theme-text mb-2 block">Have a coupon code?</label>
              <div className="flex gap-2">
                <input type="text" placeholder="Enter code" defaultValue="POETIC20" className="flex-1 px-4 py-2.5 rounded-lg border border-theme-border bg-white text-sm focus:outline-none focus:border-theme-text uppercase" />
                <button className="bg-theme-text text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-theme-text/90">Apply</button>
              </div>
            </div>

            <div className="space-y-3 text-sm border-b border-theme-border pb-4 mb-4">
              <div className="flex justify-between text-theme-text-muted">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-theme-green font-medium">
                  <span>Discount (POETIC20)</span>
                  <span>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-theme-text-muted">
                <span>Shipping</span>
                <span className="text-theme-green font-medium">FREE</span>
              </div>
            </div>

            <div className="flex justify-between items-center font-bold text-xl text-theme-text mb-8">
              <span>Total</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>

            <Link href="/checkout" className="w-full block bg-theme-green text-[#F8EEE7] py-4 rounded-full font-semibold text-center hover:bg-theme-green/90 transition-colors shadow-lg tracking-wide text-sm">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
