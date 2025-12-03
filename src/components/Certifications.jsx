"use client";

import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Scrum Fundamentals Certified",
    place: "ScrumStudy",
    year: "2025",
    image: "/certificados/certificadoscrum.jpg",
  },
  {
    title: "Power BI & SQL (120h)",
    place: "Instituto Simón Bolívar",
    year: "2025",
    image: "/certificados/certificadosql2.jpg",
    
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-28 px-6 max-w-5xl mx-auto text-center"
    >
      {/* Glow decorativo */}
      <div className="absolute inset-0 max-w-lg mx-auto blur-[120px] opacity-20 bg-teal-400/20 -z-10" />

      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-teal-400 mb-14"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Certificaciones
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-10">
        {certifications.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="
              p-7 rounded-2xl 
              bg-gray-900/40 
              border border-gray-800 
              backdrop-blur-xl 
              shadow-[0_0_20px_rgba(0,0,0,0.35)]
              hover:shadow-[0_0_28px_rgba(20,200,180,0.25)]
              transition-all
            "
          >
            {/* Imagen del certificado */}
            {c.image ? (
              <img
                src={c.image}
                alt={c.title}
                className="rounded-lg mb-4 w-full object-cover border border-gray-700"
              />
            ) : (
              <div className="text-teal-400 text-4xl mb-4 flex justify-center opacity-90">
                <FaCertificate />
              </div>
            )}

            <h3 className="text-lg font-semibold text-white leading-snug">
              {c.title}
            </h3>

            <p className="text-gray-400 mt-1">{c.place}</p>

            <p className="text-sm text-gray-500 mt-2">{c.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
