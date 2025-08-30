import { Card, CardContent } from "@/components/ui/card"

export default function Termico() {
  return (
    <div className="flex justify-center py-10 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-emerald-700">
          Tratamiento Térmico de la Madera
        </h1>

        {/* Definición */}
        <Card className="mb-8 shadow-lg rounded-2xl border border-emerald-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Definición</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              El tratamiento térmico de la madera es un proceso de modificación física mediante la
              aplicación controlada de calor en atmósferas especiales (aire, vapor, nitrógeno u
              otros), con temperaturas que varían entre 160 °C y 250 °C, cuyo objetivo es mejorar la
              estabilidad dimensional, resistencia biológica y durabilidad natural de la madera sin
              necesidad de productos químicos.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed text-justify">
              Este procedimiento cambia la composición química de la lignina, celulosa y
              hemicelulosa, reduciendo la higroscopicidad y aumentando la vida útil del material.
            </p>
          </CardContent>
        </Card>

        {/* Características Generales */}
        <Card className="mb-8 shadow-lg border-l-4 border-emerald-500">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">
              Características Generales
            </h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Proceso físico: No utiliza químicos, solo calor.",
                "Oscurecimiento natural: tonos marrón oscuro similares a maderas tropicales.",
                "Reducción de higroscopicidad: mejora estabilidad dimensional.",
                "Mayor durabilidad biológica: resistente a hongos, moho e insectos.",
                "Mejora estética: colores más homogéneos y aspecto premium.",
                "Fragilidad relativa: puede perder resistencia mecánica.",
                "Sostenible: proceso ecológico sin químicos tóxicos.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="p-3 rounded-lg bg-emerald-50"
                >
                  ✅ {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Usos Principales */}
        <Card className="mb-8 shadow-lg border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Usos Principales</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              {[
                "Construcción y carpintería: revestimientos, pisos, tableros.",
                "Muebles de exterior resistentes a la humedad.",
                "Decoración: paredes, techos, puertas, ventanas, escaleras.",
                "Ebanistería: sustituto de maderas tropicales de alto costo.",
                "Instrumentos musicales: guitarras, violines, pianos.",
                "Exterior y jardines: decks, pérgolas, mobiliario urbano.",
              ].map((uso, i) => (
                <li
                  key={i}
                  className="p-3 rounded-lg bg-blue-50"
                >
                   {uso}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Ventajas y Desventajas */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-lg border-t-4 border-green-500">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600"> Ventajas</h2>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Incrementa la durabilidad natural (Clase 1–2 según EN 350).",
                  "Resistente a ataques biológicos.",
                  "Estabilidad dimensional superior.",
                  "Mejora estética (color uniforme y oscuro).",
                  "Proceso ecológico, libre de químicos tóxicos.",
                ].map((v, i) => (
                  <li key={i} className="bg-green-50 p-2 rounded">{v}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-t-4 border-orange-500">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-orange-500">Desventajas</h2>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Puede reducir resistencia mecánica (5–20%).",
                  "Requiere equipos especializados de alto costo.",
                  "No puede revertirse (modificación permanente).",
                  "No protege contra rayos UV en exteriores (necesita acabado adicional).",
                ].map((d, i) => (
                  <li key={i} className="bg-red-50 p-2 rounded">{d}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Tabla de Especificaciones Técnicas */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">
              Especificaciones Técnicas del Tratamiento Térmico
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                <thead className="bg-orange-400 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Parámetro</th>
                    <th className="px-4 py-3 text-left">Valor / Rango</th>
                    <th className="px-4 py-3 text-left">Unidad</th>
                    <th className="px-4 py-3 text-left">Comentarios</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    ["Rango de temperatura", "160 – 250", "°C", "Según especie y uso final"],
                    ["Tiempo de exposición", "2 – 8", "horas", "Depende del grosor y método"],
                    ["Atmósfera de tratamiento", "Aire, vapor, nitrógeno", "–", "Evita combustión y oxidación"],
                    ["Contenido de humedad final", "4 – 6", "%", "Muy bajo comparado con 12–18 % natural"],
                    ["Color resultante", "Marrón claro a oscuro", "–", "Homogéneo, similar a tropicales"],
                    ["Estabilidad dimensional", "+40 – 70 % mejora", "–", "Frente a madera no tratada"],
                    ["Durabilidad biológica", "Clase 1–2 (EN 350)", "–", "Equivalente a maderas resistentes"],
                    ["Pérdida de resistencia mecánica", "5 – 20 %", "–", "Principalmente en flexión y tracción"],
                    ["Vida útil estimada", "20 – 35", "años", "En condiciones normales"],
                    ["Normas aplicables", "EN 350, EN 335, ISO 21887", "–", "Referencias internacionales"],
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3 text-gray-700">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
