import Reveal from "@/components/Reveal";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-accent/10 to-secondary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para <span className="text-gradient">transformar</span> tu negocio?
            </h2>
            <p className="text-lg sm:text-xl text-gray-medium mb-8 max-w-2xl mx-auto">
              No esperes más para llevar tu empresa al mundo digital. 
              Juntos podemos construir la solución perfecta para tus necesidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contacto" 
                className="btn-primary h-14 px-8 text-lg font-medium inline-flex items-center justify-center hover:scale-105 transition-all duration-300"
              >
                Iniciemos tu proyecto
              </a>
              <a 
                href="#servicios" 
                className="btn-outline h-14 px-8 text-lg font-medium inline-flex items-center justify-center hover:scale-105 transition-all duration-300"
              >
                Ver qué podemos hacer
              </a>
            </div>
            <p className="text-sm text-gray-medium mt-6">
              💡 Consulta inicial <strong>100% gratuita</strong> • Sin compromisos
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}