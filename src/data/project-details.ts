import { projects, type Project } from "./projects";
import type { Locale } from "@/lib/locale";
export type ProjectDetail = Project & {
  contribution: string;
  scope: string;
  focus: string;
  decisions: { title: string; detail: string }[];
};
const details = [
  {
    contribution: "Integración de app, API y panel",
    scope: "Android + API REST + administración",
    focus: "Full Stack · Web y móvil",
    decisions: [
      {
        title: "Una API central para dos clientes",
        detail:
          "La aplicación Android y el panel React consumen la API Java/Spring Boot, que concentra permisos y reglas del proceso.",
      },
      {
        title: "Seguimiento separado de la evidencia",
        detail:
          "El estado de atención del incidente y la revisión de su fotografía se presentan como procesos independientes, para que el usuario entienda qué se está evaluando.",
      },
    ],
  },
  {
    contribution: "Componentes, diseño responsivo y despliegue",
    scope: "Sitio web publicado en Vercel",
    focus: "Frontend · Sitio comercial",
    decisions: [
      {
        title: "Componentes reutilizables",
        detail:
          "La interfaz se organiza en componentes para mantener consistencia visual y facilitar los ajustes de diseño.",
      },
      {
        title: "Adaptación entre pantallas",
        detail:
          "El diseño responsivo permite presentar el contenido y las acciones del sitio en distintos tamaños de pantalla.",
      },
    ],
  },
  {
    contribution: "Aplicación Android, API PHP y datos",
    scope: "Juegos educativos + panel docente",
    focus: "Backend PHP · Integración móvil",
    decisions: [
      {
        title: "Separar la aplicación de los datos",
        detail:
          "La aplicación envía puntajes y tiempos a través de una API PHP conectada con MySQL, en lugar de acceder directamente a la base de datos.",
      },
      {
        title: "Resultados para docentes",
        detail:
          "El panel permite consultar y filtrar los registros de las actividades para facilitar la revisión del desempeño.",
      },
    ],
  },
];
const english: Omit<
  ProjectDetail,
  "slug" | "title" | "tech" | "image" | "github" | "demo"
>[] = [
  {
    category: "Mobile application + web platform",
    description:
      "Citizen reports with photos, location and case tracking through an Android application and an administration panel.",
    imageAlt: "Current AlertaYa activity dashboard with demonstration data",
    role: "Mobile and web features, REST API implementation and integration.",
    challenge:
      "Connect reports submitted from a mobile device with case review and follow-up in an administrative interface.",
    work: [
      "Developed authentication and geolocated reports with image attachments.",
      "Implemented and consumed REST endpoints to create and retrieve reports.",
      "Built web views for incident tracking.",
    ],
    learning:
      "Integrating multiple clients through an API requires consistent data and clearly defined report states.",
    contribution: "Application, API and admin panel integration",
    scope: "Android + REST API + administration",
    focus: "Full Stack · Web and mobile",
    decisions: [
      {
        title: "One central API, two clients",
        detail:
          "The Android app and React panel consume the Java/Spring Boot API, which centralizes permissions and process rules.",
      },
      {
        title: "Separate case tracking from photo review",
        detail:
          "Incident handling and photo moderation are shown as separate processes, helping users understand what is being evaluated.",
      },
    ],
  },
  {
    category: "Responsive website",
    description:
      "Responsive web interfaces built with reusable components and deployed on Vercel.",
    imageAlt: "Bunker Canino website presenting its products",
    role: "Interface development, design adjustments and deployment.",
    challenge:
      "Build a consistent experience across screen sizes and organize the interface into reusable components.",
    work: [
      "Built responsive interfaces with React / Next.js and Tailwind CSS.",
      "Organized the interface into reusable components.",
      "Made design adjustments and deployed the website on Vercel.",
    ],
    learning:
      "Reusable components make it easier to maintain visual consistency and implement design changes.",
    contribution: "Components, responsive design and deployment",
    scope: "Live website deployed on Vercel",
    focus: "Frontend · Business website",
    decisions: [
      {
        title: "Reusable components",
        detail:
          "The interface is organized into components to support visual consistency and make design changes easier.",
      },
      {
        title: "Adaptation across screens",
        detail:
          "Responsive layouts present the website content and actions at different screen sizes.",
      },
    ],
  },
  {
    category: "Supporting project · Android",
    description:
      "An educational app with games and a teacher dashboard for reviewing scores and participation times.",
    imageAlt: "EducApp teacher results dashboard",
    role: "Application, API and database development.",
    challenge:
      "Connect educational game activity with a results dashboard for teachers.",
    work: [
      "Developed an Android application with four educational games.",
      "Integrated score and time submissions through an API.",
      "Built a teacher dashboard with results and filters.",
    ],
    learning:
      "A results dashboard should turn application records into information that is easy to review.",
    contribution: "Android application, PHP API and data",
    scope: "Educational games + teacher dashboard",
    focus: "PHP backend · Mobile integration",
    decisions: [
      {
        title: "Separate the app from the database",
        detail:
          "The application submits scores and times through a PHP API connected to MySQL instead of accessing the database directly.",
      },
      {
        title: "Results for teachers",
        detail:
          "The dashboard supports reviewing and filtering activity records to make performance easier to assess.",
      },
    ],
  },
];
export function getProjects(locale: Locale = "es"): ProjectDetail[] {
  return projects.map((project, index) => ({
    ...project,
    ...details[index],
    ...(locale === "en" ? english[index] : {}),
  }));
}
