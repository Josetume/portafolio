"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import AboutMe from "../components/AboutMe";
import FeaturedProject from "../components/FeaturedProject";
import Services from "../components/Services";
import Certifications from "../components/Certifications";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";
import ContactFloatingButtons from "../components/ContactFloatingButtons";
import ContactSection from "../components/ContactSection";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Contenido principal con animación global */}
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="app-content"
      >
        <Hero />
        <AboutMe />
        <Timeline />
        <FeaturedProject />
        <Skills />
        <Services />
        <Certifications />
        <TechStack />
        <ContactSection />
      </motion.main>

      <Footer />

      {/* Widget flotante global */}
      <ContactFloatingButtons />
    </>
  );
}
