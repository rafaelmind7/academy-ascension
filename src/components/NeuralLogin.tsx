import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Loader2 } from "lucide-react";

interface NeuralLoginProps {
  onLogin: () => void;
}

const NeuralLogin: React.FC<NeuralLoginProps> = ({ onLogin }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepConnection, setKeepConnection] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConnecting(true);
    
    // Simular conexão neural
    setTimeout(() => {
      onLogin();
    }, 3000);
  };

  // Partículas animadas
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-particle-float"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
      }}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-neural relative overflow-hidden flex items-center justify-center p-4">
      {/* Partículas animadas */}
      <div className="absolute inset-0 overflow-hidden">
        {particles}
      </div>

      {/* Glass morphism card */}
      <div className="relative w-full max-w-md">
        <div className="bg-gradient-glass backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-neural">
          {/* Logo e título */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-primary animate-pulse-glow" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Mind77</h1>
            <p className="text-white/70">Neural Academy Platform</p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-white/90">
                  Email Neural
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                  placeholder="neural.access@mind77.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-white/90">
                  Código de Acesso
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="keep-connection"
                checked={keepConnection}
                onCheckedChange={(checked) => setKeepConnection(checked === true)}
                className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label htmlFor="keep-connection" className="text-white/90 text-sm">
                Manter conexão ativa
              </Label>
            </div>

            {/* Botão de login */}
            <Button
              type="submit"
              disabled={isConnecting}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-glow hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isConnecting ? (
                <div className="flex items-center justify-center space-x-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Conectando à Rede Neural...</span>
                </div>
              ) : (
                "Acessar Neural Academy"
              )}
            </Button>
          </form>

          {/* Status de conexão */}
          {isConnecting && (
            <div className="mt-6 text-center">
              <div className="text-primary text-sm animate-pulse">
                Estabelecendo conexão neural...
              </div>
              <div className="mt-2 bg-white/10 rounded-full h-1 overflow-hidden">
                <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: "100%" }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NeuralLogin;