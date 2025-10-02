import Reveal from "@/components/Reveal";
import Plasma from "@/components/Plasma";

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 sm:pt-28 pb-24 sm:pb-32" style={{ position: "relative", overflow: "hidden" }}>
      {/* Plasma background */}
      <div style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none"
      }}>
        <Plasma 
          color="#8400ff"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.7}
          mouseInteractive={true}
        />
      </div>
      {/* Content above plasma */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12" style={{ position: "relative", zIndex: 1 }}>
        <div className="text-center space-y-8">
          <Reveal>
            <div className="flex flex-col items-center">
              <img src="/logo.png" alt="Logo HorusTech" className="h-36 w-36 mb-4 object-contain" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="text-gradient">HorusTech</span>
              </h1>
              <p className="mt-4 text-xl sm:text-2xl text-gray-medium">
                Soluciones Digitales Innovadoras
              </p>
              <p className="mt-6 text-base sm:text-lg text-gray-dark max-w-3xl mx-auto">
                Diseñamos y desarrollamos soluciones digitales inteligentes que potencian el crecimiento empresarial en la era digital. 
                Desde sitios web modernos hasta aplicaciones personalizadas y herramientas de automatización.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#servicios" className="btn-primary h-12 px-6 text-base font-medium">
                  Ver nuestros servicios
                </a>
                <a href="#proyectos" className="btn-outline h-12 px-6 text-base font-medium">
                  Nuestros proyectos
                </a>
                <a href="#contacto" className="btn-secondary h-12 px-6 text-base font-medium">
                  Conversemos
                </a>
              </div>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="card-elevated p-6 text-center">
                <div className="text-accent text-3xl font-bold">5+</div>
                <div className="text-gray-medium mt-2">Proyectos Completados</div>
              </div>
              <div className="card-elevated p-6 text-center">
                <div className="text-secondary text-3xl font-bold">100%</div>
                <div className="text-gray-medium mt-2">Clientes Satisfechos</div>
              </div>
              <div className="card-elevated p-6 text-center">
                <div className="text-gradient-alt text-3xl font-bold">2+</div>
                <div className="text-gray-medium mt-2">Años de Experiencia</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}