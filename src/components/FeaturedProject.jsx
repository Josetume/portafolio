"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedProject() {
  return (
    <section
      id="projects"
      className="py-28 px-6 max-w-5xl mx-auto relative"
    >
      {/* Glow de fondo premium */}
      <div className="absolute inset-0 max-w-2xl mx-auto blur-[140px] opacity-20 bg-teal-500/20 rounded-full pointer-events-none -z-10" />

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-extrabold text-center text-teal-400 mb-14 drop-shadow-[0_0_12px_rgba(20,200,180,0.45)]"
      >
        Proyecto destacado
      </motion.h2>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          bg-gray-900/50 border border-gray-700/60 backdrop-blur-2xl
          rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.4)]
          flex flex-col md:flex-row gap-8 p-10 relative
          hover:shadow-[0_0_35px_rgba(20,200,180,0.3)]
          transition-all duration-300
        "
      >
        {/* Imagen */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="md:w-1/2 overflow-hidden rounded-2xl shadow-xl"
        >
          <Image
            src="/alertaya.jpg"
            alt="Proyecto AlertaYa"
            width={650}
            height={400}
            className="object-cover w-full h-full rounded-2xl"
          />
        </motion.div>

        {/* Info */}
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-[0_0_10px_rgba(20,200,180,0.35)]">
            AlertaYa — App móvil + API REST + Panel
          </h3>

          <p className="text-gray-300 leading-relaxed mb-5 text-lg">
            Sistema completo compuesto por aplicación móvil Android, API REST en PHP,
            base de datos MySQL y panel web con estadísticas, filtros avanzados y
            gestión de reportes ciudadanos.
          </p>

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-4 text-gray-300 text-sm mb-7">
            <p><span className="font-semibold text-teal-400">Rol:</span> Full Stack Dev</p>
            <p><span className="font-semibold text-teal-400">Año:</span> 2025</p>
            <p><span className="font-semibold text-teal-400">Cliente:</span> Municipalidad</p>
            <p><span className="font-semibold text-teal-400">Duración:</span> 2.5 meses</p>
          </div>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["Kotlin", "PHP", "MySQL", "JavaScript", "TypeScript"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-teal-400/10 text-teal-300 border border-teal-400/30 rounded-full backdrop-blur-sm shadow-[0_0_8px_rgba(20,200,180,0.15)]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Botón */}
          <motion.a
            href="/projects/alertaya"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-block mt-auto px-7 py-3 rounded-xl
              bg-teal-500 text-black font-semibold shadow-[0_0_20px_rgba(20,200,180,0.25)]
              hover:bg-teal-300 transition
            "
          >
            Ver detalles del proyecto
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
