import Link from "next/link";
import { SITE } from "@/lib/products";

export default function Footer() {
  const navigation = [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/#productos" },
    { label: "Sedes", href: "/#sedes" },
    { label: "Cotizar", href: "/cotizar" },
    { label: "Carrito", href: "/carrito" },
  ];

  const legal = [
    { label: "Política de Privacidad", href: "/privacidad" },
    { label: "Términos y Condiciones", href: "/terminos" },
    { label: "Aviso Médico", href: "/aviso-medico" },
  ];

  const whatsapps = [
    { label: "WPP Córdoba", number: SITE.whatsapp.cordoba },
    { label: "WPP Bs. As.", number: SITE.whatsapp.baires },
    { label: "WPP Argentina", number: SITE.whatsapp.argentina },
  ];

  return (
    <footer className="relative w-full bg-[#0a0f0a] text-white border-t border-white/10 overflow-hidden">
      {/* top accent */}
      <div className="w-full h-1 bg-[#dfd0bd]/60" />

      {/* CTA band */}
      <div className="w-full border-b border-white/10">
        <div className="max-w-[min(85.5%,100rem)] mx-auto px-0 py-10 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="flex flex-col gap-2 min-w-0 flex-1">
            <h2 className="text-h2 font-black uppercase tracking-display max-w-full">
              ¿Querés acceder al cannabis medicinal?
            </h2>
            <p className="text-white/70 text-body font-normal">
              Empezá hoy tu proceso con acompañamiento médico y legal.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/cotizar"
              className="bg-[#dfd0bd] hover:bg-white text-[#162713] font-black text-sm uppercase tracking-[0.15em] py-3.5 px-8 rounded-full transition-colors w-full sm:w-auto"
            >
              Cotizar ahora
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp.cordoba}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#dfd0bd]/50 hover:bg-[#dfd0bd]/10 text-[#dfd0bd] font-bold text-sm uppercase tracking-[0.15em] py-3.5 px-8 rounded-full transition-colors w-full sm:w-auto"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="relative z-10 w-full max-w-[min(85.5%,100rem)] mx-auto px-0 py-14">
        <div className="flex w-full flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-x-8 gap-y-10 xl:flex-nowrap">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-white font-black text-h2 tracking-wider uppercase w-fit font-brand-display"
            >
              TERRAMORE
            </Link>
            <p className="text-white/70 text-body font-normal max-w-[21rem]">
              {SITE.slogan}. ONG habilitada por el Ministerio de Salud ·
              REPROCANN. Terramore Asociación Civil.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={`https://wa.me/${SITE.whatsapp.cordoba}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full border border-white/30 hover:border-[#dfd0bd] hover:text-[#dfd0bd] flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 17.04 2zM12.04 20.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23a7.86 7.86 0 0 1-1.38-1.72c-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z" />
                </svg>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email"
                className="w-11 h-11 rounded-full border border-white/30 hover:border-[#dfd0bd] hover:text-[#dfd0bd] flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/terramorarg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-white/30 hover:border-[#dfd0bd] hover:text-[#dfd0bd] flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm uppercase tracking-widest mb-1">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navigation.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/75 hover:text-[#dfd0bd] hover:underline underline-offset-4 decoration-[#dfd0bd]/70 text-body font-normal transition-colors duration-200 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm uppercase tracking-widest mb-1">
              Legal
            </h4>
            <ul className="space-y-3">
              {legal.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/75 hover:text-[#dfd0bd] hover:underline underline-offset-4 decoration-[#dfd0bd]/70 text-body font-normal transition-colors duration-200 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-label uppercase tracking-widest text-white/60 font-bold">
                Sedes
              </span>
              <p className="text-body text-white/75 font-normal">
                Córdoba · Buenos Aires
              </p>
            </div>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm uppercase tracking-widest mb-1">
              Contacto
            </h4>
            <ul className="space-y-3">
              {whatsapps.map((w) => (
                <li key={w.label}>
                  <a
                    href={`https://wa.me/${w.number}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/75 hover:text-[#dfd0bd] hover:underline underline-offset-4 decoration-[#dfd0bd]/70 text-body font-normal transition-colors duration-200 inline-block"
                  >
                    {w.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-white/75 hover:text-[#dfd0bd] hover:underline underline-offset-4 decoration-[#dfd0bd]/70 text-body font-normal transition-colors duration-200 inline-block break-all"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-label uppercase tracking-widest text-white/60 font-bold">
                Atención
              </span>
              <p className="text-body text-white/75 font-normal">
                Lun a sáb · 9:00 a 19:00 hs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="w-full border-t border-white/10">
        <div className="max-w-[min(85.5%,100rem)] mx-auto px-0 py-6 flex flex-wrap items-center justify-center lg:justify-between gap-x-10 gap-y-3 text-center">
          {[
            "Terramore Asociación Civil",
            "ONG habilitada por el Ministerio de Salud · REPROCANN",
            "© 2026 · www.terramore.com.ar",
            "Instagram · @terramorarg",
          ].map((item, idx) => (
            <span
              key={item}
              className={`text-label font-bold uppercase tracking-widest ${
                idx === 3
                  ? "text-[#dfd0bd]"
                  : "text-white/65"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}