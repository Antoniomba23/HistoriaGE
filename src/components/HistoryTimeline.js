import React, { useState } from 'react';

const HistoryTimeline = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const periods = [
    {
      year: 'Prehistoria - Siglo XVIII',
      title: 'Primeros Habitantes y Contactos Externos',
      description: 'Evidencia arqueológica, migraciones bantúes y desarrollo de culturas originarias.',
      details: 'Presencia humana temprana en Bioko (cuevas de Bicurí, Elabé). Migraciones bantúes al continente (Río Muni). Llegada de los Bubi a Bioko. Desarrollo de estructuras sociales y políticas de Fang, Ndowé, Bubi y Annoboneses.'
    },
    {
      year: '1471-1778',
      title: 'Llegada de Europeos y Trata de Esclavos',
      description: 'Descubrimiento de Bioko, dominio portugués y tráfico de esclavos.',
      details: 'Fernão do Pó descubre Bioko. Portugal reclama islas. Tratado de Tordesillas. Las islas se convierten en puntos de escala para el tráfico de esclavos. Presencia holandesa e inglesa. Portugal cede las islas a España (1778).'
    },
    {
      year: '1778-1968',
      title: 'Consolidación Colonial Española',
      description: 'Dominio español, economía de plantación y cambios sociales.',
      details: 'Gran Bretaña arrienda bases en Fernando Poo. España reafirma su soberanía y coloniza. Plantaciones de cacao y café, trabajo contratado, unificación administrativa, cambios sociales y papel de la Iglesia.'
    },
    {
      year: '1959-1968',
      title: 'Descolonización y Nacimiento de la Nación',
      description: 'Autonomía, independencia y primeros pasos como república.',
      details: 'Provincia Española del Golfo de Guinea. Autonomía limitada. Independencia bajo Francisco Macías Nguema.'
    },
    {
      year: '1969-1979',
      title: 'Primeros Años de Independencia',
      description: 'Cambios institucionales, sociales y económicos.',
      details: 'Reorganización institucional, establecimiento del partido único, transformaciones económicas y sociales, cambios en la población y en la estructura educativa y religiosa.'
    },
    {
      year: '1979-1990',
      title: 'Transición y Nuevo Gobierno',
      description: 'Cambio de liderazgo y nuevas medidas institucionales.',
      details: 'Cambio de liderazgo en 1979, gobierno de transición, implementación de nuevas medidas económicas y sociales.'
    },
    {
      year: '1990-Actualidad',
      title: 'Reformas y Retos Contemporáneos',
      description: 'Reformas institucionales, auge petrolero y desafíos actuales.',
      details: 'Nueva Constitución, introducción del multipartidismo, descubrimiento y explotación de petróleo y gas, cambios económicos y sociales, retos y oportunidades en el contexto nacional e internacional.'
    }
  ];

  const handlePeriodClick = (index) => {
    setSelectedPeriod(selectedPeriod === index ? null : index);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-8 transform transition-all duration-300 hover:scale-[1.01]">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Línea de Tiempo Interactiva</h2>
      <div className="space-y-10">
        {periods.map((period, index) => (
          <div 
            key={index} 
            className="flex group cursor-pointer relative" 
            onClick={() => handlePeriodClick(index)}
          >
            <div className="flex flex-col items-center mr-6">
              <div className={`w-4 h-4 rounded-full mt-1.5 transition-all duration-300 ${selectedPeriod === index ? 'bg-blue-700 ring-4 ring-blue-200' : 'bg-blue-500 group-hover:bg-blue-600'}`}></div>
              {index < periods.length - 1 && (
                <div className="w-0.5 h-full bg-gray-200 group-hover:bg-gray-300 transition-colors duration-300"></div>
              )}
            </div>
            <div className="pb-8 w-full">
              <p className="text-sm font-semibold text-blue-600 mb-1">{period.year}</p>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{period.title}</h3>
              <p className="text-gray-600 leading-relaxed">{period.description}</p>
              {selectedPeriod === index && (
                <div className="mt-5 p-5 bg-blue-50 rounded-xl border border-blue-200 text-gray-700 shadow-inner transition-all duration-500 ease-in-out opacity-100 translate-y-0">
                  <p>{period.details}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryTimeline;