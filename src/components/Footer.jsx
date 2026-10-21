import Link from "next/link";
import { text as t, homePath, projectPath } from "@/lib/locale";
export default function Footer({ locale = "es" }) {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div>
          <Link className="wordmark" href={homePath(locale)}>
            José Tume<span>.</span>
          </Link>
          <p>
            {t(
              locale,
              "Desarrollador Full Stack Junior · Lima, Perú",
              "Junior Full Stack Developer · Lima, Peru",
            )}
          </p>
        </div>
        <div className="footer-links">
          <Link href={projectPath(locale)}>
            {t(locale, "Proyectos", "Projects")}
          </Link>
          <a
            href="https://github.com/Josetume"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/jose-tume-tovar"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <Link href={`${homePath(locale)}#contact`}>
            {t(locale, "Contacto", "Contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
