import { Seo } from "../../../components/common/Seo";
import { BloqueCotizar } from "../../../components/common/BloqueCotizar";

export default function Roble() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <Seo path="/productos/maderas/roble" />

      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Madera Roble en Lima
        </h1>

        {/* Imagen + Descripción */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <img
            src="/images/maderas/Roble.jpg"
            alt="Madera roble económica en tablas - venta en Lima Diamadef"
            className="w-full h-auto max-h-[220px] object-cover rounded-xl shadow-lg"
          />
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            En el Perú, se conoce comercialmente como <strong>madera roble</strong> a un
            grupo de maderas de la Amazonía peruana de <strong>baja densidad</strong>,
            livianas y suaves. Es una de las <strong>maderas más utilizadas</strong> del
            mercado, muy fácil de cortar, clavar y trabajar, lo que la hace ideal para
            trabajos de construcción, encofrados, embalajes y carpintería básica donde se
            busca buen rendimiento a bajo costo.
          </p>
        </div>

        {/* Bloque de venta */}
        <BloqueCotizar producto="madera roble" />

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Características */}
          <div className="bg-green-100 border-l-4 border-green-700 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              Características de la madera roble
            </h2>
            <ul className="list-disc list-inside text-gray-700">

              <li>Densidad: baja; madera liviana y fácil de transportar</li>
              <li>Dureza: suave, fácil de cortar, clavar y cepillar</li>
              <li>Color: tonos claros, de crema a marrón claro</li>
              <li>Durabilidad natural: baja; se recomienda tratamiento preventivo para uso prolongado o exterior</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              Usos de la madera roble
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Encofrados y obras de construcción</li>
              <li>Embalajes, cajonería y parihuelas</li>
              <li>Estructuras temporales y andamiaje ligero</li>
              <li>Carpintería básica y trabajos de obra</li>
              <li>Listones, tablas y cuartones de uso general</li>
            </ul>
          </div>

        </div>

        {/* Ficha general */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-4">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            Ficha general de la madera roble
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Al tratarse de un grupo comercial de varias especies, los valores son referenciales
            y pueden variar según el lote. Consúltenos por las características del material disponible.
          </p>
          <table className="min-w-full border border-gray-300">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Característica</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Valor referencial</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Observaciones</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tipo", "Grupo comercial de maderas amazónicas", "Varias especies de baja densidad"],
                ["Densidad", "Baja", "Madera liviana"],
                ["Dureza", "Baja (suave)", "Fácil de cortar, clavar y cepillar"],
                ["Trabajabilidad", "Muy buena", "Herramientas manuales y mecánicas"],
                ["Durabilidad natural", "Baja", "Se recomienda tratamiento preventivo"],
                ["Uso recomendado", "Interior, obra y embalaje", "No recomendada para uso estructural pesado"],
                ["Precio", "Económico", "Excelente relación costo-beneficio"]
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