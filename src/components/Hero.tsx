import SocialLinks from "@/components/SocialLinks";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Imagen solo visible en mobile, arriba del grid */}
        <div className="flex justify-center items-center mb-4 md:hidden">
          <img
            src="/FotoMia2.jpeg"
            alt="Foto de perfil de Máximo Titón"
            className="rounded-full shadow-lg object-cover border border-accent/20 w-48 h-48 sm:w-64 sm:h-64 filter saturate-65 brightness-95 contrast-95"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Hola, soy <span className="text-gradient">Máximo Titón</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-dark dark:text-gray-medium text-justify">
                Estudiante de Ingeniería en Sistemas, Analista en Sistemas y Desarrollador Full Stack Jr. Apasionado por la tecnología y la innovación, ofreciendo soluciones digitales y valor en cada proyecto.
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
          {/* Imagen solo visible en escritorio (md+) */}
          <Reveal>
            <div className="flex justify-center items-center hidden md:flex">
              <img
                src="/FotoMia2.jpeg"
                alt="Foto de perfil de Máximo Titón"
                className="rounded-full shadow-lg object-cover border border-accent/20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 filter saturate-65 brightness-95 contrast-95"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}