import PageHero from "@/Components/Common/PageHero";
import { SITE } from "@/lib/products";

export const metadata = {
  title: "Aviso Médico",
  description:
    "Aviso médico de Terramore: la información de este sitio no reemplaza la consulta con un profesional de la salud. Los productos son exclusivos para pacientes con certificación médica REPROCANN.",
};

const sections = [
  {
    n: "01",
    t: "Información informativa",
    body: [
      `El contenido publicado en el sitio de ${SITE.name} —textos, fichas de producto, recomendaciones de uso y respuestas a preguntas frecuentes— tiene carácter exclusivamente informativo y educativo.`,
      "No constituye consejo médico, diagnóstico ni prescripción.",
    ],
  },
  {
    n: "02",
    t: "Consultá siempre a tu médico",
    body: [
      "Antes de iniciar, modificar o suspender cualquier tratamiento con productos de cannabis medicinal, consultá siempre con un profesional de la salud. Cada organismo y cada condición son únicos.",
      "La indicación y la dosificación deben ser definidas por tu médico, preferentemente dentro del circuito de profesionales que acompañan tu proceso en Terramore.",
    ],
  },
  {
    n: "03",
    t: "Dosificación y responsabilidad",
    body: [
      "Las dosis de referencia que aparecen en las fichas de producto son orientativas. La responsabilidad final sobre la dosificación y el uso correcto de los productos corresponde al paciente junto con su profesional de la salud.",
      `${SITE.name} no se responsabiliza por el uso indebido, la automedicación o el incumplimiento de la indicación médica.`,
    ],
  },
  {
    n: "04",
    t: "REPROCANN y legalidad",
    body: [
      "Nuestros productos se ofrecen exclusivamente dentro del marco del programa REPROCANN del Ministerio de Salud de la Nación, a socios mayores de edad con certificación médica vigente.",
      "El uso recreativo del cannabis permanece fuera del alcance de nuestro servicio.",
    ],
  },
  {
    n: "05",
    t: "Contraindicaciones y efectos adversos",
    body: [
      "Como cualquier sustancia terapéutica, los productos de cannabis medicinal pueden presentar interacciones o efectos adversos según la persona. Informá siempre a tu médico sobre tus antecedentes, medicación actual y cualquier molestia que experimentes.",
      "No uses estos productos si estás embarazada o en período de lactancia sin autorización médica expresa.",
    ],
  },
  {
    n: "06",
    t: "No sustituye emergencias",
    body: [
      "En caso de emergencia o reacción adversa grave, contactá inmediatamente a un servicio de emergencias de tu localidad o concurrí al centro de salud más cercano.",
      "Nuestro canal de WhatsApp no es un servicio de urgencias.",
    ],
  },
  {
    n: "07",
    t: "Contacto",
    body: [
      `Si tenés dudas sobre tu tratamiento o sobre esta información, escribinos a ${SITE.email} o por WhatsApp a cualquiera de nuestras sedes.`,
    ],
  },
];

export default function AvisoMedicoPage() {
  return (
    <>
      <PageHero
        title="Aviso Médico"
        subtitle="Información importante sobre el uso de productos de cannabis medicinal y tu responsabilidad como paciente."
        image="/back.png"
        crumbs={[{ label: "Aviso Médico" }]}
      />

      <section className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-[#0a0f0a] text-white">
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-12">
          {/* Destacado */}
          <div className="bg-[#dfd0bd]/10 border border-[#dfd0bd]/30 rounded-3xl p-6 md:p-8 flex gap-4">
            <svg className="w-7 h-7 text-[#dfd0bd] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
            <p className="text-body font-normal text-white/85">
              <strong className="text-white font-bold">Antes de usar cualquier producto:</strong>{" "}
              consultá con tu médico. La información de este sitio no reemplaza,
              en ningún caso, la opinión de un profesional de la salud.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <section key={s.n} className="flex flex-col gap-3">
                <div className="flex items-baseline gap-4">
                  <span className="text-[#dfd0bd] text-label font-bold tracking-widest shrink-0">
                    {s.n}
                  </span>
                  <h2 className="text-h2 font-black uppercase tracking-display">
                    {s.t}
                  </h2>
                </div>
                <div className="flex flex-col gap-3 pl-0 sm:pl-12">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-body font-normal text-white/80">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}