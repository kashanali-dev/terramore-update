import React from "react";
import Image from "next/image";
import { SITE } from "@/lib/products";

export default function RoblesSection() {
  return (
    <section
      id="robles"
      className="relative w-full py-20 md:py-28 bg-[#0a0f0a] overflow-hidden text-white"
    >
      {/* Background image + green overlay */}
      <Image
        src="/sierras-robles.jpeg"
        alt="Paisaje de las sierras de Córdoba"
        fill
        loading="lazy"
        quality={75}
        sizes="100vw"
        className="object-cover object-[60%_40%] md:object-[50%_40%] lg:object-[50%_40%] z-0 pointer-events-none"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0f0a]/95 via-[#162713]/90 to-[#0a0f0a]/95 z-10"></div>

      <div className="relative z-20 w-full max-w-[min(85.5%,100rem)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Texto */}
        <div className="flex flex-col gap-6">
          <span className="text-label font-bold tracking-widest uppercase text-[#dfd0bd]">
            Estudio de Abogados Robles
          </span>
          <h2 className="text-h2 font-black tracking-display uppercase">
            Tu respaldo legal especializado.
          </h2>
          <p className="text-body font-normal text-white/85">
            El Estudio Robles es nuestro aliado legal especializado en cannabis
            medicinal en Argentina. Trabajan junto a Terramore para garantizar
            que cada socio esté informado, protegido y acompañado en su acceso
            legal al cannabis medicinal.
          </p>
          <p className="text-body font-normal text-white/85">
            ¿Podés llevar cannabis medicinal encima? ¿Qué pasa si te para la
            policía? ¿Qué dice la ley exactamente?{" "}
            <span className="font-bold text-[#dfd0bd]">
              Esas preguntas tienen respuesta. Y nuestro equipo legal está para
              dártela.
            </span>
          </p>
          <p className="text-body font-bold text-[#dfd0bd]">
            Con oficina propia en nuestra sede de Buenos Aires · Godoy Cruz 3217
            · Palermo
          </p>

          <a
            href={`https://web.whatsapp.com/send?phone=${SITE.whatsapp.baires}&text=${encodeURIComponent(SITE.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 bg-[#dfd0bd] hover:bg-white text-[#162713] font-black text-sm uppercase tracking-[0.15em] py-3.5 px-8 rounded-full transition-colors duration-300 w-full sm:w-fit"
          >
            Consultá tu situación legal — escribinos
          </a>
        </div>

        {/* Legal card visual */}
        <div className="bg-[#f3ebd9] text-[#162713] rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#162713] text-[#f3ebd9] flex items-center justify-center shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20h16" />
                <path d="M8 16h8" />
                <path d="M12 4v12" />
                <path d="M7 8l5-4 5 4" />
              </svg>
            </div>
            <div>
              <h3 className="text-h3 font-black uppercase tracking-sub">
                ESTUDIO DE ABOGADOS ROBLES
              </h3>
              <p className="text-sm text-[#162713]/70 font-normal">
                Derecho cannábico · Buenos Aires
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-[#162713]/15"></div>

          <ul className="flex flex-col gap-4">
            {[
              "Asesoría legal integral para socios",
              "Acompañamiento en controles y situaciones legales",
              "Derechos del paciente REPROCANN",
              "Oficina propia en Godoy Cruz 3217 · Palermo",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0 text-[#162713]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-body font-normal text-[#162713]/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
