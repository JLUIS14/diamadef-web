import { Seo } from "../../../components/common/Seo";
import { BloqueCotizar } from "../../../components/common/BloqueCotizar";

export default function Lupuna() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <Seo path="/productos/triplay/lupuna" />

      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-4">
            Triplay Lupuna en Lima
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tablero contrachapado liviano y económico, ideal para encofrados, carpintería
            ligera, embalajes y divisiones interiores. Cortes a medida y envíos a todo el Perú.
          </p>
        </div>

        {/* Bloque de cotización */}
        <BloqueCotizar producto="triplay lupuna" />

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/triplay/Lupuna.jpg"
            alt="Planchas de triplay lupuna apiladas para venta en Lima"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/triplay/Lupuna1.jpg"
            alt="Detalle del canto y las chapas del triplay lupuna"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-700">
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            ¿Qué es el triplay lupuna?
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            El <strong>triplay lupuna</strong> es un tablero contrachapado fabricado con chapas
            de madera <em>lupuna (Ceiba pentandra)</em>, especie de la Amazonía peruana muy
            liviana, abundante y de rápido crecimiento. Las chapas se pegan con la fibra cruzada,
            lo que le da al tablero <strong>estabilidad dimensional y buena rigidez</strong> con
            un peso bajo. Es uno de los triplays más usados y económicos del Perú, tanto en obra
            (encofrados) como en carpintería y embalaje.
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Características */}
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Características del triplay lupuna
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Color:</strong> blanco amarillento a crema claro.</li>
              <li><strong>Textura:</strong> media, uniforme, de brillo bajo.</li>
              <li><strong>Peso:</strong> liviano, fácil de transportar y manipular.</li>
              <li><strong>Trabajabilidad:</strong> excelente; se corta, clava, atornilla y pega sin dificultad.</li>
              <li><strong>Durabilidad natural:</strong> baja; requiere protección o tratamiento frente a humedad, hongos e insectos.</li>
              <li><strong>Precio:</strong> económico, con alta disponibilidad en el mercado.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              Usos del triplay lupuna
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Encofrados para losas, vigas y columnas de concreto.</li>
              <li>Cielos rasos, tabiques y divisiones interiores.</li>
              <li>Muebles, closets y carpintería ligera.</li>
              <li>Embalajes, cajas y jabas para transporte.</li>
              <li>Base para enchapes, melamina o laminados.</li>
              <li>Puertas contraplacadas y revestimientos.</li>
            </ul>
          </div>
        </div>

        {/* Tabla técnica */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            Ficha técnica del triplay lupuna
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
                ["Especie", "Lupuna (Ceiba pentandra)"],
                ["Tipo de tablero", "Contrachapado de chapas cruzadas"],
                ["Medida estándar", "1.22 x 2.44 m (4' x 8')"],
                ["Espesores comerciales", "4, 6, 9, 12, 15 y 18 mm (consultar disponibilidad)"],
                ["Encolado", "Urea-formaldehído (uso interior) o fenólico (mayor resistencia a la humedad)"],
                ["Contenido de humedad", "8 – 12 %"],
                ["Peso relativo", "Liviano"],
                ["Durabilidad natural", "Baja – requiere protección"],
                ["Resistencia a la humedad", "Baja a media según el tipo de encolado"],
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
            * Las propiedades mecánicas varían según el fabricante, el número de chapas y el
            encolado. Solicítanos la ficha técnica del lote disponible.
          </p>
        </div>

      </div>
    </div>
  );
}