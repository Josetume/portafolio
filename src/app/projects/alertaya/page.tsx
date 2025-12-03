"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Lightbox from "../../../components/Lightbox";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AlertayaProject() {
  const mobileImages = [
    "/alertaya/mobile/iniciosesion.jpg",
    "/alertaya/mobile/registro.jpg",
    "/alertaya/mobile/menu.jpg",
    "/alertaya/mobile/misreportes.jpg",
    "/alertaya/mobile/formularioreporte.jpg",
    "/alertaya/mobile/detallereporte.jpg",
  ];

  const adminImages = [
    "/alertaya/admin/Paneldashboard.jpg",
    "/alertaya/admin/Panelreportes.jpg",
    "/alertaya/admin/Panelusuarios.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0); // 👈 Añadido
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const autoAdvanceMs = 3000;
  const total = mobileImages.length;

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((i) => {
        const newIndex = (i + 1) % total;
        setCurrentImage(newIndex);
        return newIndex;
      });
    }, autoAdvanceMs);
    return () => clearInterval(id);
  }, [isPaused, total]);

  const dragStartX = useRef<number | null>(null);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsPaused(true);
    dragStartX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current == null) {
      setIsPaused(false);
      return;
    }
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 30) {
      setIndex((i) => {
        const newIndex = diff < 0 ? (i + 1) % total : (i - 1 + total) % total;
        setCurrentImage(newIndex);
        return newIndex;
      });
    }

    dragStartX.current = null;
    setTimeout(() => setIsPaused(false), 300);
  };

  const getTransform = (i: number) => {
    const offset = i - index;
    let normalized = offset;
    if (offset > total / 2) normalized = offset - total;
    if (offset < -total / 2) normalized = offset + total;
    const abs = Math.abs(normalized);

    return {
      rotateY: normalized * -22,
      translateX: normalized * 110,
      translateZ: -abs * 80,
      scale: 1 - abs * 0.12,
      zIndex: 20 - abs,
      opacity: abs > 2 ? 0 : 1,
    };
  };

  return (
    <section className="pt-0 px-1 max-w-6xl mx-auto">
      {/* Flecha de regreso */}
<div className="mb-8 mt-4 sticky top-0 bg-[#0d0d0d]/60 backdrop-blur-xl py-3 z-50">
  <Link
    href="/projects"
    className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-200 transition"
  >
    <ArrowLeft size={22} />
    Volver a mis proyectos
  </Link>
</div>


      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-4">
          AlertaYa — Sistema de Reportes Ciudadanos
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Aplicación móvil Android conectada a un panel web para gestionar incidencias
          con fotos, GPS y estados actualizados en tiempo real.
        </p>
      </motion.div>
      

      {/* CARRUSEL 3D */}
      <h2 className="text-2xl font-bold text-teal-400 mb-6">
        Aplicativo móvil (vista teléfono)
      </h2>

      <div
        className="relative mb-16 select-none perspective-1000"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Contador 🆕 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm z-[60]">
          {currentImage + 1} / {total}
        </div>

        {/* Flechas laterales */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 backdrop-blur border border-gray-700 hover:bg-black/70 transition z-50"
          onClick={() =>
            setIndex((i) => {
              const newIndex = (i - 1 + total) % total;
              setCurrentImage(newIndex);
              return newIndex;
            })
          }
        >
          <ChevronLeft size={26} />
        </button>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 backdrop-blur border border-gray-700 hover:bg-black/70 transition z-50"
          onClick={() =>
            setIndex((i) => {
              const newIndex = (i + 1) % total;
              setCurrentImage(newIndex);
              return newIndex;
            })
          }
        >
          <ChevronRight size={26} />
        </button>

        <div className="relative h-[380px] md:h-[430px] flex items-center justify-center">
          {mobileImages.map((src, i) => {
            const t = getTransform(i);

            return (
              <motion.div
                key={i}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  translate: "-50% -50%",
                  transformStyle: "preserve-3d",
                  transform: `
                    translateX(${t.translateX}px)
                    translateZ(${t.translateZ}px)
                    rotateY(${t.rotateY}deg)
                    scale(${t.scale})
                  `,
                  zIndex: t.zIndex,
                  opacity: t.opacity,
                  transition: "transform 0.6s ease, opacity 0.4s ease",
                  width: "240px",
                }}
                className="rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-xl shadow-black/40 cursor-pointer"
                onClick={() => setLightboxSrc(src)}
              >
                <div className="relative w-full h-[380px]">
                  <Image src={src} alt={`mobile-${i}`} fill className="object-cover" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center gap-3">
          {mobileImages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                setCurrentImage(i);
              }}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-teal-400" : "bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>

      {/* PANEL ADMIN */}
      <h2 className="text-2xl font-bold text-teal-400 mb-4">
        Panel Administrativo (vista computadora)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {adminImages.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900/40 border border-gray-800 p-3 rounded-xl cursor-pointer"
            onClick={() => setLightboxSrc(src)}
          >
            <div className="relative w-full h-52">
              <Image src={src} fill alt={`Admin screen ${index + 1}`} className="rounded-lg object-cover" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* DESCRIPCIÓN */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-teal-400 mb-4">Descripción general</h2>

        <p className="text-gray-300 leading-relaxed mb-4">
          AlertaYa es un aplicativo móvil diseñado para que los ciudadanos puedan reportar
          incidencias urbanas como basura acumulada, postes caídos, robos, fallas de alumbrado
          y otros problemas comunes del distrito.
        </p>

        <p className="text-gray-300 leading-relaxed mb-4">
          La municipalidad recibe los reportes en un panel administrativo donde puede
          registrar, gestionar, filtrar y resolver cada caso con fotos, GPS y estados.
        </p>
      </section>

      {/* FLUJOS */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-bold text-teal-400 mb-3">Flujo del Ciudadano</h3>
          <ul className="text-gray-300 space-y-2">
            <li>📱 Abre la app AlertaYa</li>
            <li>🏷️ Selecciona categoría de incidencia</li>
            <li>📸 Adjunta foto</li>
            <li>📍 GPS automático</li>
            <li>📤 Envía reporte</li>
            <li>📊 Revisa estado</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-teal-400 mb-3">Flujo del Administrador</h3>
          <ul className="text-gray-300 space-y-2">
            <li>🔐 Inicia sesión</li>
            <li>📋 Ve reportes</li>
            <li>🔎 Filtra incidencias</li>
            <li>⚙️ Cambia estado</li>
            <li>📨 Estado actualizado al ciudadano</li>
          </ul>
        </div>
      </section>
      {/* RETOS Y SOLUCIONES */}
<section className="mb-28">
  <h2 className="text-2xl md:text-3xl font-extrabold text-center text-teal-400 mb-12">
    🧠 Retos & Soluciones
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        challenge: "Consumo de API lento y errores de red",
        solution:
          "Optimicé Retrofit agregando manejo de errores, timeouts y reintentos automáticos para garantizar el envío del reporte.",
      },
      {
        challenge: "Ubicación imprecisa del usuario",
        solution:
          "Implementé FusedLocationProvider priorizando alta precisión para capturar la ubicación rápidamente.",
      },
      {
        challenge: "Datos incompletos al registrar incidencias",
        solution:
          "Añadí validaciones tanto en la app como en PHP/MySQL asegurando integridad en la base de datos.",
      },
      {
        challenge: "Interfaz poco intuitiva para algunos usuarios",
        solution:
          "Rediseñé la UI con botones más visibles, feedback visual y guía para cada acción importante.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
        className="p-6 bg-gray-900/60 rounded-2xl shadow-lg border border-gray-700
          hover:border-teal-400 hover:shadow-teal-500/30 transition"
      >
        <p className="font-bold text-teal-300 mb-2">🚧 Reto</p>
        <p className="text-gray-300 text-sm mb-4">{item.challenge}</p>

        <p className="font-bold text-green-400 mb-2">🔑 Solución</p>
        <p className="text-gray-200 text-sm">{item.solution}</p>
      </motion.div>
    ))}
  </div>
</section>


      {/* 🧩 DIAGRAMA DE ARQUITECTURA */}
<section className="mb-24 max-w-5xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-extrabold text-teal-400 text-center mb-8">
    Diagrama de Arquitectura del Sistema
  </h2>

  <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 shadow-lg">
    <div className="grid grid-cols-3 gap-4 text-center">

      {/* Usuario */}
      <div className="flex flex-col items-center">
        <span className="text-4xl mb-2">📱</span>
        <p className="text-teal-300 font-semibold">Aplicación Móvil</p>
        <p className="text-xs text-gray-400">Kotlin + Retrofit</p>
      </div>

      {/* Flecha */}
      <div className="flex items-center justify-center">
        <span className="text-teal-400 text-2xl">➡️</span>
      </div>

      {/* API */}
      <div className="flex flex-col items-center">
        <span className="text-4xl mb-2">🌐</span>
        <p className="text-teal-300 font-semibold">API REST</p>
        <p className="text-xs text-gray-400">PHP + JSON</p>
      </div>

      {/* Línea */}
      <div className="col-span-3 flex justify-center my-3">
        <span className="text-teal-400 text-xl">⬇️</span>
      </div>

      {/* Base de Datos */}
      <div className="col-span-3 flex flex-col items-center">
        <span className="text-4xl mb-2">🗄️</span>
        <p className="text-teal-300 font-semibold">Base de Datos</p>
        <p className="text-xs text-gray-400">MySQL</p>
      </div>

      {/* Línea */}
      <div className="col-span-3 flex justify-center my-3">
        <span className="text-teal-400 text-xl">⬆️</span>
      </div>

      {/* Panel Admin */}
      <div className="col-span-3 flex flex-col items-center">
        <span className="text-4xl mb-2">💻</span>
        <p className="text-teal-300 font-semibold">Panel Administrativo</p>
        <p className="text-xs text-gray-400">HTML + CSS + JS</p>
        <p className="text-xs text-gray-400">Dashboard de gestión</p>
      </div>
    </div>
  </div>

  <p className="text-gray-400 text-sm text-center mt-3">
    Comunicación bidireccional entre App — API — BD — Panel para gestionar incidencias en tiempo real.
  </p>
</section>

      {/* ⚙️ TECNOLOGÍAS */}
      <section className="mb-24 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-teal-400">
            Tecnologías Utilizadas
          </h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Stack elegido para garantizar rendimiento, escalabilidad e integración con
            servicios externos.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 place-items-center">
          {[
            { name: "Kotlin", icon: "📱" },
            { name: "Retrofit", icon: "🔗" },
            { name: "Google Maps API", icon: "🗺️" },
            { name: "PHP", icon: "🐘" },
            { name: "MySQL", icon: "🗄️" },
            { name: "HTML/CSS/JS", icon: "💻" },
            { name: "Next.js", icon: "⚡" },
          ].map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.08,
                backgroundColor: "rgba(20,255,200,0.08)",
              }}
              className="w-full py-4 px-2 rounded-xl border border-gray-700 bg-gray-800/40 
        shadow-md text-center font-semibold text-gray-200 tracking-wide
        hover:text-teal-300 hover:border-teal-400 backdrop-blur-sm cursor-default"
            >
              <span className="text-xl mr-1">{tech.icon}</span>
              {tech.name}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📊 MÉTRICAS */}
      <section className="mb-28 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-teal-400 mb-10">
          Resultados del Proyecto
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Usuarios beta", value: "35 vecinos", icon: "👥" },
            { label: "Reportes gestionados", value: "+120 incidencias", icon: "📍" },
            { label: "Reducción en atención", value: "-30% tiempo", icon: "⏱️" },
            { label: "Satisfacción", value: "4.7 / 5 ⭐", icon: "⭐" },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07 }}
              className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 
        hover:border-teal-400 shadow-lg hover:shadow-teal-500/30 
        transition duration-300 backdrop-blur text-center"
            >
              <p className="text-3xl mb-2">{metric.icon}</p>
              <p className="text-teal-300 font-bold text-xl">{metric.value}</p>
              <p className="text-gray-400 text-sm mt-1">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

{/* DESCARGA DEL APK */}
<section className="mb-32 flex flex-col items-center">
  <h2 className="text-2xl md:text-3xl font-extrabold text-center text-teal-400 mb-10">
    📥 Descarga el APK
  </h2>

  <div className="bg-gray-900/60 border border-gray-700 p-10 rounded-3xl shadow-xl 
  w-full max-w-lg text-center backdrop-blur-lg flex flex-col items-center gap-6">
    
    {/* INFORMACIÓN DE VERSIÓN */}
    <div>
      <p className="text-teal-300 font-bold text-lg flex items-center justify-center gap-2">
        🔄 Versión Beta 1.0.3
      </p>
      <p className="text-gray-400 text-xs mt-1">Última actualización: 20 Nov 2025</p>
    </div>

    {/* QR + BOTÓN JUNTOS */}
    <div className="flex flex-col items-center gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="relative inline-block group"
      >
        <Image
          src="/alertaya/apk-qr.png"
          alt="QR APK AlertaYa"
          width={220}
          height={220}
          className="rounded-xl cursor-pointer border border-gray-700 shadow-lg"
        />

        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
          transition bg-black/80 text-gray-200 text-xs px-3 py-1 rounded-lg shadow-md pointer-events-none"
        >
          📱 Escanéame con tu teléfono
        </div>
      </motion.div>

      {/* BOTÓN DE DESCARGA */}
      <a
        href="https://drive.google.com/file/d/1EjQfVve2HWZqS7llhPPpxbxANWkjw5K7/view?pli=1"
        target="_blank"
        className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-400 text-black font-bold 
        rounded-xl transition shadow-lg"
      >
        Descargar APK
      </a>
    </div>

    {/* PERMISOS */}
    <div className="text-left w-full bg-black/40 border border-gray-700 rounded-xl p-5 shadow-inner">
      <p className="text-teal-300 font-semibold mb-3 flex items-center gap-2 text-sm">
        🔒 Permisos requeridos
      </p>

      <ul className="text-gray-300 text-sm space-y-2">
        <li className="flex items-center gap-2"><span>📍</span>Ubicación en tiempo real (GPS)</li>
        <li className="flex items-center gap-2"><span>🌐</span>Acceso a Internet</li>
        <li className="flex items-center gap-2"><span>🔔</span>Notificaciones push</li>
        <li className="flex items-center gap-2"><span>📸</span>Cámara para evidencias</li>
      </ul>
    </div>
  </div>
</section>

  
      {/* BOTONES */}
      <div className="flex gap-4 mt-10 justify-center">
        <Link
          href="https://www.inkadroid.com/alertaya/admin-panel/dashboard.html"
          target="_blank"
          className="px-7 py-3 rounded-xl bg-teal-500 text-black hover:bg-teal-300 transition font-semibold"
        >
          Ver Demo
        </Link>

        <Link
          href="https://github.com/Josetume/alertaya/blob/main/appAlertaYa.zip"
          target="_blank"
          className="px-7 py-3 rounded-xl bg-gray-900 border border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-black transition font-semibold"
        >
          Ver Código
        </Link>
      </div>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </section>
  );
}
