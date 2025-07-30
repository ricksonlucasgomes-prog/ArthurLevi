import React from 'react';
import trainingImage from '@/assets/training-action.jpg';

const GallerySection = () => {
  // Using the training image and some placeholder variations
  const galleryImages = [
    {
      src: trainingImage,
      alt: "Arthur treinando - controle de bola",
      caption: "Aperfeiçoando o controle de bola"
    },
    {
      src: trainingImage,
      alt: "Arthur em ação na partida",
      caption: "Performance em dia de jogo"
    },
    {
      src: trainingImage,
      alt: "Arthur comemorando com a equipe",
      caption: "Comemoração da vitória"
    },
    {
      src: trainingImage,
      alt: "Arthur em sessão de treino",
      caption: "Treino dedicado"
    },
    {
      src: trainingImage,
      alt: "Arthur demonstrando habilidades",
      caption: "Habilidades técnicas"
    },
    {
      src: trainingImage,
      alt: "Arthur focado na partida",
      caption: "Foco no jogo"
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Em Ação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturando os momentos que definem a jornada de Arthur - desde sessões de treino 
            intensivas até performances decisivas em partidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-card hover-glow transition-smooth hover-scale fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    {image.caption}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 fade-in-up">
          <p className="text-muted-foreground mb-4">
            Quer ver mais da jornada de Arthur?
          </p>
          <button className="btn-hero">
            Ver Galeria Completa
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;