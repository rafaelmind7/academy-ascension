import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Loader2, Eye, Play, Pause } from "lucide-react";

interface NeuralLoginProps {
  onLogin: () => void;
}

const NeuralLogin: React.FC<NeuralLoginProps> = ({ onLogin }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepConnection, setKeepConnection] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardVisible, setCardVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Controla as fases da animação
  useEffect(() => {
    const phases = [
      { delay: 1000, phase: 1 },   // Começar formação
      { delay: 8000, phase: 2 },   // Logo formada
      { delay: 10000, phase: 3 },  // Transformar em robô
      { delay: 12000, phase: 4 },  // Mostrar welcome
      { delay: 14000, phase: 5 },  // Mostrar company
    ];

    phases.forEach(({ delay, phase }) => {
      setTimeout(() => {
        setAnimationPhase(phase);
        if (phase === 4) setShowWelcome(true);
        if (phase === 5) setShowCompany(true);
      }, delay);
    });

    // Show login card after neural animation
    setTimeout(() => setCardVisible(true), 16000);
  }, []);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setMousePosition({
          x: (e.clientX - centerX) / 20,
          y: (e.clientY - centerY) / 20
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConnecting(true);
    setTimeout(() => onLogin(), 3000);
  };

  const toggleVideo = () => {
    if (videoRef) {
      if (isVideoPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Configuração dos nós que formam a logo Mind77
  const logoNodes = [
    // Nós do CÉREBRO (lado esquerdo)
    { id: 'brain1', x: 25, y: 35, size: 4, delay: 1, type: 'brain' },
    { id: 'brain2', x: 20, y: 45, size: 3, delay: 1.5, type: 'brain' },
    { id: 'brain3', x: 30, y: 55, size: 4, delay: 2, type: 'brain' },
    { id: 'brain4', x: 35, y: 35, size: 3, delay: 2.5, type: 'brain' },
    { id: 'brain5', x: 15, y: 50, size: 3, delay: 3, type: 'brain' },
    { id: 'brain6', x: 40, y: 50, size: 3, delay: 3.5, type: 'brain' },
    
    // DIVISÓRIA CENTRAL
    { id: 'div1', x: 50, y: 30, size: 2, delay: 4, type: 'divider' },
    { id: 'div2', x: 50, y: 40, size: 2, delay: 4.2, type: 'divider' },
    { id: 'div3', x: 50, y: 50, size: 2, delay: 4.4, type: 'divider' },
    { id: 'div4', x: 50, y: 60, size: 2, delay: 4.6, type: 'divider' },
    { id: 'div5', x: 50, y: 65, size: 2, delay: 4.8, type: 'divider' },
    
    // Nós da LÂMPADA (lado direito)
    { id: 'bulb1', x: 65, y: 35, size: 4, delay: 5, type: 'bulb' },
    { id: 'bulb2', x: 75, y: 35, size: 4, delay: 5.5, type: 'bulb' },
    { id: 'bulb3', x: 70, y: 45, size: 4, delay: 6, type: 'bulb' },
    { id: 'bulb4', x: 60, y: 50, size: 3, delay: 6.5, type: 'bulb' },
    { id: 'bulb5', x: 80, y: 50, size: 3, delay: 7, type: 'bulb' },
    
    // BASE DA LÂMPADA (rosca)
    { id: 'base1', x: 65, y: 60, size: 2, delay: 7.5, type: 'base' },
    { id: 'base2', x: 70, y: 62, size: 2, delay: 7.7, type: 'base' },
    { id: 'base3', x: 75, y: 60, size: 2, delay: 7.9, type: 'base' },
  ];

  // Conexões que formam a estrutura
  const connections = [
    // Conexões do cérebro
    { from: 'brain1', to: 'brain2', delay: 2 },
    { from: 'brain2', to: 'brain3', delay: 2.5 },
    { from: 'brain1', to: 'brain4', delay: 3 },
    { from: 'brain3', to: 'brain5', delay: 3.5 },
    { from: 'brain4', to: 'brain6', delay: 4 },
    
    // Conexões centrais
    { from: 'brain4', to: 'div1', delay: 4.5 },
    { from: 'brain6', to: 'div3', delay: 5 },
    
    // Conexões da lâmpada
    { from: 'div2', to: 'bulb1', delay: 5.5 },
    { from: 'div3', to: 'bulb3', delay: 6 },
    { from: 'bulb1', to: 'bulb2', delay: 6.5 },
    { from: 'bulb3', to: 'bulb4', delay: 7 },
    { from: 'bulb3', to: 'bulb5', delay: 7.5 },
    { from: 'bulb4', to: 'base1', delay: 8 },
    { from: 'bulb5', to: 'base3', delay: 8.5 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Video */}
      <video
        ref={(ref) => {
          setVideoRef(ref);
          if (ref) {
            ref.addEventListener('ended', () => {
              ref.currentTime = ref.duration;
              ref.pause();
            });
          }
        }}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop={false}
        muted
        playsInline
        poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwZjE3MmEiLz48L3N2Zz4="
      >
        <source 
          src="https://wqrcmdgmvzoqbvggqzho.supabase.co/storage/v1/object/public/lovable//AI_Video_Creation_Confirmation.mp4" 
          type="video/mp4" 
        />
      </video>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Fallback Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-10" />
      
      {/* Grid sutil */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(12, 192, 223, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(12, 192, 223, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* ANIMAÇÃO DA REDE NEURAL */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <svg 
          className="w-full h-full max-w-6xl max-h-6xl" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Conexões */}
          {connections.map((conn, index) => {
            const fromNode = logoNodes.find(n => n.id === conn.from);
            const toNode = logoNodes.find(n => n.id === conn.to);
            if (!fromNode || !toNode) return null;

            return (
              <line
                key={index}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="url(#connectionGradient)"
                strokeWidth="0.5"
                opacity="0"
                className="neural-connection"
                style={{
                  animation: `connectionForm 1s ease-out ${conn.delay}s forwards`
                }}
              />
            );
          })}

          {/* Nós */}
          {logoNodes.map((node, index) => (
            <g key={node.id}>
              {/* Glow externo */}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size + 1}
                fill="url(#nodeGlow)"
                opacity="0"
                style={{
                  animation: `nodeForm 0.8s ease-out ${node.delay}s forwards`
                }}
              />
              {/* Nó principal */}
              <circle
                cx={animationPhase >= 3 ? (node.type === 'brain' ? node.x - 5 : node.x + 5) : node.x}
                cy={animationPhase >= 3 ? (node.type === 'bulb' ? node.y - 10 : node.y) : node.y}
                r={node.size}
                fill={
                  animationPhase >= 3 ? '#06b6d4' : // Robô
                  node.type === 'brain' ? '#0cc0df' :
                  node.type === 'bulb' ? '#3b82f6' :
                  node.type === 'divider' ? '#06b6d4' :
                  '#6366f1'
                }
                opacity="0"
                className={animationPhase >= 3 ? 'robot-eyes' : 'neural-node'}
                style={{
                  animation: `nodeForm 0.5s ease-out ${node.delay}s forwards, ${animationPhase >= 3 ? 'robotBlink 2s ease-in-out infinite' : 'nodePulse 2s ease-in-out infinite'} ${node.delay + 1}s`
                }}
              />
            </g>
          ))}

          {/* Gradientes */}
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0cc0df" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
            
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0cc0df" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0cc0df" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        {/* MENSAGENS DE BOAS VINDAS */}
        {showWelcome && (
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-4xl md:text-6xl font-light text-white tracking-[0.3em] animate-fadeInUp">
              WELCOME TO AI
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-cyan-400 tracking-[0.2em] mt-2 animate-fadeInUp" style={{animationDelay: '0.5s'}}>
              AUTOMATION PLATFORM
            </h2>
          </div>
        )}

        {showCompany && (
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-xl md:text-2xl font-light text-gray-400 tracking-[0.4em] animate-fadeInUp">
              BY MIND77 COMPANY
            </p>
          </div>
        )}
      </div>

      {/* Video Controls */}
      <button
        onClick={toggleVideo}
        className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        aria-label={isVideoPlaying ? "Pause video" : "Play video"}
      >
        {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>

      {/* CARD DE LOGIN */}
      {cardVisible && (
        <motion.div 
          ref={cardRef}
          initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
          animate={{ 
            scale: 1, 
            opacity: 1, 
            filter: "blur(0px)",
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5
          }}
          transition={{ 
            duration: 1.2,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="relative w-full max-w-md z-30"
        >
          {/* Electrical Border Effect */}
          <div className="absolute -inset-1 rounded-3xl electrical-border" />
          
          {/* Lightning Strikes */}
          <svg className="absolute -inset-4 w-full h-full pointer-events-none z-10" viewBox="0 0 400 600">
            <path
              d="M50,100 Q200,50 350,100 Q300,200 250,300 Q200,250 150,350 Q100,300 50,400"
              stroke="url(#lightningGradient)"
              strokeWidth="2"
              fill="none"
              className="lightning-path"
              pathLength="1"
            />
            <defs>
              <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0cc0df" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="relative bg-gradient-to-br from-white/8 via-white/4 to-white/8 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl neural-glow">
          
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
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 h-14 neural-button"
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
      )}
    </div>
  );
};

export default NeuralLogin;