import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Loader2, Eye } from "lucide-react";
import VideoIntro from "@/components/VideoIntro";
import AnimatedBackground from "@/components/AnimatedBackground";
import WelcomeTitle from "@/components/WelcomeTitle";

interface NeuralLoginProps {
  onLogin: () => void;
}

const NeuralLogin: React.FC<NeuralLoginProps> = ({ onLogin }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepConnection, setKeepConnection] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [showLoginCard, setShowLoginCard] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleIntroComplete = () => {
    setIntroComplete(true);
    // Show login card after a brief delay
    setTimeout(() => setShowLoginCard(true), 800);
  };

  // Mouse tracking for parallax effect
  React.useEffect(() => {
    if (!introComplete) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setMousePosition({
          x: (e.clientX - centerX) / 30,
          y: (e.clientY - centerY) / 30
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [introComplete]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConnecting(true);
    setTimeout(() => onLogin(), 3000);
  };


  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Intro */}
      {!introComplete && (
        <VideoIntro onIntroComplete={handleIntroComplete} />
      )}

      {/* Main Interface */}
      {introComplete && (
        <>
          {/* Animated Background */}
          <AnimatedBackground />
          
          {/* Welcome Title */}
          <WelcomeTitle />
        </>
      )}

      {/* LOGIN CARD - Positioned below title */}
      {showLoginCard && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-30" style={{ paddingTop: '200px' }}>
          <motion.div 
            ref={cardRef}
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              filter: "blur(0px)",
              x: mousePosition.x * 0.3,
              y: mousePosition.y * 0.3
            }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 120,
              damping: 20
            }}
            className="relative w-full max-w-md"
          >
            {/* Energy Border Effect */}
            <div className="absolute -inset-1 rounded-3xl energy-border" />
          
          <div className="relative bg-gradient-to-br from-white/8 via-white/4 to-white/8 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl card-glow">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2 tracking-wider">NEURAL ACCESS</h1>
            <p className="text-cyan-300 text-sm">AI Automation Platform</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-gray-300 text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4 text-cyan-400" />
                  Neural Identity
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 rounded-xl h-12 mt-2"
                  placeholder="neural.id@mind77.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-300 text-sm flex items-center gap-2">
                  <Brain className="w-4 h-4 text-cyan-400" />
                  Access Protocol
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/5 border border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 rounded-xl h-12 mt-2"
                  placeholder="•••••••••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 py-2">
              <Checkbox
                id="keep-connection"
                checked={keepConnection}
                onCheckedChange={(checked) => setKeepConnection(checked === true)}
                className="border-white/30 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
              />
              <Label htmlFor="keep-connection" className="text-gray-300 text-sm">
                Maintain neural link persistence
              </Label>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={isConnecting}
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-medium py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 h-14 energy-button"
              >
              {isConnecting ? (
                <div className="flex items-center justify-center space-x-3">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Establishing Neural Link</span>
                </div>
              ) : (
                "Initialize Connection"
              )}
              </Button>
            </motion.div>
          </form>

          {isConnecting && (
            <div className="mt-6 text-center">
              <div className="text-cyan-400 text-sm animate-pulse">
                Establishing neural connection...
              </div>
              <div className="mt-2 bg-white/10 rounded-full h-1 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse w-full" />
              </div>
            </div>
          )}
          </div>
        </motion.div>
        </div>
      )}
    </div>
  );
};

export default NeuralLogin;