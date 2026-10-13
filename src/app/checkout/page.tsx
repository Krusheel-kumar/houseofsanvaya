"use client";

import { CheckCircle2, ChevronRight, Truck, Package, Home } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useCartStore } from "@/lib/store";

export default function CheckoutPage() {
  const [isOrdered, setIsOrdered] = useState(false);
  const { items, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const subtotal = items.reduce((acc, item) => acc + (item.currentPrice * item.qty), 0);
  const discount = subtotal > 0 ? Math.min(subtotal, 440) : 0; 
  const total = subtotal - discount;

  const handlePlaceOrder = () => {
    setIsOrdered(true);
    clearCart();
  };

  if (!mounted) return null;

  if (isOrdered) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 flex flex-col items-center text-center min-h-[60vh]">
        <div className="w-20 h-20 bg-[#FDE2E1] rounded-full flex items-center justify-center mb-6 shadow-sm">
          <CheckCircle2 className="w-10 h-10 text-[#D3413E]" />
        </div>
        <h1 className="text-3xl md:text-4xl font-serif text-theme-text mb-3">Order Placed Successfully!</h1>
        <p className="text-sm font-medium text-theme-text mb-12">Your order #POE128496 has been confirmed.</p>

        <div className="w-full relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-theme-border -translate-y-1/2 z-0"></div>
          <div className="relative z-10 flex justify-between">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#FDE2E1] flex items-center justify-center border-4 border-[#FFF9F5]"><CheckCircle2 className="w-5 h-5 text-[#D3413E]" /></div>
              <span className="text-[10px] font-bold text-[#D3413E] uppercase tracking-wider">Order<br/>Placed</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-theme-cream flex items-center justify-center border-4 border-[#FFF9F5]"><Package className="w-5 h-5 text-theme-text-muted" /></div>
              <span className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider">Packed</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-theme-cream flex items-center justify-center border-4 border-[#FFF9F5]"><Truck className="w-5 h-5 text-theme-text-muted" /></div>
              <span className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider">Shipped</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-theme-cream flex items-center justify-center border-4 border-[#FFF9F5]"><Home className="w-5 h-5 text-theme-text-muted" /></div>
              <span className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider">Delivered</span>
            </div>
          </div>
        </div>
        
        <Link href="/" className="text-sm font-semibold flex items-center gap-1 hover:text-theme-text-muted transition-colors mb-12 tracking-wide">
          Continue Shopping <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-8 min-h-[60vh]">
      <h1 className="text-3xl font-serif text-theme-text">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        <div className="flex-[2] flex flex-col gap-8">
          <div className="space-y-4">
            <h2 className="font-serif text-xl text-theme-text pb-2 border-b border-theme-border">1. Contact Information</h2>
            <div className="space-y-4">
               <input type="email" placeholder="Email Address" defaultValue="customer@example.com" className="w-full px-4 py-3 rounded-lg border border-theme-border bg-white text-sm focus:outline-none focus:border-theme-text" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-serif text-xl text-theme-text pb-2 border-b border-theme-border">2. Shipping Address</h2>
            <div className="grid grid-cols-2 gap-4">
               <input type="text" placeholder="First Name" defaultValue="Jane" className="w-full px-4 py-3 rounded-lg border border-theme-border bg-white text-sm focus:outline-none focus:border-theme-text" />
               <input type="text" placeholder="Last Name" defaultValue="Doe" className="w-full px-4 py-3 rounded-lg border border-theme-border bg-white text-sm focus:outline-none focus:border-theme-text" />
               <input type="text" placeholder="Address" defaultValue="123 Fashion Street" className="col-span-2 w-full px-4 py-3 rounded-lg border border-theme-border bg-white text-sm focus:outline-none focus:border-theme-text" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-serif text-xl text-theme-text pb-2 border-b border-theme-border">3. Payment Method</h2>
            <div className="space-y-3">
               <label className="flex items-center gap-3 p-4 border border-theme-text rounded-lg bg-theme-cream cursor-pointer">
                 <input type="radio" name="payment" defaultChecked className="accent-theme-text w-4 h-4" />
                 <span className="text-sm font-medium">Credit / Debit Card</span>
               </label>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-theme-cream p-6 rounded-2xl border border-theme-border sticky top-24">
            <h2 className="font-serif text-xl mb-4 text-theme-text">Order Summary</h2>
            <div className="space-y-3 text-sm border-b border-theme-border pb-4 mb-4">
              <div className="flex justify-between text-theme-text-muted"><span>Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div>
              <div className="flex justify-between text-theme-green font-medium"><span>Discount</span><span>-₹{discount.toLocaleString('en-IN')}</span></div>
            </div>
            <div className="flex justify-between items-center font-bold text-xl text-theme-text mb-8">
              <span>Total Payable</span><span>₹{total.toLocaleString('en-IN')}</span>
            </div>
            <button onClick={handlePlaceOrder} className="w-full block bg-theme-green text-[#F8EEE7] py-4 rounded-full font-semibold text-center hover:bg-theme-green/90 transition-colors shadow-lg tracking-wide text-sm">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}