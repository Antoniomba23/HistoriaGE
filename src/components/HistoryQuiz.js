import React, { useState } from 'react';

const chapterQuestions = {
  history: [
    // Prehistoria y Pueblos Originarios
    {
      question: "¿Qué evidencia arqueológica sugiere presencia humana temprana en la isla de Bioko?",
      options: ["Cuevas de Bicurí y Elabé", "Ruinas de Ureka", "Pinturas de Moca", "Herramientas de Luba"],
      answer: "Cuevas de Bicurí y Elabé"
    },
    {
      question: "¿En qué siglos llegaron las migraciones bantúes al continente (Río Muni)?",
      options: ["Siglos VII-XIII", "Siglos I-III", "Siglos XV-XVI", "Siglos XIX-XX"],
      answer: "Siglos VII-XIII"
    },
    {
      question: "¿Qué grupo étnico desarrolló una sociedad insular distintiva en Bioko desde el siglo XIII?",
      options: ["Bubi", "Fang", "Ndowé", "Annobonés"],
      answer: "Bubi"
    },
    // Llegada de Europeos y Trata
    {
      question: "¿Quién descubrió la isla de Bioko en 1471-1472?",
      options: ["Fernão do Pó", "Vasco da Gama", "Cristóbal Colón", "Bartolomeu Dias"],
      answer: "Fernão do Pó"
    },
    {
      question: "¿Qué nombre recibió inicialmente la isla de Bioko por su descubridor?",
      options: ["Formosa", "Fernando Poo", "Santa Isabel", "Macías Nguema Biyogo"],
      answer: "Formosa"
    },
    {
      question: "¿Qué tratado asignó las islas del Golfo de Guinea a Portugal en 1494?",
      options: ["Tratado de Tordesillas", "Tratado de El Pardo", "Tratado de Berlín", "Tratado de París"],
      answer: "Tratado de Tordesillas"
    },
    {
      question: "¿Mediante qué tratado cedió Portugal las islas a España en 1778?",
      options: ["Tratado de El Pardo", "Tratado de San Ildefonso", "Tratado de Tordesillas", "Tratado de Utrecht"],
      answer: "Tratado de El Pardo"
    },
    // Dominio Español
    {
      question: "¿Qué país arrendó bases en Fernando Poo entre 1827 y 1843 para combatir la trata?",
      options: ["Gran Bretaña", "Francia", "Holanda", "Alemania"],
      answer: "Gran Bretaña"
    },
    {
      question: "¿En qué año comenzó España una colonización efectiva nombrando gobernadores?",
      options: ["1843", "1778", "1858", "1900"],
      answer: "1843"
    },
    {
      question: "¿Qué conferencia internacional reconoció los derechos de España sobre Río Muni en 1885?",
      options: ["Conferencia de Berlín", "Conferencia de París", "Conferencia de Londres", "Conferencia de Madrid"],
      answer: "Conferencia de Berlín"
    },
    {
      question: "¿Qué tratado fijó los límites definitivos de Río Muni con Francia en 1900?",
      options: ["Tratado de París", "Tratado de Berlín", "Tratado de Fez", "Tratado de Versalles"],
      answer: "Tratado de París"
    },
    // Economía Colonial
    {
      question: "¿Qué cultivo fue el motor principal de la economía colonial en Bioko?",
      options: ["Cacao", "Café", "Algodón", "Caucho"],
      answer: "Cacao"
    },
    {
      question: "¿De dónde procedía principalmente la mano de obra 'contratada' para las plantaciones?",
      options: ["Liberia y Nigeria", "Camerún y Gabón", "Ghana y Togo", "Angola y Mozambique"],
      answer: "Liberia y Nigeria"
    },
    // Independencia y Macías
    {
      question: "¿En qué fecha se proclamó la independencia de Guinea Ecuatorial?",
      options: ["12 de Octubre de 1968", "3 de Agosto de 1979", "15 de Agosto de 1968", "12 de Octubre de 1969"],
      answer: "12 de Octubre de 1968"
    },
    {
      question: "¿Quién fue el primer presidente de Guinea Ecuatorial?",
      options: ["Francisco Macías Nguema", "Teodoro Obiang Nguema", "Bonifacio Ondó Edu", "Atanasio Ndongo"],
      answer: "Francisco Macías Nguema"
    },
    {
      question: "¿Qué nombre recibió el partido único durante la dictadura de Macías?",
      options: ["PUNT", "PDGE", "CPDS", "UP"],
      answer: "PUNT"
    },
    {
      question: "¿Qué ciudad fue renombrada como Malabo en 1973?",
      options: ["Santa Isabel", "San Carlos", "Concepción", "Bata"],
      answer: "Santa Isabel"
    },
    // Era Obiang y Actualidad
    {
      question: "¿En qué fecha se produjo el 'Golpe de Libertad' que derrocó a Macías?",
      options: ["3 de Agosto de 1979", "12 de Octubre de 1979", "25 de Mayo de 1979", "3 de Agosto de 1968"],
      answer: "3 de Agosto de 1979"
    },
    {
      question: "¿Qué descubrimiento transformó la economía de Guinea Ecuatorial en los años 90?",
      options: ["Petróleo y gas", "Diamantes", "Oro", "Uranio"],
      answer: "Petróleo y gas"
    },
    {
      question: "¿En qué año se introdujo el multipartidismo en la Constitución?",
      options: ["1991", "1982", "1995", "2011"],
      answer: "1991"
    }
  ],
  geography: [
    {
      question: "¿Cuáles son las dos grandes regiones en las que se divide Guinea Ecuatorial?",
      options: ["Región Continental e Insular", "Región Norte y Sur", "Región Este y Oeste", "Bioko y Río Muni"],
      answer: "Región Continental e Insular"
    },
    {
      question: "¿Cuál es la capital de la nación y en qué isla se encuentra?",
      options: ["Malabo (Bioko)", "Bata (Río Muni)", "Ebebiyin (Río Muni)", "San Antonio de Palé (Annobón)"],
      answer: "Malabo (Bioko)"
    },
    {
      question: "¿Cuál es el punto más alto de Guinea Ecuatorial?",
      options: ["Pico Basile", "Pico Bia", "Monte Alén", "Monte Chocolate"],
      answer: "Pico Basile"
    },
    {
      question: "¿Qué altitud aproximada tiene el Pico Basile?",
      options: ["3.008 m", "2.500 m", "4.000 m", "1.500 m"],
      answer: "3.008 m"
    },
    {
      question: "¿Cuál es la ciudad más poblada de la región continental?",
      options: ["Bata", "Mongomo", "Ebebiyin", "Evinayong"],
      answer: "Bata"
    },
    {
      question: "¿Qué isla se encuentra más alejada, al suroeste de Santo Tomé y Príncipe?",
      options: ["Annobón", "Bioko", "Corisco", "Elobey Grande"],
      answer: "Annobón"
    },
    {
      question: "¿Qué parque nacional en el continente es famoso por su bosque tropical y biodiversidad?",
      options: ["Monte Alén", "Altos de Nsork", "Estuario del Muni", "Pico Basile"],
      answer: "Monte Alén"
    },
    {
      question: "¿Con qué países limita Guinea Ecuatorial?",
      options: ["Camerún y Gabón", "Nigeria y Camerún", "Gabón y Congo", "Camerún y Chad"],
      answer: "Camerún y Gabón"
    },
    {
      question: "¿Qué provincia es la más reciente, creada en el centro del país?",
      options: ["Djibloho", "Wele-Nzas", "Kie-Ntem", "Centro Sur"],
      answer: "Djibloho"
    },
    {
      question: "¿Qué clima predomina en Guinea Ecuatorial?",
      options: ["Tropical ecuatorial", "Mediterráneo", "Desértico", "Continental"],
      answer: "Tropical ecuatorial"
    },
    {
      question: "¿Qué islas menores se encuentran en la Bahía de Corisco?",
      options: ["Corisco, Elobey Grande y Elobey Chico", "Bioko y Annobón", "Santo Tomé y Príncipe", "Canarias"],
      answer: "Corisco, Elobey Grande y Elobey Chico"
    },
    {
      question: "¿Cuál es la capital de la provincia de Litoral?",
      options: ["Bata", "Mbini", "Cogo", "Machinda"],
      answer: "Bata"
    },
    {
      question: "¿Qué río importante da nombre a una de las provincias continentales?",
      options: ["Wele", "Muni", "Benito", "Campo"],
      answer: "Wele"
    },
    {
      question: "¿Qué porcentaje aproximado de la población vive en el continente?",
      options: ["72%", "50%", "28%", "90%"],
      answer: "72%"
    },
    {
      question: "¿Qué recurso natural es la principal fuente de ingresos actual?",
      options: ["Petróleo", "Cacao", "Madera", "Pesca"],
      answer: "Petróleo"
    }
  ],
  cultures: [
    {
      question: "¿Qué grupo étnico es mayoritario en Guinea Ecuatorial?",
      options: ["Fang", "Bubi", "Ndowé", "Annobonés"],
      answer: "Fang"
    },
    {
      question: "¿Qué etnia es originaria de la isla de Bioko?",
      options: ["Bubi", "Fang", "Combe", "Bissio"],
      answer: "Bubi"
    },
    {
      question: "¿Cómo se conoce popularmente a los pueblos de la costa continental (Ndowé)?",
      options: ["Playeros", "Isleños", "Montañeses", "Riberenos"],
      answer: "Playeros"
    },
    {
      question: "¿Qué lengua criolla de base portuguesa se habla en Annobón?",
      options: ["Fa d’Ambô", "Pichi", "Crioulo", "Portuñol"],
      answer: "Fa d’Ambô"
    },
    {
      question: "¿Cuál es el único país de África con el español como lengua oficial?",
      options: ["Guinea Ecuatorial", "Sahara Occidental", "Marruecos", "Angola"],
      answer: "Guinea Ecuatorial"
    },
    {
      question: "¿Qué instrumento musical es característico de la cultura Fang?",
      options: ["Mvet", "Kora", "Djembe", "Marimba"],
      answer: "Mvet"
    },
    {
      question: "¿Qué plato tradicional es una sopa picante de pescado?",
      options: ["Pepesup", "Bambucha", "Sopa de cacahuete", "Succotash"],
      answer: "Pepesup"
    },
    {
      question: "¿Qué es el 'Bambucha'?",
      options: ["Un puré de plátano o yuca", "Un baile tradicional", "Una bebida fermentada", "Un tipo de pescado"],
      answer: "Un puré de plátano o yuca"
    },
    {
      question: "¿Qué festividad se celebra el 12 de Octubre?",
      options: ["Día de la Independencia", "Día del Presidente", "Navidad", "Año Nuevo"],
      answer: "Día de la Independencia"
    },
    {
      question: "¿Qué religión es la mayoritaria en el país?",
      options: ["Cristianismo (Catolicismo)", "Islam", "Animismo puro", "Protestantismo"],
      answer: "Cristianismo (Catolicismo)"
    },
    {
      question: "¿Qué danza tradicional Fang incluye máscaras y zancos?",
      options: ["Abira (relacionada con el Bwiti)", "Balele", "Ivanga", "Mokom"],
      answer: "Abira (relacionada con el Bwiti)"
    },
    {
      question: "¿Qué valor social es fundamental en la cultura ecuatoguineana?",
      options: ["La familia extensa y la hospitalidad", "El individualismo", "La competencia", "El aislamiento"],
      answer: "La familia extensa y la hospitalidad"
    },
    {
      question: "¿Qué bebida tradicional se extrae de la palma?",
      options: ["Vino de palma (Topé)", "Cerveza de mijo", "Ron de caña", "Licor de cacao"],
      answer: "Vino de palma (Topé)"
    },
    {
      question: "¿Qué lengua se habla mayoritariamente en Malabo como lengua franca popular?",
      options: ["Pichi (Pidgin English)", "Francés", "Portugués", "Fang"],
      answer: "Pichi (Pidgin English)"
    },
    {
      question: "¿Qué arte visual es muy reconocido en la cultura Fang?",
      options: ["Escultura en madera y máscaras", "Pintura al óleo", "Cerámica", "Tejidos"],
      answer: "Escultura en madera y máscaras"
    }
  ],
  literature: [
    {
      question: "¿Cuál se considera la primera novela escrita por una mujer ecuatoguineana?",
      options: ["Ekomo", "Ceiba", "La Bastarda", "Herencia de bindendee"],
      answer: "Ekomo"
    },
    {
      question: "¿Quién es la autora de 'Ekomo'?",
      options: ["María Nsue Angüe", "Raquel Ilombé", "Trifonia Melibea Obono", "Guadalupe Nguema"],
      answer: "María Nsue Angüe"
    },
    {
      question: "¿Qué obra fundamental escribió Donato Ndongo-Bidyogo sobre la infancia colonial?",
      options: ["Las tinieblas de tu memoria negra", "El Metro", "Los poderes de la tempestad", "Historia y tragedia"],
      answer: "Las tinieblas de tu memoria negra"
    },
    {
      question: "¿Quién escribió el poemario 'Ceiba', pionero en la literatura femenina?",
      options: ["Raquel Ilombé", "María Nsue", "Trifonia Melibea", "Remei Sipi"],
      answer: "Raquel Ilombé"
    },
    {
      question: "¿Qué tema es central en la literatura del exilio ecuatoguineano?",
      options: ["La denuncia de la dictadura y la identidad", "El romance", "La ciencia ficción", "La naturaleza"],
      answer: "La denuncia de la dictadura y la identidad"
    },
    {
      question: "¿Qué autora contemporánea es conocida por abordar temas LGTBI en obras como 'La Bastarda'?",
      options: ["Trifonia Melibea Obono", "María Nsue", "Guadalupe Nguema", "Raquel Ilombé"],
      answer: "Trifonia Melibea Obono"
    },
    {
      question: "¿Qué autor escribió 'Cómo ser negro y no morir en Aravaca'?",
      options: ["Francisco Zamora Loboch", "Donato Ndongo", "Juan Tomás Ávila Laurel", "Justo Bolekia"],
      answer: "Francisco Zamora Loboch"
    },
    {
      question: "¿Qué género literario es la base de la literatura ecuatoguineana?",
      options: ["La tradición oral", "La novela epistolar", "El ensayo filosófico", "El teatro del absurdo"],
      answer: "La tradición oral"
    },
    {
      question: "¿Qué figura tradicional era la encargada de transmitir la historia y la cultura oralmente?",
      options: ["El Griot o Juglar (Nvet)", "El Sacerdote", "El Guerrero", "El Comerciante"],
      answer: "El Griot o Juglar (Nvet)"
    },
    {
      question: "¿Qué autor prolífico ha escrito obras como 'Arde el monte de noche' y vive en el exilio?",
      options: ["Juan Tomás Ávila Laurel", "Donato Ndongo", "César Mba", "León Mba"],
      answer: "Juan Tomás Ávila Laurel"
    },
    {
      question: "¿Qué revista académica es importante para los estudios afro-hispánicos?",
      options: ["Afro-Hispanic Review", "National Geographic", "Time", "Vogue"],
      answer: "Afro-Hispanic Review"
    },
    {
      question: "¿En qué lenguas, además del español, se está desarrollando literatura actualmente?",
      options: ["Lenguas nacionales (Fang, Bubi, etc.)", "Solo en Inglés", "Solo en Francés", "En Latín"],
      answer: "Lenguas nacionales (Fang, Bubi, etc.)"
    },
    {
      question: "¿Qué desafío principal enfrenta la literatura ecuatoguineana?",
      options: ["Falta de editoriales locales y distribución", "Falta de escritores", "Falta de temas", "Exceso de financiación"],
      answer: "Falta de editoriales locales y distribución"
    },
    {
      question: "¿Qué obra de Donato Ndongo trata sobre la emigración clandestina?",
      options: ["El Metro", "Las tinieblas de tu memoria negra", "Olvidos", "El sueño"],
      answer: "El Metro"
    },
    {
      question: "¿Qué importancia tienen los proverbios en la cultura oral?",
      options: ["Transmiten sabiduría y normas sociales", "Son solo para niños", "No tienen importancia", "Son para rituales secretos"],
      answer: "Transmiten sabiduría y normas sociales"
    }
  ]
};

const chapterList = [
  { key: 'history', label: 'Historia de Guinea Ecuatorial' },
  { key: 'geography', label: 'Geografía de Guinea Ecuatorial' },
  { key: 'cultures', label: 'Culturas de Guinea Ecuatorial' },
  { key: 'literature', label: 'Literatura de Guinea Ecuatorial' },
];

const HistoryQuiz = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');

  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  React.useEffect(() => {
    if (selectedChapter && chapterQuestions[selectedChapter]) {
      const questions = chapterQuestions[selectedChapter].map(q => ({
        ...q,
        options: shuffleArray(q.options)
      }));
      setShuffledQuestions(questions);
    } else {
      setShuffledQuestions([]);
    }
  }, [selectedChapter]);

  const questions = shuffledQuestions;

  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setFeedback('¡Respuesta Correcta! 🎉');
    } else {
      setFeedback(`Incorrecto. La respuesta correcta era: ${questions[currentQuestion].answer} 😔`);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setFeedback('');
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setFeedback('');
  };

  const handleGoBack = () => {
    setSelectedChapter(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setFeedback('');
  };

  if (!selectedChapter) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Selecciona un capítulo para comenzar el Quiz</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {chapterList.map((ch) => (
            <button
              key={ch.key}
              onClick={() => setSelectedChapter(ch.key)}
              className="bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl py-6 px-4 text-lg font-semibold text-blue-800 shadow-md transition-all duration-300"
            >
              {ch.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-8 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Aún no hay preguntas para este capítulo.</h2>
        <button onClick={handleGoBack} className="mt-6 bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300">Volver a capítulos</button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-brand-yellow/30 p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-display font-bold text-brand-brown mb-8 text-center">Quiz: {chapterList.find(ch => ch.key === selectedChapter)?.label}</h2>
      {showScore ? (
        <div className="text-center py-10">
          <p className="text-3xl font-bold text-brand-brown mb-6 font-display">
            ¡Quiz Completado!
          </p>
          <p className="text-2xl text-brand-brown/80 mb-8 font-body">
            Obtuviste <span className="text-brand-green font-extrabold">{score}</span> de <span className="font-extrabold">{questions.length}</span> respuestas correctas.
          </p>
          <button
            onClick={handleRestartQuiz}
            className="bg-brand-green text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-brand-green/80 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-brand-green/30 font-body"
          >
            Volver a Intentar
          </button>
          <button
            onClick={handleGoBack}
            className="ml-4 bg-gray-200 text-gray-700 py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-300 transition-all duration-300 font-body"
          >
            Volver a capítulos
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-8 text-center">
            <p className="text-lg text-brand-brown/70 mb-3 font-body">
              Pregunta <span className="font-bold text-brand-red">{currentQuestion + 1}</span> de <span className="font-bold">{questions.length}</span>
            </p>
            <p className="text-2xl font-semibold text-brand-brown leading-relaxed font-display">
              {questions[currentQuestion].question}
            </p>
          </div>
          <div className="space-y-4 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                className={`w-full text-left py-4 px-6 rounded-xl border-2 transition-all duration-300 text-lg font-medium font-body
                  ${selectedOption === option
                    ? (option === questions[currentQuestion].answer ? 'bg-green-100 border-green-500 text-green-800 shadow-md' : 'bg-red-100 border-red-500 text-red-800 shadow-md')
                    : 'bg-brand-bg border-brand-brown/10 text-brand-brown hover:bg-brand-yellow/10 hover:border-brand-yellow'
                  }
                  ${selectedOption !== null && option !== selectedOption && option === questions[currentQuestion].answer ? 'border-green-500 bg-green-50 text-green-800' : ''}
                `}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>
          {feedback && (
            <p className={`mb-6 text-center font-semibold text-xl font-body ${feedback.includes('Correcta') ? 'text-green-600' : 'text-red-600'}`}>
              {feedback}
            </p>
          )}
          <button
            onClick={handleNextQuestion}
            className="w-full bg-brand-red text-white py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-brand-red/80 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-brand-red/30 font-body"
            disabled={selectedOption === null}
          >
            {currentQuestion === questions.length - 1 ? 'Ver Resultados' : 'Siguiente Pregunta'}
          </button>
        </div>
      )}
    </div>
  );
};

export default HistoryQuiz;