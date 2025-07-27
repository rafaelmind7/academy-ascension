import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Loader2, Zap, Shield, Cpu } from "lucide-react";

interface NeuralLoginProps {
  onLogin: () => void;
}

const NeuralLogin: React.FC<NeuralLoginProps> = ({ onLogin }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionProgress, setConnectionProgress] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepConnection, setKeepConnection] = useState(false);
  const [neuralsActivated, setNeuralsActivated] = useState(false);

  // Efeito de ativação neural ao carregar
  useEffect(() => {
    const timer = setTimeout(() => setNeuralsActivated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConnecting(true);
    
    // Simular progress de conexão neural realista
    const progressInterval = setInterval(() => {
      setConnectionProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLogin(), 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);
  };

  // Partículas neurais mais sofisticadas
  const neuralParticles = Array.from({ length: 30 }, (_, i) => (
    <div
      key={i}
      className={`absolute rounded-full opacity-40 animate-particle-float ${
        i % 3 === 0 ? 'w-1 h-1 bg-primary' : 
        i % 3 === 1 ? 'w-0.5 h-0.5 bg-primary-glow' : 
        'w-1.5 h-1.5 bg-primary/60'
      }`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${4 + Math.random() * 4}s`,
      }}
    />
  ));

  // Linhas de circuito neural
  const circuitLines = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className="absolute bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-20"
      style={{
        width: `${40 + Math.random() * 60}%`,
        height: '1px',
        left: `${Math.random() * 50}%`,
        top: `${Math.random() * 100}%`,
        transform: `rotate(${Math.random() * 180}deg)`,
        animation: `data-stream ${3 + Math.random() * 4}s linear infinite`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    />
  ));

  // Status messages neurais
  const getConnectionStatus = () => {
    if (connectionProgress < 20) return "Inicializando protocolos neurais...";
    if (connectionProgress < 40) return "Estabelecendo túnel quântico...";
    if (connectionProgress < 60) return "Autenticando assinatura neural...";
    if (connectionProgress < 80) return "Sincronizando com Mind77 Core...";
    if (connectionProgress < 95) return "Ativando interface cognitiva...";
    return "Conexão neural estabelecida!";
  };

  return (
    <div className="min-h-screen bg-gradient-neural relative overflow-hidden flex items-center justify-center p-4">
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Partículas neurais */}
        {neuralParticles}
        
        {/* Linhas de circuito */}
        {circuitLines}
        
        {/* Grid neural de fundo */}
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `
                 radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
                 radial-gradient(circle at 75% 75%, hsl(var(--primary)) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px, 30px 30px'
             }} 
        />
        
        {/* Efeito de scanner neural */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse absolute left-1/4" />
          <div className="h-full w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse absolute right-1/3" 
               style={{animationDelay: '1s'}} />
        </div>
      </div>

      {/* Main Login Card */}
      <div className={`relative w-full max-w-md transform transition-all duration-1000 ${
        neuralsActivated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        
        {/* Glow outer ring */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-2xl opacity-30 blur-sm animate-pulse-glow" />
        
        {/* Glass morphism card */}
        <div className="relative bg-gradient-glass backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-neural">
          
          {/* Neural header */}
          <div className="text-center mb-8">
            {/* Logo container com efeitos */}
            <div className="relative mx-auto w-20 h-20 mb-6">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse-glow" />
              <div className="absolute inset-2 bg-primary/10 rounded-full animate-spin" style={{animationDuration: '8s'}} />
              <div className="relative w-full h-full bg-primary/30 rounded-full flex items-center justify-center">
                <Brain className="w-10 h-10 text-primary animate-pulse-glow" />
              </div>
              {/* Orbiting particles */}
              <div className="absolute inset-0">
                <Zap className="absolute w-3 h-3 text-primary-glow animate-spin" 
                     style={{
                       top: '10%', 
                       left: '85%',
                       animationDuration: '3s'
                     }} />
                <Shield className="absolute w-2 h-2 text-primary animate-spin" 
                       style={{
                         bottom: '15%', 
                         right: '90%',
                         animationDuration: '4s',
                         animationDirection: 'reverse'
                       }} />
                <Cpu className="absolute w-2.5 h-2.5 text-primary-glow animate-bounce" 
                     style={{
                       top: '85%', 
                       left: '15%',
                       animationDuration: '2s'
                     }} />
              </div>
            </div>
            
            {/* Títulos neurais */}
            <h1 className="text-3xl font-bold text-white mb-2 tracking-wider">
              NEURAL ACCESS
            </h1>
            <p className="text-primary-glow text-lg font-medium mb-1">
              PORTAL
            </p>
            <p className="text-white/70 text-sm">
              Conecte-se à rede de automação Mind77
            </p>
          </div>

          {/* Formulário neural */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              {/* Email field */}
              <div className="relative">
                <Label htmlFor="email" className="text-white/90 text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Neural ID
                </Label>
                <div className="relative mt-2">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-primary focus:shadow-glow transition-all duration-300 h-12 pl-4 pr-12"
                    placeholder="neural.id@mind77.com"
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Password field */}
              <div className="relative">
                <Label htmlFor="password" className="text-white/90 text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                  Código de Acesso Neural
                </Label>
                <div className="relative mt-2">
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-primary focus:shadow-glow transition-all duration-300 h-12 pl-4 pr-12"
                    placeholder="••••••••••••"
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.3s'}} />
                  </div>
                </div>
              </div>
            </div>

            {/* Checkbox neural */}
            <div className="flex items-center space-x-3 py-2">
              <Checkbox
                id="keep-connection"
                checked={keepConnection}
                onCheckedChange={(checked) => setKeepConnection(checked === true)}
                className="border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary transition-all duration-300"
              />
              <Label htmlFor="keep-connection" className="text-white/90 text-sm flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}} />
                Manter conexão neural ativa
              </Label>
            </div>

            {/* Botão de conexão neural */}
            <Button
              type="submit"
              disabled={isConnecting}
              className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white font-bold py-4 rounded-xl transition-all duration-500 hover:shadow-glow hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group h-14"
            >
              {/* Efeito de scanning interno */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              
              {isConnecting ? (
                <div className="flex items-center justify-center space-x-3">
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span className="text-lg">INICIANDO CONEXÃO NEURAL</span>
                </div>
              ) : (
                <span className="text-lg tracking-wider">CONECTAR À REDE MIND77</span>
              )}
            </Button>
          </form>

          {/* Neural connection status */}
          {isConnecting && (
            <div className="mt-8 space-y-4">
              {/* Status text */}
              <div className="text-center">
                <div className="text-primary text-sm font-medium animate-pulse mb-2">
                  {getConnectionStatus()}
                </div>
                <div className="text-white/60 text-xs">
                  Progresso: {Math.round(connectionProgress)}%
                </div>
              </div>
              
              {/* Progress bar neural */}
              <div className="relative">
                <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full transition-all duration-500 relative"
                    style={{ width: `${Math.min(connectionProgress, 100)}%` }}
                  >
                    {/* Efeito de scanning na progress bar */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
                  </div>
                </div>
                
                {/* Particles na progress bar */}
                <div className="absolute -top-1 left-0 w-full h-4 overflow-hidden">
                  {connectionProgress > 10 && (
                    <div 
                      className="absolute w-1 h-1 bg-primary rounded-full animate-bounce"
                      style={{ 
                        left: `${Math.min(connectionProgress, 95)}%`,
                        animationDuration: '0.5s'
                      }}
                    />
                  )}
                </div>
              </div>
              
              {/* Neural activity indicators */}
              <div className="flex justify-center space-x-4 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-white/60 text-xs">CPU Neural</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse" style={{animationDelay: '0.3s'}} />
                  <span className="text-white/60 text-xs">Quantum Link</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.6s'}} />
                  <span className="text-white/60 text-xs">Mind77 Core</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer neural */}
        <div className="text-center mt-6">
          <p className="text-white/40 text-xs tracking-wider">
            POWERED BY MIND77 AI ARCHITECTURE
          </p>
          <div className="flex justify-center items-center space-x-1 mt-2">
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralLogin;