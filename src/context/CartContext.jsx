"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "terramore-cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    const timer = window.setTimeout(() => {
      if (!active) return;
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) setItems(JSON.parse(raw));
      } catch {
        setItems([]);
      }
      setReady(true);
    }, 0);
    return () => {
      active = false;
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // noop
    }
  }, [items, ready]);

  const addItem = (slug, qty = 1) =>
    setItems((prev) => {
      const found = prev.find((i) => i.slug === slug);
      if (found) {
        return prev.map((i) =>
          i.slug === slug ? { ...i, qty: i.qty + qty } : i,
        );
      }
      return [...prev, { slug, qty }];
    });

  const updateQty = (slug, qty) =>
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.slug !== slug)
        : prev.map((i) => (i.slug === slug ? { ...i, qty } : i)),
    );

  const removeItem = (slug) =>
    setItems((prev) => prev.filter((i) => i.slug !== slug));

  const clear = () => setItems([]);

  const count = items.reduce((acc, i) => acc + i.qty, 0);

  const value = useMemo(
    () => ({ items, addItem, updateQty, removeItem, clear, count, ready }),
    [items, ready, count],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart debe usarse dentro de <CartProvider>");
  }
  return ctx;
}