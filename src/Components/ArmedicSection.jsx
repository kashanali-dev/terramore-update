import React from "react";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9" />
        <path d="M9 3v4a2 2 0 0 1-2 2H3" />
        <path d="M8 13h8M8 17h5" />
      </svg>
    ),
    titulo: "Análisis lote a lote",
    desc: "Cada producto pasa por control de calidad antes de llegar a tus manos.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
        <path d="M8.5 11h5M11 8.5v5" />
      </svg>
    ),
    titulo: "Concentración exacta",
    desc: "Sabés exactamente qué estás consumiendo y en qué concentración.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    titulo: "Trazabilidad",
    desc: "Con propósito terapéutico definido y respaldo de calidad.",
  },
];

export default function ArmedicSection() {
  return (
    <section
      id="armedic"
      className="relative w-full py-20 md:py-28 bg-[#0a0f0a] overflow-hidden text-white"
    >
      {/* Background image + green overlay */}
      <Image
        src="/back.webp"
        alt="Laboratorio Armedic"
        fill
        loading="lazy"
        quality={75}
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0f0a]/95 via-[#162713]/90 to-[#0a0f0a]/95 z-10"></div>

      <div className="relative z-20 w-full max-w-[min(85.5%,100rem)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Texto */}
        <div className="flex flex-col gap-6">
          <span className="text-label font-bold tracking-widest uppercase text-[#dfd0bd]">
            Armedic · Laboratorio propio
          </span>
          <h2 className="text-h2 font-black tracking-display uppercase">
            Nuestro laboratorio propio garantiza lo que consumís.
          </h2>
          <p className="text-body font-normal text-white/85 max-w-xl">
            Armedic es el laboratorio de análisis y control de calidad de
            Terramore. Cada producto — aceite, flor, crema o comestible — pasa
            por análisis antes de llegar a tus manos.
          </p>
          <p className="text-body font-normal text-white/85 max-w-xl">
            Sabés exactamente qué estás consumiendo. En qué concentración. Con
            qué propósito. <span className="font-bold">Eso es lo que nos diferencia.</span>
          </p>
        </div>

        {/* Feature cards */}
        <div className="flex flex-col gap-5">
          {features.map((f) => (
            <div
              key={f.titulo}
              className="bg-[#1b2f15]/80 border border-white/10 rounded-3xl p-6 flex items-start gap-5 backdrop-blur-sm hover:border-[#dfd0bd]/40 transition-colors"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#dfd0bd]/10 border border-[#dfd0bd]/30 text-[#dfd0bd] flex items-center justify-center">
                {f.icon}
              </div>
              <div className="min-w-0 flex flex-col gap-1.5">
                <h3 className="text-h3 font-black uppercase tracking-sub">
                  {f.titulo}
                </h3>
                <p className="text-body font-normal text-white/80 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
