import React from "react";
import Image from "next/image";

export default function NosotrosSection() {
  return (
    <section
      id="nosotros"
      className="relative w-full py-20 md:py-28 bg-[#040604] overflow-hidden text-white"
    >
      {/* Background image */}
      <Image
        src="/flower.webp"
        alt="Sierras cordobesas"
        fill
        loading="lazy"
        quality={75}
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none opacity-40"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#040604]/80 via-[#040604]/85 to-[#040604]/90 z-10"></div>

      <div className="relative z-20 w-full max-w-[min(85.5%,100rem)] mx-auto flex flex-col items-center text-center gap-6">
        <span className="text-label font-bold tracking-widest uppercase text-[#dfd0bd]">
          Quiénes somos
        </span>
        <h2 className="text-h2 font-black tracking-display uppercase max-w-4xl">
          Una ONG que nació de un sueño en las sierras cordobesas.
        </h2>
        <div className="w-16 h-1 bg-[#dfd0bd]/60 mt-2 mb-2"></div>

        <p className="text-body font-normal text-white/85 max-w-2xl">
          Hace 4 años decidimos que el cannabis medicinal merecía un modelo
          diferente. Profesional, humano y responsable. Sin apuro, sin volumen
          — desde la tierra, el proceso y el cuidado.
        </p>
        <p className="text-body font-normal text-white/85 max-w-2xl">
          Hoy somos más de 350 socios, tenemos laboratorio propio, respaldo del
          Ministerio de Salud y dos sedes en Argentina.
        </p>
        <p className="text-body font-bold text-[#dfd0bd] max-w-2xl">
          Esto recién empieza. Y lo construimos juntos.
        </p>
      </div>
    </section>
  );
}
