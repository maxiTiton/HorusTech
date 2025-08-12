"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? "backdrop-blur bg-background/70 border-b border-foreground/10" : ""
    }`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="#inicio" className="font-semibold tracking-tight">
          Máximo Titón
        </Link>

        <button
          aria-label="Abrir menú"
          className="sm:hidden p-2 rounded hover:bg-foreground/5"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <ul className="hidden sm:flex gap-6 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="hover:opacity-80">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div className="sm:hidden border-t border-foreground/10">
          <ul className="px-4 py-3 space-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}