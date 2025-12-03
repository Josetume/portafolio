"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  codeUrl?: string;
  tech: string[];
  href?: string; // ⭐ ruta interna
}

export default function ProjectCard({
  title,
  description,
  image,
  demoUrl,
  codeUrl,
  tech,
  href
}: ProjectProps) {
  const cardContent = (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="
        bg-gray-900/50 backdrop-blur-xl border border-gray-800 
        hover:border-teal-400/40 hover:shadow-teal-400/20
        rounded-2xl overflow-hidden shadow-lg transition cursor-pointer
      "
    >
      {/* Imagen */}
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-teal-400">{title}</h3>

        <p className="text-gray-300 text-sm mt-2 leading-relaxed">
          {description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="
                text-xs px-3 py-1 rounded-full bg-teal-400/10 
                border border-teal-400/30 text-teal-300
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="flex flex-wrap gap-4 mt-6">

          {/* Ver Demo */}
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              className="
                px-4 py-2 text-xs font-semibold rounded-lg 
                bg-teal-500 text-black hover:bg-teal-300 transition
              "
              onClick={(e) => e.stopPropagation()}
            >
              Ver Demo
            </Link>
          )}

          {/* Ver Código */}
          {codeUrl && (
            <Link
              href={codeUrl}
              target="_blank"
              className="
                px-4 py-2 text-xs font-semibold rounded-lg 
                bg-gray-800 border border-gray-700 text-gray-300 
                hover:bg-gray-700 hover:text-white transition
              "
              onClick={(e) => e.stopPropagation()}
            >
              Ver Código
            </Link>
          )}

          {/* ⭐ NUEVO → Ver Detalle */}
          {href && (
            <Link
              href={href}
              className="
                px-4 py-2 text-xs font-semibold rounded-lg 
                bg-teal-600 text-black hover:bg-teal-400 transition
              "
              onClick={(e) => e.stopPropagation()}
            >
              Ver Detalle
            </Link>
          )}

        </div>
      </div>
    </motion.div>
  );

  // Si hay href, la card completa es clickeable
  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
