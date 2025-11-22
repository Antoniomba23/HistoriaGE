import React, { useState } from 'react';

const sections = [
  {
    title: 'Etnias y pueblos originarios',
    content: (
      <>
        <p>
          Guinea Ecuatorial es un país pluriétnico donde conviven varios pueblos originarios, cada uno con su propia historia, lengua y tradiciones. Los principales grupos étnicos son:
        </p>
        <ul className="list-disc ml-6 mt-2 text-sm">
          <li><b>Fang:</b> El grupo mayoritario (alrededor del 80% de la población), asentado principalmente en la región continental (Río Muni). Organizados en clanes, destacan por su rica tradición oral y su arte escultórico.</li>
          <li><b>Bubi:</b> Población autóctona de la isla de Bioko. Tienen una lengua y cultura propias, con una fuerte identidad insular y una organización social basada en linajes.</li>
          <li><b>Ndowé:</b> También llamados "Playeros", habitan la costa continental. Son conocidos por su tradición pesquera y su música característica.</li>
          <li><b>Annoboneses:</b> Habitantes de la isla de Annobón, de origen criollo-africano, con lengua y cultura diferenciadas.</li>
          <li><b>Bissió y otros:</b> Grupos minoritarios presentes en la costa y algunas islas.</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500">
          <b>Fuente:</b> INEGE, Liniger-Goumaz (2000), Sundiata (1990)
        </p>
      </>
    )
  },
  {
    title: 'Lenguas y diversidad lingüística',
    content: (
      <>
        <p>
          Guinea Ecuatorial es el único país africano donde el español es lengua oficial, junto con el francés y el portugués. Además, existen varias lenguas nacionales:
        </p>
        <ul className="list-disc ml-6 mt-2 text-sm">
          <li><b>Fang:</b> Mayoritaria en el continente.</li>
          <li><b>Bubi:</b> Propia de la isla de Bioko.</li>
          <li><b>Ndowé, Bissió, Kombe:</b> Lenguas bantúes de la costa y zonas insulares.</li>
          <li><b>Annobonés (fa d’Ambô):</b> Criollo portugués hablado en Annobón.</li>
        </ul>
        <p>
          El multilingüismo es una característica central de la sociedad ecuatoguineana. El español predomina en la administración, la educación y los medios, pero las lenguas autóctonas siguen vivas en la vida cotidiana y la cultura.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          <b>Fuente:</b> UNESCO, Ethnologue, INEGE
        </p>
      </>
    )
  },
  {
    title: 'Tradiciones y festividades',
    content: (
      <>
        <p>
          Las tradiciones y festividades reflejan la diversidad cultural del país. Entre las más destacadas se encuentran:
        </p>
        <ul className="list-disc ml-6 mt-2 text-sm">
          <li><b>Fiestas de clan y linaje:</b> Celebraciones familiares y de comunidad, con danzas, música y banquetes.</li>
          <li><b>Rituales de iniciación:</b> Prácticas tradicionales para marcar el paso a la edad adulta, especialmente entre los Fang y Bubi.</li>
          <li><b>Fiestas nacionales:</b> Día de la Independencia (12 de octubre), Día del Golpe de Estado (3 de agosto), entre otras.</li>
          <li><b>Festividades religiosas:</b> Semana Santa, Navidad y celebraciones musulmanas en comunidades minoritarias.</li>
        </ul>
        <p>
          Las danzas y mascaradas tradicionales, como el <i>abira</i> fang o las danzas bubi, son expresiones vivas del patrimonio cultural.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          <b>Fuente:</b> UNESCO, Nerín (2010), testimonios orales
        </p>
      </>
    )
  },
  {
    title: 'Religiones y creencias',
    content: (
      <>
        <p>
          La religión en Guinea Ecuatorial es diversa y sincrética. Predomina el cristianismo (catolicismo y protestantismo), pero persisten creencias tradicionales:
        </p>
        <ul className="list-disc ml-6 mt-2 text-sm">
          <li><b>Cristianismo:</b> Introducido por los misioneros europeos, es la religión mayoritaria. La Iglesia católica tiene gran influencia social y política.</li>
          <li><b>Religiones tradicionales:</b> Culto a los ancestros, creencias en espíritus y fuerzas de la naturaleza, prácticas de adivinación y curanderismo.</li>
          <li><b>Islam:</b> Presente en comunidades inmigrantes y minoritarias.</li>
        </ul>
        <p>
          Muchas personas combinan prácticas cristianas con creencias ancestrales, en un sincretismo religioso característico de la región.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          <b>Fuente:</b> Sundiata (1990), Liniger-Goumaz (2000), testimonios locales
        </p>
      </>
    )
  },
  {
    title: 'Música, arte y expresiones culturales',
    content: (
      <>
        <p>
          La música y el arte son pilares de la identidad ecuatoguineana. Destacan:
        </p>
        <ul className="list-disc ml-6 mt-2 text-sm">
          <li><b>Música tradicional:</b> Tambores, marimbas, coros polifónicos y cantos rituales. El <i>ekang</i> fang y los cantos bubi son muy representativos.</li>
          <li><b>Arte escultórico:</b> Máscaras fang, tallas de madera, objetos rituales y arte bubi.</li>
          <li><b>Danza:</b> Parte esencial de las celebraciones y rituales, con movimientos y vestimentas simbólicas.</li>
          <li><b>Expresiones contemporáneas:</b> Fusión de estilos africanos y modernos, presencia de artistas en literatura, pintura y música urbana.</li>
        </ul>
        <p>
          La cultura ecuatoguineana se expresa también en la literatura, el teatro y la gastronomía, reflejando la creatividad y diversidad del país.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          <b>Fuente:</b> UNESCO, exposiciones nacionales, entrevistas a artistas
        </p>
      </>
    )
  },
  {
    title: 'Costumbres y vida cotidiana',
    content: (
      <>
        <p>
          La vida cotidiana en Guinea Ecuatorial está marcada por la convivencia familiar, la solidaridad comunitaria y el respeto a las tradiciones. Algunos aspectos destacados:
        </p>
        <ul className="list-disc ml-6 mt-2 text-sm">
          <li><b>Familia extensa:</b> La familia incluye a parientes lejanos y es el núcleo de apoyo social y económico.</li>
          <li><b>Hospitalidad:</b> Es un valor fundamental; compartir alimentos y acoger a visitantes es una práctica común.</li>
          <li><b>Alimentación:</b> Basada en productos locales como yuca, plátano, pescado, cacahuete y aceite de palma.</li>
          <li><b>Vestimenta:</b> Mezcla de ropa tradicional y moderna, con uso de telas coloridas en celebraciones.</li>
          <li><b>Roles de género:</b> Tradicionalmente diferenciados, aunque en transformación en las ciudades.</li>
        </ul>
        <p>
          La vida en las ciudades y en el campo presenta diferencias, pero en ambos contextos se mantiene el apego a las raíces culturales.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          <b>Fuente:</b> Testimonios locales, Nerín (2010), estudios antropológicos
        </p>
      </>
    )
  },
  {
    title: 'Gastronomía',
    content: (
      <>
        <p>
          La gastronomía de Guinea Ecuatorial es el reflejo de la diversidad étnica y geográfica del país. Se caracteriza por la combinación de ingredientes locales y técnicas tradicionales, con influencias africanas, europeas y criollas.
        </p>
        <ul className="list-disc ml-6 mt-2 text-sm">
          <li><b>Ingredientes principales:</b> Yuca, plátano, batata, ñame, arroz, pescado, mariscos, carne de caza, cacahuete, aceite de palma, verduras y especias locales.</li>
          <li><b>Pepesup:</b> Sopa picante de pescado, uno de los platos más emblemáticos, preparada con pescado fresco, tomate, cebolla, pimiento y especias.</li>
          <li><b>Sopa de cacahuete:</b> Guiso espeso a base de pasta de cacahuete, carne o pescado y verduras.</li>
          <li><b>Bambucha:</b> Puré de plátano o yuca, acompañado de salsas o guisos.</li>
          <li><b>Platos de marisco:</b> Camarones, cangrejos y otros mariscos preparados con salsas locales.</li>
          <li><b>Postres y bebidas:</b> Frutas tropicales, vino de palma y bebidas fermentadas tradicionales.</li>
        </ul>
        <p>
          La comida se comparte en familia y en celebraciones, y la hospitalidad gastronómica es un valor fundamental en la cultura ecuatoguineana.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          <b>Fuente:</b> Testimonios locales, estudios gastronómicos, Nerín (2010)
        </p>
      </>
    )
  },
];

const Cultures = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-8 max-w-4xl mx-auto my-12">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Culturas de Guinea Ecuatorial</h2>
      <div className="space-y-4">
        {sections.map((section, idx) => (
          <div key={section.title} className="border rounded-lg bg-gray-50 shadow">
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
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cultures; 