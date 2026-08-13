"use client";

import React, { useRef, useState, useEffect } from "react";

const testimonios = [
  {
    nombre: "María G.",
    lugar: "Córdoba",
    stars: 5,
    texto:
      "Dejé de vivir con miedo. Ahora tengo mi REPROCANN y mi aceite, con acompañamiento médico real y un equipo legal que me respalda.",
  },
  {
    nombre: "Jorge R.",
    lugar: "Buenos Aires",
    stars: 5,
    texto:
      "En una semana tenía todo: la primera consulta, el turno médico y la habilitación. Excelente trato y total claridad en cada paso.",
  },
  {
    nombre: "Carolina V.",
    lugar: "Rosario",
    stars: 5,
    texto:
      "Me explicaron todo sin juzgar. Por fin un lugar que trata el cannabis medicinal con la seriedad y el respeto que merece.",
  },
  {
    nombre: "Lucas M.",
    lugar: "Córdoba",
    stars: 5,
    texto:
      "Mi mamá cambió su calidad de vida. El acompañamiento médico y legal hace toda la diferencia. Los recomiendo de corazón.",
  },
];

export default function TestimoniosSection() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const restartTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonios.length);
    }, 5500);
  };

  useEffect(() => {
    restartTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => {
    setActive((i + testimonios.length) % testimonios.length);
    restartTimer();
  };

  const initials = (nombre) =>
    nombre
      .replace(/\./g, "")
      .split(" ")
      .map((w) => w[0])
      .join("");

  const current = testimonios[active];

  return (
    <section
      id="testimonios"
      className="relative w-full py-20 md:py-24 bg-[#162713] overflow-hidden text-white"
    >
      <div className="relative z-20 w-full max-w-[min(85.5%,100rem)] mx-auto flex flex-col items-center">
        <div className="mb-10 text-center">
          <span className="text-label font-bold tracking-widest uppercase text-[#dfd0bd]">
            Testimonios
          </span>
          <h2 className="text-h2 font-black tracking-display uppercase mt-2">
            Historias que nos eligen cada día
          </h2>
        </div>

        <div className="w-full max-w-3xl relative">
          {/* Quote mark */}
          <svg
            className="absolute -top-8 left-4 w-16 h-16 text-[#dfd0bd]/30 z-10"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 7H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1.5A2.5 2.5 0 0 0 10 14.5V11H6.5V10c0-.83.67-1.5 1.5-1.5V7a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H7a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h3zm10 0h-4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1.5a2.5 2.5 0 0 0 2.5-2.5V11H17V10c0-.83.67-1.5 1.5-1.5V7a3 3 0 0 1 3 3v4a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h3z" />
          </svg>

          <div className="bg-[#1b2f15]/95 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm text-center flex flex-col items-center gap-6 min-h-[22rem] justify-center">
            {/* Stars */}
            <div
              className="flex items-center gap-1 text-[#dfd0bd]"
              aria-label={`${current.stars} de 5 estrellas`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < current.stars ? "text-[#dfd0bd]" : "text-white/20"}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                </svg>
              ))}
            </div>

            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#dfd0bd] to-[#b9a582] text-[#162713] font-black text-xl flex items-center justify-center shadow-lg">
              {initials(current.nombre)}
            </div>

            <p className="text-body font-normal text-white/90 leading-relaxed max-w-xl">
              “{current.texto}”
            </p>

            <div>
              <p className="text-h3 font-black uppercase tracking-sub">
                {current.nombre}
              </p>
              <p className="text-sm text-white/60 font-normal uppercase tracking-widest mt-1">
                {current.lugar}
              </p>
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            aria-label="Testimonio anterior"
            onClick={() => goTo(active - 1)}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full border border-white/20 bg-[#0a0f0a]/60 backdrop-blur-sm text-white hover:border-[#dfd0bd] hover:text-[#dfd0bd] transition-colors z-10"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Testimonio siguiente"
            onClick={() => goTo(active + 1)}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full border border-white/20 bg-[#0a0f0a]/60 backdrop-blur-sm text-white hover:border-[#dfd0bd] hover:text-[#dfd0bd] transition-colors z-10"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2 mt-8">
          {testimonios.map((t, i) => (
            <button
              key={t.nombre}
              type="button"
              aria-label={`Testimonio ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 bg-[#dfd0bd]"
                  : "w-2.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
