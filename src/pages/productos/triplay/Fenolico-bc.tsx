export default function Fenolico() {
  const pasos = [
  {
    titulo: "Selección y desenrollo de troncos",
    detalle: "Obtención de chapas delgadas (1–3 mm) mediante desenrollado o sierras especiales.",
  },
  {
    titulo: "Secado de chapas",
    detalle: "Secado controlado para alcanzar humedad óptima y evitar deformaciones.",
  },
  {
    titulo: "Aplicación de resina fenólica WBP",
    detalle: "Aplicación homogénea de resina fenólica (Weather & Boil Proof) sobre cada chapa.",
  },
  {
    titulo: "Prensado en caliente (120–150 °C)",
    detalle: "Prensado bajo presión y calor para polimerizar la resina y lograr unión permanente.",
  },
  {
    titulo: "Lijado y acabado",
    detalle: "Lijado final y, opcionalmente, recubrimiento con film fenólico para encofrados.",
  },
];

  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
            Triplay Fenólico Estándar
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-justify">
            El triplay fenólico es un tablero contrachapado estructural compuesto por chapas delgadas de madera encoladas entre sí con resinas fenólicas termoestables de tipo WBP (Weather and Boil Proof).
Estas resinas son adhesivos sintéticos basados en fenol-formaldehído, los cuales, al polimerizar bajo presión y calor, generan enlaces químicos altamente estables y resistentes al agua, agentes químicos y degradación biológica.
          </p>
        </div>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/triplay/Fenolico.jpg"
            alt="Triplay Fenólico B/C"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/triplay/FenolicoDobleFilm1.jpg"
            alt="Detalle Triplay Fenólico"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
         <div className="flex justify-center py-12 px-4 bg-[#f9f7f3]">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-amber-800 mb-6">
          Proceso de fabricación — Triplay Fenólico
        </h1>

        <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6">
          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            A continuación se describen los pasos habituales en la fabricación de
            triplay fenólico. El proceso combina control de materia prima, tratamiento
            térmico y unión con resinas para obtener un tablero de alta estabilidad
            y durabilidad.
          </p>

          <ol className="space-y-6">
            {pasos.map((p, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                {/* Badge numerado */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-200 text-amber-900 font-bold shadow-sm">
                    {idx + 1}
                  </div>
                </div>

                {/* Contenido del paso */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-amber-800 mb-1">{p.titulo}</h3>
                  <p className="text-gray-700 leading-relaxed">{p.detalle}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Nota adicional */}
          <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-lg text-sm text-gray-700">
            <strong>Nota:</strong> según la planta y el destino del tablero (uso interior, encofrado,
            exterior o aplicación industrial) se ajustan parámetros como temperatura, presión,
            número de capas y calidad de chapas. El film fenólico en cara(s) aporta resistencia al agua
            y mejor comportamiento en reutilización para encofrados.
          </div>
        </div>
      </div>
    </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Características */}
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Características principales</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Adhesivo:</strong> Fenólico <strong>WBP</strong> (Weather &amp; Boil Proof).</li>
              <li><strong>Formato estándar:</strong> 1.22 × 2.44 m (4' × 8').</li>
              <li><strong>Espesores:</strong> 9, 12, 15, 18 mm.</li>
              <li><strong>Densidad:</strong> 500 – 650 kg/m³ (según especie).</li>
              <li><strong>Estabilidad dimensional:</strong> excelente frente a humedad y temperatura.</li>
              <li><strong>Durabilidad:</strong> muy alta frente a hongos y agentes atmosféricos.</li>
              <li><strong>Clasificación:</strong> B/C (una cara mejor presentación, otra rústica).</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Usos del triplay fenólico</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Construcción:</strong> encofrados para concreto, revestimientos de obra provisionales.</li>
              <li><strong>Muebles y carpintería:</strong> muebles económicos, módulos de obra, mobiliario industrial.</li>
              <li><strong>Transporte y embalaje:</strong> cajas y estuches para exportación, revestimiento de camiones/contenedores.</li>
              <li><strong>Otros usos industriales:</strong> pisos temporales de obra, recubrimientos en ambientes húmedos (con tratamiento).</li>
            </ul>
          </div>
        </div>

        {/* Ventajas */}
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Ventajas y beneficios</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Alta resistencia al agua y al calor gracias al adhesivo fenólico.</li>
            <li>Mayor durabilidad frente a hongos e insectos comparado con triplays comunes.</li>
            <li>Rigidez estructural para soportar cargas y presiones en encofrados.</li>
            <li>Versatilidad de espesores y formatos.</li>
            <li>Revestimientos y estructuras expuestas a condiciones exigentes.</li>
            <li>Costo competitivo vs. maderas macizas en aplicaciones similares.</li>
          </ul>
        </div>

        {/* Tabla técnica */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-amber-800 mb-4">
            Especificaciones Técnicas
          </h2>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-amber-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Propiedad</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Valor promedio</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Unidad</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Observaciones</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dimensiones estándar", "1.22 × 2.44", "m", "También disponible en formatos especiales."],
                ["Espesores", "6 – 25", "mm", "Elegir según uso (encofrado, mobiliario, etc.)."],
                ["Densidad", "480 – 530", "kg/m³", "Varía según la especie utilizada."],
                ["Adhesivo", "Resina fenólica WBP", "—", "Resistente al agua hirviendo; apto intemperie."],
                ["Resistencia a la flexión (MOR)", "45 – 70", "MPa", "Soporta cargas en encofrados y usos estructurales."],
                ["Módulo de Elasticidad (MOE)", "7,000 – 10,000", "MPa", "Buena rigidez y estabilidad dimensional."],
                ["Cizalla encolado", "8 – 12", "MPa", "Excelente adherencia entre chapas."],
                ["Dureza Brinell", "2.5 – 3.0", "HB", "Madera de dureza media."],
                ["Durabilidad frente a humedad", "Alta", "—", "Puede resistir exposición prolongada."],
                ["Estabilidad dimensional", "Alta", "—", "Excelente por la disposición cruzada de fibras."]
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  {row.map((cell, i) => (
                    <td key={i} className="border border-gray-300 px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
