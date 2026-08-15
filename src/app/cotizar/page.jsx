import PageHero from "@/Components/Common/PageHero";
import QuoteClient from "@/Components/QuoteClient";

export const metadata = {
  title: "Cotizar ahora",
  description:
    "Solicitá tu cotización de productos medicinales de Terramore. Acompañamiento médico y legal, productos analizados en laboratorio propio y despacho en toda Argentina.",
};

export default function CotizarPage() {
  return (
    <>
      <PageHero
        title="Cotizar ahora"
        subtitle="Completá tus datos y te enviamos tu cotización por WhatsApp. Te contestamos rápido, con una persona real."
        image="/flower.webp"
        crumbs={[{ label: "Cotizar" }]}
      />
      <section className="w-full py-16 md:py-20 bg-[#0a0f0a] min-h-[60vh]">
        <div className="max-w-[min(85.5%,100rem)] mx-auto w-full">
          <QuoteClient />
        </div>
      </section>
    </>
  );
}