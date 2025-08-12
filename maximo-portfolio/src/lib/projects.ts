import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "Las Casonas",
    description:
      "Sitio web para complejo de cabañas. Desarrollo front‑end responsivo con foco en performance y SEO.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://www.las-casonas.com.ar/",
  },
  {
    title: "Dos Lunas Online",
    description:
      "Web informativa para cabañas/turismo con diseño limpio, galerías y secciones esenciales.",
    tags: ["Next.js", "TypeScript", "UI/UX"],
    liveUrl: "https://www.doslunasonline.com.ar/",
  },
  {
    title: "Luis María — App gastronómica",
    description:
      "Aplicación full‑stack para un local gastronómico: menú, pedidos y panel de administración.",
    tags: ["Full‑stack", "API", "Auth"],
    liveUrl: "https://luis-maria.vercel.app/",
  },
];