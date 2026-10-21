import ProjectCard from "./ProjectCard";
import { getProjects } from "@/data/project-details";
import { text as t, type LocaleProps } from "@/lib/locale";
export default function ProjectsIndex({ locale = "es" }: LocaleProps) {
  const projects = getProjects(locale);
  return (
    <section className="shell page-intro">
      <p className="eyebrow">
        {t(locale, "Proyectos / Casos de estudio", "Projects / Case studies")}
      </p>
      <h1 className="page-title">
        {t(locale, "Trabajo que puedes explorar.", "Work you can explore.")}
      </h1>
      <p className="muted max-w-2xl mb-10">
        {t(
          locale,
          "Aplicaciones, interfaces e integraciones. En cada caso: el problema, mi aporte y las decisiones de implementación.",
          "Applications, interfaces and integrations. Each case explains the problem, my contribution and implementation decisions.",
        )}
      </p>
      <ProjectCard project={projects[0]} locale={locale} featured />
      <div className="project-grid">
        {projects.slice(1).map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} />
        ))}
      </div>
    </section>
  );
}
