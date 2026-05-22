export type RelevantProject = {
  id: string;
  title: string;
  period: string;
  summary: string;
  stack: string[];
  contributions: string[];
};

export type CompanyRelevantProjects = {
  id: string;
  company: string;
  role: string;
  projects: RelevantProject[];
};

export const relevantProjectsByCompany: CompanyRelevantProjects[] = [
  {
    id: "courthouse-computers-system",
    company: "Courth house Computers system",
    role: "Desarrollador de software",
    projects: [
      {
        id: "court-data-storage-interface",
        title: "Proyecto: EVIE",
        period: "Jun 2025 - Nov 2025",
        summary:
          "Interfaz usurio para almacen de datos sensibles con enfoque en seguridad y usabilidad para equipos internos.",
        stack: ["Angular 19", "Angular CDK", "Tailwind CSS", "Python", "Django"],
        contributions: [
          "Implemente vistas para operaciones de almacenamiento, consulta y gestion de datos con enfoque en seguridad.",
          "Disene componentes reutilizables para acelerar nuevas pantallas internas.",
          "Colabore con equipos de backend para asegurar integracion fluida y manejo adecuado de datos sensibles.",
          "Desarollé logica del negocio para manejo de permisos y roles de usuario en el acceso a datos.",
        ],
      },
      {
        id: "sensitive-data-ui-enhancements",
        title: "Proyecto: NEXT",
        period: "Nov 2025 - May 2026",
        summary:
          "Desarrollo de mejoras en la interfaz de usuario para el manejo de documentos sensibles.",
        stack: ["Angular 19", "Angular CDK", "Tailwind CSS"],
        contributions: [
          "Alinee formularios y estados para reducir errores operativos.",
          "Conecte frontend con servicios backend para mantener consistencia entre procesos.",
          "Trabajé en conjunto con equipos de seguridad para asegurar que las mejoras cumplieran con los estándares de protección de datos.",
        ],
      },
    ],
  },
  {
    id: "digital-nexus",
    company: "Digital Nexus (proyecto personal)",
    role: "Desarrollador de software",
    projects: [
      {
        id: "nexus-saas-core",
        title: "Nucleo SaaS para inventario y POS",
        period: "Nov 2025 - Actualmente",
        summary:
          "Base del producto para empresas, sucursales y almacenes con arquitectura modular.",
        stack: ["TypeScript", "Angular 19", "C#", ".NET", "PostgreSQL"],
        contributions: [
          "Defini limites entre modulos para escalar sin acoplar funcionalidades.",
          "Construccion de flujos clave para inventario, punto de venta y reportes.",
          "Implementacion de patrones de diseño para mantener codigo limpio y facil de mantener.",
          "Desarrollo de integraciones con servicios externos para expandir funcionalidades del producto.",
        ],
      },
    ],
  },
  {
    id: "ende-services-construction",
    company: "Ende Servicios y Construcciones",
    role: "Desarrollador de software",
    projects: [
      {
        id: "ende-erp-ux",
        title: "Interfaz ERP en entorno microfrontend",
        period: "Mar 2024 - Dec 2024",
        summary:
          "Participacion en ERP empresarial con enfoque en UX funcional y estructura de codigo mantenible.",
        stack: ["Angular 16", "PrimeNG", "PrimeFlex", "Java", "Spring Boot"],
        contributions: [
          "Desarrollo de interfaces para modulos de negocio con alto uso diario.",
          "Aporte en buenas practicas para mantener coherencia entre equipos.",
        ],
      },
    ],
  },
  {
    id: "agile-soft",
    company: "Agile soft",
    role: "Desarrollador de software",
    projects: [
      {
        id: "agile-whatsapp-billing",
        title: "Envio masivo de facturas por WhatsApp",
        period: "Oct 2023 - Dec 2023",
        summary:
          "Solucion para distribuir facturas electronicas en volumen y mejorar el canal de entrega al cliente.",
        stack: ["React", "Express", "WhatsApp Web"],
        contributions: [
          "Implementacion de flujo de envio orientado a velocidad operativa.",
          "Mejora de experiencia para recepcion directa en dispositivos moviles.",
        ],
      },
    ],
  },
  {
    id: "fun-fit-app",
    company: "Fun Fit App",
    role: "Desarrollador de software",
    projects: [
      {
        id: "fun-fit",
        title: "Ecommerce de productos fitness",
        period: "Oct 2023 - Mar 2024",
        summary:
          "Desarrollo de plataforma de comercio electronico para productos relacionados con fitness, con enfoque en experiencia de usuario y rendimiento.",
        stack: ["React", "Next.js", "NextUI", "MongoDB"],
        contributions: [
          "Construccion de flujos de usuario para navegacion, busqueda y compra de productos.",
          "Implementacion de optimizaciones para mejorar tiempos de carga y rendimiento general del sitio.",
          "Implementacion de solucion de comercio electronico con integracion de pasarela de pago y gestion de pedidos.",
          "Colaboracion con equipos de diseño para asegurar una experiencia visual atractiva y coherente con la marca.",
        ],
      },
    ],
  },
] as const;
