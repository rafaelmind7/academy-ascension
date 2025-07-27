import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Eye, Brain, Activity } from "lucide-react";

interface NeuralLoginProps {
  onLogin: () => void;
}

const NeuralLogin: React.FC<NeuralLoginProps> = ({ onLogin }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionProgress, setConnectionProgress] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepConnection, setKeepConnection] = useState(false);
  const [aiScanning, setAiScanning] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Sequência de animação da rede neural
    const phases = [
      { delay: 0, phase: 1 },     // 0-4s: cérebro
      { delay: 4000, phase: 2 },  // 4-6s: linha divisória
      { delay: 6000, phase: 3 },  // 6-8s: lâmpada
      { delay: 8000, phase: 4 },  // 8-10s: pulsa e brilha
      { delay: 10000, phase: 5 }, // 10-12s: robô
      { delay: 12000, phase: 6 }, // 12s+: textos
    ];

    const timeouts = phases.map(({ delay, phase }) =>
      setTimeout(() => setAnimationPhase(phase), delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const handleFocus = () => setAiScanning(true);
  const handleBlur = () => setAiScanning(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConnecting(true);
    
    const progressInterval = setInterval(() => {
      setConnectionProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLogin(), 800);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 150);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Futurístico */}
      <div className="absolute inset-0">
        {/* Gradiente base */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-slate-800" />
        
        {/* Animação da Rede Neural */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg 
            className="w-full h-full max-w-6xl max-h-4xl" 
            viewBox="0 0 1000 600" 
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Definições de gradientes e filtros */}
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0cc0df" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
              
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0cc0df" stopOpacity="1" />
                <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
              </radialGradient>

              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* FASE 1: Formação do Cérebro (0-4s) */}
            <g className={`transition-all duration-1000 ${animationPhase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
              {/* Nós do cérebro - lado esquerdo */}
              <circle cx="200" cy="200" r="4" fill="url(#nodeGradient)" filter="url(#glow)" 
                className={`${animationPhase >= 1 ? 'animate-pulse-glow neural-node-appear' : ''}`} 
                style={{animationDelay: '0.2s'}} />
              <circle cx="180" cy="240" r="3" fill="url(#nodeGradient)" filter="url(#glow)" 
                className={`${animationPhase >= 1 ? 'animate-pulse-glow neural-node-appear' : ''}`} 
                style={{animationDelay: '0.4s'}} />
              <circle cx="220" cy="260" r="5" fill="url(#nodeGradient)" filter="url(#glow)" 
                className={`${animationPhase >= 1 ? 'animate-pulse-glow neural-node-appear' : ''}`} 
                style={{animationDelay: '0.6s'}} />
              <circle cx="160" cy="280" r="3" fill="url(#nodeGradient)" filter="url(#glow)" 
                className={`${animationPhase >= 1 ? 'animate-pulse-glow neural-node-appear' : ''}`} 
                style={{animationDelay: '0.8s'}} />
              <circle cx="240" cy="220" r="4" fill="url(#nodeGradient)" filter="url(#glow)" 
                className={`${animationPhase >= 1 ? 'animate-pulse-glow neural-node-appear' : ''}`} 
                style={{animationDelay: '1s'}} />
              <circle cx="190" cy="320" r="3" fill="url(#nodeGradient)" filter="url(#glow)" 
                className={`${animationPhase >= 1 ? 'animate-pulse-glow neural-node-appear' : ''}`} 
                style={{animationDelay: '1.2s'}} />
              <circle cx="250" cy="300" r="4" fill="url(#nodeGradient)" filter="url(#glow)" 
                className={`${animationPhase >= 1 ? 'animate-pulse-glow neural-node-appear' : ''}`} 
                style={{animationDelay: '1.4s'}} />

              {/* Conexões do cérebro */}
              <g stroke="url(#connectionGradient)" strokeWidth="1.5" fill="none" opacity="0.8">
                <line x1="200" y1="200" x2="180" y2="240" 
                  className={`${animationPhase >= 1 ? 'neural-connection-draw' : ''}`} 
                  style={{animationDelay: '1.6s'}} />
                <line x1="200" y1="200" x2="220" y2="260" 
                  className={`${animationPhase >= 1 ? 'neural-connection-draw' : ''}`} 
                  style={{animationDelay: '1.8s'}} />
                <line x1="180" y1="240" x2="160" y2="280" 
                  className={`${animationPhase >= 1 ? 'neural-connection-draw' : ''}`} 
                  style={{animationDelay: '2s'}} />
                <line x1="220" y1="260" x2="240" y2="220" 
                  className={`${animationPhase >= 1 ? 'neural-connection-draw' : ''}`} 
                  style={{animationDelay: '2.2s'}} />
                <line x1="180" y1="240" x2="190" y2="320" 
                  className={`${animationPhase >= 1 ? 'neural-connection-draw' : ''}`} 
                  style={{animationDelay: '2.4s'}} />
                <line x1="220" y1="260" x2="250" y2="300" 
                  className={`${animationPhase >= 1 ? 'neural-connection-draw' : ''}`} 
                  style={{animationDelay: '2.6s'}} />
              </g>
            </g>

            {/* FASE 2: Linha Divisória (4-6s) */}
            <g className={`transition-all duration-1000 ${animationPhase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
              <line x1="500" y1="150" x2="500" y2="450" 
                stroke="url(#connectionGradient)" strokeWidth="2" 
                className={`${animationPhase >= 2 ? 'neural-connection-draw' : ''}`} 
                style={{animationDelay: '0.5s'}} filter="url(#glow)" />
            </g>

            {/* FASE 3: Formação da Lâmpada (6-8s) */}
            <g className={`transition-all duration-1000 ${animationPhase >= 3 ? 'opacity-100' : 'opacity-0'}`}>
              {/* Nós da lâmpada - lado direito */}
              <circle cx="700" cy="200" r="4" fill="url(#nodeGradient)" filter="url(#glow)" 
                className={`${animationPhase >= 3 ? 'animate-pulse-glow neural-node-appear' : ''}`} 
                style={{animationDelay: '0.2s'}} />
              <circle cx="720" cy="230" r="4" fill="url(#nodeGradient)" filter="url(#glow)" 
                className={`${animationPhase >= 3 ? 'animate-pulse-glow neural-node-appear' : ''}`} 
                style={{animationDelay: '0.4s'}} />
              <circle cx="680" cy="230" r="4" fill="url(#nodeGradient)" filter="url(#glow)" 
                className={`${animationPhase >= 3 ? 'animate-pulse-glow neural-node-appear' : ''}`} 
                style={{animationDelay: '0.6s'}} />
              <circle cx="750" cy="260" r="3" fill="url(#nodeGradient)" filter="url(#glow)" 
                className={`${animationPhase >= 3 ? 'animate-pulse-glow neural-node-appear' : ''}`} 
                style={{animationDelay: '0.8s'}} />
              <circle cx="650" cy="260" r="3" fill="url(#nodeGradient)" filter="url(#glow)" 
                className={`${animationPhase >= 3 ? 'animate-pulse-glow neural-node-appear' : ''}`} 
                style={{animationDelay: '1s'}} />
              <circle cx="700" cy="290" r="2" fill="url(#nodeGradient)" filter="url(#glow)" 
                className={`${animationPhase >= 3 ? 'animate-pulse-glow neural-node-appear' : ''}`} 
                style={{animationDelay: '1.2s'}} />
              <circle cx="700" cy="320" r="5" fill="url(#nodeGradient)" filter="url(#glow)" 
                className={`${animationPhase >= 3 ? 'animate-pulse-glow neural-node-appear' : ''}`} 
                style={{animationDelay: '1.4s'}} />

              {/* Conexões da lâmpada */}
              <g stroke="url(#connectionGradient)" strokeWidth="1.5" fill="none" opacity="0.8">
                <line x1="700" y1="200" x2="720" y2="230" 
                  className={`${animationPhase >= 3 ? 'neural-connection-draw' : ''}`} 
                  style={{animationDelay: '1.6s'}} />
                <line x1="700" y1="200" x2="680" y2="230" 
                  className={`${animationPhase >= 3 ? 'neural-connection-draw' : ''}`} 
                  style={{animationDelay: '1.8s'}} />
                <line x1="720" y1="230" x2="750" y2="260" 
                  className={`${animationPhase >= 3 ? 'neural-connection-draw' : ''}`} 
                  style={{animationDelay: '2s'}} />
                <line x1="680" y1="230" x2="650" y2="260" 
                  className={`${animationPhase >= 3 ? 'neural-connection-draw' : ''}`} 
                  style={{animationDelay: '2.2s'}} />
                <line x1="720" y1="230" x2="700" y2="290" 
                  className={`${animationPhase >= 3 ? 'neural-connection-draw' : ''}`} 
                  style={{animationDelay: '2.4s'}} />
                <line x1="680" y1="230" x2="700" y2="290" 
                  className={`${animationPhase >= 3 ? 'neural-connection-draw' : ''}`} 
                  style={{animationDelay: '2.6s'}} />
                <line x1="700" y1="290" x2="700" y2="320" 
                  className={`${animationPhase >= 3 ? 'neural-connection-draw' : ''}`} 
                  style={{animationDelay: '2.8s'}} />
              </g>
            </g>

            {/* FASE 4: Pulso e Brilho (8-10s) */}
            <g className={`${animationPhase >= 4 ? 'neural-structure-glow' : ''}`}>
              {/* Efeito de brilho intenso em toda a estrutura */}
            </g>

            {/* FASE 5: Transformação em Robô (10-12s) */}
            <g className={`transition-all duration-2000 ${animationPhase >= 5 ? 'opacity-100 neural-robot-transform' : 'opacity-0'}`}>
              {/* Cabeça do robô */}
              <circle cx="500" cy="260" r="60" fill="none" stroke="url(#connectionGradient)" strokeWidth="2" filter="url(#glow)" />
              
              {/* Olhos piscantes */}
              <circle cx="480" cy="240" r="8" fill="#0cc0df" filter="url(#glow)" 
                className="robot-eye-blink" style={{animationDelay: '0s'}} />
              <circle cx="520" cy="240" r="8" fill="#0cc0df" filter="url(#glow)" 
                className="robot-eye-blink" style={{animationDelay: '0.5s'}} />
              
              {/* Circuitos ao redor */}
              <path d="M 440 260 Q 450 240 480 240" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" />
              <path d="M 520 240 Q 550 240 560 260" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" />
              
              {/* Antenas/sensores */}
              <line x1="480" y1="200" x2="480" y2="180" stroke="url(#connectionGradient)" strokeWidth="2" />
              <line x1="520" y1="200" x2="520" y2="180" stroke="url(#connectionGradient)" strokeWidth="2" />
              <circle cx="480" cy="180" r="3" fill="#06b6d4" />
              <circle cx="520" cy="180" r="3" fill="#06b6d4" />
            </g>

            {/* Partículas de dados fluindo */}
            {animationPhase >= 2 && (
              <g>
                {[...Array(6)].map((_, i) => (
                  <circle
                    key={i}
                    r="1.5"
                    fill="#0cc0df"
                    className="data-particle"
                    style={{
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    <animateMotion
                      dur="3s"
                      repeatCount="indefinite"
                      path="M200,300 Q350,200 500,300 Q650,400 800,300"
                    />
                  </circle>
                ))}
              </g>
            )}
          </svg>
        </div>

        {/* Textos que aparecem */}
        {animationPhase >= 6 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-center space-y-4 text-fade-in">
              <h1 className="text-4xl md:text-6xl font-light text-white tracking-[0.3em] neural-text-glow">
                WELCOME TO AI
              </h1>
              <h2 className="text-2xl md:text-4xl font-light text-primary tracking-[0.2em] neural-text-glow">
                AUTOMATION PLATFORM
              </h2>
              <div className="mt-8">
                <p className="text-gray-400 text-sm tracking-[0.2em]">
                  BY MIND77 COMPANY
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Card de Login */}
      <div className="relative w-full max-w-md z-20">
        {/* Outer glow ring */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 rounded-3xl blur-sm opacity-75" />
        
        {/* Glass morphism container */}
        <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="space-y-4">
              <h1 className="text-2xl font-light text-white tracking-[0.2em]">
                NEURAL ACCESS
              </h1>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
              <p className="text-primary text-sm font-medium tracking-wider">
                AI AUTOMATION PLATFORM
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Neural Identity Field */}
            <div className="space-y-3">
              <Label className="text-gray-300 text-sm flex items-center gap-2">
                <Eye className="w-4 h-4 text-primary" />
                Neural Identity
              </Label>
              <div className="relative">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="bg-white/5 border border-primary/20 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl h-12 transition-all duration-300"
                  placeholder="neural.id@mind77.com"
                  required
                />
                {aiScanning && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Activity className="w-4 h-4 text-primary animate-pulse" />
                  </div>
                )}
              </div>
            </div>

            {/* Access Protocol Field */}
            <div className="space-y-3">
              <Label className="text-gray-300 text-sm flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Access Protocol
              </Label>
              <div className="relative">
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="bg-white/5 border border-primary/20 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl h-12 transition-all duration-300"
                  placeholder="•••••••••••••••"
                  required
                />
                {aiScanning && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Activity className="w-4 h-4 text-primary animate-pulse" />
                  </div>
                )}
              </div>
            </div>

            {/* Neural Connection Checkbox */}
            <div className="flex items-center space-x-3 py-2">
              <Checkbox
                id="neural-persist"
                checked={keepConnection}
                onCheckedChange={(checked) => setKeepConnection(checked === true)}
                className="border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label htmlFor="neural-persist" className="text-gray-300 text-sm">
                Maintain neural link persistence
              </Label>
            </div>

            {/* Connection Button */}
            <Button
              type="submit"
              disabled={isConnecting}
              className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-500 text-white font-medium py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 h-14 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              
              {isConnecting ? (
                <div className="flex items-center justify-center space-x-3">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Establishing Neural Link</span>
                </div>
              ) : (
                <span>Initialize Connection</span>
              )}
            </Button>
          </form>

          {/* Connection Progress */}
          {isConnecting && (
            <div className="mt-6 space-y-4">
              <div className="text-center space-y-2">
                <div className="text-primary text-sm">
                  {connectionProgress < 25 ? "Initializing quantum protocols..." :
                   connectionProgress < 50 ? "Establishing neural pathways..." :
                   connectionProgress < 75 ? "Synchronizing with AI core..." :
                   connectionProgress < 95 ? "Finalizing secure handshake..." :
                   "Neural link established"}
                </div>
                <div className="text-gray-400 text-xs">
                  {Math.round(connectionProgress)}% Complete
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 rounded-full h-1 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(connectionProgress, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="text-center mt-6 space-y-2">
          <p className="text-gray-500 text-xs tracking-wider">
            POWERED BY MIND77 NEURAL ARCHITECTURE
          </p>
        </div>
      </div>
    </div>
  );
};

export default NeuralLogin;