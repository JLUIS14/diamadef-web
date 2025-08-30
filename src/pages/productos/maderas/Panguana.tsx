// src/pages/productos/maderas/MaderaPanguana.tsx
import React from "react";

export default function Panguana() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Madera Panguana
        </h1>

        {/* Imagen + Descripción */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <img
            src="/images/maderas/Panguana.jpg"
            alt="Madera Panguana"
            className="w-full h-auto max-h-[230px] object-cover rounded-xl shadow-lg"
          />
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            La <strong>madera Panguana</strong>, también conocida como{" "}
            <em>Sande</em> (<em>Brosimum utile</em>, familia Moraceae), es originaria
            de la cuenca amazónica. Es medianamente pesada, de fácil trabajabilidad,
            con grano entrecruzado, textura media y color pardo claro uniforme. 
            Presenta buena estabilidad dimensional y contracciones moderadas. 
            Se utiliza en estructuras, carpintería general, encofrados y molduras. 
            Aunque no es muy durable de forma natural, es económica y accesible.
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
              <li>Color: marrón claro a marrón oscuro con vetas finas</li>
              <li>Densidad: aproximadamente 0,75 g/cm³</li>
              <li>Durabilidad: alta, resistente a hongos e insectos</li>
              <li>Grano entrecruzado y textura media</li>
              <li>Fácil trabajabilidad con herramientas manuales y mecánicas</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              Usos comunes
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Puertas y ventanas</li>
              <li>Pisos y muebles</li>
              <li>Estructuras y carpintería exterior</li>
              <li>Encofrados y molduras</li>
              <li>Aplicaciones estructurales ligeras</li>
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
                ["Densidad básica", "0,49", "g/cm³", "Madera medianamente pesada con buena trabajabilidad."],
                ["Contracción volumétrica", "9,69", "%", "Moderada, buena estabilidad en entornos variables."],
                ["Contracción tangencial", "6,88", "%", "Baja a moderada, reduce deformación."],
                ["Contracción radial", "3,71", "%", "Muy baja, excelente estabilidad dimensional."],
                ["Relación T/R (Tangencial/Radial)", "1,90", "—", "Menor anisotropía dimensional que otras especies."],
                ["MOE (Módulo de Elasticidad) en flexión", "100 000", "kg/cm²", "Resistencia adecuada a la rigidez."],
                ["MOR (Módulo de Ruptura) en flexión", "511", "kg/cm²", "Buen desempeño estructural bajo carga."],
                ["Compresión paralela al grano", "264", "kg/cm²", "Moderada, útil en aplicaciones verticales."],
                ["Compresión perpendicular al grano", "41", "kg/cm²", "Baja, requiere soporte en aplicaciones horizontales."],
                ["Corte paralelo al grano", "74", "kg/cm²", "Resistencia media al cizallamiento."],
                ["Dureza lateral", "380", "kg/cm²", "Moderadamente blanda, sencilla de mecanizar."],
                ["Tenacidad (impacto)", "2,7", "kg·m", "Resistencia limitada al choque; adecuada para usos ligeros."]
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


