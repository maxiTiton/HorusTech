
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import AngusCarousel from "@/components/AngusCarousel";

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

  // Explicación personalizada según el proyecto
  let customDescription = "";
  switch (project.slug) {
    case "las-casonas":
      customDescription = "Desarrollado con React y CSS puro, este sitio web está optimizado para dispositivos móviles y enfocado en la velocidad de carga y el SEO. Permite a los visitantes conocer el complejo, ver fotos y contactar fácilmente.";
      break;
    case "dos-lunas-online":
      customDescription = "Proyecto realizado con React y Tailwind CSS, pensado para mostrar información clara y visual de un complejo turístico. Incluye galerías de imágenes y secciones esenciales para mejorar la experiencia del usuario.";
      break;
    case "luis-maria":
      customDescription = "Aplicación full-stack construida con Next.js, TypeScript, MongoDB y autenticación con NextAuth.js. Permite a un local gastronómico gestionar su menú, recibir pedidos online y administrar todo desde un panel seguro y moderno.";
      break;
    case "angus-bar":
      customDescription = "Pedidos en vivo por mesa y estado con Supabase Realtime, con gestión de productos, disponibilidad y control de accesos por roles. UI optimizada para tablets y barra.";
      break;
    default:
      customDescription = project.description;
  }

  return (
    <div className="pt-24 sm:pt-28">
      <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8">
        <Link href="/#proyectos" className="text-sm px-2 py-1 rounded transition-colors duration-200 hover:bg-accent/10 hover:text-accent font-medium">← Volver a proyectos</Link>
        {project.liveUrl && (
          <div className="w-full aspect-[16/9] bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden mt-6 shadow-lg border border-gray-200 dark:border-gray-800">
            <iframe
              src={project.liveUrl}
              title={project.title}
              className="w-full h-full border-0 min-h-[350px]"
              loading="lazy"
              allow="fullscreen"
              style={{ minWidth: '640px' }}
            />
          </div>
        )}
        {project.slug === "angus-bar" && <AngusCarousel />}
        <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">{project.title}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-foreground/15 px-2.5 py-1 text-xs text-foreground/80">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-5 text-foreground/80 text-lg">{customDescription}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary h-10 px-4 text-sm">
              Ver sitio
            </Link>
          )}
          {project.repoUrl && (
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-outline h-10 px-4 text-sm inline-flex items-center gap-2">
              <FaGithub className="mr-1" /> Repositorio
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}