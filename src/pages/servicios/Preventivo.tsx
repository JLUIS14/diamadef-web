export default function TratamientoPreventivo() {
  return (
    <div className="flex justify-center py-10 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          Tratamiento Preventivo de la Madera
        </h1>

        {/* Definición */}
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed text-justify">
            El tratamiento preventivo de la madera consiste en la aplicación de productos protectores
            (fungicidas, insecticidas, repelentes de humedad o combinaciones de ellos) para evitar el deterioro biológico, físico y químico de la madera.
            Su objetivo principal es alargar la vida útil de la madera, reduciendo el riesgo de ataque
            por hongos, insectos xilófagos (termitas, carcomas) y la degradación causada por humedad o agentes atmosféricos.
          </p>
        </section>

        {/* Características */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brown-700 mb-3">Características Generales</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Protección preventiva:</strong> Se aplica en maderas sanas, antes de que sufran daños.</li>
            <li><strong>Acción múltiple:</strong> Contra hongos de pudrición, mohos, termitas, larvas perforadoras y humedad.</li>
            <li><strong>Aplicación versátil:</strong> En fábrica, en obra o mediante autoclave.</li>
            <li><strong>Compatibilidad:</strong> Válido para maderas macizas, tableros (MDF, OSB, triplay) y laminados.</li>
            <li><strong>Durabilidad variable:</strong> Según producto y condiciones de exposición.</li>
            <li><strong>Requiere mantenimiento:</strong> Especialmente a la intemperie.</li>
          </ul>
        </section>

        {/* Usos */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brown-700 mb-3">Usos Principales</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <ul className="list-disc pl-6 space-y-2">
              <li>Construcción: vigas, columnas, techos y revestimientos.</li>
              <li>Infraestructura exterior: postes, durmientes, cercos.</li>
              <li>Mobiliario: muebles de interior y exterior.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>Embalajes y pallets (NIMF 15).</li>
              <li>Decoración: revestimientos interiores.</li>
              <li>Instalaciones agrícolas y ganaderas.</li>
            </ul>
          </div>
        </section>

        {/* Ventajas y Desventajas */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brown-700 mb-3">Ventajas y Desventajas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h3 className="text-lg font-bold text-green-700 mb-2"> Ventajas</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Prolonga la vida útil.</li>
                <li>Evita ataques de hongos e insectos.</li>
                <li>Protege contra humedad y deformaciones.</li>
                <li>Mejora estética y funcionalidad.</li>
                <li>Cumple normativas fitosanitarias.</li>
                <li>Reduce costos de mantenimiento.</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="text-lg font-bold text-orange-700 mb-2">Desventajas</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Requiere reaplicaciones.</li>
                <li>Algunos productos son tóxicos.</li>
                <li>Puede alterar color o textura.</li>
                <li>Aumenta costo inicial.</li>
                <li>Eficacia depende de la aplicación.</li>
              </ul>
            </div>
          </div>

          {/* Imagen decorativa */}
          <div className="mt-6 flex justify-center">
            <img
              src="/images/Preventivo.jpg"
              alt="Tratamiento preventivo de la madera"
              className="rounded-xl shadow-md w-full max-w-2xl"
            />
          </div>
        </section>

        {/* Métodos */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brown-700 mb-3">Métodos de Aplicación</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Superficial:</strong> brocha o pulverización (penetración 1–3 mm).</li>
            <li><strong>Inmersión:</strong> baños en soluciones protectoras.</li>
            <li><strong>Vacío-presión (autoclave):</strong> máxima penetración, ideal para exteriores.</li>
            <li><strong>Difusión:</strong> sales solubles que penetran por capilaridad.</li>
          </ul>
        </section>

        {/* Tabla Especificaciones */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brown-700 mb-3">Especificaciones Técnicas</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="p-3 text-left">Parámetro</th>
                  <th className="p-3 text-left">Valor / Rango</th>
                  <th className="p-3 text-left">Unidad</th>
                  <th className="p-3 text-left">Comentarios</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="odd:bg-gray-100 even:bg-white hover:bg-green-50">
                  <td className="p-3">Profundidad de penetración</td>
                  <td className="p-3">2 – 20</td>
                  <td className="p-3">mm</td>
                  <td className="p-3">Según método</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-white hover:bg-green-50">
                  <td className="p-3">Concentración de sales</td>
                  <td className="p-3">1 – 5</td>
                  <td className="p-3">%</td>
                  <td className="p-3">Según fabricante</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-white hover:bg-green-50">
                  <td className="p-3">Retención de producto</td>
                  <td className="p-3">4 – 12</td>
                  <td className="p-3">kg/m³</td>
                  <td className="p-3">Mayor en exteriores</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-white hover:bg-green-50">
                  <td className="p-3">Durabilidad</td>
                  <td className="p-3">2 – 25</td>
                  <td className="p-3">años</td>
                  <td className="p-3">Autoclave = más duradero</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-white hover:bg-green-50">
                  <td className="p-3">Tipo de protección</td>
                  <td className="p-3">Fúngica, insecticida, hidrófuga</td>
                  <td className="p-3">–</td>
                  <td className="p-3">Puede ser combinada</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-white hover:bg-green-50">
                  <td className="p-3">Normas</td>
                  <td className="p-3">EN 335, EN 351, ASTM D1413, ISPM 15</td>
                  <td className="p-3">–</td>
                  <td className="p-3">Normas internacionales</td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-white hover:bg-green-50">
                  <td className="p-3">Seguridad</td>
                  <td className="p-3">Uso de EPP obligatorio</td>
                  <td className="p-3">–</td>
                  <td className="p-3">Algunos productos son tóxicos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Importancia */}
        <section>
          <h2 className="text-2xl font-semibold text-brown-700 mb-3">Importancia del Tratamiento Preventivo</h2>
          <p className="text-gray-700 leading-relaxed">
            La madera sin tratamiento es vulnerable a hongos, insectos y humedad.
            El tratamiento preventivo asegura sostenibilidad, cumplimiento normativo
            y competitividad frente a otros materiales, garantizando mayor durabilidad
            y seguridad en aplicaciones constructivas e industriales.
          </p>
        </section>
      </div>
    </div>
  );
}
