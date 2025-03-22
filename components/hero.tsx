"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-16 text-center px-6 max-w-3xl mx-auto">
      <motion.h2
        className="text-4xl font-extrabold bg-gradient-to-r from-green-500 to-green-700 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        KulparkWAY – your travel assistant
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 mt-4 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Your reliable assistant for searching and booking railway tickets. Our
        service makes ticket purchasing{" "}
        <span className="font-semibold">
          fast, convenient, and comfortable.
        </span>
        Easily find your route, compare options, and choose the best seat. Enjoy
        your journey with bonuses, special offers, and entertainment along the
        way.
        <span className="text-green-600 font-bold">
          {" "}
          KulparkWAY – more than just buying tickets. It’s your comfort in every
          trip!
        </span>
      </motion.p>
    </div>
  );
};

export default Hero;
