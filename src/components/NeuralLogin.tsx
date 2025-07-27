import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Cpu, Zap, CircuitBoard, Eye, Brain, Activity } from "lucide-react";

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

  // Floating particles - muito mais sutis
  const subtleParticles = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-float opacity-60"
      style={{
        left: `${15 + Math.random() * 70}%`,
        top: `${15 + Math.random() * 70}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${8 + Math.random() * 4}s`,
      }}
    />
  ));

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Elegante e Minimalista */}
      <div className="absolute inset-0">
        {/* Gradiente base sofisticado */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        
        {/* Grid sutil apenas */}
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
        
        {/* Rede neural minimalista centralizada */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg 
            className="w-full h-full max-w-4xl max-h-4xl opacity-30" 
            viewBox="0 0 800 600" 
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Conexões principais - formando um padrão cerebral elegante */}
            <g stroke="url(#connectionGradient)" strokeWidth="1" fill="none" opacity="0.6">
              {/* Linha central principal */}
              <line x1="200" y1="300" x2="600" y2="300" className="animate-pulse-slow" />
              
              {/* Conexões ramificadas */}
              <line x1="200" y1="300" x2="150" y2="250" className="animate-pulse-slow" style={{animationDelay: '0.5s'}} />
              <line x1="200" y1="300" x2="150" y2="350" className="animate-pulse-slow" style={{animationDelay: '1s'}} />
              <line x1="400" y1="300" x2="350" y2="200" className="animate-pulse-slow" style={{animationDelay: '1.5s'}} />
              <line x1="400" y1="300" x2="450" y2="200" className="animate-pulse-slow" style={{animationDelay: '2s'}} />
              <line x1="600" y1="300" x2="650" y2="250" className="animate-pulse-slow" style={{animationDelay: '2.5s'}} />
              <line x1="600" y1="300" x2="650" y2="350" className="animate-pulse-slow" style={{animationDelay: '3s'}} />
              
              {/* Conexões secundárias */}
              <line x1="150" y1="250" x2="100" y2="200" className="animate-pulse-slow" style={{animationDelay: '3.5s'}} />
              <line x1="650" y1="250" x2="700" y2="200" className="animate-pulse-slow" style={{animationDelay: '4s'}} />
            </g>
            
            {/* Nós neurais - posições precisas */}
            <g fill="url(#nodeGradient)">
              {/* Nós principais */}
              <circle cx="200" cy="300" r="6" className="animate-pulse-glow" />
              <circle cx="400" cy="300" r="8" className="animate-pulse-glow" style={{animationDelay: '1s'}} />
              <circle cx="600" cy="300" r="6" className="animate-pulse-glow" style={{animationDelay: '2s'}} />
              
              {/* Nós secundários */}
              <circle cx="150" cy="250" r="4" className="animate-pulse-glow" style={{animationDelay: '0.5s'}} />
              <circle cx="150" cy="350" r="4" className="animate-pulse-glow" style={{animationDelay: '1.5s'}} />
              <circle cx="350" cy="200" r="3" className="animate-pulse-glow" style={{animationDelay: '2.5s'}} />
              <circle cx="450" cy="200" r="3" className="animate-pulse-glow" style={{animationDelay: '3.5s'}} />
              <circle cx="650" cy="250" r="4" className="animate-pulse-glow" style={{animationDelay: '4.5s'}} />
              <circle cx="650" cy="350" r="4" className="animate-pulse-glow" style={{animationDelay: '5.5s'}} />
              
              {/* Nós externos */}
              <circle cx="100" cy="200" r="2" className="animate-pulse-glow" style={{animationDelay: '6s'}} />
              <circle cx="700" cy="200" r="2" className="animate-pulse-glow" style={{animationDelay: '6.5s'}} />
            </g>
            
            {/* Gradientes para as conexões e nós */}
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0cc0df" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
              
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0cc0df" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        
        {/* Partículas sutis */}
        <div className="absolute inset-0 overflow-hidden">
          {subtleParticles}
        </div>
        
        {/* Ambient glow elegante */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}} />
      </div>

      {/* Main container */}
      <div className="relative w-full max-w-md z-10">
        {/* Outer glow ring - mais sutil */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-cyan-500/20 rounded-3xl blur-sm opacity-60" />
        
        {/* Glass morphism container */}
        <div className="relative bg-gradient-to-br from-white/8 via-white/4 to-white/8 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          
          {/* Header with Mind77 Logo */}
          <div className="text-center mb-8">
            {/* Mind77 Logo Integration */}
            <div className="relative mx-auto w-32 h-16 mb-6">
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative">
                  <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                    MIND77
                  </div>
                  <div className="text-sm text-gray-400 tracking-[0.3em] text-center">
                    COMPANY
                  </div>
                </div>
              </div>
              
              {/* Orbiting elements mais sutis */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '30s'}}>
                <Cpu className="absolute w-3 h-3 text-cyan-400/60 -top-2 left-1/2 transform -translate-x-1/2" />
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}>
                <Zap className="absolute w-2 h-2 text-blue-400/60 -right-2 top-1/2 transform -translate-y-1/2" />
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '35s'}}>
                <CircuitBoard className="absolute w-2 h-2 text-cyan-300/60 -bottom-2 left-1/2 transform -translate-x-1/2" />
              </div>
            </div>
            
            {/* Title section */}
            <div className="space-y-3">
              <h1 className="text-3xl font-light text-white tracking-[0.2em]">
                NEURAL ACCESS
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
              <p className="text-cyan-300 text-sm font-medium tracking-wider">
                AI AUTOMATION PLATFORM
              </p>
              <p className="text-gray-400 text-xs">
                Advanced Intelligence Network
              </p>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Neural ID Field */}
            <div className="space-y-3">
              <Label className="text-gray-300 text-sm flex items-center gap-2">
                <Eye className="w-4 h-4 text-cyan-400" />
                Neural Identity
              </Label>
              <div className="relative">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="bg-white/5 border border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 rounded-xl h-12 transition-all duration-300"
                  placeholder="neural.id@mind77.com"
                  required
                />
                {aiScanning && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                  </div>
                )}
              </div>
            </div>

            {/* Access Code Field */}
            <div className="space-y-3">
              <Label className="text-gray-300 text-sm flex items-center gap-2">
                <Brain className="w-4 h-4 text-cyan-400" />
                Access Protocol
              </Label>
              <div className="relative">
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="bg-white/5 border border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 rounded-xl h-12 transition-all duration-300"
                  placeholder="•••••••••••••••"
                  required
                />
                {aiScanning && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
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
                className="border-white/30 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
              />
              <Label htmlFor="neural-persist" className="text-gray-300 text-sm">
                Maintain neural link persistence
              </Label>
            </div>

            {/* Connection Button */}
            <Button
              type="submit"
              disabled={isConnecting}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 h-14 relative overflow-hidden group"
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
                <div className="text-cyan-400 text-sm">
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
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(connectionProgress, 100)}%` }}
                  />
                </div>
              </div>
              
              <div className="flex justify-center space-x-6 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-gray-400">Quantum Core</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}} />
                  <span className="text-gray-400">Neural Net</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '0.6s'}} />
                  <span className="text-gray-400">AI Engine</span>
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
          <div className="flex justify-center space-x-1">
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60" />
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '0.2s'}} />
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '0.4s'}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralLogin;