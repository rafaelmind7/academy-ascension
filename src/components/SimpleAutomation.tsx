import React from "react";
import { Button } from "@/components/ui/button";

interface SimpleAutomationProps {
  onBackToDashboard: () => void;
}

const SimpleAutomation: React.FC<SimpleAutomationProps> = ({ onBackToDashboard }) => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Automation Nexus</h1>
          <Button 
            onClick={onBackToDashboard}
            variant="outline"
            className="border-primary/30 text-white hover:bg-primary/10"
          >
            Back to Dashboard
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-primary/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Active Automations</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Data Processing</span>
                <span className="text-green-400">Running</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Neural Analysis</span>
                <span className="text-green-400">Running</span>
              </div>
              <div className="flex justify-between items-center">
                <span>System Monitor</span>
                <span className="text-yellow-400">Paused</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-primary/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Control Panel</h3>
            <div className="space-y-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-black">
                Start New Automation
              </Button>
              <Button className="w-full" variant="outline">
                View Logs
              </Button>
              <Button className="w-full" variant="outline">
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleAutomation;