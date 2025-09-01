// components/sections/FAQ.tsx
"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "@/lib/utils";

export interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lovell-logo-text)]">
            Preguntas frecuentes
          </h2>
          <p className="mt-2 text-[var(--lovell-muted)]">
            Resolvemos las dudas más comunes sobre nuestros modelos y servicios.
          </p>
        </div>

        <div className="divide-y divide-[var(--lovell-line)] rounded-2xl border border-[var(--lovell-line)] bg-[var(--lovell-bg-soft)]">
          {items.map((item, idx) => (
            <div key={idx}>
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between px-6 py-4 text-left text-[var(--lovell-logo-text)] font-medium focus:outline-none"
              >
                <span>{item.q}</span>
                <FiChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    openIndex === idx && "rotate-180 text-[var(--lovell-teal)]"
                  )}
                />
              </button>
              <div
                className={cn(
                  "px-6 pb-4 text-[var(--lovell-muted)] text-sm transition-all duration-200 ease-in-out",
                  openIndex === idx ? "block" : "hidden"
                )}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
