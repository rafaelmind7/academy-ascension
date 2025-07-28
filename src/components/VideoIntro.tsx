import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface VideoIntroProps {
  onIntroComplete: () => void;
}

const VideoIntro: React.FC<VideoIntroProps> = ({ onIntroComplete }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [showLightning, setShowLightning] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    // Start lightning effect after video fade
    setTimeout(() => {
      setShowLightning(true);
      // Complete intro after lightning
      setTimeout(() => onIntroComplete(), 800);
    }, 500);
  };

  return (
    <>
      {/* Video Intro */}
      <motion.div
        className="fixed inset-0 z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: videoEnded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
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

      {/* Lightning Transition */}
      {showLightning && (
        <motion.div
          className="fixed inset-0 z-40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q25,20 50,50 Q75,80 100,50"
              stroke="url(#lightningGradient)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0cc0df" stopOpacity="0" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      )}
    </>
  );
};

export default VideoIntro;