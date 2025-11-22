import React from 'react';

const ShipGallery = () => {
  const ships = [
    { id: 1, src: 'https://via.placeholder.com/400x250?text=Carabela', alt: 'Carabela del siglo XV', caption: 'Carabela: La embarcación que abrió nuevas rutas marítimas.' },
    { id: 2, src: 'https://via.placeholder.com/400x250?text=Galeon', alt: 'Galeón español', caption: 'Galeón: Símbolo del poder naval y comercial de España.' },
    { id: 3, src: 'https://via.placeholder.com/400x250?text=Fragata', alt: 'Fragata del siglo XVIII', caption: 'Fragata: Barco de guerra ágil, esencial en la defensa colonial.' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-8 transform transition-all duration-300 hover:scale-[1.01]">
      <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Barcos Históricos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ships.map((ship) => (
          <div key={ship.id} className="flex flex-col items-center bg-gray-50 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={ship.src} alt={ship.alt} className="rounded-xl shadow-lg w-full h-48 object-cover mb-4 border border-gray-200" />
            <p className="text-base text-gray-700 text-center font-medium leading-snug">{ship.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipGallery;