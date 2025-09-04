import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx
export const metadata = {
  title: "Lövell - Ignite The Game",
  description:
    "Lövell fabrica, instala y da mantenimiento a canchas de pádel y superficies deportivas en México. Modelos Classic y Panoramic con pasto sintético premium, cristales templados y garantía de hasta 5 años. Calidad, innovación y servicio.",
  keywords: [
    "canchas de pádel",
    "fabricación de canchas deportivas",
    "instalación de canchas",
    "mantenimiento de canchas",
    "pasto sintético",
    "pádel México",
    "cancha panorámica pádel",
    "cancha classic pádel",
    "superficies deportivas",
  ],
  authors: [{ name: "Lövell" }],
  openGraph: {
    title: "Lövell - Ignite The Game",
    description:
      "Expertos en instalación y mantenimiento de canchas de pádel. Modelos Classic y Panoramic, materiales premium y garantía de hasta 5 años.",
    url: "https://www.lovell-ignitethegame.com/",
    siteName: "Lövell",
    images: [
      {
        url: "https://www.lovell-ignitethegame.com/og.jpg", // agrega tu imagen
        width: 1200,
        height: 630,
        alt: "Lövell - Canchas de Pádel",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lövell - Ignite The Game",
    description:
      "Fabricación, instalación y mantenimiento de canchas de pádel en México. Modelos Classic y Panoramic con garantía hasta 5 años.",
    images: ["https://www.lovell-ignitethegame.com/og.jpg"], // agrega tu imagen
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11063905055"
          strategy="afterInteractive"
        />
        {/* Inicializa gtag con tu ID */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11063905055');
          `}
        </Script>
         <Script id="whatsapp-conversion" strategy="afterInteractive">
        {`
          document.addEventListener('click', function (e) {
            let el = e.target;
            while (el && el !== document.body) {
              if (el.matches('a[href*="wa.me/"], a[href*="api.whatsapp.com/"], a[href^="whatsapp://"], [data-whatsapp]')) {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'conversion', {
                    'send_to': 'AW-11063905055/CONVERSION_LABEL'
                  });
                }
                break;
              }
              el = el.parentElement;
            }
          }, { capture: true });
        `}
      </Script>
        <Navbar/>
        {children}
        <Footer/>
        <WhatsAppFloatingButton/>
      </body>
    </html>
  );
}
