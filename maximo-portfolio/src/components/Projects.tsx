import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Proyectos</h2>
        <p className="mt-3 text-foreground/80">Una selección de trabajos recientes.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}