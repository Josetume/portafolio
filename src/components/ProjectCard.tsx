import ProjectCover from "./ProjectCover";
import Link from "next/link";
import { ArrowUpRight, Check, Code2 } from "lucide-react";
import type { ProjectDetail } from "@/data/project-details";
import { text as t, projectPath, type Locale } from "@/lib/locale";
export default function ProjectCard({
  project,
  locale = "es",
  featured = false,
}: {
  project: ProjectDetail;
  locale?: Locale;
  featured?: boolean;
}) {
  const mainTech =
    project.slug === "alertaya"
      ? ["React", "Spring Boot", "PostgreSQL"]
      : project.tech.slice(0, 3);
  return (
    <article
      className={`project-card ${featured ? "project-card-featured" : ""}`}
      data-project={project.slug}
    >
      <Link
        href={projectPath(locale, project.slug)}
        className="project-visual project-visual-composed"
        aria-label={`${t(locale, "Ver proyecto", "View project")} ${project.title}`}
      >
        <ProjectCover project={project} locale={locale} />
      </Link>
      <div className="project-card-content">
        <p className="eyebrow">{project.focus}</p>
        <h3>
          {project.title}
          <span className="accent">.</span>
        </h3>
        <p className="muted project-description">{project.description}</p>
        <dl className="project-facts">
          <div>
            <dt>{t(locale, "Mi aporte", "My contribution")}</dt>
            <dd>
              <Check size={15} aria-hidden="true" />
              {project.contribution}
            </dd>
          </div>
          <div>
            <dt>{t(locale, "Alcance", "Scope")}</dt>
            <dd>
              <Code2 size={15} aria-hidden="true" />
              {project.scope}
            </dd>
          </div>
        </dl>
        <ul
          aria-label={t(locale, "Tecnologías principales", "Main technologies")}
          className="flex flex-wrap gap-2 mb-6"
        >
          {mainTech.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
        <div className="project-card-links">
          <Link href={projectPath(locale, project.slug)} className="text-link">
            {t(locale, "Explorar caso", "Explore case study")}
            <ArrowUpRight size={17} />
          </Link>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="quiet-link"
            >
              {project.slug === "educapp"
                ? t(locale, "Panel docente", "Teacher panel")
                : t(locale, "Ver sitio", "Live site")}
              <ArrowUpRight size={15} />
            </a>
          )}
          {featured && project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="quiet-link"
            >
              GitHub
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
