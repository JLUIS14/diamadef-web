import { Seo } from "../../components/common/Seo";
import { BloqueCotizar } from "../../components/common/BloqueCotizar";

const fila = (row: string[], i: number) => (
  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
    {row.map((cell, j) => (
      <td key={j} className="border border-gray-300 px-4 py-2">{cell}</td>
    ))}
  </tr>
);

export default function Parihuelas() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <Seo path="/productos/parihuelas" />

      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
            Parihuelas y Pallets de Madera en Lima
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Fabricamos parihuelas de 2 y 4 entradas en medidas estándar o a pedido, con
            tratamiento térmico NIMF 15 para exportación. Envíos a todo el Perú.
          </p>
        </div>

        {/* Bloque de cotización */}
        <BloqueCotizar producto="parihuelas de madera" />

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/parihuelas/Parihuela1.jpg"
            alt="Parihuelas de madera apiladas en Lima"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/parihuelas/Parihuela.jpg"
            alt="Pallet de madera de 4 entradas con tacos"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-700">
          <h2 className="text-2xl font-semibold text-amber-800 mb-3">
            ¿Qué es una parihuela o pallet?
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            Una <strong>parihuela o pallet</strong> es una plataforma rígida que sirve para apilar,
            almacenar y transportar mercadería con <strong>montacargas o transpaletas</strong>. La de
            madera es la más usada por su <strong>bajo costo, resistencia y facilidad de reparación</strong>.
            Para exportar, la madera debe llevar <strong>tratamiento térmico (HT) según la norma NIMF 15
            (ISPM 15)</strong> y su sello correspondiente, que evita el traslado de plagas entre países.
          </p>
        </div>

        {/* Tipos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">
              Parihuela de 2 entradas
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Construida con largueros (tipo stringer).</li>
              <li>El montacargas ingresa solo por dos lados.</li>
              <li>Más liviana y económica.</li>
              <li>Ideal para almacén y transporte nacional.</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">
              Parihuela de 4 entradas
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Construida con 9 tacos (tipo block).</li>
              <li>Ingreso de montacargas por los cuatro lados.</li>
              <li>Mayor capacidad y estabilidad.</li>
              <li>Recomendada para exportación y almacenes con racks.</li>
            </ul>
          </div>
        </div>

        {/* Usos */}
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
            Usos de las parihuelas de madera
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Almacenamiento y despacho en almacenes, fábricas y centros de distribución.</li>
            <li>Exportación de productos con tratamiento térmico NIMF 15.</li>
            <li>Agroindustria, alimentos, minería, construcción e industria en general.</li>
          </ul>
        </div>

        {/* Ventajas y Limitaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Ventajas de la parihuela de madera
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Más económica que la de plástico o metal.</li>
              <li>Fácil de reparar y reutilizar.</li>
              <li>Se fabrica a la medida de tu producto.</li>
              <li>Material renovable, biodegradable y reciclable.</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-red-800 mb-4">
              Consideraciones
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Para exportar requiere tratamiento térmico y sello NIMF 15.</li>
              <li>Debe protegerse de la humedad prolongada.</li>
              <li>Pesa más que una parihuela de plástico.</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 text-center">
          ¿Vas a exportar? Conoce nuestro servicio de{" "}
          <a href="/servicios/termico" className="text-amber-800 underline font-semibold">
            tratamiento térmico de madera
          </a>
          .
        </p>

        {/* Tablas técnicas */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6 space-y-10">
          <div>
            <h2 className="text-3xl font-semibold text-amber-800 mb-4">
              Ficha técnica – parihuela de 2 entradas
            </h2>
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-amber-600 text-white">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Parámetro</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Valor</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Unidad</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Comentarios</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Tipo", "Con largueros (stringer)", "–", "Acceso por dos lados"],
                  ["Medidas más usadas", "1200 × 1000 / 1200 × 800", "mm", "También a medida"],
                  ["Altura total", "130 – 150", "mm", "Según diseño"],
                  ["Peso aproximado", "14 – 22", "kg", "Según madera y humedad"],
                  ["Nº de largueros", "3", "unid.", "Dan rigidez a la base"],
                  ["Capacidad estática", "800 – 3,000", "kg", "Apilado en piso, referencial"],
                  ["Capacidad dinámica", "600 – 1,200", "kg", "En movimiento, referencial"],
                  ["Tratamiento para exportación", "HT – NIMF 15", "–", "Opcional"],
                ].map(fila)}
              </tbody>
            </table>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-amber-800 mb-4">
              Ficha técnica – parihuela de 4 entradas
            </h2>
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-amber-600 text-white">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Parámetro</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Valor</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Unidad</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Comentarios</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Tipo", "Con tacos (block)", "–", "Acceso por cuatro lados"],
                  ["Medidas más usadas", "1200 × 1000 / 1200 × 800", "mm", "También a medida"],
                  ["Altura total", "140 – 160", "mm", "Según diseño"],
                  ["Peso aproximado", "15 – 25", "kg", "Según madera y humedad"],
                  ["Material", "Pino o eucalipto", "–", "Madera seleccionada"],
                  ["Nº de tacos", "9", "unid.", "3 filas de 3 tacos"],
                  ["Capacidad estática", "1,000 – 4,000", "kg", "Apilado en piso, referencial"],
                  ["Capacidad dinámica", "800 – 1,500", "kg", "Con montacargas, referencial"],
                  ["Capacidad en rack", "500 – 1,000", "kg", "Según refuerzo"],
                  ["Tratamiento para exportación", "HT – NIMF 15", "–", "Opcional"],
                ].map(fila)}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500">
            * Las capacidades son referenciales y dependen del diseño, la madera y el tipo de
            carga. Indícanos el peso de tu mercadería y te recomendamos el modelo adecuado.
          </p>
        </div>

      </div>
    </div>
  );
}