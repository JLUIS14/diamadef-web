import { Seo } from "../../../components/common/Seo";
import { BloqueCotizar } from "../../../components/common/BloqueCotizar";

export default function Okoume() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <Seo path="/productos/triplay/okoume" />

      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-800 mb-4">
            Triplay Okoume en Lima
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tablero liviano de acabado fino y uniforme, ideal para muebles, carpintería fina,
            puertas y revestimientos. Cortes a medida y envíos a todo el Perú.
          </p>
        </div>

        {/* Bloque de cotización */}
        <BloqueCotizar producto="triplay okoume" />

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/triplay/Okoume.jpg"
            alt="Planchas de triplay okoume para muebles en Lima"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/triplay/Okoume4.jpg"
            alt="Detalle de la cara y el canto del triplay okoume"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-700">
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            ¿Qué es el triplay okoume?
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            El <strong>triplay okoume</strong> es un contrachapado cuyas caras son de madera
            <em> okoume (Aucoumea klaineana)</em>, especie de África ecuatorial (Gabón, Guinea
            Ecuatorial y Congo). Se valora por su <strong>bajo peso, buena estabilidad y superficie
            lisa de color rosado claro</strong>, que acepta muy bien barniz, tinte y pintura. Por eso
            es uno de los triplays preferidos para <strong>muebles y carpintería fina</strong>. Existen
            versiones de uso interior (encolado con urea) y de mayor resistencia a la humedad
            (encolado fenólico).
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Características */}
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Características del triplay okoume
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Color:</strong> rosado pálido a marrón claro.</li>
              <li><strong>Veta y textura:</strong> veta recta, textura fina a media.</li>
              <li><strong>Peso:</strong> liviano frente a otras maderas tropicales.</li>
              <li><strong>Trabajabilidad:</strong> fácil de cortar, lijar y curvar.</li>
              <li><strong>Acabado:</strong> excelente para barniz, tinte, laca o pintura.</li>
              <li><strong>Durabilidad natural:</strong> baja; requiere sellado o pintura.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              Usos del triplay okoume
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Muebles:</strong> closets, cocinas, frentes y laterales.</li>
              <li><strong>Carpintería fina:</strong> puertas contraplacadas y revestimientos.</li>
              <li><strong>Diseño:</strong> piezas curvadas, paneles decorativos.</li>
              <li><strong>Eventos:</strong> stands, exhibidores y escenografía.</li>
              <li><strong>Náutica:</strong> solo en versión grado marino (consultar).</li>
            </ul>
          </div>
        </div>

        {/* Tabla técnica */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            Ficha técnica del triplay okoume
          </h2>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Característica</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Detalle</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Especie de las caras", "Okoume (Aucoumea klaineana)"],
                ["Densidad de la madera okoume", "≈ 430 – 450 kg/m³ (al 12 % de humedad)"],
                ["Dureza Janka de la madera", "≈ 1,780 N (400 lbf)"],
                ["Medida estándar", "1.22 × 2.44 m (4' × 8')"],
                ["Espesores comerciales", "4, 6, 9, 12, 15 y 18 mm (consultar disponibilidad)"],
                ["Encolado", "Urea-formaldehído (interior) o fenólico (mayor resistencia a la humedad)"],
                ["Contenido de humedad", "8 – 12 %"],
                ["Durabilidad natural", "Baja – requiere protección"],
                ["Trabajabilidad", "Excelente"],
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  {row.map((cell, i) => (
                    <td key={i} className="border border-gray-300 px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            * La densidad y resistencia del tablero dependen del alma (chapas interiores) y del
            fabricante. Para uso náutico se requiere certificación BS 1088; consúltanos disponibilidad.
          </p>
        </div>

      </div>
    </div>
  );
}