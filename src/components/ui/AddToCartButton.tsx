"use client";
import React, { useState } from 'react';
import { useCartStore } from '@/lib/store';

export default function AddToCartButton({ product }: { product: any }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      currentPrice: product.currentPrice,
      originalPrice: product.originalPrice,
      category: product.category,
      image: product.image,
      size: 'Free Size',
      color: 'Pink'
    }, 1);
    
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button 
      onClick={handleAdd}
      className={`flex-1 py-4 rounded-full font-semibold text-center transition-colors shadow-lg tracking-wide text-sm ${
        added ? 'bg-theme-green/80 text-[#F8EEE7]' : 'bg-theme-green text-[#F8EEE7] hover:bg-theme-green/90'
      }`}
    >
      {added ? 'Added to Cart ✓' : 'Add to Cart'}
    </button>
  );
}

