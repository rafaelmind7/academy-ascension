import React from "react";
import { motion } from "framer-motion";

const WelcomeTitle: React.FC = () => {
  return (
    <motion.div 
      className="fixed top-1/4 left-1/2 transform -translate-x-1/2 text-center z-20 pointer-events-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h1 className="text-4xl md:text-6xl font-light text-white tracking-[0.3em] luminous-text">
        WELCOME TO THE
      </h1>
      <h2 className="text-3xl md:text-5xl font-light text-primary tracking-[0.2em] mt-2 luminous-text">
        AI AUTOMATION PLATFORM
      </h2>
    </motion.div>
  );
};

export default WelcomeTitle;