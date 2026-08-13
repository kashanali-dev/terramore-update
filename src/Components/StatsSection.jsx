"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { value: 350, prefix: "+", suffix: "", label: "SOCIOS ACTIVOS" },
  { value: 4, prefix: "+", suffix: " AÑOS", label: "DE TRAYECTORIA" },
  { value: 2, prefix: "", suffix: " SEDES", label: "EN ARGENTINA" },
];

function useInView(threshold = 0.15, rootMargin = "0px 0px -10% 0px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      const t = window.setTimeout(() => setInView(true), 0);
      return () => window.clearTimeout(t);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

function useCountUp(target, active) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = window.setTimeout(() => setCount(target), 0);
      return () => window.clearTimeout(t);
    }
    let raf;
    const duration = 1800;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return count;
}

function StatItem({ stat, active }) {
  const count = useCountUp(stat.value, active);

  return (
    <div className="flex flex-col items-center justify-center text-center w-full">
      {/* Reduced Proportional Heading Size */}
      <h2 className="text-h1 font-black text-[#e5dac6] uppercase tracking-display mb-1 tabular-nums font-brand-special">
        {stat.prefix}
        {count}
        {stat.suffix}
      </h2>

      {/* Proportional Fine Label Text */}
      <p className="text-label font-bold text-[#e5dac6]/90 uppercase tracking-widest mt-2 font-gc-vank">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const [sectionRef, inView] = useInView();

  return (
    <section
      id="estadisticas"
      ref={sectionRef}
      className="relative w-full min-h-screen md:min-h-fit flex flex-col justify-center items-center py-20 md:py-24 bg-[#0a0f0a] overflow-hidden"
    >
      {/* Background Image Optimization */}
      <Image
        src="/back.png"
        alt="Stats Background"
        fill
        loading="lazy"
        quality={95}
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none"
      />

      {/* Corrected Light/Vibrant Soft Greenish Overlay - Leaves will now look exactly like your image */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0f0a]/30 via-transparent to-[#0a0f0a]/30 z-10"></div>

      {/* Main Container Layout */}
      <div className="relative z-20 w-full max-w-[min(85.5%,100rem)] mx-auto flex flex-col justify-center items-center">
        {/* Exact Tinted Wide Pill Box with Original Padding */}
        <div className="w-full bg-[#1e2716]/55 border border-white/4 backdrop-blur-[1px] rounded-[50px] md:rounded-[75px] py-14 md:py-16 px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center justify-center text-center">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} active={inView} />
          ))}
        </div>

        {/* Bottom Dual Brands Layout */}
        <div className="w-full max-w-4xl flex flex-row justify-around items-center gap-6 mt-14 md:mt-16 text-center">
          {/* Legal Firm Brand */}
          <div className="flex justify-center">
            <p className="text-label font-bold text-[#e5dac6]/85 tracking-widest uppercase font-dx-monstral">
              ESTUDIO DE
              <br />
              ABOGADOS ROBLES
            </p>
          </div>

          {/* Medical Brand */}
          <div className="flex justify-center">
            <p className="text-label font-bold text-[#e5dac6]/85 tracking-widest uppercase font-dx-monstral">
              LABORATORIO
              <br />
              PROPIO ARMEDIC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
