// components/shared/WhatsAppFloatingButton.tsx
"use client";

import { FiMessageCircle } from "react-icons/fi";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "525555006260"; 
// México (+52) 5555006260

export default function WhatsAppFloatingButton() {
  const message = encodeURIComponent("Hola Lövell 👋 Me interesa una cancha de pádel, ¿me puedes dar más información?");
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition hover:scale-110"
      style={{ backgroundColor: "var(--lovell-symbol)" }}
    >
      <FiMessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
