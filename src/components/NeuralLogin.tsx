diff --git a/NeuralLogin.tsx b/NeuralLogin.tsx
--- a/NeuralLogin.tsx
+++ b/NeuralLogin.tsx
@@ -0,0 +1,372 @@
+import React, { useState, useEffect, useRef } from "react";
+import { Button } from "@/components/ui/button";
+import { Input } from "@/components/ui/input";
+import { Label } from "@/components/ui/label";
+import { Checkbox } from "@/components/ui/checkbox";
+import { Brain, Loader2 } from "lucide-react";
+
+interface NeuralLoginProps {
+  onLogin: () => void;
+}
+
+const NeuralLogin: React.FC<NeuralLoginProps> = ({ onLogin }) => {
+  const [isConnecting, setIsConnecting] = useState(false);
+  const [email, setEmail] = useState("");
+  const [password, setPassword] = useState("");
+  const [keepConnection, setKeepConnection] = useState(false);
+  
+  // Animation states
+  const [showVideoIntro, setShowVideoIntro] = useState(true);
+  const [showLightning, setShowLightning] = useState(false);
+  const [showCircuits, setShowCircuits] = useState(false);
+  const [showWelcome, setShowWelcome] = useState(false);
+  const [showLoginForm, setShowLoginForm] = useState(false);
+  
+  const videoRef = useRef<HTMLVideoElement>(null);
+
+  useEffect(() => {
+    // Add intro-active class to body to hide scrollbars
+    document.body.classList.add('intro-active');
+
+    // Start the cinematic sequence
+    startCinematicSequence();
+
+    return () => {
+      document.body.classList.remove('intro-active');
+    };
+  }, []);
+
+  const startCinematicSequence = () => {
+    // Video intro for 8 seconds, then fade and trigger lightning
+    setTimeout(() => {
+      if (videoRef.current) {
+        videoRef.current.classList.add('video-fade-out');
+      }
+      
+      setTimeout(() => {
+        setShowVideoIntro(false);
+        setShowLightning(true);
+        triggerLightning();
+      }, 1000);
+    }, 8000);
+  };
+
+  const triggerLightning = () => {
+    // Lightning animation for 2 seconds
+    setTimeout(() => {
+      setShowLightning(false);
+      setShowCircuits(true);
+      
+      // Show welcome message after circuits activate
+      setTimeout(() => {
+        setShowWelcome(true);
+        
+        // Show login form after welcome message
+        setTimeout(() => {
+          setShowLoginForm(true);
+          document.body.classList.remove('intro-active');
+        }, 2000);
+      }, 1500);
+    }, 2000);
+  };
+
+  const handleSubmit = (e: React.FormEvent) => {
+    e.preventDefault();
+    setIsConnecting(true);
+    
+    // Simulate neural connection
+    setTimeout(() => {
+      onLogin();
+    }, 3000);
+  };
+
+  const generateLightningPath = (startX: number, startY: number, endX: number, endY: number) => {
+    const segments = [];
+    const numSegments = 8;
+    
+    for (let i = 0; i <= numSegments; i++) {
+      const t = i / numSegments;
+      const x = startX + (endX - startX) * t + (Math.random() - 0.5) * 50;
+      const y = startY + (endY - startY) * t + (Math.random() - 0.5) * 30;
+      segments.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
+    }
+    
+    return segments.join(' ');
+  };
+
+  const renderLightning = () => {
+    const lightningBolts = [];
+    const centerX = window.innerWidth / 2;
+    const centerY = window.innerHeight / 2;
+    
+    // Main lightning bolts
+    for (let i = 0; i < 5; i++) {
+      const angle = (i * 72) * (Math.PI / 180); // 5 bolts, 72 degrees apart
+      const endX = centerX + Math.cos(angle) * 400;
+      const endY = centerY + Math.sin(angle) * 400;
+      
+      lightningBolts.push(
+        <svg
+          key={i}
+          className="lightning-bolt lightning-strike"
+          style={{
+            position: 'absolute',
+            top: 0,
+            left: 0,
+            width: '100%',
+            height: '100%',
+            animationDelay: `${i * 0.1}s`
+          }}
+        >
+          <path
+            d={generateLightningPath(centerX, centerY, endX, endY)}
+            stroke="#00d4ff"
+            strokeWidth="3"
+            fill="none"
+            filter="url(#glow)"
+          />
+          <defs>
+            <filter id="glow">
+              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
+              <feMerge> 
+                <feMergeNode in="coloredBlur"/>
+                <feMergeNode in="SourceGraphic"/>
+              </feMerge>
+            </filter>
+          </defs>
+        </svg>
+      );
+    }
+    
+    return lightningBolts;
+  };
+
+  const renderCircuits = () => {
+    const circuits = [];
+    const width = window.innerWidth;
+    const height = window.innerHeight;
+    
+    // Generate circuit lines
+    for (let i = 0; i < 20; i++) {
+      const startX = Math.random() * width;
+      const startY = Math.random() * height;
+      const endX = Math.random() * width;
+      const endY = Math.random() * height;
+      
+      circuits.push(
+        <g key={`line-${i}`}>
+          <line
+            x1={startX}
+            y1={startY}
+            x2={endX}
+            y2={endY}
+            className={`circuit-line ${Math.random() > 0.5 ? 'energy-pulse' : 'circuit-glow'}`}
+            style={{ animationDelay: `${Math.random() * 2}s` }}
+          />
+          <circle
+            cx={startX}
+            cy={startY}
+            r="3"
+            className="circuit-node"
+            style={{ animationDelay: `${Math.random() * 2}s` }}
+          />
+          <circle
+            cx={endX}
+            cy={endY}
+            r="3"
+            className="circuit-node"
+            style={{ animationDelay: `${Math.random() * 2}s` }}
+          />
+        </g>
+      );
+    }
+    
+    // Add circuit grid pattern
+    for (let x = 0; x < width; x += 100) {
+      for (let y = 0; y < height; y += 100) {
+        if (Math.random() > 0.7) {
+          circuits.push(
+            <g key={`grid-${x}-${y}`}>
+              <line
+                x1={x}
+                y1={y}
+                x2={x + 50}
+                y2={y}
+                className="circuit-line energy-pulse"
+                style={{ animationDelay: `${Math.random() * 3}s` }}
+              />
+              <line
+                x1={x + 50}
+                y1={y}
+                x2={x + 50}
+                y2={y + 50}
+                className="circuit-line circuit-glow"
+                style={{ animationDelay: `${Math.random() * 3}s` }}
+              />
+            </g>
+          );
+        }
+      }
+    }
+    
+    return circuits;
+  };
+
+  return (
+    <>
+      {/* Video Intro */}
+      {showVideoIntro && (
+        <div className="video-intro">
+          <video
+            ref={videoRef}
+            autoPlay
+            muted
+            playsInline
+            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
+          >
+            <source src="/videos/veo3-intro.mp4" type="video/mp4" />
+            {/* Fallback gradient background if video not available */}
+            <div className="w-full h-full bg-gradient-to-b from-black via-blue-900 to-cyan-500"></div>
+          </video>
+        </div>
+      )}
+
+      {/* Lightning Animation */}
+      {showLightning && (
+        <div className="lightning-container">
+          {renderLightning()}
+        </div>
+      )}
+
+      {/* Neural Circuits Background */}
+      {showCircuits && (
+        <div className={`neural-circuits ${showCircuits ? 'active' : ''}`}>
+          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
+            {renderCircuits()}
+          </svg>
+        </div>
+      )}
+
+      {/* Welcome Message */}
+      {showWelcome && (
+        <div className={`welcome-message ${showWelcome ? 'visible' : ''}`}>
+          <h1 className="welcome-title">Welcome to the AI Automation Platform</h1>
+          <p className="welcome-subtitle">Mind77 Neural Academy</p>
+        </div>
+      )}
+
+      {/* Login Form */}
+      {showLoginForm && (
+        <div className={`neural-login-form ${showLoginForm ? 'visible' : ''}`}>
+          <div className="electrical-border">
+            <div className="w-full max-w-md p-8">
+              {/* Logo e título */}
+              <div className="text-center mb-8">
+                <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
+                  <Brain className="w-8 h-8 text-primary animate-pulse-glow" />
+                </div>
+                <h2 className="text-xl font-bold text-white mb-2">Neural Access Portal</h2>
+                <p className="text-white/70 text-sm">Authenticate to continue</p>
+              </div>
+
+              {/* Formulário */}
+              <form onSubmit={handleSubmit} className="space-y-6">
+                <div className="space-y-4">
+                  <div>
+                    <Label htmlFor="email" className="text-white/90 text-sm">
+                      Neural Email
+                    </Label>
+                    <Input
+                      id="email"
+                      type="email"
+                      value={email}
+                      onChange={(e) => setEmail(e.target.value)}
+                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary mt-2"
+                      placeholder="neural.access@mind77.com"
+                      required
+                    />
+                  </div>
+
+                  <div>
+                    <Label htmlFor="password" className="text-white/90 text-sm">
+                      Access Code
+                    </Label>
+                    <Input
+                      id="password"
+                      type="password"
+                      value={password}
+                      onChange={(e) => setPassword(e.target.value)}
+                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary mt-2"
+                      placeholder="••••••••"
+                      required
+                    />
+                  </div>
+                </div>
+
+                {/* Checkbox */}
+                <div className="flex items-center space-x-2">
+                  <Checkbox
+                    id="keep-connection"
+                    checked={keepConnection}
+                    onCheckedChange={(checked) => setKeepConnection(checked === true)}
+                    className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
+                  />
+                  <Label htmlFor="keep-connection" className="text-white/90 text-sm">
+                    Maintain neural connection
+                  </Label>
+                </div>
+
+                {/* Botão de login */}
+                <Button
+                  type="submit"
+                  disabled={isConnecting}
+                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-glow hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
+                >
+                  {isConnecting ? (
+                    <div className="flex items-center justify-center space-x-2">
+                      <Loader2 className="w-5 h-5 animate-spin" />
+                      <span>Connecting to Neural Network...</span>
+                    </div>
+                  ) : (
+                    "Access Neural Academy"
+                  )}
+                </Button>
+              </form>
+
+              {/* Status de conexão */}
+              {isConnecting && (
+                <div className="mt-6 text-center">
+                  <div className="text-primary text-sm animate-pulse">
+                    Establishing neural connection...
+                  </div>
+                  <div className="mt-2 bg-white/10 rounded-full h-1 overflow-hidden">
+                    <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: "100%" }} />
+                  </div>
+                </div>
+              )}
+            </div>
+          </div>
+        </div>
+      )}
+
+      {/* Background particles for the login form area only */}
+      {showLoginForm && (
+        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 50 }}>
+          {Array.from({ length: 15 }, (_, i) => (
+            <div
+              key={i}
+              className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-particle-float"
+              style={{
+                left: `${Math.random() * 100}%`,
+                top: `${Math.random() * 100}%`,
+                animationDelay: `${Math.random() * 8}s`,
+              }}
+            />
+          ))}
+        </div>
+      )}
+    </>
+  );
+};
+
+export default NeuralLogin;