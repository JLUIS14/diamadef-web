export default function Parihuelas() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
            Pallets / Parihuelas
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-justify">
            Un pallet o parihuela es una plataforma rígida y estandarizada que sirve para apilar, 
            almacenar, manipular y transportar mercancías de forma segura y eficiente. 
            Se fabrican principalmente en madera, plástico o metal, siendo la madera la más utilizada 
            por su costo accesible, resistencia y facilidad de reparación. 
            Permiten el manejo mecanizado mediante montacargas, transpaletas y equipos de izaje, 
            facilitando la logística y reduciendo los tiempos en almacenes, fábricas y centros de distribución.
          </p>
        </div>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/parihuelas/Parihuela1.jpg"
            alt="Parihuela de madera estándar"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/parihuelas/Parihuela.jpg"
            alt="Detalle de pallet block 4 entradas"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Tipos de Pallets */}
        <div className="grid grid-cols-1 md:grid gap-6 ">
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-amber-800 mb-3">Parihuelas de madera</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Más comunes en la industria.</li>
              <li>Fáciles de reparar y económicos.</li>
              <li>Tratados térmicamente (HT) para exportación (ISPM 15).</li>
            </ul>
          </div>
        </div>

        {/* Ventajas y Desventajas en 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Ventajas</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left inline-block">
              <li>Estandarización logística internacional.</li>
              <li>Facilitan la manipulación con montacargas y grúas.</li>
              <li>Reducen daños en la mercancía.</li>
              <li>Pueden reutilizarse y repararse.</li>
              <li>Biodegradables y reciclables (madera).</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-red-800 mb-4">Desventajas</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left inline-block">
              <li>Los pallets de madera pueden ser afectados por plagas y humedad.</li>
              <li>Requieren tratamiento especial para exportación.</li>
              <li>Mayor peso que plástico o aluminio.</li>
              <li>Vida útil limitada en condiciones extremas.</li>
            </ul>
          </div>
        </div>

        {/* Usos principales */}
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Usos principales</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Almacenamiento y transporte en almacenes y fábricas.</li>
            <li>Exportación e importación de mercancías (ISPM 15).</li>
            <li>Sectores: agroindustria, alimentación, farmacéutica, minería e industria pesada.</li>
            <li>Aplicaciones secundarias: muebles, pisos, construcción ligera.</li>
          </ul>
        </div>

        {/* Tablas técnicas */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6 space-y-10">

          {/* Primero 2 entradas */}
          <h2 className="text-3xl font-semibold text-amber-800 mb-4">
            Especificaciones Técnicas – 2 entradas
          </h2>
          <table className="min-w-full border border-gray-300 text-sm mb-10">
            <thead className="bg-amber-600 text-white">
              <tr>
                <th className="border px-4 py-2">Parámetro</th>
                <th className="border px-4 py-2">Valor</th>
                <th className="border px-4 py-2">Unidad</th>
                <th className="border px-4 py-2">Comentarios</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tipo de pallet", "Stringer pallet, 2 entradas", "–", "Acceso por dos lados"],
                ["Dimensiones nominales", "1200x1000 / 1200x800", "mm", "ISO y Euro pallet"],
                ["Altura total", "130 – 150", "mm", "Menor altura que 4 vías"],
                ["Peso aproximado", "14 – 22", "kg", "Más liviano"],
                ["Capacidad estática", "800 – 3000", "kg", "Según diseño"],
                ["Capacidad dinámica", "600 – 1200", "kg", "Menor resistencia en movimiento"],
                ["Capacidad en rack", "400 – 800", "kg", "Menor que 4 vías"],
                ["Nº de largueros", "2 – 3", "unid.", "Dan rigidez"],
                ["Norma exportación", "ISPM 15 – HT", "–", "Requerido para comercio"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  {row.map((cell, j) => (
                    <td key={j} className="border px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Luego 4 entradas */}
          <h2 className="text-3xl font-semibold text-amber-800 mb-4">
            Especificaciones Técnicas – 4 entradas
          </h2>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-amber-600 text-white">
              <tr>
                <th className="border px-4 py-2">Parámetro</th>
                <th className="border px-4 py-2">Valor</th>
                <th className="border px-4 py-2">Unidad</th>
                <th className="border px-4 py-2">Comentarios</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tipo de pallet", "Block pallet, 4 entradas", "–", "Estándar internacional (ISO/Euro)"],
                ["Dimensiones nominales", "1200x1000 / 1200x800", "mm", "ISO y Euro pallet"],
                ["Altura total", "140 – 160", "mm", "Varía según diseño"],
                ["Peso aproximado", "15 – 25", "kg", "Depende de madera y humedad"],
                ["Material", "Pino / Eucalipto", "–", "Maderas blandas y secas"],
                ["Capacidad estática", "1000 – 4000", "kg", "Apilado en piso"],
                ["Capacidad dinámica", "800 – 1500", "kg", "En movimiento con montacargas"],
                ["Capacidad en rack", "500 – 1000", "kg", "Depende de refuerzo"],
                ["Nº de tacos", "9", "unid.", "3 filas de 3 bloques"],
                ["Norma exportación", "ISPM 15 – HT", "–", "Tratamiento térmico"],
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

