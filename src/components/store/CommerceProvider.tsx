'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/lib/content';

type Item = { product: Product; quantity: number; variant?: string };
type Commerce = { items: Item[]; wishlist: string[]; isCartOpen: boolean; setCartOpen: (value: boolean) => void; add: (product: Product, variant?: string) => void; remove: (id: string, variant?: string) => void; update: (id: string, quantity: number, variant?: string) => void; toggleWishlist: (id: string) => void; count: number; subtotal: number };
const CommerceContext = createContext<Commerce | null>(null);
const read = <T,>(key: string, fallback: T): T => { try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; } catch { return fallback; } };

export function CommerceProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]); const [wishlist, setWishlist] = useState<string[]>([]); const [isCartOpen, setCartOpen] = useState(false); const [ready, setReady] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => { setItems(read<Item[]>('avnta-cart', [])); setWishlist(read<string[]>('avnta-wishlist', [])); setReady(true); }, 0); return () => window.clearTimeout(timer); }, []);
  useEffect(() => { if (ready) localStorage.setItem('avnta-cart', JSON.stringify(items)); }, [items, ready]);
  useEffect(() => { if (ready) localStorage.setItem('avnta-wishlist', JSON.stringify(wishlist)); }, [wishlist, ready]);
  const value = useMemo<Commerce>(() => ({ items, wishlist, isCartOpen, setCartOpen, add: (product, variant) => { setItems((prev) => { const found = prev.find((x) => x.product.id === product.id && x.variant === variant); return found ? prev.map((x) => x === found ? { ...x, quantity: x.quantity + 1 } : x) : [...prev, { product, quantity: 1, variant }]; }); setCartOpen(true); }, remove: (id, variant) => setItems((prev) => prev.filter((x) => !(x.product.id === id && x.variant === variant))), update: (id, quantity, variant) => setItems((prev) => prev.map((x) => x.product.id === id && x.variant === variant ? { ...x, quantity: Math.max(1, quantity) } : x)), toggleWishlist: (id) => setWishlist((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]), count: items.reduce((n, item) => n + item.quantity, 0), subtotal: items.reduce((n, item) => n + item.product.price * item.quantity, 0) }), [items, wishlist, isCartOpen]);
  return <CommerceContext.Provider value={value}>{children}</CommerceContext.Provider>;
}
export const useCommerce = () => { const context = useContext(CommerceContext); if (!context) throw new Error('CommerceProvider is required'); return context; };
