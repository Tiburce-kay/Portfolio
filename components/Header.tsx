// components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "about" },
  { name: "Projets", href: "projects" },
  { name: "Compétences", href: "skills" },
  { name: "Contact", href: "contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("about");

  // Suivi du scroll pour le lien actif
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.href)
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveLink(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction scroll smooth
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 100; // Ajuste selon la hauteur du header
      const elementPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveLink(id);
      setOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="fixed w-full top-0 left-0 z-50 py-6"
    >
      <div className="max-w-6xl mx-auto h-16 flex justify-between items-center bg-gradient-to-br from-[#0b0a20]/60 via-[#1f1e3a]/60 to-[#0b0a20]/60 backdrop-blur-xl rounded-full px-6 md:px-12 shadow-lg border border-white/10 relative overflow-hidden">
        {/* Logo */}
        <div
          className="relative z-10 text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
          onClick={() => scrollToSection("projects")}
        >
          TFK
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center space-x-6 relative z-10">
          {navLinks.map((link) => (
            <div
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`relative font-medium transition-colors duration-300 pb-1 cursor-pointer ${
                activeLink === link.href
                  ? "text-orange-300"
                  : "text-gray-200 hover:text-orange-300"
              }`}
            >
              {link.name}
              {activeLink === link.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-300 rounded-full"
                />
              )}
            </div>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden relative z-10 text-2xl text-gray-200 hover:text-orange-300 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-br from-[#0b0a20]/90 to-[#1f1e3a]/90 backdrop-blur-md mt-4 mx-4 rounded-2xl flex flex-col items-center shadow-lg border border-white/10 overflow-hidden"
          >
            {navLinks.map((link) => (
              <div
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="w-full text-center py-4 font-medium text-gray-200 hover:text-orange-300 hover:bg-gray-800/50 transition-colors duration-300 cursor-pointer"
              >
                {link.name}
              </div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
