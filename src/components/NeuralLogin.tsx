import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Cpu, Zap, CircuitBoard, Eye, Brain } from "lucide-react";

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
  const [networkFormed, setNetworkFormed] = useState(false);

  useEffect(() => {
    // Simular formação da rede neural ao carregar
    const timer = setTimeout(() => setNetworkFormed(true), 1000);
    return () => clearTimeout(timer);
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

  // Nós neurais que formam a estrutura cerebral
  const neuralNodes = [
    // Região do cérebro (lado esquerdo da logo)
    { x: 25, y: 30, size: 3, delay: 0, type: 'brain' },
    { x: 35, y: 25, size: 2, delay: 0.5, type: 'brain' },
    { x: 45, y: 35, size: 4, delay: 1, type: 'brain' },
    { x: 30, y: 45, size: 2, delay: 1.5, type: 'brain' },
    { x: 40, y: 55, size: 3, delay: 2, type: 'brain' },
    { x: 20, y: 40, size: 2, delay: 2.5, type: 'brain' },
    { x: 50, y: 45, size: 2, delay: 3, type: 'brain' },
    { x: 35, y: 60, size: 3, delay: 3.5, type: 'brain' },
    
    // Região da lâmpada (lado direito da logo)
    { x: 65, y: 35, size: 3, delay: 4, type: 'bulb' },
    { x: 75, y: 30, size: 2, delay: 4.5, type: 'bulb' },
    { x: 70, y: 45, size: 4, delay: 5, type: 'bulb' },
    { x: 80, y: 40, size: 2, delay: 5.5, type: 'bulb' },
    { x: 75, y: 55, size: 3, delay: 6, type: 'bulb' },
    
    // Nós de conexão central
    { x: 55, y: 40, size: 5, delay: 6.5, type: 'core' },
    { x: 50, y: 30, size: 3, delay: 7, type: 'core' },
    { x: 60, y: 50, size: 3, delay: 7.5, type: 'core' },
    
    // Nós de dispersão (representando a rede se expandindo)
    { x: 15, y: 20, size: 1, delay: 8, type: 'expansion' },
    { x: 85, y: 25, size: 1, delay: 8.5, type: 'expansion' },
    { x: 10, y: 60, size: 1, delay: 9, type: 'expansion' },
    { x: 90, y: 65, size: 1, delay: 9.5, type: 'expansion' },
    { x: 50, y: 15, size: 1, delay: 10, type: 'expansion' },
    { x: 45, y: 75, size: 1, delay: 10.5, type: 'expansion' }
  ];

  // Conexões neurais que vão se formando
  const neuralConnections = [
    // Conexões internas do cérebro
    { from: 0, to: 1, delay: 1 },
    { from: 1, to: 2, delay: 1.5 },
    { from: 2, to: 3, delay: 2 },
    { from: 3, to: 4, delay: 2.5 },
    { from: 0, to: 5, delay: 3 },
    { from: 2, to: 6, delay: 3.5 },
    { from: 4, to: 7, delay: 4 },
    
    // Conexões da lâmpada
    { from: 8, to: 9, delay: 5 },
    { from: 8, to: 10, delay: 5.5 },
    { from: 10, to: 11, delay: 6 },
    { from: 10, to: 12, delay: 6.5 },
    
    // Conexões centrais (cérebro para lâmpada)
    { from: 2, to: 13, delay: 7 },
    { from: 13, to: 8, delay: 7.5 },
    { from: 6, to: 14, delay: 8 },
    { from: 14, to: 10, delay: 8.5 },
    { from: 4, to: 15, delay: 9 },
    { from: 15, to: 12, delay: 9.5 },
    
    // Conexões de expansão
    { from: 1, to: 16, delay: 10 },
    { from: 9, to: 17, delay: 10.5 },
    { from: 5, to: 18, delay: 11 },
    { from: 11, to: 19, delay: 11.5 },
    { from: 14, to: 20, delay: 12 },
    { from: 15, to: 21, delay: 12.5 }
  ];

  // Partículas de dados fluindo pelas conexões
  const dataParticles = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 animate-data-flow"
      style={{
        left: `${20 + Math.random() * 60}%`,
        top: `${20 + Math.random() * 60}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
      }}
    />
  ));

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Background with Neural Network Formation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        
        {/* Base tech grid - mais sutil */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(12, 192, 223, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(12, 192, 223, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Neural Network Formation SVG */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Conexões neurais */}
          {neuralConnections.map((connection, index) => {
            const fromNode = neuralNodes[connection.from];
            const toNode = neuralNodes[connection.to];
            return (
              <line
                key={index}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="url(#connectionGradient)"
                strokeWidth="0.3"
                opacity="0"
                className="neural-connection-line"
                style={{
                  animation: `neural-line-form 1s ease-out ${connection.delay}s forwards`
                }}
              />
            );
          })}
          
          {/* Nós neurais */}
          {neuralNodes.map((node, index) => (
            <g key={index}>
              {/* Glow externo */}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size + 1}
                fill="url(#nodeGlow)"
                opacity="0"
                className="neural-node-glow"
                style={{
                  animation: `neural-node-form 0.8s ease-out ${node.delay}s forwards`
                }}
              />
              {/* Nó principal */}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size}
                fill={
                  node.type === 'brain' ? '#0cc0df' :
                  node.type === 'bulb' ? '#3b82f6' :
                  node.type === 'core' ? '#06b6d4' :
                  '#6366f1'
                }
                opacity="0"
                className="neural-node"
                style={{
                  animation: `neural-node-form 0.5s ease-out ${node.delay}s forwards, neural-pulse 2s ease-in-out ${node.delay + 1}s infinite`
                }}
              />
              {/* Pulso interno */}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size * 0.6}
                fill="rgba(255, 255, 255, 0.8)"
                opacity="0"
                className="neural-node-core"
                style={{
                  animation: `neural-core-pulse 1.5s ease-in-out ${node.delay + 0.5}s infinite`
                }}
              />
            </g>
          ))}
          
          {/* Gradientes para as conexões e nós */}
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
        
        {/* Partículas de dados fluindo */}
        <div className="absolute inset-0 overflow-hidden">
          {dataParticles}
        </div>
        
        {/* Efeito de "consciousness awakening" */}
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent opacity-50 animate-consciousness-pulse" />
        
        {/* Scanner de conexão neural */}
        <div className="absolute top-10 right-10 w-16 h-16 opacity-40">
          <div className="absolute inset-0 border border-cyan-400/40 rounded-full animate-ping" />
          <div className="absolute inset-2 border border-blue-400/30 rounded-full animate-ping" style={{animationDelay: '1s'}} />
          <Brain className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-cyan-400 animate-pulse" />
        </div>
        
        {/* Ambient neural glow */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-cyan-500/3 rounded-full blur-3xl animate-neural-breathe" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-500/3 rounded-full blur-2xl animate-neural-breathe" style={{animationDelay: '3s'}} />
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
              {/* Logo placeholder - substitua pela logo real */}
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
              
              {/* Orbiting neural elements */}
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
                {networkFormed ? "Neural Network: ONLINE" : "Establishing Neural Pathways..."}
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
                  {connectionProgress < 25 ? "Activating neural pathways..." :
                   connectionProgress < 50 ? "Synchronizing brain patterns..." :
                   connectionProgress < 75 ? "Establishing AI consciousness link..." :
                   connectionProgress < 95 ? "Finalizing Mind77 integration..." :
                   "Consciousness bridge established!"}
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
                  <span className="text-gray-400">Neural Core</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}} />
                  <span className="text-gray-400">AI Synapse</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '0.6s'}} />
                  <span className="text-gray-400">Mind77 Bridge</span>
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