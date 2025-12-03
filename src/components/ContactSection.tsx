"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiKotlin,
} from "react-icons/si";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const WHATSAPP_NUMBER = "51979901839";
const WA_TEXT = encodeURIComponent("Hola 👋, quisiera agendar una llamada para conversar sobre un proyecto.");
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const WA_SCHEDULE_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_TEXT}`;
const MAILTO = "mailto:elenojose945@gmail.com";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 max-w-4xl mx-auto text-center"
      aria-labelledby="contact-title"
    >
     
      {/* Header */}
      <motion.h2
        id="contact-title"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-3"
      >
        Conectemos
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-gray-300 max-w-2xl mx-auto mb-8"
      >
        ¿Tienes una idea, proyecto o una vacante? Hablemos — respondo rápido y
        me adapto a llamadas técnicas o reuniones breves.
      </motion.p>

      {/* Card: unified */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-gray-900/40 border border-gray-800 backdrop-blur-xl p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      >
        {/* Roles chips */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-3 mb-6">
          {["Desarrollador Fullstack", "Backend Developer", "Mobile Android"].map((r) => (
            <span
              key={r}
              className="px-3 py-1 rounded-full text-sm font-medium bg-gray-800/30 border border-teal-400/20 text-teal-200"
            >
              {r}
            </span>
          ))}
        </motion.div>

        {/* Short pitch and strengths */}
        <motion.p
          variants={item}
          className="text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6"
        >
          Desarrollo aplicaciones Android, APIs REST y paneles web. Entrego soluciones
          claras, escalables y listas para producción. Trabajo con integración de IA y
          automatizaciones cuando el proyecto lo requiere.
        </motion.p>

        {/* Tech stack */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center items-center gap-4 mb-6"
          aria-hidden="false"
        >
          <TechBadge name="React" icon={<SiReact />} />
          <TechBadge name="Next.js" icon={<SiNextdotjs />} />
          <TechBadge name="Node.js" icon={<SiNodedotjs />} />
          <TechBadge name="Firebase" icon={<SiFirebase />} />
          <TechBadge name="Tailwind" icon={<SiTailwindcss />} />
          <TechBadge name="Kotlin" icon={<SiKotlin />} />
        </motion.div>

        {/* CTA row */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-teal-500 text-black font-semibold hover:bg-teal-400 transition shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-400/30"
            aria-label="Abrir WhatsApp"
          >
            <FaWhatsapp className="text-xl" aria-hidden />
            WhatsApp
          </a>

          <a
            href={MAILTO}
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold border border-gray-700 hover:bg-gray-700 transition focus:outline-none focus:ring-4 focus:ring-white/10"
            aria-label="Enviar correo"
          >
            <FaEnvelope className="text-xl" aria-hidden />
            Enviar correo
          </a>

          <a
            href={WA_SCHEDULE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-xl border border-teal-400/30 text-teal-300 font-semibold bg-transparent hover:bg-teal-400 hover:text-black transition focus:outline-none focus:ring-4 focus:ring-teal-400/20"
            aria-label="Agendar llamada"
          >
            <FaPhone className="text-xl" aria-hidden />
            Agendar llamada
          </a>
        </motion.div>

        {/* Testimonial + professor reference */}
<motion.blockquote
  variants={item}
  className="mt-10 text-left max-w-2xl mx-auto text-gray-300 italic border-l-2 border-teal-400/30 pl-4 leading-relaxed"
>
  “José destaca por su compromiso con el aprendizaje y su participación activa.
  Demuestra excelente criterio para programar sistemas de información, capacidad
  analítica y creatividad frente a los retos. Su comunicación clara y efectiva
  facilita el trabajo en equipo y la colaboración. Estoy seguro de que será un
  gran aporte en cualquier proyecto o equipo en el que participe.”
  <footer className="not-italic text-teal-200 font-semibold mt-3 text-sm">
    — Docente y Consultor TI
  </footer>
</motion.blockquote>

      </motion.div>

      {/* Footer small text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 text-sm text-gray-500"
      >
        Disponible para proyectos remotos y tiempo completo — respondo en menos de 48 horas.
      </motion.p>

  
      
    </section>
  );
}

/* TechBadge component */
function TechBadge({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div
      role="img"
      aria-label={name}
      className="group flex items-center gap-2 px-3 py-2 rounded-md bg-gray-800/20 border border-gray-800 hover:scale-105 transition transform"
      title={name}
    >
      <div className="text-teal-300 text-xl group-hover:drop-shadow-[0_0_12px_rgba(0,255,194,0.25)]">
        {icon}
      </div>
      <span className="text-sm text-gray-200 hidden sm:inline">{name}</span>
    </div>
  );
}
