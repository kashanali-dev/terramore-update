import PageHero from "@/Components/Common/PageHero";
import { SITE } from "@/lib/products";

export const metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de Terramore: requisitos para ser socio, uso de los productos medicinales, precios, pedidos, entregas y limitación de responsabilidad.",
};

const sections = [
  {
    n: "01",
    t: "Aceptación de los términos",
    body: [
      `Estos Términos y Condiciones regulan el uso del sitio web y los servicios de ${SITE.name}. Al navegar por el sitio, consultar nuestros productos o iniciar un proceso de asociación, aceptás estos términos en su totalidad.`,
      "Si no estás de acuerdo con alguna de sus disposiciones, te pedimos que no utilices nuestros servicios.",
    ],
  },
  {
    n: "02",
    t: "Nuestro servicio",
    body: [
      `${SITE.name} es una organización no gubernamental que acompaña a pacientes en el acceso legal al cannabis medicinal dentro del marco del programa REPROCANN del Ministerio de Salud de la Nación.`,
      "Nuestros productos medicinales se ofrecen exclusivamente a socios mayores de edad con certificación médica vigente y habilitación REPROCANN gestionada por nuestro equipo.",
    ],
  },
  {
    n: "03",
    t: "Requisitos para ser socio",
    body: [
      "Para acceder a nuestros productos y servicios es necesario: ser mayor de 18 años; contar con indicación y seguimiento de un profesional de la salud; completar el proceso de asociación; y mantener vigente la habilitación REPROCANN.",
      "El uso de nuestros productos tiene fines terapéuticos. Queda prohibida su utilización con fines recreativos o cualquier uso fuera de la indicación médica.",
    ],
  },
  {
    n: "04",
    t: "Precios y pagos",
    body: [
      "Los precios publicados en el sitio son referenciales y pueden variar según la disponibilidad, la sede y las condiciones del mercado. El valor final de cada pedido se confirma con nuestro equipo por WhatsApp antes del despacho.",
      "Los pagos se gestionan a través de los medios de cobro que indiquemos en cada momento y por el canal de coordinación (WhatsApp).",
    ],
  },
  {
    n: "05",
    t: "Pedidos y entregas",
    body: [
      "Los pedidos se confirman luego de la coordinación con nuestro equipo. Organizamos entregas en Córdoba, Buenos Aires y envíos al interior del país según la sede y la disponibilidad.",
      "Los plazos de entrega se informan al momento de confirmar cada pedido y pueden verse afectados por condiciones logísticas externas.",
    ],
  },
  {
    n: "06",
    t: "Devoluciones y cambios",
    body: [
      "Por tratarse de productos de uso terapéutico y medidas sanitarias, los productos abiertos no pueden ser devueltos. Si recibís un producto en mal estado o con un lote con novedades, escribinos dentro de las 48 horas y coordinamos la solución.",
      "Cada frasco cuenta con trazabilidad de lote para poder gestionar cualquier reclamo.",
    ],
  },
  {
    n: "07",
    t: "Propiedad intelectual",
    body: [
      `El contenido de este sitio (textos, imágenes, logotipos y diseño) es propiedad de ${SITE.name} y no puede ser reproducido sin autorización escrita.`,
    ],
  },
  {
    n: "08",
    t: "Limitación de responsabilidad",
    body: [
      `Nuestra organización acompaña tu proceso, pero la responsabilidad final sobre la dosificación y el uso de los productos corresponde al paciente junto con su profesional de la salud. ${SITE.name} no se responsabiliza por el uso indebido de los productos.`,
    ],
  },
  {
    n: "09",
    t: "Ley aplicable",
    body: [
      "Estos términos se rigen por la legislación de la República Argentina. Ante cualquier controversia, las partes se someten a los tribunales competentes de la República Argentina.",
    ],
  },
  {
    n: "10",
    t: "Contacto",
    body: [
      `Para consultas sobre estos términos, escribinos a ${SITE.email} o por WhatsApp a cualquiera de nuestras sedes.`,
    ],
  },
];

export default function TerminosPage() {
  return (
    <>
      <PageHero
        title="Términos y Condiciones"
        subtitle="Conocé las condiciones de uso de nuestros servicios y de la compra de nuestros productos medicinales."
        image="/back.webp"
        crumbs={[{ label: "Términos y Condiciones" }]}
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