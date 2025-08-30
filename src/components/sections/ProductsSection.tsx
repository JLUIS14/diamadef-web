// src/components/sections/ProductSection.tsx


const products = [
  {
    name: "Tablones de Cedro",
    img: "/assets/cedro.jpg", // pon una imagen real o referencial
    desc: "Madera de alta calidad ideal para muebles finos y acabados.",
  },
  {
    name: "Vigas de Pino",
    img: "/assets/img1.jpg",
    desc: "Vigas resistentes para estructuras y techos.",
  },
  {
    name: "Tablas de Nogal",
    img: "/assets/img5.jpg",
    desc: "Perfectas para proyectos de carpintería y decoración.",
  },
  {
    name: "Listones de Roble",
    img: "/assets/roble.jpg",
    desc: "Durabilidad y elegancia en cada pieza.",
  },
];

export default function ProductsSection() {
  return (
    <section id="productos" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Nuestros Productos</h2>
        <p className="text-lg text-gray-700 mb-10">
          Calidad, variedad y garantía en productos de madera seleccionada.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((prod) => (
            <div key={prod.name} className="rounded-2xl shadow-lg p-4 bg-white hover:scale-105 transition">
              <img
                src={prod.img}
                alt={prod.name}
                className="w-full h-40 object-cover rounded-xl mb-3"
              />
              <h3 className="text-xl font-semibold text-green-800">{prod.name}</h3>
              <p className="text-gray-600">{prod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
