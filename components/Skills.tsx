// components/Skills.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";

// Les données pour les compétences, organisées par catégorie
const allSkills = [
  // Frontend
  {
    name: "JavaScript",
    type: "Frontend",
    icon: "/images/skills/icons8-javascript-48.png",
  },
  {
    name: "TypeScript",
    type: "Frontend",
    icon: "/images/skills/icons8-typescript-50.png",
  },
  {
    name: "React",
    type: "Frontend",
    icon: "/images/skills/icons8-react-50.png",
  },
  {
    name: "Next.js",
    type: "Frontend",
    icon: "/images/skills/icons8-next.js-48.png",
  },
  {
    name: "HTML",
    type: "Frontend",
    icon: "/images/skills/icons8-html-5-48.png",
  },
  { name: "CSS", type: "Frontend", icon: "/images/skills/icons8-css3-48.png" },
  {
    name: "Tailwind CSS",
    type: "Frontend",
    icon: "/images/skills/icons8-tailwind-css-48.png",
  },
  {
    name: "Bootstrap",
    type: "Frontend",
    icon: "/images/skills/icons8-bootstrap-50.png",
  },
  {
    name: "Wordpress",
    type: "Frontend",
    icon: "/images/skills/icons8-wordpress-48.png",
  },

  // Backend
  { name: "Vercel", type: "Backend", icon: "/images/skills/vercel.png" },
  {
    name: "Laravel",
    type: "Backend",
    icon: "/images/skills/icons8-laravel-48.png",
  },
  {
    name: "Python",
    type: "Backend",
    icon: "/images/skills/icons8-python-48.png",
  },
  {
    name: "Node.js",
    type: "Backend",
    icon: "/images/skills/icons8-node-js-48.png",
  },

  // Bases de données
  { name: "SQL", type: "Databases", icon: "/images/skills/icons8-sql-50.png" },
  {
    name: "MongoDB",
    type: "Databases",
    icon: "/images/skills/icons8-mongo-db-50.png",
  },
  {
    name: "PostgreSQL",
    type: "Databases",
    icon: "/images/skills/icons8-postgresql-50.png",
  },

  // Outils
  { name: "Git", type: "Tools", icon: "/images/skills/icons8-git-50.png" },
  {
    name: "GitHub",
    type: "Tools",
    icon: "/images/skills/icons8-github-50.png",
  },
  {
    name: "VSCode",
    type: "Tools",
    icon: "/images/skills/icons8-visual-studio-code-50.png",
  },
  {
    name: "Prisma",
    type: "Tools",
    icon: "/images/skills/icons8-prisma-orm-50.png",
  },
];

// Variants corrigés
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.6, -0.05, 0.01, 0.99),
    },
  },
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.type === activeCategory);

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-12 lg:px-24 bg-[#0b0a20] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Titre de la section */}
        <div className="text-center mb-12">
          <p className="text-lg font-bold text-orange-500 tracking-wide">
            — COMPÉTENCES —
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 tracking-tight">
            Ma boîte à outils
          </h2>
        </div>

        {/* Barre de navigation des catégories */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {["All", "Frontend", "Backend", "Databases", "Tools"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                px-6 py-2 rounded-full font-medium transition-colors duration-300
                ${
                  activeCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                }
              `}
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Grille des compétences */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center p-6 bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 transition-transform duration-300 hover:scale-105 hover:bg-gray-700/60"
            >
              <Image
                src={skill.icon}
                alt={`${skill.name} logo`}
                width={48} // Valeur par défaut plus petite
                height={48} // Valeur par défaut plus petite
                className="w-10 h-10 sm:w-12 sm:h-12 mb-4"
              />
              <p className="text-sm font-semibold text-center text-white">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
