import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-arthur-action.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Arthur Levi in action" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white container-custom fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Arthur Levi
          <span className="block text-3xl md:text-5xl font-light mt-2 text-green-200">
            O Próximo Grande Nome do Futebol Juvenil
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          Velocidade. Paixão. Visão. Nascido para jogar, destinado a brilhar.
        </p>
        
        <Button 
          onClick={scrollToAbout}
          className="btn-hero text-lg px-10 py-6 hover-scale"
        >
          Descubra Sua História
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white animate-bounce">
          <span className="text-sm mb-2 opacity-80">Role para explorar</span>
          <ChevronDown className="w-6 h-6 opacity-60" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-green-400 rounded-full opacity-20 animate-pulse hidden md:block"></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-white rounded-full opacity-10 animate-pulse hidden md:block"></div>
    </section>
  );
};

export default HeroSection;