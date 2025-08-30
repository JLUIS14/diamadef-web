export default function Bintangor() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-4">
            Triplay Bintangor
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Belleza tropical, suavidad y versatilidad para muebles, decoración y construcción ligera.
          </p>
        </div>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/triplay/Bintangor.jpg"
            alt="Triplay Bintangor"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/triplay/Bintangor1.jpg"
            alt="Detalle Triplay Bintangor"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-700">
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            El <strong>triplay Bintangor</strong> es un contrachapado cuya capa superficial (face/back) está hecha de{" "}
            <em>Bintangor</em>, una madera tropical roja de gran belleza (especies del género{" "}
            <em>Calophyllum</em>), principalmente procedente del Sudeste Asiático. Su atractivo estético y acabado suave
            lo convierten en una opción habitual para muebles, decoración y aplicaciones internas de alto nivel.
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Características */}
          <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-red-800 mb-4">
              Características físicas y estéticas
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Color y textura:</strong> tonalidad rojiza, vetas naturales y textura uniforme.</li>
              <li><strong>Acabado superficial:</strong> suave, liso y agradable; apto para pintar o barnizar.</li>
              <li><strong>Resistencia:</strong> buena resistencia mecánica, soporta cargas moderadas.</li>
              <li><strong>Facilidad de trabajo:</strong> se corta, lija, perfora y curva con facilidad.</li>
              <li><strong>Variedad de adhesivos:</strong> E0, E1, E2 (bajo formaldehído), MR y WBP.</li>
              <li><strong>Económico y ecológico:</strong> buena relación costo–calidad; disponible con certificaciones (CE, FSC, ISO, CARB).</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              Usos comunes
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Fabricación de <strong>muebles</strong>: gabinetes, mesas, muebles livianos y robustos.</li>
              <li><strong>Decoración de interiores:</strong> revestimientos, paneles, techos.</li>
              <li><strong>Construcción ligera:</strong> techos, pisos, encofrados temporales.</li>
              <li><strong>Puertas</strong>, cocinas y baños.</li>
              <li><strong>Embalajes y exportación:</strong> cajas, pallets, empaques resistentes y livianos.</li>
              <li><strong>Aplicaciones náuticas ligeras:</strong> cabinas o cubiertas interiores.</li>
              <li><strong>Bricolaje y exhibiciones:</strong> estanterías, stands, vitrinas.</li>
            </ul>
          </div>
        </div>

        {/* Ventajas y Consideraciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Ventajas</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Estético:</strong> color rojizo atractivo y veta firme.</li>
              <li><strong>Funcionalidad amplia:</strong> desde muebles hasta embalajes y decoración.</li>
              <li><strong>Certificaciones disponibles:</strong> CE, FSC, ISO, CARB.</li>
              <li><strong>Resistente y fácil de trabajar:</strong> excelente costo–beneficio.</li>
            </ul>
          </div>
          <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-orange-800 mb-4">Consideraciones</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>No es estructural como contrachapados marinos o fenólicos de alta resistencia.</li>
              <li>Para humedad, usar encolado <strong>WBP</strong> o aplicar sellado adecuado.</li>
            </ul>
          </div>
        </div>

        {/* Tabla técnica */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            Especificaciones Técnicas
          </h2>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Característica</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Valor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Unidad</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Observaciones</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Densidad promedio", "350–450", "kg/m³", "Depende del contenido de humedad y origen."],
                ["Módulo de elasticidad (MOE)", "6,500–8,500", "MPa", "Determina la rigidez según espesor y capas."],
                ["Módulo de ruptura (MOR)", "40–60", "MPa", "Resistencia a la flexión, apto para carpintería."],
                ["Resistencia a la compresión paralela", "35–50", "MPa", "Buena resistencia estructural liviana."],
                ["Espesores comerciales", "3, 4, 6, 9, 12, 15, 18", "mm", "Otros espesores bajo pedido especial."],
                ["Medidas estándar de lámina", "1.22 x 2.44", "m", "También disponible en formatos especiales."],
                ["Contenido de humedad", "8–14", "%", "Requiere aclimatación antes del uso."],
                ["Tipo de encolado", "Urea-formaldehído / Fenólico", "—", "Fenólico recomendado para humedad."],
                ["Durabilidad natural", "Moderada", "—", "No apto para intemperie sin protección."],
                ["Resistencia a la humedad", "Media", "—", "Requiere sellado o recubrimiento para uso exterior."],
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