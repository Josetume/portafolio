import ProjectsIndex from "@/components/ProjectsIndex";
export const metadata = {
  title: "Proyectos",
  alternates: {
    canonical: "/projects",
    languages: { es: "/projects", en: "/en/projects" },
  },
};
export default function Page() {
  return <ProjectsIndex locale="es" />;
}
