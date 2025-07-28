import React from "react";
import { Button } from "@/components/ui/button";

interface SimpleDashboardProps {
  onNavigateToAutomation: () => void;
}

const SimpleDashboard: React.FC<SimpleDashboardProps> = ({ onNavigateToAutomation }) => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Neural Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-primary/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">System Status</h3>
            <p className="text-green-400">All systems operational</p>
          </div>
          
          <div className="bg-gray-900 border border-primary/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Neural Networks</h3>
            <p className="text-primary">24 active connections</p>
          </div>
          
          <div className="bg-gray-900 border border-primary/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Automation</h3>
            <Button 
              onClick={onNavigateToAutomation}
              className="bg-primary hover:bg-primary/90 text-black"
            >
              Open Automation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleDashboard;