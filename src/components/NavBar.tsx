"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "sobre-nosotros", label: "Sobre nosotros" },
  { id: "contacto", label: "Contacto" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("inicio");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? "backdrop-blur bg-background/80 border-b border-accent/20" : ""
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <Link href="/#inicio" className="flex items-center gap-2 font-semibold tracking-tight text-foreground">
          <Image
            src="/logo.png"
            alt="Logo HorusTech"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
          />
          HorusTech
        </Link>

        <div className="flex items-center gap-2">
          <ul className="hidden sm:flex gap-6 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`/#${s.id}`}
                  className={`hover:text-accent transition-colors duration-200 ${pathname === "/" && active === s.id ? "text-accent font-medium" : "text-gray-medium"}`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            aria-label="Abrir menú"
            className="sm:hidden p-2 rounded hover:bg-accent/10 text-gray-medium"
            onClick={() => setIsOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="sm:hidden border-t border-accent/20 bg-background/95 backdrop-blur">
          <ul className="px-4 py-3 space-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`/#${s.id}`}
                  className={`block py-2 transition-colors duration-200 ${pathname === "/" && active === s.id ? "text-accent font-medium" : "text-gray-medium hover:text-accent"}`}
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