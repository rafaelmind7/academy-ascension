import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Play, 
  ExternalLink, 
  ChevronRight, 
  Cpu, 
  Zap, 
  GitBranch,
  BookOpen,
  Target,
  Send,
  ArrowLeft
} from "lucide-react";

interface AutomationNexusProps {
  onBackToDashboard: () => void;
}

const AutomationNexus: React.FC<AutomationNexusProps> = ({ onBackToDashboard }) => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [aiReport, setAiReport] = useState({
    reflection: "",
    complexity: "",
    isOpen: false
  });

  const modules = [
    {
      id: 1,
      title: "Fundamentos React",
      progress: 100,
      status: "completed",
      lessonUrl: "https://react.dev/learn",
      connections: [2, 3],
      position: { x: 50, y: 20 }
    },
    {
      id: 2,
      title: "Hooks Avançados",
      progress: 75,
      status: "in-progress",
      lessonUrl: "https://react.dev/reference/react",
      connections: [4, 5],
      position: { x: 20, y: 50 }
    },
    {
      id: 3,
      title: "State Management",
      progress: 60,
      status: "in-progress",
      lessonUrl: "https://redux.js.org/",
      connections: [4],
      position: { x: 80, y: 50 }
    },
    {
      id: 4,
      title: "Testing & Quality",
      progress: 30,
      status: "available",
      lessonUrl: "https://testing-library.com/",
      connections: [6],
      position: { x: 35, y: 80 }
    },
    {
      id: 5,
      title: "Performance",
      progress: 0,
      status: "locked",
      lessonUrl: "https://web.dev/performance/",
      connections: [6],
      position: { x: 65, y: 80 }
    },
    {
      id: 6,
      title: "Deployment",
      progress: 0,
      status: "locked",
      lessonUrl: "https://vercel.com/docs",
      connections: [],
      position: { x: 50, y: 95 }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-400 border-green-400";
      case "in-progress": return "text-primary border-primary";
      case "available": return "text-yellow-400 border-yellow-400";
      case "locked": return "text-muted-foreground border-muted";
      default: return "text-muted-foreground border-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <Target className="w-4 h-4" />;
      case "in-progress": return <Play className="w-4 h-4" />;
      case "available": return <BookOpen className="w-4 h-4" />;
      case "locked": return <Brain className="w-4 h-4 opacity-50" />;
      default: return <Brain className="w-4 h-4" />;
    }
  };

  const handleProcessKnowledge = (moduleId: number) => {
    const module = modules.find(m => m.id === moduleId);
    if (module?.status === "locked") return;
    
    setSelectedModule(moduleId);
    setAiReport(prev => ({ ...prev, isOpen: true }));
  };

  const submitToAIMentor = () => {
    // Simular envio para IA Mentor
    console.log("Enviando relatório para IA Mentor:", aiReport);
    setAiReport({ reflection: "", complexity: "", isOpen: false });
    setSelectedModule(null);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={onBackToDashboard}
              className="hover:bg-primary/10"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            
            <div>
              <h1 className="text-3xl font-bold flex items-center space-x-2">
                <Cpu className="w-8 h-8 text-primary animate-pulse-glow" />
                <span>Automation Nexus</span>
              </h1>
              <p className="text-muted-foreground">Trilha Técnica - Conexões Neurais de Conhecimento</p>
            </div>
          </div>
          
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
            <GitBranch className="w-4 h-4 mr-1" />
            Rede Neural Ativa
          </Badge>
        </div>
      </header>

      {/* Neural Tree Visualization */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="w-6 h-6 text-primary" />
            <span>Mapa Neural de Módulos</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-96 bg-gradient-to-br from-background to-accent/10 rounded-lg border overflow-hidden">
            {/* Conexões neurais */}
            <svg className="absolute inset-0 w-full h-full">
              {modules.map(module => 
                module.connections.map(connectionId => {
                  const targetModule = modules.find(m => m.id === connectionId);
                  if (!targetModule) return null;
                  
                  return (
                    <line
                      key={`${module.id}-${connectionId}`}
                      x1={`${module.position.x}%`}
                      y1={`${module.position.y}%`}
                      x2={`${targetModule.position.x}%`}
                      y2={`${targetModule.position.y}%`}
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeOpacity="0.3"
                      strokeDasharray={module.status === "completed" ? "0" : "5,5"}
                      className="animate-pulse"
                    />
                  );
                })
              )}
            </svg>

            {/* Módulos */}
            {modules.map(module => (
              <div
                key={module.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  left: `${module.position.x}%`, 
                  top: `${module.position.y}%` 
                }}
              >
                <div 
                  className={`relative group cursor-pointer transition-all duration-300 ${
                    module.status === "locked" ? "opacity-50" : "hover:scale-110"
                  }`}
                  onClick={() => handleProcessKnowledge(module.id)}
                >
                  {/* Nó principal */}
                  <div 
                    className={`w-20 h-20 rounded-full border-2 ${getStatusColor(module.status)} 
                               bg-background shadow-neural flex flex-col items-center justify-center
                               ${module.status !== "locked" ? "hover:shadow-glow" : ""}`}
                  >
                    {getStatusIcon(module.status)}
                    <span className="text-xs mt-1">M{module.id}</span>
                  </div>

                  {/* Progress ring */}
                  <div className="absolute inset-0 w-20 h-20">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="hsl(var(--muted))"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.3"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 35}`}
                        strokeDashoffset={`${2 * Math.PI * 35 * (1 - module.progress / 100)}`}
                        className="transition-all duration-500"
                      />
                    </svg>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-popover border rounded-lg p-3 shadow-lg min-w-48">
                      <h4 className="font-semibold text-sm mb-1">{module.title}</h4>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                        <span>Progresso: {module.progress}%</span>
                        <Badge variant="outline" className="text-xs">
                          {module.status}
                        </Badge>
                      </div>
                      <Progress value={module.progress} className="h-1 mb-2" />
                      
                      <div className="flex space-x-1">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-xs h-6"
                          disabled={module.status === "locked"}
                        >
                          <Play className="w-3 h-3 mr-1" />
                          Processar
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-xs h-6"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(module.lessonUrl, '_blank');
                          }}
                          disabled={module.status === "locked"}
                        >
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Módulos List View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map(module => (
          <Card 
            key={module.id} 
            className={`transition-all duration-300 hover:shadow-lg ${
              module.status === "locked" ? "opacity-50" : "hover:scale-105"
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center space-x-2">
                  {getStatusIcon(module.status)}
                  <span>{module.title}</span>
                </CardTitle>
                <Badge 
                  variant={module.status === "completed" ? "default" : "outline"}
                  className={getStatusColor(module.status)}
                >
                  {module.progress}%
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <Progress value={module.progress} className="h-2" />
              
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  className="flex-1"
                  disabled={module.status === "locked"}
                  onClick={() => handleProcessKnowledge(module.id)}
                >
                  <Brain className="w-4 h-4 mr-1" />
                  Processar Conhecimento
                </Button>
                
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => window.open(module.lessonUrl, '_blank')}
                  disabled={module.status === "locked"}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal de Relatório IA */}
      <Dialog open={aiReport.isOpen} onOpenChange={(open) => setAiReport(prev => ({ ...prev, isOpen: open }))}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Relatório Neural - IA Mentor</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            <div>
              <Label htmlFor="reflection">Reflexão sobre o Aprendizado</Label>
              <Textarea
                id="reflection"
                placeholder="Descreva suas principais descobertas e insights..."
                value={aiReport.reflection}
                onChange={(e) => setAiReport(prev => ({ ...prev, reflection: e.target.value }))}
                className="mt-1"
                rows={4}
              />
            </div>
            
            <div>
              <Label htmlFor="complexity">Nível de Complexidade Percebido</Label>
              <Textarea
                id="complexity"
                placeholder="Como você avalia a dificuldade do conteúdo?"
                value={aiReport.complexity}
                onChange={(e) => setAiReport(prev => ({ ...prev, complexity: e.target.value }))}
                className="mt-1"
                rows={3}
              />
            </div>
            
            <Button 
              onClick={submitToAIMentor}
              className="w-full bg-primary hover:bg-primary/90"
              disabled={!aiReport.reflection.trim() || !aiReport.complexity.trim()}
            >
              <Send className="w-4 h-4 mr-2" />
              Transmitir à IA Mentor
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AutomationNexus;