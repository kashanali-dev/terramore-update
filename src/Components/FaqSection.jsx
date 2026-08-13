"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "¿Qué es el REPROCANN y cómo se gestiona?",
    a: "El REPROCANN es el Registro del Programa de Cannabis Medicinal del Ministerio de Salud de la Nación. Es la habilitación legal que te permite cultivar, transportar y acceder a productos de cannabis medicinal. En Terramore te conectamos con nuestro médico y nuestro equipo legal gestiona todo el trámite por vos: en 24 a 72 horas tenés tu habilitación.",
  },
  {
    q: "¿Es legal el cannabis medicinal en Argentina?",
    a: "Sí. Desde la Ley 27.350, el cannabis medicinal está regulado en Argentina. El acceso legal, seguro y acompañado se realiza a través del REPROCANN, gestionado por profesionales de la salud habilitados. Terramore es una ONG registrada que te acompaña en todo el proceso.",
  },
  {
    q: "¿Cuánto cuesta asociarse a Terramore?",
    a: "No cobramos membresía. Sin membresía y sin costos ocultos: solo el turno médico con nuestro profesional. Te contamos todos los detalles del proceso en una primera consulta sin compromiso.",
  },
  {
    q: "¿Puedo gestionar el REPROCANN de forma online?",
    a: "Sí. La primera consulta y el turno médico pueden realizarse online, como prefieras. Nuestro equipo legal gestiona la habilitación a distancia y te acompaña hasta tenerla activa.",
  },
  {
    q: "¿Qué diferencia hay entre CBD y THC?",
    a: "El CBD (cannabidiol) es el componente con propiedades terapéuticas reconocidas, sin efectos psicoactivos significativos. El THC (tetrahidrocannabinol) es el componente psicoactivo, que también tiene usos medicinales específicos. Tu médico te indica la fórmula y la concentración adecuada para tu caso.",
  },
  {
    q: "¿Qué es el efecto entourage?",
    a: "Es el efecto que se produce cuando los múltiples componentes del cannabis —CBD, THC, terpenos y otros cannabinoides— actúan juntos y potencian sus beneficios. Por eso nuestros productos se elaboran con espectro completo, analizados lote a lote en nuestro laboratorio propio.",
  },
  {
    q: "¿Terramore tiene membresía?",
    a: "No. En Terramore no hay membresía ni costos ocultos: solo el turno médico. Una vez habilitado en REPROCANN, accedés a nuestros productos medicinales con acompañamiento médico y legal durante todo el proceso.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="relative w-full py-20 md:py-24 bg-[#0a0f0a] overflow-hidden text-white"
    >
      <div className="relative z-20 w-full max-w-[min(85.5%,100rem)] mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-h2 font-black tracking-display uppercase">
            Preguntas frecuentes sobre cannabis medicinal y REPROCANN
          </h2>
          <p className="text-body text-white/75 font-normal mt-3 max-w-2xl mx-auto">
            Todo lo que necesitás saber antes de empezar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className={`bg-[#162713]/90 border rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? "border-[#dfd0bd]/50" : "border-white/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="text-base md:text-lg font-bold tracking-sub leading-snug">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-6 h-6 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#dfd0bd]" : "text-white/60"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-body font-normal text-white/80 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
