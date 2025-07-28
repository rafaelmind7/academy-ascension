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
    
    setTimeout(() => {
      onLogin();
    }, 3000);
  };

  const renderCircuits = () => {
    const circuits = [];
    const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const height = typeof window !== 'undefined' ? window.innerHeight : 1080;
    
    for (let i = 0; i < 15; i++) {
      const startX = Math.random() * width;
      const startY = Math.random() * height;
      const isHorizontal = Math.random() > 0.5;
      
      const endX = isHorizontal ? startX + 100 + Math.random() * 200 : startX;
      const endY = isHorizontal ? startY : startY + 100 + Math.random() * 200;
      
      circuits.push(
        <g key={`circuit-${i}`}>
          <line
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            className={`circuit-line ${Math.random() > 0.6 ? 'energy-pulse' : 'circuit-glow'}`}
            style={{ animationDelay: `${Math.random() * 3}s` }}
          />
          <circle
            cx={startX}
            cy={startY}
            r="2"
            className="circuit-node"
          />
          <circle
            cx={endX}
            cy={endY}
            r="2"
            className="circuit-node"
          />
        </g>
      );
    }
    
    for (let i = 0; i < 25; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      
      circuits.push(
        <circle
          key={`node-${i}`}
          cx={x}
          cy={y}
          r="1.5"
          className="circuit-node energy-pulse"
          style={{ animationDelay: `${Math.random() * 4}s` }}
        />
      );
    }
    
    return circuits;
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Neural Circuits Background */}
      <div className="neural-circuits">
        <svg className="absolute inset-0 w-full h-full">
          {renderCircuits()}
        </svg>
      </div>

      {/* Welcome Message */}
      <div className="welcome-header">
        <h1 className="welcome-title">Welcome to the AI Automation Platform</h1>
        <p className="welcome-subtitle">Mind77 Neural Academy</p>
      </div>

      {/* Login Form */}
      <div className="login-container">
        <div className="electric-border">
          <div className="form-content">
            <div className="text-center mb-6">
              <div className="mx-auto w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-3">
                <Brain className="w-6 h-6 text-cyan-400 pulse-glow" />
              </div>
              <h2 className="text-lg font-semibold text-white mb-1">Neural Access Portal</h2>
              <p className="text-gray-400 text-sm">Authenticate to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-3">
                <div>
                  <Label htmlFor="email" className="text-gray-300 text-sm">
                    Neural Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 bg-black/50 border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
                    placeholder="neural.access@mind77.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-gray-300 text-sm">
                    Access Code
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 bg-black/50 border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="keep-connection"
                  checked={keepConnection}
                  onCheckedChange={(checked) => setKeepConnection(checked === true)}
                  className="border-cyan-500/30 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                />
                <Label htmlFor="keep-connection" className="text-gray-300 text-sm">
                  Maintain neural connection
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isConnecting}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2.5 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50"
              >
                {isConnecting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Connecting to Neural Network...</span>
                  </div>
                ) : (
                  "Access Neural Academy"
                )}
              </Button>
            </form>

            {isConnecting && (
              <div className="mt-4 text-center">
                <div className="text-cyan-400 text-sm animate-pulse">
                  Establishing neural connection...
                </div>
                <div className="mt-2 bg-gray-800 rounded-full h-1 overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full animate-pulse w-full" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralLogin;