import { Seo } from "../../../components/common/Seo";
import { BloqueCotizar } from "../../../components/common/BloqueCotizar";

export default function FenolicoDobleFilm() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <Seo path="/productos/triplay/fenolico-doble-film" />

      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
            Triplay Fenólico Doble Film en Lima
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tablero para encofrado reutilizable con película fenólica en ambas caras:
            impermeable, resistente al desgaste y de varios usos en obra. Cortes a medida
            y envíos a todo el Perú.
          </p>
        </div>

        {/* Bloque de cotización */}
        <BloqueCotizar producto="triplay fenólico doble film" />

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/triplay/FenolicoDobleFilm.jpg"
            alt="Planchas de triplay fenólico doble film marrón para encofrado en Lima"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/triplay/FenolicoDobleFilm2.jpg"
            alt="Detalle de la superficie con film fenólico del triplay doble film"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-700">
          <h2 className="text-2xl font-semibold text-amber-800 mb-3">
            ¿Qué es el triplay fenólico doble film?
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            El <strong>triplay fenólico doble film</strong> es un tablero contrachapado con
            <strong> núcleo de álamo</strong> y <strong>chapas externas de eucalipto</strong>,
            encolado con adhesivo fenólico <strong>WBP</strong> y prensado a alta presión y
            temperatura. Ambas caras llevan una <strong>película fenólica marrón de 180 g/m²</strong>
            que lo hace impermeable y resistente a la abrasión. El núcleo de álamo le da un peso
            moderado y buena estabilidad, y las caras de eucalipto aportan resistencia. Es el
            tablero preferido para <strong>encofrados reutilizables</strong>, con una vida útil
            estimada de <strong>8 a 15 usos</strong> según el cuidado en obra.
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Características */}
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">
              Características del fenólico doble film
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Núcleo:</strong> álamo, liviano y estable.</li>
              <li><strong>Caras:</strong> eucalipto, de mayor densidad y resistencia.</li>
              <li><strong>Recubrimiento:</strong> film fenólico marrón de 180 g/m² en ambas caras.</li>
              <li><strong>Adhesivo:</strong> fenólico WBP, resistente al agua y a la ebullición.</li>
              <li><strong>Formato:</strong> 1.22 × 2.44 m en 12, 15, 17 y 18 mm.</li>
              <li><strong>Vida útil:</strong> 8 – 15 reutilizaciones en encofrado.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              Usos del fenólico doble film
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Encofrados:</strong> muros, losas, vigas y columnas de concreto.</li>
              <li><strong>Infraestructura:</strong> puentes, túneles, obras viales y mineras.</li>
              <li><strong>Transporte:</strong> pisos y forros de camiones, furgones y contenedores.</li>
              <li><strong>Industria:</strong> plataformas, tarimas y superficies de trabajo expuestas a humedad.</li>
            </ul>
          </div>
        </div>

        {/* Ventajas */}
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Ventajas frente al triplay común
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Más reusos en encofrado: menor costo por vaciado.</li>
            <li>El film evita que el concreto se adhiera y facilita el desencofrado.</li>
            <li>Superficie impermeable y resistente a la abrasión.</li>
            <li>Buena resistencia a flexión para soportar la presión del concreto.</li>
            <li>Resistente a agentes químicos moderados y a la intemperie.</li>
          </ul>
          <p className="text-sm text-gray-700 mt-4">
            ¿Buscas una opción más económica para pocos usos? Revisa el{" "}
            <a href="/productos/triplay/fenolico-bc" className="text-amber-800 underline font-semibold">
              triplay fenólico B/C
            </a>
            .
          </p>
        </div>

        {/* Tabla técnica */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-amber-800 mb-4">
            Ficha técnica del triplay fenólico doble film
          </h2>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-amber-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Descripción</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Valor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Unidad</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Observaciones</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Medida estándar", "1.22 × 2.44", "m", "Espesores: 12, 15, 17 y 18 mm"],
                ["Composición", "Álamo / eucalipto", "—", "Núcleo de álamo, caras de eucalipto"],
                ["Color de film", "Marrón", "—", "Película fenólica prensada en caliente"],
                ["Gramaje del film", "180", "g/m²", "En ambas caras"],
                ["Adhesivo", "WBP", "—", "Resistente al agua y a la ebullición"],
                ["Contenido de humedad", "8.2", "%", "Buena estabilidad dimensional"],
                ["Densidad", "530", "kg/m³", "Buena relación resistencia/peso"],
                ["Calidad de encolado", "0.60 – 1.15", "MPa", "Ensayo según norma EN 314"],
                ["MOE – longitudinal", "5,150", "MPa", "Rigidez en el sentido de la fibra"],
                ["MOE – transversal", "4,776", "MPa", "Rigidez en sentido perpendicular"],
                ["MOR – longitudinal", "51.05", "MPa", "Resistencia a flexión en el sentido de la fibra"],
                ["MOR – transversal", "41.08", "MPa", "Resistencia a flexión en sentido perpendicular"],
                ["Tolerancia de espesor", "± 0.5", "mm", "Control de calidad en fábrica"],
                ["Vida útil estimada", "8 – 15", "usos", "Depende del mantenimiento y condiciones de obra"],
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
            * Valores de referencia según ficha técnica del fabricante para el espesor de 18 mm.
          </p>
        </div>

      </div>
    </div>
  );
}