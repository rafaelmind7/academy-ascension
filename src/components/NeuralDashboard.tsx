import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Bell, 
  Trophy, 
  Target, 
  Clock, 
  Cpu, 
  Brain, 
  Zap, 
  Users,
  TrendingUp,
  Activity
} from "lucide-react";

interface NeuralDashboardProps {
  onNavigateToAutomation: () => void;
}

const NeuralDashboard: React.FC<NeuralDashboardProps> = ({ onNavigateToAutomation }) => {
  const userLevel = 15;
  const userXP = 2750;
  const nextLevelXP = 3000;
  const xpProgress = (userXP / nextLevelXP) * 100;

  const rankings = [
    { id: 1, name: "Alex Chen", level: 20, xp: 4500, avatar: "AC" },
    { id: 2, name: "Maria Silva", level: 18, xp: 3800, avatar: "MS" },
    { id: 3, name: "João Santos", level: 17, xp: 3200, avatar: "JS" },
    { id: 4, name: "Ana Costa", level: 16, xp: 2900, avatar: "AC" },
    { id: 5, name: "Você", level: userLevel, xp: userXP, avatar: "VU", isUser: true }
  ];

  const missions = [
    { 
      id: 1, 
      title: "Implementar API REST", 
      deadline: "2h 30m", 
      xp: 500, 
      difficulty: "Avançado",
      progress: 60 
    },
    { 
      id: 2, 
      title: "Deploy com Docker", 
      deadline: "1d 5h", 
      xp: 300, 
      difficulty: "Intermediário",
      progress: 20 
    },
    { 
      id: 3, 
      title: "Code Review", 
      deadline: "4h 15m", 
      xp: 200, 
      difficulty: "Básico",
      progress: 80 
    }
  ];

  const cultureCores = [
    { id: 1, name: "Inovação", icon: Zap, level: 8, color: "text-yellow-400" },
    { id: 2, name: "Colaboração", icon: Users, level: 6, color: "text-blue-400" },
    { id: 3, name: "Excelência", icon: Trophy, level: 7, color: "text-purple-400" },
    { id: 4, name: "Adaptabilidade", icon: TrendingUp, level: 5, color: "text-green-400" }
  ];

  const activities = [
    { id: 1, type: "técnica", action: "Completou módulo React Hooks", time: "2 min", icon: Cpu },
    { id: 2, type: "cultural", action: "Demonstrou liderança em equipe", time: "15 min", icon: Users },
    { id: 3, type: "técnica", action: "Deployou aplicação", time: "1h", icon: Target },
    { id: 4, type: "cultural", action: "Compartilhou conhecimento", time: "2h", icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header Neural */}
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16 border-2 border-primary shadow-neural">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-primary text-primary-foreground text-lg font-bold">
                NU
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h1 className="text-2xl font-bold">Neural User</h1>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  Nível {userLevel}
                </Badge>
                <span className="text-muted-foreground">{userXP} / {nextLevelXP} XP</span>
              </div>
              
              {/* Progress circular XP */}
              <div className="mt-2 w-32">
                <Progress value={xpProgress} className="h-2" />
              </div>
            </div>
          </div>

          {/* Notificações */}
          <div className="relative">
            <Button size="icon" variant="outline" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Ranking Card */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span>Ranking Neural</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {rankings.map((user, index) => (
              <div 
                key={user.id} 
                className={`flex items-center space-x-3 p-2 rounded-lg transition-all ${
                  user.isUser ? 'bg-primary/10 border border-primary/20' : 'hover:bg-accent/50'
                }`}
              >
                <span className="text-sm font-bold w-6">{index + 1}°</span>
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="text-xs bg-gradient-to-r from-primary/20 to-primary/30">
                    {user.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">Lv. {user.level} • {user.xp} XP</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Missões */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-primary" />
              <span>Missões Neurais</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {missions.map((mission) => (
              <div key={mission.id} className="p-3 border rounded-lg hover:bg-accent/50 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">{mission.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {mission.xp} XP
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{mission.deadline}</span>
                  <Badge 
                    variant={mission.difficulty === 'Avançado' ? 'destructive' : 
                           mission.difficulty === 'Intermediário' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {mission.difficulty}
                  </Badge>
                </div>
                
                <Progress value={mission.progress} className="h-1" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Culture Cores */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-purple-400" />
              <span>Culture Cores</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cultureCores.map((core) => {
              const IconComponent = core.icon;
              return (
                <div 
                  key={core.id} 
                  className="flex items-center space-x-3 p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-all cursor-pointer group"
                >
                  <div className="relative">
                    <IconComponent className={`w-6 h-6 ${core.color} group-hover:animate-pulse-glow`} />
                    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="flex-1">
                    <p className="font-medium text-sm">{core.name}</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {Array.from({ length: 10 }, (_, i) => (
                          <div 
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < core.level ? 'bg-primary animate-pulse-glow' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">Lv. {core.level}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Timeline de Atividades */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-primary" />
            <span>Timeline Neural - Data Streaming</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Linha do tempo */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
            
            <div className="space-y-4">
              {activities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div key={activity.id} className="relative flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/30 transition-all">
                    {/* Ponto na timeline */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-neural">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{activity.action}</p>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                      <Badge 
                        variant={activity.type === 'técnica' ? 'default' : 'secondary'}
                        className="text-xs mt-1"
                      >
                        {activity.type}
                      </Badge>
                    </div>
                    
                    {/* Efeito de data streaming */}
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-t from-transparent via-primary/30 to-transparent animate-data-stream" />
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA para Automation Nexus */}
      <div className="mt-8 text-center">
        <Button 
          onClick={onNavigateToAutomation}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-neural hover:shadow-glow hover:scale-105 transition-all duration-300"
        >
          <Cpu className="w-6 h-6 mr-2" />
          Acessar Automation Nexus
        </Button>
      </div>
    </div>
  );
};

export default NeuralDashboard;