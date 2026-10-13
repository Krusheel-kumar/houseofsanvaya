"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, Heart, User, ShoppingBag, Menu } from 'lucide-react';
import { useCartStore } from '@/lib/store';

export function Header() {
  const items = useCartStore((state) => state.items);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const cartCount = items.reduce((acc, item) => acc + item.qty, 0);

  return (
    <>
      <div className="bg-theme-green text-[#F8EEE7] text-center text-xs py-2 px-4 font-sans flex justify-center items-center gap-2">
        <span className="hidden sm:inline">✨</span>
        <span>✨ Dussehra Mahotsav Special: Flat 25% OFF with code <strong>DUSSEHRA25</strong> | Free Silver Coin on orders above ₹2,999 ✨</span>
        <span className="hidden sm:inline">✨</span>
      </div>
      <header className="bg-theme-cream border-b border-theme-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center lg:hidden">
            <button className="p-2 -ml-2 text-theme-text">
              <Menu className="w-5 h-5" />
            </button>
          </div>

                              <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="/" className="flex items-center group py-1">
              <img 
                src="/assets/luxury-logo-transparent.png" 
                alt="House of Sanvaya" 
                className="h-10 sm:h-12 w-auto max-w-[180px] sm:max-w-[230px] object-contain transition-transform group-hover:scale-105" 
              />
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-8">
            {['Home', 'New Arrivals', 'Sarees', 'Dresses', 'Kurtis', 'Sets', 'Accessories', 'Sale'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Sarees' ? '/sarees' : (item === 'Home' ? '/' : '#')} 
                className="text-sm font-medium text-theme-text-muted hover:text-theme-text transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4 sm:space-x-5 text-theme-text">
            <button className="hidden sm:block hover:opacity-70"><Search className="w-5 h-5" /></button>
            <button className="hover:opacity-70"><Heart className="w-5 h-5" /></button>
            <button className="hidden sm:block hover:opacity-70"><User className="w-5 h-5" /></button>
            <Link href="/cart" className="relative hover:opacity-70">
              <ShoppingBag className="w-5 h-5" />
              {mounted && cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#D3413E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

