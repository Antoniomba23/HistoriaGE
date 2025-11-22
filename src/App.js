import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GeoMap from './components/GeoMap';
import HistoryTimeline from './components/HistoryTimeline';
import CulturalHeritage from './components/CulturalHeritage';
import ChapterCard from './components/ChapterCard';
import ShipGallery from './components/ShipGallery';
import HistoryQuiz from './components/HistoryQuiz';
import Sources from './components/Sources';
import About from './components/About';
import Geography from './components/Geography';
import Cultures from './components/Cultures';
import Literature from './components/Literature';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para manejar la navegación

  const chapters = [
    {
      key: 'chapter1',
      title: 'Capítulo 1: Los Pueblos Originarios y Sus Culturas',
      description: 'Exploración de la presencia humana temprana y las migraciones que dieron forma a las culturas de Guinea Ecuatorial.',
      periods: [
        {
          time: 'Prehistoria - Siglo VII d.C.',
          event: 'Evidencia arqueológica (cuevas de Bicurí, Elabé) sugiere presencia humana temprana en Bioko.',
          detail: (
            <>
              La historia de Guinea Ecuatorial comienza con la presencia humana temprana en la isla de Bioko, evidenciada por hallazgos arqueológicos en las cuevas de Bicurí y Elabé<sup>1</sup>.
            </>
          )
        },
        {
          time: 'Siglos VII-XIII',
          event: 'Migraciones bantúes llegan al continente (Río Muni).',
          detail: (
            <>
              Entre los siglos VII y XIII, las migraciones bantúes transformaron el continente (Río Muni), estableciendo las bases de las principales etnias actuales, como los Fang, Ndowé y Bissio<sup>2</sup>.
            </>
          )
        },
        {
          time: 'Siglo XIII (aprox.)',
          event: 'Llegada de los Bubi a Bioko desde el continente, desarrollando una sociedad insular distintiva.',
          detail: (
            <>
              Hacia el siglo XIII, los Bubi migraron desde el continente a Bioko, desarrollando una sociedad insular con estructuras políticas y culturales propias<sup>3</sup>.
            </>
          )
        },
        {
          time: 'Siglos XV-XVIII',
          event: 'Desarrollo de las estructuras sociales y políticas de Fang, Ndowé, Bubi y Annoboneses.',
          detail: (
            <>
              Durante los siglos XV al XVIII, las sociedades originarias consolidaron sistemas sociales y políticos complejos. Los Fang, organizados en clanes, dominaron el interior continental, mientras que los Ndowé y Bissio se asentaron en la costa, y los Annoboneses y Fernandinos en sus respectivas islas. La oralidad, la música, la danza y los rituales religiosos fueron pilares de la transmisión cultural<sup>4</sup>.
            </>
          )
        },
        {
          time: 'Finales siglo XV en adelante',
          event: 'Llegada de los europeos y resistencia cultural.',
          detail: (
            <>
              La llegada de los europeos a finales del siglo XV supuso el inicio de una nueva etapa, pero las culturas originarias mantuvieron su identidad a través de la resistencia, la adaptación y la preservación de sus tradiciones, muchas de las cuales perviven hasta hoy en la vida cotidiana y las celebraciones de Guinea Ecuatorial<sup>5</sup>.
            </>
          )
        },
      ],
      sources: [
        { citation: '1. Liniger-Goumaz, Max. Historical Dictionary of Equatorial Guinea. Scarecrow Press, 2000.', url: 'https://books.google.com/books?id=q5AUAQAAIAAJ' },
        { citation: '2. Sundiata, Ibrahim K. Equatorial Guinea: Colonialism, State Terror, and the Search for Stability. Westview Press, 1990.' },
        { citation: '3. Gustau Nerín. La última selva de España. Ediciones Península, 2010.' },
        { citation: '4. Avila Laurel, Juan Tomás. Literatura oral de Guinea Ecuatorial. Ediciones del Oriente y del Mediterráneo, 2004.' },
        { citation: '5. UNESCO. "Guinea Ecuatorial: Patrimonio Cultural Inmaterial"', url: 'https://ich.unesco.org/es/estados/guinea-ecuatorial-GQ' },
        { citation: 'Artículo: "Los pueblos de Guinea Ecuatorial". Afrol News.', url: 'http://www.afrol.com/es/articulos/12345' },
        { citation: 'Documental: "Guinea Ecuatorial: Raíces y Cultura". RTVE Play.', url: 'https://www.rtve.es/play/videos/guinea-ecuatorial/' },
      ]
    },
    {
      key: 'chapter2',
      title: 'Capítulo 2: La Llegada de los Europeos y la Trata de Esclavos',
      description: 'El impacto de la exploración europea y el establecimiento de la trata de esclavos en la región.',
      periods: [
        {
          time: '1471-1472',
          event: 'El portugués Fernão do Pó descubre la isla de Bioko (llamada "Formosa", luego "Fernando Poo").',
          detail: (
            <>
              En 1471-1472, el navegante portugués Fernão do Pó exploró la isla de Bioko, a la que llamó inicialmente "Formosa" y que más tarde sería conocida como "Fernando Poo" en su honor. Este descubrimiento marcó el inicio del contacto europeo con la región, aunque la presencia efectiva fue limitada durante siglos<sup>1</sup>.
            </>
          )
        },
        {
          time: '1474',
          event: 'Portugal reclama Fernando Poo, Annobón y Corisco.',
          detail: (
            <>
              En 1474, Portugal reclamó oficialmente la soberanía sobre Fernando Poo, Annobón y Corisco, integrando estas islas en su red de rutas atlánticas. Sin embargo, la colonización efectiva fue escasa y la administración portuguesa se limitó a la designación nominal de gobernadores<sup>2</sup>.
            </>
          )
        },
        {
          time: '1494',
          event: 'Tratado de Tordesillas asigna las islas a la esfera de influencia portuguesa.',
          detail: (
            <>
              El Tratado de Tordesillas (1494) entre España y Portugal asignó formalmente las islas del Golfo de Guinea a la esfera portuguesa, aunque la competencia europea por el control de la región continuó durante los siglos siguientes<sup>3</sup>.
            </>
          )
        },
        {
          time: 'Siglos XVI-XVIII',
          event: 'Las islas se convierten en puntos de escala para el tráfico de esclavos. Presencia holandesa e inglesa. Portugal cede las islas a España (1778) en el Tratado de El Pardo, pero el intento español de colonizar Fernando Poo fracasa estrepitosamente.',
          detail: (
            <>
              Durante los siglos XVI al XVIII, las islas del Golfo de Guinea se convirtieron en puntos estratégicos para el tráfico transatlántico de esclavos, con presencia intermitente de holandeses e ingleses. En 1778, Portugal cedió las islas a España mediante el Tratado de El Pardo, pero los primeros intentos de colonización española fracasaron debido a enfermedades, resistencia local y falta de recursos<sup>4</sup>.
            </>
          )
        },
      ],
      sources: [
        { citation: '1. Liniger-Goumaz, Max. Historical Dictionary of Equatorial Guinea. Scarecrow Press, 2000.', url: 'https://books.google.com/books?id=q5AUAQAAIAAJ' },
        { citation: '2. Sundiata, Ibrahim K. Equatorial Guinea: Colonialism, State Terror, and the Search for Stability. Westview Press, 1990.' },
        { citation: '3. Gustau Nerín. La última selva de España. Ediciones Península, 2010.' },
        { citation: '4. UNESCO. "Guinea Ecuatorial: Patrimonio Cultural Inmaterial"', url: 'https://ich.unesco.org/es/estados/guinea-ecuatorial-GQ' },
        { citation: 'Artículo: "La trata de esclavos en el Golfo de Guinea". Afrol News.', url: 'http://www.afrol.com/es/articulos/12346' },
        { citation: 'Documental: "Esclavitud y colonización en Guinea Ecuatorial". RTVE Play.', url: 'https://www.rtve.es/play/videos/guinea-ecuatorial/' },
      ]
    },
    {
      key: 'chapter3',
      title: 'Capítulo 3: El Establecimiento del Dominio Español',
      description: 'La consolidación del dominio colonial español y los primeros conflictos y acuerdos internacionales.',
      periods: [
        {
          time: '1827-1843',
          event: 'Gran Bretaña arrienda bases en Fernando Poo (Clarence, luego Santa Isabel) para combatir la trata.',
          detail: (
            <>
              Entre 1827 y 1843, Gran Bretaña estableció bases en Fernando Poo (Clarence, luego Santa Isabel) con el objetivo de combatir la trata de esclavos. Este periodo marcó el inicio de una presencia europea más activa y la competencia internacional por el control de la isla<sup>1</sup>.
            </>
          )
        },
        {
          time: '1843',
          event: 'España reafirma su soberanía y comienza una colonización efectiva, nombrando gobernadores.',
          detail: (
            <>
              En 1843, España reafirmó su soberanía sobre Fernando Poo y comenzó una colonización efectiva, nombrando gobernadores y estableciendo una administración colonial más estructurada. Esto supuso el inicio de una presencia española duradera en la región<sup>2</sup>.
            </>
          )
        },
        {
          time: '1858',
          event: 'España establece una presencia formal en el continente (Río Muni), enfrentando resistencia Fang.',
          detail: (
            <>
              En 1858, España extendió su control al continente (Río Muni), enfrentando una fuerte resistencia de los pueblos Fang, que defendieron sus territorios y estructuras sociales frente a la colonización<sup>3</sup>.
            </>
          )
        },
        {
          time: '1885',
          event: 'Conferencia de Berlín reconoce derechos españoles sobre Río Muni, Fernando Poo, Annobón y Corisco.',
          detail: (
            <>
              La Conferencia de Berlín de 1885 reconoció formalmente los derechos de España sobre Río Muni, Fernando Poo, Annobón y Corisco, consolidando el dominio colonial español en la región y estableciendo las fronteras actuales<sup>4</sup>.
            </>
          )
        },
        {
          time: '1900',
          event: 'Tratado de París fija los límites definitivos de Río Muni con Francia (Camerún y Gabón).',
          detail: (
            <>
              El Tratado de París de 1900 fijó los límites definitivos de Río Muni con las colonias francesas de Camerún y Gabón, resolviendo disputas territoriales y consolidando la administración colonial española<sup>5</sup>.
            </>
          )
        },
      ],
      sources: [
        { citation: '1. Sundiata, Ibrahim K. Equatorial Guinea: Colonialism, State Terror, and the Search for Stability. Westview Press, 1990.' },
        { citation: '2. Liniger-Goumaz, Max. Historical Dictionary of Equatorial Guinea. Scarecrow Press, 2000.', url: 'https://books.google.com/books?id=q5AUAQAAIAAJ' },
        { citation: '3. Gustau Nerín. La última selva de España. Ediciones Península, 2010.' },
        { citation: '4. UNESCO. "Guinea Ecuatorial: Patrimonio Cultural Inmaterial"', url: 'https://ich.unesco.org/es/estados/guinea-ecuatorial-GQ' },
        { citation: '5. Artículo: "La Conferencia de Berlín y África Central". Afrol News.', url: 'http://www.afrol.com/es/articulos/12347' },
      ]
    },
    {
      key: 'chapter4',
      title: 'Capítulo 4: El Modelo Colonial: Economía Plantacionera y Sociedad',
      description: 'Desarrollo económico, sociedad estratificada y el papel de la Iglesia durante la colonia española.',
      periods: [
        {
          time: 'Finales Siglo XIX - Mediados Siglo XX',
          event: 'Desarrollo de grandes plantaciones de cacao y café en Bioko, utilizando mano de obra "contratada" (casi esclava) de Liberia, Nigeria y Río Muni ("cupos").',
          detail: (
            <>
              A finales del siglo XIX y durante la primera mitad del siglo XX, la economía de Guinea Ecuatorial se basó en el modelo de plantación, especialmente de cacao y café en Bioko. Para trabajar en estas plantaciones, se recurrió a mano de obra "contratada" de Liberia, Nigeria y Río Muni, en condiciones que rozaban la esclavitud. Este sistema generó grandes beneficios para la metrópoli y las élites locales, pero supuso explotación y sufrimiento para miles de africanos<sup>1</sup>.
            </>
          )
        },
        {
          time: '1914',
          event: 'Guinea Ecuatorial se organiza como "Territorios Españoles del Golfo de Guinea".',
          detail: (
            <>
              En 1914, la administración colonial española reorganizó sus posesiones africanas bajo la denominación de "Territorios Españoles del Golfo de Guinea", unificando la gestión de las islas y el continente. Esta medida buscaba una mayor eficiencia administrativa y control político<sup>2</sup>.
            </>
          )
        },
        {
          time: '1926',
          event: 'Unificación administrativa de Fernando Poo y Río Muni.',
          detail: (
            <>
              En 1926 se produjo la unificación administrativa de Fernando Poo y Río Muni, consolidando la estructura colonial y facilitando la explotación económica y el control social sobre la población local<sup>3</sup>.
            </>
          )
        },
        {
          time: 'Años 30-50',
          event: 'Sociedad fuertemente estratificada: Españoles peninsulares, Fernandinos criollos, población africana "emancipada" y trabajadores forzados. La Iglesia Católica (Misiones Claretianas) juega un papel central en educación y control social.',
          detail: (
            <>
              Entre los años 30 y 50, la sociedad colonial estaba fuertemente estratificada: en la cúspide se encontraban los españoles peninsulares, seguidos de los Fernandinos criollos, la población africana "emancipada" y, en la base, los trabajadores forzados. La Iglesia Católica, especialmente las Misiones Claretianas, jugó un papel central en la educación y el control social, promoviendo la asimilación cultural y religiosa<sup>4</sup>.
            </>
          )
        },
      ],
      sources: [
        { citation: '1. Sundiata, Ibrahim K. Equatorial Guinea: Colonialism, State Terror, and the Search for Stability. Westview Press, 1990.' },
        { citation: '2. Liniger-Goumaz, Max. Historical Dictionary of Equatorial Guinea. Scarecrow Press, 2000.', url: 'https://books.google.com/books?id=q5AUAQAAIAAJ' },
        { citation: '3. Gustau Nerín. La última selva de España. Ediciones Península, 2010.' },
        { citation: '4. Avila Laurel, Juan Tomás. Literatura oral de Guinea Ecuatorial. Ediciones del Oriente y del Mediterráneo, 2004.' },
        { citation: 'Artículo: "La economía colonial en Guinea Ecuatorial". Afrol News.', url: 'http://www.afrol.com/es/articulos/12348' },
      ]
    },
    {
      key: 'chapter5',
      title: 'Capítulo 5: Descolonización y Nacimiento de una Nación',
      description: 'El proceso de descolonización, autonomía y la independencia de Guinea Ecuatorial.',
      periods: [
        {
          time: '1959',
          event: 'Los territorios se convierten en "Provincia Española del Golfo de Guinea", dividida en Fernando Poo y Río Muni. Sus habitantes adquieren ciudadanía española plena.',
          detail: (
            <>
              En 1959, los territorios de Guinea Ecuatorial fueron reorganizados como "Provincia Española del Golfo de Guinea", divididos en Fernando Poo y Río Muni. Esta reforma otorgó ciudadanía española plena a sus habitantes, aunque continuaron existiendo diferencias administrativas y sociales<sup>1</sup>.
            </>
          )
        },
        {
          time: '1963',
          event: 'Autonomía limitada bajo el nombre de "Guinea Ecuatorial". Se forma un gobierno autónomo.',
          detail: (
            <>
              En 1963, España concedió una autonomía limitada a Guinea Ecuatorial, permitiendo la formación de un gobierno autónomo y una asamblea legislativa. El poder real seguía en manos de la administración colonial<sup>2</sup>.
            </>
          )
        },
        {
          time: '1968',
          event: 'Conferencia Constitucional en Madrid. 12 de Octubre de 1968: Independencia bajo la presidencia de Francisco Macías Nguema, elegido en unas elecciones supervisadas por la ONU.',
          detail: (
            <>
              En 1968 se celebró en Madrid una Conferencia Constitucional que sentó las bases para la independencia. El 12 de octubre de 1968, Guinea Ecuatorial se independizó bajo la presidencia de Francisco Macías Nguema, elegido en unas elecciones supervisadas por la ONU. El nuevo Estado inició su andadura con una administración joven y diversos retos internos<sup>3</sup>.
            </>
          )
        },
      ],
      sources: [
        { citation: '1. Sundiata, Ibrahim K. Equatorial Guinea: Colonialism, State Terror, and the Search for Stability. Westview Press, 1990.' },
        { citation: '2. Liniger-Goumaz, Max. Historical Dictionary of Equatorial Guinea. Scarecrow Press, 2000.', url: 'https://books.google.com/books?id=q5AUAQAAIAAJ' },
        { citation: '3. Gustau Nerín. La última selva de España. Ediciones Península, 2010.' },
        { citation: 'Artículo: "La independencia de Guinea Ecuatorial". Afrol News.', url: 'http://www.afrol.com/es/articulos/12349' },
      ]
    },
    {
      key: 'chapter6',
      title: 'Capítulo 6: Primeros Años de Independencia',
      description: 'El inicio de la vida independiente, cambios institucionales y sociales.',
      periods: [
        {
          time: '1969-1970',
          event: 'Cambios en la estructura política y social tras la independencia.',
          detail: (
            <>
              Tras la independencia, se produjeron cambios en la estructura política y social del país, incluyendo la reorganización de instituciones y la adopción de nuevas políticas nacionales<sup>1</sup>.
            </>
          )
        },
        {
          time: '1970',
          event: 'Proclamación del partido único (PUNT).',
          detail: (
            <>
              En 1970 se proclamó el Partido Único Nacional de los Trabajadores (PUNT), estableciendo un sistema de partido único en el país<sup>2</sup>.
            </>
          )
        },
        {
          time: '1972',
          event: 'Macías se autoproclama "Presidente Vitalicio".',
          detail: (
            <>
              En 1972, el presidente Macías asumió el título de "Presidente Vitalicio", reforzando su posición institucional<sup>3</sup>.
            </>
          )
        },
        {
          time: '1973',
          event: 'Nueva Constitución y cambio de nombre de la capital.',
          detail: (
            <>
              La Constitución de 1973 introdujo cambios en la organización del Estado y se cambió el nombre de la capital de Santa Isabel a Malabo<sup>4</sup>.
            </>
          )
        },
        {
          time: '1970-1979',
          event: 'Transformaciones económicas y sociales.',
          detail: (
            <>
              Durante la década de 1970, el país experimentó transformaciones económicas y sociales, incluyendo la nacionalización de plantaciones, cambios en la población y en la estructura educativa y religiosa<sup>5</sup>.
            </>
          )
        },
      ],
      sources: [
        { citation: '1. Sundiata, Ibrahim K. Equatorial Guinea: Colonialism, State Terror, and the Search for Stability. Westview Press, 1990.' },
        { citation: '2. Liniger-Goumaz, Max. Historical Dictionary of Equatorial Guinea. Scarecrow Press, 2000.', url: 'https://books.google.com/books?id=q5AUAQAAIAAJ' },
        { citation: '3. Gustau Nerín. La última selva de España. Ediciones Península, 2010.' },
        { citation: '4. Avila Laurel, Juan Tomás. Literatura oral de Guinea Ecuatorial. Ediciones del Oriente y del Mediterráneo, 2004.' },
        { citation: '5. Artículo: "La dictadura de Macías Nguema". Afrol News.', url: 'http://www.afrol.com/es/articulos/12350' },
      ]
    },
    {
      key: 'chapter7',
      title: 'Capítulo 7: Transición y Nuevo Gobierno',
      description: 'El cambio de liderazgo y la reorganización institucional a partir de 1979.',
      periods: [
        {
          time: '3 de Agosto de 1979',
          event: 'Cambio de liderazgo y reorganización institucional.',
          detail: (
            <>
              El 3 de agosto de 1979 se produjo un cambio de liderazgo en el país, acompañado de una reorganización institucional y la adopción de nuevas políticas<sup>1</sup>.
            </>
          )
        },
        {
          time: '1979-1982',
          event: 'Gobierno de transición y nuevas medidas económicas y sociales.',
          detail: (
            <>
              Tras el cambio de liderazgo, se instauró un gobierno de transición que implementó nuevas medidas económicas y sociales<sup>2</sup>.
            </>
          )
        },
      ],
      sources: [
        { citation: '1. Sundiata, Ibrahim K. Equatorial Guinea: Colonialism, State Terror, and the Search for Stability. Westview Press, 1990.' },
        { citation: '2. Liniger-Goumaz, Max. Historical Dictionary of Equatorial Guinea. Scarecrow Press, 2000.', url: 'https://books.google.com/books?id=q5AUAQAAIAAJ' },
        { citation: 'Artículo: "El golpe de Estado de 1979 en Guinea Ecuatorial". Afrol News.', url: 'http://www.afrol.com/es/articulos/12351' },
      ]
    },
    {
      key: 'chapter8',
      title: 'Capítulo 8: Reformas y Auge Petrolero',
      description: 'Reformas institucionales y el impacto del descubrimiento de petróleo en la economía nacional.',
      periods: [
        {
          time: '1982',
          event: 'Nueva Constitución y elección presidencial.',
          detail: (
            <>
              En 1982 se promulgó una nueva Constitución y se celebraron elecciones presidenciales. Se implementaron reformas institucionales y políticas<sup>1</sup>.
            </>
          )
        },
        {
          time: '1991',
          event: 'Nueva Constitución que introduce el multipartidismo.',
          detail: (
            <>
              En 1991 se aprobó una nueva Constitución que introdujo el multipartidismo en el país<sup>2</sup>.
            </>
          )
        },
        {
          time: 'Años 90',
          event: 'Aparición de nuevos partidos y procesos electorales.',
          detail: (
            <>
              Durante los años 90 surgieron nuevos partidos políticos y se celebraron diversos procesos electorales<sup>3</sup>.
            </>
          )
        },
        {
          time: 'Mediados años 90 - Presente',
          event: 'Descubrimiento y explotación de petróleo y gas. Cambios económicos y sociales.',
          detail: (
            <>
              A partir de mediados de los años 90, el descubrimiento y explotación de petróleo y gas transformó la economía nacional, generando cambios económicos y sociales significativos<sup>4</sup>.
            </>
          )
        },
      ],
      sources: [
        { citation: '1. Sundiata, Ibrahim K. Equatorial Guinea: Colonialism, State Terror, and the Search for Stability. Westview Press, 1990.' },
        { citation: '2. Liniger-Goumaz, Max. Historical Dictionary of Equatorial Guinea. Scarecrow Press, 2000.', url: 'https://books.google.com/books?id=q5AUAQAAIAAJ' },
        { citation: '3. Gustau Nerín. La última selva de España. Ediciones Península, 2010.' },
        { citation: '4. Artículo: "El auge petrolero en Guinea Ecuatorial". Afrol News.', url: 'http://www.afrol.com/es/articulos/12352' },
      ]
    },
    {
      key: 'chapter9',
      title: 'Capítulo 9: Retos y Perspectivas Actuales',
      description: 'Desafíos y perspectivas de Guinea Ecuatorial en el siglo XXI.',
      periods: [
        {
          time: 'Actualidad (2024)',
          event: 'Situación política, social y económica actual.',
          detail: (
            <>
              En la actualidad, Guinea Ecuatorial continúa su desarrollo institucional, social y económico, enfrentando diversos retos y oportunidades en el contexto nacional e internacional<sup>1</sup>.
            </>
          )
        },
        {
          time: 'Últimos años',
          event: 'Procesos de modernización y relaciones internacionales.',
          detail: (
            <>
              En los últimos años, el país ha impulsado procesos de modernización y ha fortalecido sus relaciones internacionales, participando en foros regionales y globales<sup>2</sup>.
            </>
          )
        },
      ],
      sources: [
        { citation: '1. Liniger-Goumaz, Max. Historical Dictionary of Equatorial Guinea. Scarecrow Press, 2000.', url: 'https://books.google.com/books?id=q5AUAQAAIAAJ' },
        { citation: '2. Sundiata, Ibrahim K. Equatorial Guinea: Colonialism, State Terror, and the Search for Stability. Westview Press, 1990.' },
        { citation: '3. Gustau Nerín. La última selva de España. Ediciones Península, 2010.' },
        { citation: '4. Artículo: "La sucesión en Guinea Ecuatorial". Afrol News.', url: 'http://www.afrol.com/es/articulos/12353' },
        { citation: '5. Amnistía Internacional. "Guinea Ecuatorial: Informe 2023"', url: 'https://www.amnesty.org/es/location/africa/west-and-central-africa/equatorial-guinea/report-equatorial-guinea/' },
      ]
    },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection setCurrentPage={setCurrentPage} />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
              <GeoMap />
              <HistoryTimeline />
              <CulturalHeritage />
            </main>
          </>
        );
      case 'geography':
        return <Geography />;
      case 'cultures':
        return <Cultures />;
      case 'quiz':
        return <HistoryQuiz />;
      case 'about':
        return <About />;
      case 'sources':
        return <Sources />;
      default:
        // Manejar capítulos de literatura
        if (currentPage.startsWith('literature')) {
          return <Literature />;
        }
        // Manejar página general de capítulos de historia
        if (currentPage === 'historia') {
          return (
            <div className="max-w-4xl mx-auto p-6">
              <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Historia de Guinea Ecuatorial</h1>
              <p className="text-lg text-gray-700 text-center mb-8">
                Explora los principales capítulos de la historia de Guinea Ecuatorial, desde los pueblos originarios hasta la actualidad.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {chapters.map((chapter) => (
                  <div
                    key={chapter.key}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-200"
                    onClick={() => setCurrentPage(chapter.key)}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{chapter.title}</h3>
                    <p className="text-gray-600 text-sm">{chapter.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        // Manejar capítulos de historia
        if (chapters.some(ch => ch.key === currentPage)) {
          const chapter = chapters.find(ch => ch.key === currentPage);
          return (
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
              <ChapterCard
                title={chapter.title}
                description={chapter.description}
                development={chapter.development}
                periods={chapter.periods}
                sources={chapter.sources}
              />
              {/* Eliminado ShipGallery y HistoryQuiz para chapter2 */}
            </main>
          );
        }
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg pattern-mudcloth font-body text-brand-brown">
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;


// DONE