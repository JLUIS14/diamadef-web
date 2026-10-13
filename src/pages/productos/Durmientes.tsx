import { Seo } from "../../components/common/Seo";
import { BloqueCotizar } from "../../components/common/BloqueCotizar";

export default function Durmientes() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <Seo path="/productos/durmientes" />

      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
            Durmientes de Madera en Lima
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Durmientes de madera dura y tratada para vías férreas, minería y obras civiles.
            Medidas estándar o a pedido, con envíos a todo el Perú.
          </p>
        </div>

        {/* Bloque de cotización */}
        <BloqueCotizar producto="durmientes de madera" />

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/durmientes/Durmientes.jpg"
            alt="Durmientes de madera para vía férrea y minería"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/durmientes/Durmientes1.jpg"
            alt="Detalle de durmiente de madera tratado con preservante"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-700">
          <h2 className="text-2xl font-semibold text-amber-800 mb-3">
            ¿Qué es un durmiente de madera?
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            Un <strong>durmiente</strong> es una pieza de madera alargada que se coloca de forma
            transversal bajo los rieles de una vía férrea. Su función es <strong>sostener y fijar
            los rieles, mantener el ancho de vía</strong> y repartir las cargas del tren hacia el
            balasto. Además de ferrocarriles, se usan en <strong>vías mineras</strong>, obras civiles,
            puentes y como apoyo en construcción. Se fabrican con <strong>maderas duras y densas</strong>,
            tratadas con preservantes para resistir humedad, hongos e insectos.
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">
              Características de los durmientes
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Maderas:</strong> eucalipto, shihuahuaco, algarrobo o pino impregnado.</li>
              <li><strong>Resistencia:</strong> soportan cargas dinámicas elevadas.</li>
              <li><strong>Amortiguación:</strong> absorben vibraciones y reducen el desgaste de la vía.</li>
              <li><strong>Tratamiento:</strong> impregnados con preservantes en autoclave.</li>
              <li><strong>Vida útil:</strong> 10 a 25 años según especie y tratamiento.</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              Usos de los durmientes de madera
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Ferrocarriles:</strong> base para fijar los rieles.</li>
              <li><strong>Minería:</strong> vías de carros mineros en interior y superficie.</li>
              <li><strong>Construcción:</strong> apoyos, cribbing y soportes temporales.</li>
              <li><strong>Obras civiles:</strong> pasarelas, defensas ribereñas y puentes.</li>
            </ul>
          </div>
        </div>

        {/* Ventajas y Limitaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Ventajas del durmiente de madera
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Buen comportamiento ante cargas dinámicas y vibraciones.</li>
              <li>Menor costo inicial que el concreto o el acero.</li>
              <li>Fácil de cortar, perforar e instalar en campo.</li>
              <li>Más liviano y fácil de transportar que el concreto.</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-red-800 mb-4">
              Consideraciones
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Vida útil menor que la del concreto o el acero.</li>
              <li>Requiere tratamiento preservante para mayor durabilidad.</li>
              <li>Necesita inspección y reemplazo periódico.</li>
            </ul>
          </div>
        </div>

        {/* Tabla técnica */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-amber-800 mb-4">
            Ficha técnica de los durmientes de madera
          </h2>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-amber-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Parámetro</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Valor / Rango</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Unidad</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Comentarios</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tipo de madera", "Eucalipto, shihuahuaco, algarrobo, pino impregnado", "–", "Maderas duras y resistentes"],
                ["Longitud", "2.40 – 2.70", "m", "Según trocha de la vía"],
                ["Ancho", "20 – 26", "cm", "Según carga de diseño"],
                ["Espesor", "12 – 16", "cm", "Según carga de diseño"],
                ["Peso aproximado", "60 – 110", "kg", "Según especie, medida y humedad"],
                ["Tratamiento", "Preservante en autoclave", "–", "Según especificación del cliente"],
                ["Vida útil", "10 – 25", "años", "Con tratamiento adecuado"],
                ["Fijación del riel", "Clavos, tirafondos, pernos o grapas", "–", "Según tipo de vía"],
                ["Medidas especiales", "A pedido", "–", "Para minería y obras"],
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
            * Fabricamos según las medidas y especificaciones de tu proyecto. Consúltanos por
            especie, tratamiento y plazos de entrega.
          </p>
        </div>

      </div>
    </div>
  );
}