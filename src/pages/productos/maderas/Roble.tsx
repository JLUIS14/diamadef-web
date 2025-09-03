import React from "react";

export default function Roble() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Madera Roble
        </h1>

        {/* Imagen + Descripción */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <img
            src="/images/maderas/Roble.jpg"
            alt="Madera Roble"
            className="w-full h-auto max-h-[220px] object-cover rounded-xl shadow-lg"
          />
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            La <strong>madera de roble</strong> (<em>Quercus spp.</em>), 
            especialmente especies como el roble blanco (<em>Quercus alba</em>) o el roble europeo, 
            es una madera semipesada, apreciada por su 
            versatilidad de usos, pero que requiere un tratamiento para su durabilidad 
            y su aspecto en tonos varían entre claro y marrón.  
            Tradicionalmente usada en ebanistería, carpintería fina, construcción, 
            tonelería y estructuras.
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
              <li>Densidad: entre 450 y 550 kg/m³ </li>
              <li>Grano: recto, textura gruesa y vetas marcadas</li>
              <li>Resistencia a la humedad: relativa, ideal para estructuras</li>
              <li>Durabilidad natural: normal, poca resistencia a hongos e insectos</li>
              <li>Estética: tonos claro a marrón que adquieren pátina con el tiempo</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              Usos comunes
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Construcción y estructuras: vigas, traviesas, carpintería pesada</li>
              <li>Carpintería fina y muebles: puertas, ventanas, pisos de alta calidad</li>
              <li>Tonelería: fermentación de vinos y whiskeys</li>
              <li>Carpintería naval: alta resistencia a la humedad</li>
              <li>Embalaje decorativo y chapas finas</li>
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
                ["Densidad (aproximada)", "0,51", "g/cm³", "Madera liviana/semipesada."],
                ["Resistencia a la flexión (MOR)", "520", "kg/cm²", "Buena resistencia a rotura en flexión."],
                ["Módulo de elasticidad (MOE)", "85", "tn/cm²", "Rígida frente a deformaciones."],
                ["Compresión paralela", "270", "kg/cm²", "Buena capacidad de carga axial."],
                ["Corte paralelo (shear)", "59", "kg/cm²", "Resistencia moderada al cizallamiento."],
                ["Compresión perpendicular", "36", "kg/cm²", "Menor resistencia transversal."],
                ["Dureza lateral", "270", "kg/cm²", "Superficie dura, pero no extremadamente rígida."],
                ["Tenacidad (impacto)", "1,7", "kg/cm·cm?", "Resistencia moderada al choque."],
                ["Resistencia a flexión (otra fuente)", "970", "kg/cm²", "Alta, en madera libre de defectos."],
                ["Resistencia a compresión", "580", "kg/cm²", "Buena resistencia estructural."],
                ["Resistencia a tracción", "990", "kg/cm²", "Muy alta resistencia a tensión."],
                ["Módulo de elasticidad (otra fuente)", "115", "ton/cm²", "Rango alto de rigidez."]
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
