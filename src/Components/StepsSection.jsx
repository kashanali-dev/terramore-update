import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    n: "01",
    t: "Nos escribís por WhatsApp",
    d: "Una persona real te responde. Sin bots, sin formularios.",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zM12.04 20.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23a7.86 7.86 0 0 1-1.38-1.72c-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z" />
      </svg>
    ),
  },
  {
    n: "02",
    t: "Primera consulta",
    d: "Te contamos todo: qué es Terramore, cómo funciona y qué productos tenemos para tu caso.",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 3H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2v3l3-3h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
        <path d="M5 6h6M5 9h4" />
        <path d="M10 14h4l3 3v-3h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2" />
        <path d="M13 10h4" />
      </svg>
    ),
  },
  {
    n: "03",
    t: "Turno médico",
    d: "Te conectamos con nuestro médico. Online o presencial, como prefieras.",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 3v6a7 7 0 0 0 14 0V3" />
        <path d="M12 16v4a2 2 0 0 0 4 0v-2" />
        <circle cx="16" cy="16" r="1.5" />
      </svg>
    ),
  },
  {
    n: "04",
    t: "REPROCANN gestionado",
    d: "En 24 a 72 horas tenés tu habilitación legal y acceso a todos nuestros productos.",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
        <path d="M7 6h6M7 10h6M7 14h4" />
        <circle cx="16" cy="18" r="3" fill="#0a0f0a" className="stroke-[1.5]" />
        <polyline points="14.5 18 15.5 19 17.5 17" />
      </svg>
    ),
  },
];

export default function StepsSection() {
  return (
    <section
      id="como-funciona"
      className="relative min-h-screen md:min-h-fit w-full flex flex-col justify-center items-center py-24 md:py-28 bg-[#0a0f0a] overflow-hidden text-white"
    >
      {/* Background Image Optimization */}
      <Image
        src="/steps.png"
        alt="Steps Background"
        fill
        loading="lazy"
        quality={90}
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/15 z-10"></div>

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-[min(85.5%,100rem)] mx-auto flex flex-col items-center justify-center gap-12 md:gap-16">
        {/* Section Heading */}
        <div className="text-center">
          <span className="text-label font-bold tracking-widest uppercase text-[#dfd0bd]">
            Cómo funciona
          </span>
          <h2 className="text-h2 font-black text-white tracking-display uppercase mt-2">
            El proceso en 4 pasos
          </h2>
        </div>

        {/* Steps Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.n}
              className="group bg-[#1b2f15]/90 border border-white/10 rounded-3xl p-7 flex flex-col gap-5 hover:border-[#dfd0bd]/50 hover:-translate-y-1 transition-all duration-300 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-h2 font-black text-[#dfd0bd]/70">
                  {step.n}
                </span>
                <div className="text-white/80 group-hover:text-[#dfd0bd] transition-colors flex items-center justify-center h-14 w-14">
                  {step.icon}
                </div>
              </div>

              <div className="h-px w-full bg-white/10"></div>

              <h3 className="text-h3 font-black uppercase tracking-sub">
                {step.t}
              </h3>
              <p className="text-body font-normal text-white/85">
                {step.d}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button Area */}
        <div className="w-full flex justify-center pt-2 md:pt-4">
          <Link
            href="/cotizar"
            className="px-4 py-2 border border-white/60 text-white rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 bg-transparent"
          >
            EMPEZAR AHORA
          </Link>
        </div>
      </div>
    </section>
  );
}