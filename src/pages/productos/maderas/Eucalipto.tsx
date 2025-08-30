import React from "react";

export default function Eucalipto() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Madera Eucalipto
        </h1>

        {/* Imagen + Descripción */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <img
            src="/images/maderas/Eucalipto.jpg"
            alt="Madera Eucalipto"
            className="w-full h-auto max-h-[280px] object-cover rounded-xl shadow-lg"
          />
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            La <strong>madera de eucalipto</strong> se obtiene de diversas especies del género Eucalyptus, originario de Australia cultivadas extensamente en regiones tropicales y subtropicales de América, África y Asia. En el Perú, especies como Eucalyptus globulus (eucalipto común) y Eucalyptus grandis son ampliamente cultivadas por su rápido crecimiento y adaptabilidad a distintos suelos y altitudes. Desde un punto de vista técnico, el eucalipto es una madera dura o semidura, de alta densidad relativa. 
            En ingeniería de la madera, se valora por su módulo de elasticidad elevado, resistencia a la flexión y compresión, y buena respuesta al encolado y mecanizado. Su durabilidad natural frente a hongos e insectos varía según la especie, pero en general es moderada a buena
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
              <li>
                <strong>Color y apariencia:</strong> duramen de rosa pálido a marrón rojizo oscuro;
                albura clara/amarillenta. Textura media a gruesa, vetas rectas o entrecruzadas
                según la especie.
              </li>
              <li>
                <strong>Densidad y dureza:</strong> 600–900 kg/m³; dureza Janka ~1 350–3 000 lbf
                (más dura que robles comunes).
              </li>
              <li>
                <strong>Estabilidad y contracción:</strong> radial ~6–8%, tangencial ~12–13%;
                contracción volumétrica total ~20–21%. Relación T/R ~1,6–1,9.
              </li>
              <li>
                <strong>Trabajo y acabado:</strong> trabajable con herramientas adecuadas;
                puede requerir cuchillas de carburo. Buen lijado, encolado y acabado; el
                secado rápido puede causar deformaciones.
              </li>
              <li>
                <strong>Durabilidad natural:</strong> moderadamente durable frente a
                descomposición, plagas y humedad (p. ej., <em>E. saligna</em>, <em>E. botryoides</em>, <em>E. pilularis</em>).
              </li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              Usos comunes
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Construcción estructural:</strong> vigas, postes, decking, traviesas de ferrocarril, postes de servicios.</li>
              <li><strong>Carpintería y acabados:</strong> muebles interior/exterior, pisos, revestimientos, puertas, ventanas y molduras.</li>
              <li><strong>Industria papelera:</strong> pulpa y producción de papel por su rápido crecimiento y fibras.</li>
              <li><strong>Combustible y carbón vegetal:</strong> alto poder calorífico (p. ej., <em>E. camaldulensis</em>, <em>E. deglupta</em>).</li>
              <li><strong>Restauración ecológica:</strong> reforestación, estabilización de suelos y sombra en cultivos.</li>
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
                ["Densidad (secado)", "600–900 kg/m³", "kg/m³", "Alta densidad según la especie"],
                ["Dureza Janka", "~1 350–3 000 lbf (6 000–13 000 N)", "lbf / N", "Muy dura (más que el roble)"],
                ["Módulo de ruptura (MOR)", "~118 MPa", "kg/cm²", "Alta resistencia a la flexión"],
                ["Módulo de elasticidad (MOE)", "~14–19 GPa", "kg/cm²", "Gran rigidez estructural"],
                ["Compresión paralela al grano", "~60 MPa", "kg/cm²", "Alta capacidad estructural"],
                ["Contracción radial/tangencial", "~6–8 % / ~12–13 %", "%", "Contracción moderada"],
                ["Contracción volumétrica total", "~20–21 %", "%", "Estabilidad apropiada tras adecuado secado"],
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
