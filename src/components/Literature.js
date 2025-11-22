import React, { useState } from 'react';

const Literature = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);

  const chapters = [
    {
      id: 'literature1',
      title: 'Capítulo 1: Orígenes y Tradición Oral',
      description: 'La literatura oral: mitos, leyendas, cuentos y proverbios de los pueblos Fang, Bubi, Ndowé, Annoboneses y otros.',
      content: (
        <div className="space-y-4">
          <p>
            La literatura ecuatoguineana tiene sus raíces en la <b>tradición oral</b> de los pueblos originarios. Antes de la llegada de los europeos, las culturas Fang, Bubi, Ndowé, Annoboneses y otros grupos étnicos desarrollaron una rica tradición de narrativa oral que servía como vehículo de transmisión de conocimientos, valores y memoria colectiva.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">Elementos de la Literatura Oral:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Mitos cosmogónicos:</b> Historias sobre la creación del mundo y los orígenes de los pueblos</li>
              <li><b>Leyendas:</b> Narraciones sobre héroes, ancestros y eventos históricos</li>
              <li><b>Cuentos populares:</b> Historias con enseñanzas morales y valores culturales</li>
              <li><b>Proverbios:</b> Sabiduría condensada en frases breves y memorables</li>
              <li><b>Poesía ritual:</b> Versos recitados en ceremonias y celebraciones</li>
            </ul>
          </div>

          <p>
            La <b>oralidad</b> no era simplemente una forma de entretenimiento, sino un sistema educativo completo que transmitía:
          </p>
          
          <ul className="list-disc ml-6 space-y-1">
            <li>Historia y genealogías familiares</li>
            <li>Conocimientos sobre medicina tradicional</li>
            <li>Normas sociales y valores comunitarios</li>
            <li>Técnicas de caza, pesca y agricultura</li>
            <li>Rituales religiosos y espirituales</li>
          </ul>

          <p>
            Los <b>griots</b> (narradores tradicionales) y los <b>ancianos</b> eran los guardianes de esta tradición, encargados de preservar y transmitir el conocimiento de generación en generación. Su papel era fundamental en la cohesión social y la preservación de la identidad cultural.
          </p>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold text-yellow-800 mb-2">Función Social de la Oralidad:</h4>
            <p className="text-sm">
              La literatura oral servía como herramienta de resistencia cultural durante la colonización, manteniendo vivas las tradiciones y valores autóctonos frente a la imposición de la cultura europea. Esta tradición continúa siendo relevante hoy en día, especialmente en las comunidades rurales y entre los ancianos.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'literature2',
      title: 'Capítulo 2: Primeros Escritores y Literatura Colonial',
      description: 'Primeros textos escritos por ecuatoguineanos y literatura durante la colonización española.',
      content: (
        <div className="space-y-4">
          <p>
            Los primeros textos escritos por ecuatoguineanos surgieron durante el período colonial español, en un contexto de censura, represión y fuerte influencia europea. A pesar de las dificultades, estos pioneros sentaron las bases de la literatura nacional, combinando la tradición oral con nuevas formas escritas y abordando temas de identidad, resistencia y vida cotidiana bajo el dominio colonial.
          </p>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">Autores y Obras Pioneras:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b><a href="https://es.wikipedia.org/wiki/Mar%C3%ADa_Nsue_Ang%C3%BCe" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">María Nsue Angüe (1945-2017)</a>:</b> Autora de <i>Ekomo</i> (1985), considerada la primera novela de Guinea Ecuatorial, que explora la vida de una mujer bubi y la situación de la mujer africana.</li>
              <li><b><a href="https://es.wikipedia.org/wiki/Donato_Ndongo-Bidyogo" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">Donato Ndongo-Bidyogo (1950-)</a>:</b> Autor de <i>Las tinieblas de tu memoria negra</i> y antólogo fundamental de la literatura guineana.</li>
              <li><b><a href="https://es.wikipedia.org/wiki/Raquel_Ilomb%C3%A9" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">Raquel Ilombé (1938-1992)</a>:</b> Poeta y narradora, autora de <i>Ceiba</i> (1978), primera obra poética publicada por una mujer ecuatoguineana.</li>
              <li><b><a href="https://www.africultures.com/personnes/?no=11709" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">Francisco Zamora Loboch (1950-)</a>:</b> Poeta y narrador, autor de <i>Cómo ser negro y no morir en Aravaca</i> y otros libros de poesía y testimonio.</li>
              <li><b>Obras colectivas y relatos orales:</b> Muchos textos iniciales recogieron la memoria oral de la resistencia de los combes y otros pueblos frente a la colonización, así como la vida cotidiana bajo el dominio español.</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">Temas y Contexto:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Resistencia y memoria:</b> Relatos sobre la lucha de los combes y otros grupos contra la colonización.</li>
              <li><b>Identidad y asimilación:</b> Conflictos entre la cultura autóctona y la imposición europea.</li>
              <li><b>Vida colonial:</b> Descripciones de la vida cotidiana, la educación, la religión y la represión.</li>
              <li><b>Testimonio y denuncia:</b> Primeros textos que documentan la experiencia colonial y sus consecuencias.</li>
            </ul>
          </div>

          <p>
            Durante la colonización, la literatura estaba fuertemente controlada por las autoridades españolas. Los temas permitidos se limitaban principalmente a descripciones de la vida colonial, textos religiosos y educativos, y obras que promovían la asimilación cultural. Sin embargo, los autores pioneros lograron introducir elementos de la tradición oral, la identidad autóctona y la denuncia de la opresión, sentando las bases para el desarrollo de una literatura nacional auténtica.
          </p>
        </div>
      )
    },
    {
      id: 'literature3',
      title: 'Capítulo 3: Literatura de la Independencia',
      description: 'Obras y autores surgidos en torno a la independencia (1968). Temas de identidad, nación y memoria.',
      content: (
        <div className="space-y-4">
          <p>
            El período de la independencia (1968) marcó un momento crucial en la literatura ecuatoguineana. Los escritores comenzaron a explorar temas de <b>identidad nacional</b>, <b>memoria histórica</b> y la construcción de una nueva nación.
          </p>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2">Temas Emergentes:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Identidad nacional:</b> Búsqueda de una identidad ecuatoguineana auténtica</li>
              <li><b>Memoria histórica:</b> Recuperación de la historia precolonial y colonial</li>
              <li><b>Unidad nacional:</b> Construcción de una nación unida en la diversidad</li>
              <li><b>Futuro:</b> Visiones y esperanzas para el nuevo país</li>
            </ul>
          </div>

          <p>
            Los escritores de este período se enfrentaron al desafío de crear una literatura que reflejara la nueva realidad política y social. Algunas características de esta literatura incluyen:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>Exploración de la diversidad étnica y cultural del país</li>
            <li>Reivindicación de las lenguas y tradiciones locales</li>
            <li>Crítica sutil al legado colonial</li>
            <li>Celebración de la independencia y la libertad</li>
            <li>Reflexiones sobre el papel de la literatura en la construcción nacional</li>
          </ul>

          <p>
            Sin embargo, este período de esperanza fue breve. La llegada al poder de Francisco Macías Nguema y el establecimiento de su dictadura (1969-1979) marcó el inicio de una época de represión que afectó profundamente a la literatura y la cultura.
          </p>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-bold text-orange-800 mb-2">Impacto de la Dictadura:</h4>
            <p className="text-sm">
              La represión política, la censura y el exilio forzado de muchos intelectuales interrumpieron el desarrollo natural de la literatura ecuatoguineana. Muchos escritores tuvieron que abandonar el país, mientras que otros fueron silenciados o perseguidos.
            </p>
          </div>

          <p>
            A pesar de las dificultades, algunos escritores lograron mantener viva la llama de la literatura, creando obras que, aunque no podían ser publicadas en el país, circulaban clandestinamente o se publicaban en el extranjero.
          </p>
        </div>
      )
    },
    {
      id: 'literature4',
      title: 'Capítulo 4: Literatura en el Exilio y la Diáspora',
      description: 'Escritores exiliados y su producción literaria. Temas de represión, memoria histórica y denuncia.',
      content: (
        <div className="space-y-4">
          <p>
            El exilio forzado de intelectuales y escritores durante la dictadura de Macías Nguema (1969-1979) y posteriormente durante el régimen de Obiang dio lugar a una importante producción literaria en la diáspora. Esta literatura se caracteriza por su <b>compromiso político</b> y su función de <b>denuncia</b>.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">Características de la Literatura del Exilio:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Denuncia política:</b> Crítica directa a la represión y violaciones de derechos humanos</li>
              <li><b>Memoria histórica:</b> Preservación de la memoria de las víctimas</li>
              <li><b>Identidad fragmentada:</b> Exploración de la experiencia del exilio</li>
              <li><b>Solidaridad internacional:</b> Búsqueda de apoyo y visibilidad internacional</li>
              <li><b>Esperanza de retorno:</b> Mantenimiento de la esperanza de un futuro mejor</li>
            </ul>
          </div>

          <p>
            Los escritores exiliados se establecieron principalmente en España, Francia, Estados Unidos y otros países africanos. Desde estas nuevas ubicaciones, continuaron escribiendo y publicando, manteniendo viva la literatura ecuatoguineana y denunciando la situación en su país de origen.
          </p>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">Temas Recurrentes:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>La experiencia del exilio:</b> Nostalgia, desarraigo y adaptación</li>
              <li><b>La represión política:</b> Testimonios de tortura, prisión y persecución</li>
              <li><b>La memoria colectiva:</b> Preservación de historias y tradiciones</li>
              <li><b>La resistencia:</b> Llamados a la acción y la solidaridad</li>
              <li><b>La identidad:</b> Reflexiones sobre la identidad nacional en el exilio</li>
            </ul>
          </div>

          <p>
            Esta literatura jugó un papel fundamental en:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>Mantener informada a la comunidad internacional sobre la situación en Guinea Ecuatorial</li>
            <li>Preservar la memoria histórica de las víctimas de la represión</li>
            <li>Proporcionar una voz a los opositores políticos</li>
            <li>Mantener viva la cultura ecuatoguineana en la diáspora</li>
            <li>Crear redes de solidaridad y apoyo</li>
          </ul>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold text-yellow-800 mb-2">Legado:</h4>
            <p className="text-sm">
              La literatura del exilio no solo denunció la represión, sino que también contribuyó al desarrollo de una literatura ecuatoguineana más comprometida y políticamente consciente. Muchos de estos escritores regresaron al país después de la muerte de Macías, contribuyendo al renacimiento cultural de los años 80 y 90.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'literature5',
      title: 'Capítulo 5: Literatura Contemporánea',
      description: 'Autores actuales y nuevas voces. Temas: género, juventud, sociedad, globalización.',
      content: (
        <div className="space-y-4">
          <p>
            La literatura ecuatoguineana contemporánea se caracteriza por su <b>diversidad temática</b> y la emergencia de <b>nuevas voces</b> que exploran temas actuales como la globalización, la juventud, el género y los desafíos de la sociedad moderna.
          </p>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2">Nuevas Tendencias:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Literatura juvenil:</b> Obras dirigidas a jóvenes lectores</li>
              <li><b>Narrativa urbana:</b> Historias ambientadas en las ciudades modernas</li>
              <li><b>Literatura digital:</b> Nuevas formas de expresión a través de internet</li>
              <li><b>Experimentos formales:</b> Innovación en géneros y estilos</li>
              <li><b>Colaboraciones internacionales:</b> Proyectos con autores de otros países</li>
            </ul>
          </div>

          <p>
            Los autores contemporáneos exploran una amplia gama de temas que reflejan la realidad actual de Guinea Ecuatorial:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li><b>Globalización:</b> Impacto de la globalización en la cultura local</li>
            <li><b>Migración:</b> Experiencias de emigrantes e inmigrantes</li>
            <li><b>Desigualdad social:</b> Contrastes entre ricos y pobres</li>
            <li><b>Medio ambiente:</b> Preocupaciones ecológicas y desarrollo sostenible</li>
            <li><b>Tecnología:</b> Impacto de las nuevas tecnologías en la sociedad</li>
            <li><b>Identidad:</b> Búsqueda de identidad en un mundo globalizado</li>
          </ul>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">Desafíos Actuales:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Falta de editoriales locales:</b> Dependencia de editoriales extranjeras</li>
              <li><b>Distribución limitada:</b> Dificultades para llegar a los lectores</li>
              <li><b>Falta de apoyo institucional:</b> Ausencia de políticas culturales efectivas</li>
              <li><b>Competencia con medios digitales:</b> Desafíos para mantener el interés en la lectura</li>
              <li><b>Exilio de talentos:</b> Fuga de cerebros hacia otros países</li>
            </ul>
          </div>

          <p>
            A pesar de estos desafíos, la literatura contemporánea muestra signos de vitalidad y creatividad. Los autores están experimentando con nuevas formas de expresión y encontrando nuevas audiencias a través de:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>Publicaciones digitales y blogs</li>
            <li>Redes sociales y plataformas online</li>
            <li>Festivales literarios internacionales</li>
            <li>Colaboraciones con artistas de otras disciplinas</li>
            <li>Proyectos educativos y de promoción de la lectura</li>
          </ul>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-bold text-orange-800 mb-2">Futuro Prometedor:</h4>
            <p className="text-sm">
              La literatura ecuatoguineana contemporánea está en un momento de transición y renovación. Las nuevas generaciones de escritores están creando obras que reflejan la complejidad de la sociedad actual, combinando tradición e innovación, localismo y globalización.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'literature6',
      title: 'Capítulo 6: Poesía, Teatro y Otros Géneros',
      description: 'Desarrollo de la poesía y el teatro. Literatura infantil y juvenil. Ensayo, crónica y otros géneros.',
      content: (
        <div className="space-y-4">
          <p>
            La literatura ecuatoguineana se ha desarrollado en múltiples géneros, cada uno con sus propias características y evolución. La <b>poesía</b>, el <b>teatro</b> y otros géneros han contribuido a enriquecer el panorama literario del país.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">Poesía Ecuatoguineana:</h4>
            <p className="text-sm mb-2">
              La poesía ha sido uno de los géneros más prolíficos, caracterizada por:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Fusión de tradición oral y formas modernas</b></li>
              <li><b>Exploración de temas identitarios y políticos</b></li>
              <li><b>Uso de múltiples lenguas (español, fang, bubi, etc.)</b></li>
              <li><b>Experimentación con formas y estilos</b></li>
              <li><b>Compromiso social y político</b></li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">Teatro y Artes Escénicas:</h4>
            <p className="text-sm mb-2">
              El teatro ecuatoguineano se ha desarrollado principalmente en:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Teatro tradicional:</b> Basado en rituales y ceremonias</li>
              <li><b>Teatro colonial:</b> Influenciado por el teatro español</li>
              <li><b>Teatro contemporáneo:</b> Exploración de temas actuales</li>
              <li><b>Teatro comunitario:</b> Como herramienta de educación y cambio social</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2">Literatura Infantil y Juvenil:</h4>
            <p className="text-sm mb-2">
              Este género ha cobrado importancia en las últimas décadas:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Cuentos tradicionales adaptados</b></li>
              <li><b>Historias que promueven valores culturales</b></li>
              <li><b>Obras que abordan temas actuales</b></li>
              <li><b>Literatura educativa y didáctica</b></li>
              <li><b>Promoción de la lectura entre los más jóvenes</b></li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold text-yellow-800 mb-2">Ensayo y Crónica:</h4>
            <p className="text-sm mb-2">
              Los géneros no ficcionales han sido importantes para:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Análisis político y social</b></li>
              <li><b>Documentación histórica</b></li>
              <li><b>Reflexiones culturales</b></li>
              <li><b>Crítica literaria</b></li>
              <li><b>Testimonios personales</b></li>
            </ul>
          </div>

          <p>
            Otros géneros que han tenido desarrollo incluyen:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li><b>Novela histórica:</b> Recreación de momentos históricos</li>
            <li><b>Novela policíaca:</b> Exploración de temas sociales a través del género</li>
            <li><b>Literatura de ciencia ficción:</b> Visiones futuristas y especulativas</li>
            <li><b>Autobiografía y memorias:</b> Testimonios personales</li>
            <li><b>Literatura epistolar:</b> Cartas y correspondencia literaria</li>
          </ul>

          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-bold text-red-800 mb-2">Desafíos y Oportunidades:</h4>
            <p className="text-sm">
              Cada género enfrenta sus propios desafíos, pero también ofrece oportunidades únicas para la expresión creativa y la exploración de temas importantes para la sociedad ecuatoguineana. La diversidad de géneros enriquece el panorama literario y permite que diferentes voces y perspectivas encuentren su espacio de expresión.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'literature7',
      title: 'Capítulo 7: Mujeres en la Literatura Ecuatoguineana',
      description: 'Escritoras destacadas y su aporte. Temas de género y visibilidad.',
      content: (
        <div className="space-y-4">
          <p>
            Las mujeres han jugado un papel fundamental en la literatura ecuatoguineana, aunque su contribución ha sido históricamente menos visible que la de los hombres. Las escritoras han abordado temas específicos de género y han contribuido a dar voz a las experiencias femeninas.
          </p>

          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="font-bold text-pink-800 mb-2">Escritoras Destacadas:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>María Nsue Angüe (1945-2017):</b> Primera novelista ecuatoguineana, autora de "Ekomo"</li>
              <li><b>Trifonia Melibea Obono:</b> Escritora y activista por los derechos LGTBI</li>
              <li><b>Guadalupe Nguema:</b> Poeta y narradora</li>
              <li><b>Victoria Evita Ika:</b> Escritora y periodista</li>
              <li><b>Inmaculada Buale:</b> Poeta y educadora</li>
            </ul>
          </div>

          <p>
            Las escritoras ecuatoguineanas han explorado temas específicos que reflejan las experiencias y preocupaciones de las mujeres:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li><b>Roles de género:</b> Exploración de los roles tradicionales y su evolución</li>
            <li><b>Violencia de género:</b> Denuncia de la violencia contra las mujeres</li>
            <li><b>Educación femenina:</b> Importancia de la educación para las mujeres</li>
            <li><b>Maternidad:</b> Experiencias de la maternidad y la crianza</li>
            <li><b>Empoderamiento:</b> Procesos de empoderamiento y autonomía</li>
            <li><b>Identidad femenina:</b> Construcción de la identidad de género</li>
          </ul>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2">Temas Específicos:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Doble discriminación:</b> Ser mujer y africana en un mundo patriarcal</li>
              <li><b>Tradición vs modernidad:</b> Conflictos entre tradiciones y aspiraciones modernas</li>
              <li><b>Migración femenina:</b> Experiencias específicas de las mujeres migrantes</li>
              <li><b>Salud reproductiva:</b> Temas relacionados con la salud de las mujeres</li>
              <li><b>Participación política:</b> Lucha por la participación política de las mujeres</li>
            </ul>
          </div>

          <p>
            Las escritoras han enfrentado desafíos específicos en su desarrollo literario:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>Menor acceso a la educación formal</li>
            <li>Responsabilidades familiares que limitan el tiempo para escribir</li>
            <li>Falta de reconocimiento y visibilidad</li>
            <li>Presión social para cumplir roles tradicionales</li>
            <li>Menor representación en espacios literarios</li>
          </ul>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">Logros y Avances:</h4>
            <p className="text-sm">
              A pesar de los desafíos, las escritoras han logrado importantes avances:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>Mayor visibilidad en festivales literarios</li>
              <li>Creación de redes de apoyo entre escritoras</li>
              <li>Reconocimiento internacional de su obra</li>
              <li>Influencia en las nuevas generaciones</li>
              <li>Contribución a la literatura feminista africana</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-bold text-orange-800 mb-2">Futuro:</h4>
            <p className="text-sm">
              Las nuevas generaciones de escritoras están rompiendo barreras y explorando temas más diversos, incluyendo la sexualidad, la identidad de género y la interseccionalidad. Su contribución es fundamental para el desarrollo de una literatura más inclusiva y representativa.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'literature8',
      title: 'Capítulo 8: Literatura en Lenguas Nacionales',
      description: 'Obras en fang, bubi, ndowé, annobonés, etc. Desafíos y preservación lingüística.',
      content: (
        <div className="space-y-4">
          <p>
            Guinea Ecuatorial es un país multilingüe con una rica diversidad lingüística. La literatura en <b>lenguas nacionales</b> (fang, bubi, ndowé, annobonés, etc.) representa una parte fundamental del patrimonio cultural del país, aunque ha enfrentado importantes desafíos para su desarrollo y preservación.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">Lenguas Nacionales Principales:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Fang:</b> Hablado por el grupo étnico mayoritario, principalmente en la región continental</li>
              <li><b>Bubi:</b> Lengua de la isla de Bioko, con una rica tradición oral</li>
              <li><b>Ndowé:</b> Hablado en la región costera continental</li>
              <li><b>Annobonés:</b> Lengua criolla de la isla de Annobón</li>
              <li><b>Bissio:</b> Hablado en algunas comunidades costeras</li>
            </ul>
          </div>

          <p>
            La literatura en lenguas nacionales se ha desarrollado principalmente en:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li><b>Tradición oral:</b> Mitos, leyendas, cuentos y poesía tradicional</li>
            <li><b>Textos religiosos:</b> Traducciones de textos bíblicos y religiosos</li>
            <li><b>Literatura educativa:</b> Materiales para la enseñanza de las lenguas</li>
            <li><b>Poesía contemporánea:</b> Obras poéticas en lenguas nacionales</li>
            <li><b>Narrativa:</b> Cuentos y novelas cortas</li>
          </ul>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">Desafíos Principales:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Falta de estandarización:</b> Ausencia de normas ortográficas unificadas</li>
              <li><b>Escasez de materiales:</b> Falta de diccionarios, gramáticas y textos de referencia</li>
              <li><b>Limitaciones técnicas:</b> Dificultades para la publicación en lenguas no latinas</li>
              <li><b>Mercado limitado:</b> Público lector reducido</li>
              <li><b>Falta de apoyo institucional:</b> Ausencia de políticas de promoción</li>
            </ul>
          </div>

          <p>
            A pesar de estos desafíos, se han realizado importantes esfuerzos para preservar y desarrollar la literatura en lenguas nacionales:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>Documentación de la tradición oral</li>
            <li>Creación de alfabetos y sistemas de escritura</li>
            <li>Traducción de textos importantes</li>
            <li>Desarrollo de materiales educativos</li>
            <li>Organización de festivales y eventos culturales</li>
          </ul>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2">Importancia Cultural:</h4>
            <p className="text-sm">
              La literatura en lenguas nacionales es fundamental para:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Preservación cultural:</b> Mantener vivas las tradiciones y valores</li>
              <li><b>Identidad étnica:</b> Fortalecer la identidad de cada grupo étnico</li>
              <li><b>Diversidad lingüística:</b> Contribuir a la riqueza lingüística mundial</li>
              <li><b>Educación:</b> Facilitar el aprendizaje en la lengua materna</li>
              <li><b>Desarrollo sostenible:</b> Promover el desarrollo cultural endógeno</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold text-yellow-800 mb-2">Futuro:</h4>
            <p className="text-sm">
              El futuro de la literatura en lenguas nacionales depende de la implementación de políticas efectivas de promoción, el desarrollo de recursos educativos, y el compromiso de las comunidades para preservar y desarrollar sus lenguas. La tecnología digital ofrece nuevas oportunidades para la documentación y difusión de estas literaturas.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'literature9',
      title: 'Capítulo 9: Bibliografía y Recursos',
      description: 'Libros, antologías, revistas y portales recomendados.',
      content: (
        <div className="space-y-4">
          <p>
            Para profundizar en el estudio de la literatura ecuatoguineana, se recomienda consultar las siguientes fuentes y recursos que ofrecen información valiosa sobre autores, obras y contextos históricos.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">Antologías y Compilaciones:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>"Literatura de Guinea Ecuatorial (Antología)"</b> - Mbare Ngom (ed.)</li>
              <li><b>"Antología de la literatura de Guinea Ecuatorial"</b> - Donato Ndongo-Bidyogo</li>
              <li><b>"Literatura y poder en Guinea Ecuatorial"</b> - Mbare Ngom</li>
              <li><b>"Guinea Ecuatorial: Literatura y sociedad"</b> - Various authors</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">Obras Fundamentales:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>"Ekomo"</b> - María Nsue Angüe (primera novela ecuatoguineana)</li>
              <li><b>"Las tinieblas de tu memoria negra"</b> - Donato Ndongo-Bidyogo</li>
              <li><b>"Los poderes de la tempestad"</b> - Donato Ndongo-Bidyogo</li>
              <li><b>"El metro"</b> - Donato Ndongo-Bidyogo</li>
              <li><b>"La bastarda"</b> - Trifonia Melibea Obono</li>
              <li><b>"Herencia de bindendee"</b> - Juan Tomás Ávila Laurel</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2">Estudios Críticos:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>"Historia y tragedia de Guinea Ecuatorial"</b> - Donato Ndongo-Bidyogo</li>
              <li><b>"Literatura de Guinea Ecuatorial"</b> - Mbare Ngom</li>
              <li><b>"Guinea Ecuatorial: Literatura y sociedad"</b> - Various authors</li>
              <li><b>"La literatura africana de expresión española"</b> - Mbare Ngom</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold text-yellow-800 mb-2">Revistas y Publicaciones:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>"Afro-Hispanic Review"</b> - Revista académica sobre literatura africana en español</li>
              <li><b>"Revista de Estudios Guineanos"</b> - Publicación especializada</li>
              <li><b>"Cuadernos de Literatura"</b> - Universidad de Alcalá</li>
              <li><b>"Revista de Crítica Literaria Latinoamericana"</b></li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-bold text-red-800 mb-2">Recursos Digitales:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Biblioteca Digital de Guinea Ecuatorial</b> - Recursos en línea</li>
              <li><b>Portal de Literatura Africana</b> - Información sobre autores africanos</li>
              <li><b>Revistas digitales especializadas</b></li>
              <li><b>Blogs y páginas web de autores</b></li>
              <li><b>Redes sociales de escritores</b></li>
            </ul>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-bold text-orange-800 mb-2">Festivales y Eventos:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><b>Festival de Literatura de Guinea Ecuatorial</b></li>
              <li><b>Encuentros de Escritores Africanos</b></li>
              <li><b>Ferias del Libro</b> - Nacionales e internacionales</li>
              <li><b>Conferencias académicas</b> sobre literatura africana</li>
            </ul>
          </div>

          <p>
            Para mantenerse actualizado sobre la literatura ecuatoguineana, se recomienda:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>Seguir las publicaciones de editoriales especializadas</li>
            <li>Participar en eventos literarios y culturales</li>
            <li>Mantener contacto con autores y críticos literarios</li>
            <li>Consultar bases de datos académicas</li>
            <li>Explorar recursos digitales y redes sociales</li>
          </ul>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">Nota:</h4>
            <p className="text-sm">
              Esta bibliografía no es exhaustiva, pero proporciona un punto de partida para el estudio de la literatura ecuatoguineana. Se recomienda consultar fuentes adicionales y mantenerse actualizado sobre nuevas publicaciones y desarrollos en el campo.
            </p>
          </div>
        </div>
      )
    }
  ];

  if (!selectedChapter) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Literatura de Guinea Ecuatorial</h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Explora la rica tradición literaria de Guinea Ecuatorial, desde la tradición oral hasta las voces contemporáneas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-200"
              onClick={() => setSelectedChapter(chapter)}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">{chapter.title}</h3>
              <p className="text-gray-600 text-sm">{chapter.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => setSelectedChapter(null)}
        className="mb-6 text-blue-600 hover:text-blue-800 font-medium flex items-center"
      >
        ← Volver a capítulos
      </button>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{selectedChapter.title}</h2>
        <div className="prose prose-lg max-w-none">
          {selectedChapter.content}
        </div>
      </div>
    </div>
  );
};

export default Literature; 