import PageHero from "@/Components/Common/PageHero";
import { SITE } from "@/lib/products";

export const metadata = {
  title: "Política de Privacidad",
  description:
    "Conocé cómo Terramore protege tus datos personales: qué información recopilamos, cómo la usamos, tus derechos según la Ley 25.326 y cómo contactarnos.",
};

const sections = [
  {
    n: "01",
    t: "Introducción",
    body: [
      `En ${SITE.name} respetamos tu privacidad y protegemos tus datos personales. Esta Política de Privacidad explica qué información recopilamos, cómo la utilizamos, con quién la compartimos y cuáles son tus derechos como usuario, de acuerdo con la Ley Nacional de Protección de Datos Personales N.° 25.326 y sus normas complementarias.`,
      "Al navegar por nuestro sitio o iniciar un proceso de consulta, aceptás los términos de esta política.",
    ],
  },
  {
    n: "02",
    t: "Datos que recopilamos",
    body: [
      "Recopilamos únicamente la información necesaria para brindarte nuestro servicio de acompañamiento al acceso legal del cannabis medicinal:",
      "Nombre y apellido; documento de identidad; datos de contacto (teléfono, email); preferencia de sede (Córdoba, Buenos Aires, Argentina); información de tu proceso (turnos médicos, certificación REPROCANN); datos de navegación del sitio (cookies analíticas).",
    ],
  },
  {
    n: "03",
    t: "Uso de la información",
    body: [
      "Utilizamos tus datos para: procesar tus consultas y pedidos; coordinar turnos médicos y gestionar la habilitación REPROCANN junto a nuestro equipo legal; responder por WhatsApp, email o teléfono; mejorar nuestros productos, sitio y atención; y cumplir con obligaciones legales vigentes.",
      "No vendemos, alquilamos ni compartimos tus datos con terceros con fines comerciales.",
    ],
  },
  {
    n: "04",
    t: "Base legal y confidencialidad",
    body: [
      "Tu información se procesa en el marco del consentimiento que otorgás al iniciar una consulta y de la relación contractual establecida al asociarte. Toda la información médica y personal es tratada con estricta confidencialidad y solo la utiliza el equipo autorizado (médico, legal y de laboratorio) para tu proceso.",
    ],
  },
  {
    n: "05",
    t: "Cookies y datos de navegación",
    body: [
      "Nuestro sitio puede utilizar cookies propias o de terceros con fines técnicos y analíticos, para medir el tráfico y mejorar la experiencia. Podés configurar tu navegador para rechazarlas; sin embargo, algunas funciones podrían verse afectadas.",
    ],
  },
  {
    n: "06",
    t: "WhatsApp y comunicaciones",
    body: [
      "Las conversaciones que mantenés con nuestro equipo por WhatsApp forman parte de nuestra operación y se utilizan exclusivamente para gestionar tu consulta, coordinación y seguimiento. Tenés derecho a solicitar el cese de las comunicaciones cuando lo desees.",
    ],
  },
  {
    n: "07",
    t: "Compartición de información",
    body: [
      "Compartimos tu información únicamente con: profesionales médicos del circuito; estudio de abogados para la gestión de REPROCANN; laboratorio propio para la trazabilidad de productos; y organismos oficiales cuando la ley lo exija.",
    ],
  },
  {
    n: "08",
    t: "Seguridad de los datos",
    body: [
      "Implementamos medidas técnicas y organizativas razonables para proteger tu información contra accesos no autorizados, pérdidas o alteraciones, conforme a los estándares aplicables en Argentina.",
    ],
  },
  {
    n: "09",
    t: "Tus derechos (Ley 25.326)",
    body: [
      "Como titular de los datos, tenés derecho a: consultar los datos que tenemos sobre vos (acceso); solicitar su rectificación, actualización o supresión; y oponerte a su tratamiento en los casos previstos por la ley.",
      "Para ejercer estos derechos escribinos a contacto@terramore.com.ar. La Dirección Nacional de Protección de Datos Personales es el órgano de control competente.",
    ],
  },
  {
    n: "10",
    t: "Cambios en esta política",
    body: [
      "Podemos actualizar esta política periódicamente para reflejar cambios normativos o de nuestro servicio. La versión vigente será siempre la publicada en esta página, con su fecha de última actualización.",
    ],
  },
];

export default function PrivacidadPage() {
  return (
    <>
      <PageHero
        title="Política de Privacidad"
        subtitle="Tu información está protegida. Conocé cómo la recopilamos, la usamos y cómo ejercer tus derechos."
        image="/back.png"
        crumbs={[{ label: "Política de Privacidad" }]}
      />

      <section className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-[#0a0f0a] text-white">
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-12">
          <div className="bg-[#162713] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <p className="text-body font-normal text-white/80">
              Fecha de última actualización:{" "}
              <strong className="text-white font-bold">Agosto 2026</strong>
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-[#dfd0bd] font-bold text-sm uppercase tracking-widest hover:text-white transition-colors"
            >
              {SITE.email}
            </a>
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
                    <p
                      key={i}
                      className="text-body font-normal text-white/80"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contact block */}
          <div className="bg-[#162713] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-4">
            <h3 className="text-h3 font-black uppercase tracking-sub">
              Contacto de privacidad
            </h3>
            <p className="text-body font-normal text-white/70">
              Ante cualquier duda sobre el tratamiento de tus datos personales,
              escribinos a{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-[#dfd0bd] font-bold hover:text-white transition-colors"
              >
                {SITE.email}
              </a>{" "}
              o por WhatsApp. Respondemos todas las consultas dentro de las 48
              horas hábiles.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}