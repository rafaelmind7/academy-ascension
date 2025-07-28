import React, { useState } from "react";
import SimpleLogin from "@/components/SimpleLogin";
import SimpleDashboard from "@/components/SimpleDashboard";
import SimpleAutomation from "@/components/SimpleAutomation";

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
      return <SimpleLogin onLogin={handleLogin} />;
    case "dashboard":
      return <SimpleDashboard onNavigateToAutomation={handleNavigateToAutomation} />;
    case "automation":
      return <SimpleAutomation onBackToDashboard={handleBackToDashboard} />;
    default:
      return <SimpleLogin onLogin={handleLogin} />;
  }
};

export default Index;