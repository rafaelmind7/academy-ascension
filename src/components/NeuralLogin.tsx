import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Loader2, Cpu, Zap, CircuitBoard, Eye } from "lucide-react";

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

  // Ativar scanning AI ao focar campos
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

  // Floating AI particles
  const aiParticles = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      }}
    />
  ));

  // Neural network lines
  const neuralConnections = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className="absolute opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${50 + Math.random() * 100}px`,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #0cc0df, transparent)',
        transform: `rotate(${Math.random() * 360}deg)`,
        animation: `neural-pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    />
  ));

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Sophisticated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
        {/* AI Grid pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(12, 192, 223, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(12, 192, 223, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Floating particles */}
        {aiParticles}
        
        {/* Neural connections */}
        {neuralConnections}
        
        {/* Ambient glow spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      {/* Main container */}
      <div className="relative w-full max-w-md z-10">
        {/* Outer glow ring - muito mais sutil */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-cyan-500/30 rounded-3xl blur-sm opacity-75" />
        
        {/* Glass morphism container */}
        <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          
          {/* AI Header Section */}
          <div className="text-center mb-8">
            {/* Logo Area - SUBSTITUA POR SUA LOGO */}
            <div className="relative mx-auto w-24 h-24 mb-6">
              {/* Placeholder para logo - você vai substituir */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 backdrop-blur-sm border border-cyan-400/30" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 flex items-center justify-center">
                <Brain className="w-10 h-10 text-cyan-400" />
              </div>
              
              {/* Orbiting AI elements */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '12s'}}>
                <Cpu className="absolute w-4 h-4 text-cyan-400 -top-1 left-1/2 transform -translate-x-1/2" />
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}>
                <Zap className="absolute w-3 h-3 text-blue-400 -right-1 top-1/2 transform -translate-y-1/2" />
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s'}}>
                <CircuitBoard className="absolute w-3 h-3 text-cyan-300 -bottom-1 left-1/2 transform -translate-x-1/2" />
              </div>
            </div>
            
            {/* Sophisticated title */}
            <div className="space-y-2">
              <h1 className="text-3xl font-light text-white tracking-[0.2em]">
                NEURAL ACCESS
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
              <p className="text-cyan-300 text-sm font-medium tracking-wider">
                MIND77 AI PLATFORM
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
              {/* Scanning effect */}
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
              
              {/* Elegant progress bar */}
              <div className="relative">
                <div className="bg-white/10 rounded-full h-1 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(connectionProgress, 100)}%` }}
                  />
                </div>
              </div>
              
              {/* Status indicators */}
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