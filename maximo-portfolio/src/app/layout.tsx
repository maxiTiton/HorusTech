import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Máximo Titón — Portfolio",
  description:
    "Portfolio de Máximo Titón: desarrollador full‑stack junior, Analista en Sistemas y estudiante de Ingeniería en Sistemas.",
  keywords: [
    "Máximo Titón",
    "Portfolio",
    "Desarrollador",
    "Full‑stack",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "Máximo Titón — Portfolio",
    description:
      "Desarrollador full‑stack junior, Analista en Sistemas y estudiante de Ingeniería en Sistemas.",
    url: "https://",
    siteName: "Portfolio de Máximo Titón",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
