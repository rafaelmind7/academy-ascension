import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SimpleLoginProps {
  onLogin: () => void;
}

const SimpleLogin: React.FC<SimpleLoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg border border-primary/20 w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Neural Login
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black/50 border-primary/30 text-white"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black/50 border-primary/30 text-white"
              placeholder="••••••••"
              required
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-black"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SimpleLogin;