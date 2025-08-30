import React from "react";

export default function Bolaina() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Madera Bolaina
        </h1>

        {/* Imagen + Descripción */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <img
            src="/images/maderas/Bolaina.jpg"
            alt="Madera Bolaina"
            className="w-full h-auto max-h-[220px] object-cover rounded-xl shadow-lg"
          />
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            La <strong>Bolaina</strong> (<em>Guazuma crinita</em>) es una especie maderable nativa de la Amazonía peruana, especialmente abundante en bosques aluviales y purmas.  
            Es una especie pionera de rápido crecimiento, ideal para ser gestionada por pequeños productores debido a su capacidad de regeneración natural y ciclo productivo acelerado;  
            alcanza diámetros útiles tras 11–12 años, lo que permite su aprovechamiento sostenible.
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Características */}
          <div className="bg-green-100 border-l-4 border-green-700 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              Características principales
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Crecimiento rápido y regeneración natural: hasta 4,8 cm de diámetro por año.</li>
              <li>Distribución regional: presente en Ucayali, Loreto, Huánuco, San Martín, Amazonas, Madre de Dios y más.</li>
              <li>Aplicaciones locales: construcción económica de viviendas prefabricadas, especialmente tras desastres.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              Usos comunes
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Construcción rápida y asequible: casas prefabricadas, paneles y tablillas.</li>
              <li>Carpintería ligera: muebles sencillos, herramientas de madera, revestimientos interiores.</li>
              <li>Materia prima secundaria: MDF, tableros de fibra y nanocelulosa.</li>
            </ul>
          </div>

        </div>

        {/* Especificaciones técnicas */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-4">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Especificaciones Técnicas
          </h2>
          <table className="min-w-full border border-gray-300">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Propiedad</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Valor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Unidad</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Observaciones</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Densidad básica", "0.59", "g/cm³", "Moderadamente liviana; ideal para manufactura rápida"],
                ["Contracción volumétrica", "12.1", "%", "Estabilidad dimensional moderada"],
                ["Contracción tangencial", "7.58", "%", "Contracción moderada superficial"],
                ["Contracción radial", "4.96", "%", "Contracción más controlada"],
                ["Relación tangencial/radial T/R", "1.5", "—", "Indica anisotropía razonable"],
                ["Módulo de elasticidad (MOE)", "131 000", "kg/cm²", "Alta rigidez en flexión"],
                ["Módulo de ruptura (MOR)", "735", "kg/cm²", "Buena resistencia a la flexión"],
                ["Compresión paralela al grano", "342", "kg/cm²", "Capacidad estructural adecuada"],
                ["Compresión perpendicular", "66", "kg/cm²", "Resistencia transversal moderada"],
                ["Corte paralelo a fibras", "84", "kg/cm²", "Resistencia decente al cizallamiento"],
                ["Dureza lateral", "468", "kg/cm²", "Buena dureza superficial"],
                ["Tenacidad (impacto)", "3.9", "kg·m", "Buena capacidad de resistencia a choques"]
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
