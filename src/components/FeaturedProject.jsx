import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { getProjects } from "@/data/project-details";
import { text as t, projectPath } from "@/lib/locale";
export default function FeaturedProject({ locale = "es" }) {
  const projects = getProjects(locale);
  return (
    <section id="projects" className="section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            {t(
              locale,
              "01 / Proyectos seleccionados",
              "01 / Selected projects",
            )}
          </p>
          <h2 className="section-title">
            {t(locale, "Del código al producto.", "From code to product.")}
          </h2>
          <p className="muted">
            {t(
              locale,
              "Qué construí, cómo participé y las decisiones detrás de cada solución.",
              "What I built, my contribution and the decisions behind each solution.",
            )}
          </p>
        </div>
        <Link className="text-link" href={projectPath(locale)}>
          {t(locale, "Todos los proyectos", "All projects")}
          <ArrowUpRight size={17} />
        </Link>
      </div>
      <ProjectCard project={projects[0]} locale={locale} featured />
      <div className="project-grid">
        {projects.slice(1).map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} />
        ))}
      </div>
    </section>
  );
}
