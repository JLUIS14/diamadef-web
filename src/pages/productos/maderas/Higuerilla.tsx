import React from "react";

export default function Higuerilla() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Madera Higuerilla (Micrandra spruceana)
        </h1>

        {/* Imagen + Descripción */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <img
            src="/images/maderas/Higuerilla.jpg"
            alt="Madera Higuerilla"
            className="w-full h-auto max-h-[230px] object-cover rounded-xl shadow-lg"
          />
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            La <strong>madera Higuerilla</strong> (también llamada{" "}
            <em>higuerilla negra</em>) proviene de la especie{" "}
            <em>Micrandra spruceana</em>, nativa de la Amazonía peruana. Presenta
            albura crema y duramen marrón oscuro con vetas contrastantes. Es una
            madera <strong>liviana</strong>, de textura media a gruesa y{" "}
            <strong>grano recto</strong>, con trabajabilidad moderadamente buena
            si se controla el secado y se aplican tratamientos de preservación.
            Es idónea para usos interiores, panelería y mueblería ligera.
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Características */}
          <div className="bg-green-100 border-l-4 border-green-700 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              Características principales
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Color: albura crema; duramen marrón oscuro.</li>
              <li>Textura: media a gruesa; grano recto.</li>
              <li>Veteado: bandas claras/oscuras paralelas.</li>
              <li>Brillo medio; olor poco distintivo.</li>
              <li>Buena impregnabilidad (acepta preservantes).</li>
              <li>Secado: requiere control por contenido de látex.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              Usos comunes
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Paneles, chapas, machihembrados y revestimientos.</li>
              <li>Mueblería y cajonería ligera.</li>
              <li>Carpintería interior y componentes no estructurales.</li>
              <li>Elementos decorativos y listonería.</li>
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
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Característica
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Valor
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Unidad
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Observaciones
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Densidad básica", "0,40", "g/cm³", "Madera liviana."],
                ["Contracción volumétrica", "8,92", "%", "Contracción total relativamente baja."],
                ["Contracción tangencial", "6,75", "%", "Contracción moderada en la cara tangencial."],
                ["Contracción radial", "3,43", "%", "Estabilidad aceptable, baja deformación radial."],
                ["Relación T/R", "2,20", "—", "Anisotropía moderada."],
                ["MOE (flexión)", "94 000", "kg/cm²", "Rigidez adecuada en flexión."],
                ["MOR (flexión)", "403", "kg/cm²", "Resistencia media a la ruptura."],
                ["Compresión paralela", "209", "kg/cm²", "Capacidad axial moderada."],
                ["Compresión perpendicular", "31", "kg/cm²", "Baja resistencia transversal; requiere apoyo."],
                ["Corte paralelo", "47", "kg/cm²", "Resistencia limitada al cizallamiento."],
                ["Dureza lateral", "136", "kg/cm²", "Superficie relativamente suave."],
                ["Tenacidad (impacto)", "3,5", "kg·m", "Comportamiento aceptable ante golpes moderados."]
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  {row.map((cell, i) => (
                    <td key={i} className="border border-gray-300 px-4 py-2">
                      {cell}
                    </td>
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
