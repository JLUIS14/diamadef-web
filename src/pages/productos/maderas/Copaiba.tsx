import React from "react";

export default function Copaiba() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Madera Copaiba
        </h1>

        {/* Imagen + Descripción */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <img
            src="/images/maderas/Copaiba.jpg"
            alt="Madera Copaiba"
            className="w-full h-auto max-h-[250px] object-cover rounded-xl shadow-lg"
          />
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            La <strong>madera Copaiba</strong>, proveniente del árbol{" "}
            <em>Copaifera paupera</em> y especies relacionadas como{" "}
            <em>C. officinalis</em>, es originaria de la Amazonía peruana. 
            Presenta albura de color beige y duramen de tono castaño rojizo con 
            vetas oscuras. Su textura es media a fina, con grano recto y veteado 
            característico en arcos superpuestos y bandas longitudinales oscuras 
            muy angostas.  
            Tiene una durabilidad natural muy alta frente a hongos e insectos, 
            aunque su secado es naturalmente lento. Es apreciada por su resistencia 
            mecánica y su estabilidad dimensional moderada, lo que la hace versátil 
            en múltiples aplicaciones.
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
              <li>Textura: media a fina</li>
              <li>Grano: recto</li>
              <li>Veteado: arcos superpuestos y bandas longitudinales oscuras</li>
              <li>Durabilidad natural: muy resistente a hongos e insectos</li>
              <li>Secado: naturalmente lento</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              Usos comunes
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Mobiliario de interior y exterior</li>
              <li>Pisos y revestimientos</li>
              <li>Carpintería en general</li>
              <li>Chapas decorativas</li>
              <li>Construcciones navales ligeras</li>
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
                ["Densidad básica", "0.61", "g/cm³", "Madera medianamente pesada."],
                ["Contracción volumétrica", "10.7", "%", "Estabilidad dimensional moderada."],
                ["Contracción tangencial", "7", "%", "Contracción en superficie moderada."],
                ["Contracción radial", "3.4", "%", "Muy baja contracción radial."],
                ["Relación tangencial/radial (T/R)", "2.3", "—", "Índice de anisotropía moderada."],
                ["Módulo de elasticidad (MOE)", "112,000", "kg/cm²", "Resistencia a la deformación flexional."],
                ["Módulo de ruptura (MOR)", "736", "kg/cm²", "Resistencia a la flexión estática."],
                ["Compresión paralela al grano", "268", "kg/cm²", "Capacidad de carga axial."],
                ["Compresión perpendicular", "74", "kg/cm²", "Menor resistencia transversal."],
                ["Corte paralelo a las fibras", "99", "kg/cm²", "Resistencia al cizallamiento."],
                ["Dureza lateral", "587", "kg/cm²", "Alta dureza superficial."],
                ["Tenacidad (impacto)", "3.4", "kg·m", "Resistencia al choque moderada."]
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
