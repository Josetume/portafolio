import ProjectCase from "@/components/ProjectCase";
import { getProjects } from "@/data/project-details";
const project = getProjects("en")[1];
export const metadata = {
  title: project.title,
  description: project.description,
  alternates: {
    canonical: "/en/projects/bunker-canino",
    languages: {
      es: "/projects/bunker-canino",
      en: "/en/projects/bunker-canino",
    },
  },
};
export default function Page() {
  return <ProjectCase project={project} locale="en" />;
}
