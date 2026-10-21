import Hero from "./Hero";
import FeaturedProject from "./FeaturedProject";
import Timeline from "./Timeline";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Certifications from "./Certifications";
import ContactSection from "./ContactSection";
import type { LocaleProps } from "@/lib/locale";
export default function PortfolioHome({ locale = "es" }: LocaleProps) {
  return (
    <>
      <Hero locale={locale} />
      <FeaturedProject locale={locale} />
      <Timeline locale={locale} />
      <Skills locale={locale} />
      <AboutMe locale={locale} />
      <Certifications locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
