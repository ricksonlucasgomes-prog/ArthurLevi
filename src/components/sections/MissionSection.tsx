import React from 'react';
import { Target, Users, Award, Heart } from 'lucide-react';

const MissionSection = () => {
  const values = [
    {
      icon: Target,
      title: "Dedicação",
      description: "Cada treino, cada partida, cada momento é uma oportunidade de ficar mais forte e melhor."
    },
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description: "Futebol é um esporte coletivo. O sucesso vem de nos apoiarmos mutuamente e jogarmos como uma unidade."
    },
    {
      icon: Award,
      title: "Disciplina",
      description: "A excelência exige sacrifício, consistência e força mental para superar os desafios."
    },
    {
      icon: Heart,
      title: "Fair Play",
      description: "Respeito pelos adversários, árbitros e pelo jogo em si é a base do verdadeiro espírito esportivo."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            O Espírito Por Trás do Jogo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A abordagem de Arthur ao futebol é construída sobre valores fundamentais que moldam tanto 
            sua performance em campo quanto seu caráter fora dele.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-card transition-smooth hover-scale fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto rounded-full primary-gradient flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-smooth">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;