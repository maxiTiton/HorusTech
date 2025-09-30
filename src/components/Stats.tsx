import Reveal from "@/components/Reveal";
import { FaRocket, FaClock, FaUsers, FaCheck } from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      icon: <FaRocket className="text-accent text-3xl" />,
      number: "50+",
      label: "Horas de desarrollo",
      description: "Experiencia práctica en proyectos reales"
    },
    {
      icon: <FaUsers className="text-secondary text-3xl" />,
      number: "10+",
      label: "Clientes potenciales",
      description: "Empresas interesadas en nuestros servicios"
    },
    {
      icon: <FaClock className="text-accent text-3xl" />,
      number: "24h",
      label: "Tiempo de respuesta",
      description: "Respondemos consultas en menos de un día"
    },
    {
      icon: <FaCheck className="text-secondary text-3xl" />,
      number: "100%",
      label: "Satisfacción",
      description: "Compromiso con la calidad en cada proyecto"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-accent/5 to-secondary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              Números que nos respaldan
            </h2>
            <p className="text-gray-medium max-w-2xl mx-auto">
              Aunque somos una empresa joven, nuestro compromiso y dedicación se reflejan en cada proyecto
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Reveal key={index}>
              <div className="card-elevated p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                  {stat.number}
                </div>
                <div className="font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-medium">
                  {stat.description}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}