import React from 'react';

const CulturalHeritage = () => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:scale-[1.01]">
      <div className="p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Patrimonio Cultural y Reflexiones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-purple-800 text-lg mb-2">Tradiciones Fang</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              La cultura Fang es rica en expresiones artísticas, destacando sus impresionantes máscaras y rituales ancestrales que forman parte esencial de su identidad.
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-yellow-800 text-lg mb-2">Arquitectura Colonial</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Las ciudades de Malabo y Bata conservan un legado arquitectónico colonial español, con edificios históricos que narran capítulos importantes de su pasado.
            </p>
          </div>
          <div className="bg-red-50 p-6 rounded-2xl border border-red-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-red-800 text-lg mb-2">Gastronomía Vibrante</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              La cocina ecuatoguineana es una fusión de sabores, con platos emblemáticos como el "pepesup" (sopa de pescado picante) y el "sopa de cacahuete".
            </p>
          </div>
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 shadow-inner mb-6">
          <h3 className="font-bold text-blue-800 text-lg mb-2">Diversidad Cultural y Lenguas</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            El país enfrenta el desafío de construir una identidad nacional integradora entre Fang, Bubi, Ndowé, Annoboneses y otros. El español es la lengua oficial y de cohesión, junto a lenguas vernáculas.
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200 shadow-inner mb-6">
          <h3 className="font-bold text-green-800 text-lg mb-2">Legado Colonial y Postcolonial</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            El país conserva huellas de su pasado colonial y de los cambios institucionales vividos tras la independencia, que han influido en la sociedad y la cultura actual.
          </p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200 shadow-inner mb-6">
          <h3 className="font-bold text-yellow-800 text-lg mb-2">Economía y Desarrollo</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            Guinea Ecuatorial afronta el reto de diversificar su economía y promover un desarrollo sostenible, adaptándose a los cambios globales y regionales.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-2xl border border-red-200 shadow-inner">
          <h3 className="font-bold text-red-800 text-lg mb-2">Retos Sociales y Culturales</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            La sociedad ecuatoguineana continúa construyendo su identidad nacional, fomentando la convivencia y el respeto entre sus diferentes comunidades y promoviendo la participación en la vida cultural y social.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CulturalHeritage;