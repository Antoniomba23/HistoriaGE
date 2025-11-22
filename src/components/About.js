import React from 'react';

const About = () => (
  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-8 max-w-3xl mx-auto my-12">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Acerca de HistoriaGE</h2>
    <p className="text-lg text-gray-700 mb-4 text-justify">
      <b>HistoriaGE</b> es una aplicación web interactiva dedicada a la divulgación de la historia, geografía y patrimonio cultural de Guinea Ecuatorial. Su objetivo es ofrecer un recorrido cronológico y temático, accesible y riguroso, para estudiantes, docentes y público general.
    </p>
    <p className="text-lg text-gray-700 mb-4 text-justify">
      El proyecto ha sido desarrollado por un equipo multidisciplinar apasionado por la historia africana y la innovación educativa. Todos los contenidos están basados en bibliografía académica, fuentes primarias y recursos multimedia de calidad.
    </p>
    <p className="text-lg text-gray-700 mb-4 text-justify">
      Si tienes sugerencias, correcciones o deseas colaborar aportando conocimientos, no dudes en contactarnos. Tu participación es vital para mejorar este proyecto.
    </p>
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6 text-center">
      <p className="text-blue-900 font-medium mb-2">Envíanos tus aportaciones a:</p>
      <a href="mailto:infombanzang@gmail.com" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300">
        infombanzang@gmail.com
      </a>
    </div>
    <div className="mt-8 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} HistoriaGE. Todos los derechos reservados.
    </div>
  </div>
);

export default About;