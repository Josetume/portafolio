import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { text as t, type LocaleProps } from "@/lib/locale";
export default function ContactSection({ locale = "es" }: LocaleProps) {
  return (
    <section id="contact" className="section shell">
      <div className="contact-card">
        <div>
          <p className="eyebrow">
            {t(locale, "05 / Contacto", "05 / Contact")}
          </p>
          <h2>
            {t(locale, "Conversemos sobre", "Let’s talk about")}
            <br />
            <span>
              {t(locale, "tu próxima incorporación.", "your next team member.")}
            </span>
          </h2>
          <p>
            {t(
              locale,
              "Busco oportunidades como desarrollador Full Stack Junior. Si mi perfil encaja con tu equipo, me encantará conocer el proyecto.",
              "I am looking for Junior Full Stack Developer opportunities. If my background matches your team, I would love to learn about the project.",
            )}
          </p>
          <span className="contact-location">
            <MapPin size={14} />
            {t(locale, "Lima, Perú", "Lima, Peru")}
          </span>
        </div>
        <div className="contact-actions">
          <a className="button" href="mailto:elenojose945@gmail.com">
            <Mail size={18} />
            {t(locale, "Escribirme por correo", "Send me an email")}
            <ArrowUpRight size={16} />
          </a>
          <a
            href="/CV_Jose_Tume_FullStack.pdf"
            download
            className="button secondary"
          >
            <Download size={17} />
            {t(locale, "Descargar CV", "Download CV (Spanish)")}
          </a>
          <a className="contact-email" href="mailto:elenojose945@gmail.com">
            elenojose945@gmail.com
          </a>
          <a
            className="quiet-link"
            href="https://wa.me/51979901839"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(locale, "También por WhatsApp", "Also on WhatsApp")}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
