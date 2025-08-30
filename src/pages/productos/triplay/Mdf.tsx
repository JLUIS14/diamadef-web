export default function TableroMDF() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
            Tablero MDF
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-justify">
            El MDF (Medium Density Fiberboard) es un tablero fabricado a partir de{" "}
            <strong>fibras de madera mezcladas con resinas sintéticas</strong>, 
            prensadas en caliente bajo alta presión. Es un material homogéneo y uniforme, 
            más denso que el aglomerado, pero más blando que el triplay fenólico u OSB. 
            Su superficie totalmente lisa lo convierte en ideal para acabados de{" "}
            <strong>pintura, lacados o recubrimientos decorativos</strong>.
          </p>
        </div>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/triplay/Mdf.jpg"
            alt="Tablero MDF"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/triplay/Mdf1.jpg"
            alt="Detalle de superficie MDF"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-700">
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            Es ampliamente usado en <strong>muebles, puertas, decoración interior 
            y carpintería</strong>, gracias a su facilidad de mecanizado y 
            versatilidad. Puede presentarse en versión cruda o recubierta con 
            melamina, chapa de madera natural o PVC.
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Características */}
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Características principales</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Densidad:</strong> 600 – 800 kg/m³.</li>
              <li><strong>Superficie:</strong> lisa y uniforme, ideal para acabados.</li>
              <li><strong>Procesamiento:</strong> fácil de cortar, fresar y perforar.</li>
              <li><strong>Espesores:</strong> de 2 a 40 mm (más comunes: 9, 15, 18, 25 mm).</li>
              <li><strong>Versiones:</strong> estándar, RH (resistente a humedad), ignífugo.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Usos principales</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Muebles: closets, repisas, cocinas, escritorios.</li>
              <li>Puertas lisas o enchapadas.</li>
              <li>Decoración: molduras, zócalos, paneles.</li>
              <li>Revestimientos de paredes y techos.</li>
              <li>Carpintería y ebanistería.</li>
              <li>Soporte para laminados o chapas.</li>
            </ul>
          </div>
        </div>

        {/* Ventajas */}
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Ventajas</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Superficie lisa, ideal para pintado o recubrimiento.</li>
            <li>No presenta vetas ni nudos.</li>
            <li>Permite cortes y moldurados precisos.</li>
            <li>Más económico que la madera maciza o triplay fenólico.</li>
            <li>Versátil: se usa en muebles, decoración y puertas.</li>
            <li>Buen comportamiento acústico y de aislamiento.</li>
            <li>Versiones especiales resistentes a humedad y fuego.</li>
          </ul>
        </div>

        {/* Desventajas */}
        <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">Desventajas</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>No apto para intemperie sin protección.</li>
            <li>Menor resistencia estructural que OSB o triplay.</li>
            <li>Más pesado que el aglomerado.</li>
            <li>Puede hincharse con humedad.</li>
            <li>Posible liberación de formaldehído (según calidad).</li>
            <li>Necesita recubrimiento para mayor durabilidad.</li>
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
                ["Densidad", "600 – 800", "kg/m³", "Según especie y fabricante"],
                ["Módulo de Elasticidad (MOE)", "2500 – 3500", "N/mm²", "Resistencia a flexión"],
                ["Módulo de Ruptura (MOR)", "20 – 40", "N/mm²", "En flexión estática"],
                ["Resistencia a la tracción perpendicular (IB)", "0.55 – 0.90", "N/mm²", "Depende de calidad del tablero"],
                ["Contenido de humedad", "4 – 11", "%", "Según condiciones de almacenamiento"],
                ["Espesores comerciales", "2 – 40", "mm", "Más comunes: 9, 15, 18, 25 mm"],
                ["Dimensiones estándar", "1220 × 2440 / 1830 × 2440", "mm", "Según mercado y fabricante"],
                ["Clases de emisión formaldehído", "E0, E1, E2", "—", "Hoy se prefieren E0 y E1"],
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
