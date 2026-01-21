// components/Contact.tsx
"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [charCount, setCharCount] = useState(0);

  // Typage explicite : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "message") {
      setCharCount(value.length);
    }
  };

  // Typage explicite : React.FormEvent<HTMLFormElement>
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    alert("Message envoyé ! Je vous contacterai très bientôt.");

    setFormData({ name: "", email: "", message: "" });
    setCharCount(0);
  };

  // Correction : utiliser le type Variants et une easing valide
  const formVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }, // "easeOut" est reconnu
    },
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-12 lg:px-24 bg-[#0b0a20] text-white"
    >
      <div className="max-w-3xl mx-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Me contacter.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Je suis toujours désireux d&apos;explorer de nouvelles opportunités
            et de m&apos;engager dans des projets passionnants. Si vous avez un
            projet en tête, ou si vous voulez juste me dire bonjour,
            n&apos;hésitez pas à m&apos;envoyer un message.
          </p>
        </motion.div>

        {/* Formulaire */}
        <motion.form
          variants={formVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          className="bg-[#1e1e30] p-8 rounded-xl shadow-2xl border border-[#3e3e50]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Nom */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Nom<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#2a2a3e] rounded-lg border border-[#4a4a5e] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="Votre nom"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#2a2a3e] rounded-lg border border-[#4a4a5e] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="john@doe.com"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-300 font-medium mb-2"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              maxLength={500}
              className="w-full px-4 py-3 bg-[#2a2a3e] rounded-lg border border-[#4a4a5e] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
              placeholder="Bonjour. J'aimerais vous poser une question à propos de..."
            ></textarea>
            <div className="text-right text-gray-400 text-sm mt-1">
              {charCount}/500 caractères
            </div>
          </div>

          {/* Bouton */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center px-8 py-3 font-bold rounded-lg bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-colors"
          >
            <FaPaperPlane className="mr-2" />
            Envoyer
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
