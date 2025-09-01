// components/layout/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[var(--lovell-logo-text)] text-white mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 grid gap-10 md:grid-cols-4">
        {/* Branding */}
        <div>
          <div className="flex items-center gap-2">
           <Image src="../../logolovell2.svg" alt="Lovell" width={200} height={40}/>
          </div>
          <p className="mt-4 text-sm text-white/80 max-w-xs">
            Fabricación, instalación y mantenimiento de canchas de pádel en toda
            la República Mexicana.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
            Navegación
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/modelos" className=" text-white/80 hover:underline">Modelos</Link></li>
            <li><Link href="/acerca" className="text-white/80 hover:underline">Acerca de</Link></li>
            <li><Link href="/proyectos" className="text-white/80 hover:underline">Proyectos</Link></li>
            <li><Link href="/mantenimiento" className="text-white/80 hover:underline">Mantenimiento</Link></li>
            <li><Link href="/garantia" className="text-white/80 hover:underline">Garantía</Link></li>
            <li><Link href="/contacto" className="text-white/80 hover:underline">Contacto</Link></li>
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
            Servicios
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
        
            <li>Mantenimientos preventivos</li>
            <li>Fabricación e instalación de canchas deportivas</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
            Contacto
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FiPhone /> <a href="tel:5555006260" className="hover:underline text-white/80">555 500 6260</a>
            </li>
            <li className="flex items-center gap-2">
              <FiMail />
              <a href="mailto:jorgeespino000@gmail.com" className="hover:underline text-white/80">
                jorgeespino000@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin /> Puebla, México
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 mt-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-white/70">
          <p>© {new Date().getFullYear()} <Link href="/" className="text-white/70 hover:underline">Lövell - Ignite The Game</Link>. Todos los derechos reservados.</p>
          <p>Hecho con ♥ en México</p>
        </div>
      </div>
    </footer>
  );
}
