import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="proyectos" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Proyectos" description="Una selección de trabajos recientes." />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}