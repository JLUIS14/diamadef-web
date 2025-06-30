import {
  FaMedal,
  FaLeaf,
  FaTools,
  FaHandshake,
  FaUserCheck,
  FaClock
} from "react-icons/fa";

const values = [
  {
    icon: <FaMedal className="text-yellow-500 text-4xl mb-2" />,
    title: "Calidad Garantizada",
    desc: "Materiales y acabados de alto estándar.",
  },
  {
    icon: <FaLeaf className="text-green-700 text-4xl mb-2" />,
    title: "Sostenibilidad",
    desc: "Comprometidos con el planeta en cada proyecto.",
  },
  {
    icon: <FaTools className="text-orange-500 text-4xl mb-2" />,
    title: "Innovación",
    desc: "Soluciones adaptadas a tus necesidades.",
  },
  {
    icon: <FaHandshake className="text-orange-700 text-4xl mb-2" />,
    title: "Compromiso",
    desc: "Nos enfocamos en la satisfacción del cliente.",
  },
  {
    icon: <FaUserCheck className="text-blue-800 text-4xl mb-2" />, // Azul oscuro para respeto
    title: "Respeto",
    desc: "Valoramos a las personas y sus ideas, construimos confianza.",
  },
  {
    icon: <FaClock className="text-blue-500 text-4xl mb-2" />,
    title: "Puntualidad",
    desc: "Cumplimos con los plazos de entrega.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-green-900 mb-8 text-center tracking-wide">
          Nuestros Principios
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {values.map((v, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transition border"
            >
              {v.icon}
              <h4 className="font-semibold text-lg mb-1 text-green-900">{v.title}</h4>
              <p className="text-sm text-gray-700 text-center">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
