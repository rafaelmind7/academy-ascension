import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Cpu, Zap, CircuitBoard, Eye, Radar } from "lucide-react";

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

  // Matrix digital rain effect
  const matrixChars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ";
  const digitalRain = Array.from({ length: 30 }, (_, i) => (
    <div
      key={i}
      className="absolute text-cyan-400 opacity-20 text-xs font-mono animate-matrix-fall"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
      }}
    >
      {matrixChars.charAt(Math.floor(Math.random() * matrixChars.length))}
    </div>
  ));

  // Floating code snippets
  const codeSnippets = [
    "function ai()",
    "neural.connect()",
    "brain.process()",
    "quantum.sync()",
    "mind77.init()",
    "if(consciousness)",
    "while(learning)",
    "AI.evolve()",
  ];
  
  const floatingCode = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className="absolute text-blue-400/30 text-xs font-mono animate-code-float"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${6 + Math.random() * 4}s`,
      }}
    >
      {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
    </div>
  ));

  // Hexagonal tech patterns
  const hexPatterns = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className="absolute border border-cyan-400/20 rotate-0 animate-hex-rotate"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${20 + Math.random() * 40}px`,
        height: `${20 + Math.random() * 40}px`,
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${8 + Math.random() * 4}s`,
      }}
    />
  ));

  // Circuit lines
  const circuitLines = Array.from({ length: 12 }, (_, i) => (
    <div
      key={i}
      className="absolute opacity-20 animate-circuit-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${60 + Math.random() * 120}px`,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #0cc0df, transparent)',
        transform: `rotate(${Math.random() * 360}deg)`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
      }}
    />
  ));

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Ultra Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-40 animate-grid-scan"
          style={{
            backgroundImage: `
              linear-gradient(rgba(12, 192, 223, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(12, 192, 223, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 60px 60px, 20px 20px, 20px 20px'
          }}
        />
        
        {/* Digital matrix rain */}
        <div className="absolute inset-0 overflow-hidden">
          {digitalRain}
        </div>
        
        {/* Floating code snippets */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingCode}
        </div>
        
        {/* Hexagonal patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {hexPatterns}
        </div>
        
        {/* Circuit lines */}
        <div className="absolute inset-0 overflow-hidden">
          {circuitLines}
        </div>
        
        {/* Radar scanning effect */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-30">
          <div className="absolute inset-0 border border-cyan-400/30 rounded-full animate-ping" />
          <div className="absolute inset-2 border border-blue-400/20 rounded-full animate-ping" style={{animationDelay: '1s'}} />
          <div className="absolute inset-4 border border-cyan-300/20 rounded-full animate-ping" style={{animationDelay: '2s'}} />
          <Radar className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-cyan-400 animate-spin" style={{animationDuration: '4s'}} />
        </div>
        
        {/* Holographic data streams */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-data-stream" />
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-data-stream" style={{animationDelay: '2s'}} />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent animate-data-stream" style={{animationDelay: '4s'}} />
        </div>
        
        {/* Ambient glow spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-glow-pulse" style={{animationDelay: '3s'}} />
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-purple-500/5 rounded-full blur-xl animate-glow-pulse" style={{animationDelay: '6s'}} />
        
        {/* Vertical tech lines */}
        <div className="absolute left-10 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse" />
        <div className="absolute right-20 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse" style={{animationDelay: '1s'}} />
        
        {/* Corner tech elements */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400/50" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50" />
      </div>

      {/* Main container */}
      <div className="relative w-full max-w-md z-10">
        {/* Outer glow ring */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-cyan-500/30 rounded-3xl blur-sm opacity-75" />
        
        {/* Glass morphism container */}
        <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          
          {/* Header with Mind77 Logo */}
          <div className="text-center mb-8">
            {/* Mind77 Logo Integration */}
            <div className="relative mx-auto w-32 h-16 mb-6">
              {/* Base64 da sua logo - substitua pela logo real */}
              <div className="w-full h-full flex items-center justify-center">
                {/* SUBSTITUA por sua logo real - para agora usando um placeholder estilizado */}
                <div className="relative">
                  <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                    MIND77
                  </div>
                  <div className="text-sm text-gray-400 tracking-[0.3em] text-center">
                    COMPANY
                  </div>
                </div>
              </div>
              
              {/* Orbiting elements around logo */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                <Cpu className="absolute w-3 h-3 text-cyan-400 -top-2 left-1/2 transform -translate-x-1/2" />
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
                <Zap className="absolute w-3 h-3 text-blue-400 -right-2 top-1/2 transform -translate-y-1/2" />
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '25s'}}>
                <CircuitBoard className="absolute w-3 h-3 text-cyan-300 -bottom-2 left-1/2 transform -translate-x-1/2" />
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
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                  </div>
                )}
              </div>
            </div>

            {/* Access Code Field */}
            <div className="space-y-3">
              <Label className="text-gray-300 text-sm flex items-center gap-2">
                <CircuitBoard className="w-4 h-4 text-cyan-400" />
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
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
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