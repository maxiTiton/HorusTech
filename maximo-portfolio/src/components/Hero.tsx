import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 sm:pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Hola, soy Máximo Titón
            </h1>
            <p className="mt-4 text-base sm:text-lg text-foreground/80">
              Estudiante de 4º año de Ingeniería en Sistemas, Analista en Sistemas y desarrollador autodidacta full‑stack (perfil junior). Me gusta construir productos web elegantes, funcionales y bien pensados.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#proyectos" className="inline-flex h-11 items-center rounded-md bg-foreground text-background px-5 text-sm font-medium hover:bg-foreground/90">
                Ver proyectos
              </a>
              <a href="/cv.pdf" download className="inline-flex h-11 items-center rounded-md border border-foreground/20 px-5 text-sm font-medium hover:bg-foreground/5">
                Descargar CV
              </a>
              <a href="#contacto" className="inline-flex h-11 items-center rounded-md border border-foreground/20 px-5 text-sm font-medium hover:bg-foreground/5">
                Contacto
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm">
              <Link className="hover:underline" href="https://www.linkedin.com/in/m%C3%A1ximo-tit%C3%B3n/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
              <Link className="hover:underline" href="https://www.instagram.com/maxi_titon/" target="_blank" rel="noopener noreferrer">Instagram</Link>
            </div>
          </div>
          <div className="aspect-square rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent" />
        </div>
      </div>
    </section>
  );
}