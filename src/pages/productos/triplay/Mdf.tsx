import { Seo } from "../../../components/common/Seo";
import { BloqueCotizar } from "../../../components/common/BloqueCotizar";

export default function TableroMDF() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <Seo path="/productos/triplay/mdf" />

      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
            Tablero MDF en Lima
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tablero de fibra de densidad media con superficie lisa, ideal para muebles,
            puertas, molduras y acabados con pintura o laca. Cortes a medida y envíos a
            todo el Perú.
          </p>
        </div>

        {/* Bloque de cotización */}
        <BloqueCotizar producto="tableros MDF" />

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/triplay/Mdf.jpg"
            alt="Planchas de tablero MDF crudo para muebles en Lima"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/triplay/Mdf1.jpg"
            alt="Detalle de la superficie lisa y el canto de un tablero MDF"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-700">
          <h2 className="text-2xl font-semibold text-amber-800 mb-3">
            ¿Qué es el tablero MDF?
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            El <strong>MDF</strong> (Medium Density Fiberboard o tablero de fibra de densidad
            media) se fabrica con <strong>fibras de madera unidas con resinas sintéticas</strong> y
            prensadas en caliente. El resultado es un tablero homogéneo, sin vetas ni nudos, más
            denso que el aglomerado y con una <strong>superficie totalmente lisa</strong>, perfecta
            para pintura, laca o recubrimientos decorativos. Se vende <strong>crudo</strong> o
            recubierto con melamina, chapa natural o PVC, y es muy usado en muebles, puertas,
            decoración interior y carpintería.
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Características */}
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">
              Características del MDF
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Densidad:</strong> 600 – 800 kg/m³ según espesor y fabricante.</li>
              <li><strong>Superficie:</strong> lisa y uniforme, ideal para acabados.</li>
              <li><strong>Mecanizado:</strong> fácil de cortar, fresar, perforar y moldurar.</li>
              <li><strong>Espesores:</strong> más comunes 9, 15, 18 y 25 mm (consultar otros).</li>
              <li><strong>Versiones:</strong> estándar, RH (resistente a la humedad) e ignífugo.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              Usos del tablero MDF
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Muebles: closets, repisas, cocinas y escritorios.</li>
              <li>Puertas lisas, contraplacadas o enchapadas.</li>
              <li>Decoración: molduras, zócalos y paneles.</li>
              <li>Revestimientos interiores de paredes y techos.</li>
              <li>Exhibidores, stands y mobiliario comercial.</li>
              <li>Base para laminados, melamina o chapas.</li>
            </ul>
          </div>
        </div>

        {/* Ventajas y Desventajas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Ventajas del MDF
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Superficie lisa, ideal para pintar o recubrir.</li>
              <li>Sin vetas ni nudos: acabado uniforme.</li>
              <li>Permite cortes, fresados y moldurados precisos.</li>
              <li>Más económico que la madera maciza.</li>
              <li>Versiones especiales resistentes a humedad y fuego.</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-red-800 mb-4">
              Limitaciones del MDF
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>No apto para exterior ni contacto con agua.</li>
              <li>Se hincha con la humedad si no está sellado (el MDF RH resiste mejor).</li>
              <li>Menor resistencia estructural y al clavado que el triplay u OSB.</li>
              <li>Más pesado que el aglomerado.</li>
              <li>Emisión de formaldehído según la clase (preferir E1 o E0).</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 text-center">
          ¿Necesitas un tablero estructural para construcción? Revisa el{" "}
          <a href="/productos/triplay/osb" className="text-amber-800 underline font-semibold">
            tablero OSB
          </a>{" "}
          o el{" "}
          <a href="/productos/triplay/fenolico-bc" className="text-amber-800 underline font-semibold">
            triplay fenólico
          </a>
          .
        </p>

        {/* Tabla técnica */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-amber-800 mb-4">
            Ficha técnica del tablero MDF
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
                ["Densidad", "600 – 800", "kg/m³", "Según espesor y fabricante"],
                ["Módulo de elasticidad (MOE)", "2,500 – 3,500", "N/mm²", "Rigidez a la flexión"],
                ["Resistencia a la flexión (MOR)", "20 – 40", "N/mm²", "Flexión estática"],
                ["Tracción perpendicular (cohesión interna)", "0.55 – 0.90", "N/mm²", "Según calidad del tablero"],
                ["Contenido de humedad", "4 – 11", "%", "Al salir de fábrica"],
                ["Espesores comerciales", "9, 15, 18, 25", "mm", "Otros espesores a pedido"],
                ["Dimensiones", "1220 × 2440 / 1830 × 2440", "mm", "Según fabricante"],
                ["Clase de emisión de formaldehído", "E0 / E1", "—", "Recomendadas para interiores"],
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
            * Valores de referencia para MDF estándar (1 N/mm² = 1 MPa). Solicítanos la ficha
            técnica del lote disponible.
          </p>
        </div>

      </div>
    </div>
  );
}