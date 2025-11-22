import React, { useState } from "react";

// NOTA: Coloca las siguientes imágenes en la carpeta public/ del proyecto:
// /geografia_regiones.png (mapa de regiones y provincias)
// /bioko_sat.png (imagen satelital de Bioko)
// /monte_alen.jpg (bosque tropical Monte Alén) - Placeholder used
// /localizacion_ge.png (mapa de localización de Guinea Ecuatorial)
// /pico_basile.png (vista de Pico Basile)

const sections = [
  {
    title: "Regiones y división territorial",
    image: {
      src: "/geografia_regiones.png",
      alt: "Mapa de las regiones y provincias de Guinea Ecuatorial",
      caption: "Mapa de las regiones y provincias de Guinea Ecuatorial. Fuente: Wikimedia Commons."
    },
    content: (
      <>
        <p>
          Guinea Ecuatorial se divide en dos grandes regiones: la <b>Región Continental (Río Muni)</b> y la <b>Región Insular</b>. A su vez, el país está compuesto por ocho provincias: Litoral, Centro Sur, Kie-Ntem, Wele-Nzas, Djibloho (en el continente), y Bioko Norte, Bioko Sur, Annobón (en las islas). Las ciudades principales son <b>Malabo</b> (capital nacional, en Bioko Norte) y <b>Bata</b> (en Litoral). Según el censo de 2015, la población era de 1.222.442 habitantes, con el 72% en el continente y el 28% en las islas.</p>
        <ul className="list-disc ml-6 mt-2 text-sm">
          <li><b>Región Continental:</b> Litoral, Centro Sur, Kie-Ntem, Wele-Nzas, Djibloho</li>
          <li><b>Región Insular:</b> Bioko Norte, Bioko Sur, Annobón</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500">
          <b>Fuentes:</b> <a href="https://inege.org/" target="_blank" rel="noopener noreferrer" className="underline">INEGE</a>, <a href="http://www.statoids.com/ugq.html" target="_blank" rel="noopener noreferrer" className="underline">Statoids</a>, <a href="https://www.guineaecuatorialpress.com/noticias/ehate_tomi_presenta_el_censo_de_poblacion_de_guinea_ecuatorial" target="_blank" rel="noopener noreferrer" className="underline">Guinea Ecuatorial Press</a>
        </p>
      </>
    ),
  },
  {
    title: "Islas principales y menores",
    image: {
      src: "/bioko_sat.png",
      alt: "Imagen satelital de la isla de Bioko",
      caption: "Imagen satelital de Bioko. Fuente: NASA Landsat, Wikimedia Commons."
    },
    content: (
      <>
        <p>
          La <b>isla de Bioko</b> (2.017 km²) es la mayor y más poblada, de origen volcánico, situada a 40 km de Camerún. Aquí se encuentra Malabo. <b>Annobón</b> (17 km²) está a 595 km al suroeste, con capital en San Antonio de Palé. Otras islas menores son <b>Corisco</b>, <b>Elobey Grande</b>, <b>Elobey Chico</b> y varios islotes en la bahía de Corisco. Estas islas presentan una biodiversidad única, especialmente Bioko, con especies endémicas y bosques tropicales.</p>
        <ul className="list-disc ml-6 mt-2 text-sm">
          <li><b>Bioko:</b> volcánica, dos provincias (Norte y Sur), biodiversidad y montañas (Pico Basile, 3.008 m).</li>
          <li><b>Annobón:</b> pequeña, aislada, ecosistemas propios.</li>
          <li><b>Islas menores:</b> Corisco, Elobey Grande, Elobey Chico.</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500">
          <b>Fuentes:</b> <a href="https://doi.org/10.5209/OBMD.62662" target="_blank" rel="noopener noreferrer" className="underline">Sánchez Vega (2018)</a>, <a href="https://revistas.ucm.es/index.php/BOCM/article/view/42275" target="_blank" rel="noopener noreferrer" className="underline">Velayos et al. (2013)</a>, <a href="https://www.academia.edu/88996139/Biodiversity_Conservation_in_the_Gulf_of_Guinea_Oceanic_Islands_Recent_Progress_Ongoing_Challenges_and_Future_Directions" target="_blank" rel="noopener noreferrer" className="underline">Madruga (2022)</a>
        </p>
      </>
    ),
  },
  {
    title: "Clima y ecosistemas",
    image: {
      src: "https://via.placeholder.com/800x600?text=Monte+Alen",
      alt: "Bosque tropical en el Parque Nacional de Monte Alén",
      caption: "Bosque tropical en el Parque Nacional de Monte Alén. Fuente: Wikimedia Commons."
    },
    content: (
      <>
        <p>
          El clima es <b>tropical ecuatorial</b>: altas temperaturas (25-27°C), humedad elevada y lluvias abundantes (2.000-10.000 mm/año). Hay dos estaciones (lluviosa y seca), con variaciones entre continente e islas. Los principales ecosistemas son:</p>
        <ul className="list-disc ml-6 mt-2 text-sm">
          <li><b>Bosques tropicales húmedos:</b> predominan en Bioko y Río Muni, con gran biodiversidad.</li>
          <li><b>Manglares:</b> en costas y estuarios.</li>
          <li><b>Sabana y praderas:</b> en zonas interiores.</li>
          <li><b>Ecosistemas montanos:</b> Pico Basile (Bioko), Monte Alén (continente).</li>
        </ul>
        <p>Existen áreas protegidas como el Parque Nacional de Monte Alén y la Reserva Científica de la Gran Caldera de Luba.</p>
        <p className="mt-2 text-xs text-gray-500">
          <b>Fuentes:</b> <a href="https://www.cia.gov/the-world-factbook/about/archives/2023/countries/equatorial-guinea/" target="_blank" rel="noopener noreferrer" className="underline">CIA World Factbook</a>, <a href="https://doi.org/10.5209/OBMD.62662" target="_blank" rel="noopener noreferrer" className="underline">Sánchez Vega (2018)</a>, <a href="https://www.academia.edu/60597254" target="_blank" rel="noopener noreferrer" className="underline">Guinean forests of West Africa</a>
        </p>
      </>
    ),
  },
  {
    title: "Mapas y localización",
    image: {
      src: "/localizacion_ge.png",
      alt: "Mapa de localización de Guinea Ecuatorial en África",
      caption: "Localización de Guinea Ecuatorial en África. Fuente: Wikimedia Commons."
    },
    content: (
      <>
        <p>
          Guinea Ecuatorial se sitúa en la costa centro-occidental de África, entre Camerún y Gabón, frente al Golfo de Guinea. Su localización estratégica le otorga acceso a recursos marinos y una posición relevante en la región. Puedes consultar mapas detallados en los siguientes enlaces:</p>
        <ul className="list-disc ml-6 mt-2 text-sm">
          <li><a href="https://maps.lib.utexas.edu/maps/equatorial_guinea.html" target="_blank" rel="noopener noreferrer" className="underline">Colección de mapas Perry-Castañeda (Universidad de Texas)</a></li>
          <li><a href="https://www.ezilon.com/maps/africa/equatorial-guinea-maps.html" target="_blank" rel="noopener noreferrer" className="underline">Mapa político detallado (Ezilon)</a></li>
        </ul>
        <p className="mt-2 text-xs text-gray-500">
          <b>Fuentes:</b> <a href="https://maps.lib.utexas.edu/maps/equatorial_guinea.html" target="_blank" rel="noopener noreferrer" className="underline">Perry-Castañeda Map Collection</a>, <a href="https://www.ezilon.com/maps/africa/equatorial-guinea-maps.html" target="_blank" rel="noopener noreferrer" className="underline">Ezilon</a>
        </p>
      </>
    ),
  },
  {
    title: "Datos geográficos destacados",
    image: {
      src: "/pico_basile.png",
      alt: "Vista de Pico Basile desde Malabo, Guinea Ecuatorial",
      caption: "Vista de Pico Basile desde Malabo. Fuente: Wikimedia Commons."
    },
    content: (
      <>
        <ul className="list-disc ml-6 text-sm">
          <li><b>Superficie total:</b> 28.051 km²</li>
          <li><b>Punto más alto:</b> Pico Basile (3.008 m, Bioko)</li>
          <li><b>Costas:</b> 296 km</li>
          <li><b>Recursos naturales:</b> Petróleo, gas natural, madera, oro, bauxita, diamantes, tantalio, arena y grava, arcilla</li>
          <li><b>Uso del suelo:</b> 10% agrícola, 57% forestal, 33% otros usos</li>
          <li><b>Población (2023):</b> 1.737.695 habitantes</li>
          <li><b>Densidad:</b> Baja, con concentración urbana en Malabo y Bata</li>
          <li><b>Riesgos naturales:</b> Tormentas, inundaciones, actividad volcánica en Bioko</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500">
          <b>Fuentes:</b> <a href="https://inege.org/" target="_blank" rel="noopener noreferrer" className="underline">INEGE</a>, <a href="https://www.cia.gov/the-world-factbook/about/archives/2023/countries/equatorial-guinea/" target="_blank" rel="noopener noreferrer" className="underline">CIA World Factbook</a>
        </p>
      </>
    ),
  },
];

export default function Geography() {
  const [open, setOpen] = useState(0);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Geografía de Guinea Ecuatorial</h1>
      <div className="space-y-4">
        {sections.map((section, idx) => (
          <div key={section.title} className="border rounded-lg bg-white shadow">
            <button
              className="w-full text-left px-4 py-3 font-semibold focus:outline-none flex justify-between items-center"
              onClick={() => setOpen(open === idx ? -1 : idx)}
              aria-expanded={open === idx}
            >
              <span>{section.title}</span>
              <span className="ml-2">{open === idx ? "▲" : "▼"}</span>
            </button>
            {open === idx && (
              <div className="px-4 pb-4 text-gray-800 animate-fade-in">
                <a href={section.image.src} target="_blank" rel="noopener noreferrer">
                  <img
                    src={section.image.src}
                    alt={section.image.alt}
                    className="w-full max-h-64 object-cover rounded mb-2 border"
                  />
                </a>
                <div className="text-xs text-gray-500 mb-2 text-center">{section.image.caption}</div>
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 text-xs text-gray-500 text-center">
        <p>
          Para más información, consulta las fuentes enlazadas en cada sección. Última actualización: julio 2024.
        </p>
      </div>
    </div>
  );
} 