import { products, SITE } from "@/lib/products";

export default function sitemap() {
  const base = SITE.domain;

  const staticRoutes = [
    "",
    "/nosotros",
    "/carrito",
    "/cotizar",
    "/privacidad",
    "/terminos",
    "/aviso-medico",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/producto/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}