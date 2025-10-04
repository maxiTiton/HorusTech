import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-16 sm:pt-20 pb-16 sm:pb-20 flex items-center"
      style={{ minHeight: "60vh", overflow: "hidden" }}
    >
      {/* Fondo */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="/fondo.png"
          alt="Fondo plasma"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "blur(1.5px)",
          }}
          priority
          quality={100}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 w-full text-center space-y-8">
        <Reveal>
          <div className="flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="Logo HorusTech"
              width={120}
              height={120}
              className="mb-4 object-contain"
              priority
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-gradient">HorusTech</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-medium">
              Soluciones Digitales Innovadoras
            </p>
            <p className="mt-6 text-base sm:text-lg text-gray-dark max-w-2xl mx-auto text-center">
              Diseñamos y desarrollamos soluciones digitales inteligentes que
              potencian el crecimiento empresarial en la era digital. Desde
              sitios web modernos hasta aplicaciones personalizadas y herramientas
              de automatización.
            </p>

            {/* Botones */}
            <div className="mt-8">
              {/* Mobile: full-bleed buttons */}
              <div className="block sm:hidden" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
                <div className="px-4 flex flex-col gap-4">
                  <a href="#servicios" className="btn-primary h-12 px-6 text-base font-medium block w-full text-center">Ver nuestros servicios</a>
                  <a href="#proyectos" className="btn-outline h-12 px-6 text-base font-medium block w-full text-center">Nuestros proyectos</a>
                  <a href="#contacto" className="btn-secondary h-12 px-6 text-base font-medium block w-full text-center">Conversemos</a>
                </div>
              </div>

              {/* Desktop / sm+: inline buttons */}
              <div className="hidden sm:flex gap-4 justify-center">
                <a href="#servicios" className="btn-primary h-12 px-6 text-base font-medium sm:inline-flex sm:w-auto justify-center">Ver nuestros servicios</a>
                <a href="#proyectos" className="btn-outline h-12 px-6 text-base font-medium sm:inline-flex sm:w-auto justify-center">Nuestros proyectos</a>
                <a href="#contacto" className="btn-secondary h-12 px-6 text-base font-medium sm:inline-flex sm:w-auto justify-center">Conversemos</a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Estadísticas */}
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <div className="card-elevated p-6 text-center">
              <div className="text-accent text-3xl font-bold">
                <CountUp from={0} to={5} duration={2} />+
              </div>
              <div className="text-gray-medium mt-2">Proyectos Completados</div>
            </div>

            <div className="card-elevated p-6 text-center">
              <div className="text-secondary text-3xl font-bold">
                <CountUp from={0} to={100} duration={2.5} />%
              </div>
              <div className="text-gray-medium mt-2">Clientes Satisfechos</div>
            </div>

            <div className="card-elevated p-6 text-center">
              <div className="text-gradient-alt text-3xl font-bold">
                <CountUp from={0} to={2} duration={1.8} />+
              </div>
              <div className="text-gray-medium mt-2">Años de Experiencia</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
