"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/products";

function formatPrice(value) {
  return Number(value).toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });
}

export default function CartClient() {
  const { items, updateQty, removeItem, clear, count, ready } = useCart();
  const [confirmed, setConfirmed] = useState(false);

  const resolve = (slug) => products.find((p) => p.slug === slug);

  const rows = items
    .map((i) => ({ ...i, product: resolve(i.slug) }))
    .filter((i) => i.product);

  const subtotal = rows.reduce((acc, i) => {
    const price = Number(i.product.precio.replace(/[^0-9]/g, ""));
    return acc + price * i.qty;
  }, 0);

  const shipping = rows.length ? 0 : 0;
  const total = subtotal + shipping;

  if (!ready) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <div className="w-10 h-10 border-2 border-[#dfd0bd]/40 border-t-[#dfd0bd] rounded-full animate-spin" />
        <p className="text-body text-white/60 font-normal">Cargando carrito…</p>
      </div>
    );
  }

  if (rows.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center gap-6">
        <div className="w-24 h-24 rounded-full bg-[#1b2f15]/80 border border-white/10 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-[#dfd0bd]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-h2 font-black uppercase tracking-display text-white">
            Tu carrito está vacío
          </h2>
          <p className="text-body font-normal text-white/75 max-w-md mx-auto">
            Explorá nuestros productos medicinales analizados en laboratorio
            propio y agregá lo que necesites para tu plan terapéutico.
          </p>
        </div>
        <Link
          href="/#pasos"
          className="bg-[#dfd0bd] hover:bg-white text-[#162713] font-black text-sm uppercase tracking-[0.15em] py-3.5 px-8 rounded-full transition-colors"
        >
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">
      {/* Items */}
      <div className="flex flex-col gap-4">
        {rows.map(({ product, qty, slug }) => (
          <div
            key={slug}
            className="flex flex-col sm:flex-row sm:items-center gap-5 bg-[#1b2f15]/80 border border-white/5 rounded-3xl p-5"
          >
            <Link
              href={`/producto/${product.slug}`}
              className="relative w-full sm:w-28 h-28 shrink-0 rounded-2xl overflow-hidden bg-[#0a0f0a] block"
              aria-label={`Ver ${product.nombre}`}
            >
              <Image
                src={product.imagen}
                alt={product.nombre}
                fill
                sizes="112px"
                className="object-contain p-2 pointer-events-none transition-transform duration-300"
              />
            </Link>

            <div className="flex-1 min-w-0">
              <span className="text-label uppercase tracking-widest text-white/70 font-bold">
                {product.categoria}
              </span>
              <Link
                href={`/producto/${product.slug}`}
                className="block text-h3 font-black uppercase tracking-sub text-white hover:text-[#dfd0bd] transition-colors mt-1"
              >
                {product.nombre}
              </Link>
              <p className="text-[#dfd0bd] font-bold mt-1.5">{product.precio}</p>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6">
              <div className="flex items-center gap-3 bg-[#0a0f0a] border border-white/10 rounded-full px-2 py-1.5">
                <button
                  type="button"
                  onClick={() => updateQty(slug, qty - 1)}
                  className="w-8 h-8 rounded-full hover:bg-white/10 text-white font-black"
                  aria-label="Disminuir"
                >
                  −
                </button>
                <span className="text-white font-black w-6 text-center">{qty}</span>
                <button
                  type="button"
                  onClick={() => updateQty(slug, qty + 1)}
                  className="w-8 h-8 rounded-full hover:bg-white/10 text-white font-black"
                  aria-label="Aumentar"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={() => removeItem(slug)}
                className="text-white/50 hover:text-red-300 transition-colors p-2"
                aria-label={`Eliminar ${product.nombre}`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z" />
                  <path d="M10 11v6M14 11v6" />
                </svg>
              </button>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={clear}
          className="self-start text-sm text-white/70 hover:text-white font-normal tracking-sub mt-2 transition-colors"
        >
          Vaciar carrito
        </button>
      </div>

      {/* Summary */}
      <aside className="lg:sticky lg:top-28 bg-[#1b2f15]/80 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-5">
        <h3 className="text-h3 font-black uppercase tracking-sub text-white">
          Resumen del pedido
        </h3>

        <dl className="flex flex-col gap-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-white/75 font-normal">Productos ({count})</dt>
            <dd className="text-white font-bold">{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-white/75 font-normal">Envío</dt>
            <dd className="text-[#dfd0bd] font-bold">Gratis</dd>
          </div>
          <div className="border-t border-white/10 pt-3 flex justify-between items-center">
            <dt className="text-white font-bold uppercase tracking-wider">Total</dt>
            <dd className="text-[#dfd0bd] text-h3 font-black">{formatPrice(total)}</dd>
          </div>
        </dl>

        {confirmed ? (
          <div className="bg-[#dfd0bd]/10 border border-[#dfd0bd]/40 rounded-2xl p-4 text-sm text-[#dfd0bd] font-normal">
            ✓ Pedido registrado. Ahora coordiná la entrega y el pago por
            WhatsApp con nuestro equipo.
          </div>
        ) : null}

        <a
          href="https://wa.me/5493510000000?text=Hola%20Terramore%2C%20quiero%20cotizar%20mi%20pedido"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setConfirmed(true)}
          className="text-center bg-[#dfd0bd] hover:bg-white text-[#162713] font-black text-sm uppercase tracking-[0.15em] py-4 px-8 rounded-full transition-colors shadow-md"
        >
          Continuar y cotizar
        </a>

        <Link
          href="/#pasos"
          className="text-center border border-white/40 hover:border-[#dfd0bd] text-white hover:text-[#dfd0bd] font-bold text-sm uppercase tracking-[0.15em] py-3.5 px-8 rounded-full transition-colors"
        >
          Seguir comprando
        </Link>

        <p className="text-body text-white/70 font-normal">
          Los precios son referenciales. El pedido final se confirma con nuestro
          equipo por WhatsApp. Productos exclusivos para socios con
          certificación REPROCANN.
        </p>
      </aside>
    </div>
  );
}