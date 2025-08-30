import React from "react";

export default function Huayruro() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Madera Huayruro
        </h1>

        {/* Imagen + Descripción */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <img
            src="/images/maderas/Huayruro.jpg"
            alt="Madera Huayruro"
            className="w-full h-auto max-h-[220px] object-cover rounded-xl shadow-lg"
          />
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            La <strong>madera de Huayruro</strong> (<em>Ormosia coccinea</em>) es una especie
            nativa de la selva tropical de Sudamérica, principalmente en regiones
            selváticas como Loreto y Ucayali. Su fuste es cilíndrico, con una altura
            comercial aproximada de 20–30 m y un diámetro a la altura del pecho de
            alrededor de 0.56 m.  
            Es altamente valorada en ingeniería de la madera por su favorable relación
            peso/resistencia, lo que la hace ideal para estructuras de carga, pisos y
            elementos sometidos a desgaste.
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
              <li>Color: Albura pálida y duramen marrón rojizo con vetas.</li>
              <li>Grano: entrecruzado, textura media a gruesa.</li>
              <li>Brillo: medio a satinado, veteado con arcos y bandas paralelas anchas.</li>
              <li>Olor: ausente o ligeramente aromático.</li>
              <li>Secado: buen comportamiento en secado artificial y alta trabajabilidad.</li>
              <li>Clasificación: semipesada a pesada.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              Usos comunes
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Estructuras pesadas: vigas, viguetas, columnas y encofrados.</li>
              <li>Carpintería de obra: pisos, marcos, puertas y ventanas.</li>
              <li>Decoración: chapas, ebanistería, muebles finos.</li>
              <li>Otros: pisos machihembrados, canoas, artesanías.</li>
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
                ["Densidad básica", "0.60", "g/cm³", "Moderadamente pesada, buena durabilidad"],
                ["Contracción volumétrica", "12.10", "%", "Estabilidad dimensional promedio"],
                ["Contracción tangencial", "7.58", "%", "Moderada"],
                ["Contracción radial", "4.96", "%", "Baja, buena estabilidad"],
                ["Relación tang./radial (T/R)", "1.50–2.10", "—", "Anisotropía moderada"],
                ["Módulo de elasticidad (MOE)", "131,000–136,000", "kg/cm²", "Alta rigidez"],
                ["Módulo de ruptura (MOR)", "735–838", "kg/cm²", "Excelente resistencia a la flexión"],
                ["Compresión paralela (RM)", "342", "kg/cm²", "Resistencia estructural buena"],
                ["Compresión perpendicular (ELP)", "66–70", "kg/cm²", "Soporta cargas transversales moderadas"],
                ["Corte paralelo a fibras", "84–105", "kg/cm²", "Resistente al cizallamiento"],
                ["Dureza lateral", "468–650", "kg/cm²", "Muy dura, superficie resistente"],
                ["Tenacidad (impacto)", "3.6–3.90", "kg·m", "Buena capacidad de absorción de choque"]
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
