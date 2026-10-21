import { Award, ArrowUpRight } from "lucide-react";
import { text as t } from "@/lib/locale";
export default function Certifications({ locale = "es" }) {
  const courses = [
    {
      title: "Scrum Fundamentals Certified",
      href: "/certificados/certificadoscrum.jpg",
    },
    {
      title: t(locale, "SQL para análisis de datos", "SQL for data analysis"),
      href: "/certificados/certificadosql.jpg",
    },
    {
      title: t(locale, "Programación con Python", "Python programming"),
      note: "Udemy Business",
    },
    { title: t(locale, "Power BI y Excel", "Power BI and Excel") },
  ];
  return (
    <section id="certifications" className="shell certifications">
      <h2>{t(locale, "Formación complementaria", "Additional training")}</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.title}>
            <Award size={18} aria-hidden="true" />
            {course.href ? (
              <a href={course.href} target="_blank" rel="noopener noreferrer">
                {course.title}
                <ArrowUpRight size={14} />
                <span className="sr-only">
                  {t(
                    locale,
                    "Abrir certificado en otra pestaña",
                    "Open certificate in a new tab",
                  )}
                </span>
              </a>
            ) : (
              <span>
                {course.title}
                {course.note && <small>{course.note}</small>}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
