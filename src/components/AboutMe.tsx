"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 text-center overflow-hidden"
    >
      {/* Fondo con tu imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/imgs/aboutme.jpg')", // coloca la imagen en /public/imgs/about-bg.jpg
        }}
      />

      {/* Capa oscura para mejorar la lectura */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* GLOW suave decorativo */}
      <div className="absolute inset-0 max-w-lg mx-auto blur-[120px] opacity-20 bg-teal-500/40 rounded-full pointer-events-none" />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-teal-400 mb-8"
        >
          Sobre mí
        </motion.h2>

        {/* PÁRRAFO 1 */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-200 text-lg leading-relaxed"
        >
          Soy desarrollador de software con experiencia creando soluciones
          completas: aplicaciones móviles en Kotlin, APIs REST robustas, paneles
          administrativos y flujos automatizados con n8n e IA. Durante el último
          año he construido proyectos reales para uso municipal, escolar y
          comercial, integrando frontend, backend y base de datos en productos
          funcionales y estables.
        </motion.p>

        {/* PÁRRAFO 2 */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-gray-300 text-lg leading-relaxed mt-6 max-w-3xl mx-auto"
        >
          Me especializo en analizar problemas, diseñar arquitecturas simples pero
          escalables y convertir requerimientos difusos en productos que realmente
          resuelven algo. Trabajo con Android, PHP, JavaScript/TypeScript, MySQL,
          React, n8n y Python, priorizando claridad, mantenibilidad y experiencias
          fluidas para usuarios y administradores.
        </motion.p>

        {/* PÁRRAFO 3 */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-gray-300 text-lg leading-relaxed mt-6 max-w-3xl mx-auto"
        >
          Hoy busco seguir desarrollando software que deje una mejora tangible:
          sistemas que automaticen tareas, reduzcan tiempos, ordenen información y
          permitan que otros trabajen mejor.
        </motion.p>
      </div>
    </section>
  );
}
