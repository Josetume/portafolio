import { ArrowUpRight, BriefcaseBusiness, Headset } from "lucide-react";
import { text as t } from "@/lib/locale";
export default function Timeline({ locale = "es" }) {
  const groups = [
    {
      title: t(locale, "Desarrollador web", "Web developer"),
      company: "Idiomas ALAR · Universidades Rusia",
      date: t(locale, "Ene — mar 2026", "Jan — Mar 2026"),
      type: t(locale, "Prácticas por proyecto", "Project-based internship"),
      points: [
        t(
          locale,
          "Análisis de requerimientos para un sitio institucional.",
          "Requirements analysis for an institutional website.",
        ),
        t(
          locale,
          "Implementación y ajuste de funcionalidades y vistas en WordPress.",
          "WordPress feature and interface implementation and adjustments.",
        ),
        t(
          locale,
          "Pruebas funcionales, validación y colaboración en el despliegue.",
          "Functional testing, validation and collaboration on deployment.",
        ),
      ],
      tech: [
        "WordPress",
        "Git / GitHub",
        t(locale, "Pruebas funcionales", "Functional testing"),
      ],
      href: "https://universidades-rusia.com/",
      icon: BriefcaseBusiness,
    },
    {
      title: t(
        locale,
        "Soporte técnico · Movistar",
        "Technical support · Movistar",
      ),
      company: "Covisian",
      date: t(locale, "Jun — oct 2025", "Jun — Oct 2025"),
      type: t(locale, "Experiencia complementaria", "Supporting experience"),
      points: [
        t(
          locale,
          "Diagnóstico de incidencias, documentación de soluciones y seguimiento de tickets.",
          "Incident diagnosis, solution documentation and ticket tracking.",
        ),
        t(
          locale,
          "Comunicación del estado de los casos y resolución de problemas técnicos.",
          "Case status communication and technical troubleshooting.",
        ),
      ],
      tech: [],
      icon: Headset,
    },
  ];
  return (
    <section id="experience" className="section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            {t(locale, "02 / Experiencia", "02 / Experience")}
          </p>
          <h2 className="section-title">
            {t(
              locale,
              "Desarrollo en contexto real.",
              "Development in a real setting.",
            )}
          </h2>
          <p className="muted">
            {t(
              locale,
              "Requerimientos, implementación y colaboración durante la entrega.",
              "Requirements, implementation and collaboration throughout delivery.",
            )}
          </p>
        </div>
      </div>
      <div className="experience-list">
        {groups.map((job, index) => (
          <article
            className={`experience-row ${index === 0 ? "experience-primary" : ""}`}
            key={job.company}
          >
            <div className="experience-meta">
              <job.icon size={21} aria-hidden="true" />
              <p>{job.date}</p>
              <span>{job.type}</span>
            </div>
            <div className="experience-content">
              <h3>{job.title}</h3>
              <p className="experience-company">{job.company}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {job.tech.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {job.href && (
              <a
                href={job.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link experience-link"
              >
                {t(locale, "Ver sitio", "Visit website")}
                <ArrowUpRight size={16} />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
