"use client";
import useActiveSection from "@/hooks/useActiveSection";
import { text as t, type Locale } from "@/lib/locale";
const base = ["context", "decisions", "implementation"] as const;
const withScreens = [...base, "screenshots"] as const;
export default function CaseNavigation({
  hasScreens,
  locale,
}: {
  hasScreens: boolean;
  locale: Locale;
}) {
  const sections = hasScreens ? withScreens : base;
  const active = useActiveSection(sections);
  const labels = {
    context: t(locale, "Contexto", "Context"),
    decisions: t(locale, "Decisiones", "Decisions"),
    implementation: t(locale, "Implementación", "Implementation"),
    screenshots: t(locale, "Capturas", "Screenshots"),
  };
  return (
    <nav
      className="case-nav"
      aria-label={t(locale, "Secciones del caso", "Case study sections")}
    >
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          aria-current={active === id ? "location" : undefined}
        >
          {labels[id]}
        </a>
      ))}
    </nav>
  );
}
