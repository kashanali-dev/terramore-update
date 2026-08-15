import PageHero from "@/Components/Common/PageHero";
import CartClient from "@/Components/CartClient";

export const metadata = {
  title: "Carrito de compras",
  description:
    "Revisá tu carrito de productos medicinales de Terramore: aceites, flores, cremas y extractos analizados en laboratorio propio. Coordiná la entrega por WhatsApp.",
};

export default function CartPage() {
  return (
    <>
      <PageHero
        title="Carrito de compras"
        subtitle="Revisá los productos de tu plan terapéutico y coordiná tu pedido con nuestro equipo."
        image="/bg.webp"
        crumbs={[{ label: "Carrito" }]}
      />
      <section className="w-full py-14 md:py-20 bg-[#0a0f0a] min-h-[60vh]">
        <div className="max-w-[min(85.5%,100rem)] mx-auto w-full">
          <CartClient />
        </div>
      </section>
    </>
  );
}