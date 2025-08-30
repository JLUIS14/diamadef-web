import React from "react";

export default function Moena() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Madera Moena
        </h1>

        {/* Imagen + Descripción */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <img
            src="/images/maderas/Moena.jpg"
            alt="Madera Moena"
            className="w-full h-auto max-h-[220px] object-cover rounded-xl shadow-lg"
          />
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            La madera <strong>Moena</strong>, científicamente conocida como <em>Aniba amazonica</em> 
            (familia Lauraceae), es una especie nativa de la Amazonía peruana, presente en regiones como 
            Iquitos, Yurimaguas, Pucallpa, Tingo María y Huánuco.  
            El árbol alcanza una altura total de hasta 32 m, con troncos rectos, cilíndricos y corteza 
            rugosa de tono anaranjado rojizo-morado.
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
              <li>Color seco: amarillo dorado con tonalidades verde claro y franjas oscuras por grano entrecruzado.</li>
              <li>Brillo: medio a alto.</li>
              <li>Grano: recto a entrecruzado; textura media a fina.</li>
              <li>Veteado: bandas alternas brillantes en sección tangencial y opacas en radial.</li>
              <li>Secado y trabajabilidad: moderadamente fácil de secar; buen aserrío y acabado fino con herramientas adecuadas.</li>
              <li>Durabilidad natural: resistente a la pudrición.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              Usos comunes
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Carpintería general, muebles, molduras y marcos.</li>
              <li>Pisos y revestimientos, pisos machihembrados.</li>
              <li>Estructura de viviendas y componentes estructurales ligeros.</li>
              <li>Chapas decorativas y parihuelas.</li>
              <li>Acabados interiores y embalaje ligero.</li>
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
                ["Densidad básica", "0.56", "g/cm³", "Densidad media, buena manejabilidad"],
                ["Contracción tangencial", "9", "%", "Contracción superficial moderada"],
                ["Contracción radial", "4.3", "%", "Muy baja, buena estabilidad"],
                ["Contracción volumétrica total", "9.4", "%", "Estabilidad dimensional general"],
                ["Relación T/R (tang./radial)", "2.09–2.10", "—", "Anisotropía moderada"],
                ["Módulo de elasticidad (MOE)", "30", "tn/cm²", "Alta rigidez a flexión"],
                ["Módulo de ruptura (MOR)", "99", "kg/cm²", "Resistencia a flexión estática"],
                ["Compresión paralela al grano", "278", "kg/cm²", "Resistencia axial adecuada"],
                ["Compresión perpendicular al grano", "37", "kg/cm²", "Moderada resistencia transversal"],
                ["Corte paralelo a fibras", "87", "kg/cm²", "Buena resistencia al cizallamiento"],
                ["Dureza lateral", "430", "kg/cm²", "Superficie dura adecuada para acabados"],
                ["Tenacidad (impacto)", "2", "kg·m", "Resistencia moderada al choque"]
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
