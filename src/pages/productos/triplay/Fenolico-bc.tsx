import { Seo } from "../../../components/common/Seo";
import { BloqueCotizar } from "../../../components/common/BloqueCotizar";

const pasos = [
  {
    titulo: "Selección y desenrollo de troncos",
    detalle: "Obtención de chapas delgadas (1 – 3 mm) mediante torno desenrollador.",
  },
  {
    titulo: "Secado de chapas",
    detalle: "Secado controlado hasta la humedad óptima para evitar deformaciones y fallas de encolado.",
  },
  {
    titulo: "Aplicación de resina fenólica WBP",
    detalle: "Aplicación homogénea de resina fenol-formaldehído (Weather & Boil Proof) sobre cada chapa.",
  },
  {
    titulo: "Armado y prensado en caliente",
    detalle: "Las chapas se colocan con la fibra cruzada y se prensan con calor (aprox. 120 – 150 °C) para curar la resina y lograr una unión permanente.",
  },
  {
    titulo: "Escuadrado, lijado y clasificación",
    detalle: "Se cortan los bordes a medida, se lija y se clasifica según la calidad de sus caras (B/C).",
  },
];

export default function Fenolico() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <Seo path="/productos/triplay/fenolico-bc" />

      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
            Triplay Fenólico B/C en Lima
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tablero contrachapado encolado con resina fenólica WBP, resistente a la humedad,
            ideal para encofrados, construcción, embalaje y usos exteriores. Cortes a medida
            y envíos a todo el Perú.
          </p>
        </div>

        {/* Bloque de cotización */}
        <BloqueCotizar producto="triplay fenólico B/C" />

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/triplay/Fenolico.jpg"
            alt="Planchas de triplay fenólico B/C para encofrado en Lima"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/triplay/FenolicoDobleFilm1.jpg"
            alt="Detalle del canto y las chapas de un triplay fenólico"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-700">
          <h2 className="text-2xl font-semibold text-amber-800 mb-3">
            ¿Qué es el triplay fenólico?
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            El <strong>triplay fenólico</strong> es un tablero contrachapado formado por chapas
            delgadas de madera unidas con <strong>resina fenólica WBP</strong> (Weather and Boil
            Proof). Esta resina de fenol-formaldehído, al curarse con calor y presión, forma una
            unión que <strong>no se despega con el agua ni con la intemperie</strong>, a diferencia
            del triplay común encolado con urea. La clasificación <strong>B/C</strong> indica una cara
            de mejor presentación (B) y otra de calidad rústica (C).
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Características */}
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">
              Características del triplay fenólico B/C
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Adhesivo:</strong> resina fenólica <strong>WBP</strong> (Weather &amp; Boil Proof).</li>
              <li><strong>Formato estándar:</strong> 1.22 × 2.44 m (4' × 8').</li>
              <li><strong>Espesores:</strong> 9, 12, 15 y 18 mm (consultar otros).</li>
              <li><strong>Calidad de caras:</strong> B/C – una cara buena y una rústica.</li>
              <li><strong>Estabilidad dimensional:</strong> muy buena gracias a las chapas cruzadas.</li>
              <li><strong>Resistencia a la humedad:</strong> alta en el encolado; los cantos conviene sellarlos.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              Usos del triplay fenólico
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Construcción:</strong> encofrados de losas, vigas, columnas y muros.</li>
              <li><strong>Obras:</strong> cercos, casetas, pisos y plataformas provisionales.</li>
              <li><strong>Transporte y embalaje:</strong> cajas de exportación, pisos y forros de camiones y contenedores.</li>
              <li><strong>Carpintería:</strong> mobiliario industrial y módulos en zonas húmedas.</li>
            </ul>
          </div>
        </div>

        {/* Proceso de fabricación */}
        <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6">
          <h2 className="text-3xl font-extrabold text-center text-amber-800 mb-6">
            Proceso de fabricación del triplay fenólico
          </h2>

          <ol className="space-y-6">
            {pasos.map((p, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-200 text-amber-900 font-bold shadow-sm">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-amber-800 mb-1">{p.titulo}</h3>
                  <p className="text-gray-700 leading-relaxed">{p.detalle}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-lg text-sm text-gray-700">
            <strong>Nota:</strong> si necesitas más reusos en encofrado o un acabado liso para
            concreto caravista, te recomendamos el{" "}
            <a href="/productos/triplay/fenolico-doble-film" className="text-amber-800 underline font-semibold">
              triplay fenólico doble film
            </a>
            , que lleva una lámina fenólica en ambas caras.
          </div>
        </div>

        {/* Ventajas */}
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Ventajas del triplay fenólico
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>El encolado fenólico no se despega con agua, lluvia ni vapor.</li>
            <li>Mayor vida útil en obra que el triplay común.</li>
            <li>Buena rigidez para soportar la presión del concreto en encofrados.</li>
            <li>Formato estándar fácil de cortar, clavar y reutilizar.</li>
            <li>Costo competitivo frente a la madera maciza en aplicaciones similares.</li>
          </ul>
        </div>

        {/* Tabla técnica */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-amber-800 mb-4">
            Ficha técnica del triplay fenólico B/C
          </h2>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-amber-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Característica</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Detalle</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tipo de tablero", "Contrachapado de chapas cruzadas"],
                ["Adhesivo", "Resina fenólica WBP (fenol-formaldehído)"],
                ["Medida estándar", "1.22 × 2.44 m (4' × 8')"],
                ["Espesores comerciales", "9, 12, 15 y 18 mm (consultar disponibilidad)"],
                ["Calidad de caras", "B/C"],
                ["Contenido de humedad", "8 – 12 %"],
                ["Resistencia del encolado al agua", "Alta (apto para exterior)"],
                ["Estabilidad dimensional", "Muy buena"],
                ["Uso principal", "Encofrado, construcción y embalaje"],
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
            * La densidad y las propiedades mecánicas dependen de la especie de madera y del
            fabricante. Solicítanos la ficha técnica del lote disponible.
          </p>
        </div>

      </div>
    </div>
  );
}