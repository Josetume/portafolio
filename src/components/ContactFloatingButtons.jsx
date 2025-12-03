"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactFloatingButtons() {
  const [hover, setHover] = useState(null);

  const whatsappMessage = encodeURIComponent(
    "Hola Jose, vi tu portafolio y quiero más información sobre tus servicios."
  );

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[9999]">

      {/* WhatsApp Button */}
      <div className="relative flex items-center">
        {/* Tooltip */}
        <div
          className={`
            absolute right-16 top-1/2 -translate-y-1/2
            px-4 py-2 rounded-lg text-sm font-medium
            backdrop-blur-md border pointer-events-none
            transition-all duration-300
            ${hover === "wa" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
            bg-gray-900/80 border-gray-700 text-gray-200
            dark:bg-gray-100/90 dark:text-black dark:border-gray-300
          `}
        >
          WhatsApp
        </div>

        {/* Botón */}
        <a
          href={`https://wa.me/51979901839?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHover("wa")}
          onMouseLeave={() => setHover(null)}
          className="
            w-14 h-14 rounded-full flex items-center justify-center
            shadow-xl transition-all duration-300
            hover:scale-110 hover:shadow-2xl
            bg-green-500 text-white
            dark:bg-green-400 dark:text-black
          "
        >
          <FaWhatsapp className="text-3xl" />
        </a>
      </div>

      {/* Gmail Button */}
      <div className="relative flex items-center">
        {/* Tooltip */}
        <div
          className={`
            absolute right-16 top-1/2 -translate-y-1/2
            px-4 py-2 rounded-lg text-sm font-medium
            backdrop-blur-md border pointer-events-none
            transition-all duration-300
            ${hover === "mail" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
            bg-gray-900/80 border-gray-700 text-gray-200
            dark:bg-gray-100/90 dark:text-black dark:border-gray-300
          `}
        >
          Correo
        </div>

        {/* Botón */}
<button
  onClick={() => {
    window.location.href = "mailto:elenojose945@gmail.com";
  }}
  onMouseEnter={() => setHover("mail")}
  onMouseLeave={() => setHover(null)}
  className="
    w-14 h-14 rounded-full flex items-center justify-center
    shadow-xl transition-all duration-300
    hover:scale-110 hover:shadow-2xl
    bg-red-500 text-white
    dark:bg-red-400 dark:text-black
  "
>
  <FaEnvelope className="text-2xl" />
</button>

      </div>
    </div>
  );
}
