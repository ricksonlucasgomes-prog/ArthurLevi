import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const UpcomingSection = () => {
  const upcomingMatches = [
    {
      date: "15 de Março, 2024",
      time: "14:00",
      opponent: "City United Sub-17",
      venue: "Complexo Esportivo Central",
      type: "Partida da Liga",
      status: "Casa"
    },
    {
      date: "22 de Março, 2024",
      time: "16:30",
      opponent: "Seleção Regional",
      venue: "Estádio Metropolitano",
      type: "Semifinal do Campeonato",
      status: "Fora"
    },
    {
      date: "29 de Março, 2024",
      time: "18:00",
      opponent: "Academia Elite",
      venue: "Centro de Treinamento Olímpico",
      type: "Amistoso",
      status: "Neutro"
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Veja-o ao Vivo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Não perca a chance de presenciar o talento de Arthur pessoalmente. 
            Aqui você pode acompanhar onde ele jogará em seguida.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {upcomingMatches.map((match, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 shadow-card hover-glow transition-smooth hover-scale fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">{match.date}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{match.time}</span>
                    </div>
                    
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      match.status === 'Casa' 
                        ? 'bg-green-100 text-green-800' 
                        : match.status === 'Fora' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {match.status}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-lg font-semibold text-foreground">
                        vs {match.opponent}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{match.venue}</span>
                  </div>
                </div>
                
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary mb-2">
                      {match.type}
                    </div>
                    <button className="btn-hero text-sm px-6 py-2">
                      Comprar Ingressos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe to Updates */}
        <div className="text-center mt-12 fade-in-up">
          <div className="bg-background rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Nunca Perca uma Partida
            </h3>
            <p className="text-muted-foreground mb-6">
              Inscreva-se para ser notificado sobre as próximas partidas e eventos de Arthur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Digite seu email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="btn-hero px-6 py-3 whitespace-nowrap">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSection;