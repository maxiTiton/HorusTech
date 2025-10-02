
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string; // Nueva propiedad para la imagen
  liveUrl?: string;
  repoUrl?: string;
  slug?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-2xl shadow-lg p-0 pb-5 sm:pb-6 hover:bg-accent/5 transition-all duration-200 bg-background/80 dark:bg-white/[0.04] overflow-hidden h-full flex flex-col">
      {project.image && (
        <div className="w-full aspect-video bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
          <Image src={project.image} alt={project.title} className="object-cover w-full h-full" />
        </div>
      )}
  <div className="flex items-start justify-between gap-4 px-5 sm:px-6 mt-4">
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">{project.title}</h3>
      </div>
  <p className="mt-2 text-sm sm:text-base text-gray-dark dark:text-gray-medium px-5 sm:px-6">{project.description}</p>
  <div className="mt-4 flex flex-wrap gap-2 px-5 sm:px-6 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-accent/20 px-2.5 py-1 text-xs text-gray-dark dark:text-gray-medium bg-accent/5">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-6 items-center px-5 sm:px-6 mb-4 mt-auto">
        {project.liveUrl && (
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-9 rounded-md bg-accent text-white px-5 text-sm hover:bg-accent-dark transition-colors duration-200">
            Ver sitio
          </Link>
        )}
        {project.repoUrl && (
          <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent hover:text-accent-dark text-2xl transition-colors duration-200" aria-label="Repositorio en GitHub">
            <FaGithub size={28} />
          </Link>
        )}
        {project.slug && (
          <Link href={`/proyectos/${project.slug}`} className="inline-flex items-center text-accent hover:text-accent-dark text-sm font-medium transition-colors duration-200 ver-detalles-btn">
            Ver detalles
            <FiArrowRight className="ml-1 transition-transform duration-200" />
          </Link>
        )}
      </div>      git pull origin Alejo
    </div>
  );
}