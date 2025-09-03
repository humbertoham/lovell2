// components/ContactFormWhatsApp.tsx
"use client";

import * as React from "react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * Teléfono de WhatsApp en formato internacional sin signos/espacios.
 * Mexico (+52). Puedes moverlo a un .env como NEXT_PUBLIC_WHATSAPP_PHONE.
 */
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "525555006260"; 
// 52 + 5555006260  (de los PDFs)

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  ubicacion: string;   // ciudad/estado
  modelo: string;      // Classic / Semi Panoramic / Panoramic 1–4
  cantidad: number;
  mensaje: string;
};

const initialState: FormState = {
  nombre: "",
  email: "",
  telefono: "",
  ubicacion: "",
  modelo: "",
  cantidad: 1,
  mensaje: "",
};

export default function ContactFormWhatsApp({ className }: { className?: string }) {
  const [data, setData] = React.useState<FormState>(initialState);
  const [submitting, setSubmitting] = React.useState(false);

  function handleChange<T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(e: React.ChangeEvent<T>) {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: name === "cantidad" ? Number(value) : value }));
  }

  function buildMessage(d: FormState) {
    // Mensaje claro y compacto en varias líneas
    const lines = [
      "Hola Lövell 👋 Me interesa una cancha deportiva.",
      `• Nombre: ${d.nombre}`,
      `• Email: ${d.email}`,
      `• Teléfono: ${d.telefono}`,
      `• Ubicación: ${d.ubicacion}`,
      `• Modelo: ${d.modelo || "Por definir"}`,
      `• Cantidad: ${d.cantidad}`,
      d.mensaje ? `• Mensaje: ${d.mensaje}` : "",
    ].filter(Boolean);
    return lines.join("\n");
  }

  function openWhatsApp(d: FormState) {
    const text = encodeURIComponent(buildMessage(d));
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function validate(d: FormState) {
    if (!d.nombre.trim()) return "Ingresa tu nombre";
    if (!d.telefono.trim()) return "Ingresa tu teléfono";
    // Email opcional si usarás WhatsApp como canal único, pero validamos si lo llenó
    if (d.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email)) return "Email inválido";
    if (d.cantidad < 1) return "La cantidad debe ser al menos 1";
    return null;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const error = validate(data);
    if (error) {
      alert(error);
      return;
    }
    try {
      setSubmitting(true);
      openWhatsApp(data);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("grid gap-4", className)}>
      <div className="grid gap-2">
        <label className="text-sm font-medium">Nombre*</label>
        <input
          name="nombre"
          value={data.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
          className="w-full border rounded-xl p-3"
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium">Teléfono (WhatsApp)*</label>
          <input
            name="telefono"
            value={data.telefono}
            onChange={handleChange}
            placeholder="55 1234 5678"
            className="w-full border rounded-xl p-3"
            required
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="tucorreo@dominio.com"
            className="w-full border rounded-xl p-3"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium">Ubicación (ciudad/estado)</label>
          <input
            name="ubicacion"
            value={data.ubicacion}
            onChange={handleChange}
            placeholder="Puebla, Puebla"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Modelo</label>
            <select
              name="modelo"
              value={data.modelo}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            >
              <option value="">Selecciona…</option>
              <option value="Classic">Classic</option>
              <option value="Semi Panoramic">Semi Panoramic</option>
              <option value="Panoramic 1">Panoramic 1</option>
              <option value="Panoramic 2">Panoramic 2</option>
              <option value="Panoramic 3">Panoramic 3</option>
              <option value="Panoramic 4">Panoramic 4</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium">Cantidad</label>
            <input
              type="number"
              name="cantidad"
              min={1}
              value={data.cantidad}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Mensaje</label>
        <textarea
          name="mensaje"
          value={data.mensaje}
          onChange={handleChange}
          placeholder="Cuéntanos del proyecto (terreno, tiempos, presupuesto, etc.)"
          className="w-full border rounded-xl p-3 min-h-[120px]"
        />
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" isLoading={submitting}>
          Contactar por WhatsApp
        </Button>
        <p className="text-sm text-[var(--lovell-muted)]">
          Se abrirá WhatsApp con tu mensaje listo para enviar.
        </p>
      </div>
    </form>
  );
}
