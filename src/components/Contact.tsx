import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contacto" className="py-16 sm:py-20 bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <SectionHeader title="¡Conversemos!" description="¿Tienes una idea o proyecto? Contáctanos y llevemos tu negocio al siguiente nivel digital." />
        
        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Envíanos un mensaje</h3>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gradient">Otras formas de contacto</h3>
                <div className="space-y-4">
                  <a href="mailto:horustech.team@gmail.com" className="flex items-center gap-4 p-4 card hover:scale-105 transition-transform duration-300">
                    <FaEnvelope className="text-accent text-xl" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-gray-medium">horustech.team@gmail.com</div>
                    </div>
                  </a>

                  <a href="https://linkedin.com/company/horustech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 card hover:scale-105 transition-transform duration-300">
                    <FaLinkedin className="text-secondary text-xl" />
                    <div>
                      <div className="font-medium text-foreground">LinkedIn</div>
                      <div className="text-gray-medium">Síguenos en LinkedIn</div>
                    </div>
                  </a>

                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 card hover:scale-105 transition-transform duration-300">
                    <FaWhatsapp className="text-accent text-xl" />
                    <div>
                      <div className="font-medium text-foreground">WhatsApp</div>
                      <div className="text-gray-medium">Chatea con nosotros</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="card-elevated p-6">
                <h4 className="font-semibold mb-3 text-foreground">¿Por qué elegir HorusTech?</h4>
                <ul className="space-y-2 text-gray-medium">
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}