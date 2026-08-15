import Link from "next/link";
import Image from "next/image";
import PageHero from "@/Components/Common/PageHero";

export const metadata = {
  title: "Sobre nosotros",
  description:
    "Terramore es una ONG habilitada en REPROCANN que acompaña a pacientes en el acceso legal al cannabis medicinal con equipo médico, estudio de abogados y laboratorio propio.",
};

const values = [
  {
    titulo: "Legalidad",
    desc: "Trabajamos 100% dentro del marco de REPROCANN y del Ministerio de Salud de la Nación, con abogados del Estudio Robles.",
  },
  {
    titulo: "Acompañamiento",
    desc: "Personas reales responden por WhatsApp. Médicos, abogados y asesores acompañan cada paso de tu proceso.",
  },
  {
    titulo: "Calidad de laboratorio",
    desc: "Todos nuestros productos se analizan lote a lote en el laboratorio propio ArMedic con trazabilidad completa.",
  },
  {
    titulo: "Educación",
    desc: "Te explicamos cómo funciona la habilitación, cómo se dosifican los productos y qué esperar en cada etapa.",
  },
];

const steps = [
  {
    n: "01",
    t: "Escribinos por WhatsApp",
    d: "Una persona real te responde, sin bots ni formularios.",
  },
  {
    n: "02",
    t: "Primera consulta",
    d: "Te contamos cómo funciona Terramore y qué productos hay para tu caso.",
  },
  {
    n: "03",
    t: "Turno médico",
    d: "Te conectamos con nuestro médico, online o presencial.",
  },
  {
    n: "04",
    t: "Habilitación REPROCANN",
    d: "En 24 a 72 hs tenés tu habilitación legal y acceso a nuestros productos.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        title="Sobre Terramore"
        subtitle="Una ONG que une el derecho, la medicina y el laboratorio propio para que accedas de forma legal y acompañada al cannabis medicinal."
        image="/steps.webp"
        crumbs={[{ label: "About Us" }]}
      />

      {/* Mission split */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div className="relative bg-[#040604] flex items-center px-8 sm:px-16 lg:px-24 py-16 justify-center md:justify-start">
          <Image
            src="/fort.webp"
            alt="Cultivo Terramore"
            fill
            priority
            quality={75}
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover object-center z-0 pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="relative z-20 w-full max-w-xl text-left">
            <span className="text-[#dfd0bd] text-label font-bold uppercase tracking-[0.25em] mb-4 block">
              Nuestra misión
            </span>
            <h2 className="text-h2 font-black text-[#f3ebd9] uppercase tracking-display">
              Acceso legal,
              <br /> sin barreras,
              <br /> con <br className="sm:hidden" /> acompañamiento
            </h2>
          </div>
        </div>

        <div className="bg-[#162713] flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-16 text-[#e5dac6]">
          <div className="max-w-xl w-full flex flex-col space-y-4 text-left mx-auto">
            <p className="text-body font-normal text-[#fdfcf7]/90">
              La mayoría de las personas que nos contactan tienen las mismas
              dudas: si es legal, cuánto cuesta, cuánto tarda y si alguien las
              va a acompañar. En Terramore respondemos cada pregunta y después
              acompañamos cada paso.
            </p>
            <p className="text-body font-normal text-[#fdfcf7]/85">
              Somos una organización habilitada en el Registro del Programa
              REPROCANN del Ministerio de Salud de la Nación. Nuestro circuito
              integra un estudio de abogados, profesionales médicos y un
              laboratorio propio de análisis para que tu acceso sea seguro,
              trazable y legal.
            </p>
            <p className="text-body font-normal text-[#fdfcf7]/85">
              Sin membresía, sin costos ocultos: solo el turno médico y el
              acompañamiento de principio a fin.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-20 md:py-24 bg-[#0a0f0a] text-white">
        <div className="max-w-[min(85.5%,100rem)] mx-auto w-full flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-3xl">
            <span className="text-[#dfd0bd] text-label font-bold uppercase tracking-[0.25em]">
              Qué nos define
            </span>
            <h2 className="text-h2 font-black uppercase tracking-display">
              Nuestros valores
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.titulo}
                className="bg-[#162713] border border-white/5 rounded-3xl p-7 flex flex-col gap-4 hover:border-[#dfd0bd]/30 transition-colors"
              >
                <span className="text-h2 font-black text-[#dfd0bd]/60">
                  0{i + 1}
                </span>
                <h3 className="text-h3 font-black uppercase tracking-sub">
                  {v.titulo}
                </h3>
                <p className="text-body font-normal text-white/80">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-20 bg-[#162713] text-white">
        <div className="max-w-[min(85.5%,100rem)] mx-auto w-full">
          <div className="w-full bg-[#1e2716]/70 border border-white/10 rounded-[50px] py-14 px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "+350", label: "Socios activos" },
              { value: "+4 años", label: "De trayectoria" },
              { value: "2 sedes", label: "En Argentina" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <h3 className="text-h1 font-black text-[#e5dac6] tracking-display">
                  {s.value}
                </h3>
                <p className="text-label font-bold text-[#e5dac6]/80 uppercase tracking-widest">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="w-full py-20 md:py-24 bg-[#0a0f0a] text-white">
        <div className="max-w-[min(85.5%,100rem)] mx-auto w-full flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-3xl">
            <span className="text-[#dfd0bd] text-label font-bold uppercase tracking-[0.25em]">
              Cómo trabajamos
            </span>
            <h2 className="text-h2 font-black uppercase tracking-display">
              El proceso, paso a paso
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group bg-[#1b2f15]/90 border border-white/10 rounded-3xl p-7 flex flex-col gap-5 hover:border-[#dfd0bd]/50 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-h2 font-black text-[#dfd0bd]/70">
                    {s.n}
                  </span>
                  <span className="flex items-center justify-center h-14 w-14 text-white/80 group-hover:text-[#dfd0bd] transition-colors">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 3H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2v3l3-3h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                      <path d="M5 6h6M5 9h4" />
                    </svg>
                  </span>
                </div>
                <div className="h-px w-full bg-white/10"></div>
                <h3 className="text-h3 font-black uppercase tracking-sub">
                  {s.t}
                </h3>
                <p className="text-body font-normal text-white/85">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="w-full py-16 bg-[#162713] text-white">
        <div className="max-w-[min(85.5%,100rem)] mx-auto w-full flex flex-col gap-10">
          <h2 className="text-h2 font-black uppercase tracking-display text-center">
            Un circuito profesional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            <div className="bg-[#1e2716]/70 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center gap-3">
              <h3 className="text-h3 font-black uppercase tracking-sub text-[#dfd0bd]">
                Estudio de Abogados Robles
              </h3>
              <p className="text-body font-normal text-white/80">
                Asesoramiento legal y gestión de tu habilitación REPROCANN ante
                el Ministerio de Salud de la Nación.
              </p>
            </div>
            <div className="bg-[#1e2716]/70 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center gap-3">
              <h3 className="text-h3 font-black uppercase tracking-sub text-[#dfd0bd]">
                Laboratorio propio ArMedic
              </h3>
              <p className="text-body font-normal text-white/80">
                Análisis lote a lote, trazabilidad completa y productos
                certificados que podés solicitar por WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-20 bg-[#0c150b] text-white">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center gap-6">
          <h2 className="text-h2 font-black uppercase tracking-display">
            ¿Querés empezar tu proceso?
          </h2>
          <p className="text-body font-normal text-white/85 max-w-xl">
            Escribinos y te contamos todo en 5 minutos. Sin membresía, sin
            costos ocultos: solo el turno médico.
          </p>
          <Link
            href="/cotizar"
            className="bg-[#dfd0bd] hover:bg-white text-[#162713] font-black text-sm uppercase tracking-[0.15em] py-4 px-10 rounded-full transition-colors"
          >
            Empezar ahora
          </Link>
        </div>
      </section>
    </>
  );
}