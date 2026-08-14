"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { SITE } from "@/lib/products";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/#productos" },
  { label: "Sedes", href: "/#sedes" },
  { label: "Cotizar", href: "/cotizar" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { count, ready } = useCart();

  const waHref = `https://web.whatsapp.com/send?phone=${SITE.whatsapp.cordoba}&text=${encodeURIComponent(
    SITE.whatsappMessage,
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      const shouldScroll = window.scrollY > 10;
      setIsScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      suppressHydrationWarning={true}
      className={`fixed top-0 left-0 w-full z-50 select-none antialiased transition-all duration-300 ${
        isScrolled
          ? "bg-[#162713] border-b border-white/10 h-20 shadow-2xl"
          : "bg-transparent border-b border-white/0 h-24"
      }`}
    >
      <div className="w-full max-w-[min(85.5%,100rem)] mx-auto h-full px-0">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-white font-black text-h2 tracking-wider uppercase font-brand-display transition-transform duration-200 active:scale-95 block"
            >
              TERRAMORE
            </Link>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white font-bold text-sm uppercase tracking-wider transition-colors duration-200 hover:text-[#dfd0bd]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Cart */}
            <Link
              href="/carrito"
              aria-label="Carrito de compras"
              className="relative text-white/90 hover:text-[#dfd0bd] transition-colors p-2"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {ready && count > 0 ? (
                <span className="absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 rounded-full bg-[#dfd0bd] text-[#162713] text-xs font-black flex items-center justify-center">
                  {count}
                </span>
              ) : null}
            </Link>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/50 hover:border-white text-white font-bold text-sm tracking-wider uppercase py-2 px-7 rounded-full transition-all duration-200 whitespace-nowrap bg-white/5 hover:bg-white/10"
            >
              Consultar
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="text-white/80 hover:text-white focus:outline-none p-2 block"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-100 bg-[#162713] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-24 border-b border-white/5">
          <span className="text-white font-black text-h2 tracking-wider uppercase font-brand-display">
            TERRAMORE
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white p-2 focus:outline-none"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
          {[...NAV_LINKS, { label: "Carrito", href: "/carrito" }].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white font-bold text-sm uppercase tracking-widest py-3.5 border-b border-white/5"
            >
              {link.label}
              {link.label === "Carrito" && count > 0 ? (
                <span className="ml-2 inline-block min-w-5 h-5 px-1 rounded-full bg-[#dfd0bd] text-[#162713] text-xs font-black text-center leading-5">
                  {count}
                </span>
              ) : null}
            </Link>
          ))}

          <div className="pt-8 space-y-4">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#dfd0bd] text-[#162713] font-bold text-sm uppercase tracking-widest py-3.5 rounded-full dynamic-click"
            >
              Consultar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}