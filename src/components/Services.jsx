"use client";

import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaBrain,
  FaServer,
  FaChartLine,
  FaCogs,
  FaGlobe
} from "react-icons/fa";

const services = [
  {
    title: "Aplicaciones móviles",
    icon: <FaMobileAlt className="text-4xl text-teal-400" />,
    desc: "Desarrollo apps Android en Kotlin conectadas a APIs y paneles web.",
  },
  {
    title: "Páginas web a medida",
    icon: <FaGlobe className="text-4xl text-teal-400" />,
    desc: "Sitios web modernos, optimizados y construidos según tus requerimientos reales.",
  },
  {
    title: "APIs REST & Backend",
    icon: <FaServer className="text-4xl text-teal-400" />,
    desc: "Diseño e implementación de APIs escalables en PHP/Node.js con bases de datos SQL.",
  },
  {
    title: "Paneles web administrativos",
    icon: <FaChartLine className="text-4xl text-teal-400" />,
    desc: "Dashboards con estadísticas, filtros avanzados, gestión y experiencia fluida.",
  },
  {
    title: "Automatización con n8n",
    icon: <FaCogs className="text-4xl text-teal-400" />,
    desc: "Conexión entre aplicaciones, envío automático de datos y flujos inteligentes.",
  },
  {
    title: "IA aplicada",
    icon: <FaBrain className="text-4xl text-teal-400" />,
    desc: "Modelos simples para clasificación y análisis integrados a flujos reales.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 px-6 max-w-6xl mx-auto text-center"
    >
      <div className="absolute inset-0 max-w-lg mx-auto blur-[120px] opacity-20 bg-teal-400/20 -z-10" />

      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-teal-400 mb-14"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Servicios
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.04 }}
            className="
              p-8 rounded-2xl border border-gray-800 
              bg-gray-900/40 backdrop-blur-xl 
              shadow-[0_0_25px_rgba(0,0,0,0.35)]
              hover:shadow-[0_0_30px_rgba(20,200,180,0.25)]
              transition-all
            "
          >
            <div className="mb-4 flex justify-center">{s.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
