export default function Okoume() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-800 mb-4">
            Triplay Okoume
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Calidad, ligereza y elegancia natural para aplicaciones marinas, carpintería y diseño.
          </p>
        </div>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/triplay/Okoume.jpg"
            alt="Triplay Okoume"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/triplay/Okoume4.jpg"
            alt="Detalle Triplay Okoume"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-700">
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            El <strong>triplay de okoume</strong> es un contrachapado fabricado con chapas de la especie{" "}
            <em>Aucoumea klaineana</em> (okoume o gabón), árbol nativo de África ecuatorial
            (principalmente Gabón, Guinea Ecuatorial y República del Congo). Se valora por su baja
            densidad, buena estabilidad y acabado uniforme, y es muy usado en aplicaciones marinas
            cuando cumple la norma <strong>BS 1088</strong> (grado marino).
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Características */}
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Características físicas y estéticas
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Densidad:</strong> 430–500 kg/m³, ligera frente a otras duras tropicales.</li>
              <li><strong>Color:</strong> rosado-pálido a marrón claro; veta recta, textura fina-media.</li>
              <li><strong>Trabajabilidad:</strong> fácil de mecanizar, lijar y curvar.</li>
              <li><strong>Durabilidad:</strong> baja a moderada, mejorada en grado marino.</li>
              <li><strong>Certificaciones:</strong> CARB Phase 2 / E1, BS 1088.</li>
              <li><strong>Encolado:</strong> Fenólico / WBP (Clase 3) o Urea-formaldehído (interior).</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              Usos comunes
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Náutica:</strong> cascos, cubiertas, interiores marinos.</li>
              <li><strong>Carpintería fina:</strong> frentes, laterales, mobiliario ligero.</li>
              <li><strong>Diseño:</strong> tableros curvados, revestimientos.</li>
              <li><strong>Eventos:</strong> stands, arquitectura efímera.</li>
              <li><strong>Ventajas:</strong> muy ligero, excelente acabado.</li>
              <li><strong>Limitaciones:</strong> requiere sellado/pintura.</li>
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
                <th className="border border-gray-300 px-4 py-2 text-left">Propiedad</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Valor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Unidad</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Densidad al 12% H", "300–400", "kg/m³"],
                ["Dureza Janka", "~1 780", "N (≈400 lbf)"],
                ["Módulo de elasticidad (MOE)", "6000–8000", "GPa"],
                ["Contracciones (vol./tang./rad.)", "11.6 / 5.3 / 3.0", "%"],
                ["Durabilidad natural", "baja a moderada", "—"],
                ["Compresión paralela", "~40", "N/mm²"],
                ["Flexión estática (MOR)", "~55", "N/mm²"],
                ["MOE (flexión)", "~7 500", "N/mm²"],
                ["Cizalla", "8", "N/mm²"],
                ["Dureza Brinell", "~2.3", "—"],
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
