import React from 'react';

const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => {
  return (
    <div className={`${className} flex items-center space-x-3`}>
      {/* Dynamic Gradient Soccer Ball Icon */}
      <div className="relative">
        <div className="w-10 h-10 rounded-full primary-gradient flex items-center justify-center shadow-glow">
          <svg 
            className="w-6 h-6 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="absolute inset-0 w-10 h-10 rounded-full primary-gradient opacity-30 animate-pulse"></div>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gradient">Arthur Levi</span>
        <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
          Estrela em Ascensão
        </span>
      </div>
    </div>
  );
};

export default Logo;