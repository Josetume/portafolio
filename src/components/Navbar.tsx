"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Tipo para cada item de navegación
type NavItem = {
  label: string;
  href: string;
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / total) * 100;
      setScrollWidth(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: "Inicio", href: "/" },
    { label: "Proyectos", href: "/projects" },
    { label: "Servicios", href: "/#services" },
    { label: "Certificaciones", href: "/#certifications" },
    { label: "Tech Stack", href: "/#techstack" },
    { label: "Conectemos", href: "/#contact" },
  ];

  const handleScrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-gray-900/40 border-b border-gray-800/50 shadow-[0_0_25px_-4px_rgba(0,255,180,0.25)]">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* LOGO */}
        <motion.h1
          className="text-lg font-bold tracking-wide text-teal-300 select-none cursor-pointer hover-glow"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.06, textShadow: "0px 0px 8px rgba(0,255,200,0.6)" }}
          onClick={() => handleScrollTo("#top")}
        >
          J. TUME
        </motion.h1>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <li key={i} className="relative group">
                <button
                  onClick={() => handleScrollTo(item.href)}
                  className={`transition hover-glow ${
                    isActive ? "text-teal-400" : "text-gray-300 hover:text-teal-400"
                  }`}
                >
                  {item.label}
                </button>

                <motion.span
                  layoutId="navbar-underline"
                  className="absolute left-0 -bottom-1 h-[2px] bg-teal-400 rounded-full"
                  style={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.28 }}
                />
              </li>
            );
          })}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-teal-300 hover:text-teal-200 transition hover-glow"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-gray-900/30 backdrop-blur-xl border-t border-gray-700/40 py-5 shadow-lg rounded-b-xl"
          >
            <ul className="flex flex-col items-center gap-5 text-sm font-medium">
              {navItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleScrollTo(item.href)}
                    className={`transition hover-glow ${
                      pathname === item.href
                        ? "text-teal-400"
                        : "text-gray-300 hover:text-teal-400"
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SCROLL PROGRESS BAR */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-teal-400 to-teal-500 shadow-[0_0_6px_1px_rgba(0,255,180,0.6)]"
        animate={{ width: `${scrollWidth}%` }}
        transition={{ ease: "linear" }}
      />
    </nav>
  );
}
