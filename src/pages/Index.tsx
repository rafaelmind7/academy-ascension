diff --git a/src/index.css b/src/index.css
--- a/src/index.css
+++ b/src/index.css
@@ -0,0 +1,314 @@
+@tailwind base;
+@tailwind components;
+@tailwind utilities;
+
+/* Mind77 Neural Academy Design System */
+@layer base {
+  :root {
+    --background: 0 0% 100%;
+    --foreground: 0 0% 0%;
+    --card: 0 0% 100%;
+    --card-foreground: 0 0% 0%;
+    --popover: 0 0% 100%;
+    --popover-foreground: 0 0% 0%;
+    --primary: 188 95% 43%;
+    --primary-foreground: 0 0% 100%;
+    --primary-glow: 188 95% 60%;
+    --secondary: 60 4% 76%;
+    --secondary-foreground: 0 0% 0%;
+    --muted: 60 4% 90%;
+    --muted-foreground: 0 0% 40%;
+    --accent: 188 95% 43%;
+    --accent-foreground: 0 0% 100%;
+    --destructive: 0 84% 60%;
+    --destructive-foreground: 0 0% 100%;
+    --border: 60 4% 85%;
+    --input: 60 4% 85%;
+    --ring: 188 95% 43%;
+    --radius: 0.75rem;
+    --gradient-neural: linear-gradient(45deg, hsl(0 0% 0%), hsl(188 95% 43%));
+    --gradient-glass: linear-gradient(135deg, hsla(0 0% 100% / 0.1), hsla(0 0% 100% / 0.05));
+    --shadow-neural: 0 0 30px hsla(188 95% 43% / 0.3);
+    --shadow-glow: 0 0 20px hsla(188 95% 60% / 0.4);
+    --transition-neural: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
+    --sidebar-background: 0 0% 98%;
+    --sidebar-foreground: 240 5.3% 26.1%;
+    --sidebar-primary: 240 5.9% 10%;
+    --sidebar-primary-foreground: 0 0% 98%;
+    --sidebar-accent: 240 4.8% 95.9%;
+    --sidebar-accent-foreground: 240 5.9% 10%;
+    --sidebar-border: 220 13% 91%;
+    --sidebar-ring: 217.2 91.2% 59.8%;
+  }
+
+  .dark {
+    --background: 0 0% 0%;
+    --foreground: 0 0% 100%;
+    --card: 0 0% 5%;
+    --card-foreground: 0 0% 100%;
+    --popover: 0 0% 5%;
+    --popover-foreground: 0 0% 100%;
+    --primary: 188 95% 43%;
+    --primary-foreground: 0 0% 100%;
+    --primary-glow: 188 95% 60%;
+    --secondary: 0 0% 10%;
+    --secondary-foreground: 0 0% 100%;
+    --muted: 0 0% 10%;
+    --muted-foreground: 0 0% 70%;
+    --accent: 188 95% 43%;
+    --accent-foreground: 0 0% 100%;
+    --destructive: 0 84% 60%;
+    --destructive-foreground: 0 0% 100%;
+    --border: 0 0% 15%;
+    --input: 0 0% 15%;
+    --ring: 188 95% 43%;
+    --gradient-neural: linear-gradient(45deg, hsl(0 0% 0%), hsl(188 95% 43%));
+    --gradient-glass: linear-gradient(135deg, hsla(0 0% 100% / 0.15), hsla(0 0% 100% / 0.08));
+    --sidebar-background: 240 5.9% 10%;
+    --sidebar-foreground: 240 4.8% 95.9%;
+    --sidebar-primary: 224.3 76.3% 48%;
+    --sidebar-primary-foreground: 0 0% 100%;
+    --sidebar-accent: 240 3.7% 15.9%;
+    --sidebar-accent-foreground: 240 4.8% 95.9%;
+    --sidebar-border: 240 3.7% 15.9%;
+    --sidebar-ring: 217.2 91.2% 59.8%;
+  }
+}
+
+@layer base {
+  * {
+    @apply border-border;
+  }
+  body {
+    @apply bg-background text-foreground;
+  }
+}
+
+/* Video Intro Styles */
+.video-intro {
+  position: fixed;
+  top: 0;
+  left: 0;
+  width: 100vw;
+  height: 100vh;
+  z-index: 9999;
+  background: #000;
+  overflow: hidden;
+}
+
+.video-intro video {
+  width: 100%;
+  height: 100%;
+  object-fit: cover;
+}
+
+.video-fade-out {
+  animation: fadeToBlack 1.5s ease-out forwards;
+}
+
+@keyframes fadeToBlack {
+  0% { opacity: 1; }
+  100% { opacity: 0; }
+}
+
+/* Lightning Animation */
+.lightning-overlay {
+  position: fixed;
+  top: 0;
+  left: 0;
+  width: 100vw;
+  height: 100vh;
+  z-index: 9998;
+  background: #000;
+  pointer-events: none;
+}
+
+.lightning-bolt {
+  position: absolute;
+  opacity: 0;
+  stroke: #00d4ff;
+  stroke-width: 3;
+  fill: none;
+  filter: drop-shadow(0 0 10px #00d4ff) drop-shadow(0 0 20px #0099cc);
+}
+
+.lightning-active {
+  animation: lightningStrike 1.2s ease-out forwards;
+}
+
+@keyframes lightningStrike {
+  0% { opacity: 0; transform: scale(0.9); }
+  15% { opacity: 1; transform: scale(1); }
+  25% { opacity: 0.7; }
+  35% { opacity: 1; }
+  45% { opacity: 0.5; }
+  55% { opacity: 1; }
+  70% { opacity: 0; }
+  85% { opacity: 0.8; }
+  100% { opacity: 0; transform: scale(1.1); }
+}
+
+/* Neural Circuit Background */
+.neural-circuits {
+  position: fixed;
+  top: 0;
+  left: 0;
+  width: 100vw;
+  height: 100vh;
+  z-index: 1;
+  background: radial-gradient(ellipse at center, rgba(0,212,255,0.05) 0%, rgba(0,0,0,0.95) 70%);
+  opacity: 0;
+  transition: opacity 2s ease-out;
+}
+
+.neural-circuits.active {
+  opacity: 1;
+}
+
+.circuit-line {
+  stroke: #00d4ff;
+  stroke-width: 1;
+  fill: none;
+  opacity: 0.4;
+  filter: drop-shadow(0 0 3px #00d4ff);
+}
+
+.circuit-node {
+  fill: #00d4ff;
+  opacity: 0.6;
+  filter: drop-shadow(0 0 5px #00d4ff);
+}
+
+.energy-pulse {
+  animation: energyFlow 3s ease-in-out infinite;
+}
+
+@keyframes energyFlow {
+  0%, 100% { opacity: 0.4; stroke-width: 1; }
+  50% { opacity: 0.9; stroke-width: 2; }
+}
+
+.circuit-glow {
+  animation: circuitGlow 4s ease-in-out infinite alternate;
+}
+
+@keyframes circuitGlow {
+  from { filter: drop-shadow(0 0 3px #00d4ff); }
+  to { filter: drop-shadow(0 0 8px #00d4ff) drop-shadow(0 0 15px #0099cc); }
+}
+
+/* Welcome Message */
+.welcome-header {
+  position: fixed;
+  top: 20%;
+  left: 50%;
+  transform: translateX(-50%);
+  z-index: 100;
+  text-align: center;
+  opacity: 0;
+  transition: opacity 1.5s ease-out;
+}
+
+.welcome-header.visible {
+  opacity: 1;
+}
+
+.welcome-title {
+  font-size: 3.5rem;
+  font-weight: 700;
+  background: linear-gradient(45deg, #ffffff, #00d4ff, #ffffff);
+  background-size: 200% 200%;
+  background-clip: text;
+  -webkit-background-clip: text;
+  -webkit-text-fill-color: transparent;
+  animation: titleShimmer 3s ease-in-out infinite;
+  text-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
+}
+
+@keyframes titleShimmer {
+  0%, 100% { background-position: 0% 50%; }
+  50% { background-position: 100% 50%; }
+}
+
+.welcome-subtitle {
+  font-size: 1.25rem;
+  color: rgba(255, 255, 255, 0.7);
+  margin-top: 0.5rem;
+}
+
+/* Login Form */
+.login-container {
+  position: fixed;
+  bottom: 8%;
+  left: 50%;
+  transform: translateX(-50%);
+  z-index: 101;
+  opacity: 0;
+  transform: translateX(-50%) scale(0.95) translateY(30px);
+  transition: all 1s ease-out;
+}
+
+.login-container.visible {
+  opacity: 1;
+  transform: translateX(-50%) scale(1) translateY(0);
+}
+
+.electric-border {
+  position: relative;
+  padding: 2px;
+  border-radius: 1rem;
+  background: linear-gradient(45deg, transparent, #00d4ff, transparent, #00d4ff, transparent);
+  background-size: 300% 300%;
+  animation: electricFlow 4s linear infinite;
+}
+
+@keyframes electricFlow {
+  0% { background-position: 0% 0%; }
+  100% { background-position: 300% 300%; }
+}
+
+.form-content {
+  background: rgba(0, 0, 0, 0.9);
+  backdrop-filter: blur(20px);
+  border-radius: calc(1rem - 2px);
+  padding: 2rem;
+  border: 1px solid rgba(0, 212, 255, 0.2);
+}
+
+/* Pulse Glow Effect */
+.pulse-glow {
+  animation: pulseGlow 2s ease-in-out infinite;
+}
+
+@keyframes pulseGlow {
+  0%, 100% { filter: drop-shadow(0 0 8px hsl(188 95% 43%)); }
+  50% { filter: drop-shadow(0 0 16px hsl(188 95% 60%)) drop-shadow(0 0 24px hsl(188 95% 43%)); }
+}
+
+/* Hide body overflow during intro */
+.intro-active {
+  overflow: hidden;
+}
+
+/* Responsive Design */
+@media (max-width: 768px) {
+  .welcome-title {
+    font-size: 2.5rem;
+  }
+  
+  .welcome-header {
+    top: 15%;
+    padding: 0 1rem;
+  }
+  
+  .login-container {
+    bottom: 5%;
+    left: 1rem;
+    right: 1rem;
+    transform: none;
+  }
+  
+  .login-container.visible {
+    transform: scale(1) translateY(0);
+  }
+}