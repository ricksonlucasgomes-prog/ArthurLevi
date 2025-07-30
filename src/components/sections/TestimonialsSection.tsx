import React from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Treinador Martinez",
      role: "Treinador Principal, Academia Regional",
      content: "Em meus 20 anos como treinador, raramente vi um jogador com a combinação de habilidade técnica e inteligência de jogo de Arthur. Ele tem potencial para jogar nos mais altos níveis.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Chen",
      role: "Jornalista Esportiva, Soccer Weekly",
      content: "Arthur Levi é o tipo de jogador que faz você parar o que está fazendo para assistir. Sua visão e criatividade com a bola estão além de sua idade. Uma verdadeira estrela em ascensão.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "Ex-Jogador Profissional",
      content: "Arthur me lembra de mim mesmo naquela idade - faminto, dedicado e sempre buscando melhorar. A diferença é seu talento natural. Este garoto é especial.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            O que Dizem sobre Ele
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ouça dos treinadores, jornalistas e profissionais que presenciaram 
            o talento de Arthur em primeira mão.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover-glow transition-smooth hover-scale fade-in-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover shadow-elegant"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Quote */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-muted rounded-2xl p-8 max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
            <blockquote className="text-2xl font-light text-foreground leading-relaxed mb-6 italic">
              "Arthur não apenas joga futebol; ele fala fluentemente a linguagem do jogo. Cada toque, 
              cada passe, cada movimento conta uma história de dedicação e amor puro pelo esporte."
            </blockquote>
            <cite className="text-muted-foreground font-medium">

            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;