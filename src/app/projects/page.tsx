  "use client";

  import Navbar from "../../components/Navbar";
  import ProjectCard from "../../components/ProjectCard";
  import { motion } from "framer-motion";

  export default function Projects() {
    return (
      <>
        <Navbar />

        <section className="pt-28 px-6 max-w-6xl mx-auto">
          {/* Título */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-teal-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mis Proyectos
          </motion.h2>

          {/* Descripción corta */}
          <motion.p
            className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Proyectos que combinan desarrollo móvil, APIs REST, paneles web,
            automatización e inteligencia artificial. Cada uno reflejando mis
            capacidades como desarrollador Full Stack & Mobile.
          </motion.p>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            <ProjectCard
              title="AlertaYa – App de reportes ciudadanos"
              description="App Android con API REST y panel web para gestionar reportes con foto, GPS y estados de incidente."
              image="/PanelAdminAlertaya.jpg"
              tech={["Kotlin", "PHP", "MySQL", "JavaScript", "TypeScript", "HTML", "CSS"]}
              demoUrl="https://www.inkadroid.com/alertaya/admin-panel/index.html"
              codeUrl="https://github.com/Josetume/alertaya/blob/main/appAlertaYa.zip"
              href="/projects/alertaya"
            />

            <ProjectCard
              title="EducApp – Juegos educativos para primaria"
              description="App móvil conectada a panel docente que registra puntajes y niveles de desempeño en juegos educativos."
              image="/PanelAdminEducapp.jpg"
              tech={["Kotlin", "PHP", "MySQL", "JavaScript", "TypeScript", "HTML", "CSS"]}
              demoUrl="https://www.inproyi.com/proydsi/frontend/vista/Home.php"
              codeUrl="https://github.com/tuusuario/educapp"
            />

            <ProjectCard
              title="E-Commerce – Componentes de Computadoras"
              description="Tienda online con catálogo, login y carrito conectada a Firebase para gestión de usuarios y productos."
              image="/techstore.jpg"
              tech={["HTML", "CSS", "JavaScript", "React", "Firebase"]}
              demoUrl="https://pronto.com"
              codeUrl="https://github.com/tuusuario/ecommerce"
            />

            <ProjectCard
              title="Automatización con IA – Clasificación de imágenes"
              description="Clasificador de imágenes de piel con IA en Python integrado a un flujo automatizado en n8n para envío del diagnóstico."
              image="/automatizacion.jpg"
              tech={["Python", "n8n", "Google Colab"]}
              demoUrl="https://pronto.com"
              codeUrl="https://github.com/tuusuario/automation-ai"
            />
          </div>
        </section>
      </>
    );
  }
