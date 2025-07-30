import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import trophiesImage from '@/assets/trophies-collection.jpg';

const AchievementsSection = () => {
  const achievements = [
    {
      year: "2024",
      title: "Campeão Regional",
      description: "Liderou a equipe à vitória no Campeonato Regional Sub-17",
      icon: Trophy,
      type: "championship"
    },
    {
      year: "2024",
      title: "Artilheiro da Temporada",
      description: "15 gols em 12 partidas durante a temporada de primavera",
      icon: Star,
      type: "individual"
    },
    {
      year: "2023",
      title: "Jogador Mais Valioso",
      description: "Prêmio MVP por performance excepcional na liga da cidade",
      icon: Medal,
      type: "individual"
    },
    {
      year: "2023",
      title: "Campeão da Liga Municipal",
      description: "Temporada invicta com a equipe de desenvolvimento juvenil",
      icon: Trophy,
      type: "championship"
    },
    {
      year: "2022",
      title: "Melhor Jovem Talento",
      description: "Reconhecido como o jogador mais promissor sub-16",
      icon: Star,
      type: "individual"
    },
    {
      year: "2022",
      title: "Finalista da Copa Estadual",
      description: "Chegou à final da prestigiosa copa juvenil estadual",
      icon: Medal,
      type: "championship"
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Conquistas e Honrarias
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um histórico de excelência que demonstra a dedicação e talento natural de Arthur.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <div className="fade-in-up">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-background transition-smooth hover-scale"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full primary-gradient flex items-center justify-center shadow-elegant">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {achievement.year}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        achievement.type === 'championship' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {achievement.type === 'championship' ? 'Equipe' : 'Individual'}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trophies Image */}
          <div className="fade-in-up">
            <div className="relative group">
              <img 
                src={trophiesImage} 
                alt="Coleção de Troféus do Arthur" 
                className="w-full rounded-2xl shadow-card hover-glow transition-smooth"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;