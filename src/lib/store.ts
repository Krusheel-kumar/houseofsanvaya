import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  currentPrice: number;
  originalPrice: number;
  image?: string;
  category: string;
  qty: number;
  size: string;
  color: string;
}

interface CartState {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'qty'>, qty?: number) => void;
  removeFromCart: (id: string, size: string, color: string) => void;
  updateQty: (id: string, size: string, color: string, delta: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addToCart: (item, qty = 1) => set((state) => {
        const existing = state.items.find(i => i.id === item.id && i.size === item.size && i.color === item.color);
        if (existing) {
          return { items: state.items.map(i => i === existing ? { ...i, qty: i.qty + qty } : i) };
        }
        return { items: [...state.items, { ...item, qty }] };
      }),
      removeFromCart: (id, size, color) => set((state) => ({
        items: state.items.filter(i => !(i.id === id && i.size === size && i.color === color))
      })),
      updateQty: (id, size, color, delta) => set((state) => ({
        items: state.items.map(i => {
          if (i.id === id && i.size === size && i.color === color) {
            return { ...i, qty: Math.max(1, i.qty + delta) };
          }
          return i;
        })
      })),
      clearCart: () => set({ items: [] })
    }),
    {
      name: 'poetic-cart-storage',
    }
  )
);
