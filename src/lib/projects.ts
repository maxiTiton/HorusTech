import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "Cabañas Las Casonas",
    description:
      "Sitio web para complejo de cabañas. Desarrollo front‑end responsivo con foco en performance y SEO.",
    tags: ["React", "CSS"],
    liveUrl: "https://www.las-casonas.com.ar/",
    repoUrl: "https://github.com/maxiTiton/CabaniasLasCasonas",
    image: "/PortadaLasCasonas.png",
    slug: "las-casonas",
  },
  {
    title: "Cabañas Dos Lunas",
    description:
      "Web informativa para cabañas/turismo con diseño limpio, galerías y secciones esenciales.",
    tags: ["React", "Tailwind CSS"],
    liveUrl: "https://www.doslunasonline.com.ar/",
    repoUrl: "https://github.com/maxiTiton/DosLunas",
    image: "/PortadaDosLunas.png",
    slug: "dos-lunas-online",
  },
  {
    title: "Luis María — Web gastronómica",
    description:
      "Sitio web full-stack para un local gastronómico: menú, pedidos y panel de administración.",
  tags: ["Next.js", "NextAuth.js", "React", "TypeScript", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://luis-maria.vercel.app/",
    repoUrl: "https://github.com/maxiTiton/LuisMaria",
    image: "/PortadaLuisMaria.png",
    slug: "luis-maria",
  },
  {
    title: "Rio cuarto celulares - E-commerce",
    description:
      "Sitio web full-stack para un local de venta de celulares: catálogo, carrito y panel de administración.",
  tags: ["PostCSS", "Node.js", "React", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://frontriocuartocelulares.vercel.app/",
    repoUrl: "https://github.com/alejoalf/frontriocuartocelulares",
    image: "/celulares1.png",
    slug: "Rio-cuarto-celulares",
  },
];