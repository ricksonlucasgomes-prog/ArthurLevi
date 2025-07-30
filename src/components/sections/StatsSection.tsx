import React from 'react';
import { User, Ruler, Target, MapPin, Trophy, Clock } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: User,
      label: "Idade",
      value: "10",
      suffix: "anos"
    },
    {
      icon: Ruler,
      label: "Altura e Peso",
      value: "1,50m",
      suffix: "45 kg"
    },
    {
      icon: Target,
      label: "Pé Preferido",
      value: "Esquerdo ",
      suffix: ""
    },
    {
      icon: MapPin,
      label: "Posição Principal",
      value: "MEI",
      suffix: "/ Ponta"
    },
    {
      icon: Trophy,
      label: "Gols Esta Temporada",
      value: "24",
      suffix: "gols"
    },
    {
      icon: Clock,
      label: "Assistências Esta Temporada",
      value: "12",
      suffix: "assistências"
    }
  ];

  const detailedStats = [
    { label: "Precisão de Passes", value: "87%", color: "bg-green-500" },
    { label: "Chutes no Alvo", value: "78%", color: "bg-blue-500" },
    { label: "Sucesso em Dribles", value: "84%", color: "bg-purple-500" },
    { label: "Condicionamento", value: "95%", color: "bg-orange-500" }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Em Campo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Os números que contam a história de Arthur sobre performance consistente e melhoria contínua.
          </p>
        </div>

        {/* Basic Stats Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card shadow-card hover-glow transition-smooth hover-scale fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 mx-auto rounded-full primary-gradient flex items-center justify-center shadow-elegant">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              
              <div className="text-sm text-muted-foreground mb-1">
                {stat.suffix}
              </div>
              
              <div className="text-xs font-medium text-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Stats */}
        <div className="bg-muted rounded-2xl p-8 fade-in-up">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Métricas de Performance
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailedStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-6 text-center hover-scale transition-smooth"
              >
                <div className="text-2xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                
                <div className="text-sm text-muted-foreground mb-3">
                  {stat.label}
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${stat.color}`}
                    style={{ width: stat.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;