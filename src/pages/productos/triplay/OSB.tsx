export default function TableroOSB() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
            Tablero OSB 
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-justify">
            El OSB (Oriented Strand Board) es un tablero estructural fabricado con <strong>virutas largas y delgadas de madera</strong>, 
            orientadas en distintas direcciones y unidas mediante adhesivos sintéticos termoendurecibles, 
            bajo alta presión y temperatura. Su estructura cruzada le da <strong>resistencia mecánica uniforme</strong>, 
            similar al triplay convencional, pero con mayor aprovechamiento de la materia prima al provenir 
            de especies de rápido crecimiento como pino, álamo y eucalipto.
          </p>
        </div>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/triplay/Osb1.jpg"
            alt="Tablero OSB"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/triplay/Osb.jpg"
            alt="Detalle de virutas orientadas del OSB"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-700">
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            Se emplea en <strong>construcción, carpintería y embalaje</strong>, como sustituto del triplay fenólico y del contrachapado, 
            aunque presenta diferencias en desempeño, durabilidad y estética. Su superficie es rugosa y sin vetas visibles, 
            lo que lo hace más técnico que decorativo.
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Características */}
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Características principales</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Estructura:</strong> 3 a 4 capas de virutas orientadas cruzadas.</li>
              <li><strong>Resistencia:</strong> Buena, menor que el fenólico pero suficiente estructuralmente.</li>
              <li><strong>Estabilidad:</strong> Dimensional gracias a fibras cruzadas.</li>
              <li><strong>Superficie:</strong> Rugosa, sin vetas decorativas.</li>
              <li><strong>Adhesivos:</strong> Resinas fenólicas o MDI resistentes a la humedad.</li>
              <li><strong>Clasificación:</strong> OSB-1, OSB-2, OSB-3, OSB-4 según norma EN 300.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Usos principales</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Construcción:</strong> encofrados ligeros, techos, pisos y muros de carga.</li>
              <li><strong>Carpintería:</strong> muebles económicos, repisas y estantes.</li>
              <li><strong>Embalaje:</strong> pallets, cajas y contenedores.</li>
              <li><strong>Decoración:</strong> paneles rústicos e industriales.</li>
            </ul>
          </div>
        </div>

        {/* Ventajas */}
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Ventajas</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Aprovecha mejor la madera → más económico que el triplay.</li>
            <li>Resistencia mecánica uniforme.</li>
            <li>Disponible en grandes formatos y espesores.</li>
            <li>Buena resistencia a impactos.</li>
            <li>Sustentable: utiliza especies de rápido crecimiento.</li>
          </ul>
        </div>

        {/* Desventajas */}
        <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">Desventajas</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Menor durabilidad en exteriores que el fenólico.</li>
            <li>Sensible a la humedad → hinchazón en bordes.</li>
            <li>Superficie poco estética (requiere recubrimiento).</li>
            <li>Posible liberación de COVs según adhesivo.</li>
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
                <th className="border px-4 py-2 text-center">Propiedad</th>
                <th className="border px-4 py-2 text-center">Valor</th>
                <th className="border px-4 py-2 text-center">Unidad</th>
                <th className="border px-4 py-2 text-center">Observaciones</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Densidad", "600 – 680", "kg/m³", "Depende de especie y fabricante"],
                ["Contenido de humedad", "6 – 10", "%", "Según condiciones de almacenamiento"],
                ["Módulo de Elasticidad (MOE)", "3,500 – 4,500", "MPa", "Menor que triplay fenólico"],
                ["Módulo de Ruptura (MOR)", "18 – 22", "MPa", "En flexión estática"],
                ["Resistencia a la tracción", "0.4 – 0.6", "MPa", "Limitada en conexiones exigentes"],
                ["Resistencia al corte", "0.8 – 1.2", "MPa", "Similar a contrachapado"],
                ["Conductividad térmica", "0.13 – 0.15", "W/m·K", "Aislante parcial"],
                ["Espesores comerciales", "9, 12, 15, 18, 22, 25", "mm", "Estándar en construcción"],
                ["Dimensiones", "1.22 × 2.44 / 1.25 × 2.50", "m", "Según mercado y norma"],
                ["Clasificación estructural", "OSB-1 a OSB-4", "—", "Norma EN 300, APA-PRP-108/PS-2"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  {row.map((cell, j) => (
                    <td key={j} className="border px-4 py-2">{cell}</td>
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
