import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-10 overflow-hidden bg-slate-950">
      {/* Ultra-realistic Neural Circuit Grid */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 200 200" 
        preserveAspectRatio="none"
      >
        {/* Main Circuit Pathways */}
        <g className="neural-grid">
          {/* Horizontal Primary Circuits */}
          <line x1="0" y1="40" x2="200" y2="40" stroke="url(#primaryCircuit)" strokeWidth="0.3" className="circuit-main" />
          <line x1="0" y1="80" x2="200" y2="80" stroke="url(#primaryCircuit)" strokeWidth="0.3" className="circuit-main" style={{animationDelay: '1s'}} />
          <line x1="0" y1="120" x2="200" y2="120" stroke="url(#primaryCircuit)" strokeWidth="0.3" className="circuit-main" style={{animationDelay: '2s'}} />
          <line x1="0" y1="160" x2="200" y2="160" stroke="url(#primaryCircuit)" strokeWidth="0.3" className="circuit-main" style={{animationDelay: '3s'}} />
          
          {/* Vertical Primary Circuits */}
          <line x1="40" y1="0" x2="40" y2="200" stroke="url(#primaryCircuit)" strokeWidth="0.3" className="circuit-main" style={{animationDelay: '0.5s'}} />
          <line x1="80" y1="0" x2="80" y2="200" stroke="url(#primaryCircuit)" strokeWidth="0.3" className="circuit-main" style={{animationDelay: '1.5s'}} />
          <line x1="120" y1="0" x2="120" y2="200" stroke="url(#primaryCircuit)" strokeWidth="0.3" className="circuit-main" style={{animationDelay: '2.5s'}} />
          <line x1="160" y1="0" x2="160" y2="200" stroke="url(#primaryCircuit)" strokeWidth="0.3" className="circuit-main" style={{animationDelay: '3.5s'}} />
          
          {/* Secondary Circuit Web */}
          {[...Array(12)].map((_, i) => (
            <g key={i}>
              <line 
                x1={20 + i * 15} 
                y1="20" 
                x2={30 + i * 15} 
                y2="180" 
                stroke="url(#secondaryCircuit)" 
                strokeWidth="0.15" 
                className="circuit-secondary" 
                style={{animationDelay: `${i * 0.3}s`}} 
              />
              <line 
                x1="20" 
                y1={20 + i * 15} 
                x2="180" 
                y2={30 + i * 15} 
                stroke="url(#secondaryCircuit)" 
                strokeWidth="0.15" 
                className="circuit-secondary" 
                style={{animationDelay: `${i * 0.4}s`}} 
              />
            </g>
          ))}
        </g>

        {/* Neural Junction Nodes */}
        <g className="neural-nodes">
          {/* Primary Nodes */}
          <circle cx="40" cy="40" r="1.2" fill="#0cc0df" className="node-primary" />
          <circle cx="80" cy="80" r="1.2" fill="#3b82f6" className="node-primary" style={{animationDelay: '1s'}} />
          <circle cx="120" cy="120" r="1.2" fill="#06b6d4" className="node-primary" style={{animationDelay: '2s'}} />
          <circle cx="160" cy="160" r="1.2" fill="#0cc0df" className="node-primary" style={{animationDelay: '3s'}} />
          
          {/* Secondary Nodes */}
          {[...Array(16)].map((_, i) => (
            <circle 
              key={i}
              cx={60 + (i % 4) * 40} 
              cy={60 + Math.floor(i / 4) * 40} 
              r="0.8" 
              fill={i % 3 === 0 ? "#0cc0df" : i % 3 === 1 ? "#3b82f6" : "#06b6d4"} 
              className="node-secondary" 
              style={{animationDelay: `${i * 0.2}s`}} 
            />
          ))}
          
          {/* Micro Nodes */}
          {[...Array(32)].map((_, i) => (
            <circle 
              key={i}
              cx={30 + (i % 8) * 20} 
              cy={30 + Math.floor(i / 8) * 30} 
              r="0.4" 
              fill="#0cc0df" 
              className="node-micro" 
              style={{animationDelay: `${i * 0.1}s`}} 
            />
          ))}
        </g>

        {/* Energy Pulse Waves */}
        <g className="energy-waves">
          {[...Array(4)].map((_, i) => (
            <circle 
              key={i}
              cx="100" 
              cy="100" 
              r={20 + i * 30}
              fill="none" 
              stroke="url(#pulseWave)" 
              strokeWidth="0.5" 
              className="pulse-ring" 
              style={{animationDelay: `${i * 0.8}s`}} 
            />
          ))}
        </g>

        <defs>
          {/* Primary Circuit Gradient */}
          <linearGradient id="primaryCircuit" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0cc0df" stopOpacity="0" />
            <stop offset="30%" stopColor="#0cc0df" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          
          {/* Secondary Circuit Gradient */}
          <linearGradient id="secondaryCircuit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0cc0df" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          
          {/* Pulse Wave Gradient */}
          <linearGradient id="pulseWave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0cc0df" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Atmospheric Neural Particles */}
      <div className="absolute inset-0 neural-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full neural-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;