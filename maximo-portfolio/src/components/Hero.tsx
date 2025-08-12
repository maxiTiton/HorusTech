import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 sm:pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Hola, soy <span className="text-gradient">Máximo Titón</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-foreground/80">
                Estudiante de 4º año de Ingeniería en Sistemas, Analista en Sistemas y desarrollador autodidacta full‑stack (perfil junior). Me gusta construir productos web elegantes, funcionales y bien pensados.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#proyectos" className="btn-primary h-11 px-5 text-sm font-medium">
                  Ver proyectos
                </a>
                <a href="/cv.pdf" download className="btn-outline h-11 px-5 text-sm font-medium">
                  Descargar CV
                </a>
                <a href="#contacto" className="btn-outline h-11 px-5 text-sm font-medium">
                  Contacto
                </a>
              </div>
              <SocialLinks className="mt-6 text-sm" />
            </div>
          </Reveal>
          <Reveal>
            <div className="aspect-square rounded-2xl card border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}