import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import Link from "next/link";

export function generateStaticParams() {
  return projects.filter((p) => p.slug).map((p) => ({ slug: p.slug! }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: `${project.title} — Proyecto`,
    description: project.description,
  } as const;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="pt-24 sm:pt-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="#proyectos" className="text-sm hover:underline">← Volver a proyectos</Link>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-3 text-foreground/80">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-foreground/15 px-2.5 py-1 text-xs text-foreground/80">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary h-10 px-4 text-sm">
              Ver sitio
            </Link>
          )}
          {project.repoUrl && (
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-outline h-10 px-4 text-sm">
              Repositorio
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}