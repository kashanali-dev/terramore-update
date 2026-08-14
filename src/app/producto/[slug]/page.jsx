import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products, getProductBySlug, getRelatedProducts, SITE } from "@/lib/products";
import ProductDetailClient from "@/Components/ProductDetailClient";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.nombre} — ${product.categoria}`,
    description: product.resumen,
    keywords: [
      product.nombre.toLowerCase(),
      "cannabis medicinal",
      product.categoria.toLowerCase(),
      "comprar aceite de cannabis medicinal argentina",
      "REPROCANN",
    ],
    openGraph: {
      title: `${product.nombre} | Terramore`,
      description: product.resumen,
      images: [{ url: product.imagen, alt: product.nombre }],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.nombre,
    image: [`${SITE.domain}${product.imagen}`],
    description: product.resumen,
    brand: { "@type": "Organization", name: SITE.name },
    category: product.categoria,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.domain },
      {
        "@type": "ListItem",
        position: 2,
        name: "Productos",
        item: `${SITE.domain}/#productos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.nombre,
        item: `${SITE.domain}/producto/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <section className="relative w-full pt-32 md:pt-36 pb-16 bg-[#0a0f0a] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.png"
            alt=""
            fill
            quality={75}
            sizes="100vw"
            className="object-cover object-center pointer-events-none"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0f0a]/95 via-[#0a0f0a]/85 to-[#0a0f0a]/95 z-10" />

        <div className="relative z-20 w-full max-w-[min(85.5%,100rem)] mx-auto flex flex-col gap-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-label font-normal tracking-widest uppercase text-white/60"
          >
            <Link href="/" className="hover:text-[#dfd0bd] transition-colors">
              Inicio
            </Link>
            <span className="text-white/40">/</span>
            <Link href="/#productos" className="hover:text-[#dfd0bd] transition-colors">
              Productos
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-[#dfd0bd]">{product.nombre}</span>
          </nav>

          <ProductDetailClient product={product} />
        </div>
      </section>

      {/* Related products */}
      <section className="w-full py-16 bg-[#162713] text-white">
        <div className="max-w-[min(85.5%,100rem)] mx-auto w-full flex flex-col gap-8">
          <h2 className="text-h2 font-black uppercase tracking-display">
            Productos relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/producto/${p.slug}`}
                className="group bg-[#1b2f15]/95 border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.01] hover:border-[#dfd0bd]/40"
              >
                <span className="text-label font-bold tracking-widest text-white/80 mb-3 uppercase">
                  {p.categoria}
                </span>
                <div className="w-full h-36 relative my-3">
                  <Image
                    src={p.imagen}
                    alt={p.nombre}
                    fill
                    sizes="(max-width:1024px) 50vw, 25vw"
                    loading="lazy"
                    className="object-contain pointer-events-none drop-shadow-[0_14px_22px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-h3 font-black uppercase tracking-sub text-white mt-4">
                  {p.nombre}
                </h3>
                <span className="text-[#dfd0bd] font-bold mt-2">{p.categoria}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}