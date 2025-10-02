import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="pt-16 sm:pt-20 pb-16 sm:pb-20"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "400px",
        maxHeight: "650px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Fondo ajustado */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/fondo.png"
          alt="Fondo plasma"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "blur(0px)",
          }}
          priority
          quality={100}
        />
      </div>
      {/* Contenido */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12"
        style={{ position: "relative", zIndex: 1, width: "100%" }}
      >
        <div className="text-center space-y-8">
          <Reveal>
            <div className="flex flex-col items-center">
              <Image
                src="/logo.png"
                alt="Logo HorusTech"
                width={120}
                height={120}
                className="h-28 w-28 mb-4 object-contain"
                priority
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-gradient">HorusTech</span>
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-gray-medium">
                Soluciones Digitales Innovadoras
              </p>
              <p className="mt-6 text-base sm:text-lg text-gray-dark max-w-2xl mx-auto">
                Diseñamos y desarrollamos soluciones digitales inteligentes que
                potencian el crecimiento empresarial en la era digital. Desde
                sitios web modernos hasta aplicaciones personalizadas y herramientas
                de automatización.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#servicios"
                  className="btn-primary h-12 px-6 text-base font-medium"
                >
                  Ver nuestros servicios
                </a>
                <a
                  href="#proyectos"
                  className="btn-outline h-12 px-6 text-base font-medium"
                >
                  Nuestros proyectos
                </a>
                <a
                  href="#contacto"
                  className="btn-secondary h-12 px-6 text-base font-medium"
                >
                  Conversemos
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="card-elevated p-6 text-center">
                <div className="text-accent text-3xl font-bold">5+</div>
                <div className="text-gray-medium mt-2">
                  Proyectos Completados
                </div>
              </div>
              <div className="card-elevated p-6 text-center">
                <div className="text-secondary text-3xl font-bold">100%</div>
                <div className="text-gray-medium mt-2">
                  Clientes Satisfechos
                </div>
                <div className="text-accent text-3xl font-bold">
                  <CountUp
                    from={0}
                    to={5}
                    duration={2}
                    className="text-accent text-3xl font-bold"
                  />+
                </div>
                <div className="text-gray-medium mt-2">Proyectos Completados</div>
              </div>
              <div className="card-elevated p-6 text-center">
                <div className="text-secondary text-3xl font-bold">
                  <CountUp
                    from={0}
                    to={100}
                    duration={2.5}
                    className="text-secondary text-3xl font-bold"
                  />%
                </div>
                <div className="text-gray-medium mt-2">Clientes Satisfechos</div>
              </div>
              <div className="card-elevated p-6 text-center">
                <div className="text-gradient-alt text-3xl font-bold">
                  <CountUp
                    from={0}
                    to={2}
                    duration={1.8}
                    className="text-gradient-alt text-3xl font-bold"
                  />+
                </div>
                <div className="text-gray-medium mt-2">Años de Experiencia</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}