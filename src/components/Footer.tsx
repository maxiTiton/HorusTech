"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="border-t border-accent/20 py-8 mt-16 bg-background/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-dark dark:text-gray-medium">
          © {year ?? ""} Máximo Titón
        </p>
        <div className="flex items-center gap-4 text-sm">
          <SocialLinks />
          <Link className="hover:underline text-accent hover:text-accent-dark transition-colors duration-200" href="#inicio">Arriba</Link>
        </div>
      </div>
    </footer>
  );
}