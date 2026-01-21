// components/About.tsx
"use client";

import React, { JSX, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaCode,
  FaDesktop,
  FaDatabase,
  FaMobileAlt,
  FaFileDownload,
} from "react-icons/fa";
import Image from "next/image";

interface ExpertiseCard {
  title: string;
  description: string;
  icon: JSX.Element;
}

const expertiseCards: ExpertiseCard[] = [
  {
    title: "Clean Code",
    description:
      "Je me concentre sur l'écriture d'un code lisible, maintenable et scalable pour des projets durables.",
    icon: <FaCode />,
  },
  {
    title: "Applications Web",
    description:
      "Conception et développement d'applications web full-stack, de la conception à la mise en production.",
    icon: <FaDesktop />,
  },
  {
    title: "Systèmes Backend",
    description:
      "Création d'APIs robustes, de bases de données optimisées et de systèmes sécurisés pour le web.",
    icon: <FaDatabase />,
  },
  {
    title: "Design Responsif",
    description:
      "Construction d'interfaces utilisateur qui fonctionnent parfaitement sur tous les appareils, du mobile au desktop.",
    icon: <FaMobileAlt />,
  },
];

interface Skill {
  name: string;
  icon: string;
  alt: string;
}

const mainSkills: Skill[] = [
  {
    name: "Next.js",
    icon: "/images/skills/icons8-next.js-48.png",
    alt: "Next.js",
  },
  {
    name: "React",
    icon: "/images/skills/icons8-react-50.png",
    alt: "React",
  },
  {
    name: "JavaScript",
    icon: "/images/skills/icons8-javascript-48.png",
    alt: "JavaScript",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
  exit: { opacity: 0, scale: 0.96 },
};

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 px-4 md:px-12 lg:px-24 bg-[#0b0a20] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Titre de la section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-lg font-bold text-orange-500 tracking-wide">
            — À PROPOS —
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 tracking-tight">
            Qui suis-je ?
          </h2>
        </motion.div>

        {/* Contenu principal */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Bloc de texte */}
          <motion.div variants={itemVariants} className="flex-1 lg:max-w-md">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
              Développeur Full Stack passionné, axé sur l&apos;expérience
              utilisateur et la performance.
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed">
              En tant que développeur full stack, ma mission est de transformer
              des idées complexes en applications web fluides et intuitives.
              J&apos;aime le challenge de résoudre des problèmes en utilisant
              les dernières technologies comme :
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {mainSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm text-zinc-300"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.alt}
                    width={18}
                    height={18}
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>

            <p className="text-zinc-300 text-lg mt-4 leading-relaxed">
              Je suis rigoureux dans mes méthodes de travail et passionné par
              l&apos;optimisation et l&apos;expérience utilisateur. Mon objectif
              est de créer des produits qui non seulement fonctionnent
              parfaitement, mais qui sont aussi un plaisir à utiliser.
            </p>

            {/* Bouton pour télécharger le CV avec un hover plus doux */}
            <motion.a
              href="#"
              onClick={handleDownloadClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-flex items-center px-8 py-3 font-semibold rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-zinc-50 shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer"
            >
              <FaFileDownload className="mr-2" />
              Télécharger mon CV
            </motion.a>
          </motion.div>

          {/* Grille des cartes */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1"
          >
            {expertiseCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="text-3xl text-orange-400 mb-4">{card.icon}</div>
                <h4 className="text-xl font-bold mb-2">{card.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modale CV */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="cv-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-black/60"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-title"
          >
            <motion.div
              key="cv-modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#1f1e3a] border border-[#2b2a47] rounded-xl p-8 max-w-sm w-full text-center shadow-2xl"
            >
              {/* Bordure animée décorative — neutralisée pour les clics */}
              <div className="pointer-events-none absolute inset-0 rounded-xl border-4 border-orange-400/50 animate-pulse-border"></div>

              <h3
                id="cv-title"
                className="text-2xl font-bold text-orange-400 mb-2"
              >
                CV en cours de mise à jour
              </h3>
              <p className="text-zinc-300">
                Mon CV est en cours de mise à jour. Veuillez revenir bientôt !
              </p>

              {/* Bouton "Fermer" avec changement de curseur */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="relative mt-6 px-6 py-2 bg-orange-500 text-[#1a1a32] font-semibold rounded-full shadow-md transition-colors duration-300 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes pulse-border {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }
        .animate-pulse-border {
          animation: pulse-border 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default About;
