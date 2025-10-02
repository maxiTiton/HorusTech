import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MagicBento from '@/components/MagicBento';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HorusTech — Soluciones Digitales Innovadoras",
  description:
    "HorusTech: Diseñamos y desarrollamos soluciones digitales inteligentes que potencian el crecimiento empresarial en la era digital.",
  keywords: [
    "HorusTech",
    "Soluciones Digitales",
    "Desarrollo Web",
    "Transformación Digital",
    "Automatización",
    "Software Personalizado",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "HorusTech — Soluciones Digitales Innovadoras",
    description:
      "Diseñamos y desarrollamos soluciones digitales inteligentes que potencian el crecimiento empresarial en la era digital.",
    url: "https://",
    siteName: "HorusTech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Fondo oscuro global */}
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background: "#060010", // mismo color que usaban las tarjetas
        }} />
        {/* Efecto MagicBento */}
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none"
        }}>
          <MagicBento 
            enableSpotlight={true}
            spotlightRadius={300}
            glowColor="132, 0, 255"
          />
        </div>
        {/* Contenido principal */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
