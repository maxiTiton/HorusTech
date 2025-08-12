import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="sobre-mi" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Sobre mí" />
        <Reveal>
          <p className="mt-4 text-foreground/80 max-w-3xl leading-relaxed">
            Soy Máximo Titón. Actualmente curso el 4º año de la carrera de Ingeniería en Sistemas y tengo el título de Analista en Sistemas. Me considero un desarrollador autodidacta con enfoque full‑stack. Disfruto aprender, iterar rápido y construir interfaces simples, elegantes y eficaces.
          </p>
        </Reveal>
      </div>
    </section>
  );
}