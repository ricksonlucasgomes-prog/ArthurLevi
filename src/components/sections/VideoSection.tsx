import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Veja Arthur Jogar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experimente as habilidades, visão e paixão de Arthur através de vídeos que 
            mostram seus melhores momentos em campo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Video Player */}
          <div className="relative rounded-2xl overflow-hidden shadow-elegant hover-glow transition-smooth fade-in-up mb-8">
            <div className="aspect-w-16 aspect-h-9 bg-gray-900 flex items-center justify-center relative">
              {/* Video Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 hover-scale transition-smooth cursor-pointer group">
                    <Play className="w-8 h-8 ml-1 group-hover:scale-110 transition-smooth" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Melhores Momentos 2024</h3>
                  <p className="text-white/80">4:32 minutos de puro talento</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Compilação de Melhores Gols",
                duration: "2:15",
                description: "Os gols mais espetaculares de Arthur"
              },
              {
                title: "Habilidades e Dribles",
                duration: "3:42",
                description: "Maestria técnica em exibição"
              },
              {
                title: "Momentos Decisivos",
                duration: "1:58",
                description: "Performances decisivas quando mais importa"
              }
            ].map((video, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover-glow transition-smooth hover-scale fade-in-up cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-w-16 aspect-h-9 bg-muted rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center w-full h-full">
                    <Play className="w-8 h-8 text-white group-hover:scale-110 transition-smooth" />
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-smooth">
                  {video.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-3">
                  {video.description}
                </p>
                
                <div className="flex items-center text-primary text-sm font-medium">
                  <span>Assistir Agora</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;