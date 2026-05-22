import type { Project } from "@/features/projects/types";

export const projectsData: Project[] = [
  {
    id: "portfolio-site",
    title: "Portafolio profesional",
    summary:
      "Sitio responsive con identidad visual solida, arquitectura clara y componentes reutilizables.",
    href: "/projects",
    tags: ["Next.js", "Tailwind"],
    featured: true,
    publishedAt: "2026-03-10",
  },
  {
    id: "case-study-library",
    title: "Biblioteca de casos de estudio",
    summary:
      "Sistema de paginas para publicar casos reales con narrativa clara y layout consistente.",
    href: "/projects",
    tags: ["TypeScript", "Content"],
    featured: true,
    publishedAt: "2026-02-05",
  },
  {
    id: "contact-flow",
    title: "Flujo de contacto",
    summary:
      "Modulo desacoplado de contacto con UI, validacion y servicio de envio preparados para escalar.",
    href: "/projects",
    tags: ["Formularios", "Arquitectura"],
    featured: false,
    publishedAt: "2026-01-15",
  },
];
