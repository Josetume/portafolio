export type Locale = "es" | "en";
export type LocaleProps = { locale?: Locale };
export const text = (locale: Locale, es: string, en: string) =>
  locale === "en" ? en : es;
export const homePath = (locale: Locale) => (locale === "en" ? "/en" : "/");
export const projectPath = (locale: Locale, slug = "") =>
  `${locale === "en" ? "/en" : ""}/projects${slug ? `/${slug}` : ""}`;
