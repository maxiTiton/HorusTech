"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaGithub } from "react-icons/fa";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="border-t border-accent/20 py-12 mt-16 bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">HorusTech</h3>
            <p className="text-gray-medium">
              Soluciones digitales innovadoras para empresas que buscan crecer en la era digital.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Enlaces rápidos</h4>
            <div className="space-y-2">
              <Link href="#servicios" className="block text-gray-medium hover:text-accent transition-colors">Servicios</Link>
              <Link href="#proyectos" className="block text-gray-medium hover:text-accent transition-colors">Proyectos</Link>
              <Link href="#sobre-nosotros" className="block text-gray-medium hover:text-accent transition-colors">Sobre nosotros</Link>
              <Link href="#contacto" className="block text-gray-medium hover:text-accent transition-colors">Contacto</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contacto</h4>
            <div className="space-y-3">
              <a href="mailto:horustech.team@gmail.com" className="flex items-center gap-2 text-gray-medium hover:text-accent transition-colors">
                <FaEnvelope />
                horustech.team@gmail.com
              </a>
              <div className="flex gap-4">
                <a href="https://github.com/maxiTiton/HorusTech" target="_blank" rel="noopener noreferrer" className="text-gray-medium hover:text-accent transition-colors">
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-medium/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-medium">
            © {year ?? ""} HorusTech. Todos los derechos reservados.
          </p>
          <Link className="text-sm text-accent hover:text-accent-light transition-colors duration-200" href="#inicio">
            Volver arriba ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}