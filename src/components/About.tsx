import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { FaGraduationCap, FaCode, FaHandshake, FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <section id="sobre-nosotros" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <SectionHeader title="Sobre nosotros" />
        <Reveal>
          <p className="mt-4 text-gray-medium max-w-none leading-relaxed text-center">
            HorusTech fue fundada por dos estudiantes de Ingeniería en Sistemas de Información de Argentina, 
            unidos por la pasión de ayudar a las empresas a abrazar la tecnología de manera simple y efectiva.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal>
            <div className="card-elevated p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/fotoMaximo.jpg"
                  alt="Máximo Titón"
                  className="w-28 h-28 rounded-full object-cover border-2 border-accent/30"
                />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Máximo Titón</h3>
                  <p className="text-accent">Co-fundador & Desarrollador Full Stack</p>
                </div>
              </div>
              <p className="text-gray-medium leading-relaxed">
                Estudiante de 4° año de Ingeniería en Sistemas, especializado en desarrollo full stack 
                con especial interés en IA. Certificación de inglés B2. Se destaca por su disciplina, 
                compromiso y capacidad de adaptación.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="card-elevated p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/fotoAlejo.jpg"
                  alt="Alejo Alfonso"
                  className="w-28 h-28 rounded-full object-cover border-2 border-secondary/30"
                />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Alejo Alfonso</h3>
                  <p className="text-secondary">Co-fundador & Desarrollador Full Stack</p>
                </div>
              </div>
              <p className="text-gray-medium leading-relaxed">
                Estudiante de Ingeniería en Sistemas con experiencia en desarrollo de software. 
                Enfocado en crear soluciones innovadoras y escalables que generen impacto real 
                en los negocios de nuestros clientes.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gradient">Nuestros valores</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="card p-6 text-center">
                <FaLightbulb className="text-accent text-3xl mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-foreground">Innovación</h4>
                <p className="text-gray-medium text-sm">Buscamos siempre las mejores tecnologías y metodologías</p>
              </div>
              <div className="card p-6 text-center">
                <FaHandshake className="text-secondary text-3xl mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-foreground">Confianza</h4>
                <p className="text-gray-medium text-sm">Construimos relaciones duraderas con nuestros clientes</p>
              </div>
              <div className="card p-6 text-center">
                <FaRocket className="text-accent text-3xl mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-foreground">Resultados</h4>
                <p className="text-gray-medium text-sm">Nos enfocamos en entregar valor real y medible</p>
              </div>
              <div className="card p-6 text-center">
                <FaCode className="text-secondary text-3xl mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-foreground">Calidad</h4>
                <p className="text-gray-medium text-sm">Código limpio, escalable y mantenible</p>
              </div>
              <div className="card p-6 text-center">
                <FaGraduationCap className="text-accent text-3xl mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-foreground">Aprendizaje</h4>
                <p className="text-gray-medium text-sm">Crecimiento continuo y actualización constante</p>
              </div>
              <div className="card p-6 text-center">
                <FaUsers className="text-secondary text-3xl mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-foreground">Colaboración</h4>
                <p className="text-gray-medium text-sm">Trabajo en equipo interno y con nuestros clientes</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}