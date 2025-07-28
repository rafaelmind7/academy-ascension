import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-10 overflow-hidden">
      {/* Neural Circuit Animation */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        {/* Horizontal Circuits */}
        <g className="neural-circuits">
          <line x1="0" y1="20" x2="100" y2="20" stroke="url(#circuitGradient)" strokeWidth="0.1" className="circuit-line" />
          <line x1="0" y1="40" x2="100" y2="40" stroke="url(#circuitGradient)" strokeWidth="0.1" className="circuit-line" style={{animationDelay: '1s'}} />
          <line x1="0" y1="60" x2="100" y2="60" stroke="url(#circuitGradient)" strokeWidth="0.1" className="circuit-line" style={{animationDelay: '2s'}} />
          <line x1="0" y1="80" x2="100" y2="80" stroke="url(#circuitGradient)" strokeWidth="0.1" className="circuit-line" style={{animationDelay: '3s'}} />
        </g>

        {/* Vertical Circuits */}
        <g className="neural-circuits">
          <line x1="20" y1="0" x2="20" y2="100" stroke="url(#circuitGradient)" strokeWidth="0.1" className="circuit-line" style={{animationDelay: '0.5s'}} />
          <line x1="40" y1="0" x2="40" y2="100" stroke="url(#circuitGradient)" strokeWidth="0.1" className="circuit-line" style={{animationDelay: '1.5s'}} />
          <line x1="60" y1="0" x2="60" y2="100" stroke="url(#circuitGradient)" strokeWidth="0.1" className="circuit-line" style={{animationDelay: '2.5s'}} />
          <line x1="80" y1="0" x2="80" y2="100" stroke="url(#circuitGradient)" strokeWidth="0.1" className="circuit-line" style={{animationDelay: '3.5s'}} />
        </g>

        {/* Circuit Nodes */}
        <g className="neural-nodes">
          <circle cx="20" cy="20" r="0.3" fill="#0cc0df" className="circuit-node" />
          <circle cx="40" cy="40" r="0.3" fill="#3b82f6" className="circuit-node" style={{animationDelay: '1s'}} />
          <circle cx="60" cy="60" r="0.3" fill="#06b6d4" className="circuit-node" style={{animationDelay: '2s'}} />
          <circle cx="80" cy="80" r="0.3" fill="#0cc0df" className="circuit-node" style={{animationDelay: '3s'}} />
          <circle cx="80" cy="20" r="0.3" fill="#3b82f6" className="circuit-node" style={{animationDelay: '0.5s'}} />
          <circle cx="60" cy="40" r="0.3" fill="#06b6d4" className="circuit-node" style={{animationDelay: '1.5s'}} />
          <circle cx="40" cy="60" r="0.3" fill="#0cc0df" className="circuit-node" style={{animationDelay: '2.5s'}} />
          <circle cx="20" cy="80" r="0.3" fill="#3b82f6" className="circuit-node" style={{animationDelay: '3.5s'}} />
        </g>

        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0cc0df" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-950/90" />
    </div>
  );
};

export default AnimatedBackground;