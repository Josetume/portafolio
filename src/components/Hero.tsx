import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { text as t, projectPath, type LocaleProps } from "@/lib/locale";
export default function Hero({ locale = "es" }: LocaleProps) {
  return (
    <section id="top" className="shell hero">
      <div className="hero-copy">
        <div className="identity">
          <Image
            src="/fotojose.jpg"
            alt="José Tume"
            width={60}
            height={60}
            priority
            className="identity-avatar"
          />
          <div>
            <p className="identity-name">
              José Tume<span>.</span>
            </p>
            <p className="location">
              <MapPin size={13} aria-hidden="true" />
              {t(locale, "Lima, Perú", "Lima, Peru")}
            </p>
          </div>
        </div>
        <h1>
          {t(locale, "Desarrollador", "Junior Full Stack")}
          <br />
          {t(locale, "Full Stack Junior", "Developer")}
          <span className="accent">.</span>
        </h1>
        <p className="hero-stack">
          PHP <span>/</span> React <span>/</span> SQL
        </p>
        <p className="muted hero-description">
          {t(
            locale,
            "Desarrollo aplicaciones web y APIs REST. Experiencia práctica en requerimientos, implementación, pruebas funcionales y despliegue.",
            "I build web applications and REST APIs, with hands-on experience in requirements, implementation, functional testing and deployment.",
          )}
        </p>
        <div className="hero-actions">
          <Link href="#projects" className="button">
            {t(locale, "Ver proyectos", "View projects")}
            <ArrowDown size={17} />
          </Link>
          <a
            href="/CV_Jose_Tume_FullStack.pdf"
            download
            className="button secondary"
          >
            {t(locale, "Descargar CV", "CV (Spanish)")}
            <Download size={17} />
          </a>
          <div className="social-links">
            <a
              href="https://github.com/Josetume"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/jose-tume-tovar"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
      <aside
        className="profile-note"
        aria-label={t(locale, "Perfil profesional", "Professional profile")}
      >
        <div className="profile-photo">
          <Image
            src="/fotojose.jpg"
            alt={t(locale, "Retrato de José Tume", "Portrait of José Tume")}
            fill
            sizes="240px"
            className="object-cover object-top"
          />
        </div>
        <div className="profile-note-content">
          <GraduationCap size={18} className="accent" aria-hidden="true" />
          <p>
            {t(
              locale,
              "Egresado técnico en desarrollo de sistemas",
              "Technical graduate in information systems development",
            )}
          </p>
          <span>
            {t(
              locale,
              "Ingeniería de Sistemas · En curso",
              "Systems Engineering · In progress",
            )}
          </span>
        </div>
      </aside>
      <div className="evidence-strip">
        <span className="evidence-label">
          {t(locale, "Stack en práctica", "Stack in practice")}
        </span>
        {[
          { stack: "React + Spring Boot", name: "AlertaYa", slug: "alertaya" },
          {
            stack: "Next.js + Tailwind",
            name: "Bunker Canino",
            slug: "bunker-canino",
          },
          { stack: "PHP + MySQL", name: "EducApp", slug: "educapp" },
        ].map((item) => (
          <Link key={item.slug} href={projectPath(locale, item.slug)}>
            <span>{item.stack}</span>
            <strong>
              {item.name}
              <ArrowUpRight size={14} />
            </strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
