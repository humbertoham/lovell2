// app/contacto/page.tsx
import ContactFormWhatsApp from "@/components/ContactFormWhatsApp";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";



export default function ContactoPage() {
  return (
    <div className="relative">
      <Navbar mode="dark" />
      <main className="mx-auto mt-24 max-w-3xl px-4 md:px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--lovell-logo-text)]">Contacto</h1>
        <p className="mt-2 text-[var(--lovell-muted)]">
          Déjanos tus datos y te contactamos por WhatsApp.
        </p>

        <div className="mt-8 card">
          <ContactFormWhatsApp />
        </div>
      </main>
    </div>
  );
}
