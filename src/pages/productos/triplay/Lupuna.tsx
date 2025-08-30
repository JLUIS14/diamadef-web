export default function Lupuna() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-4">
            Triplay Lupuna
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Liviano, accesible y sostenible, ideal para aplicaciones estructurales y de carpintería ligera.
          </p>
        </div>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/triplay/Lupuna.jpg"
            alt="Triplay Lupuna"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/triplay/Lupuna1.jpg"
            alt="Detalle Triplay Lupuna"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-700">
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            El <strong>triplay Lupuna</strong> es un tablero contrachapado elaborado a partir de chapas de la madera{" "}
            <em>Lupuna (Ceiba pentandra)</em>, árbol originario de la Amazonía peruana y otras regiones tropicales de Sudamérica. 
            Es una madera liviana, abundante y de rápido crecimiento, lo que la convierte en un recurso accesible y sostenible. 
            Presenta buena resistencia mecánica, especialmente en flexión y rigidez, haciéndolo atractivo para aplicaciones estructurales.
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Características */}
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Características físicas y estéticas
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Color:</strong> blanco amarillento a crema claro.</li>
              <li><strong>Textura:</strong> fina a media, uniforme, con brillo bajo.</li>
              <li><strong>Fibra:</strong> recta y grano uniforme.</li>
              <li><strong>Peso:</strong> liviano, fácil de manipular.</li>
              <li><strong>Durabilidad natural:</strong> baja, no resistente a hongos ni insectos si no se protege.</li>
              <li><strong>Facilidad de trabajo:</strong> excelente; se corta, clava y pega sin dificultad.</li>
              <li><strong>Disponibilidad:</strong> alta en mercados locales de la Amazonía y distribuidores de triplay.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              Usos comunes
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Encofrados para concreto, aprovechando su rigidez.</li>
              <li>Cielos rasos y divisiones interiores.</li>
              <li>Mueblería y carpintería ligera.</li>
              <li>Industria de embalajes y transporte.</li>
              <li>Tableros recubiertos con melamina o laminados plásticos.</li>
              <li>Fabricación de puertas enchapadas.</li>
            </ul>
          </div>
        </div>

        {/* Tabla técnica */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            Especificaciones Técnicas
          </h2>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Característica</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Valor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Unidad</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Densidad", "380 – 480", "kg/m³"],
                ["Módulo de elasticidad (MOE)", "7,000 – 9,500", "MPa"],
                ["Módulo de ruptura (MOR)", "45 – 65", "MPa"],
                ["Compresión paralela", "35 – 45", "MPa"],
                ["Contenido de humedad", "8 – 12", "%"],
                ["Espesores comerciales", "4, 6, 9, 12, 15, 18, 21", "mm"],
                ["Medidas estándar", "1.22 x 2.44", "m"],
                ["Tipo de encolado", "Fenólico (WBP) y Urea-formaldehído", "-"],
                ["Durabilidad natural", "Media", "-"],
                ["Resistencia a la humedad", "Media – alta (con adhesivo fenólico)", "-"],
                ["Dureza Brinell (HB)", "2.0 – 2.5", "N/mm²"],
                ["Resistencia a la cizalla", "6 – 10", "MPa"],
                ["MOE – flexión", "7,000 – 9,500", "MPa"],
                ["MOR – flexión estática", "45 – 65", "MPa"],
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
