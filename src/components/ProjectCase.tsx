import ProjectCover from "./ProjectCover";
import CaseNavigation from "./CaseNavigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight, Check } from "lucide-react";
import type { ProjectDetail } from "@/data/project-details";
import { getProjects } from "@/data/project-details";
import { adminScreens, mobileScreens } from "@/data/alertaya-screens";
import { getEducappScreens } from "@/data/educapp-screens";
import ScreenshotGallery from "./ScreenshotGallery";
import { text as t, homePath, projectPath, type Locale } from "@/lib/locale";
const enScreens = [
  {
    label: "Activity overview",
    description: "Personal queue and reports requiring attention.",
  },
  {
    label: "Report management",
    description: "Queues, saved views and incident filters.",
  },
  {
    label: "Case handling and tracking",
    description: "Responsibility, priority, evidence and case history.",
  },
  {
    label: "Administrative sign-in",
    description: "The administration panel sign-in screen.",
  },
  {
    label: "Home and map",
    description: "Incident map, latest case and report creation.",
  },
  {
    label: "New report",
    description: "A guided three-step form and incident classification.",
  },
  {
    label: "My reports",
    description: "Reports, emergencies, statuses and saved submissions.",
  },
  {
    label: "Case detail and follow-up",
    description: "Incident handling status and photo evidence review.",
  },
];
export default function ProjectCase({
  project,
  locale = "es",
}: {
  project: ProjectDetail;
  locale?: Locale;
}) {
  const next = getProjects(locale).filter((p) => p.slug !== project.slug);
  const isEducapp = project.slug === "educapp";
  const hasScreens = project.slug === "alertaya" || isEducapp;
  const educappScreens = getEducappScreens(locale);
  const admin = isEducapp
    ? educappScreens.admin
    : adminScreens.map((s, i) => ({
        ...s,
        ...(locale === "en" ? enScreens[i] : {}),
      }));
  const mobile = isEducapp
    ? educappScreens.mobile
    : mobileScreens.map((s, i) => ({
        ...s,
        ...(locale === "en" ? enScreens[i + 4] : {}),
      }));
  return (
    <article className="shell case-study" data-project={project.slug}>
      <Link className="back-link" href={projectPath(locale)}>
        <ArrowLeft size={16} />
        {t(locale, "Todos los proyectos", "All projects")}
      </Link>
      <header className="case-header">
        <div>
          <p className="eyebrow">{project.focus}</p>
          <h1 className="page-title">
            {project.title}
            <span className="accent">.</span>
          </h1>
          <p className="muted case-description">{project.description}</p>
        </div>
        <div className="case-links">
          {project.demo && (
            <a
              className="button"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {isEducapp
                ? t(locale, "Abrir panel docente", "Open teacher panel")
                : t(locale, "Ver sitio publicado", "Visit live website")}
              <ArrowUpRight size={16} />
            </a>
          )}
          {project.github && (
            <a
              className="button secondary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(locale, "Ver repositorio", "View repository")}
              <ArrowUpRight size={16} />
            </a>
          )}
          <Link href="#implementation" className="quiet-link">
            {t(locale, "Explorar implementación", "Explore implementation")}
            <ArrowRight size={15} />
          </Link>
        </div>
      </header>
      <dl className="case-summary">
        <div>
          <dt>{t(locale, "Mi participación", "My role")}</dt>
          <dd>{project.contribution}</dd>
        </div>
        <div>
          <dt>{t(locale, "Alcance", "Scope")}</dt>
          <dd>{project.scope}</dd>
        </div>
        <div>
          <dt>{t(locale, "Tecnologías", "Technologies")}</dt>
          <dd>{project.tech.join(" · ")}</dd>
        </div>
      </dl>
      <CaseNavigation hasScreens={hasScreens} locale={locale} />
      {project.image && (
        <figure className="case-cover">
          <ProjectCover project={project} locale={locale} large />
          <figcaption>
            {t(locale, "Interfaz del proyecto", "Project interface")}
            {project.slug === "alertaya"
              ? t(
                  locale,
                  " · Panel con datos de demostración",
                  " · Admin panel with demonstration data",
                )
              : ""}
          </figcaption>
        </figure>
      )}
      <section id="context" className="case-section case-context">
        <div>
          <p className="eyebrow">
            {t(locale, "01 / Contexto", "01 / Context")}
          </p>
          <h2 className="section-title">
            {t(locale, "El problema a resolver.", "The problem to solve.")}
          </h2>
        </div>
        <div>
          <p className="muted text-lg">{project.challenge}</p>
          <div className="case-role">
            <h3>{t(locale, "Mi participación", "My role")}</h3>
            <p className="muted">{project.role}</p>
          </div>
        </div>
      </section>
      <section id="decisions" className="case-section">
        <p className="eyebrow">
          {t(locale, "02 / Criterio técnico", "02 / Technical approach")}
        </p>
        <h2 className="section-title">
          {t(
            locale,
            "Decisiones de implementación.",
            "Implementation decisions.",
          )}
        </h2>
        <div className="decisions-grid">
          {project.decisions.map((decision, index) => (
            <article className="decision-card" key={decision.title}>
              <span>0{index + 1}</span>
              <h3>{decision.title}</h3>
              <p className="muted">{decision.detail}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="implementation" className="case-section">
        <p className="eyebrow">
          {t(locale, "03 / Implementación", "03 / Implementation")}
        </p>
        <h2 className="section-title">
          {t(locale, "Lo que desarrollé.", "What I developed.")}
        </h2>
        <ol className="implementation-list">
          {project.work.map((work) => (
            <li key={work}>
              <Check size={19} aria-hidden="true" />
              <p>{work}</p>
            </li>
          ))}
        </ol>
      </section>
      {hasScreens && (
        <section id="screenshots" className="case-section">
          <p className="eyebrow">
            {t(
              locale,
              "04 / El producto en pantalla",
              "04 / The product in action",
            )}
          </p>
          <div className="gallery-heading">
            <div>
              <h2 id="admin-screens-title" className="section-title">
                {isEducapp
                  ? t(
                      locale,
                      "Acceso al panel docente.",
                      "Teacher panel access.",
                    )
                  : t(locale, "Panel administrativo.", "Administration panel.")}
              </h2>
              <p className="muted">
                {isEducapp
                  ? t(
                      locale,
                      "El sitio del panel está disponible y requiere iniciar sesión. Esta captura muestra la página de acceso.",
                      "The panel website is available and requires sign-in. This screenshot shows the access page.",
                    )
                  : t(
                      locale,
                      "Interfaz actual con datos de demostración. Selecciona una captura para explorarla.",
                      "Current interface with demonstration data. Select a screenshot to explore it.",
                    )}
              </p>
            </div>
            <span className="gallery-label">
              {isEducapp ? "PHP / MySQL" : "React / TypeScript"}
            </span>
          </div>
          <section aria-labelledby="admin-screens-title">
            <ScreenshotGallery
              initialCount={2}
              screens={admin}
              locale={locale}
              projectName={project.title}
            />
          </section>
          <div className="gallery-heading mobile-gallery-heading">
            <div>
              <h2 id="mobile-screens-title" className="section-title">
                {t(locale, "Aplicación Android.", "Android application.")}
              </h2>
              <p className="muted">
                {t(
                  locale,
                  "Capturas reales de la aplicación nativa.",
                  "Real screenshots of the native application. The interface is in Spanish.",
                )}
              </p>
            </div>
            <span className="gallery-label">
              {isEducapp ? "Kotlin / Android" : "Kotlin / Jetpack Compose"}
            </span>
          </div>
          <section aria-labelledby="mobile-screens-title">
            {isEducapp ? (
              <>
                <div className="gallery-group-heading">
                  <h3>
                    {t(locale, "Acceso y resultados", "Access and results")}
                  </h3>
                  <span>03</span>
                </div>
                <ScreenshotGallery
                  screens={[mobile[0], mobile[1], mobile[6]]}
                  mobile
                  locale={locale}
                  projectName={project.title}
                  mobileAspect="9 / 16"
                />
                <div className="gallery-group-heading">
                  <h3>{t(locale, "Juegos educativos", "Educational games")}</h3>
                  <span>04</span>
                </div>
                <ScreenshotGallery
                  screens={mobile.slice(2, 6)}
                  mobile
                  locale={locale}
                  projectName={project.title}
                  mobileAspect="9 / 16"
                  initialCount={2}
                />
              </>
            ) : (
              <ScreenshotGallery
                screens={mobile}
                mobile
                locale={locale}
                projectName={project.title}
                initialCount={2}
              />
            )}
          </section>
        </section>
      )}
      <section className="learning-card">
        <p className="eyebrow">{t(locale, "Aprendizaje", "Takeaway")}</p>
        <h2>
          {t(
            locale,
            "Lo que me dejó este proyecto.",
            "What I learned from this project.",
          )}
        </h2>
        <p className="muted">{project.learning}</p>
      </section>
      <div className="case-next">
        <div>
          <p className="eyebrow">
            {t(locale, "Sigue explorando", "Keep exploring")}
          </p>
          {next.map((p) => (
            <Link
              key={p.slug}
              className="text-link"
              href={projectPath(locale, p.slug)}
            >
              {p.title}
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </div>
        <Link className="button secondary" href={`${homePath(locale)}#contact`}>
          {t(locale, "Conversemos", "Let’s talk")}
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
