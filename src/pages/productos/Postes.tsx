export default function Postes() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
            Postes de Madera
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-justify">
            Los postes de madera son elementos estructurales de sección cilíndrica o prismática utilizados 
            principalmente para soportar cargas verticales y laterales en instalaciones eléctricas, 
            telecomunicaciones, cercados, señalización y obras civiles. Se fabrican a partir de troncos de 
            árboles seleccionados, debidamente tratados con preservantes químicos para garantizar resistencia 
            mecánica y durabilidad frente a la humedad, insectos y hongos.
          </p>
        </div>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/postes/Postes.jpg"
            alt="Poste de madera para electricidad"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/postes/Postes1.jpg"
            alt="Detalle de poste de madera tratado"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Características Generales */}
        <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Características Generales</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Materia prima: eucalipto, pino tratado, shihuahuaco, algarrobo.</li>
            <li>Resistencia mecánica frente a cargas verticales, tracción y viento.</li>
            <li>Durabilidad de 15 a 30 años según especie y tratamiento.</li>
            <li>Tratamiento preservante con CCA, creosota u otros.</li>
            <li>Geometría cilíndrica con punta biselada.</li>
            <li>Cumplen con normativas ANSI, ASTM, IEC y NTP.</li>
          </ul>
        </div>

        {/* Usos principales */}
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Usos principales</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Electricidad: líneas de distribución de media y baja tensión.</li>
            <li>Telecomunicaciones: tendido de cables y fibra óptica.</li>
            <li>Infraestructura vial: señalización y alumbrado público.</li>
            <li>Agricultura y ganadería: cercos y espalderas.</li>
            <li>Construcción y minería: soporte temporal.</li>
            <li>Urbanismo: postes decorativos y cercas rústicas.</li>
          </ul>
        </div>

        {/* Ventajas y Desventajas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Ventajas</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left inline-block">
              <li>Material renovable y de bajo costo inicial.</li>
              <li>Fácil transporte e instalación.</li>
              <li>Buen comportamiento mecánico frente a viento y tracción.</li>
              <li>Compatible con ambientes rurales y urbanos.</li>
              <li>Durabilidad prolongada con tratamientos adecuados.</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-red-800 mb-4">Desventajas</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left inline-block">
              <li>Vida útil menor frente a concreto o acero.</li>
              <li>Requieren mantenimiento de preservante.</li>
              <li>Pueden ser atacados por agentes biológicos sin protección.</li>
              <li>Variabilidad en dimensiones y resistencia.</li>
            </ul>
          </div>
        </div>

        {/* Tabla de Especificaciones Técnicas */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
          <h2 className="text-3xl font-semibold text-amber-800 mb-4">
            Especificaciones Técnicas de Postes de Madera
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
                ["Tipo de madera", "Eucalipto, pino tratado, shihuahuaco, algarrobo", "–", "Según resistencia y disponibilidad"],
                ["Longitud estándar", "6 – 12", "m", "Uso eléctrico o telecomunicaciones"],
                ["Diámetro base", "20 – 35", "cm", "Se afina hacia la punta"],
                ["Diámetro punta", "12 – 20", "cm", "Relación con altura"],
                ["Peso aproximado", "80 – 250", "kg", "Depende de especie y humedad"],
                ["Densidad", "500 – 1100", "kg/m³", "Mayor densidad = mayor durabilidad"],
                ["Humedad", "20 – 30", "%", "Secado previo al tratamiento"],
                ["Tratamiento", "CCA, creosota", "–", "Aplicado en autoclave"],
                ["Vida útil", "15 – 30", "años", "Según preservante"],
                ["Resistencia a flexión", "60 – 90", "N/mm²", "Paralela a la fibra"],
                ["Resistencia a compresión", "30 – 55", "N/mm²", "Depende de la especie"],
                ["Instalación", "Enterrado 1/6 longitud", "m", "Recomendación técnica"],
                ["Norma de fabricación", "ANSI, ASTM, IEC, NTP", "–", "Requisitos de resistencia y tratamiento"],
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
