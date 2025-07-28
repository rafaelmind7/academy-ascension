import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface VideoIntroProps {
  onIntroComplete: () => void;
}

const VideoIntro: React.FC<VideoIntroProps> = ({ onIntroComplete }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [showBlackOut, setShowBlackOut] = useState(false);
  const [showLightning, setShowLightning] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    // Fade to black
    setTimeout(() => {
      setShowBlackOut(true);
      // Trigger lightning after blackout
      setTimeout(() => {
        setShowLightning(true);
        // Complete intro after lightning
        setTimeout(() => onIntroComplete(), 1200);
      }, 800);
    }, 300);
  };

  return (
    <>
      {/* Full Screen Video */}
      <motion.div
        className="fixed inset-0 z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: videoEnded ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        style={{ pointerEvents: videoEnded ? 'none' : 'auto' }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwZjE3MmEiLz48L3N2Zz4="
        >
          <source 
            src="https://wqrcmdgmvzoqbvggqzho.supabase.co/storage/v1/object/public/lovable//AI_Video_Creation_Confirmation.mp4" 
            type="video/mp4" 
          />
        </video>
      </motion.div>

      {/* Blackout Transition */}
      {showBlackOut && (
        <motion.div
          className="fixed inset-0 z-50 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Realistic Lightning Activation */}
      {showLightning && (
        <motion.div
          className="fixed inset-0 z-40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Main Lightning Bolt */}
            <motion.path
              d="M30,10 L35,25 L25,30 L40,45 L30,50 L50,65 L45,80 L60,90"
              stroke="url(#electricBolt)"
              strokeWidth="0.8"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0, 1, 0.8, 0],
                filter: ["blur(0px)", "blur(2px)", "blur(0px)", "blur(10px)"]
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="lightning-main"
            />
            
            {/* Branch Lightning */}
            <motion.path
              d="M35,25 L50,20 L55,35"
              stroke="url(#electricBolt)"
              strokeWidth="0.4"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0, 0.8, 0],
              }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            />
            
            {/* Circuit Activation Points */}
            {[...Array(8)].map((_, i) => (
              <motion.circle
                key={i}
                cx={20 + i * 10}
                cy={20 + Math.sin(i) * 15}
                r="0.5"
                fill="#0cc0df"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0, 1.5, 0],
                  filter: ["blur(0px)", "blur(1px)", "blur(0px)"]
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + i * 0.1, 
                  ease: "easeInOut" 
                }}
              />
            ))}

            <defs>
              <linearGradient id="electricBolt" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="30%" stopColor="#0cc0df" stopOpacity="1" />
                <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Lightning Flash Effect */}
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.2, delay: 0.4 }}
          />
        </motion.div>
      )}
    </>
  );
};

export default VideoIntro;