"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HackerText from "./HackerText";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
   <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pb-28 overflow-hidden">
  
  {/* ¡Quitamos fondos personalizados que tapaban el global! */}
  
  {/* Glow central sutil para reforzar el centro del contenido */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] 
      bg-[radial-gradient(circle,rgba(20,200,180,0.12),transparent_70%)]
      blur-3xl opacity-50 -z-10 pointer-events-none" />
  
  {/* Partículas con baja opacidad para complementar el fondo */}
  <div className="absolute inset-0 -z-10 opacity-[0.05] bg-[url('/particles.png')] bg-cover bg-center pointer-events-none" />

  {/* Contenido animado */}
  <motion.div
    variants={container}
    initial="hidden"
    animate="show"
    className="flex flex-col items-center gap-7 mt-28"
  >
    {/* ...todo tu contenido aquí igual... */}

        {/* Badge */}
        <motion.div
          variants={item}
          className="px-4 py-1 rounded-full border border-teal-400/50 text-teal-300 text-sm tracking-wide bg-teal-400/10 backdrop-blur-lg shadow-[0_0_18px_rgba(20,200,180,0.15)]"
        >
          Desarrollador de Software
        </motion.div>

        {/* Avatar con halo */}
        <motion.div variants={item} className="relative">
          <div className="absolute inset-0 blur-xl bg-teal-400/20 rounded-full" />
          <Image
            src="/fotojose.jpg"
            alt="Foto de Jose Tume"
            width={170}
            height={170}
            className="rounded-full border-4 border-teal-400/40 shadow-xl object-cover relative z-10"
          />
        </motion.div>

        {/* Nombre con animación hacker */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
        >
          ¡Hola! Soy{" "}
          <span className="text-teal-400 drop-shadow-[0_0_18px_rgba(20,200,180,0.45)]">
            <HackerText text="José Tume" />
          </span>
        </motion.h1>


        {/* Línea de separación */}
        <motion.div
          variants={item}
          className="w-28 h-1 bg-teal-400 rounded-full shadow-[0_0_12px_rgba(20,200,180,0.45)]"
        />

        {/* Subtítulo */}
        <motion.p
          variants={item}
          className="text-lg md:text-2xl text-gray-300 font-medium tracking-wide max-w-xl"
        >
          Desarrollo aplicaciones móviles, APIs REST y paneles web que conectan
          datos con personas.
        </motion.p>

        {/* Descripción */}
        <motion.p
          variants={item}
          className="max-w-xl text-gray-400 text-base md:text-lg leading-relaxed"
        >
          Creo soluciones que combinan claridad, rendimiento y experiencia
          fluida. Desde Android y APIs robustas hasta paneles administrativos
          modernos y automatizaciones con n8n e IA.
        </motion.p>

        {/* Botones premium */}
        <motion.div variants={item} className="mt-4 flex flex-wrap justify-center gap-4">
          {[
            { href: "#projects", label: "Ver proyectos", bg: "bg-teal-500", text: "text-black" },
            { href: "https://github.com/Josetume", label: "GitHub", border: "border-teal-400", bg: "bg-gray-900", text: "text-teal-300" },
            { href: "https://www.linkedin.com/in/jose-tume-tovar", label: "LinkedIn", border: "border-teal-400", bg: "bg-gray-900", text: "text-teal-300" },
            { href: "/TUME TOVAR JOSE-CV.pdf", label: "Descargar CV", border: "border-teal-400", bg: "bg-gray-900", text: "text-teal-300", download: true },
          ].map((btn, i) => (
            <motion.a
              key={i}
              href={btn.href}
              {...(btn.download ? { download: true } : {})}
              target={btn.href.startsWith("http") ? "_blank" : undefined}
              className={`px-7 py-3 rounded-xl font-semibold transition ${btn.bg} ${btn.text} ${btn.border ? btn.border : ""} hover:bg-teal-400 hover:text-black shadow-[0_0_18px_rgba(20,200,180,0.25)] backdrop-blur-md`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {btn.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Métricas premium */}
        <motion.div
          variants={item}
          className="mt-14 flex flex-wrap justify-center gap-10 text-gray-300 text-center"
        >
          {[
            { value: "6+", label: "Proyectos en producción" },
            { value: "12", label: "Tecnologías aplicadas" },
            { value: "1.5 años", label: "Experiencia práctica" },
          ].map((m, i) => (
            <div key={i}>
              <p className="text-3xl font-bold text-teal-400 drop-shadow-[0_0_10px_rgba(20,200,180,0.35)]">
                {m.value}
              </p>
              <p className="text-sm text-gray-400">{m.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Indicador scroll */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-teal-400 text-4xl"
      >
        <span className="animate-pulse tracking-wider">↓</span>
      </motion.div>
    </section>
  );
}
