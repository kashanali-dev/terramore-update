"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SITE } from "@/lib/products";

const CTAS = [
  { label: "WhatsApp Córdoba", number: SITE.whatsapp.cordoba },
  { label: "WhatsApp Buenos Aires", number: SITE.whatsapp.baires },
  { label: "WhatsApp Argentina", number: SITE.whatsapp.argentina },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-screen w-full bg-[#0c150b] z-0"></section>
    );
  }

  return (
    <section
      id="inicio"
      suppressHydrationWarning={true}
      className="relative min-h-[80vh] lg:min-h-[100vh] w-full flex flex-col py-16 bg-[#0c150b] overflow-hidden"
    >
      {/* Background Image Optimization using Next.js Image Component */}
      <Image
        src="/hero.png"
        alt="Campo de cultivo Terramore"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none"
      />

      {/* Background Dark Overlay */}
      <div className="absolute inset-0 bg-black/35 z-10"></div>

      {/* Main Content Container */}
      <div
        suppressHydrationWarning={true}
        className="relative z-20 w-full max-w-[min(85.5%,100rem)] mx-auto text-white flex flex-col gap-10 md:gap-14 pt-16 md:pt-24 pb-2"
      >
        {/* Top Text Area */}
        <div
          className="flex flex-col gap-1.5 md:gap-2 max-lg:text-center max-lg:items-center"
          suppressHydrationWarning={true}
        >
          <h1 className="text-h1 font-black uppercase tracking-display antialiased max-w-[44rem]">
            Cannabis medicinal
            <br />
            <span className="font-brand-special">
              legal, seguro y acompañado
            </span>
          </h1>

          <p className="text-body font-normal max-w-3xl text-white/85 mt-1 md:mt-2 font-myriad-pro">
            Somos Terramore — ONG habilitada por el Ministerio de Salud.
            <br className="hidden md:inline" /> Accedé a tus productos
            medicinales con respaldo científico, legal y humano.
          </p>
        </div>

        {/* Bottom Action Buttons with Increased Top Gap using mt properties */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full mt-16 md:mt-20 lg:mt-32 pb-0">
          {CTAS.map((cta) => (
            <a
              key={cta.label}
              href={`https://web.whatsapp.com/send?phone=${cta.number}&text=${encodeURIComponent(SITE.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-w-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-white text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-[2px] whitespace-nowrap font-myriad-pro"
            >
              <svg
                className="w-4 h-4 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
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
