import React, { useState } from 'react';

const Navbar = ({ setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChaptersMenuOpen, setIsChaptersMenuOpen] = useState(false);
  const [isLiteratureMenuOpen, setIsLiteratureMenuOpen] = useState(false);

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Cerrar el menú móvil al seleccionar una opción
    setIsChaptersMenuOpen(false); // Cerrar el menú de capítulos si está abierto
    setIsLiteratureMenuOpen(false); // Cerrar el menú de literatura si está abierto
  };

  const chapters = [
    { key: 'chapter1', label: 'Capítulo 1' },
    { key: 'chapter2', label: 'Capítulo 2' },
    { key: 'chapter3', label: 'Capítulo 3' },
    { key: 'chapter4', label: 'Capítulo 4' },
    { key: 'chapter5', label: 'Capítulo 5' },
    { key: 'chapter6', label: 'Capítulo 6' },
    { key: 'chapter7', label: 'Capítulo 7' },
    { key: 'chapter8', label: 'Capítulo 8' },
    { key: 'chapter9', label: 'Capítulo 9' },
  ];

  const literatureChapters = [
    { key: 'literature1', label: 'Capítulo 1: Orígenes y Tradición Oral' },
    { key: 'literature2', label: 'Capítulo 2: Primeros Escritores y Literatura Colonial' },
    { key: 'literature3', label: 'Capítulo 3: Literatura de la Independencia' },
    { key: 'literature4', label: 'Capítulo 4: Literatura en el Exilio y la Diáspora' },
    { key: 'literature5', label: 'Capítulo 5: Literatura Contemporánea' },
    { key: 'literature6', label: 'Capítulo 6: Poesía, Teatro y Otros Géneros' },
    { key: 'literature7', label: 'Capítulo 7: Mujeres en la Literatura Ecuatoguineana' },
    { key: 'literature8', label: 'Capítulo 8: Literatura en Lenguas Nacionales' },
    { key: 'literature9', label: 'Capítulo 9: Bibliografía y Recursos' },
  ];

  return (
    <nav className="bg-brand-brown shadow-lg sticky top-0 z-50 border-b border-brand-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <button onClick={() => handleNavigationClick('home')} className="focus:outline-none">
              <span className="text-2xl font-display font-bold text-brand-bg tracking-tight">Historia <span className="text-brand-yellow">GE</span></span>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavigationClick('home')} className="text-brand-bg hover:text-brand-yellow font-body font-medium transition-colors duration-300 text-lg focus:outline-none">Inicio</button>
            <button onClick={() => handleNavigationClick('geography')} className="text-brand-bg hover:text-brand-yellow font-body font-medium transition-colors duration-300 text-lg focus:outline-none">Geografía</button>
            <button onClick={() => handleNavigationClick('cultures')} className="text-brand-bg hover:text-brand-yellow font-body font-medium transition-colors duration-300 text-lg focus:outline-none">Culturas</button>
            <div className="relative">
              <button
                onClick={() => handleNavigationClick('historia')}
                className="text-brand-bg hover:text-brand-yellow font-body font-medium transition-colors duration-300 text-lg focus:outline-none flex items-center"
              >
                Historia
              </button>
            </div>
            <div className="relative">
              <button
                onClick={() => handleNavigationClick('literature1')}
                className="text-brand-bg hover:text-brand-yellow font-body font-medium transition-colors duration-300 text-lg focus:outline-none flex items-center"
              >
                Literatura
              </button>
            </div>
            <button onClick={() => handleNavigationClick('quiz')} className="text-brand-bg hover:text-brand-yellow font-body font-medium transition-colors duration-300 text-lg focus:outline-none">Quiz</button>
            <button onClick={() => handleNavigationClick('about')} className="text-brand-bg hover:text-brand-yellow font-body font-medium transition-colors duration-300 text-lg focus:outline-none">Acerca de</button>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-brand-bg hover:text-brand-yellow focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-yellow rounded-md p-2"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-brown shadow-lg border-t border-brand-yellow/20 py-2">
          <button onClick={() => handleNavigationClick('home')} className="block w-full text-left px-4 py-2 text-brand-bg hover:bg-brand-red hover:text-white transition-colors duration-300 focus:outline-none font-body">Inicio</button>
          <button onClick={() => handleNavigationClick('geography')} className="block w-full text-left px-4 py-2 text-brand-bg hover:bg-brand-red hover:text-white transition-colors duration-300 focus:outline-none font-body">Geografía</button>
          <button onClick={() => handleNavigationClick('cultures')} className="block w-full text-left px-4 py-2 text-brand-bg hover:bg-brand-red hover:text-white transition-colors duration-300 focus:outline-none font-body">Culturas</button>
          <div className="border-t border-brand-yellow/20 my-2"></div>
          <button
            onClick={() => handleNavigationClick('historia')}
            className="block w-full text-left px-4 py-2 text-brand-bg hover:bg-brand-red hover:text-white transition-colors duration-300 focus:outline-none flex items-center justify-between font-body"
          >
            Historia
          </button>
          <div className="border-t border-brand-yellow/20 my-2"></div>
          <button
            onClick={() => handleNavigationClick('literature1')}
            className="block w-full text-left px-4 py-2 text-brand-bg hover:bg-brand-red hover:text-white transition-colors duration-300 focus:outline-none flex items-center justify-between font-body"
          >
            Literatura
          </button>
          <div className="border-t border-brand-yellow/20 my-2"></div>
          <button onClick={() => handleNavigationClick('quiz')} className="block w-full text-left px-4 py-2 text-brand-bg hover:bg-brand-red hover:text-white transition-colors duration-300 focus:outline-none font-body">Quiz</button>
          <button onClick={() => handleNavigationClick('about')} className="block w-full text-left px-4 py-2 text-brand-bg hover:bg-brand-red hover:text-white transition-colors duration-300 focus:outline-none font-body">Acerca de</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;