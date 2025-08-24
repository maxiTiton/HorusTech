import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { FaGlobeAmericas, FaUsers, FaLaptopCode, FaComments, FaBookOpen, FaSyncAlt, FaRegClock } from "react-icons/fa";

export default function About() {
  return (
    <section id="sobre-mi" className="py-16 sm:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <SectionHeader title="Sobre mí" />
        <Reveal>
          <p className="mt-4 text-gray-dark dark:text-gray-medium max-w-none leading-relaxed">
            Soy estudiante de 4° año de Ingeniería en Sistemas de Información, con formación en desarrollo full stack y especial interés en tecnologías emergentes como la inteligencia artificial. Cuento con certificación de inglés nivel B2 y me destaco por mi compromiso, disciplina y capacidad para adaptarme a distintos entornos de trabajo. Me encuentro en constante aprendizaje y busco crecer profesionalmente en el mundo del desarrollo de software y la innovación tecnológica.
          </p>
        </Reveal>
        <Reveal>
            <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-accent">Conocimientos y Aptitudes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-accent/20 bg-background/80 p-4 shadow-sm flex items-center gap-3">
                <FaGlobeAmericas className="text-accent text-xl" />
                <span className="text-gray-dark dark:text-gray-medium font-medium">Inglés nivel B2</span>
              </div>
              <div className="rounded-xl border border-accent/20 bg-background/80 p-4 shadow-sm flex items-center gap-3">
                <FaUsers className="text-accent text-xl" />
                <span className="text-gray-dark dark:text-gray-medium font-medium">Trabajo en equipo</span>
              </div>
              <div className="rounded-xl border border-accent/20 bg-background/80 p-4 shadow-sm flex items-center gap-3">
                <FaLaptopCode className="text-accent text-xl" />
                <span className="text-gray-dark dark:text-gray-medium font-medium">Desarrollo Full Stack</span>
              </div>
              <div className="rounded-xl border border-accent/20 bg-background/80 p-4 shadow-sm flex items-center gap-3">
                <FaComments className="text-accent text-xl" />
                <span className="text-gray-dark dark:text-gray-medium font-medium">Comunicación efectiva</span>
              </div>
              <div className="rounded-xl border border-accent/20 bg-background/80 p-4 shadow-sm flex items-center gap-3">
                <FaBookOpen className="text-accent text-xl" />
                <span className="text-gray-dark dark:text-gray-medium font-medium">Aprendizaje continuo</span>
              </div>
              <div className="rounded-xl border border-accent/20 bg-background/80 p-4 shadow-sm flex items-center gap-3">
                <FaSyncAlt className="text-accent text-xl" />
                <span className="text-gray-dark dark:text-gray-medium font-medium text-justify">Adaptabilidad</span>
              </div>
              <div className="rounded-xl border border-accent/20 bg-background/80 p-4 shadow-sm flex items-center gap-3">
                <FaRegClock className="text-accent text-xl" />
                <span className="text-gray-dark dark:text-gray-medium font-medium text-justify">Disciplina y responsabilidad</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}