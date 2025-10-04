import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contacto" className="py-16 sm:py-20 bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <SectionHeader title="¡Conversemos!" description="¿Tienes una idea o proyecto? Contáctanos y llevemos tu negocio al siguiente nivel digital." />
        
        <div className="mt-12">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <div className="space-y-6 h-full flex flex-col justify-center">
                <div className="flex flex-col gap-6">
                  <a href="mailto:horustech.team@gmail.com" className="flex items-center gap-4 p-6 card hover:scale-105 transition-transform duration-300">
                    <FaEnvelope className="text-accent text-2xl" />
                    <div>
                      <div className="font-medium text-foreground text-lg">Email</div>
                      <div className="text-gray-medium">horustech.team@gmail.com</div>
                    </div>
                  </a>
                  <a href="https://wa.me/5493584307111" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 card hover:scale-105 transition-transform duration-300">
                    <FaWhatsapp className="text-accent text-2xl" />
                    <div>
                      <div className="font-medium text-foreground text-lg">WhatsApp</div>
                      <div className="text-gray-medium">Chatea con nosotros</div>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <div className="card-elevated p-8 h-full flex flex-col justify-center">
                  <h4 className="font-semibold mb-4 text-foreground">¿Por qué elegir HorusTech?</h4>
                  <ul className="space-y-3 text-gray-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Respuesta rápida en menos de 24 horas
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Consulta inicial gratuita
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Presupuesto personalizado sin compromiso
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Soporte post-lanzamiento incluido
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}