"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiKotlin,
  SiPhp,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
} from "react-icons/si";

// -------------------------------------
// DATA
// -------------------------------------
const skills = [
  { name: "Python", level: 85, icon: SiPython },
  { name: "Kotlin", level: 80, icon: SiKotlin },
  { name: "PHP", level: 75, icon: SiPhp },
  { name: "JavaScript", level: 85, icon: SiJavascript },
  { name: "MySQL", level: 80, icon: SiMysql },
  { name: "Node.js", level: 70, icon: SiNodedotjs },
];

// Radar values
const radarValues = [85, 80, 75, 85, 80, 70];
const radarLabels = ["Python", "Kotlin", "PHP", "JS", "MySQL", "Node.js"];

// -------------------------------------
// Generate polygon points
// -------------------------------------
function getRadarPath() {
  const angleSlice = (Math.PI * 2) / radarValues.length;
  const radius = 84; // +5%
  const cx = 150;
  const cy = 150;

  return radarValues
    .map((v, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      const x = cx + Math.cos(angle) * (radius * (v / 100));
      const y = cy + Math.sin(angle) * (radius * (v / 100));
      return `${x},${y}`;
    })
    .join(" ");
}

export default function SkillsDashboard() {
  return (
    <section className="relative py-16 px-6 max-w-6xl mx-auto">

      {/* TITLE */}
      <motion.h2
        className="text-center text-[2.2rem] font-bold text-teal-300 mb-12"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Dashboard de Skills
      </motion.h2>

      {/* === LAYOUT === */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">

        {/* ==============================
            RADAR CHART (5% más grande)
        =============================== */}
        <motion.div
          className="relative bg-gray-900/40 border border-gray-800 rounded-3xl p-7 backdrop-blur-xl shadow-xl"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-center text-[1.2rem] font-semibold text-teal-300 mb-5">
            Dominio Técnico General
          </h3>

          <div className="relative w-[315px] h-[315px] mx-auto">

            <svg width="400" height="400">
              {[32, 58, 84].map((r, idx) => (
                <circle
                  key={idx}
                  cx="150"
                  cy="150"
                  r={r}
                  stroke="#334155"
                  strokeWidth="1"
                  fill="none"
                  className="opacity-40"
                />
              ))}

              {radarValues.map((_, i) => {
                const angle =
                  (Math.PI * 2 * i) / radarValues.length - Math.PI / 2;

                return (
                  <line
                    key={i}
                    x1="150"
                    y1="150"
                    x2={150 + Math.cos(angle) * 100}
                    y2={150 + Math.sin(angle) * 100}
                    stroke="#475569"
                    strokeWidth="1"
                    className="opacity-40"
                  />
                );
              })}

              <motion.polygon
                points={getRadarPath()}
                fill="#2dd4bf20"
                stroke="#2dd4bf"
                strokeWidth="2"
                className="drop-shadow-[0_0_8px_rgba(45,212,191,0.4)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              />
            </svg>

            {/* Labels 5% bigger */}
            {radarLabels.map((label, i) => {
              const angle =
                (Math.PI * 2 * i) / radarLabels.length - Math.PI / 2;

              const x = 150 + Math.cos(angle) * 121;
              const y = 150 + Math.sin(angle) * 121;

              return (
                <span
                  key={i}
                  className="absolute text-teal-300 text-[0.8rem] font-semibold opacity-90"
                  style={{
                    left: x,
                    top: y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {label}
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* ==============================
            TARJETAS 5% MÁS GRANDES
        =============================== */}
        <div className="grid grid-cols-3 gap-5">
          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={i}
                className="
                  bg-gray-900/40 border border-gray-800
                  rounded-2xl p-5 text-center backdrop-blur-xl
                  shadow-xl hover:shadow-teal-500/20 transition
                "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {/* Donut +5% */}
                <div className="relative w-[84px] h-[84px] mx-auto mb-3">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="42"
                      cy="42"
                      r="31.5"
                      stroke="#1e293b"
                      strokeWidth="8.4"
                      fill="none"
                    />
                    <motion.circle
                      cx="42"
                      cy="42"
                      r="31.5"
                      stroke="#2dd4bf"
                      strokeWidth="8.4"
                      strokeLinecap="round"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 31.5}
                      strokeDashoffset={
                        (2 * Math.PI * 31.5 * (100 - skill.level)) / 100
                      }
                      initial={{ strokeDashoffset: 2 * Math.PI * 31.5 }}
                      whileInView={{
                        strokeDashoffset:
                          (2 * Math.PI * 31.5 * (100 - skill.level)) / 100,
                      }}
                      transition={{ duration: 1.1 }}
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="text-[1.35rem] text-teal-300" />
                  </div>
                </div>

                <h4 className="text-white text-[0.9rem] font-semibold leading-tight">
                  {skill.name}
                </h4>
                <p className="text-teal-400 text-[0.75rem] mb-1">{skill.level}%</p>

                <div className="w-full bg-gray-800 rounded-full h-[5px] overflow-hidden">
                  <motion.div
                    className="h-full bg-teal-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
