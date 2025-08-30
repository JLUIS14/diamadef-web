export default function Fenolico() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
            Triplay Fenólico B/C
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
            src="/images/triplay/Fenolico1.jpg"
            alt="Detalle Triplay Fenólico"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-700">
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            La denominación <strong>B/C </strong>indica la calidad de sus caras:
            <br />
            <span className="block mt-2"><strong>Cara B:</strong> superficie relativamente limpia, con ligeras reparaciones y pocas imperfecciones.</span>
            <span className="block"><strong>Cara C:</strong> superficie más rústica, con nudos, parches y variaciones de color.</span>
            <br />
             </p>
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
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Usos del triplay fenólico B/C</h2>
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
            <li>Cara B apta para acabados medios; cara C para usos no visibles.</li>
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
                ["Densidad", "500 – 650", "kg/m³", "Varía según la especie utilizada."],
                ["Adhesivo", "Resina fenólica WBP", "—", "Resistente al agua hirviendo; apto intemperie."],
                ["Resistencia a la flexión (MOR)", "45 – 70", "MPa", "Soporta cargas en encofrados y usos estructurales."],
                ["Módulo de Elasticidad (MOE)", "7,000 – 10,000", "MPa", "Buena rigidez y estabilidad dimensional."],
                ["Cizalla encolado", "8 – 12", "MPa", "Excelente adherencia entre chapas."],
                ["Dureza Brinell", "2.5 – 3.0", "HB", "Madera de dureza media."],
                ["Durabilidad frente a humedad", "Alta", "—", "Puede resistir exposición prolongada."],
                ["Clasificación de caras (B/C)", "B (buena) / C (rústica)", "—", "B para acabados simples; C en zonas ocultas."]
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
