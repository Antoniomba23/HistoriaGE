import React from 'react';

const HeroSection = ({ setCurrentPage }) => {
  return (
    <section 
      className="relative py-24 sm:py-32 text-center shadow-inner border-b-4 border-brand-red bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/guinea.gif'})` }}
    >
      <div className="absolute inset-0 bg-brand-bg/60 pattern-mudcloth"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-brown leading-tight mb-6 drop-shadow-sm">
          Bienvenido a <span className="text-brand-red">HistoriaGE</span>
        </h1>
        <p className="text-xl md:text-2xl text-brand-brown/80 font-body max-w-3xl mx-auto leading-relaxed mb-8">
          Explora la historia, geografía y diversidad cultural de Guinea Ecuatorial a través de capítulos interactivos, líneas de tiempo, mapas y cuestionarios. Aprende, descubre y comparte el legado de un país fascinante.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;


// DONE