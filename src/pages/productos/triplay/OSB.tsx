import { Seo } from "../../../components/common/Seo";
import { BloqueCotizar } from "../../../components/common/BloqueCotizar";

export default function TableroOSB() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <Seo path="/productos/triplay/osb" />

      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
            Tablero OSB en Lima
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tablero estructural de virutas orientadas para techos, pisos, tabiques, cercos y
            embalaje. Económico y resistente. Cortes a medida y envíos a todo el Perú.
          </p>
        </div>

        {/* Bloque de cotización */}
        <BloqueCotizar producto="tableros OSB" />

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/triplay/Osb1.jpg"
            alt="Planchas de tablero OSB para construcción en Lima"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/triplay/Osb.jpg"
            alt="Detalle de las virutas orientadas del tablero OSB"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-700">
          <h2 className="text-2xl font-semibold text-amber-800 mb-3">
            ¿Qué es el tablero OSB?
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            El <strong>OSB</strong> (Oriented Strand Board o tablero de virutas orientadas) se
            fabrica con <strong>virutas largas y delgadas de madera</strong> de especies de rápido
            crecimiento, como pino, álamo o eucalipto, unidas con resinas resistentes a la humedad
            y prensadas en caliente. Las virutas de las <strong>capas exteriores van orientadas a lo
            largo del tablero</strong> y las de la capa interior en sentido transversal, lo que le da
            una resistencia parecida a la del triplay a un <strong>menor costo</strong>. Su
            superficie es rugosa, por lo que se usa más como tablero técnico que decorativo.
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Características */}
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">
              Características del OSB
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Estructura:</strong> 3 capas de virutas orientadas y cruzadas.</li>
              <li><strong>Resistencia:</strong> buena en el sentido largo del tablero.</li>
              <li><strong>Estabilidad:</strong> dimensional, gracias a las capas cruzadas.</li>
              <li><strong>Superficie:</strong> rugosa, sin vetas decorativas.</li>
              <li><strong>Adhesivos:</strong> resinas fenólicas o MDI resistentes a la humedad.</li>
              <li><strong>Clasificación:</strong> OSB/2 (interior) y OSB/3 (estructural en ambiente húmedo) según norma EN 300.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              Usos del tablero OSB
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Construcción:</strong> bases de techo, entrepisos, tabiques y muros en sistemas de entramado.</li>
              <li><strong>Obras:</strong> cercos perimétricos, casetas y almacenes temporales.</li>
              <li><strong>Embalaje:</strong> cajas, jabas y bases de pallets.</li>
              <li><strong>Carpintería y decoración:</strong> repisas, estanterías y paneles de estilo industrial.</li>
            </ul>
          </div>
        </div>

        {/* Ventajas y Limitaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Ventajas del OSB
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Más económico que el triplay en aplicaciones similares.</li>
              <li>Resistencia uniforme, sin nudos ni defectos de chapa.</li>
              <li>Buena resistencia a impactos.</li>
              <li>Fácil de cortar, clavar y atornillar.</li>
              <li>Sustentable: usa madera de plantaciones de rápido crecimiento.</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-red-800 mb-4">
              Limitaciones del OSB
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Los bordes se hinchan con la humedad si no se sellan.</li>
              <li>No debe quedar expuesto a la lluvia de forma permanente.</li>
              <li>Menos reusos en encofrado que el fenólico.</li>
              <li>Superficie poco estética si no se recubre.</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 text-center">
          ¿Lo necesitas para encofrado con muchos reusos? Te conviene el{" "}
          <a href="/productos/triplay/fenolico-doble-film" className="text-amber-800 underline font-semibold">
            triplay fenólico doble film
          </a>
          . Para muebles con acabado liso, revisa el{" "}
          <a href="/productos/triplay/mdf" className="text-amber-800 underline font-semibold">
            tablero MDF
          </a>
          .
        </p>

        {/* Tabla técnica */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-amber-800 mb-4">
            Ficha técnica del tablero OSB
          </h2>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-amber-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Propiedad</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Valor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Unidad</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Observaciones</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Densidad", "600 – 680", "kg/m³", "Según fabricante"],
                ["Contenido de humedad", "2 – 12", "%", "Al salir de fábrica"],
                ["MOE – eje mayor", "≈ 3,500", "MPa", "Sentido largo del tablero (OSB/3)"],
                ["MOE – eje menor", "≈ 1,400", "MPa", "Sentido transversal (OSB/3)"],
                ["MOR – eje mayor", "18 – 22", "MPa", "Según espesor (OSB/3)"],
                ["MOR – eje menor", "9 – 11", "MPa", "Según espesor (OSB/3)"],
                ["Conductividad térmica", "0.13", "W/m·K", "Aislamiento térmico moderado"],
                ["Espesores comerciales", "9, 12, 15 y 18 (aprox.)", "mm", "Según fabricante"],
                ["Dimensiones", "1.22 × 2.44", "m", "Formato estándar"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  {row.map((cell, j) => (
                    <td key={j} className="border border-gray-300 px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            * Valores mínimos de referencia de la norma EN 300 para OSB/3. Solicítanos la ficha
            técnica del lote disponible.
          </p>
        </div>

      </div>
    </div>
  );
}