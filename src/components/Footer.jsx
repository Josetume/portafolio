"use client";

export default function Footer() {
  return (
    <footer className="mt-32 py-14 px-6 border-t border-gray-800/60 bg-gray-900/30 backdrop-blur-xl relative">
      <div className="absolute inset-0 max-w-xl mx-auto blur-[140px] opacity-10 bg-teal-400/30 -z-10"></div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-teal-400 mb-3">Jose Tume</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Desarrollador de software especializado en apps Android,
            APIs, paneles administrativos, paginas web y automatización.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contacto</h4>
          <p className="text-gray-400 text-sm">📞 +51 979 901 839</p>
          <p className="text-gray-400 text-sm">✉️ elenojose945@gmail.com</p>
          <p className="text-gray-400 text-sm">📍  Ventanilla, Callao – Perú</p>
          <p className="text-gray-400 text-sm">⚡ Disponibilidad inmediata</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Enlaces</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><a href="/projects" className="hover:text-teal-400 transition">Proyectos</a></li>
            <li><a href="#services" className="hover:text-teal-400 transition">Servicios</a></li>
            <li><a href="#certifications" className="hover:text-teal-400 transition">Certificaciones</a></li>
            <li><a href="#techstack" className="hover:text-teal-400 transition">Tech Stack</a></li>

            <li>
              <a href="https://www.linkedin.com/in/jose-tume-tovar"
                target="_blank"
                className="hover:text-teal-400 transition">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com"
                target="_blank"
                className="hover:text-teal-400 transition">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12 text-gray-600 text-xs tracking-wide">
        © {new Date().getFullYear()} Jose Tume — Todos los derechos reservados.
      </div>
    </footer>
  );
}
