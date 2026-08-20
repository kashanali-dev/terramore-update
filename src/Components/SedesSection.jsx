import React from "react";
import { SITE } from "@/lib/products";

const sedes = [
  {
    nombre: "Córdoba",
    address: "Pulqui · Industria Cultural · Rodríguez Peña 455 · Córdoba",
    hours: [
      { label: "Lunes a miércoles", time: "10 a 17 hs" },
      { label: "Jueves y viernes", time: "10 a 20 hs" },
    ],
    phone: "+54 9 351 680 9346",
    whatsapp: SITE.whatsapp.cordoba,
    map: "https://www.google.com/maps?q=Pulqui+Industria+Cultural+Rodriguez+Peña+455+Cordoba&output=embed",
  },
  {
    nombre: "Buenos Aires",
    address: "Godoy Cruz 3217 · Palermo · Buenos Aires",
    hours: [
      { label: "Lunes a miércoles", time: "11 a 19 hs" },
      { label: "Jueves y viernes", time: "12 a 20 hs" },
    ],
    phone: "+54 9 11 6607 4617",
    whatsapp: SITE.whatsapp.baires,
    map: "https://www.google.com/maps?q=Godoy+Cruz+3217,+Palermo,+Buenos+Aires&output=embed",
  },
];

export default function SedesSection() {
  return (
    <section
      id="sedes"
      className="relative w-full py-20 md:py-24 bg-[#0a0f0a] overflow-hidden text-white"
    >
      <div className="relative z-20 w-full max-w-[min(85.5%,100rem)] mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-h2 font-black tracking-display uppercase">
            Nuestras sedes
          </h2>
          <p className="text-body text-white/75 font-normal mt-3 max-w-2xl mx-auto">
            Dos sedes en Argentina, con atención solo con turno previo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sedes.map((sede) => (
            <div
              key={sede.nombre}
              className="bg-[#162713] border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="relative h-56 md:h-64">
                <iframe
                  title={`Mapa sede ${sede.nombre}`}
                  src={sede.map}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              <div className="flex flex-col gap-4 p-7 md:p-9">
                <h3 className="text-h2 font-black tracking-display uppercase text-[#dfd0bd]">
                  {sede.nombre}
                </h3>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 shrink-0 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-body font-normal text-white/85">{sede.address}</p>
                </div>

                <div className="flex flex-col gap-2">
                  {sede.hours.map((h) => (
                    <div key={h.label} className="flex items-center gap-3">
                      <svg className="w-5 h-5 shrink-0 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 3" />
                      </svg>
                      <p className="text-body font-normal text-white/85">
                        <span className="text-white/60">{h.label}:</span> {h.time}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 shrink-0 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  <p className="text-body font-normal text-white/85">
                    <span className="text-white/60">Solo con</span> turno previo
                  </p>
                </div>

                <a
                  href={`https://web.whatsapp.com/send?phone=${sede.whatsapp}&text=${encodeURIComponent(SITE.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-[#dfd0bd] hover:bg-white text-[#162713] font-black text-sm uppercase tracking-[0.15em] py-3.5 px-6 rounded-full transition-colors duration-300"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zM12.04 20.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23a7.86 7.86 0 0 1-1.38-1.72c-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z" />
                  </svg>
                  WhatsApp {sede.nombre}: {sede.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
