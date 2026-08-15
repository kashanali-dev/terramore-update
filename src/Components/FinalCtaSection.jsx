import React from "react";
import Image from "next/image";
import { SITE } from "@/lib/products";

const ctas = [
  { label: "WhatsApp Córdoba", number: SITE.whatsapp.cordoba },
  { label: "WhatsApp Buenos Aires", number: SITE.whatsapp.baires },
];

export default function FinalCtaSection() {
  return (
    <section
      id="contacto"
      className="relative w-full py-24 md:py-32 bg-[#0c150b] overflow-hidden text-white"
    >
      {/* Background image */}
      <Image
        src="/steps.webp"
        alt="Cannabis medicinal"
        fill
        loading="lazy"
        quality={75}
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none"
      />
      <div className="absolute inset-0 bg-[#0c150b]/85 z-10"></div>

      <div className="relative z-20 w-full max-w-[min(85.5%,100rem)] mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-h2 font-black tracking-display uppercase max-w-4xl">
          El primer paso es el más fácil.
        </h2>
        <p className="text-body font-normal text-white/85 max-w-xl">
          Escribinos hoy y en 5 minutos te contamos todo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          {ctas.map((cta) => (
            <a
              key={cta.label}
              href={`https://web.whatsapp.com/send?phone=${cta.number}&text=${encodeURIComponent(SITE.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#dfd0bd] hover:bg-white text-[#162713] font-black text-sm uppercase tracking-[0.15em] py-3.5 px-8 rounded-full transition-colors duration-300 w-full sm:w-auto"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zM12.04 20.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23a7.86 7.86 0 0 1-1.38-1.72c-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z" />
              </svg>
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
