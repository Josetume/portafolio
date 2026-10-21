export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image?: string;
  imageAlt?: string;
  role: string;
  challenge: string;
  work: string[];
  learning: string;
  github?: string;
  demo?: string;
};
export const projects: Project[] = [
  {
    slug: "alertaya",
    title: "AlertaYa",
    category: "Aplicación móvil + plataforma web",
    description:
      "Reportes ciudadanos con fotografías, ubicación y seguimiento desde una aplicación Android y un panel web.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
    ],
    image: "/alertaya/admin/dashboard-actual.png",
    imageAlt:
      "Panel actual de AlertaYa: resumen de actividad y reportes por atender, con datos de demostración",
    role: "Desarrollo de funcionalidades móviles y web e integración de APIs REST.",
    challenge:
      "Conectar el registro de una incidencia desde el móvil con su consulta y seguimiento en una interfaz administrativa.",
    work: [
      "Desarrollé funcionalidades de autenticación y reportes geolocalizados con imágenes.",
      "Implementé y consumí endpoints REST para registrar y consultar reportes.",
      "Desarrollé vistas web para el seguimiento de incidencias.",
    ],
    learning:
      "Integrar distintos clientes sobre una API exige mantener consistencia en los datos y en los estados del reporte.",
    github: "https://github.com/Josetume/alertaya",
  },
  {
    slug: "bunker-canino",
    title: "Bunker Canino",
    image: "/bunker-canino.png",
    imageAlt: "Sitio web de Bunker Canino con presentación de sus productos",
    category: "Sitio web responsivo",
    description:
      "Interfaces web adaptadas a distintos dispositivos, construidas con componentes reutilizables y desplegadas en Vercel.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    role: "Desarrollo de interfaces, ajustes de diseño y despliegue.",
    challenge:
      "Construir una experiencia web consistente entre pantallas y organizar la interfaz en componentes reutilizables.",
    work: [
      "Construí interfaces responsivas con React / Next.js y Tailwind CSS.",
      "Organicé la interfaz en componentes reutilizables.",
      "Realicé ajustes de diseño y el despliegue en Vercel.",
    ],
    learning:
      "La reutilización de componentes facilita mantener consistencia visual y realizar ajustes de diseño.",
    demo: "https://bunker-canino.vercel.app/",
  },
  {
    slug: "educapp",
    title: "EducApp",
    demo: "https://www.inproyi.com/proydsi/frontend/vista/Index.php",
    category: "Proyecto complementario · Android",
    description:
      "Aplicación educativa con juegos y un panel docente para consultar puntajes y tiempos de participación.",
    tech: ["Kotlin", "PHP", "MySQL", "APIs REST"],
    image: "/PanelAdminEducapp.jpg",
    imageAlt: "Panel docente de resultados de EducApp",
    role: "Desarrollo de aplicación, API y base de datos.",
    challenge:
      "Conectar la actividad de los juegos educativos con una vista de resultados para docentes.",
    work: [
      "Desarrollé una aplicación Android con cuatro juegos didácticos.",
      "Integré el envío de puntajes y tiempos mediante una API.",
      "Construí un panel docente con consulta y filtros de resultados.",
    ],
    learning:
      "Un panel de resultados debe transformar los registros de la aplicación en información fácil de consultar.",
  },
];
