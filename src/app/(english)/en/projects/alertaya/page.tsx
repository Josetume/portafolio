import ProjectCase from "@/components/ProjectCase";
import { getProjects } from "@/data/project-details";
const project = getProjects("en")[0];
export const metadata = {
  title: project.title,
  description: project.description,
  alternates: {
    canonical: "/en/projects/alertaya",
    languages: { es: "/projects/alertaya", en: "/en/projects/alertaya" },
  },
};
export default function Page() {
  return <ProjectCase project={project} locale="en" />;
}
