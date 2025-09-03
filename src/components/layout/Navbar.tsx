"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown, FiArrowUpRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * Lovell Navbar (fixed, transparente en Home, sólido en internas)
 * - Desktop: dropdown de Modelos
 * - Mobile: drawer con sección de Modelos expandible y CTAs
 */

type Mode = "light" | "dark";

interface NavbarProps {
  mode?: Mode; // "light" para hero oscura; "dark" para fondos claros
}

const NAV_LINKS = [
  { href: "/modelos", label: "Modelos" },
  { href: "/acerca", label: "¿Quiénes somos?" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/mantenimiento", label: "Mantenimiento" },
  { href: "/garantia", label: "Garantía" },
  { href: "/contacto", label: "Contacto" },
];

// Lista de modelos (ajusta slugs reales)
const NAV_MODELS: Array<{ slug: string; name: string; blurb: string; tag?: string }> = [
  { slug: "classic", name: "Classic", blurb: "Estructura estándar, robusta y versátil.", tag: "Popular" },
  { slug: "semi-panoramic", name: "Semi Panoramic", blurb: "Mayor visibilidad con laterales mixtos." },
  { slug: "panoramic-1", name: "Panoramic 1", blurb: "Vista despejada con refuerzos optimizados." },
  { slug: "panoramic-2", name: "Panoramic 2", blurb: "Equilibrio entre rigidez y estética." },
  { slug: "panoramic-3", name: "Panoramic 3", blurb: "Diseño premium para clubes exigentes.", tag: "Pro" },
  { slug: "panoramic-4", name: "Panoramic 4", blurb: "Máxima visibilidad y experiencia de juego." },
];

export default function Navbar({ mode = "light" }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modelsOpen, setModelsOpen] = useState(false);
  const [modelsMobileOpen, setModelsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Home => transparente; internas => sólido. En home cambia a sólido al hacer scroll
  const isHome = pathname === "/";
  const solid = !isHome || scrolled;

  // Colores de texto según modo y estado
  const baseText = mode === "light" ? "text-[var(--lovell-logo-text)]" : "text-[var(--lovell-logo-text)]";
  const hoverText = mode === "light" ? solid ? "hover:text-[var(--lovell-logo-text)]" :  "hover:text-[var(--lovell-logo-text)]" : "hover:text-[color-mix(in_srgb,var(--lovell-logo-text)_80%,black)]";

  return (
    <div
      className={[
        "fixed inset-x-0 top-0 z-50",
        solid
          ? "bg-white/85 border-b border-[var(--lovell-line)]"
          : "bg-white/85 border-b border-[var(--lovell-line)]",
      ].join(" ")}
      aria-label="Barra de navegación"
    >
      <nav className="mx-auto max-w-7xl px-4 pt-5 pb-7 md:px-6">
        <div className="flex h-16 items-center py-5 justify-between">
          {/* Logo */}
          <Link href="/" className="group inline-flex items-center gap-2 " aria-label="Lovell Home">
          {solid ? <Image src="../../logolovell.svg" alt="Lovell" width={200} height={50} /> : <Image src="../../logolovell.svg" alt="Lovell" width={200} height={50} /> }
            
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Dropdown Modelos */}
            <div className="relative">
              <button
                className={[
                  "relative px-3 py-2 text-sm font-medium inline-flex items-center gap-1",
                  solid ? "text-[var(--lovell-logo-text)]" : baseText,
                  hoverText,
                ].join(" ")}
                onMouseEnter={() => setModelsOpen(true)}
                onMouseLeave={() => setModelsOpen(false)}
                onClick={() => setModelsOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={modelsOpen}
              >
                Modelos <FiChevronDown className={`transition ${modelsOpen ? "rotate-180" : "rotate-0"}`} />
              </button>

              <AnimatePresence>
                {modelsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    onMouseEnter={() => setModelsOpen(true)}
                    onMouseLeave={() => setModelsOpen(false)}
                    className="absolute left-0 mt-2 w-[560px] rounded-2xl border border-[var(--lovell-line)] bg-white/90  p-3 shadow-brand-lg"
                    role="menu"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {NAV_MODELS.map((m) => (
                        <Link
                          key={m.slug}
                          href={`/modelos/${m.slug}`}
                          className="group rounded-xl p-3 hover:bg-[color-mix(in_srgb,var(--lovell-teal)_8%,white)] border border-transparent hover:border-[color-mix(in_srgb,var(--lovell-teal)_18%,white)]"
                        >
                          <div className="flex items-start justify-between">
                            <div className="text-[var(--lovell-logo-text)] font-semibold">{m.name}</div>
                            {m.tag && (
                              <span className="chip text-xs py-0.5">{m.tag}</span>
                            )}
                          </div>
                          <div className="mt-1 text-sm text-[var(--lovell-muted)]">{m.blurb}</div>
                          <div className="mt-2 inline-flex items-center gap-1 text-sm text-[var(--lovell-teal)]">
                            Ver detalles <FiArrowUpRight />
                          </div>
                        </Link>
                      ))}
                    </div>
                 
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resto de links */}
            {NAV_LINKS.filter(l => l.href !== "/modelos").map((l) => {
              const active = pathname?.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "relative px-3 py-2 text-sm font-medium transition-colors",
                    solid ? "text-[var(--lovell-logo-text)]" : baseText,
                    hoverText,
                  ].join(" ")}
                >
                  <span>{l.label}</span>
                  <span
                    className={[
                      "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full",
                      active ? "bg-[linear-gradient(90deg,var(--lovell-symbol),var(--lovell-teal))]" : "bg-transparent",
                    ].join(" ")}
                  />
                </Link>
              );
            })}

            <Link href="https://api.whatsapp.com/send/?phone=525555006260&text=Hola+L%C3%B6vell+%EF%BF%BD+Me+interesa+una+cancha+de+p%C3%A1del%2C+%C2%BFme+puedes+dar+m%C3%A1s+informaci%C3%B3n%3F&type=phone_number&app_absent=0" className="ml-2 inline-flex items-center rounded-xl px-3 py-2 text-sm font-semibold text-white" style={{ background: "var(--lovell-logo-text)" }}>
              Cotizar ahora
            </Link>
          </div>

          {/* Mobile: botón */}
          <button
            className={["md:hidden p-2 rounded-lg transition", solid ? "text-[var(--lovell-logo-text)]" : baseText, hoverText].join(" ")}
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer enriquecido */}
      <AnimatePresence>
        {open && (
          <motion.aside initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] md:hidden" aria-modal role="dialog">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="absolute right-0 top-0 h-full w-11/12 max-w-sm bg-white shadow-xl border-l border-[var(--lovell-line)]">
              {/* Header */}
              <div className="flex items-center justify-between px-4 h-16">
                <div className="inline-flex items-center gap-2">
                  <span className="text-lg font-semibold text-[var(--lovell-logo-text)]">Lövell</span>
                </div>
                <button className="p-2" onClick={() => setOpen(false)} aria-label="Cerrar menú">
                  <FiX className="h-6 w-6 text-[var(--lovell-logo-text)]" />
                </button>
              </div>

              {/* Banner de marca */}
              <div className="mx-3 mb-3 rounded-xl p-4 text-sm text-white brand-gradient">
                <div className="font-semibold">Canchas deportivas Lövell</div>
                <div className="opacity-90">Classic, Semi Panoramic y Panoramic 1–4 listas para cotizar.</div>
              </div>

              {/* Sección Modelos (expandible) */}
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-[var(--lovell-logo-text)]"
                onClick={() => setModelsMobileOpen((v) => !v)}
                aria-expanded={modelsMobileOpen}
              >
                Modelos <FiChevronDown className={`transition ${modelsMobileOpen ? "rotate-180" : "rotate-0"}`} />
              </button>
              <AnimatePresence initial={false}>
                {modelsMobileOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-2">
                    <ul className="space-y-1">
                      {NAV_MODELS.map((m) => (
                        <li key={m.slug}>
                          <Link
                            href={`/modelos/${m.slug}`}
                            className="block rounded-lg px-3 py-3 text-[var(--lovell-logo-text)] hover:bg-[color-mix(in_srgb,var(--lovell-teal)_8%,white)]"
                            onClick={() => setOpen(false)}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{m.name}</span>
                              {m.tag && <span className="chip text-xs py-0.5">{m.tag}</span>}
                            </div>
                            <p className="text-sm text-[var(--lovell-muted)]">{m.blurb}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  
                  </motion.div>
                )}
              </AnimatePresence>

             

              {/* Links restantes */}
              <div className="px-2 pb-6">
                <ul className="space-y-1">
                  {NAV_LINKS.filter(l => !["/modelos", "https://api.whatsapp.com/send/?phone=525555006260&text=Hola+L%C3%B6vell+%EF%BF%BD+Me+interesa+una+cancha+de+p%C3%A1del%2C+%C2%BFme+puedes+dar+m%C3%A1s+informaci%C3%B3n%3F&type=phone_number&app_absent=0"].includes(l.href)).map((l) => {
                    const active = pathname === l.href;
                    return (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className={[
                            "block rounded-lg px-3 py-3 text-base font-medium",
                            active
                              ? "bg-[color-mix(in_srgb,var(--lovell-teal)_12%,white)] text-[var(--lovell-logo-text)]"
                              : "text-[var(--lovell-logo-text)] hover:bg-[color-mix(in_srgb,var(--lovell-teal)_8%,white)]",
                          ].join(" ")}
                          onClick={() => setOpen(false)}
                        >
                          {l.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* CTA contacto */}
              <div className="mt-auto px-3 pb-6">
                <div className="card">
                  <div className="text-sm font-semibold text-[var(--lovell-logo-text)]">¿Necesitas asesoría?</div>
                  <p className="mt-1 text-sm text-[var(--lovell-muted)]">Te ayudamos a elegir el modelo ideal según tu proyecto.</p>
                  <Link href="https://api.whatsapp.com/send/?phone=525555006260&text=Hola+L%C3%B6vell+%EF%BF%BD+Me+interesa+una+cancha+de+p%C3%A1del%2C+%C2%BFme+puedes+dar+m%C3%A1s+informaci%C3%B3n%3F&type=phone_number&app_absent=0" className="mt-3 btn w-full justify-center" onClick={() => setOpen(false)}>
                    Hablar con un asesor
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}

/*
USO en tu Hero:
  <Navbar mode="light" />
*/
