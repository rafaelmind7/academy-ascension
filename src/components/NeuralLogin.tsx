import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Loader2, Zap } from "lucide-react";
import VideoIntro from "./VideoIntro";
import AnimatedBackground from "./AnimatedBackground";
import WelcomeTitle from "./WelcomeTitle";

interface NeuralLoginProps {
  onLogin: () => void;
}

const NeuralLogin: React.FC<NeuralLoginProps> = ({ onLogin }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepConnection, setKeepConnection] = useState(false);
  
  // Animation states
  const [showVideoIntro, setShowVideoIntro] = useState(true); // Activate video intro
  const [introComplete, setIntroComplete] = useState(false); // Start with complete sequence
  const [showInterface, setShowInterface] = useState(true);

  useEffect(() => {
    if (!showVideoIntro) {
      // Skip intro and show interface directly
      document.body.classList.remove('intro-active');
      setIntroComplete(true);
      setShowInterface(true);
    }
  }, [showVideoIntro]);

  const handleIntroComplete = () => {
    setIntroComplete(true);
    setShowInterface(true);
    document.body.classList.remove('intro-active');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsConnecting(true);
    
    setTimeout(() => {
      onLogin();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Video Intro */}
      <AnimatePresence>
        {showVideoIntro && !introComplete && (
          <VideoIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Ultra-realistic Neural Circuits Background */}
      <AnimatedBackground />

      {/* Welcome Title */}
      <AnimatePresence>
        {showInterface && <WelcomeTitle />}
      </AnimatePresence>

      {/* Login Form */}
      <AnimatePresence>
        {showInterface && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[102]"
          >
            <div className="relative">
              {/* Enhanced Electric Border Animation */}
              <div className="absolute inset-0 rounded-xl opacity-60" 
                   style={{
                     background: 'linear-gradient(45deg, transparent, hsl(var(--primary)), transparent, hsl(var(--primary)), transparent)',
                     backgroundSize: '400% 400%',
                     animation: 'electricFlow 3s ease-in-out infinite'
                   }} />
              
              {/* Electric Arcs */}
              <div className="neural-electric-arcs" />
              
              {/* Form Content */}
              <div className="relative bg-black/90 backdrop-blur-xl border border-primary/20 rounded-xl p-8 min-w-[400px]">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Brain className="h-6 w-6 text-primary" />
                    <span className="text-primary font-semibold tracking-wider">NEURAL ACCESS</span>
                  </div>
                  <p className="text-white/60 text-sm">Initialize connection to the neural network</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/80 text-sm">Neural ID</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-black/50 border-primary/30 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20"
                      placeholder="your.neural.id@mind77.ai"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white/80 text-sm">Access Key</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-black/50 border-primary/30 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20"
                      placeholder="••••••••••••"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="keep-connection"
                      checked={keepConnection}
                      onCheckedChange={(checked) => setKeepConnection(checked as boolean)}
                      className="border-primary/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label htmlFor="keep-connection" className="text-white/60 text-sm">
                      Maintain neural link
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isConnecting || !email || !password}
                    className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isConnecting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Establishing Neural Link...
                      </>
                    ) : (
                      <>
                        <Zap className="h-4 w-4 mr-2" />
                        Connect to Neural Network
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-white/40 text-xs">
                    Powered by Mind77 Neural Architecture
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isConnecting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[103] flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full mx-auto mb-4"
              />
              <p className="text-white text-lg font-medium">Initializing Neural Connection...</p>
              <p className="text-white/60 text-sm mt-2">Please wait while we establish your link</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NeuralLogin;