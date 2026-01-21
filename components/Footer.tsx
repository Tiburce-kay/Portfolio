// components/Footer.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0b0a20] text-gray-400 py-12 px-4 md:px-12 lg:px-24 border-t border-[#1a1a2e]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
        {/* Section 1: Informations personnelles */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-4">
            Kayodé Tiburce FATCHEHOUN
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-sm mb-4">
            Développeur Full Stack passionné par la création d&apos;expériences
            digitales rapides, évolutives et élégantes. Ouvert aux rôles à temps
            plein, aux missions en freelance et aux projets collaboratifs.
          </p>
          <div className="flex items-center text-sm text-gray-400 mb-2">
            <FaEnvelope className="mr-2" />
            <a
              href="mailto:tiburcetiburce6@gmail.com"
              className="hover:text-white transition-colors"
            >
              tiburcetiburce6@gmail.com
            </a>
          </div>
          <div className="flex items-center text-sm text-gray-400 mb-4">
            <FaEnvelope className="mr-2" />
            <span>Bénin, Cotonou</span>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/John230624"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien vers mon profil GitHub"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/2290151800202"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien vers mon profil LinkedIn"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:tiburcetiburce6@gmail.com"
              aria-label="Lien pour m'envoyer un email"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Section 2: Liens rapides */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-4">Liens rapides</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#about"
                className="hover:text-white transition-colors"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="hover:text-white transition-colors"
              >
                Compétences
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:text-white transition-colors"
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Projets en vedette (exemples ajoutés) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-4">
            Projets en vedette
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                PLAWIMADD GROUP
                <span className="block text-sm text-gray-500">
                  Plateforme E-commerce
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Portfolio Personnel
                <span className="block text-sm text-gray-500">
                  Développement Front-End
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Système de Gestion de Stock
                <span className="block text-sm text-gray-500">
                  Solution SaaS d&apos;entreprise
                </span>
              </a>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-orange-400 hover:text-orange-600 mt-4 inline-block"
              >
                Voir tous les projets →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Barre de pied de page inférieure */}
      <div className="mt-12 pt-8 border-t border-[#1a1a2e] text-center text-sm md:flex md:justify-between md:items-center">
        <p>
          &copy; {new Date().getFullYear()} Kayodé Tiburce FATCHEHOUN. &
          Next.js
        </p>
        <p className="mt-4 md:mt-0 md:text-right">
          Développeur Full Stack • Spécialiste React • Ouvert aux opportunités
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
