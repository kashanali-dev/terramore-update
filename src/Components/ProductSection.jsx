"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE, products } from "@/lib/products";

export default function ProductSection() {
  return (
    <section
      id="productos"
      className="relative w-full flex flex-col justify-center items-center py-20 md:py-24 bg-[#162713] overflow-hidden text-white"
    >
      {/* Background Image Optimization using Next.js Image Component */}
      <Image
        src="/bg.png"
        alt="Productos Terramore"
        fill
        loading="lazy"
        quality={75}
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none"
      />

      {/* Gradients and Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-[#162713]/90 via-transparent to-[#162713]/95 z-10"></div>
      <div className="absolute inset-0 bg-black/15 z-10"></div>

      <div className="relative z-20 w-full max-w-[min(85.5%,100rem)] mx-auto flex flex-col px-0">
        <div className="mb-10 md:mb-12 text-center">
          <h2 className="text-h2 font-black text-white tracking-display">
            Productos de cannabis medicinal{" "}
            <br className="hidden sm:inline" />
            analizados en laboratorio propio
          </h2>
          <p className="text-body text-white/75 font-normal mt-3 max-w-2xl mx-auto">
            Aceites medicinales y crema tópica, formulados para acompañar tu
            bienestar. Consultá disponibilidad por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {products.map((product) => (
            <div
              key={product.slug}
              className="bg-[#1b2f15]/95 border border-white/5 rounded-3xl pt-8 pb-6 px-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.01] hover:border-[#dfd0bd]/40 shadow-2xl backdrop-blur-sm min-w-0 h-full"
            >
              <div className="w-full h-40 shrink-0 flex items-center justify-center relative drop-shadow-[0_16px_25px_rgba(0,0,0,0.65)]">
                <Image
                  src={product.imagen}
                  alt={product.nombre}
                  fill
                  sizes="(max-width:640px) 100vw, 20vw"
                  loading="lazy"
                  className="object-contain pointer-events-none"
                />
              </div>

              <span className="text-label uppercase tracking-widest text-white/60 font-bold mt-4">
                {product.categoria}
              </span>

              <h3 className="text-base md:text-lg font-black uppercase tracking-sub mt-2 leading-snug break-words w-full min-h-[2.75rem] md:min-h-[3.1rem]">
                {product.nombre}
              </h3>

              <p className="text-sm text-white/80 font-normal tracking-wide mt-2 normal-case leading-relaxed break-words flex-1 line-clamp-3 w-full">
                {product.resumen}
              </p>

              <div className="w-full mt-6 flex flex-col gap-2.5 shrink-0">
                <Link
                  href={`/producto/${product.slug}`}
                  className="bg-[#dfd0bd] hover:bg-white text-[#162713] font-black text-xs md:text-sm uppercase tracking-wider py-3.5 px-3 rounded-full w-full block text-center transition-colors duration-300 shadow-md whitespace-nowrap"
                >
                  Ver producto
                </Link>
                <a
                  href={`https://web.whatsapp.com/send?phone=${SITE.whatsapp.cordoba}&text=${encodeURIComponent(SITE.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-xs md:text-sm text-white/70 hover:text-[#dfd0bd] font-bold uppercase tracking-wider transition-colors"
                >
                  Consultá disponibilidad
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
