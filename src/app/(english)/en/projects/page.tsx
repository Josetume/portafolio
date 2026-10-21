import ProjectsIndex from "@/components/ProjectsIndex";
export const metadata = {
  title: "Projects",
  alternates: {
    canonical: "/en/projects",
    languages: { es: "/projects", en: "/en/projects" },
  },
};
export default function Page() {
  return <ProjectsIndex locale="en" />;
}
