import { Seo } from "../../../components/common/Seo";
import { BloqueCotizar } from "../../../components/common/BloqueCotizar";

export default function Bintangor() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <Seo path="/productos/triplay/bintangor" />

      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-4">
            Triplay Bintangor en Lima
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tablero de cara rojiza y acabado liso, ideal para muebles, puertas, revestimientos
            y decoración interior. Cortes a medida y envíos a todo el Perú.
          </p>
        </div>

        {/* Bloque de cotización */}
        <BloqueCotizar producto="triplay bintangor" />

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/triplay/Bintangor.jpg"
            alt="Planchas de triplay bintangor de cara rojiza en Lima"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/triplay/Bintangor1.jpg"
            alt="Detalle de la veta y el canto del triplay bintangor"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-700">
          <h2 className="text-2xl font-semibold text-red-800 mb-3">
            ¿Qué es el triplay bintangor?
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            El <strong>triplay bintangor</strong> es un contrachapado cuyas caras exteriores son de
            madera <em>bintangor</em> (especies del género <em>Calophyllum</em>), originaria del
            Sudeste Asiático. Su <strong>tono rojizo, veta natural y superficie lisa</strong> le dan
            una apariencia atractiva que acepta muy bien barniz, tinte o pintura. Las chapas
            interiores suelen ser de otras especies, lo que permite ofrecer un tablero de buena
            presentación a un <strong>precio competitivo</strong>.
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Características */}
          <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-red-800 mb-4">
              Características del triplay bintangor
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Color:</strong> rojizo a marrón rojizo, con veta natural.</li>
              <li><strong>Superficie:</strong> lisa y uniforme; apta para barnizar o pintar.</li>
              <li><strong>Resistencia:</strong> buena para muebles y cargas moderadas.</li>
              <li><strong>Trabajabilidad:</strong> se corta, lija, perfora y atornilla con facilidad.</li>
              <li><strong>Encolado:</strong> MR (interior, resistente a humedad ambiental) o WBP fenólico (mayor resistencia al agua).</li>
              <li><strong>Precio:</strong> buena relación costo–presentación.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              Usos del triplay bintangor
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Muebles:</strong> closets, gabinetes, mesas y muebles de cocina.</li>
              <li><strong>Puertas</strong> contraplacadas y marcos.</li>
              <li><strong>Interiores:</strong> revestimientos, paneles y cielos rasos.</li>
              <li><strong>Comercial:</strong> stands, vitrinas y estanterías.</li>
              <li><strong>Embalaje:</strong> cajas de buena presentación.</li>
            </ul>
          </div>
        </div>

        {/* Ventajas y Consideraciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Ventajas del triplay bintangor
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Cara rojiza atractiva sin necesidad de enchape adicional.</li>
              <li>Versátil: muebles, puertas, decoración y embalaje.</li>
              <li>Fácil de trabajar y de dar acabado.</li>
              <li>Excelente costo–beneficio frente a maderas macizas.</li>
            </ul>
          </div>
          <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-orange-800 mb-4">
              Consideraciones
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>No reemplaza al triplay fenólico en encofrados ni usos estructurales exigentes.</li>
              <li>Para zonas húmedas, elegir encolado WBP y sellar los cantos.</li>
              <li>No apto para intemperie sin protección.</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 text-center">
          ¿Buscas un tablero más claro y liviano para muebles? Revisa el{" "}
          <a href="/productos/triplay/okoume" className="text-red-800 underline font-semibold">
            triplay okoume
          </a>
          . Para encofrado, el{" "}
          <a href="/productos/triplay/fenolico-bc" className="text-red-800 underline font-semibold">
            triplay fenólico
          </a>
          .
        </p>

        {/* Tabla técnica */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            Ficha técnica del triplay bintangor
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
                ["Especie de las caras", "Bintangor (Calophyllum spp.)"],
                ["Medida estándar", "1.22 × 2.44 m (4' × 8')"],
                ["Espesores comerciales", "3, 4, 6, 9, 12, 15 y 18 mm (consultar disponibilidad)"],
                ["Encolado", "MR (urea-formaldehído) o WBP (fenólico)"],
                ["Contenido de humedad", "8 – 14 %"],
                ["Durabilidad natural", "Moderada – requiere protección en exterior"],
                ["Resistencia a la humedad", "Media (MR) / alta en el encolado (WBP)"],
                ["Trabajabilidad", "Muy buena"],
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
            * La densidad y las propiedades mecánicas dependen del alma del tablero y del
            fabricante. Solicítanos la ficha técnica del lote disponible.
          </p>
        </div>

      </div>
    </div>
  );
}