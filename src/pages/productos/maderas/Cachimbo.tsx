import React from "react";

export default function Cachimbo() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Madera Cachimbo
        </h1>

        {/* Imagen + Descripción */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <img
            src="/images/maderas/Cachimbo.jpg"
            alt="Madera Cachimbo"
            className="w-full h-auto max-h-[230px] object-cover rounded-xl shadow-lg"
          />
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            La <strong>madera Cachimbo</strong> es una especie de la Amazonía peruana 
            que se caracteriza por una densidad media a semipesada, textura media y 
            grano recto. Posee buena estabilidad dimensional, trabajabilidad moderada 
            y resistencia mecánica media-alta. Es utilizada en construcción, 
            carpintería, molduras, encofrados, estructuras y artesanía. 
            La madera seca presenta un color que va del blanco cremoso al marrón pálido, 
            con un brillo moderado, lo que la hace atractiva para diversos usos.
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
              <li>Color: marrón claro a marrón rojizo</li>
              <li>Textura: fina y uniforme</li>
              <li>Densidad: media-alta</li>
              <li>Estabilidad dimensional aceptable</li>
              <li>Fácil de trabajar y mecanizar</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              Usos comunes
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Construcción de estructuras</li>
              <li>Carpintería y ebanistería</li>
              <li>Molduras y acabados</li>
              <li>Encofrados</li>
              <li>Artesanía y artículos decorativos</li>
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
                <th className="border border-gray-300 px-4 py-2 text-left">Característica</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Valor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Unidad</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Observaciones</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Densidad básica", "0.53", "g/cm³", "Madera de densidad media, fácil de trabajar."],
                ["Densidad anhidra", "0.56", "g/cm³", "Secada completamente, mantiene resistencia aceptable."],
                ["Módulo de rotura (MOR)", "980", "kg/cm²", "Buena resistencia a la flexión estática."],
                ["Módulo de elasticidad (MOE)", "115,000", "kg/cm²", "Moderada rigidez, adecuada para estructuras livianas y medianas."],
                ["Compresión paralela a la fibra", "470", "kg/cm²", "Resistencia moderada, adecuada para columnas ligeras."],
                ["Compresión perpendicular", "65", "kg/cm²", "Menor resistencia transversal; se recomienda refuerzo en apoyos."],
                ["Cizallamiento", "100", "kg/cm²", "Resistencia media al corte."],
                ["Dureza Janka (lado radial)", "420", "kgf", "Relativamente blanda, fácil de mecanizar."],
                ["Contracción tangencial", "6.5", "%", "Contracción moderada, puede requerir control de secado."],
                ["Contracción radial", "3.5", "%", "Baja contracción radial, buena estabilidad dimensional."],
                ["Durabilidad natural", "10–15", "años", "Resiste moderadamente hongos e insectos, se recomienda protección."]
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
