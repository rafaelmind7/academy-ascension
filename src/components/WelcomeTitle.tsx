import React from "react";
import { motion } from "framer-motion";

const WelcomeTitle: React.FC = () => {
  return (
    <motion.div 
      className="fixed top-8 left-1/2 transform -translate-x-1/2 text-center z-20 pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h1 className="text-3xl md:text-5xl font-light text-white tracking-[0.3em] luminous-title mb-2">
        WELCOME TO THE
      </h1>
      <h2 className="text-2xl md:text-4xl font-light text-primary tracking-[0.2em] luminous-title">
        AI AUTOMATION PLATFORM
      </h2>
      <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 opacity-60" />
    </motion.div>
  );
};

export default WelcomeTitle;