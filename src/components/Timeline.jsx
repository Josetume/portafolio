"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// ICONOS
import { Code2, Smartphone, Bot, ShoppingCart, Boxes, Headphones, GraduationCap } from "lucide-react";

// TIMELINE DATA
const timeline = [
  {
    category: "proyectos",
    icon: Smartphone,
    title: "Aplicación móvil AlertaYa",
    date: "01/09/2025 – 20/11/2025",
    tech: "Kotlin • PHP • MySQL • JavaScript • TypeScript • HTML • CSS",
    description: [
      "App Android conectada a API REST con MySQL.",
      "Envío de reportes con foto, GPS y descripción.",
      "Panel web con dashboard, filtros y estados.",
      "Desarrollo completo de la app, API, BD y panel admin."
    ]
  },
  {
    category: "proyectos",
    icon: Smartphone,
    title: "Aplicación móvil Educapp",
    date: "15/07/2025 – 21/08/2025",
    tech: "Kotlin • PHP • MySQL • JavaScript • TypeScript",
    description: [
      "App educativa con 4 juegos didácticos.",
      "Envío automático de puntajes y tiempos.",
      "Panel docente con resultados y filtros.",
      "Desarrollo completo de app, API y BD."
    ]
  },
  {
    category: "proyectos",
    icon: Bot,
    title: "Automatización con IA — Clasificación de imágenes",
    date: "02/07/2025 – 10/07/2025",
    tech: "Python • n8n • Google Colab",
    description: [
      "Modelo básico de clasificación en Python.",
      "Flujo automatizado en n8n.",
      "Envío del diagnóstico por correo y WhatsApp."
    ]
  },
  {
    category: "proyectos",
    icon: ShoppingCart,
    title: "Sitio Web E-commerce — Componentes de Computadoras",
    date: "05/06/2025 – 30/07/2025",
    tech: "HTML • CSS • JavaScript • React • Firebase",
    description: [
      "Catálogo, login y carrito.",
      "Conexión a Firebase para productos y usuarios."
    ]
  },
  {
    category: "proyectos",
    icon: Boxes,
    title: "Sistema de Inventario para Gimnasio",
    date: "10/07/2023 – 15/08/2025",
    tech: "Java • MySQL",
    description: [
      "CRUD completo, reportes y búsquedas.",
      "Conexión con MySQL."
    ]
  },
  {
    category: "experiencia",
    icon: Headphones,
    title: "Teleoperador / Soporte Técnico — Covisian",
    date: "15/06/2024 – 01/10/2024",
    tech: "Experiencia laboral",
    description: [
      "Resolución de incidencias (+85%).",
      "Gestión de casos en CRM.",
      "Optimización de servicios y asistencia técnica."
    ]
  },
  {
    category: "educacion",
    icon: GraduationCap,
    title: "Instituto Simón Bolívar — Desarrollo de Sistemas de Información",
    date: "2023 – 2025",
    tech: "Formación profesional",
    description: [
      "Power BI y Excel (50h).",
      "SQL para análisis de datos (70h).",
      "Scrum Fundamentals Certified.",
      "Programación con Python — Udemy."
    ]
  }
];

export default function Timeline() {
  const [filter, setFilter] = useState("todo");

  const filteredTimeline =
    filter === "todo"
      ? timeline
      : timeline.filter((item) => item.category === filter);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-teal-400 text-center mb-12">
        Mi Trayectoria Profesional
      </h2>

      {/* TABS */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {[
          { id: "todo", label: "Todo" },
          { id: "proyectos", label: "Proyectos" },
          { id: "educacion", label: "Educación" },
          { id: "experiencia", label: "Experiencia" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`
              px-5 py-2 rounded-full text-sm font-semibold border
              transition-all duration-300
              ${filter === tab.id
                ? "bg-teal-500 text-black border-teal-500"
                : "text-teal-300 border-teal-300/40 hover:bg-teal-400/10"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* LÍNEA CENTRAL GLOW */}
      <div className="relative border-l-2 border-teal-400/20 ml-6 md:ml-0">
        <div className="absolute top-0 left-[1px] w-[2px] h-full bg-teal-400/30 blur-sm"></div>

        {/* ITEMS */}
        {filteredTimeline.map((item, index) => {
          const isRight = index % 2 === 0;
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isRight ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`
                mb-16 flex flex-col md:flex-row items-center relative
                ${isRight ? "md:justify-start" : "md:justify-end"}
              `}
            >
              {/* PUNTO CENTRAL */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-teal-400 rounded-full border-4 border-gray-900 shadow-xl"></div>

              {/* CARD */}
              <div
                className={`
                  md:w-1/2 p-6 rounded-xl
                  bg-gray-800/30 border border-teal-400/20
                  shadow-[0_0_20px_rgba(20,200,180,0.2)]
                  backdrop-blur-md
                  ${isRight ? "md:mr-8" : "md:ml-8"}
                  hover:shadow-[0_0_25px_rgba(20,200,180,0.35)]
                  transition-all duration-300
                `}
              >
                <div className="flex items-center gap-3 mb-1">
                  <Icon className="w-5 h-5 text-teal-400" />
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>

                <p className="text-sm text-teal-300 mt-1">{item.date}</p>
                <p className="text-sm text-gray-400 mt-1">{item.tech}</p>

                <ul className="mt-3 text-gray-300 space-y-1">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-sm leading-relaxed">• {desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
