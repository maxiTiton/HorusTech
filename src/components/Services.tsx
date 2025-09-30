import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { FaCode, FaMobile, FaServer, FaRobot, FaCloud, FaCog } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode className="text-4xl text-accent" />,
      title: "Desarrollo Web",
      description: "Sitios web modernos, responsivos y optimizados para SEO con las últimas tecnologías.",
      technologies: ["React", "Next.js", "TailwindCSS", "TypeScript"]
    },
    {
      icon: <FaMobile className="text-4xl text-secondary" />,
      title: "Aplicaciones Móviles",
      description: "Apps nativas y multiplataforma para iOS y Android con experiencias de usuario excepcionales.",
      technologies: ["React Native", "Flutter", "PWA"]
    },
    {
      icon: <FaServer className="text-4xl text-accent" />,
      title: "Backend & APIs",
      description: "Servicios backend robustos y APIs escalables para potenciar tus aplicaciones.",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      icon: <FaRobot className="text-4xl text-secondary" />,
      title: "Automatización",
      description: "Soluciones de automatización para optimizar procesos y aumentar la eficiencia.",
      technologies: ["Python", "Zapier", "Custom Scripts"]
    },
    {
      icon: <FaCloud className="text-4xl text-accent" />,
      title: "Soluciones Cloud",
      description: "Implementación y gestión de infraestructura en la nube para escalabilidad.",
      technologies: ["AWS", "Azure", "Docker", "CI/CD"]
    },
    {
      icon: <FaCog className="text-4xl text-secondary" />,
      title: "Consultoría Digital",
      description: "Asesoramiento estratégico para la transformación digital de tu empresa.",
      technologies: ["Análisis", "Estrategia", "Implementación"]
    }
  ];

  return (
    <section id="servicios" className="py-16 sm:py-20 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <SectionHeader title="Nuestros servicios" />
        <Reveal>
          <p className="mt-4 text-gray-medium text-center max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para impulsar el crecimiento de tu negocio
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={index}>
              <div className="card-elevated p-6 h-full hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-gray-medium mb-4 flex-grow">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}