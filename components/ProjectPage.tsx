// components/ProjectPage.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Données des projets
const projectsData = [
  {
    id: 1,
    title: "PLAWIMADD GROUP",
    subtitle: "E-commerce | Dashboard Admin",
    description:
      "Création d'une plateforme d'e-commerce avec un tableau de bord moderne et réactive pour PLAWIMADD GROUP, une structure spécialisée dans la vente d'équipements électroniques (PC, smartphones, TV, etc.). Ce site a permis de décupler le chiffre d'affaires de la structure en lui offrant une présence en ligne professionnelle et une portée commerciale sans précédent.",
    technologies: [
      { name: "Next.js", icon: "/images/skills/icons8-next.js-48.png" },
      { name: "Tailwind CSS", icon: "/images/skills/icons8-tailwind-css-48.png" },
      { name: "JavaScript", icon: "/images/skills/icons8-javascript-48.png" },
      { name: "TypeScript", icon: "/images/skills/icons8-typescript-50.png" },
      { name: "Vercel", icon: "/images/skills/vercel.png" },
      { name: "Prisma", icon: "/images/skills/icons8-prisma-orm-50.png" },
    ],
    images: [
      "/images/projects/plawimadd-1.png",
      "/images/projects/plawimadd-2.png",
      "/images/projects/plawimadd-3.png",
      "/images/projects/plawimadd-4.png",
      "/images/projects/plawimadd-5.png",
    ],
    liveUrl: "https://plawimadd-group-website-eight.vercel.app/",
    githubUrl: "https://github.com/John230624/",
  },
{
  id: 2,
  title: "The Car Company",
  description:
    "The Car Company est un site vitrine moderne dédié à la présentation de véhicules et de services automobiles. Il met en avant les modèles disponibles, les caractéristiques et les offres de l’entreprise à travers une interface claire, rapide et responsive, afin de renforcer la visibilité de la société sur le web.",
  technologies: [
    { name: "WordPress", icon: "/images/skills/icons8-wordpress-48.png" }
  ],
  images: [
    "/images/projects/projet2-1.png",
    "/images/projects/projet2-2.png",
    "/images/projects/projet2-3.png",
    "/images/projects/projet2-4.png",
    "/images/projects/projet2-5.png",
  ],
  liveUrl: "https://heavy-resources-084496.framer.app/"
},
 {
  id: 3,
  title: "Eternal-beauty",
  description:
    "Eternal Beauty est un site web moderne pour une agence de beauté, permettant de présenter les services, les réalisations et les offres de l’entreprise. Le site offre une interface élégante et responsive, avec un système de gestion de contenu simple, afin d’améliorer la visibilité de l’agence et de faciliter la prise de contact avec les clients.",
  technologies: [
    { name: "Next.js", icon: "/images/skills/icons8-next.js-48.png" },
    { name: "Prisma", icon: "/images/skills/icons8-prisma-orm-50.png" },
    { name: "MySQL", icon: "/images/skills/icons8-sql-50.png" },
  ],
  images: [
    "/images/projects/projet3-1.png",
    "/images/projects/projet3-2.png",
    "/images/projects/projet3-3.png",
    "/images/projects/projet3-4.png",
    "/images/projects/projet3-5.png",
  ],
  liveUrl: "http://eternal-beauty-website.vercel.app/"
},
{
  id: 4,
  title: "Arcane",
  subtitle: "Plateforme de gestion hôtel & restaurant",
  description:
    "Arcane est une application web complète de gestion pour hôtels et restaurants. Elle permet d’administrer les clients, les réservations de chambres et de tables, ainsi que le suivi des services. Le système offre une interface moderne, sécurisée et performante, facilitant l’organisation quotidienne, réduisant les erreurs de gestion et améliorant l’expérience client.",
  technologies: [
    { name: "Laravel", icon: "/images/skills/icons8-laravel-48.png" },
    { name: "Node.js", icon: "/images/skills/icons8-node-js-48.png" },
    { name: "MongoDB", icon: "/images/skills/icons8-mongo-db-50.png" },

  ],
  images: [
    "/images/projects/projet4-1.png",
    "/images/projects/projet4-2.png",
    "/images/projects/projet4-3.png",
    "/images/projects/projet4-4.png",
    "/images/projects/projet4-5.png",
  ],
  liveUrl: "http://arcane-full.vercel.app/"
},
];

const ProjectPage = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(projectsData[0].images[0]);
  const [imageDirection, setImageDirection] = useState<"left" | "right">("right");

  const currentProject = projectsData[currentProjectIndex];

  // Mettre à jour l'image active quand on change de projet
  useEffect(() => {
    setActiveImage(currentProject.images[0]);
  }, [currentProjectIndex]);

  // Navigation entre les projets
  const nextProject = () => {
    setImageDirection("right");
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setImageDirection("left");
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  // Gestion du clic sur les images de la galerie
  const handleImageClick = (image: string) => {
    setActiveImage(image);
  };

  // Smooth scroll pour les liens internes
  useEffect(() => {
    const handleLinkClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      if (!target?.hash) return;

      const section = document.querySelector(target.hash);
      if (section) {
        e.preventDefault();
        const headerOffset = 100;
        const elementPosition =
          section.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleLinkClick));

    return () =>
      links.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
  }, []);

  // Animation pour l'image principale
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 100, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1, 
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      } 
    },
    exit: { opacity: 0, x: -100, scale: 0.95, transition: { duration: 0.4 } },
  };

  // Variants inversés pour le défilement vers la gauche
  const imageVariantsReverse: Variants = {
    hidden: { opacity: 0, x: -100, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1, 
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      } 
    },
    exit: { opacity: 0, x: 100, scale: 0.95, transition: { duration: 0.4 } },
  };

  // Animation pour les miniatures de la galerie
  const thumbnailVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: {
        duration: 0.5,
        ease: "easeOut",
      } 
    },
  };

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20 px-4 md:px-12 lg:px-24 bg-[#0b0a20] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête centré */}
        <div className="text-center mb-12">
          <p className="text-lg font-bold text-orange-500 tracking-widest uppercase mb-2">
            — Récents Projets —
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
            Mes Projets
          </h1>
          <p className="text-gray-400 text-xl font-medium tracking-wide mb-8">
            Découvrez mes réalisations
          </p>
        </div>

        {/* Bloc principal */}
        <motion.div
          key={currentProjectIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-12 mb-12"
        >
          {/* Image principale avec effet de défilement */}
          <div className="w-full lg:w-3/5 relative min-h-[400px]">
            {imageDirection === "right" ? (
              <motion.div
                key={`${activeImage}-right`}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 bg-black"
              >
                <Image
                  src={activeImage}
                  alt={currentProject.title}
                  fill
                  style={{ 
                    objectFit: "contain",
                    objectPosition: "center"
                  }}
                  className="p-2"
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                
                {/* Overlay décoratif */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`${activeImage}-left`}
                variants={imageVariantsReverse}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 bg-black"
              >
                <Image
                  src={activeImage}
                  alt={currentProject.title}
                  fill
                  style={{ 
                    objectFit: "contain",
                    objectPosition: "center"
                  }}
                  className="p-2"
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                
                {/* Overlay décoratif */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50" />
                </div>
              </motion.div>
            )}
          </div>

          {/* Description + boutons */}
          <div className="w-full lg:w-2/5 flex flex-col justify-between">
            <div>
              {/* Titre du projet actuel */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {currentProject.title}
                </h2>
                <p className="text-orange-400 text-lg font-medium">
                  {currentProject.subtitle}
                </p>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {currentProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Technologies utilisées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative flex items-center px-4 py-2 rounded-full bg-gray-800/80 text-gray-300 text-sm font-semibold border border-gray-700 transition-colors duration-300 overflow-hidden cursor-pointer"
                    >
                      <Image
                        src={tech.icon}
                        alt={`${tech.name} icon`}
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      {tech.name}

                      {/* Bordure animée */}
                      <motion.svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <motion.path
                          d="M 0 0 L 100 0 L 100 100 L 0 100 Z"
                          stroke="#ff8c00"
                          strokeWidth="2"
                          fill="transparent"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileHover={{
                            pathLength: 1,
                            opacity: 1,
                            transition: { duration: 0.8, ease: "easeInOut" },
                          }}
                        />
                      </motion.svg>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Boutons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold bg-gradient-to-br from-orange-500 to-amber-500 text-zinc-50 text-center shadow-lg hover:shadow-orange-500/30 cursor-pointer flex items-center justify-center"
                >
                  <FaExternalLinkAlt className="inline-block mr-2" />
                  Visiter le site
                </motion.a>
                <motion.a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-gray-200 bg-gray-800 hover:bg-gray-700 text-center shadow-lg hover:shadow-gray-700/30 cursor-pointer flex items-center justify-center"
                >
                  <FaGithub className="inline-block mr-2" />
                  GitHub
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Galerie d'images avec effet de défilement */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4">
            Galerie du projet
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {currentProject.images.map((image, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={thumbnailVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                onClick={() => handleImageClick(image)}
                className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 group
                  ${
                    activeImage === image
                      ? "border-orange-500 scale-105"
                      : "border-gray-700 hover:border-orange-400"
                  }
                `}
              >
                <Image
                  src={image}
                  alt={`${currentProject.title} - Image ${index + 1}`}
                  fill
                  style={{ 
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                
                {/* Indicateur d'image active */}
                {activeImage === image && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-2 right-2 w-3 h-3 bg-orange-500 rounded-full shadow-lg"
                  />
                )}
                
                {/* Numéro de l'image avec effet */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className={`absolute bottom-2 left-2 text-xs px-2 py-1 rounded ${
                    activeImage === image 
                      ? "bg-orange-500 text-white" 
                      : "bg-black/70 text-gray-300"
                  }`}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation manuelle des projets */}
        <div className="flex flex-col items-center gap-6 mt-12">
          {/* Indicateurs de projet (points) */}
          <div className="flex gap-4">
            {projectsData.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => {
                  setImageDirection(index > currentProjectIndex ? "right" : "left");
                  setCurrentProjectIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
                aria-label={`Voir le projet ${project.title}`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentProjectIndex === index
                      ? "bg-orange-500"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
                {/* Animation du point actif */}
                {currentProjectIndex === index && (
                  <motion.div
                    className="absolute inset-0 border-2 border-orange-400 rounded-full"
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Navigation avec flèches et numéro du projet */}
          <div className="flex items-center gap-6">
            <motion.button
              onClick={prevProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors group"
              aria-label="Projet précédent"
            >
              <FaChevronLeft className="text-xl group-hover:text-orange-500 transition-colors" />
            </motion.button>
            
            <div className="text-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-orange-500 font-bold text-2xl">
                  {currentProjectIndex + 1}
                </span>
                <span className="text-gray-400 text-xl">/</span>
                <span className="text-gray-400 text-xl">{projectsData.length}</span>
              </div>
              <p className="text-sm text-gray-300">
                {currentProject.title}
              </p>
            </div>

            <motion.button
              onClick={nextProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors group"
              aria-label="Projet suivant"
            >
              <FaChevronRight className="text-xl group-hover:text-orange-500 transition-colors" />
            </motion.button>
          </div>
          
          {/* Instructions */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-sm text-center max-w-md"
          >
            Cliquez sur les images ci-dessus pour les afficher en grand
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;