import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { FaGraduationCap, FaCode, FaHandshake, FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-nosotros" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <SectionHeader title="Sobre nosotros" />
        <Reveal>
            <p className="mt-4 text-gray-medium max-w-none leading-relaxed text-left">
            HorusTech fue fundada por dos estudiantes de Ingeniería en Sistemas de Información de Argentina, 
            unidos por la pasión de ayudar a las empresas a abrazar la tecnología de manera simple y efectiva.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal>
            <div className="card-elevated overflow-hidden">
              {/* Foto centrada en la parte superior - sin efectos */}
              <div className="flex justify-center pt-8 pb-6">
                <Image
                  src="/fotoMaximo.jpg"
                  alt="Máximo Titón"
                  width={224} // 56 * 4 (rem a px, ajusta según tu diseño)
                  height={224}
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-accent/20 shadow-lg"
                />
              </div>
              
              {/* Contenido de la tarjeta */}
                <div className="px-8 pb-8 text-center">
                {/* Información personal */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Máximo Titón
                  </h3>
                  <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
                    <p className="text-accent font-medium">Co-fundador & Desarrollador Full Stack</p>
                  </div>
                </div>
                
                {/* Descripción */}
                  <p className="text-gray-medium leading-relaxed text-center mb-6">
                  Estudiante de Ingeniería en Sistemas, Analista en Sistemas y Desarrollador Full Stack. 
                  Apasionado por la tecnología, la innovación y la inteligencia artificial, ofreciendo 
                  soluciones digitales y valor en cada proyecto.
                </p>
                
                {/* Skills o tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20">IA</span>
                  <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20">Full Stack</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="card-elevated overflow-hidden">
              {/* Foto centrada en la parte superior - sin efectos */}
              <div className="flex justify-center pt-8 pb-6">
                <Image
                  src="/fotoAlejo.jpg"
                  alt="Alejo Alfonso"
                  width={224}
                  height={224}
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-secondary/20 shadow-lg"
                />
              </div>
              
              {/* Contenido de la tarjeta */}
                <div className="px-8 pb-8 text-center">
                {/* Información personal */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Alejo Alfonso
                  </h3>
                  <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-4">
                    <p className="text-secondary font-medium">Co-fundador & Desarrollador Full Stack</p>
                  </div>
                </div>
                
                {/* Descripción */}
                  <p className="text-gray-medium leading-relaxed text-center mb-6">
                  Estudiante de Ingeniería en Sistemas, apasionado por la programación, la tecnología y el diseño. 
                  Especializado en proyectos full stack profesionales que combinan diseño moderno y eficiencia tecnológica.
                </p>
                
                {/* Skills o tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20">Diseño</span>
                  <span className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20">Full Stack</span>
                </div>
              </div>
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