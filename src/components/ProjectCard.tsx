import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  slug?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-2xl border border-foreground/10 p-5 sm:p-6 hover:border-foreground/20 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{project.title}</h3>
      </div>
      <p className="mt-2 text-sm sm:text-base text-foreground/80">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-foreground/15 px-2.5 py-1 text-xs text-foreground/80">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {project.liveUrl && (
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-9 rounded-md bg-foreground text-background px-3 text-sm hover:bg-foreground/90">
            Ver sitio
          </Link>
        )}
        {project.repoUrl && (
          <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-9 rounded-md border border-foreground/20 px-3 text-sm hover:bg-foreground/5">
            Repositorio
          </Link>
        )}
        {project.slug && (
          <Link href={`/proyectos/${project.slug}`} className="inline-flex items-center h-9 rounded-md border border-foreground/20 px-3 text-sm hover:bg-foreground/5">
            Ver más
          </Link>
        )}
      </div>
    </div>
  );
}