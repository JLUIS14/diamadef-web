export default function Durmientes() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
            Durmientes de Madera
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-justify">
            Los durmientes de madera son elementos estructurales alargados que se colocan de manera 
            transversal bajo los rieles de una vía férrea. Su función principal es soportar, fijar 
            y mantener el ancho de la vía, además de distribuir las cargas transmitidas por los trenes 
            hacia la base de balasto. También se utilizan en obras civiles, puentes, minería y como 
            elementos de soporte temporal en construcción.
          </p>
        </div>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/durmientes/Durmientes.jpg"
            alt="Durmiente de madera ferroviario"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/durmientes/Durmientes1.jpg"
            alt="Detalle de durmiente impregnado"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Características Generales */}
        <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Características Generales</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Material: Maderas duras y resistentes como eucalipto, shihuahuaco, roble o algarrobo.</li>
            <li>Resistencia mecánica a cargas dinámicas elevadas.</li>
            <li>Durabilidad de 10 a 25 años con tratamiento.</li>
            <li>Impregnados con creosota, CCA u otros preservantes.</li>
            <li>Elasticidad que amortigua vibraciones y reduce desgaste.</li>
            <li>Fabricados según normas internacionales y nacionales.</li>
          </ul>
        </div>

        {/* Usos principales */}
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Usos principales</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Ferrocarriles: base para fijar rieles.</li>
            <li>Minería: vías interiores y exteriores.</li>
            <li>Construcción: soporte en puentes y cimentaciones.</li>
            <li>Ingeniería civil: pasarelas, defensas ribereñas, carreteras.</li>
            <li>Paisajismo y urbanismo: mobiliario urbano y estructuras decorativas.</li>
          </ul>
        </div>
         {/* Ventajas y Desventajas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Ventajas</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left inline-block">
              <li>Buen comportamiento frente a cargas dinámicas y vibraciones.</li>
              <li>Flexibilidad y absorción de esfuerzos.</li>
              <li>Menor costo inicial frente a concreto o acero.</li>
              <li>Fácil instalación y corte en campo.</li>
              <li>Reutilizables al final de su vida útil.</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-red-800 mb-4">Desventajas</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left inline-block">
              <li>Vida útil más corta frente a concreto o acero.</li>
              <li>Requieren tratamiento químico para mayor durabilidad.</li>
              <li>Sensibles a humedad e insectos si no son tratados.</li>
              <li>Mayor costo de mantenimiento.</li>
            </ul>
          </div>
        </div>

        {/* Tabla de Especificaciones Técnicas */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
          <h2 className="text-3xl font-semibold text-amber-800 mb-4">
            Especificaciones Técnicas de los Durmientes
          </h2>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-amber-600 text-white">
              <tr>
                <th className="border px-4 py-2">Parámetro</th>
                <th className="border px-4 py-2">Valor / Rango</th>
                <th className="border px-4 py-2">Unidad</th>
                <th className="border px-4 py-2">Comentarios</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tipo de madera", "Shihuahuaco, eucalipto, roble, algarrobo, pino impregnado", "–", "Especies densas y resistentes"],
                ["Longitud estándar", "2.40 – 2.70", "m", "Según norma ferroviaria"],
                ["Ancho", "20 – 26", "cm", "Según carga de diseño"],
                ["Espesor", "12 – 16", "cm", "Norma ferroviaria"],
                ["Peso aproximado", "70 – 100", "kg", "Varía según especie"],
                ["Densidad", "800 – 1200", "kg/m³", "Mayor densidad = más durabilidad"],
                ["Humedad", "18 – 25", "%", "Secado previo al tratamiento"],
                ["Tratamiento", "Creosota, CCA", "–", "Inmersión en autoclave"],
                ["Vida útil", "10 – 25", "años", "Con tratamiento adecuado"],
                ["Resistencia a flexión", "80 – 120", "N/mm²", "Depende de la especie"],
                ["Resistencia a compresión", "40 – 60", "N/mm²", "Paralela a la fibra"],
                ["Fijación del riel", "Clavos, pernos, grapas", "–", "Según vía"],
                ["Norma de fabricación", "AREMA, UIC, AASHTO, MTC", "–", "Dimensiones y tratamientos"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  {row.map((cell, j) => (
                    <td key={j} className="border px-4 py-2">{cell}</td>
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
