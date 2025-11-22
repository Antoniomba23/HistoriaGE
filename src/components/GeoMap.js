import React from 'react';

const GeoMap = () => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:scale-[1.01]">
      <div className="p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Geografía y Pueblos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-blue-50 p-6 rounded-2xl shadow-inner">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Territorio</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Guinea Ecuatorial está formada por:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 leading-relaxed">
              <li><b>Región continental:</b> Río Muni.</li>
              <li><b>Islas:</b> Bioko, Annobón, Corisco, Elobeyes e islotes adyacentes.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              Esta diversidad geográfica ha influido profundamente en su historia y desarrollo social.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl shadow-inner">
            <h3 className="text-xl font-bold text-green-800 mb-3">Pueblos Originarios</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
              <li><span className="font-semibold">Bantúes:</span> Principalmente Fang, Ndowé y Bissio, asentados en la región continental.</li>
              <li><span className="font-semibold">Bubi:</span> Habitantes ancestrales de la isla de Bioko, con una cultura insular distintiva.</li>
              <li><span className="font-semibold">Fernandinos:</span> Descendientes criollos de Bioko, con identidad propia.</li>
              <li><span className="font-semibold">Annoboneses:</span> Población única de la isla de Annobón, con ricas tradiciones.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeoMap;