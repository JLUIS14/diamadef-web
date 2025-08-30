import React from "react";

export default function Tornillo() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <h1 className="text-4xl font-bold text-green-700 mb-8">
          Madera Tornillo
        </h1>

        {/* Imagen + Descripción */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="md:w-1/2">
            <img
              src="/images/maderas/Tornillo.jpg"
              alt="Madera Tornillo"
              className="w-full h-auto max-h-[230px] object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-justify">
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              La <strong>madera Tornillo</strong> (Cedrelinga cateniformis) es una especie tropical originaria de la Amazonía, utilizada ampliamente en carpintería y construcción. 
              Se clasifica como madera semipesada a pesada, con buena durabilidad natural frente a la intemperie y ataque de insectos, gracias a la presencia de extractivos naturales en su duramen. 
              Posee una textura media a gruesa, grano recto o ligeramente entrecruzado y un acabado superficial fino y uniforme. 
              Es apreciada por su facilidad de trabajo, resistencia mecánica y estabilidad dimensional.
            </p>
          </div>
        </div>

        {/* Características y Usos en dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-green-100 border-l-4 border-green-700 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              Características principales
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Color: varía del amarillo dorado a marrón dorado</li>
              <li>Grano: recto a ligeramente entrelazado</li>
              <li>Densidad: media, fácil de trabajar</li>
              <li>Alta resistencia a la humedad y plagas</li>
              <li>Acabado liso y elegante</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              Usos comunes
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Fabricación de muebles finos</li>
              <li>Puertas y ventanas</li>
              <li>Revestimientos interiores</li>
              <li>Construcción de estructuras</li>
              <li>Artículos decorativos</li>
              <li>Embarcaciones</li>
              <li>Entablados</li>
            </ul>
          </div>
        </div>

        {/* Tabla de Especificaciones Técnicas */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Especificaciones Técnicas
          </h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="p-2 text-left">Propiedad</th>
                <th className="p-2 text-left">Valor Aproximado</th>
                <th className="p-2 text-left">Unidad</th>
                <th className="p-2 text-left">Observaciones</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {[
                ["Nombre científico", "Cedrelinga cateniformis", "-", "Familia Fabaceae"],
                ["Densidad básica", "0,55 – 0,60", "g/cm³", "Madera semipesada"],
                ["Densidad al 12% humedad", "650 – 720", "kg/m³", "-"],
                ["Humedad de equilibrio", "12 – 14", "%", "Según clima"],
                ["Dureza Janka", "~ 4.200", "N", "Moderada"],
                ["Contracción radial", "2,5 – 3,0", "%", "Baja"],
                ["Contracción tangencial", "5,0 – 6,0", "%", "Media"],
                ["Módulo de ruptura (MOR)", "90 – 110", "MPa", "Resistencia a flexión"],
                ["Módulo de elasticidad (MOE)", "11.000 – 12.500", "MPa", "Rigidez"],
                ["Resistencia a compresión paralela", "45 – 55", "MPa", "Buena"],
                ["Durabilidad natural", "Alta", "-", "Resistente a insectos y hongos"],
                ["Grano", "Recto o ligeramente entrecruzado", "-", "Textura media"],
                ["Color", "Amarillo dorado a marrón rojizo", "-", "Oscurece con el tiempo"],
                ["Trabajabilidad", "Buena", "-", "Acepta bien lijado, cepillado y barniz"],
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-2 border border-gray-200">{cell}</td>
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
