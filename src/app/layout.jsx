import "./globals.css";
import Header from "@/Components/Common/Header";
import Footer from "@/Components/Common/Footer";
import BackToTop from "@/Components/Common/BackToTop";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  metadataBase: new URL("https://terramore.com.ar"),
  title: {
    default:
      "Terramore | Cannabis Medicinal Legal en Argentina · Córdoba y Buenos Aires",
    template: "%s | Terramore",
  },
  description:
    "Terramore es una ONG habilitada por el Ministerio de Salud para el acceso legal, seguro y acompañado al cannabis medicinal. REPROCANN sin membresía. Córdoba y Buenos Aires.",
  keywords: [
    "cannabis medicinal Argentina",
    "REPROCANN",
    "ONG cannabis medicinal",
    "cannabis medicinal Buenos Aires",
    "cannabis medicinal Córdoba",
    "aceite CBD Argentina",
    "acceso legal cannabis",
    "laboratorio propio",
  ],
  openGraph: {
    title:
      "Terramore | Cannabis Medicinal Legal en Argentina · Córdoba y Buenos Aires",
    description:
      "ONG habilitada por el Ministerio de Salud para el acceso legal, seguro y acompañado al cannabis medicinal. REPROCANN sin membresía. Córdoba y Buenos Aires.",
    url: "https://terramore.com.ar",
    siteName: "Terramore",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "Terramore | Cannabis Medicinal Legal en Argentina · Córdoba y Buenos Aires",
    description:
      "ONG habilitada por el Ministerio de Salud para el acceso legal al cannabis medicinal. REPROCANN sin membresía.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body id="top" className="min-h-full flex flex-col">
        <CartProvider>
          <Header />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
          <BackToTop />
        </CartProvider>
      </body>
    </html>
  );
}