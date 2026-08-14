"use client";

import React, { useState } from "react";
import { SITE, products } from "@/lib/products";

const tipos = [
  "Aceite medicinal",
  "Flores (Indoor / Outdoor)",
  "Crema medicinal",
  "Extracto / Resina",
  "Otra consulta",
];

const sedes = ["Córdoba", "Buenos Aires", "Otra provincia de Argentina"];

export default function QuoteClient() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    sede: sedes[0],
    tipo: tipos[0],
    producto: "",
    cantidad: "1",
    mensaje: "",
  });
  const [sent, setSent] = useState(false);

  const set = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = [
      "Hola Terramore, quiero solicitar una cotización:",
      "",
      `Nombre: ${form.nombre}`,
      `Teléfono: ${form.telefono}`,
      `Sede: ${form.sede}`,
      `Tipo: ${form.tipo}${form.producto ? ` (${form.producto})` : ""}`,
      `Cantidad: ${form.cantidad}`,
      form.mensaje ? `Consulta: ${form.mensaje}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const waHref = `https://web.whatsapp.com/send?phone=${SITE.whatsapp.cordoba}&text=${encodeURIComponent(message)}`;
    window.open(waHref, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const inputClass =
    "w-full bg-[#1b2f15]/70 border border-white/10 rounded-full px-5 py-3.5 text-body text-white placeholder:text-white/60 font-normal focus:outline-none focus:border-[#dfd0bd] transition-colors";

  const labelClass = "text-label uppercase tracking-widest text-[#dfd0bd] font-bold mb-2 block";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#162713] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-6"
      >
        <h2 className="text-h2 font-black uppercase tracking-display text-white">
          Contanos qué necesitás
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="nombre">
              Nombre completo *
            </label>
            <input
              id="nombre"
              required
              value={form.nombre}
              onChange={set("nombre")}
              placeholder="Tu nombre y apellido"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="telefono">
              Teléfono / WhatsApp *
            </label>
            <input
              id="telefono"
              required
              value={form.telefono}
              onChange={set("telefono")}
              placeholder="+54 9 ..."
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder="tucorreo@ejemplo.com"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="sede">
              Sede
            </label>
            <select id="sede" value={form.sede} onChange={set("sede")} className={inputClass}>
              {sedes.map((s) => (
                <option key={s} value={s} className="bg-[#162713]">
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="tipo">
              Tipo de producto
            </label>
            <select id="tipo" value={form.tipo} onChange={set("tipo")} className={inputClass}>
              {tipos.map((t) => (
                <option key={t} value={t} className="bg-[#162713]">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="producto">
              Producto específico
            </label>
            <select id="producto" value={form.producto} onChange={set("producto")} className={inputClass}>
              <option value="" className="bg-[#162713]">
                Sin especificar
              </option>
              {products.map((p) => (
                <option key={p.slug} value={p.nombre} className="bg-[#162713]">
                  {p.nombre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="cantidad">
              Cantidad
            </label>
            <input
              id="cantidad"
              type="number"
              min="1"
              value={form.cantidad}
              onChange={set("cantidad")}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="mensaje">
            Mensaje (opcional)
          </label>
          <textarea
            id="mensaje"
            rows={4}
            value={form.mensaje}
            onChange={set("mensaje")}
            placeholder="Contanos tu caso, tus dudas o lo que necesites cotizar."
            className="w-full bg-[#1b2f15]/70 border border-white/10 rounded-3xl px-5 py-4 text-body text-white placeholder:text-white/60 font-normal focus:outline-none focus:border-[#dfd0bd] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#dfd0bd] hover:bg-white text-[#162713] font-black text-sm uppercase tracking-[0.15em] py-4 px-8 rounded-full transition-colors shadow-md"
        >
          Enviar cotización por WhatsApp
        </button>

        {sent ? (
          <p className="text-sm text-[#dfd0bd] font-normal text-center">
            ✓ Abrimos tu WhatsApp con la cotización lista. ¡También podés
            seguir el proceso desde ahí!
          </p>
        ) : null}
      </form>

      {/* Side info */}
      <aside className="flex flex-col gap-6 lg:sticky lg:top-28">
        <div className="bg-[#162713] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-4">
          <h3 className="text-h3 font-black uppercase tracking-sub text-white">
            ¿Por qué cotizar con Terramore?
          </h3>
          <ul className="flex flex-col gap-3 text-body">
            {[
              "Te responde una persona real, sin bots.",
              "Acompañamiento médico y legal en todo el proceso.",
              "Productos analizados en laboratorio propio.",
              "Habilitación REPROCANN gestionada por nuestro equipo.",
              "Despachos en Córdoba, Buenos Aires y todo el país.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/85 font-normal">
                <svg
                  className="w-5 h-5 text-[#dfd0bd] shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#162713] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-4">
          <h3 className="text-h3 font-black uppercase tracking-sub text-white">
            Contacto directo
          </h3>
          <p className="text-body text-white/75 font-normal">
            Si preferís, escribinos directamente:
          </p>
          <a
            href={`https://web.whatsapp.com/send?phone=${SITE.whatsapp.cordoba}&text=${encodeURIComponent(SITE.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center border border-[#dfd0bd]/50 hover:bg-[#dfd0bd]/10 text-[#dfd0bd] font-bold text-sm uppercase tracking-widest py-3.5 px-6 rounded-full transition-colors"
          >
            WhatsApp directo
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="text-center border border-white/30 hover:border-white/60 text-white font-bold text-sm uppercase tracking-widest py-3.5 px-6 rounded-full transition-colors"
          >
            {SITE.email}
          </a>
        </div>
      </aside>
    </div>
  );
}