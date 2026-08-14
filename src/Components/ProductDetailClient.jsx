"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { SITE } from "@/lib/products";

export default function ProductDetailClient({ product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [selected, setSelected] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product.slug, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  const waHref = `https://web.whatsapp.com/send?phone=${SITE.whatsapp.cordoba}&text=${encodeURIComponent(
    SITE.whatsappMessage,
  )}`;

  return (
    <>
      {/* Gallery + Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-square rounded-3xl bg-[#1b2f15]/95 border border-white/5 overflow-hidden shadow-2xl lg:max-w-[40rem] lg:mx-auto">
            <Image
              src={product.galeria[selected]}
              alt={product.nombre}
              fill
              sizes="(max-width:1024px) 50vw, 100vw"
              priority
              className="object-contain p-10 pointer-events-none drop-shadow-[0_24px_35px_rgba(0,0,0,0.6)]"
            />
            <span className="absolute top-5 left-5 text-label uppercase tracking-[0.2em] bg-[#dfd0bd]/90 text-[#162713] font-black px-4 py-1.5 rounded-full">
              {product.categoria}
            </span>
          </div>
          {product.galeria.length > 1 ? (
            <div className="flex flex-wrap gap-3">
              {product.galeria.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-label={`Ver imagen ${i + 1}`}
                  className={`relative w-20 h-20 rounded-2xl overflow-hidden border transition-all duration-200 ${
                    selected === i
                      ? "border-[#dfd0bd] ring-2 ring-[#dfd0bd]/40"
                      : "border-white/10 hover:border-white/40"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-contain p-2 pointer-events-none"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-h1 font-black uppercase tracking-display text-white">
              {product.nombre}
            </h2>
            <p className="text-body font-normal text-white/85">
              {product.resumen}
            </p>
          </div>

          {/* Destacados */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.destacados.map((b) => (
              <li
                key={b.titulo}
                className="flex items-start gap-3 bg-[#1b2f15]/80 border border-white/5 rounded-2xl px-4 py-3.5"
              >
                <svg
                  className="w-5 h-5 text-[#dfd0bd] shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wider">
                    {b.titulo}
                  </p>
                  <p className="text-white/75 text-sm font-normal">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Quantity + Add */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch">
            <div className="flex items-center justify-between bg-[#1b2f15]/80 border border-white/10 rounded-full px-2 py-2 sm:w-40">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-white font-black"
                aria-label="Disminuir cantidad"
              >
                −
              </button>
              <span className="text-white font-black text-lg">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => Math.min(99, q + 1))}
                className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-white font-black"
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className={`flex-1 font-black text-sm uppercase tracking-[0.15em] py-4 px-8 rounded-full transition-colors duration-300 shadow-md ${
                added
                  ? "bg-white text-[#162713]"
                  : "bg-[#dfd0bd] hover:bg-white text-[#162713]"
              }`}
            >
              {added ? "✓ Agregado al carrito" : "Agregar al carrito"}
            </button>
          </div>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center border border-[#dfd0bd]/60 hover:bg-[#dfd0bd]/10 text-[#dfd0bd] font-bold text-sm uppercase tracking-[0.15em] py-4 px-8 rounded-full transition-colors"
          >
            Cotizar por WhatsApp
          </a>

          {/* Legal note */}
          <div className="bg-[#1b2f15]/60 border border-white/5 rounded-2xl p-5 flex gap-4">
            <svg className="w-6 h-6 text-[#dfd0bd] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-body font-normal text-white/80">
              Producto de venta exclusiva para socios de {""}
              <strong className="text-white font-bold">Terramore</strong> con
              certificación médica y habilitación REPROCANN vigente. La
              dosificación siempre debe ser indicada por un profesional de la
              salud.
            </p>
          </div>
        </div>
      </div>

      {/* Detail sections */}
      <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <section className="bg-[#1b2f15]/70 border border-white/5 rounded-3xl p-6 md:p-8">
            <h3 className="text-h3 font-black uppercase tracking-sub text-white mb-4">
              Descripción
            </h3>
            <p className="text-body font-normal text-white/75">
              {product.descripcion}
            </p>
          </section>

          <section className="bg-[#1b2f15]/70 border border-white/5 rounded-3xl p-6 md:p-8">
            <h3 className="text-h3 font-black uppercase tracking-sub text-white mb-4">
              Modo de uso
            </h3>
            <p className="text-body font-normal text-white/75">{product.modoUso}</p>
          </section>
        </div>

        <div className="flex flex-col gap-6">
          <section className="bg-[#1b2f15]/70 border border-white/5 rounded-3xl p-6 md:p-8">
            <h3 className="text-h3 font-black uppercase tracking-sub text-white mb-4">
              Ficha técnica
            </h3>
            <dl className="space-y-4">
              {product.fichaTecnica.map((item) => (
                <div key={item.label} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <dt className="text-label font-bold uppercase tracking-widest text-[#dfd0bd] mb-1">
                    {item.label}
                  </dt>
                  <dd className="text-sm font-normal text-white/85 leading-snug">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="bg-[#1b2f15]/70 border border-white/5 rounded-3xl p-6 md:p-8">
            <h3 className="text-h3 font-black uppercase tracking-sub text-white mb-4">
              Información importante
            </h3>
            <p className="text-body font-normal text-white/75">
              {product.infoImportante}
            </p>
          </section>

          <section className="bg-[#1b2f15]/70 border border-white/5 rounded-3xl p-6 md:p-8">
            <h3 className="text-h3 font-black uppercase tracking-sub text-white mb-4">
              Laboratorio propio
            </h3>
            <p className="text-body font-normal text-white/75">
              Cada lote es analizado y certificado por nuestro laboratorio
              propio ArMedic. Podés solicitar el informe de lote por WhatsApp.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
