import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes and connections
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      energy: number;
      pulsePhase: number;
    }> = [];

    const connections: Array<{
      from: number;
      to: number;
      strength: number;
      energy: number;
      flow: number;
    }> = [];

    // Initialize nodes
    const nodeCount = 150;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 1,
        energy: Math.random(),
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120 && Math.random() < 0.1) {
          connections.push({
            from: i,
            to: j,
            strength: Math.random() * 0.8 + 0.2,
            energy: Math.random(),
            flow: Math.random()
          });
        }
      }
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.016; // ~60fps
      
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections
      connections.forEach((connection, index) => {
        const fromNode = nodes[connection.from];
        const toNode = nodes[connection.to];
        
        if (!fromNode || !toNode) return;

        // Update energy flow
        connection.energy += (Math.sin(time * 2 + index * 0.1) * 0.5 + 0.5) * 0.02;
        connection.flow = (Math.sin(time * 3 + index * 0.2) * 0.5 + 0.5);
        
        const energyLevel = connection.energy * connection.strength;
        const flowIntensity = connection.flow;
        
        // Draw connection line with energy flow
        const gradient = ctx.createLinearGradient(fromNode.x, fromNode.y, toNode.x, toNode.y);
        const primaryColor = `hsla(188, 95%, ${43 + energyLevel * 20}%, ${0.3 + energyLevel * 0.7})`;
        const secondaryColor = `hsla(188, 95%, ${60 + flowIntensity * 15}%, ${0.1 + flowIntensity * 0.4})`;
        
        gradient.addColorStop(0, primaryColor);
        gradient.addColorStop(0.5, secondaryColor);
        gradient.addColorStop(1, primaryColor);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.5 + energyLevel * 2;
        ctx.shadowColor = `hsl(188, 95%, ${43 + energyLevel * 20}%)`;
        ctx.shadowBlur = 3 + energyLevel * 8;
        
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();
        
        // Draw energy particles flowing along connections
        if (Math.random() < 0.1 + energyLevel * 0.2) {
          const progress = (time * 2 + index) % 1;
          const particleX = fromNode.x + (toNode.x - fromNode.x) * progress;
          const particleY = fromNode.y + (toNode.y - fromNode.y) * progress;
          
          ctx.shadowBlur = 10;
          ctx.fillStyle = `hsl(188, 95%, ${70 + flowIntensity * 20}%)`;
          ctx.beginPath();
          ctx.arc(particleX, particleY, 1 + energyLevel, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Update and draw nodes
      nodes.forEach((node, index) => {
        // Update node movement
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Enhanced neural breathing effect
        node.pulsePhase += 0.05 + node.energy * 0.1;
        const pulseIntensity = Math.sin(node.pulsePhase) * 0.5 + 0.5;
        const neuralBreathing = Math.sin(time * 0.8) * 0.2 + 0.8; // Global neural sync
        node.energy = (0.3 + Math.sin(time * 1.5 + index * 0.1) * 0.3 + pulseIntensity * 0.4) * neuralBreathing;
        
        // Ultra-realistic node rendering with depth
        const nodeRadius = node.radius + pulseIntensity * 2;
        const brightness = 40 + node.energy * 40;
        const hueShift = Math.sin(index * 0.1 + time * 0.5) * 15; // Subtle color variations
        
        // Outer glow (atmospheric effect)
        ctx.shadowColor = `hsl(${188 + hueShift}, 95%, ${brightness * 0.8}%)`;
        ctx.shadowBlur = 20 + pulseIntensity * 18;
        ctx.fillStyle = `hsla(${188 + hueShift}, 95%, ${brightness}%, ${0.3 + node.energy * 0.4})`;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius * 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Main node body
        ctx.shadowBlur = 12 + pulseIntensity * 8;
        ctx.fillStyle = `hsla(${188 + hueShift}, 95%, ${brightness + 10}%, ${0.7 + node.energy * 0.3})`;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Bright core (neural center)
        ctx.shadowBlur = 20;
        ctx.fillStyle = `hsl(${188 + hueShift}, 95%, ${80 + pulseIntensity * 15}%)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius * 0.4, 0, Math.PI * 2);
        ctx.fill();
        
        // Ultra-bright center point
        if (node.energy > 0.8) {
          ctx.shadowBlur = 25;
          ctx.fillStyle = `hsl(${188 + hueShift}, 100%, 95%)`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeRadius * 0.15, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Reset shadow
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full z-[1]"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.03) 0%, rgba(0,0,0,0.98) 70%)' }}
      />
      
      {/* SVG Circuit Overlay for additional realism */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="fixed inset-0 w-full h-full z-[2] pointer-events-none"
      >
        <svg className="w-full h-full" style={{ filter: 'drop-shadow(0 0 3px hsl(188 95% 43%))' }}>
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(188 95% 43%)" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(188 95% 60%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(188 95% 43%)" stopOpacity="0.6" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Circuit patterns */}
          {Array.from({ length: 20 }, (_, i) => (
            <g key={i}>
              <motion.line
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#circuitGradient)"
                strokeWidth="0.5"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.8, 0.4] }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </g>
          ))}
        </svg>
      </motion.div>
    </>
  );
};

export default AnimatedBackground;