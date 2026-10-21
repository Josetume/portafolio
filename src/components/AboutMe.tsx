import { GraduationCap, ArrowUpRight } from "lucide-react";
import { text as t, type LocaleProps } from "@/lib/locale";
export default function AboutMe({ locale = "es" }: LocaleProps) {
  return (
    <section id="about" className="section shell about-grid">
      <div>
        <p className="eyebrow">{t(locale, "04 / Sobre mí", "04 / About me")}</p>
        <h2 className="section-title">
          {t(
            locale,
            "Entender. Construir. Mejorar.",
            "Understand. Build. Improve.",
          )}
        </h2>
        <p className="muted">
          {t(
            locale,
            "Soy José Tume, egresado técnico en Desarrollo de Sistemas de Información y estudiante de Ingeniería de Sistemas Computacionales. Mi experiencia combina desarrollo web y móvil, prácticas profesionales y soporte técnico.",
            "I am José Tume, a technical graduate in Information Systems Development and a Computer Systems Engineering student. My experience combines web and mobile projects, a development internship and technical support.",
          )}
        </p>
        <p className="muted mt-4">
          {t(
            locale,
            "Me interesa comprender el problema antes de implementar, mantener el código claro y comunicar avances y bloqueos. Busco seguir creciendo como desarrollador Full Stack Junior dentro de un equipo.",
            "I aim to understand the problem before implementing, keep code clear and communicate progress and blockers. I am looking to grow as a Junior Full Stack Developer within a team.",
          )}
        </p>
        <a
          href="/CV_Jose_Tume_FullStack.pdf"
          download
          className="text-link mt-6"
        >
          {t(
            locale,
            "Más sobre mi perfil en el CV",
            "More about my background in my CV (Spanish)",
          )}
          <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="education-card">
        <GraduationCap size={25} className="accent" aria-hidden="true" />
        <p className="eyebrow mt-4">
          {t(locale, "Formación académica", "Education")}
        </p>
        <div>
          <span className="education-status">
            {t(locale, "En curso", "In progress")}
          </span>
          <h3>
            {t(
              locale,
              "Ingeniería de Sistemas Computacionales",
              "Computer Systems Engineering",
            )}
          </h3>
          <p>Universidad Privada del Norte</p>
        </div>
        <div>
          <span className="education-status">
            {t(locale, "Egresado", "Graduate")}
          </span>
          <h3>
            {t(
              locale,
              "Desarrollo de Sistemas de Información",
              "Information Systems Development",
            )}
          </h3>
          <p>IESP Simón Bolívar</p>
        </div>
      </div>
    </section>
  );
}
