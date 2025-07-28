import React, { useState } from "react";
import NeuralLogin from "@/components/NeuralLogin";
import NeuralDashboard from "@/components/NeuralDashboard";
import AutomationNexus from "@/components/AutomationNexus";

type ViewState = "login" | "dashboard" | "automation";

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>("login");

  const handleLogin = () => {
    setCurrentView("dashboard");
  };

  const handleNavigateToAutomation = () => {
    setCurrentView("automation");
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
  };

  switch (currentView) {
    case "login":
      return <NeuralLogin onLogin={handleLogin} />;
    case "dashboard":
      return <NeuralDashboard onNavigateToAutomation={handleNavigateToAutomation} />;
    case "automation":
      return <AutomationNexus onBackToDashboard={handleBackToDashboard} />;
    default:
      return <NeuralLogin onLogin={handleLogin} />;
  }
};

export default Index;