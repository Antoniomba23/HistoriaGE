import React, { useState } from 'react';

const ChapterCard = ({ title, description, development, periods, sources }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const togglePeriod = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-brand-yellow/30 p-8 transform transition-all duration-300 hover:scale-[1.01]">
      <h3 className="text-3xl font-display font-bold text-brand-brown mb-6 text-center">{title}</h3>
      <p className="text-brand-brown/80 font-body mb-8 leading-relaxed text-lg text-center">{description}</p>
      {development && (
        <div className="prose prose-lg max-w-none mx-auto mb-10 text-justify text-brand-brown font-body">
          {development}
        </div>
      )}
      <div className="space-y-4 mb-10">
        {periods.map((period, index) => (
          <div key={index} className="border-l-4 border-brand-red pl-6 py-2 bg-brand-bg rounded-lg shadow-sm">
            <button
              className="text-lg font-bold text-brand-red mb-1 focus:outline-none flex items-center w-full justify-between font-display"
              onClick={() => togglePeriod(index)}
              aria-expanded={openIndexes.includes(index)}
            >
              {period.time}
              <span className="ml-2 text-brand-yellow">{openIndexes.includes(index) ? '▲' : '▼'}</span>
            </button>
            {openIndexes.includes(index) && (
              <div className="mt-2 text-brand-brown leading-relaxed animate-fade-in font-body">
                {period.detail ? period.detail : period.event}
              </div>
            )}
          </div>
        ))}
      </div>
      {sources && sources.length > 0 && (
        <div className="mt-8 pt-6 border-t border-brand-yellow/20">
          <h4 className="text-xl font-bold text-brand-brown mb-4 font-display">Fuentes y lecturas recomendadas</h4>
          <ol className="list-decimal pl-6 space-y-2 text-brand-brown/80 font-body">
            {sources.map((src, idx) => (
              <li key={idx}>
                {src.url ? (
                  <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-brand-red underline hover:text-brand-brown transition-colors">{src.citation}</a>
                ) : (
                  <span>{src.citation}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default ChapterCard;