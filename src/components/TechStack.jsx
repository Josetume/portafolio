"use client";
import { motion } from "framer-motion";
import { SiTailwindcss } from "react-icons/si";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPhp,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiKotlin,
  SiFirebase,
  SiAndroidstudio,
  SiPython,
  SiN8N,
  SiGit,
  SiPostman,
  SiWordpress,
  SiFigma,
  SiGoogleanalytics,
} from "react-icons/si";

const categories = [
  {
  title: "Frontend",
  items: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Tailwind", icon: SiTailwindcss }, // ← añadido
  ],
},

  {
    title: "Backend",
    items: [
      { name: "PHP", icon: SiPhp },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Kotlin", icon: SiKotlin },
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Postman", icon: SiPostman },
      { name: "WordPress", icon: SiWordpress },
      { name: "Power BI", icon: SiGoogleanalytics },
      { name: "Figma", icon: SiFigma },
    ],
  },
  {
    title: "Automatización & IA",
    items: [
      { name: "Python", icon: SiPython },
      { name: "n8n", icon: SiN8N },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-teal-400 text-center mb-12"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            className="bg-gray-900/40 border border-gray-800 backdrop-blur-xl p-7 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-teal-300 mb-5">
              {cat.title}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {cat.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-teal-400/50 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-teal-300 text-2xl">{item.icon()}</div>
                  <p className="text-gray-300 text-sm">{item.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
