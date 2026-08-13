"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/products";

const categories = [
  {
    nombre: "Aceites medicinales",
    desc: "Espectro completo · 4 formulaciones · Frasco gotero 20ml",
    imagen: "/product1.png",
    slug: "aceite-gotero-10",
  },
  {
    nombre: "Crema CBD",
    desc: "Uso tópico · Analgésica · Antiinflamatoria · 20g y 50g",
    imagen: "/product2.png",
    slug: "crema-antiinflamatoria",
  },
  {
    nombre: "Flores Outdoor",
    desc: "Alta intensidad · Suelo vivo · Ciclos naturales",
    imagen: "/product3.png",
    slug: "flores-gorilla-glue",
  },
  {
    nombre: "Flores Indoor",
    desc: "Alta intensidad · Genéticas seleccionadas · Control total de cultivo",
    imagen: "/product4.png",
    slug: "flores-amnesia-haze",
  },
  {
    nombre: "Comestibles",
    desc: "CBD y THC · Dosificación simple · Sin inhalación",
    imagen: "/product2.png",
    slug: "aceite-gotero-10",
  },
];

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
            Cada referencia incluye su indicación principal para que elegir sea
            simple.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {categories.map((cat) => (
            <div
              key={cat.nombre}
              className="bg-[#1b2f15]/95 border border-white/5 rounded-3xl pt-8 pb-6 px-6 flex flex-col items-center justify-between text-center transition-transform duration-300 hover:scale-[1.01] hover:border-[#dfd0bd]/40 shadow-2xl backdrop-blur-sm min-w-0 h-full"
            >
              <div className="w-full h-36 my-2 flex items-center justify-center relative drop-shadow-[0_16px_25px_rgba(0,0,0,0.65)] shrink-0">
                <Image
                  src={cat.imagen}
                  alt={cat.nombre}
                  fill
                  sizes="(max-w-640px) 100vw, 20vw"
                  loading="lazy"
                  className="object-contain pointer-events-none"
                />
              </div>

              <h3 className="text-base md:text-lg font-black uppercase tracking-sub mt-4 leading-snug break-words w-full">
                {cat.nombre}
              </h3>

              <p className="text-sm text-white/80 font-normal tracking-wide mt-2 normal-case leading-relaxed break-words">
                {cat.desc}
              </p>

              <div className="w-full mt-6 flex flex-col gap-2.5">
                <Link
                  href={`/producto/${cat.slug}`}
                  className="bg-[#dfd0bd] hover:bg-white text-[#162713] font-black text-xs md:text-sm uppercase tracking-wider py-3.5 px-3 rounded-full w-full block text-center transition-colors duration-300 shadow-md whitespace-nowrap"
                >
                  Ver producto
                </Link>
                <a
                  href={`https://wa.me/${SITE.whatsapp.cordoba}?text=${encodeURIComponent(
                    `Hola Terramore, quiero más información sobre ${cat.nombre}`,
                  )}`}
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
