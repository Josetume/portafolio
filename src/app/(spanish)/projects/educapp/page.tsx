import ProjectCase from "@/components/ProjectCase";
import { getProjects } from "@/data/project-details";
const project = getProjects("es")[2];
export const metadata = {
  title: project.title,
  description: project.description,
  alternates: {
    canonical: "/projects/educapp",
    languages: { es: "/projects/educapp", en: "/en/projects/educapp" },
  },
};
export default function Page() {
  return <ProjectCase project={project} locale="es" />;
}
