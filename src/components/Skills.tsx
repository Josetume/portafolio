import Link from "next/link";
import {
  Code2,
  Database,
  GitBranch,
  PanelsTopLeft,
  ArrowUpRight,
} from "lucide-react";
import { text as t, projectPath, type LocaleProps } from "@/lib/locale";
export default function Skills({ locale = "es" }: LocaleProps) {
  const skills = [
    {
      icon: PanelsTopLeft,
      title: "Frontend",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      evidence: t(
        locale,
        "Interfaces responsivas y componentes reutilizables.",
        "Responsive interfaces and reusable components.",
      ),
      project: "Bunker Canino",
      slug: "bunker-canino",
    },
    {
      icon: Code2,
      title: t(locale, "Backend e integración", "Backend & integration"),
      stack: ["PHP", "APIs REST", "POO / MVC", "Java / Spring Boot"],
      evidence: t(
        locale,
        "Conexión entre aplicaciones, reglas de negocio y datos.",
        "Connecting applications, business rules and data.",
      ),
      project: "EducApp / AlertaYa",
      slug: "educapp",
    },
    {
      icon: Database,
      title: t(locale, "Bases de datos", "Databases"),
      stack: ["SQL", "MySQL", "PostgreSQL", "MongoDB"],
      evidence: t(
        locale,
        "Consultas y modelado básico; integración de PostgreSQL en AlertaYa.",
        "Queries and basic modeling; PostgreSQL integration in AlertaYa.",
      ),
      project: "AlertaYa",
      slug: "alertaya",
    },
    {
      icon: GitBranch,
      title: t(locale, "Entrega y colaboración", "Delivery & collaboration"),
      stack: ["Git / GitHub", "Postman", "WordPress", "Vercel"],
      evidence: t(
        locale,
        "Pruebas funcionales, debugging y participación en despliegues. WordPress en ALAR.",
        "Functional testing, debugging and deployment. WordPress experience at ALAR.",
      ),
      project: t(locale, "Experiencia en ALAR", "ALAR experience"),
      slug: null,
    },
  ];
  return (
    <section id="skills" className="section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            {t(locale, "03 / Habilidades", "03 / Skills")}
          </p>
          <h2 className="section-title">
            {t(
              locale,
              "Herramientas, con evidencia.",
              "Tools, backed by work.",
            )}
          </h2>
          <p className="muted">
            {t(
              locale,
              "Cada tecnología tiene un lugar dentro de lo que construyo.",
              "Each technology has a place in the work I build.",
            )}
          </p>
        </div>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.title}>
            <skill.icon size={24} className="skill-icon" aria-hidden="true" />
            <h3>{skill.title}</h3>
            <ul className="flex flex-wrap gap-2 my-4">
              {skill.stack.map((tech) => (
                <li className="tag" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
            <p className="muted">{skill.evidence}</p>
            <Link
              className="text-link"
              href={
                skill.slug ? projectPath(locale, skill.slug) : "#experience"
              }
            >
              {skill.project}
              <ArrowUpRight size={15} />
            </Link>
          </article>
        ))}
      </div>
      <p className="skills-note">
        {t(
          locale,
          "También cuento con conocimientos de Kotlin, Java y Python. Mi foco es el desarrollo web Full Stack.",
          "I also have knowledge of Kotlin, Java and Python. My focus is Full Stack web development.",
        )}
      </p>
    </section>
  );
}
