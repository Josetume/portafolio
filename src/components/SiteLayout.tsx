import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { siteUrl } from "@/data/site";
import { text as t, type Locale } from "@/lib/locale";
const displayFont = localFont({
  src: "../assets/fonts/SpaceGrotesk-Variable.ttf",
  variable: "--font-display",
  weight: "300 700",
  display: "swap",
  fallback: ["Segoe UI", "Arial"],
});
export function siteMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t(
        locale,
        "José Tume · Desarrollador Full Stack Junior",
        "José Tume · Junior Full Stack Developer",
      ),
      template: "%s | José Tume",
    },
    description: t(
      locale,
      "Desarrollador Full Stack Junior en Lima, Perú. PHP, React y SQL. Proyectos, experiencia y casos de estudio.",
      "Junior Full Stack Developer in Lima, Peru. PHP, React and SQL. Projects, experience and case studies.",
    ),
    openGraph: {
      title: "José Tume · Full Stack Junior",
      description: t(
        locale,
        "Desarrollo web y APIs REST. Explora mis proyectos y experiencia.",
        "Web development and REST APIs. Explore my projects and experience.",
      ),
      locale: locale === "en" ? "en_US" : "es_PE",
      type: "website",
      images: ["/opengraph-image"],
    },
    twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
    robots: { index: true, follow: true },
  };
}
export default function SiteLayout({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <html lang={locale} className={displayFont.variable}>
      <body>
        <a className="skip-link" href="#contenido">
          {t(locale, "Saltar al contenido", "Skip to content")}
        </a>
        <Navbar locale={locale} />
        <main id="contenido">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
