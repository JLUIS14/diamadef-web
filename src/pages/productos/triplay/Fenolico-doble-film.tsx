export default function FenolicoDobleFilm() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
            Triplay Fenólico Doble Film
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-justify">
            El Triplay Fenólico Doble Film Premium es un tablero contrachapado con núcleo de álamo y chapas externas de eucalipto, prensado bajo alta presión y temperatura, usando adhesivo fenólico tipo <strong>WBP</strong>. 
            Está recubierto en ambas caras con una película fenólica de 180 g/m² que le otorga propiedades impermeables, antideslizantes y de gran resistencia mecánica. 
            Se utiliza en encofrados reutilizables y aplicaciones industriales que requieren durabilidad, resistencia y estabilidad estructural.
          </p>
        </div>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/triplay/FenolicoDobleFilm.jpg"
            alt="Triplay Fenólico Doble Film Premium"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/triplay/FenolicoDobleFilm2.jpg"
            alt="Detalle superficie antideslizante"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-700">
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            Este tablero cuenta con un <strong>recubrimiento fenólico marrón</strong> prensado en caliente con textura hexagonal antideslizante. 
            Su núcleo de álamo lo hace liviano y estable, mientras que las chapas de eucalipto le brindan mayor resistencia. 
            Su vida útil estimada es de <strong>8 a 15 reutilizaciones</strong> en encofrados, dependiendo del uso y mantenimiento.
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Características */}
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Características principales</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Núcleo:</strong> Álamo, liviano y estable.</li>
              <li><strong>Caras:</strong> Eucalipto, mayor densidad y resistencia.</li>
              <li><strong>Recubrimiento:</strong> Film fenólico marrón de 180 g/m².</li>
              <li><strong>Adhesivo:</strong> Fenólico WBP (resistente a agua y ebullición).</li>
              <li><strong>Acabado:</strong> Textura hexagonal antideslizante.</li>
              <li><strong>Estabilidad:</strong> Baja absorción de humedad.</li>
              <li><strong>Vida útil:</strong> 8 – 15 reutilizaciones en encofrados.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Usos principales</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Construcción:</strong> encofrados de concreto para muros, losas y columnas.</li>
              <li><strong>Industria:</strong> plataformas, pisos de camiones, andamios y contenedores.</li>
              <li><strong>Infraestructura:</strong> puentes, túneles y obras de gran envergadura.</li>
              <li><strong>Otros:</strong> aplicaciones industriales con exigencia de resistencia mecánica.</li>
            </ul>
          </div>
        </div>

        {/* Ventajas */}
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Ventajas y beneficios</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Alta resistencia a flexión y cargas pesadas.</li>
            <li>Superficie antideslizante que incrementa seguridad.</li>
            <li>Larga durabilidad con múltiples reutilizaciones.</li>
            <li>Resistente al agua, abrasión y agentes químicos moderados.</li>
            <li>Versátil: apto para construcción e industria.</li>
            <li>Bajo desgaste gracias a su recubrimiento fenólico premium.</li>
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
                <th className="border border-gray-300 px-4 py-2 text-center">Descripción</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Valor</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Unidad</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Observaciones</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tamaño estándar", "1.22 × 2.44 × 18", "m / mm", "Tambien existe en espesores: 12, 15, 17 mm"],
                ["Color de film", "Marrón", "—", "Película fenólica con textura hexagonal antideslizante"],
                ["Gramaje del film", "180", "g/m²", "Capa protectora prensada en caliente"],
                ["Adhesivo", "WBP", "—", "Resistente al agua y ebullición"],
                ["Contenido de humedad", "8.2", "%", "Mantiene estabilidad dimensional"],
                ["Densidad", "530", "kg/m³", "Buena relación resistencia/peso"],
                ["Calidad de vinculación", "0.60 – 1.15", "MPa", "Cumple norma EN 314"],
                ["Tasa de daños en uso", "68", "%", "Bajo deterioro en ciclos intensivos"],
                ["Módulo de Elasticidad (MOE) – Longitudinal", "5150", "MPa", "Buena rigidez longitudinal"],
                ["Módulo de Elasticidad (MOE) – Transversal", "4776", "MPa", "Resistencia aceptable transversal"],
                ["Resistencia a flexión (MOR) – Longitudinal", "51.05", "MPa", "Alta resistencia en flexión"],
                ["Resistencia a flexión (MOR) – Transversal", "41.08", "MPa", "Similar a maderas duras industriales"],
                ["Tolerancia de espesor", "±0.5", "mm", "Variación mínima por control de calidad"],
                ["Vida útil estimada", "10 – 20", "usos", "Depende de mantenimiento y condiciones de obra"],
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
