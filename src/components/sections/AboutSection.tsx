import React from 'react';
import portraitImage from '@/assets/arthur-portrait.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Quem é Arthur Levi?
            </h2>
            
            <div className="prose prose-lg text-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                (Colocar a História de Arthur Levi aqui)
              </p>
              
              <p className="text-lg leading-relaxed">
                (Colocar a História de Arthur Levi aqui)
              </p>
              
              <p className="text-lg leading-relaxed">
                (Colocar a História de Arthur Levi aqui)
              </p>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="fade-in-up">
            <div className="relative group">
              <img 
                src={portraitImage} 
                alt="Arthur Levi Portrait" 
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

export default AboutSection;