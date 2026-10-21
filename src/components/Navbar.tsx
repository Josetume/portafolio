"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { text as t, homePath, type LocaleProps } from "@/lib/locale";
import useActiveSection from "@/hooks/useActiveSection";
const homeSections = [
  "projects",
  "experience",
  "skills",
  "about",
  "contact",
] as const;
export default function Navbar({ locale = "es" }: LocaleProps) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const base = homePath(locale);
  const observedSection = useActiveSection(homeSections, pathname === base);
  const activeSection = pathname.includes("/projects")
    ? "projects"
    : observedSection;
  const links = [
    { label: t(locale, "Proyectos", "Projects"), href: `${base}#projects` },
    {
      label: t(locale, "Experiencia", "Experience"),
      href: `${base}#experience`,
    },
    { label: t(locale, "Habilidades", "Skills"), href: `${base}#skills` },
  ];
  const otherLanguage =
    locale === "es"
      ? `/en${pathname === "/" ? "" : pathname}`
      : pathname.replace(/^\/en/, "") || "/";
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <nav
        className="shell navigation"
        aria-label={t(locale, "Navegación principal", "Main navigation")}
      >
        <Link
          href={base}
          onClick={() => setOpen(false)}
          className="wordmark"
          aria-label={t(locale, "José Tume, inicio", "José Tume, home")}
        >
          jt<span>.</span>
          <span className="wordmark-name">José Tume</span>
        </Link>
        <div className="desktop-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                activeSection === link.href.split("#")[1]
                  ? "location"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="nav-contact"
            href={`${base}#contact`}
            aria-current={activeSection === "contact" ? "location" : undefined}
          >
            {t(locale, "Contacto", "Contact")}
            <ArrowUpRight size={14} />
          </Link>
          <a href="/CV_Jose_Tume_FullStack.pdf" download className="nav-cv">
            <Download size={15} />
            {t(locale, "Descargar CV", "CV (ES)")}
          </a>
          <Link
            href={otherLanguage}
            hrefLang={locale === "es" ? "en" : "es"}
            className="language-link"
            aria-label={t(
              locale,
              "Read this page in English",
              "Leer esta página en español",
            )}
          >
            {locale === "es" ? "EN" : "ES"}
          </Link>
        </div>
        <div className="mobile-nav-actions">
          <Link
            href={otherLanguage}
            hrefLang={locale === "es" ? "en" : "es"}
            className="language-link"
            aria-label={t(
              locale,
              "Read this page in English",
              "Leer esta página en español",
            )}
          >
            {locale === "es" ? "EN" : "ES"}
          </Link>
          <button
            ref={button}
            onClick={() => setOpen(!open)}
            aria-label={
              open
                ? t(locale, "Cerrar menú", "Close menu")
                : t(locale, "Abrir menú", "Open menu")
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="icon-button"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <div
          id="mobile-navigation"
          hidden={!open}
          className="mobile-navigation"
        >
          {[
            ...links,
            { label: t(locale, "Sobre mí", "About me"), href: `${base}#about` },
            {
              label: t(locale, "Contacto", "Contact"),
              href: `${base}#contact`,
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                activeSection === link.href.split("#")[1]
                  ? "location"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
              <ArrowUpRight size={15} />
            </Link>
          ))}
          <a
            className="button"
            href="/CV_Jose_Tume_FullStack.pdf"
            download
            onClick={() => setOpen(false)}
          >
            <Download size={17} />
            {t(locale, "Descargar CV", "Download CV (Spanish)")}
          </a>
        </div>
      </nav>
    </header>
  );
}
