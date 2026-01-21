// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 mt-0 md:px-12 lg:px-24 text-white overflow-hidden bg-[#0b0a20]"
    >
      {/* --- Dégradé animé couvrant toute la section --- */}
      <div className="absolute inset-0 z-0">
        {/* Cercles de dégradé animés */}
        <div className="absolute top-[10%] left-[5%] w-[380px] h-[380px] bg-gradient-to-br from-orange-400/25 via-amber-400/25 to-yellow-400/25 rounded-full blur-[160px] animate-blob-slow"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[360px] h-[360px] bg-gradient-to-br from-yellow-300/25 via-amber-300/25 to-orange-300/25 rounded-full blur-[150px] animate-blob-slow-delay"></div>
        <style jsx>{`
          @keyframes blob-slow {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(25px, -25px) scale(1.05);
            }
          }
          .animate-blob-slow {
            animation: blob-slow 18s ease-in-out infinite;
          }
          .animate-blob-slow-delay {
            animation: blob-slow 22s ease-in-out infinite;
          }
        `}</style>
      </div>

      {/* --- Contenu principal --- */}
      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Texte et boutons */}
        <div className="flex-1 text-center md:text-left">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-zinc-400 font-medium mb-3"
          >
            Hi, I&apos;m
          </motion.h4>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[3rem] sm:text-[4rem] md:text-[4.5rem] font-extrabold leading-tight tracking-tight bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-md"
          >
            FATCHEHOUN Tiburce
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            Full Stack Developer | React.js | Next.js | Node.js | Laravel | Tailwind CSS | JavaScript | WordPress

          </motion.p>

          {/* Bouton Projets + Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 mt-10"
          >
            {/* Bouton "Voir projets" */}
            <Link
              href="#projects"
              className="flex items-center px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-50 shadow-md transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
            >
              Voir projets
            </Link>

            <div className="flex space-x-3">
              {[
                {
                  icon: <FaGithub />,
                  url: "https://github.com/John230624/",
                  name: "GitHub",
                },
                {
                  icon: <FaWhatsapp />,
                  url: "https://wa.me/2290151800202",
                  name: "Whatsapp",
                },
                {
                  icon: <FaTelegram />,
                  url: "http://t.me/Jbladele",
                  name: "Telegram",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-zinc-200 transition-transform duration-300 ease-out hover:scale-110 hover:bg-white/20"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Photo profil avec glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 70,
          }}
          className="relative flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 blur-2xl opacity-30 animate-pulse-slow"></div>
          <div className="relative w-full h-full p-[3px] rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 shadow-lg">
            <Image
              src="/images/profil.png"
              alt="Photo de Tiburce"
              width={320}
              height={320}
              className="w-full h-full object-cover rounded-full border-[3px] border-[#0b0a20]"
            />
          </div>
          <style jsx>{`
            @keyframes pulse-slow {
              0%,
              100% {
                opacity: 0.3;
              }
              50% {
                opacity: 0.6;
              }
            }
            .animate-pulse-slow {
              animation: pulse-slow 8s ease-in-out infinite;
            }
          `}</style>
        </motion.div>
      </div>

      {/* --- Animation de défilement --- */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="relative flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-8 h-12 rounded-full border-2 border-orange-500 bg-transparent flex items-center justify-center"
          >
            <div className="w-2 h-2 rounded-full bg-orange-300 animate-ping-slow"></div>
          </motion.div>
          <div className="mt-1 flex flex-col items-center">
            <motion.svg
              className="w-5 h-3 text-orange-400"
              viewBox="0 0 20 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.2,
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            >
              <path d="M2 4 L10 10 L18 4" />
            </motion.svg>
            <motion.svg
              className="w-5 h-3 text-orange-400"
              viewBox="0 0 20 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.4,
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            >
              <path d="M2 4 L10 10 L18 4" />
            </motion.svg>
            <motion.svg
              className="w-5 h-3 text-orange-400"
              viewBox="0 0 20 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.6,
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            >
              <path d="M2 4 L10 10 L18 4" />
            </motion.svg>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
