import { Seo } from "../../components/common/Seo";
import { BloqueCotizar } from "../../components/common/BloqueCotizar";

export default function Postes() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <Seo path="/productos/postes" />

      <div className="max-w-6xl mx-auto space-y-10">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
            Postes de Madera en Lima
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Postes de madera tratada para electrificación, telecomunicaciones, cercos y obras.
            Diversas longitudes y diámetros, con envíos a todo el Perú.
          </p>
        </div>

        {/* Bloque de cotización */}
        <BloqueCotizar producto="postes de madera" />

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/postes/Postes.jpg"
            alt="Postes de madera tratada para electrificación"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/postes/Postes1.jpg"
            alt="Detalle de poste de madera tratado con preservante"
            loading="lazy"
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:object-contain hover:bg-black"
          />
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-700">
          <h2 className="text-2xl font-semibold text-amber-800 mb-3">
            ¿Qué es un poste de madera?
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            Los <strong>postes de madera</strong> son elementos de sección cilíndrica que soportan
            cargas verticales y laterales en <strong>redes eléctricas, telecomunicaciones, cercos,
            señalización y obras civiles</strong>. Se fabrican con troncos seleccionados, pelados y
            secados, que luego se <strong>impregnan con preservantes en autoclave</strong> para
            resistir la humedad, los hongos y los insectos.
          </p>
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">
              Características de los postes
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Maderas:</strong> eucalipto, pino tratado, shihuahuaco o algarrobo.</li>
              <li><strong>Resistencia:</strong> soportan cargas verticales, tensión de cables y viento.</li>
              <li><strong>Tratamiento:</strong> preservante aplicado en autoclave.</li>
              <li><strong>Forma:</strong> cilíndrica, más gruesa en la base que en la punta.</li>
              <li><strong>Vida útil:</strong> 15 a 30 años según especie y tratamiento.</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              Usos de los postes de madera
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Electricidad:</strong> redes de distribución de media y baja tensión.</li>
              <li><strong>Telecomunicaciones:</strong> tendido de cables y fibra óptica.</li>
              <li><strong>Agro y ganadería:</strong> cercos, corrales y espalderas.</li>
              <li><strong>Vías y alumbrado:</strong> señalización y alumbrado rural.</li>
              <li><strong>Construcción y minería:</strong> estructuras y soportes temporales.</li>
            </ul>
          </div>
        </div>

        {/* Ventajas y Limitaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Ventajas del poste de madera
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Material renovable y de bajo costo inicial.</li>
              <li>Más liviano: fácil de transportar e instalar en zonas de difícil acceso.</li>
              <li>Buen comportamiento ante viento y tensión de cables.</li>
              <li>Larga vida útil con el tratamiento adecuado.</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-red-800 mb-4">
              Consideraciones
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Vida útil menor que la del concreto o el acero.</li>
              <li>Sin tratamiento, se deteriora por hongos e insectos.</li>
              <li>Las medidas varían ligeramente por ser un producto natural.</li>
            </ul>
          </div>
        </div>

        {/* Tabla técnica */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-amber-800 mb-4">
            Ficha técnica de los postes de madera
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
                ["Tipo de madera", "Eucalipto, pino tratado, shihuahuaco, algarrobo", "–", "Según uso y disponibilidad"],
                ["Longitud", "6 – 12", "m", "Otras longitudes a pedido"],
                ["Diámetro en la base", "20 – 35", "cm", "Según longitud y clase"],
                ["Diámetro en la punta", "12 – 20", "cm", "Según longitud y clase"],
                ["Peso aproximado", "80 – 250", "kg", "Según especie, medida y humedad"],
                ["Tratamiento", "Preservante en autoclave", "–", "Según especificación del cliente"],
                ["Vida útil", "15 – 30", "años", "Según especie y tratamiento"],
                ["Empotramiento", "≈ 10 % de la longitud + 0.60", "m", "Regla práctica; verificar con el diseño"],
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
            * Para redes eléctricas, el poste debe cumplir la especificación técnica del proyecto o
            de la concesionaria. Envíanos tus requerimientos y te asesoramos.
          </p>
        </div>

      </div>
    </div>
  );
}