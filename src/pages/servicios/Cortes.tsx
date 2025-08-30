import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Ruler } from "lucide-react"; // Quitamos Scissors
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

// Importa tus imágenes (colócalas en /src/assets o /public)
import MaquinariaCorte from "@/assets/MaquinariaCorte.jpg";
import ImagenCepillado from "@/assets/Corte.jpg";
import ImagenMachihembrado from "@/assets/Machihembrado.jpg";

export default function Servicios() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-14 text-green-700">
        Nuestros Servicios
      </h1>

      {/* Corte y Cepillado */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="mb-12 shadow-lg rounded-2xl border border-gray-200">
          <CardHeader className="flex items-center space-x-3">
            <img src={MaquinariaCorte} alt="Maquinaria de corte" className="w-20 h-20 object-contain" />
            <CardTitle className="text-2xl">Corte y Cepillado</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Contamos con maquinaria de aserrío y cepillado de alta precisión,
              diseñada para procesar maderas con exactitud dimensional y un
              acabado uniforme. Garantizamos rapidez, optimización de recursos y
              máximo rendimiento.
            </p>

            {/* Imagen después del párrafo */}
            <img src={ImagenCepillado} alt="Corte y cepillado" className=" rounded-xl shadow-md" />

            <div>
              <h3 className="font-semibold text-lg mb-2 text-green-700">Longitudes comerciales</h3>
              <ul className="grid grid-cols-2 gap-2 pl-5 list-disc">
                <li>6’ = 1.80 m</li>
                <li>8’ = 2.50 m</li>
                <li>10’ = 3.00 m</li>
                <li>12’ = 3.50 m</li>
                <li>14’ = 4.20 m (excepcionales a pedido)</li>
                <li>15’ = 4.50 m o superiores <strong>(especiales)</strong></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-green-700">Modalidades de cepillado</h3>
              <ul className="space-y-2">
                <li>
                  <CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />
                  Listones: 1 cara, cara y canto, o 4 lados (±1 a 2 mm por lado).
                </li>
                <li>
                  <CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />
                  Tablas: 2 caras planas o 4 lados (con garlopeado en cantos, ±2 mm).
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-green-700">Beneficios</h3>
              <ul className="space-y-2">
                <li>
                  <CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />
                  Superficies lisas, listas para pintura, barniz o laminados.
                </li>
                <li>
                  <CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />
                  Medidas finales precisas para carpintería y ensamblaje.
                </li>
                <li>
                  <CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />
                  Mayor estabilidad dimensional y menor deformación.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Machihembrado y Traslapado */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="shadow-lg rounded-2xl border border-gray-200">
          <CardHeader className="flex items-center space-x-3">
            <Ruler className="w-8 h-8 text-green-600" />
            <CardTitle className="text-2xl">Machihembrado y Traslapado</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Ofrecemos el servicio de machihembrado y traslapado, ideales para pisos,
              cielos rasos, revestimientos y plataformas estructurales.
            </p>

            {/* Imagen después del párrafo */}
            <img src={ImagenMachihembrado} alt="Machihembrado y traslapado" className="w-full rounded-xl shadow-md" />

            <div>
              <h3 className="font-semibold text-lg mb-2 text-green-700">Machihembrado</h3>
              <p className="mb-2">Sistema macho–hembra para uniones sólidas y estéticas:</p>
              <ul className="space-y-1">
                <li>
                  <CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />
                  Perfil macho: lengüeta sobresaliente.
                </li>
                <li>
                  <CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />
                  Perfil hembra: canal receptor.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-green-700">Traslapado</h3>
              <p>
                Consiste en solapar los cantos de las tablas, recomendado para
                revestimientos interiores y exteriores, con buen comportamiento
                frente a cambios dimensionales.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-green-700">Ventajas</h3>
              <ul className="space-y-2">
                <li>
                  <CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />
                  Uniones resistentes y estéticas.
                </li>
                <li>
                  <CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />
                  Materiales listos para su uso.
                </li>
                <li>
                  <CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />
                  Optimización en carpintería y construcción.
                </li>
              </ul>
            </div>

            <p className="font-semibold text-green-700 text-center mt-6">
              ✅ Con estos servicios garantizamos precisión técnica, presentación óptima y
              máxima eficiencia en tus proyectos.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* CTA Final */}
      <div className="text-center mt-12">
        <p className="text-lg font-semibold text-gray-800">
          ¿Necesitas asesoría para tu proyecto?
        </p>
        <Link to="/contacto">
        <button className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-md transition">
          Contáctanos
        </button>
        </Link>
      </div>
    </div>
  );
}
